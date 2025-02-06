import axios from "axios";
import { BASE_URL } from "@/constants";

interface Dog {
  id: string;
  img: string;
  name: string;
  age: number;
  zip_code: string;
  breed: string;
}

const getBreeds = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/dogs/breeds`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const getDogs = async (queryParams = {}) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/dogs/search?size=100&from=25&sort=breed:asc&${queryParams}`,
      {
        withCredentials: true,
      }
    );

    if (response.data?.resultIds) {
      return getMatchedDogs(response.data.resultIds);
    }
  } catch (error) {
    console.error(error);
  }
};

const getMatchedDogs = async (
  resultIds: Array<string>
): Promise<Array<Dog>> => {
  try {
    const response = await axios.post(`${BASE_URL}/dogs`, resultIds, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default { getBreeds, getDogs };
