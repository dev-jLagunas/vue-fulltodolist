import { defineStore } from "pinia";
import { useTodoListStore } from "./todo-list";

export const useTimeChallengeStore = defineStore("timeChallenge", {
  state: () => ({
    isModalVisible: false,
    activeChallenge: null,
    timeRemaining: null,
    intervalId: null,
    progress: 0,
    totalPoints: 0,
    outcomeMessage: "",
  }),

  actions: {
    loadFromLocalStorage() {
      const savedChallenge = localStorage.getItem("activeChallenge");
      this.activeChallenge = savedChallenge ? JSON.parse(savedChallenge) : null;

      const savedPoints = localStorage.getItem("totalPoints");
      this.totalPoints = savedPoints ? JSON.parse(savedPoints) : 0;
    },

    saveToLocalStorage() {
      localStorage.setItem(
        "activeChallenge",
        JSON.stringify(this.activeChallenge)
      );
      localStorage.setItem("totalPoints", JSON.stringify(this.totalPoints));
    },

    openModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },

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

    completeChallenge(outcome) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      const todoListStore = useTodoListStore();

      if (outcome === "success") {
        this.totalPoints += 25;
        this.outcomeMessage = "You did it! Here are 25 points";
      } else if (outcome === "canceled" || outcome === "timeout") {
        this.totalPoints -= 50;
        this.outcomeMessage = "Too bad, minus 50 points";
      }

      this.clearOutcomeMessage();

      todoListStore.setSelectedTaskForChallenge(null);
      this.activeChallenge = null;
      this.timeRemaining = null;
      this.progress = 0;

      this.saveToLocalStorage();
    },

    cancelChallenge() {
      this.completeChallenge("canceled");
    },

    clearAllPoints() {
      this.totalPoints = 0;
      this.activeChallenge = null;
      this.timeRemaining = null;
      this.progress = 0;
      this.saveToLocalStorage();
    },

    clearCountdown() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    },

    clearOutcomeMessage() {
      setTimeout(() => {
        this.outcomeMessage = "";
      }, 5000);
    },
  },
});
