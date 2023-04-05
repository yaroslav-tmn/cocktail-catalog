import axios from 'axios';

async function getCocktailByIngredient(ingredient) {
  try {
    const response = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export { getCocktailByIngredient };
