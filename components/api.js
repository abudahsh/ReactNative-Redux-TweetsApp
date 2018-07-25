import { AsyncStorage } from "react-native";
export const login = async (username, password) => {
  console.log("fired");
  const response = await fetch(
    "http://192.168.1.5:8000/account/api-auth/login/",
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        username,
        password
      })
    }
  );
  if (response.ok) {
    const results = await response.json();
    console.log("logged");
    return results;
  }
  const err = await response.text();
  console.log(err);
  throw err;
};
export const register = async (username, password) => {
  console.log("fired");
  const response = await fetch(
    "http://192.168.1.5:8000/account/api-auth/register/",
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        username,
        password
      })
    }
  );
  if (response.ok) {
    const results = await response.json();
    console.log("logged");
    return results;
  }
  const err = await response.text();
  console.log(err);
  throw err;
};

export const getTweets = async token => {
  console.log("started...");
  const headers = {
    "Content-Type": "application/json"
  };

  if (token) {
    headers.Authorization = `Token ${token}`;
  }
  const response = await fetch("http://192.168.1.5:8000/test/tweets/", {
    headers
  });
  console.log("sent reuqest");
  if (response.ok) {
    const results = await response.json();
    return results;
  }
  const err = await response.text();
  console.log(err);
  throw err;
};
