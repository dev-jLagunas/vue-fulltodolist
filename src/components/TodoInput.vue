<script setup>
import { ref } from "vue";
import { useTodoListStore } from "@/stores/todo-list";

// REFS
const taskText = ref("");

// STORE
const todoListStore = useTodoListStore();

// METHODS
const addTask = () => {
  if (taskText.value.trim()) {
    todoListStore.addTodoItem(taskText.value);
    taskText.value = "";
  }
};
</script>

<template>
  <fieldset
    class="w-4/5 space-y-1 mx-auto text-slate-800 dark:text-slate-50 mb-4 md:w-1/2"
  >
    <label for="url" class="block text-sm">Todo Task</label>
    <div class="flex">
      <input
        type="text"
        name="task-text"
        id="task-text"
        placeholder="Add a todo item"
        class="flex flex-1 text-xs py-2 px-2 text-slate-50 rounded-l-sm focus:outline-1 focus:outline-red-200 dark:text-slate-800 bg-slate-800 dark:bg-slate-50"
        v-model="taskText"
        @keyup.enter="addTask"
      />
      <button
        class="text-slate-800 dark:bg-transparent before:bg-orange-400 dark:before:bg-blue-800 rounded-r-sm h-full dark:text-slate-50"
        @click="addTask"
      >
        Add
      </button>
    </div>
  </fieldset>
</template>

<style scoped>
button {
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  overflow: hidden;
  transition: color 0.4s ease-in-out;
}

button::before {
  content: "";
  z-index: -1;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  transform-origin: center;
  transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0);
  transition: transform 0.45s ease-in-out;
}

button:hover {
  cursor: pointer;
}

button:hover::before {
  transform: translate3d(-50%, -50%, 0) scale3d(15, 15, 15);
}
</style>
