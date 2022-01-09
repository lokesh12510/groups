import authService from "../../Services/auth.service";
import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOG_OUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  SET_MESSAGE,
  START_LOADER,
  STOP_LOADER,
  CLEAR_GROUP,
  SET_USER,
  CLEAR_USER,
  SET_GROUP,
  CLEAR_USER_PENDING_LIST,
  CLEAR_USER_CONTRIBUTION,
} from "../actionTypes";

// Register action (working)
export const register =
  (username, emailId, password, dob, gender) => (dispatch) => {
    dispatch({
      type: START_LOADER,
    });
    return authService.register(username, emailId, password, dob, gender).then(
      (data) => {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: data,
        });
        const message = "Registration Success!";

        dispatch({
          type: SET_USER,
          payload: data,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: { message: message, type: "success" },
        });
        dispatch({
          type: STOP_LOADER,
        });

        return Promise.resolve();
      },
      (error) => {
        let message = "Error occurred! Recheck the form!";
        if (error.response.status === 401 && error.response.data.statusCode) {
          message = "Email Id already exists";
        }

        dispatch({
          type: REGISTER_FAIL,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: { message: message, type: "error" },
        });
        dispatch({
          type: STOP_LOADER,
        });

        return Promise.reject();
      }
    );
  };

// Login action (working)
export const login = (emailId, username, password) => (dispatch) => {
  dispatch({
    type: START_LOADER,
  });
  return authService.login(emailId, username, password).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: data,
      });
      const message = "Login Success!";

      dispatch({
        type: SET_USER,
        payload: data,
      });

      if (data.data.group) {
        dispatch({
          type: SET_GROUP,
          payload: data.data.group,
        });
      }

      dispatch({
        type: STOP_LOADER,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: { message: message, type: "success" },
      });

      return Promise.resolve();
    },
    (error) => {
      const message = "Invalid Email or Password!";

      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: { message: message, type: "error" },
      });
      dispatch({
        type: STOP_LOADER,
      });
      return Promise.reject();
    }
  );
};

// TODO:Logout action (Remove persist)
export const logout = () => (dispatch) => {
  dispatch({
    type: START_LOADER,
  });

  authService.logout();

  localStorage.removeItem("persist:root");

  dispatch({
    type: LOG_OUT,
  });
  const message = "Logged Out Successfully";

  dispatch({
    type: CLEAR_USER,
  });
  dispatch({
    type: CLEAR_GROUP,
  });
  dispatch({
    type: CLEAR_USER_PENDING_LIST,
  });
  dispatch({
    type: CLEAR_USER_CONTRIBUTION,
  });
  dispatch({
    type: SET_MESSAGE,
    payload: message,
  });
  dispatch({
    type: STOP_LOADER,
  });
};
