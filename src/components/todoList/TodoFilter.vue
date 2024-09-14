<script setup>
import { computed } from "vue";
import { useTodoListStore } from "@/stores/todo-list";

// STORE
const todoListStore = useTodoListStore();

// COMPUTED
const activeText = computed(() => {
  return todoListStore.currentMode === "todo" ? "Active" : "Unpurchased";
});

const completedText = computed(() => {
  return todoListStore.currentMode === "todo" ? "Completed" : "Purchased";
});
</script>

<template>
  <div
    class="text-slate-800 dark:text-slate-50 grid grid-cols-2 gap-2 sm:flex sm:justify-evenly sm:items-center py-2 px-4 border-t border-dotted border-slate-600"
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
      {{ activeText }}
    </button>
    <button
      @click="todoListStore.setFilter('completed')"
      class="before:bg-orange-400 dark:before:bg-blue-800"
    >
      {{ completedText }}
    </button>
    <select
      name="sort-select"
      id="sort-select"
      class="bg-slate-800 text-slate-50 dark:bg-slate-50 dark:text-slate-800 text-sm py-1 rounded-sm px-1"
      v-model="todoListStore.sortOrder"
      @change="todoListStore.setSortOrder($event.target.value)"
    >
      <option value="" disabled selected>Sort By:</option>
      <option value="mandatory-first">Mandatory First</option>
      <option value="optional-first">Optional First</option>
    </select>
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
