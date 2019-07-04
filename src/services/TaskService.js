import { http } from "./Axioscalls";

export function getTasklist() {
  return http.get();
}

export function getTask() {
  return http.get();
}

export function addTask() {
  return http.post();
}

export function updateTask() {
  return http.put();
}

export function deleteTask() {
  return http.delete();
}
