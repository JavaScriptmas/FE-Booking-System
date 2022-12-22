import axios from "axios";

export const bookingApi = axios.create({
  baseURL: "https://javascriptmas.cyclic.app/api", //change local host to ip address 
});

export const postUser = (username, body) => {
  return bookingApi.post(`/users/${username}`, { password:body }).then((res) => {
    // console.log(res.data)
    return res.data
  })
};

export const getAllAppointments = () => {
  return bookingApi.get("/appointments").then((res) => {
    return res.data.appointments;
  });
};

export const getTimeSlotsByDate = (date) => {
  return bookingApi.get(`/appointments/${date}`).then((res) => {
  return res.data.appointments
  });
};