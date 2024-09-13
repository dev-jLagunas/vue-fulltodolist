import { defineStore } from "pinia";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "@/firebaseConfig";

export const useUserAuthStore = defineStore("userAuth", {
  state: () => ({
    isModalVisible: false,
    user: null,
  }),

  getters: {},

  actions: {
    openLoginModal() {
      this.isModalVisible = true;
    },

    closeLoginModal() {
      this.isModalVisible = false;
    },

    async login(email, password) {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        this.user = userCredential.user;
        this.closeLoginModal();
      } catch (error) {
        console.error("Login error:", error);
      }
    },

    async signup(email, password) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        this.user = userCredential.user;
        this.closeLoginModal();
      } catch (error) {
        console.error("Signup error:", error);
      }
    },

    async logout() {
      try {
        await signOut(auth);
        this.user = null;
      } catch (error) {
        console.error("Logout error:", error);
      }
    },

    async checkAuthState() {
      auth.onAuthStateChanged((user) => {
        if (user) {
          this.user = user;
        } else {
          this.user = null;
        }
      });
    },
  },
});
