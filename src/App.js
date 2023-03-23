import { Container, Row } from 'react-bootstrap';
import Search from './components/Search';
import CocktailCard from './components/CocktailCard';
import AppTitle from './components/AppTitle';
import { useState, useEffect } from 'react';
import { getRandomCocktail } from './functions/getRandomCocktail';
import CocktailIngrds from './components/CocktailIngrds';
import { getIngredients } from './functions/getIngredients';

function App() {
  const [image, setImage] = useState('');
  const [cocktailName, setCocktailName] = useState('');
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getRandomCocktail();
      setImage(data.drinks[0].strDrinkThumb);
      setCocktailName(data.drinks[0].strDrink);
      setIngredients(getIngredients(data.drinks[0]));
    })();
  }, []);

  return (
    <Container style={{ minWidth: '280px' }}>
      <AppTitle />
      <Search />
      <Row className='mx-3 my-2'>
        <CocktailCard cocktailImage={image} cocktailName={cocktailName} />
        <CocktailIngrds ingredientList={ingredients} />
      </Row>
    </Container>
  );
}

export default App;
