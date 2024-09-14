<script setup>
import { computed, watch, onUnmounted } from "vue";
import { useDark } from "@vueuse/core";
import { useTimeChallengeStore } from "@/stores/time-challenge";
import { CircleProgressBar } from "circle-progress.vue";

// Handle Dark Mode
const isDark = useDark();

// Store
const timeChallengeStore = useTimeChallengeStore();

// Computed Properties
const activeChallenge = computed(() => timeChallengeStore.activeChallenge); // Only one active challenge now
const progress = computed(() => timeChallengeStore.progress);
const colorBack = computed(() => (isDark.value ? "#f8fafc" : "#1e293b"));

// Watchers
watch(activeChallenge, (newValue) => {
  if (newValue) {
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

const cancelChallenge = () => {
  timeChallengeStore.cancelChallenge();
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
        <button @click="cancelChallenge" class="text-red-500 text-lg">
          Cancel
        </button>
        <button @click="completeChallenge" class="text-green-500 text-lg">
          Complete
        </button>
      </footer>
    </section>

    <section v-else>
      <p class="text-slate-800 dark:text-slate-50 text-center text-xl">
        No Active Time Challenges
      </p>
    </section>

    <aside v-if="timeChallengeStore.totalPoints">
      <p>Total Points: {{ timeChallengeStore.totalPoints }}</p>
    </aside>
  </article>
</template>
