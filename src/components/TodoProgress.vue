<script setup>
import { computed } from "vue";
import { useTodoListStore } from "@/stores/todo-list";

// STORE
const todoListStore = useTodoListStore();

// COMPUTED
const totalTasks = computed(() => todoListStore.todoList.length);
const completedTasks = computed(
  () => todoListStore.todoList.filter((task) => task.isCompleted).length
);

// Log values to check
console.log("Total tasks:", totalTasks.value);
console.log("Completed tasks:", completedTasks.value);
</script>

<template>
  <article
    class="p-4 space-y-2 dark:text-slate-50 my-4 border-b border-dotted border-slate-500"
  >
    <h3 class="text-base text-slate-800 dark:text-slate-50">Progress Bar</h3>
    <div class="flex flex-wrap gap-2">
      <span
        v-for="(task, index) in totalTasks"
        :key="index"
        :class="{
          'w-10 h-3 rounded-sm bg-cyan-600': index < completedTasks,
          'w-10 h-3 rounded-sm bg-transparent border border-slate-500':
            index >= completedTasks,
        }"
      ></span>
    </div>
  </article>
</template>
