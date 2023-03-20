import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import Search from './components/Search';

function App() {
  return (
    <Container>
      <Row className='mx-5 my-2 border border-1 rounded-3 MyTitle'>
        <Col className='h1 text-center'>Cocktail Catalog</Col>
      </Row>
      <Search />
    </Container>
  );
}

export default App;
