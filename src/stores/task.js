import { defineStore } from "pinia";
import { supabase } from "../supabase";

export default defineStore("tasks", {
  state() {
    return {
      tasks: [],
    };
  },
  getters: {
    backLog() {
      return this.tasks.filter((item) => item.status === 1);
    },
    doing() {
      return this.tasks.filter((item) => item.status === 2);
    },
    done() {
      return this.tasks.filter((item) => item.status === 3);
    },
  },
  actions: {
    async fetchTasks() {
      const { data: tasks } = await supabase
        .from("tasks")
        .select("*")
        .order("id", { ascending: false });
      this.tasks = tasks;
      console.log("Supabase data: ", this.tasks);
    },
    async createTask(taskTitle, taskDescription, uuid) {
      const { error } = await supabase
        .from("tasks")
        .insert(
          { user_id: uuid, 
            title: taskTitle,
            textArea: taskDescription, 
          });
      if (error) {
        throw error;
      }
      this.fetchTasks();
    },
    async deleteTask(id) {
      const { error } = await supabase.from("tasks").delete().eq("id", id);

      if (error) {
        throw error;
      }
      this.fetchTasks();
    },
    async updateTask(newTitle, status, id, textArea) {
      const { data, error } = await supabase
        .from("tasks")
        .update({
          title: newTitle,
          status: status,
          textArea: textArea,
        })
        .eq("id", id)
        .select();
      if (error) {
        throw error;
      }
      this.fetchTasks();
    },

    async updateDragStatus(newStatus, id) {
      const { data, error } = await supabase
        .from("tasks")
        .update({ status: newStatus })
        .eq("id", id)
        .select();
      this.fetchTasks();
    },
  },
});
