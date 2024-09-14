<script setup>
import { onMounted, ref, watch } from "vue";
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
    target: '[data-step="0"]',
    content: "This is where you add a new task",
  },
  { target: '[data-step="1"]', content: "Here is your task list" },
  {
    target: '[data-step="2"]',
    content: "Use filters to view active/completed tasks",
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
  // Clear the tour state from local storage
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
  <div
    class="border-2 border-slate-600 dark:border-slate-500 rounded-md mt-4 md:w-4/3 lg:w-2/3 md:mx-auto relative text-center"
  >
    <!-- Trigger Button for Testing -->
    <button @click="startTour">Trigger Tutorial</button>

    <TodoCurrentDate />
    <TodoHeader />
    <TodoInput />
  </div>
  <UserName />
  <main
    class="border-2 border-slate-600 dark:border-slate-500 rounded-md mt-4 md:w-4/3 lg:w-2/3 md:mx-auto relative"
  >
    <TimeChallengePoints data-step="0" />
    <TodoProgressBar />
    <TodoHeadings />
    <TodoList data-step="1" />
    <TodoListFilter data-step="2" />
  </main>
  <footer
    class="border-2 border-slate-600 dark:border-slate-500 rounded-md mt-4 md:w-4/3 lg:w-2/3 md:mx-auto relative"
  >
    <TimeChallenge />
  </footer>
  <UserLoginModal
    v-if="userAuthStore.isModalVisible"
    @close="userAuthStore.closeModal"
  />
  <ChallengeSuccessModal v-if="isSuccessModalOpen" />
  <InitializeTutorial />
  <!-- VTour Component -->
  <VTour ref="tour" :steps="steps" />
</template>

<style scoped>
.vue-tour {
  z-index: 10000 !important;
  display: block !important;
  opacity: 1 !important;
}
</style>
