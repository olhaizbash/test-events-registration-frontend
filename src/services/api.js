import axios from "axios";

const instance = axios.create({
  baseURL: "https://test-events-registration.onrender.com",
});

export const getEvents = async () => {
  const { data } = await instance.get(`/api/events`);
  return data;
};

export const register = async (registrationData) => {
  const { data } = await instance.patch(`/user/register`, registrationData);
  return data;
};

export const getParticipants = async (id) => {
  const { data } = await instance.get(`/api/events/find/?_id=${id}`);
  return data;
};
