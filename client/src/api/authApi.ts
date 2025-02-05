import axios from "axios";
import { BASE_URL } from "@/constants";

interface LoginBody {
  email: string;
  name: string;
}

const login = async (body: LoginBody) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, body, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const logout = async () => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/logout`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default { login, logout };
