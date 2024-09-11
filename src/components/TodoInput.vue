<script setup></script>

<template>
  <fieldset
    class="w-4/5 space-y-1 mx-auto text-slate-800 dark:text-slate-50 mb-4 md:w-1/2"
  >
    <label for="url" class="block text-sm">Todo Task</label>
    <div class="flex">
      <input
        type="text"
        name="task-text"
        id="task-text"
        placeholder="Add a todo item"
        class="flex flex-1 text-xs py-2 px-2 rounded-sm focus:outline-1 focus:outline-red-200 dark:text-slate-800"
      />
    </div>
  </fieldset>
</template>

<style scoped>
/*  */
</style>
