import './IngredientList.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';

export default function IngredientList() {
  const [ingFlow, setIngFlow] = useState([]);

  async function getAllIngredients() {
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`
      );
      return response.data.drinks;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    (async () => {
      const data = await getAllIngredients();
      const allIngredients = data.map(
        (ingredient) => ingredient.strIngredient1
      );
      allIngredients.sort();
      setIngFlow(allIngredients);
    })();
  }, []);

  return (
    <Row className='mx-3 my-2 p-3 border border-1 rounded-3'>
      <Col style={{ paddingLeft: '0' }}>
        <div style={{ height: '2rem' }}>Select one or more ingredients:</div>
        <div className='ingredient-container'>
          {ingFlow.map((ingredient, index) => (
            <div className='ingredient-item' key={index}>
              {ingredient}
            </div>
          ))}
        </div>
      </Col>
    </Row>
  );
}
