<script setup>
import { computed, onMounted, watch, onUnmounted } from "vue";
import { useTimeChallengeStore } from "@/stores/time-challenge";

// STORE
const timeChallengeStore = useTimeChallengeStore();

// COMPUTED
const activeChallenge = computed(
  () =>
    timeChallengeStore.timeChallenges[
      timeChallengeStore.timeChallenges.length - 1
    ]
);

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
  <h2>Active Time Challenge</h2>
  <div v-if="activeChallenge">
    <p>Task: {{ activeChallenge.taskText }}</p>
    <p>Time Limit: {{ activeChallenge.timeLimit }} minutes</p>
    <p>Time Remaining: {{ timeChallengeStore.timeRemaining }}</p>
    <div>
      <button @click="timeChallengeStore.clearCountdown">Cancel</button>
      <button>Complete</button>
    </div>
  </div>
  <div v-else>
    <p>no challengese currently</p>
  </div>
  <div>
    <p>Time Challenge Statistics</p>
  </div>
</template>
