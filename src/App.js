import { Col, Container, Row } from 'react-bootstrap';
import Search from './components/Search';
import CocktailCard from './components/CocktailCard';
import AppTitle from './components/AppTitle';
import { useEffect } from 'react';
import { getRandomCocktail } from './functions/getRandomCocktail';

function App() {
  useEffect(() => {
    (async () => {
      const data = await getRandomCocktail();
      console.log(data);
    })();
  }, []);

  return (
    <Container style={{ minWidth: '280px' }}>
      <AppTitle />
      <Search />
      <Row className='mx-3 my-2'>
        <CocktailCard />
        <Col>another content</Col>
      </Row>
    </Container>
  );
}

export default App;
