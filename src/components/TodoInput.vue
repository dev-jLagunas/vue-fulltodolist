<script setup>
import { ref } from "vue";
import { useTodoListStore } from "@/stores/todo-list";

// REFS
const taskText = ref("");
const priorityLevel = ref("mandatory");

// STORE
const todoListStore = useTodoListStore();

// METHODS
const addTask = () => {
  if (taskText.value.trim() && priorityLevel.value) {
    todoListStore.addTodoItem(taskText.value, priorityLevel.value);
    taskText.value = "";
    priorityLevel.value = "mandatory";
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
        class="bg-orange-400 text-slate-50 px-4 dark:bg-blue-800 rounded-r-sm text-sm"
        @click="addTask"
      >
        Add
      </button>
    </div>
    <fieldset class="flex justify-evenly items-center text-sm pt-2 text-center">
      <label for="mandatory">
        <input
          type="radio"
          id="mandatory"
          name="priority"
          value="mandatory"
          v-model="priorityLevel"
        />
        Mandatory
      </label>
      <label for="important">
        <input
          type="radio"
          id="important"
          name="priority"
          value="important"
          v-model="priorityLevel"
        />
        Important
      </label>
      <label for="optional">
        <input
          type="radio"
          id="optional"
          name="priority"
          value="optional"
          v-model="priorityLevel"
        />
        Optional
      </label>
    </fieldset>
  </fieldset>
</template>

<style scoped></style>
