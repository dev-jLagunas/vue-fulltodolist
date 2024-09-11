import { defineStore } from "pinia";

export const useTodoListStore = defineStore("todoList", {
  state: () => ({
    todoList: [],
    filter: "all",
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
  },
  actions: {
    saveToLocalStorage() {
      localStorage.setItem("todoList", JSON.stringify(this.todoList));
    },

    loadFromLocalStorage() {
      const savedTodoList = localStorage.getItem("todoList");
      this.todoList = savedTodoList ? JSON.parse(savedTodoList) : [];
    },

    addTodoItem(taskText) {
      const newTask = {
        id: this.generateUniqueId(),
        taskText: taskText,
        isCompleted: false,
        isEditing: false,
      };

      this.todoList.push(newTask);
      this.saveToLocalStorage();
    },

    deleteTodoItem(id) {
      this.todoList = this.todoList.filter((todo) => todo.id !== id);
      this.saveToLocalStorage();
    },

    editTodoItem(id, updatedText) {
      this.todoList = this.todoList.map((todo) =>
        todo.id === id
          ? { ...todo, taskText: updatedText, isEditing: false }
          : todo
      );
      this.saveToLocalStorage();
    },

    toggleCompleted(id) {
      this.todoList = this.todoList.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      );
      this.saveToLocalStorage();
    },

    clearCompletedItems() {
      this.todoList = this.todoList.filter((todo) => !todo.isCompleted);
      this.saveToLocalStorage();
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
  },
});
