import axios from "axios";

const API_URL = "http://localhost:5000";

export const getComments = (taskId) =>
  axios.get(`${API_URL}/tasks/${taskId}/comments`);

export const addComment = (taskId, data) =>
  axios.post(`${API_URL}/tasks/${taskId}/comments`, data);

export const updateComment = (commentId, data) =>
  axios.put(`${API_URL}/comments/${commentId}`, data);

export const deleteComment = (commentId) =>
  axios.delete(`${API_URL}/comments/${commentId}`);
