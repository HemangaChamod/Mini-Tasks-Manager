import axios from "axios";
import { getToken } from "../utils/auth";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api"
});

API.interceptors.request.use((config) => {

  const token = getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;

});

export const registerUser = (data) => API.post("/auth/register", data);

export const loginUser = (data) => API.post("/auth/login", data);

export const getTasks = (page = 0, size = 10) =>
  API.get(`/tasks?page=${page}&size=${size}`);

export const createTask = (task) =>
  API.post("/tasks", task);

export const updateTaskStatus = (id, status) =>
  API.put(`/tasks/${id}/status?status=${status}`);

export const deleteTask = (id) =>
  API.delete(`/tasks/${id}`);

export default API;