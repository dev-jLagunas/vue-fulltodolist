<script setup>
import { computed } from "vue";
import { useUserAuthStore } from "@/stores/user-auth";

// STORE
const userAuthStore = useUserAuthStore();

// COMPUTED
const userName = computed(() => {
  if (userAuthStore.user && userAuthStore.user.email) {
    return userAuthStore.user.email.split("@")[0];
  }
});
</script>

<template>
  <div
    class="bg-slate-800 text-slate-50 dark:bg-slate-50 dark:text-slate-800 tracking-widest w-1/2 md:w-1/4 text-center rounded-sm mx-auto py-1 mt-4"
  >
    <h1 v-if="userAuthStore.user" class="">
      <i class="fa-solid fa-user pr-2"></i>Hello {{ userName }}!
    </h1>
    <h1 v-else><i class="fa-solid fa-user pr-2"></i>Hello Guest!</h1>
    <h1></h1>
  </div>
</template>
