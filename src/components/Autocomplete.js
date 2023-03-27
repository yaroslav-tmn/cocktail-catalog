import { ListGroup } from 'react-bootstrap';
import './Autocomplete.css';
import { useKeyboardsNavigation } from '../hooks/useKeyboardNavigation';

export default function Autocomplete(props) {
  const { dataDrinks, onSelect } = props;

  const { activeIndex, getDrinkByName } = useKeyboardsNavigation(
    dataDrinks,
    onSelect
  );

  return (
    <ListGroup as='ul' className='autolist'>
      {props.dataDrinks.map((drink, index) => (
        <ListGroup.Item
          as='li'
          className={`${index === activeIndex ? 'active__item' : ''}`}
          key={drink.idDrink}
          onClickCapture={() => {
            getDrinkByName(drink.idDrink);
          }}
        >
          {drink.strDrink}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
