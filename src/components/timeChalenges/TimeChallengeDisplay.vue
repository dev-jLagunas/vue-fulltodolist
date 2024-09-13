<script setup>
import { computed, watch, onUnmounted } from "vue";
import { useDark } from "@vueuse/core";
import { useTimeChallengeStore } from "@/stores/time-challenge";
import { CircleProgressBar } from "circle-progress.vue";

const isDark = useDark();

// STORE
const timeChallengeStore = useTimeChallengeStore();

// COMPUTED
const activeChallenge = computed(
  () =>
    timeChallengeStore.timeChallenges[
      timeChallengeStore.timeChallenges.length - 1
    ]
);

const colorBack = computed(() => (isDark.value ? "#f8fafc" : "#1e293b"));

const progress = computed(() => {
  return timeChallengeStore.progress;
});

// WATCHERS
watch(activeChallenge, (newValue) => {
  if (newValue) {
    timeChallengeStore.startCountdown(newValue);
  }
});

onUnmounted(() => {
  timeChallengeStore.clearCountdown();
});
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
      <p class="">
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
        <button
          @click="timeChallengeStore.clearCountdown"
          class="text-red-500 text-lg"
        >
          Cancel
        </button>
        <button class="text-green-500 text-lg">Complete</button>
      </footer>
    </section>

    <section v-else>
      <p>No challenges currently</p>
    </section>

    <!-- <aside>
      <p>Time Challenge Statistics</p>
    </aside> -->
  </article>
</template>
>
