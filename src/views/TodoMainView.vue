<script setup>
import TodoHeader from "@/components/TodoHeader.vue";
import TodoInput from "@/components/TodoInput.vue";
import TodoList from "@/components/TodoList.vue";
import TodoFilter from "@/components/TodoFilter.vue";
import TodoDate from "@/components/TodoDate.vue";
</script>

<template>
  <div
    class="border-2 border-slate-600 dark:border-slate-500 rounded-md mt-4 md:w-4/3 md:mx-auto relative"
  >
    <TodoDate />
    <TodoHeader />
    <TodoInput />
  </div>
  <main
    class="border-2 border-slate-600 dark:border-slate-500 rounded-md mt-4 md:w-4/3 md:mx-auto"
  >
    <TodoList />
    <TodoFilter />
  </main>
</template>
