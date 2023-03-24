import { useState, useEffect } from 'react';
import { Col, Row, FormSelect } from 'react-bootstrap';
import { getCocktailByName } from '../functions/getCocktailByName';

export default function Search() {
  const [query, setQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState('1');
  const [suggestions, setSuggestions] = useState([]);

  async function fetchSuggestions() {
    if (query !== '' && selectedOption === '1') {
      const data = await getCocktailByName(query);
      if (data.drinks) {
        setSuggestions(data.drinks.map((drink) => drink.strDrink));
        console.log(suggestions);
      }
    }
  }

  useEffect(() => {
    const timeBeforeRequest = setTimeout(() => {
      fetchSuggestions();
    }, 500);
    return () => clearTimeout(timeBeforeRequest);
  }, [query, selectedOption]);

  return (
    <Row className='mx-3 mx-xs-1 p-3 justify-content-start border border-1 rounded-3 align-items-center d-flex flex-row flex-wrap'>
      <Col xs='auto' className='p-1'>
        Search by:
      </Col>
      <Col md='auto' sm xs className='p-1'>
        <FormSelect
          value={selectedOption}
          onChange={(event) => setSelectedOption(event.target.value)}
        >
          <option value='1'>name</option>
          <option value='2'>ingredient</option>
        </FormSelect>
      </Col>
      <Col xxl md className='p-1'>
        <input
          className='form-control'
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
          }}
        ></input>
      </Col>
    </Row>
  );
}
