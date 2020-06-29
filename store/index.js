export const actions = {
  async nuxtServerInit({ commit }, { req, redirect, $axios }) {
    if (!req.headers.cookie) return;
  // Get token from header
    const jwtCookie = req.headers.cookie
      .split(";")
      .find(c => c.trim().startsWith("token="));
    if (!jwtCookie) return;
    const token = jwtCookie.split("=")[1];
    if(!token) return;
    await commit('user/SET_TOKEN', token);
  }
}