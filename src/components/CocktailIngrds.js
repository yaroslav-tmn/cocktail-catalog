import { Card, Col, ListGroup } from 'react-bootstrap';

export default function CocktailIngrds(props) {
  const ingredientsList = props.ingredientList.map((ingredient, index) => (
    <ListGroup.Item key={index}>{ingredient}</ListGroup.Item>
  ));

  return (
    <Col style={{ paddingRight: '0' }}>
      <Card>
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
    </Col>
  );
}
