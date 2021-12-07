import axios from "axios";
import { BASE_URL } from "../Constant";
import { HttpClient } from "../utils/httpClient";

const API_URL = `${BASE_URL}user/`;

class AuthService {
  login(emailId, password) {
    let payload = { emailId, password };
    return axios.post(API_URL + "login", payload).then((response) => {
      console.log(response.data);
      // if (response.data.data.token) {
      //   sessionStorage.setItem("isLoggedIn", true);
      //   sessionStorage.setItem("AccToken", response.data.data.token);
      // }
      // sessionStorage.setItem("AccUser", JSON.stringify(response.data));
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
        console.log(response.data);
        return response.data;
      });
  }
}

export default new AuthService();
