import { Card } from 'react-bootstrap';

export default function CocktailRecipe(props) {
  return (
    <Card style={{ marginTop: '0.5rem' }}>
      <Card.Header
        style={{
          backgroundColor: '#c2dbfe',
          fontWeight: 'bold',
        }}
      >
        Recipe
      </Card.Header>
      <Card.Body>{props.textRecipe}</Card.Body>
    </Card>
  );
}
