import axios from "axios";

export const bookingApi = axios.create({
  baseURL: "http://localhost:3000/api/", //change local host to ip address 
});

export const postUser = (username, body) => {
  return bookingApi.post(`users/${username}`, { body }).then((res) => {
    return res.data
  })
};
