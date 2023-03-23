import axios from 'axios';

async function getRandomCocktail() {
  try {
    const response = await axios.get(
      'https://www.thecocktaildb.com/api/json/v1/1/random.php'
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export { getRandomCocktail };
