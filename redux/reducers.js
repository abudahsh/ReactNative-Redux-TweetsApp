import { combineReducers } from "redux";
import { AsyncStorage } from "react-native";

const initialState = {
  userState: { isAuthenticated: false },
  TweetState: {}
};

const userLogin = (state = initialState.userState, action) => {
  switch (action.type) {
    case "LOGIN_SENT":
      return {
        ...state,
        message: "Login Sent",
        isLoading: action.payload.isLoading
      };

    case "LOG_IN_SUCCESS":
      // try {
      //   async () => {
      //     await AsyncStorage.setItem("token", action.payload.token);
      //   };
      // } catch (error) {
      //   console.error(error);
      // }

      return {
        ...state,
        message: "Login Success",
        username: action.payload.username,
        token: action.payload.token,
        profilePic: action.payload.profilePic,
        nickName: action.payload.nickName,
        isAuthenticated: action.payload.isAuthenticated,
        isLoading: action.payload.isLoading
      };

    case "REGISTER_SUCCESS":
      // try {
      //   async () => {
      //     await AsyncStorage.setItem("token", action.payload.token);
      //   };
      // } catch (error) {
      //   console.error(error);
      // }

      return {
        ...state,
        message: "Register Success",
        username: action.payload.username,
        token: action.payload.token,
        isAuthenticated: action.payload.isAuthenticated,
        isLoading: action.payload.isLoading
      };
    case "AUTHENTICATION_ERROR":
    case "LOGIN_FAILED":
    case "REGISTRATION_FAILED":
    case "LOGOUT_SUCCESSFUL":
      //await AsyncStorage.removeItem("token");
      return {
        ...state,
        username: action.payload.username,
        nickName: action.payload.nickName,
        profilePic: action.payload.profilePic,
        token: action.payload.token,
        id: action.payload.id,
        message: action.payload.message,
        isAuthenticated: action.payload.isAuthenticated
      };
    default:
      return state;
  }
};

const tweetFetch = (state = initialState.TweetState, action) => {
  switch (action.type) {
    case "FETCH_SENT":
      return {
        ...state,
        message: "Fetching Tweets Started ....",
        isLoading: action.payload.isLoading
      };
    case "TWEET_FETCH_SUCESS":
      return {
        ...state,
        tweets: action.payload.tweets,
        isLoading: action.payload.isLoading
      };

    case "FETCH_FAILD":
      return {
        ...state,
        message: "Error fetching tweets ...." + action.payload.err
      };
    default:
      return state;
  }
};

const AppReducer = combineReducers({
  userLogin,
  tweetFetch
});

export default AppReducer;
