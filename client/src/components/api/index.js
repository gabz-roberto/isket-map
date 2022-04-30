import axios from "axios";

const instance = axios.create({
  baseURL: "http://ec2-174-129-177-198.compute-1.amazonaws.com:5000/",
});

export default instance;
