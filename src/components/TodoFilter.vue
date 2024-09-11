<script setup>
import { useTodoListStore } from "@/stores/todo-list";

// STORE
const todoListStore = useTodoListStore();
</script>

<template>
  <div
    class="text-slate-800 dark:text-slate-50 flex justify-evenly items-center py-2 px-4 border-t border-dotted border-slate-600"
  >
    <button
      @click="todoListStore.setFilter('all')"
      class="before:bg-orange-400 dark:before:bg-blue-800"
    >
      All
    </button>
    <button
      @click="todoListStore.setFilter('active')"
      class="before:bg-orange-400 dark:before:bg-blue-800"
    >
      Active
    </button>
    <button
      @click="todoListStore.setFilter('completed')"
      class="before:bg-orange-400 dark:before:bg-blue-800"
    >
      Completed
    </button>
  </div>
</template>

<style>
button {
  position: relative;
}

button::before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 100%;
  height: 2px;
  transform-origin: center;
  transform: translate(-50%, 0) scaleX(0);
  transition: transform 0.3s ease-in-out;
}

button:hover::before {
  transform: translate(-50%, 0) scaleX(1);
}
</style>
