<script setup>
import { computed, watch, onUnmounted, ref } from "vue";
import { useDark } from "@vueuse/core";
import { useTimeChallengeStore } from "@/stores/time-challenge";
import { CircleProgressBar } from "circle-progress.vue";
import DeleteConfirmationModal from "@/components/todoList/TodoDeleteModal.vue";

// Handle Dark Mode
const isDark = useDark();

// REFS
const isCancelModalVisible = ref(false);
const isClearPointsModalVisible = ref(false);

// VARIABLES
const cancelMsg =
  "Do you really want to cancel this challenge? You will lose 25 points!";
const clearPointsMsg = "Do you really want to clear all your points?";

// Store
const timeChallengeStore = useTimeChallengeStore();

// Computed Properties
const activeChallenge = computed(() => timeChallengeStore.activeChallenge);
const progress = computed(() => timeChallengeStore.progress);
const colorBack = computed(() => (isDark.value ? "#f8fafc" : "#1e293b"));

// Watchers
watch(activeChallenge, (newValue, oldValue) => {
  if (newValue && !timeChallengeStore.intervalId) {
    timeChallengeStore.startCountdown();
  }
});

// Lifecycle Hooks
onUnmounted(() => {
  timeChallengeStore.clearCountdown();
});

// Methods
const completeChallenge = () => {
  timeChallengeStore.completeChallenge("success");
};

const showHideCancelModal = () => {
  isCancelModalVisible.value = !isCancelModalVisible.value;
};

const confirmCancelChallenge = () => {
  timeChallengeStore.cancelChallenge();
  isCancelModalVisible.value = false;
};

const showHideClearPointsModal = () => {
  isClearPointsModalVisible.value = !isClearPointsModalVisible.value;
};

const confirmClearPoints = () => {
  timeChallengeStore.clearAllPoints();
  isClearPointsModalVisible.value = false;
};
</script>

<template>
  <article>
    <header>
      <h2
        class="text-slate-800 dark:text-slate-50 text-center my-2 pb-2 text-lg font-bold border-b border-b-slate-500 border-dotted"
      >
        Active Time Challenge
      </h2>
    </header>

    <section
      v-if="activeChallenge"
      class="text-slate-800 dark:text-slate-50 flex flex-col justify-center items-center relative"
    >
      <p>
        Time Challenged Task<i
          class="fa-solid fa-share pl-2 rotate-90 text-cyan-600"
        ></i>
      </p>
      <p
        class="py-1 bg-slate-800 text-slate-50 dark:bg-slate-50 dark:text-slate-800 px-6 rounded-sm my-2"
      >
        {{ activeChallenge.taskText.toUpperCase() }}
      </p>

      <CircleProgressBar
        :value="progress"
        :max="100"
        :size="125"
        :colorUnfilled="'#0891b2'"
        :colorBack="colorBack"
        :colorFilled="'#ef4444'"
        :strokeWidth="'8px'"
        :rounded="true"
      />

      <p class="absolute font-bold text-2xl top-28">
        {{ timeChallengeStore.timeRemaining }}
      </p>

      <footer class="flex justify-center gap-8 w-full mt-4">
        <button @click="showHideCancelModal" class="text-red-500 text-lg">
          Cancel
        </button>
        <button @click="completeChallenge" class="text-green-500 text-lg">
          Complete
        </button>
      </footer>
    </section>

    <section v-else>
      <p class="text-slate-800 dark:text-slate-50 text-center">
        No Active Time Challenges
      </p>
    </section>

    <aside
      class="text-slate-50 bg-slate-800 dark:text-slate-800 dark:bg-slate-50 px-4 text-center mt-4 w-max rounded-sm mx-auto"
    >
      <p class="text-lg">{{ timeChallengeStore.outcomeMessage }}</p>
    </aside>

    <section class="border-t border-dotted border-slate-500 mt-4 text-center">
      <button
        @click="showHideClearPointsModal"
        class="bg-red-500 text-slate-50 px-4 my-4 rounded-sm"
      >
        Clear Points
      </button>
    </section>
  </article>
  <DeleteConfirmationModal
    :isVisible="isCancelModalVisible"
    :displayMsg="cancelMsg"
    @confirm="confirmCancelChallenge"
    @cancel="showHideCancelModal"
  />

  <DeleteConfirmationModal
    :isVisible="isClearPointsModalVisible"
    :displayMsg="clearPointsMsg"
    @confirm="confirmClearPoints"
    @cancel="showHideClearPointsModal"
  />
</template>
