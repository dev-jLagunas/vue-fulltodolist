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
</script>

<template>
  <article
    class="px-4 pb-4 space-y-2 dark:text-slate-50 my-4 border-b border-dotted border-slate-500"
  >
    <div class="flex justify-between items-center">
      <h3
        class="text-base text-slate-800 dark:text-slate-50 flex justify-between"
      >
        Progress Bar
      </h3>
      <p class="font-bold text-lg">
        {{ completedTasks }} <span class="font-light text-base">Done</span>
      </p>
    </div>

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
