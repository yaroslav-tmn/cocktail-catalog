import axios from 'axios';

async function getCocktailByName(query) {
  try {
    const response = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export { getCocktailByName };
