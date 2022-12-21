import axios from "axios";

export const bookingApi = axios.create({
  baseURL: "http://localhost:3000/api", //change local host to ip address 
});

export const postUser = (username, body) => {
  return bookingApi.post(`/users/${username}`, { password:body }).then((res) => {
    console.log(res.data)
    return res.data
  })
};
