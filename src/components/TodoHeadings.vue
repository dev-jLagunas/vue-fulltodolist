<script setup></script>

<template>
  <section class="mt-4 flex justify-between items-center relative">
    <button
      class="text-slate-800 dark:text-slate-50 pl-5 text-sm underline underline-offset-4 side-btn"
    >
      Done
    </button>
    <button
      type="button"
      class="task-btn scale-75 md:scale-100 px-20 py-3 overflow-hidden font-semibold rounded dark:bg-slate-50 dark:text-slate-800 bg-slate-800 text-slate-50 text-lg hover:scale-110 duration-500"
    >
      Tasks
      <span
        class="absolute -top-1 right-0 px-5 py-1 text-xs tracking-wider text-center whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 bg-cyan-600"
        >click me</span
      >
    </button>
    <button
      class="text-slate-800 dark:text-slate-50 pr-5 text-sm underline underline-offset-4 side-btn"
    >
      Actions
    </button>
  </section>
</template>

<style scoped>
.task-btn {
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}
</style>
