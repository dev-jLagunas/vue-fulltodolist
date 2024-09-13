<script setup>
import { ref } from "vue";
import { useUserAuthStore } from "@/stores/user-auth";

// STORE
const userAuthStore = useUserAuthStore();

// REFS
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const isSigningUp = ref(false);

// METHODS
const handleLogin = () => {
  console.log("Email:", email.value); // Log email
  console.log("Password:", password.value); // Log password
  userAuthStore.login(email.value, password.value);
};

const handleSignup = () => {
  if (password.value === confirmPassword.value) {
    userAuthStore.signup(email.value, password.value);
  } else {
    console.error("Passwords do not match");
  }
};

const useAsGuest = () => {
  if (userAuthStore.user) {
    userAuthStore.logout();
  }

  userAuthStore.closeLoginModal();
};
</script>

<template>
  <div
    class="fixed inset-0 bg-slate-600 bg-opacity-50 flex justify-center items-center z-10"
    aria-labelledby="auth-heading"
    aria-modal="true"
    role="dialog"
  >
    <article
      class="bg-slate-50 text-slate-800 dark:bg-slate-800 dark:text-slate-50 px-4 py-8 rounded-md h-max w-5/6 md:w-1/2 lg:w-1/3"
    >
      <div class="flex justify-between items-center md:text-2xl">
        <h2 id="auth-heading" v-if="!isSigningUp">Login to Your Account</h2>
        <h2 id="auth-heading" v-else>Sign Up for a New Account</h2>
        <button
          @click="userAuthStore.closeLoginModal"
          class="text-red-500 font-bold text-4xl"
        >
          X
        </button>
      </div>

      <!-- Login Form -->
      <form
        v-if="!isSigningUp"
        @submit.prevent="handleLogin"
        class="mt-4 text-slate-800 dark:text-slate-50"
      >
        <label for="email-login" class="block">Email</label>
        <input
          id="email-login"
          type="email"
          placeholder="joe_mama@example.com"
          class="mt-1 block w-full rounded-sm pl-2 py-1 bg-slate-800 text-slate-50 dark:bg-slate-50 dark:text-slate-800"
          aria-required="true"
          v-model="email"
          required
        />

        <label for="password-login" class="block mt-4">Password</label>
        <input
          id="password-login"
          type="password"
          placeholder="********"
          class="mt-1 block w-full rounded-sm pl-2 py-1 bg-slate-800 text-slate-50 dark:bg-slate-50 dark:text-slate-800"
          aria-required="true"
          v-model="password"
          required
        />
        <div class="mx-auto w-max">
          <button
            type="submit"
            class="mt-6 px-4 rounded-sm text-slate-800 border border-slate-800 dark:text-slate-50 dark:border-slate-50"
          >
            Login
          </button>
        </div>
      </form>

      <!-- Sign Up Form -->
      <form
        v-else
        @submit.prevent="handleSignup"
        class="mt-4 text-slate-800 dark:text-slate-50"
      >
        <label for="email-signup" class="block">Email</label>
        <input
          id="email-signup"
          type="email"
          placeholder="joe_mama@example.com"
          class="mt-1 block w-full rounded-sm pl-2 py-1 bg-slate-800 text-slate-50 dark:bg-slate-50 dark:text-slate-800"
          aria-required="true"
          v-model="email"
          required
        />

        <label for="password-signup" class="block mt-4">Password</label>
        <input
          id="password-signup"
          type="password"
          placeholder="........"
          class="mt-1 block w-full rounded-sm pl-2 py-1 bg-slate-800 text-slate-50 dark:bg-slate-50 dark:text-slate-800"
          aria-required="true"
          v-model="password"
          required
        />

        <label for="confirm-password-signup" class="block mt-4"
          >Confirm Password</label
        >
        <input
          id="confirm-password-signup"
          type="password"
          placeholder="********"
          class="mt-1 block w-full rounded-sm pl-2 py-1 bg-slate-800 text-slate-50 dark:bg-slate-50 dark:text-slate-800"
          aria-required="true"
          v-model="confirmPassword"
          required
        />

        <div class="mx-auto w-max">
          <button
            type="submit"
            class="mt-6 px-4 rounded-sm text-slate-800 border border-slate-800 dark:text-slate-50 dark:border-slate-50"
          >
            Signup
          </button>
        </div>
      </form>

      <!-- Toggle between login and sign up -->
      <button
        @click="isSigningUp = !isSigningUp"
        class="mt-4 w-full text-cyan-600"
      >
        {{
          isSigningUp
            ? "Already have an account? Login"
            : "Don’t have an account? Sign up"
        }}
      </button>
      <button
        class="mt-4 w-full underline underline-offset-4 text-sm"
        @click="useAsGuest"
      >
        Use as a guest
      </button>
    </article>
  </div>
</template>
<style scoped></style>
