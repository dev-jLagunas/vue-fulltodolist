<script setup>
import { useTodoListStore } from "@/stores/todo-list";

// STORE
const todoListStore = useTodoListStore();
</script>

<template>
  <div class="border-2 flex justify-between">
    <!-- Directly call store's setFilter method on button click -->
    <button @click="todoListStore.setFilter('all')">All</button>
    <button @click="todoListStore.setFilter('active')">Active</button>
    <button @click="todoListStore.setFilter('completed')">Completed</button>
  </div>
</template>
