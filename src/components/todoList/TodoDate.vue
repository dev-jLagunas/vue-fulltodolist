<script setup>
import { ref, onMounted } from "vue";

// REF
const currentDate = ref("");

const formatDate = () => {
  const date = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  currentDate.value = date.toLocaleDateString("en-US", options);
};

onMounted(() => {
  formatDate();
});
</script>
<template>
  <div
    class="bg-slate-800 text-slate-50 text-center py-1 absolute -top-3 left-4 w-max px-4 rounded-sm text-sm dark:text-slate-800 dark:bg-slate-50"
  >
    <p>{{ currentDate }}</p>
  </div>
</template>
