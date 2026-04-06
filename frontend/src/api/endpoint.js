const BASE_URL = "http://localhost:5000/api";

// AUTH
export const AUTH_ENDPOINTS = {
  REGISTER: `${BASE_URL}/auth/register`,
  LOGIN: `${BASE_URL}/auth/login`,
};

// TRIPS
export const TRIP_ENDPOINTS = {
  CREATE: `${BASE_URL}/trips`,
  GET_ALL: `${BASE_URL}/trips`,
};

export default BASE_URL;
