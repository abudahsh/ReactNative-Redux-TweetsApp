import { login, getTweets, register, logout } from "./../components/api";
import store from "./store";
export const loginUser = (username, password) => dispatch => {
  dispatch({ type: "LOGIN_SENT", payload: { isLoading: true } });
  login(username, password)
    .then(results => {
      const { user, token, profile } = results;
      dispatch({
        type: "LOG_IN_SUCCESS",
        payload: {
          token,
          username: user.username,
          id: user.id,
          nickName: profile.nickname,
          profilePic: profile.picture,
          isAuthenticated: true,
          isLoading: false
        }
      });
    })
    .catch(err => {
      dispatch({ type: "LOGIN_FAILED", payload: { message: err } });
    });
};
export const registerUser = (username, password) => dispatch => {
  dispatch({ type: "REGISTER_SENT", payload: { isLoading: true } });
  register(username, password)
    .then(results => {
      const { user, token } = results;
      dispatch({
        type: "REGISTER_SUCCESS",
        payload: {
          token,
          username: user.username,
          id: user.id,
          isAuthenticated: true,
          isLoading: false
        }
      });
    })
    .catch(err => {
      dispatch({ type: "REGISTRATION_FAILED", payload: { message: err } });
    });
};

export const fetchTweets = () => (dispatch, getState) => {
  dispatch({ type: "FETCH_SENT", payload: { isLoading: true } });
  const token = getState().userLogin.token;
  getTweets(token)
    .then(results => {
      dispatch({
        type: "TWEET_FETCH_SUCESS",
        payload: { tweets: results, isLoading: false }
      });
    })
    .catch(err => {
      dispatch({ type: "FETCH_FAILD", payload: { message: err } });
    });
};

export const logoutUser = () => (dispatch, getState) => {
  dispatch({ type: "LOGOUT_SENT", payload: { isLoading: true } });
  logout(getState().userLogin.token)
    .then(results => {
      dispatch({
        type: "LOGOUT_SUCCESSFUL",
        payload: {
          nickName: "",
          profilePic: "",
          token: "",
          username: "",
          id: "",
          isAuthenticated: false,
          isLoading: false
        }
      });
    })
    .catch(err => {
      dispatch({ type: "LOGOUT_FAILD", payload: { message: err } });
    });
};
