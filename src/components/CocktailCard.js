import { Card, Col } from 'react-bootstrap';
import './CocktailCard.css';

export default function CocktailCard(props) {
  return (
    <Col
      style={{ paddingLeft: '0', paddingRight: '0', textAlign: 'center' }}
      className='justify-content-center'
      md={'auto'}
      xs={12}
    >
      <Card className='cocktail-card'>
        <Card.Img variant='top' src={props.cocktailImage} />
        <Card.Body>
          <Card.Title>{props.cocktailName}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
}
