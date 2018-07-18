import { login } from "./../components/api";

const loginUser = (username, password) => dispatch => {
  dispatch({ type: "LOGIN_SENT" });
  login(username, password)
    .then(results => {
      const { user, token } = results;
      dispatch({
        type: "LOG_IN_SUCCESS",
        payload: { token, username: user.username, id: user.id }
      });
    })
    .catch(err => {
      dispatch({ type: "LOG_IN_FAILD", payload: err });
    });
};

export default loginUser;
