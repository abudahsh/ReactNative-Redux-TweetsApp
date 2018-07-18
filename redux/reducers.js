import { combineReducers } from "redux";
import { AsyncStorage } from "react-native";

const initialState = {
  username: "",
  email: ""
};

const userReducer = async (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SENT":
      return { ...state, message: "Login Sent" };

    case "LOG_IN_SUCCESS":
      try {
        await AsyncStorage.setItem("token", action.payload.token);
      } catch (error) {
        console.error(error);
      }
      return {
        ...state,
        message: "Login Success",
        username: action.payload.username
      };

    case "LOG_IN_FAILD":
      return { ...state, message: action.payload.err };

    case "AUTHENTICATION_ERROR":
    case "LOGIN_FAILED":
    case "REGISTRATION_FAILED":
    case "LOGOUT_SUCCESSFUL":
      AsyncStorage.removeItem("token");
      return { ...state, message: "Logged out" };
    default:
      return state;
  }
};

const AppReducer = combineReducers({ userReducer });

export default AppReducer;
