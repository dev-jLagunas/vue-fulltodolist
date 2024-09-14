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
import { useUserAuthStore } from "@/stores/user-auth";
import { useTimeChallengeStore } from "@/stores/time-challenge";

// REF
const isSuccessModalOpen = ref(false);

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
    class="border-2 border-slate-600 dark:border-slate-500 rounded-md mt-4 md:w-4/3 lg:w-2/3 md:mx-auto relative"
  >
    <TodoCurrentDate />
    <TodoHeader />
    <TodoInput />
  </div>
  <UserName />
  <main
    class="border-2 border-slate-600 dark:border-slate-500 rounded-md mt-4 md:w-4/3 lg:w-2/3 md:mx-auto"
  >
    <TodoProgressBar />
    <TodoHeadings />
    <TodoList />
    <TodoListFilter />
  </main>
  <footer
    class="border-2 border-slate-600 dark:border-slate-500 rounded-md mt-4 md:w-4/3 lg:w-2/3 md:mx-auto relative"
  >
    <TimeChallengePoints />
    <TimeChallenge />
  </footer>
  <UserLoginModal
    v-if="userAuthStore.isModalVisible"
    @close="userAuthStore.closeModal"
  />
  <!-- <button @click="toggleSuccessModal">open modal</button> -->
  <ChallengeSuccessModal v-if="isSuccessModalOpen" />
</template>
