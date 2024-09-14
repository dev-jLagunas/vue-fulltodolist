<script setup>
import { computed } from "vue";
import { useTodoListStore } from "@/stores/todo-list";
import { useTimeChallengeStore } from "@/stores/time-challenge";
import TimeChallengeModal from "@/components/timeChalenges/TimeChallengeModal.vue";

// STORE
const todoListStore = useTodoListStore();
const timeChallengeStore = useTimeChallengeStore();

// COMPUTED
const totalTasks = computed(() => todoListStore.todoList.length);
const completedTasks = computed(
  () => todoListStore.todoList.filter((task) => task.isCompleted).length
);
const headerText = computed(() => {
  return todoListStore.currentMode === "todo"
    ? "Progress Bar"
    : "Item's Purchased";
});
</script>

<template>
  <article
    class="px-4 pb-4 space-y-2 dark:text-slate-50 my-4 border-b border-dotted border-slate-500 relative"
  >
    <div class="flex justify-between items-center">
      <h3
        class="text-base text-slate-800 dark:text-slate-50 flex justify-between"
      >
        {{ headerText }}
      </h3>
      <p class="font-bold text-lg text-slate-800 dark:text-slate-50">
        {{ completedTasks }} <span class="font-light text-base">Done</span>
      </p>
    </div>

    <div class="flex flex-wrap gap-2 py-4" v-if="todoListStore.todoList.length">
      <span
        v-for="(task, index) in totalTasks"
        :key="index"
        :class="{
          'w-10 h-3 rounded-sm bg-cyan-600': index < completedTasks,
          'w-10 h-3 rounded-sm bg-transparent border border-slate-500':
            index >= completedTasks,
        }"
      ></span>
    </div>
    <p v-else class="text-slate-800 dark:text-slate-50">List is empty</p>
    <button
      class="custom-btn absolute right-2 -bottom-5 bg-red-500 h-10 w-12"
      @click="timeChallengeStore.openModal"
    >
      <i class="fa-solid fa-stopwatch sign text-slate-50 text-2xl"></i>
      <div class="text font-bold">challenge</div>
    </button>
  </article>
  <TimeChallengeModal />
</template>

<style scoped>
/* From Uiverse.io by vinodjangid07 */
.custom-btn {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition-duration: 0.3s;
}

/* plus sign */
.sign {
  width: 100%;
  transition-duration: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* text */
.text {
  position: absolute;
  right: 0%;
  width: 0%;
  opacity: 0;
  color: white;
  font-size: 1em;
  transition-duration: 0.3s;
}

.custom-btn:hover {
  width: 125px;
  border-radius: 40px;
  transition-duration: 0.3s;
}

.custom-btn:hover .sign {
  width: 30%;
  transition-duration: 0.3s;
  padding-left: 10px;
}

.custom-btn:hover .text {
  opacity: 1;
  width: 70%;
  transition-duration: 0.3s;
  padding-right: 10px;
}
/* button click effect*/
.custom-btn:active {
  transform: translate(2px, 2px);
}
</style>
