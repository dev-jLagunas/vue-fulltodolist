import { defineStore } from "pinia";

export const useTimeChallengeStore = defineStore("timeChallenge", {
  state: () => ({
    isModalVisible: false,
    timeChallenges: [],
    timeRemaining: null,
    intervalId: null,
    progress: 0,
  }),
  getters: {},
  actions: {
    openModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },

    addTimeChallenge(timeChallenge) {
      this.timeChallenges.push(timeChallenge);
    },

    startCountdown(activeChallenge) {
      if (!activeChallenge) {
        return;
      }

      const endTime = new Date(activeChallenge.startTime);
      endTime.setMinutes(endTime.getMinutes() + activeChallenge.timeLimit);

      const totalTime = activeChallenge.timeLimit * 60 * 1000;

      this.intervalId = setInterval(() => {
        const currentTime = new Date();
        const remainingTime = endTime - currentTime;

        if (remainingTime <= 0) {
          this.timeRemaining = "00:00";
          this.progress = 100;
          clearInterval(this.intervalId);
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

    getProgress() {
      return this.progress;
    },

    clearCountdown() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    },

    clearTimeChallenges() {
      this.timeChallenges = [];
    },
  },
});
