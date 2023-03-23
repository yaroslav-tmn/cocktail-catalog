import { Card, ListGroup } from 'react-bootstrap';
import './CocktailIngrds.css';

export default function CocktailIngrds(props) {
  const ingredientsList = props.ingredientList.map((ingredient, index) => (
    <ListGroup.Item key={index}>{ingredient}</ListGroup.Item>
  ));

  return (
    <Card className='ingredients-card'>
      <Card.Header
        style={{
          backgroundColor: '#c2dbfe',
          fontWeight: 'bold',
        }}
      >
        Ingredients
      </Card.Header>
      <ListGroup variant='flush'>{ingredientsList}</ListGroup>
    </Card>
  );
}
