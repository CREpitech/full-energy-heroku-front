import axios from "axios";
export default axios.create({
  baseURL: "https://first-try-heroku-deployment.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});
