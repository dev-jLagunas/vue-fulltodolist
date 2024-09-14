<script setup>
import { computed, ref, watch } from "vue";
import { useTimeChallengeStore } from "@/stores/time-challenge";
import { useTodoListStore } from "@/stores/todo-list";

// STORE
const timeChallengeStore = useTimeChallengeStore();
const todoListStore = useTodoListStore();

// REFS
const selectedTask = ref(null);
const selectedTimeLimit = ref(null);

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
    if (!timeChallengeStore.activeChallenge) {
      timeChallengeStore.startChallenge(
        selectedTask.value,
        selectedTimeLimit.value
      );
      todoListStore.setSelectedTaskForChallenge(selectedTask.value.id);
      timeChallengeStore.closeModal();
    } else {
      console.warn("A time challenge is already in progress.");
    }
  }
};

// WATCHERS
watch(
  () => timeChallengeStore.activeChallenge,
  (newChallenge) => {
    if (!newChallenge) {
      selectedTask.value = null;
      selectedTimeLimit.value = null;
    }
  }
);
</script>

<template>
  <div
    v-if="timeChallengeStore.isModalVisible"
    class="fixed inset-0 bg-slate-600 bg-opacity-50 flex justify-center items-center z-10"
  >
    <article
      class="w-5/6 sm:max-w-30rem py-4 px-4 bg-slate-50 text-slate-800 dark:bg-slate-800 dark:text-slate-50 rounded-md text-center"
    >
      <h1
        class="text-slate-50 bg-red-500 text-center w-max px-4 rounded-sm mx-auto text-xl"
      >
        Time Challenge
      </h1>
      <ul class="text-center my-4 text-sm flex flex-col gap-1">
        <li>
          <span class="text-blue-500 font-semibold pr-1">Completed:</span> 25
          points!
        </li>
        <li>
          <span class="text-red-500 font-semibold pr-1">Cancelled:</span>
          -50 points!
        </li>
        <li>
          <span class="text-yellow-500 font-semibold pr-1">Time Expired:</span>
          -50 points!
        </li>
        <li
          class="bg-slate-800 text-slate-50 dark:text-slate-800 dark:bg-slate-50 rounded-sm mt-4 text-base py-1"
        >
          Get 100 points for a special surprise!
        </li>
      </ul>
      <p
        class="border border-dotted border-slate-500 rounded-sm py-1 my-4 text-xl"
        v-if="!selectedTask"
      >
        Pick the task you want to time challenge and beat the clock!
      </p>
      <h3
        class="text-center font-bold underline underline-offset-4 mb-2"
        v-if="!selectedTask"
      >
        Active Tasks
      </h3>
      <ul v-if="!selectedTask" class="text-center sm:text-start">
        <li
          v-for="task in activeTasks"
          :key="task.id"
          class="hover:text-green-500 duration-700"
        >
          <button @click="selectTask(task)" class="">
            <i class="fa-solid fa-caret-right pr-1"></i>
            {{ task.taskText }}
          </button>
        </li>
      </ul>

      <div v-else>
        <h2 class="text-center">
          You picked:
          <span class="font-bold">{{ selectedTask.taskText }}</span>
        </h2>
        <p class="text-center mt-4">Select a time limit:</p>
        <div class="flex justify-around flex-wrap gap-1 mt-2">
          <button
            @click="selectTimeLimit(1)"
            class="border p-1 rounded-sm custom-shadow"
          >
            1 min
          </button>
          <button
            @click="selectTimeLimit(5)"
            class="border p-1 rounded-sm custom-shadow"
          >
            5 min
          </button>
          <button
            @click="selectTimeLimit(15)"
            class="border p-1 rounded-sm custom-shadow"
          >
            15 min
          </button>
          <button
            @click="selectTimeLimit(30)"
            class="border p-1 rounded-sm custom-shadow"
          >
            30 min
          </button>
          <button
            @click="selectTimeLimit(45)"
            class="border p-1 rounded-sm custom-shadow"
          >
            45 min
          </button>
        </div>

        <p v-if="selectedTimeLimit" class="text-center my-4">
          You picked
          <span class="font-bold">{{ selectedTimeLimit }}</span> minutes
        </p>

        <button
          v-if="selectedTask && selectedTimeLimit"
          @click="startChallenge"
          class="text-center bg-green-500 text-slate-50 px-4 rounded-sm font-semibold"
        >
          Start Challenge
        </button>
      </div>
      <div class="mx-auto w-max mt-4">
        <button
          @click="closeModal"
          class="text-slate-50 bg-red-500 px-6 rounded-sm"
        >
          Close
        </button>
      </div>
    </article>
  </div>
</template>

<style scoped>
.custom-shadow {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>
