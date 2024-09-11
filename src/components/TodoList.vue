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
</script>

<template>
  <article class="text-slate-800 dark:text-slate-50">
    <p v-if="isTodoListEmpty">List is empty</p>
    <ul v-else class="">
      <li
        v-for="task in filteredTasks"
        :key="task.id"
        class="flex justify-between"
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
        <span v-else :class="{ 'task-completed': task.isCompleted }">
          {{ task.taskText }}
        </span>

        <div>
          <button @click="task.isEditing = !task.isEditing">edit</button>
          <button @click="todoListStore.deleteTodoItem(task.id)">delete</button>
        </div>
      </li>
    </ul>

    <!-- List Footer Section -->
    <section class="flex justify-between items-center">
      <p>items remaining {{ remainingItems }}</p>
      <button
        v-if="hasCompletedItems"
        @click="todoListStore.clearCompletedItems"
      >
        clear completed
      </button>
    </section>
  </article>
</template>

<style scoped>
.task-completed {
  text-decoration: line-through;
}
</style>
