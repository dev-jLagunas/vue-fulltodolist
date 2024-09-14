import { defineStore } from "pinia";
import { useTodoListStore } from "./todo-list";

export const useTimeChallengeStore = defineStore("timeChallenge", {
  state: () => ({
    isModalVisible: false,
    activeChallenge: null, // Only one active challenge
    timeRemaining: null,
    intervalId: null,
    progress: 0,
    totalPoints: 0, // Points stored here
  }),

  actions: {
    // Load challenges and points from local storage
    loadFromLocalStorage() {
      const savedChallenge = localStorage.getItem("activeChallenge");
      this.activeChallenge = savedChallenge ? JSON.parse(savedChallenge) : null;

      const savedPoints = localStorage.getItem("totalPoints");
      this.totalPoints = savedPoints ? JSON.parse(savedPoints) : 0;
    },

    // Save current state to local storage
    saveToLocalStorage() {
      localStorage.setItem(
        "activeChallenge",
        JSON.stringify(this.activeChallenge)
      );
      localStorage.setItem("totalPoints", JSON.stringify(this.totalPoints));
    },

    // Open and close modal
    openModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },

    // Start a new time challenge
    startChallenge(selectedTask, selectedTimeLimit) {
      this.activeChallenge = {
        taskId: selectedTask.id,
        taskText: selectedTask.taskText,
        timeLimit: selectedTimeLimit,
        startTime: new Date().toISOString(),
        status: "in progress",
      };
      this.saveToLocalStorage();
      this.startCountdown();
    },

    // Countdown logic
    startCountdown() {
      const challenge = this.activeChallenge;
      const endTime = new Date(challenge.startTime);
      endTime.setMinutes(endTime.getMinutes() + challenge.timeLimit);
      const totalTime = challenge.timeLimit * 60 * 1000;

      this.intervalId = setInterval(() => {
        const currentTime = new Date();
        const remainingTime = endTime - currentTime;

        if (remainingTime <= 0) {
          this.timeRemaining = "00:00";
          this.progress = 100;
          this.completeChallenge("timeout");
        } else {
          const minutes = Math.floor(remainingTime / 1000 / 60);
          const seconds = Math.floor((remainingTime / 1000) % 60);

          this.timeRemaining = `${String(minutes).padStart(2, "0")}:${String(
            seconds
          ).padStart(2, "0")}`;
          const elapsed = totalTime - remainingTime;
          this.progress = (elapsed / totalTime) * 100;
        }
      }, 1000);
    },

    // Mark challenge as completed or failed
    completeChallenge(outcome) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      const todoListStore = useTodoListStore();

      // Award or deduct points based on outcome
      if (outcome === "success") {
        this.totalPoints += 25; // Flat 25 points for successful completion
      } else if (outcome === "canceled" || outcome === "timeout") {
        this.totalPoints -= 50; // Subtract 50 points for cancel or timeout
      }

      // Reset active challenge
      todoListStore.setSelectedTaskForChallenge(null);
      todoListStore.setSelectedTaskForChallenge(null);
      this.activeChallenge = null;
      this.timeRemaining = null;
      this.progress = 0;

      this.saveToLocalStorage();
    },

    // Cancel the current challenge
    cancelChallenge() {
      this.completeChallenge("canceled");
    },

    // Clear all points and challenges (for example, if the user clears all tasks)
    clearAllPoints() {
      this.totalPoints = 0;
      this.activeChallenge = null;
      this.timeRemaining = null;
      this.progress = 0;
      this.saveToLocalStorage();
    },

    // Clear countdown if necessary
    clearCountdown() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    },
  },
});
