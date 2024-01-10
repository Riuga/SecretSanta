import axios from "./axios.ts";

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(
      "/api/v1/auth/email/login",
      JSON.stringify({ email, password }),
      { headers: { "Content-Type": "application/json" }, withCredentials: true }
    );
    // console.log(JSON.stringify(response?.data));
    console.log(JSON.stringify(response));
    return response
  } catch (err) {
    if (!err) {
      return 'Error'
  }
}};

export const signup = async (email: string, password: string) => {
  const response = await axios.post(
    "/api/v1/auth/email/register",
    JSON.stringify({ email, password }),
    { headers: { "Content-Type": "application/json" }, withCredentials: true }
  );
  return response;
};
