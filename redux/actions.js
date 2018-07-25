import { login, getTweets, register } from "./../components/api";
import store from "./store";
export const loginUser = (username, password) => dispatch => {
  dispatch({ type: "LOGIN_SENT" });
  login(username, password)
    .then(results => {
      const { user, token } = results;
      dispatch({
        type: "LOG_IN_SUCCESS",
        payload: {
          token,
          username: user.username,
          id: user.id,
          isAuthenticated: true
        }
      });
    })
    .catch(err => {
      dispatch({ type: "LOGIN_FAILED", payload: { message: err } });
    });
};
export const registerUser = (username, password) => dispatch => {
  dispatch({ type: "REGISTER_SENT" });
  register(username, password)
    .then(results => {
      const { user, token } = results;
      dispatch({
        type: "REGISTER_SUCCESS",
        payload: {
          token,
          username: user.username,
          id: user.id,
          isAuthenticated: true
        }
      });
    })
    .catch(err => {
      dispatch({ type: "REGISTRATION_FAILED", payload: { message: err } });
    });
};

export const fetchTweets = () => (dispatch, getState) => {
  dispatch({ type: "FETCH_SENT" });
  const token = getState().userLogin.token;
  getTweets(token)
    .then(results => {
      dispatch({
        type: "TWEET_FETCH_SUCESS",
        payload: { tweets: results }
      });
    })
    .catch(err => {
      dispatch({ type: "FETCH_FAILD", payload: { message: err } });
    });
};
