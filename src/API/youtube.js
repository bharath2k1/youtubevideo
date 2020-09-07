import axios from "axios";

//const KEY = "AIzaSyDBzwjdqDLBx5rlunmKH8nJLMR53dppZxw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {},
  // I was'nt able to pass params from this file to app file
});
