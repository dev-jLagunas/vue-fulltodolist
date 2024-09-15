<script setup>
import { onMounted, ref, watch, nextTick } from "vue";
import TodoHeader from "@/components/todoList/TodoHeader.vue";
import TodoInput from "@/components/todoList/TodoInput.vue";
import TodoList from "@/components/todoList/TodoList.vue";
import TodoListFilter from "@/components/todoList/TodoFilter.vue";
import TodoCurrentDate from "@/components/todoList/TodoDate.vue";
import TodoHeadings from "@/components/todoList/TodoHeadings.vue";
import TodoProgressBar from "@/components/todoList/TodoProgress.vue";
import UserName from "@/components/user/UserName.vue";
import UserLoginModal from "@/components/user/UserLoginModal.vue";
import TimeChallenge from "@/components/timeChalenges/TimeChallengeDisplay.vue";
import TimeChallengePoints from "@/components/timeChalenges/TimeChallengePoints.vue";
import ChallengeSuccessModal from "@/components/timeChalenges/ChallengeSuccessModal.vue";
import InitializeTutorial from "@/components/introTutorial/InitializeTutorial.vue";
import { useUserAuthStore } from "@/stores/user-auth";
import { useTimeChallengeStore } from "@/stores/time-challenge";
import { VTour } from "@globalhive/vuejs-tour";

// V-TOUR STEPS
const steps = [
  {
    target: ".todo-input",
    content: "This is where you add a new task and add its priority level",
  },
  {
    target: ".points-display",
    content:
      "Get points as you complete tasks. 100 points gets you a special surprise!",
  },
  {
    target: ".todo-headings",
    content: "Here you can delete your list to start fresh.",
  },
  {
    target: ".todo-list",
    content:
      "Your complete list. Mark tasks complete, edit them, or indivclassually delete them.",
  },
  {
    target: ".todo-filter",
    content: "Filter and sort your list items for easy organization.",
  },
];

// REF
const isSuccessModalOpen = ref(false);
const tour = ref();

// STORE
const userAuthStore = useUserAuthStore();
const timeChallengeStore = useTimeChallengeStore();

// METHODS
onMounted(() => {
  userAuthStore.loadUserFromLocalStorage();
  timeChallengeStore.loadFromLocalStorage();
});

const toggleSuccessModal = () => {
  isSuccessModalOpen.value = true;
};

const startTour = () => {
  localStorage.removeItem("vjt-default");

  // Start the tour
  tour.value.startTour();
};

// WATCHER
watch(
  () => timeChallengeStore.totalPoints,
  (newPoints) => {
    if (newPoints >= 100) {
      toggleSuccessModal();
      setTimeout(() => {
        timeChallengeStore.resetPoints();
        isSuccessModalOpen.value = false;
      }, 8000);
    }
  }
);
</script>

<template>
  <!-- VTour Component -->
  <VTour ref="tour" :steps="steps" backdrop />
  <div
    class="border-2 border-slate-600 dark:border-slate-500 rounded-md mt-4 md:w-4/3 lg:w-2/3 md:mx-auto relative text-center"
  >
    <TodoCurrentDate />
    <TodoHeader />
    <TodoInput class="todo-input" />
  </div>
  <UserName />
  <main
    class="border-2 border-slate-600 dark:border-slate-500 rounded-md mt-4 md:w-4/3 lg:w-2/3 md:mx-auto relative"
  >
    <TimeChallengePoints class="points-display" />
    <TodoProgressBar class="progress-bar" />
    <TodoHeadings class="todo-headings" />
    <TodoList class="todo-list" />
    <TodoListFilter class="todo-filter" />
  </main>
  <footer
    class="border-2 border-slate-600 dark:border-slate-500 rounded-md mt-4 md:w-4/3 lg:w-2/3 md:mx-auto relative"
  >
    <TimeChallenge class="time-challenges" />
  </footer>
  <UserLoginModal
    v-if="userAuthStore.isModalVisible"
    @close="userAuthStore.closeModal"
  />
  <ChallengeSuccessModal v-if="isSuccessModalOpen" />
  <InitializeTutorial class="text-slate-800 bg-slate-50" />
</template>

<style>
#vjt-tooltip {
  background-color: #f8fafc;
  color: #1e293b;
}
#vjt-arrow::before {
  background-color: #f8fafc;
}
.vjt-actions button {
  border: 1px solid #1e293b;
  color: #1e293b;
}
.vjt-actions button:hover {
  background-color: #1e293b;
  color: #f8fafc;
}
</style>
