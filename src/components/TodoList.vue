<script setup>
import { computed, onMounted } from "vue";
import { useTodoListStore } from "@/stores/todo-list";

// MOUNTED
onMounted(() => {
  todoListStore.loadFromLocalStorage();
});

// STORE
const todoListStore = useTodoListStore();

// COMPUTED
const isTodoListEmpty = computed(() => !todoListStore.todoList.length);
const remainingItems = computed(
  () => todoListStore.todoList.filter((task) => !task.isCompleted).length
);

const hasCompletedItems = computed(() =>
  todoListStore.todoList.some((task) => task.isCompleted)
);
const filteredTasks = computed(() => todoListStore.filteredTodoList);
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
        v-for="task in filteredTasks"
        :key="task.id"
        class="flex justify-between items-center px-4 border-b border-dotted border-b-slate-300 mt-2"
      >
        <input
          type="checkbox"
          :checked="task.isCompleted"
          @change="todoListStore.toggleCompleted(task.id)"
        />

        <input
          v-if="task.isEditing"
          type="text"
          v-model="task.taskText"
          @keyup.enter="todoListStore.editTodoItem(task.id, task.taskText)"
          class="text-slate-800"
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
            {{ task.isEditing ? "cancel" : "edit" }}
          </button>
          <button
            @click="todoListStore.deleteTodoItem(task.id)"
            class="text-red-500 hover:scale-110 duration-200"
          >
            delete
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
        class="hover:scale-110 duration-200"
      >
        Clear Completed
      </button>
    </section>
  </article>
</template>

<style scoped>
.task-completed {
  text-decoration: line-through;
}
</style>
