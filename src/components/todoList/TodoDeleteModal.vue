<script setup>
const props = defineProps({
  isVisible: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["confirm", "cancel"]);

const onConfirm = () => emit("confirm");
const onCancel = () => emit("cancel");
</script>

<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 bg-slate-600 bg-opacity-50 flex justify-center items-center z-10"
  >
    <div
      class="text-slate-800 dark:text-slate-50 bg-white dark:bg-slate-800 rounded-md p-6 max-w-sm w-2/3 flex flex-col items-center justify-center"
    >
      <p class="text-center">Do you really want to delete this?</p>

      <div class="flex justify-end space-x-2 mt-4">
        <button
          @click="onConfirm"
          class="bg-red-500 text-white px-4 py-2 rounded-md"
        >
          Confirm
        </button>
        <button
          @click="onCancel"
          class="bg-gray-300 text-black px-4 py-2 rounded-md"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
