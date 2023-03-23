import { Card, Col } from 'react-bootstrap';
import './CocktailCard.css';

export default function CocktailCard() {
  return (
    <Col
      style={{ paddingLeft: '0', paddingRight: '0', textAlign: 'center' }}
      className='justify-content-center'
      md={'auto'}
      xs={12}
    >
      <Card className='cocktail-card'>
        <Card.Img variant='top' src='preview.jpg' />
        <Card.Body>
          <Card.Title>Some cocktail</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
}
