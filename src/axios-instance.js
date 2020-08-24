import axios from "axios";

const instance = axios.create({
  baseURL: "https://dailyrs.firebaseio.com/",
});
export default instance;
