import { defineStore } from "pinia";

export const useTimeChallengeStore = defineStore("timeChallenge", {
  state: () => ({
    isModalVisible: false,
    timeChallenges: [],
    timeRemaining: null,
    intervalId: null,
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

      this.intervalId = setInterval(() => {
        const currentTime = new Date();
        const remainingTime = endTime - currentTime;

        if (remainingTime <= 0) {
          this.timeRemaining = "00:00";
          clearInterval(this.intervalId);
        } else {
          const minutes = Math.floor(remainingTime / 1000 / 60);
          const seconds = Math.floor((remainingTime / 1000) % 60);

          this.timeRemaining = `${String(minutes).padStart(2, "0")}:${String(
            seconds
          ).padStart(2, "0")}`;
        }
      }, 1000);
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
