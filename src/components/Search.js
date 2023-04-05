import { useState, useEffect } from 'react';
import { Col, Row, FormSelect } from 'react-bootstrap';
import { getCocktailByName } from '../functions/getCocktailByName';
import Autocomplete from './Autocomplete';
import SelectedIngrids from './SelectedIngrids';

export default function Search(props) {
  const [query, setQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState('1');
  const [dataDrinks, setDataDrinks] = useState([]);
  const [autocompIsVisible, setAutocompIsVisible] = useState(false);
  const [blockAutocomp, setBlockAutocomp] = useState(false);
  const [selectedIngredients, setselectedIngredients] = useState([]);

  useEffect(() => {
    function clickOutsideAutocompHandler(event) {
      const autocompleteDomElement = document.querySelector('.autolist');
      if (
        autocompleteDomElement &&
        !autocompleteDomElement.contains(event.target)
      ) {
        setAutocompIsVisible(false);
      }
    }
    document.addEventListener('click', clickOutsideAutocompHandler);
    return () =>
      document.removeEventListener('click', clickOutsideAutocompHandler);
  }, []);

  useEffect(() => {
    const timeBeforeRequest = setTimeout(() => {
      async function fetchSuggestions() {
        if (selectedOption === '1') {
          props.ingridListToShow(false);
          if (query !== '' && !blockAutocomp) {
            const data = await getCocktailByName(query);
            if (data.drinks) {
              setDataDrinks(data.drinks);
              setAutocompIsVisible(true);
            }
          }
        }
        if (selectedOption === '2') {
          setQuery('');
          props.ingridListToShow(true);
        }
      }
      fetchSuggestions();
      setBlockAutocomp(false);
    }, 500);
    return () => clearTimeout(timeBeforeRequest);
  }, [query, selectedOption, props]);

  const onSelect = (data) => {
    setBlockAutocomp(true);
    if (selectedOption === '1') {
      setQuery(data.drinks[0].strDrink);
    }
    setAutocompIsVisible(false);
    props.drinkToShow(data);
  };

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
      <Col xxl md className='p-1' style={{ position: 'relative' }}>
        {selectedOption === '1' && (
          <input
            className='form-control'
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
            }}
          ></input>
        )}
        {dataDrinks.length > 0 && autocompIsVisible && (
          <Autocomplete dataDrinks={dataDrinks} onSelect={onSelect} />
        )}
        {selectedOption === '2' && (
          <SelectedIngrids selectedItems={selectedIngredients} />
        )}
      </Col>
    </Row>
  );
}
