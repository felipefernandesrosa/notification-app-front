import axios from "axios";

export const GET_CLIENTS = `${process.env.NEXT_PUBLIC_API_URL}/clients`;
export const GET_NOTIFICATIONS = `${process.env.NEXT_PUBLIC_API_URL}/notifications`;
export const CREATE_NOTIFICATIONS = `${process.env.NEXT_PUBLIC_API_URL}/notifications`;

export function getNotifications() {
  return axios.get(GET_NOTIFICATIONS);
}

export function getClients() {
  return axios.get(GET_CLIENTS);
}

export function createNotification(params: object) {
  return axios.post(CREATE_NOTIFICATIONS, params);
}
