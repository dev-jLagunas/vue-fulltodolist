<script setup>
import { useTimeChallengeStore } from "@/stores/time-challenge";

// STORE
const timeChallengeStore = useTimeChallengeStore();
</script>

<template>
  <aside
    class="bg-orange-400 w-max rounded-full p-2 md:p-6 flex justify-center items-center flex-col text-slate-50 absolute -top-12 md:-top-20 -left-3 md:-left-8 -rotate-12"
  >
    <h2 class="font-light">Points</h2>
    <p class="font-bold">{{ timeChallengeStore.totalPoints }}</p>
  </aside>
</template>

<style scoped></style>
