export const login = async (username, password) => {
  console.log("fired");
  const response = await fetch("http://10.0.3.2:8000/account/api-auth/login/", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      username,
      password
    })
  });
  if (response.ok) {
    const results = await response.json();
    console.log("logged");
    return results;
  }
  const err = await response.text();
  console.log(err);
  throw new Error(err);
};
