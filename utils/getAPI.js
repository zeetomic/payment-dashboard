import Cookie from 'js-cookie';

export const api = function({req, redirect, $axios}) {
  let token;
  if (process.server) {
    const jwtCookie = req.headers.cookie
      .split(";")
      .find(c => c.trim().startsWith("token="));
    if (!jwtCookie) return;
    token = jwtCookie.split("=")[1];
  }
  if (process.client) {
    token = Cookie.get("token");
  }
  const config = {
    headers: {
      Authorization: "Bearer " + token
    }
  };
  return $axios.get("/apis/v1/request-api-key", config)
    .then((res) => {
      return {
        api: res.data.message,
      }
    })
    .catch((e) => {
      redirect('/login');
    })
}