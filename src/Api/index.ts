import axios from "axios";

const development = false;

const baseurl = development
  ? "http://localhost:3333/"
  : "https://fifty-cents-store-back.onrender.com/";

export const order = axios.create({
  baseURL: baseurl + "order",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
});

export const authenticate = axios.create({
  baseURL: baseurl + "authenticate",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
});

export const register = axios.create({
  baseURL: baseurl + "register",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
});

export const items = axios.create({
  baseURL: baseurl + "items",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
});
