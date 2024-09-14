<script setup>
import { ref, onMounted } from "vue";
import manSvg from "@/assets/man.png";

const isTutorialVisible = ref(false);

onMounted(() => {
  const hasSeenTutorial = localStorage.getItem("hasSeenTutorial");
  if (!hasSeenTutorial) {
    isTutorialVisible.value = true;
  }
});

const closeTutorial = () => {
  localStorage.setItem("hasSeenTutorial", "true");
  isTutorialVisible.value = false;
};
</script>

<template>
  <div
    v-if="isTutorialVisible"
    class="fixed inset-0 bg-black bg-opacity-70 flex flex-col justify-end items-center z-10"
  >
    <div class="flex justify-center flex-col items-center px-4 relative">
      <h1
        class="relative bg-slate-50 text-slate-800 text-2xl md:text-4xl p-4 rounded-md text-center mb-10 bubble duration-700"
      >
        Hello, shall I walk you through the app?
      </h1>
      <figure>
        <img :src="manSvg" alt="character svg" class="h-4/5 max-h-96" />
      </figure>
      <button
        class="bg-blue-500 text-slate-50 px-4 rounded-sm absolute left-5 top-28 md:text-xl md:left-20 py-1"
        @@click="closeTutorial"
      >
        Yes, please
      </button>
      <button
        class="bg-red-600 text-slate-50 px-4 rounded-sm absolute right-5 top-28 md:text-xl md:right-20"
        @click="closeTutorial"
      >
        No, thanks
      </button>
    </div>
  </div>
</template>
<style scoped>
.bubble {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.bubble:after {
  content: "";
  position: absolute;
  display: block;
  width: 0;
  z-index: 1;
  border-style: solid;
  border-width: 33px 43px 0 0;
  border-color: #f8fafc transparent transparent transparent;
  bottom: -33px;
  left: 55%;
  margin-left: -21.5px;
}
</style>
