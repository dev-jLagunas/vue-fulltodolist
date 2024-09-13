import { defineStore } from "pinia";

export const useUserAuthStore = defineStore("userAuth", {
  state: () => ({
    isModalVisible: false,
  }),

  getters: {},

  actions: {
    openLoginModal() {
      this.isModalVisible = true;
    },

    closeLoginModal() {
      this.isModalVisible = false;
    },
  },
});
