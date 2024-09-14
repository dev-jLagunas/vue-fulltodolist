import { defineStore } from "pinia";
import confetti from "canvas-confetti";
import { useToast } from "vue-toastification";

const toast = useToast();

export const useTodoListStore = defineStore("todoList", {
  state: () => ({
    todoList: [],
    filter: "all",
    sortOrder: "",
    isModalVisible: false,
    selectedTaskIdForTimeChallenge: null,
  }),
  getters: {
    filteredTodoList(state) {
      switch (state.filter) {
        case "active":
          return state.todoList.filter((todo) => !todo.isCompleted);
        case "completed":
          return state.todoList.filter((todo) => todo.isCompleted);
        case "all":
        default:
          return state.todoList;
      }
    },
    sortedTodoList(state) {
      return [...state.todoList].sort((a, b) => {
        const priorityOrder = { mandatory: 1, important: 2, optional: 3 };
        if (state.sortOrder === "mandatory-first") {
          return (
            priorityOrder[a.priorityLevel] - priorityOrder[b.priorityLevel]
          );
        } else if (state.sortOrder === "optional-first") {
          return (
            priorityOrder[b.priorityLevel] - priorityOrder[a.priorityLevel]
          );
        }
        return 0;
      });
    },
  },
  actions: {
    saveToLocalStorage() {
      localStorage.setItem("todoList", JSON.stringify(this.todoList));
    },

    loadFromLocalStorage() {
      const savedTodoList = localStorage.getItem("todoList");
      this.todoList = savedTodoList ? JSON.parse(savedTodoList) : [];
    },

    setSortOrder(order) {
      this.sortOrder = order;
      localStorage.setItem("sortOrder", order);
    },

    loadSortOrder() {
      const savedSortOrder = localStorage.getItem("sortOrder");
      this.sortOrder = savedSortOrder ? savedSortOrder : "mandatory-first";
    },

    addTodoItem(taskText, priorityLevel) {
      const newTask = {
        id: this.generateUniqueId(),
        taskText: taskText,
        priorityLevel: priorityLevel,
        isCompleted: false,
        isEditing: false,
      };

      this.todoList.push(newTask);
      this.saveToLocalStorage();

      toast.success("Task Added Successfully!");
    },

    deleteTodoItem(id) {
      this.todoList = this.todoList.filter((todo) => todo.id !== id);
      this.saveToLocalStorage();
      toast.error("Task Deleted.");
    },

    editTodoItem(id, updatedText) {
      this.todoList = this.todoList.map((todo) =>
        todo.id === id
          ? { ...todo, taskText: updatedText, isEditing: false }
          : todo
      );
      this.saveToLocalStorage();
      toast.success("Task Edited Successfully");
    },

    toggleCompleted(id) {
      this.todoList = this.todoList.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      );

      const completedTodo = this.todoList.find(
        (todo) => todo.id === id && todo.isCompleted
      );
      if (completedTodo) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      }
      this.saveToLocalStorage();
    },

    clearCompletedItems() {
      this.todoList = this.todoList.filter((todo) => !todo.isCompleted);
      this.saveToLocalStorage();
      toast.success("Completed Items Deleted");
    },

    deleteAllTasks() {
      this.todoList = [];
      this.saveToLocalStorage();
      toast.error("All Tasks Deleted");
    },

    generateUniqueId() {
      return Math.random().toString(36).slice(2, 11);
    },

    setFilter(filter) {
      this.filter = filter;
    },

    getCurrentFilter() {
      return this.filter;
    },

    openModal() {
      this.isModalVisible = true;
    },

    closeModal() {
      this.isModalVisible = false;
    },

    setSelectedTaskForChallenge(taskId) {
      this.selectedTaskForChallengeId = taskId;
    },

    clearSelectedTaskForChallenge() {
      this.selectedTaskForChallengeId = null;
    },
  },
});
