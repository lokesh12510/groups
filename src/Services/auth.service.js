import axios from "axios";
import { BASE_URL } from "../Constant";

const API_URL = `${BASE_URL}user/`;

class AuthService {
  login(emailId, password) {
    let payload = { emailId, password };
    return axios.post(API_URL + "login", payload).then((response) => {
      return response.data;
    });
  }

  logout() {
    sessionStorage.setItem("AccUser", null);
    sessionStorage.setItem("isLoggedIn", false);
    sessionStorage.setItem("AccToken", null);
  }

  register(username, emailId, password, dob, gender) {
    return axios
      .post(API_URL + "register", {
        username,
        emailId,
        password,
        dob,
        gender,
      })
      .then((response) => {
        return response.data;
      });
  }
}

export default new AuthService();
