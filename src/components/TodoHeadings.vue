<script setup>
import { ref } from "vue";
import { useTodoListStore } from "@/stores/todo-list";
import TodoDeleteModal from "./TodoDeleteModal.vue";
import { useToast } from "vue-toastification";

const toast = useToast();

// REFS
const isModalVisible = ref(false);

// METHODS
const showHideModal = () => {
  if (!todoListStore.todoList.length) {
    toast.warning("List Already Empty");
  } else {
    isModalVisible.value = !isModalVisible.value;
  }
};

const confirmDeleteAll = () => {
  todoListStore.deleteAllTasks();
  isModalVisible.value = false;
};

// STORE
const todoListStore = useTodoListStore();
</script>

<template>
  <section class="mt-4 flex justify-between items-center relative">
    <button
      class="text-slate-800 dark:text-slate-50 pl-5 text-sm underline underline-offset-4 side-btn"
    >
      Done
    </button>
    <div class="relative flex flex-col items-center justify-center">
      <p
        class="text-slate-50 dark:text-slate-50 px-14 sm:px-32 py-3 rounded-sm bg-slate-800"
      >
        Tasks
      </p>
      <button
        class="bg-red-500 text-slate-50 px-3 rounded-sm text-sm hover:scale-125 duration-700 -mt-2"
        @click="showHideModal"
      >
        Start Fresh
      </button>
    </div>
    <button
      class="text-slate-800 dark:text-slate-50 pr-5 text-sm underline underline-offset-4 side-btn"
    >
      Actions
    </button>

    <TodoDeleteModal
      :isVisible="isModalVisible"
      @confirm="confirmDeleteAll"
      @cancel="showHideModal"
    />
  </section>
</template>

<style scoped>
.task-btn {
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}
</style>
