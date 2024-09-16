<script setup>
import { computed } from "vue";
import { useDark } from "@vueuse/core";
import { useTodoListStore } from "@/stores/todo-list";
import { useUserAuthStore } from "@/stores/user-auth";

const isDark = useDark();

// STORES
const todoListStore = useTodoListStore();
const userAuthStore = useUserAuthStore();

// METHODS
const handleAuthAction = () => {
  if (userAuthStore.user) {
    userAuthStore.logout();
  } else {
    userAuthStore.openLoginModal();
  }
};

// COMPUTED
const headerText = computed(() => {
  return todoListStore.currentMode === "todo"
    ? "Today's Todo List"
    : "Today's Shopping List";
});
</script>

<template>
  <header
    class="px-2 flex justify-between items-center flex-col py-2 mt-8 rounded-md text-slate-800 dark:text-slate-50"
  >
    <div class="absolute top-2 right-3">
      <button @click="handleAuthAction">
        {{ userAuthStore.user ? "Logout" : "Login"
        }}<i class="fa-solid fa-right-to-bracket pl-2"></i>
      </button>
    </div>
    <h1 class="font-bold tracking-widest text-4xl text-center mb-4">
      {{ headerText }}
    </h1>

    <label
      for="Toggle1"
      class="inline-flex items-center space-x-4 cursor-pointer"
    >
      <span>Light</span>
      <span class="relative">
        <input
          id="Toggle1"
          type="checkbox"
          class="hidden peer"
          v-model="isDark"
        />
        <div
          class="w-10 h-6 rounded-full shadow-inner dark:bg-slate-100 bg-slate-700"
        ></div>
        <div
          class="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-blue-800 bg-orange-600"
        ></div>
      </span>
      <span>Dark</span>
    </label>
    <div
      class="flex divide-x rounded text-slate-800 dark:text-slate-100 divide-slate-500 mt-4 border border-slate-500 text-sm"
    >
      <button
        type="button"
        class="px-3 py-1 hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-50 dark:hover:text-slate-800 duration-500"
        @click="todoListStore.setMode('todo')"
        aria-label="View todo list"
      >
        <i class="fa-solid fa-list-ul"></i>
      </button>
      <button
        type="button"
        class="px-3 py-1 hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-50 dark:hover:text-slate-800 duration-500"
        @click="todoListStore.setMode('shopping')"
        aria-label="View shopping list"
      >
        <i class="fa-solid fa-cart-shopping"></i>
      </button>
    </div>
  </header>
</template>

<style scoped></style>
