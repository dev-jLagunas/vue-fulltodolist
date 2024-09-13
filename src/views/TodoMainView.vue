<script setup>
import TodoHeader from "@/components/todoList/TodoHeader.vue";
import TodoInput from "@/components/todoList/TodoInput.vue";
import TodoList from "@/components/todoList/TodoList.vue";
import TodoFilter from "@/components/todoList/TodoFilter.vue";
import TodoDate from "@/components/todoList/TodoDate.vue";
import TodoHeadings from "@/components/todoList/TodoHeadings.vue";
import TodoProgress from "@/components/todoList/TodoProgress.vue";
import UserName from "@/components/user/UserName.vue";
import UserLogin from "@/components/user/UserLoginModal.vue";
import { useUserAuthStore } from "@/stores/user-auth";

// STORE
const userAuthStore = useUserAuthStore();
userAuthStore.loadUserFromLocalStorage();
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
  <UserLogin
    v-if="userAuthStore.isModalVisible"
    @close="userAuthStore.closeModal"
  />
</template>
