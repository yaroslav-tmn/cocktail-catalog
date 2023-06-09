import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import Search from './components/Search';
import CocktailCard from './components/CocktailCard';
import AppTitle from './components/AppTitle';
import { useState, useEffect } from 'react';
import { getRandomCocktail } from './functions/getRandomCocktail';
import CocktailIngrds from './components/CocktailIngrds';
import { getIngredients } from './functions/getIngredients';
import CocktailRecipe from './components/CocktailRecipe';
import IngredientList from './components/IngredientList';

function App() {
  const [image, setImage] = useState('');
  const [cocktailName, setCocktailName] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState('');
  const [ingridListIsVisible, setIngridListIsVisible] = useState(false);

  function showCocktail(data) {
    setImage(data.drinks[0].strDrinkThumb);
    setCocktailName(data.drinks[0].strDrink);
    setRecipe(data.drinks[0].strInstructions);
    setIngredients(getIngredients(data.drinks[0]));
  }

  function ingridListVisibilityController(state) {
    setIngridListIsVisible(state);
  }

  useEffect(() => {
    (async () => {
      const data = await getRandomCocktail();
      showCocktail(data);
    })();
  }, []);

  return (
    <Container style={{ minWidth: '280px' }}>
      <AppTitle />
      <Search
        drinkToShow={showCocktail}
        ingridListToShow={ingridListVisibilityController}
      />
      {ingridListIsVisible && <IngredientList />}
      <Row className='mx-3 my-2'>
        <CocktailCard cocktailImage={image} cocktailName={cocktailName} />
        <Col className='rightcol'>
          <CocktailIngrds ingredientList={ingredients} />
          <CocktailRecipe textRecipe={recipe} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
