<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDarkMode = useToggle(isDark);
</script>

<template>
  <header
    class="px-2 flex justify-between items-center flex-col py-2 mt-4 rounded-md text-slate-800 dark:text-slate-50"
  >
    <h1 class="font-bold tracking-widest text-4xl text-center mb-4">
      Daily Todo List
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
          class="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-blue-800 bg-orange-400"
        ></div>
      </span>
      <span>Dark</span>
    </label>
  </header>
</template>

<style scoped></style>
