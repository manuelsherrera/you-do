import { defineStore } from "pinia";
import { supabase } from "../supabase";

export default defineStore("tasks", {
  state() {
    return {
      tasks: [],
    };
  },
  actions: {
    async fetchTasks() {
      const { data: tasks } = await supabase
        .from("tasks")
        .select("*")
        .order("id", { ascending: false });
      this.tasks = tasks;
      console.log(this.tasks)
    },
    async createTask(taskTitle, uuid) {
      const { error } = await supabase.from("tasks").insert({ user_id: uuid, title: taskTitle });
      if(error){
        throw error
      }
      this.fetchTasks();
    },
  },
});