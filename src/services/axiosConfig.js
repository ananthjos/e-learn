import axios from "axios";

const Client = axios.create({
  baseURL: "/",
  timeout: 8000,
  headers: {
    Accept: "application/json",
    "x-rapidapi-host": "famous-quotes4.p.rapidapi.com",
    "x-rapidapi-key": "<your-key-here>",
  },
});

export default Client;
