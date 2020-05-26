import Axios from "axios";

const instance = Axios.create({
  baseURL: "https://react-my-burger-545ad.firebaseio.com/",
});

export default instance;
