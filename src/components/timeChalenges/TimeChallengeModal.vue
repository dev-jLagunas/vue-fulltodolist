<script setup>
import { computed, ref } from "vue";
import { useTimeChallengeStore } from "@/stores/time-challenge";
import { useTodoListStore } from "@/stores/todo-list";

// STORE
const timeChallengeStore = useTimeChallengeStore();
const todoListStore = useTodoListStore();

// REFS
const selectedTask = ref(null);
const selectedTimeLimit = ref(null);
// COMPUTED

// METHODS
const closeModal = () => {
  timeChallengeStore.closeModal();
};

// COMPUTED
const activeTasks = computed(() =>
  todoListStore.filteredTodoList.filter((task) => !task.isCompleted)
);
const selectTask = (task) => {
  selectedTask.value = task;
};
const selectTimeLimit = (time) => {
  selectedTimeLimit.value = time;
};

const startChallenge = () => {
  if (selectedTask.value && selectedTimeLimit.value) {
    const newTimeChallenge = {
      id: `challenge-${Date.now()}`,
      taskId: selectedTask.value.id,
      taskText: selectedTask.value.taskText,
      timeLimit: selectedTimeLimit.value,
      startTime: new Date().toISOString(),
      status: "in progress",
      endTime: null,
      timeRemaining: null,
      score: null,
      outcome: null,
    };

    timeChallengeStore.addTimeChallenge(newTimeChallenge);
    todoListStore.setSelectedTaskForChallenge(selectedTask.value.id);
    timeChallengeStore.closeModal();
  }
};
</script>

<template>
  <div
    v-if="timeChallengeStore.isModalVisible"
    class="fixed inset-0 bg-slate-600 bg-opacity-50 flex justify-center items-center z-10"
  >
    <article class="h-64 w-2/3 bg-white">
      <h1>lets set up your time challenge</h1>
      <p>Pick the task you want to time challenge!</p>

      <!-- Task list section: Visible until a task is picked -->
      <ul v-if="!selectedTask">
        <li v-for="task in activeTasks" :key="task.id">
          <button @click="selectTask(task)" class="">
            {{ task.taskText }}
          </button>
        </li>
      </ul>
      <!-- Only visible after task is picked -->
      <div v-else>
        <h2>You picked: {{ selectedTask.taskText }}</h2>
        <p>Select a time limit:</p>
        <div>
          <button @click="selectTimeLimit(1)">1 min</button>
          <button @click="selectTimeLimit(5)">5 min</button>
          <button @click="selectTimeLimit(15)">15 min</button>
          <button @click="selectTimeLimit(30)">30 min</button>
          <button @click="selectTimeLimit(45)">45 min</button>
        </div>

        <p v-if="selectedTimeLimit">
          You picked {{ selectedTimeLimit }} minutes
        </p>

        <button
          v-if="selectedTask && selectedTimeLimit"
          @click="startChallenge"
        >
          Start
        </button>
      </div>

      <section></section>
      <button @click="closeModal">close</button>
    </article>
  </div>
</template>

<style scoped></style>
