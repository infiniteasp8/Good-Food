
import axios from 'axios';

const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

export const fetchProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data.meals;
};
