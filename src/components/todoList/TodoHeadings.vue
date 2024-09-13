<script setup>
import { ref } from "vue";
import { useTodoListStore } from "@/stores/todo-list";
import TodoDeleteModal from "./TodoDeleteModal.vue";
import { useToast } from "vue-toastification";

const toast = useToast();
const displayMsg = "Do you really want to delete all tasks?";
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
    <p
      class="text-slate-800 dark:text-slate-50 pl-5 text-sm underline underline-offset-4"
    >
      Done
    </p>
    <div class="relative flex flex-col items-center justify-center mt-4">
      <p
        class="text-slate-50 dark:text-slate-50 px-14 sm:px-48 py-3 rounded-sm bg-slate-800 duration-700 btn-shadow"
      >
        Tasks
      </p>
      <button
        class="bg-red-500 text-slate-50 px-3 rounded-sm text-sm hover:scale-125 duration-700 -mt-2 btn-shadow"
        @click="showHideModal"
      >
        Start Fresh
      </button>
    </div>
    <p
      class="text-slate-800 dark:text-slate-50 pr-5 text-sm underline underline-offset-4"
    >
      Actions
    </p>

    <TodoDeleteModal
      :isVisible="isModalVisible"
      :displayMsg="displayMsg"
      @confirm="confirmDeleteAll"
      @cancel="showHideModal"
    />
  </section>
</template>

<style scoped>
.btn-shadow {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>
