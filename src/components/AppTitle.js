import { Row, Col } from 'react-bootstrap';

export default function AppTitle() {
  return (
    <Row
      className='mx-3 my-2 border border-1 rounded-3'
      style={{ backgroundColor: '#c2dbfe' }}
    >
      <Col className='h1 text-center'>Cocktail Catalog</Col>
    </Row>
  );
}
