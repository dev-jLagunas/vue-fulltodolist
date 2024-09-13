<script setup>
import TodoHeader from "@/components/TodoHeader.vue";
import TodoInput from "@/components/TodoInput.vue";
import TodoList from "@/components/TodoList.vue";
import TodoFilter from "@/components/TodoFilter.vue";
import TodoDate from "@/components/TodoDate.vue";
import TodoHeadings from "@/components/TodoHeadings.vue";
import TodoProgress from "@/components/TodoProgress.vue";
import UserName from "@/components/UserName.vue";
</script>

<template>
  <div
    class="border-2 border-slate-600 dark:border-slate-500 rounded-md mt-4 md:w-4/3 lg:w-2/3 md:mx-auto relative"
  >
    <TodoDate />
    <TodoHeader />
    <TodoInput />
  </div>
  <UserName />
  <main
    class="border-2 border-slate-600 dark:border-slate-500 rounded-md mt-4 md:w-4/3 lg:w-2/3 md:mx-auto"
  >
    <TodoProgress />
    <TodoHeadings />
    <TodoList />
    <TodoFilter />
  </main>
</template>
