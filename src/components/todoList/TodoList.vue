<script setup>
import { computed, onMounted, ref } from "vue";
import { useTodoListStore } from "@/stores/todo-list";
import TodoDeleteModal from "./TodoDeleteModal.vue";

// REFS
const isModalVisible = ref(false);
const selectedTaskId = ref(null);

// MOUNTED
onMounted(() => {
  todoListStore.loadFromLocalStorage();
  todoListStore.loadSortOrder();
});

// STORE
const todoListStore = useTodoListStore();

// METHODS
const showHideModal = (taskId = null) => {
  selectedTaskId.value = taskId;
  isModalVisible.value = !isModalVisible.value;
};

const confirmDeleteTask = () => {
  if (selectedTaskId.value) {
    todoListStore.deleteTodoItem(selectedTaskId.value);
  }
  showHideModal();
};

// COMPUTED
const isTodoListEmpty = computed(() => !todoListStore.todoList.length);
const remainingItems = computed(
  () => todoListStore.todoList.filter((task) => !task.isCompleted).length
);

const hasCompletedItems = computed(() =>
  todoListStore.todoList.some((task) => task.isCompleted)
);

const sortedAndFilteredTasks = computed(() => {
  const filtered = todoListStore.filteredTodoList;
  return filtered.sort((a, b) => {
    const priorityOrder = { mandatory: 1, important: 2, optional: 3 };
    if (todoListStore.sortOrder === "mandatory-first") {
      return priorityOrder[a.priorityLevel] - priorityOrder[b.priorityLevel];
    } else if (todoListStore.sortOrder === "optional-first") {
      return priorityOrder[b.priorityLevel] - priorityOrder[a.priorityLevel];
    }
    return 0;
  });
});

const isCompletedListEmpty = computed(
  () =>
    todoListStore.filter === "completed" &&
    !todoListStore.todoList.some((task) => task.isCompleted)
);

const isActiveListEmpty = computed(
  () =>
    todoListStore.filter === "active" &&
    !todoListStore.todoList.some((task) => !task.isCompleted)
);
</script>

<template>
  <article class="text-slate-800 dark:text-slate-50">
    <p v-if="isTodoListEmpty" class="text-center text-lg mt-4">List is empty</p>
    <p v-else-if="isCompletedListEmpty" class="text-center text-lg mt-4">
      No completed tasks yet
    </p>
    <p v-else-if="isActiveListEmpty" class="text-center text-lg mt-4">
      Active list is empty
    </p>
    <ul v-else class="py-4">
      <li
        v-for="task in sortedAndFilteredTasks"
        :key="task.id"
        class="flex justify-between items-center px-4 border-b border-dotted border-b-slate-300 mt-2"
      >
        <div class="flex items-center justify-center gap-2">
          <span
            :class="{
              'text-red-500': task.priorityLevel === 'mandatory',
              'text-yellow-500': task.priorityLevel === 'important',
              'text-green-500': task.priorityLevel === 'optional',
            }"
          >
            <i class="fa-solid fa-circle-exclamation text-xs"></i>
          </span>
          <input
            type="checkbox"
            :checked="task.isCompleted"
            @change="todoListStore.toggleCompleted(task.id)"
          />
        </div>
        <input
          v-if="task.isEditing"
          type="text"
          v-model="task.taskText"
          @keyup.enter="todoListStore.editTodoItem(task.id, task.taskText)"
          class="pl-2 bg-slate-800 text-slate-50 dark:bg-slate-50 dark:text-slate-800 rounded-sm"
        />
        <span
          v-else
          :class="{ 'task-completed': task.isCompleted }"
          class="text-xs text-center md:text-base"
        >
          {{ task.taskText.toUpperCase() }}
        </span>

        <div
          class="text-xs flex flex-col justify-center items-center md:flex-row md:text-base"
        >
          <button
            @click="task.isEditing = !task.isEditing"
            class="mr-2 text-amber-600 hover:scale-110 duration-200"
          >
            {{ task.isEditing ? "Cancel" : "Edit" }}
          </button>
          <button
            @click="showHideModal(task.id)"
            class="text-red-500 hover:scale-110 duration-200"
          >
            Delete
          </button>
        </div>
      </li>
    </ul>
    <section class="flex justify-between items-center px-4 mt-4 pb-2">
      <p>
        Items Remaining: <span class="font-bold">{{ remainingItems }}</span>
      </p>
      <button
        v-if="hasCompletedItems"
        @click="todoListStore.clearCompletedItems"
        class="hover:scale-110 duration-300 dark:text-slate-800 dark:bg-slate-50 px-2 py-1 rounded-sm bg-slate-800 text-slate-50 text-xs sm:text-base"
      >
        Clear Completed
      </button>
    </section>
    <TodoDeleteModal
      :isVisible="isModalVisible"
      @confirm="confirmDeleteTask"
      @cancel="showHideModal"
    />
  </article>
</template>

<style scoped>
.task-completed {
  text-decoration: line-through;
}
</style>
