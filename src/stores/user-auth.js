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

    saveUserToLocalStorage() {
      if (this.user) {
        localStorage.setItem("user", JSON.stringify(this.user));
      } else {
        localStorage.removeItem("user");
      }
    },

    loadUserFromLocalStorage() {
      const savedUser = JSON.parse(localStorage.getItem("user"));
      if (savedUser) {
        this.user = savedUser;
      }
    },

    async login(email, password) {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        this.user = userCredential.user;
        this.saveUserToLocalStorage();
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
        this.saveUserToLocalStorage();
        this.closeLoginModal();
      } catch (error) {
        console.error("Signup error:", error);
      }
    },

    async logout() {
      try {
        await signOut(auth);
        this.user = null;
        this.saveUserToLocalStorage();
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
