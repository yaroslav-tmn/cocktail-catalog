import { ListGroup } from 'react-bootstrap';

export default function Autocomplete(props) {
  return (
    <ListGroup
      as='ul'
      style={{
        position: 'absolute',
        zIndex: '1',
        width: '100%',
      }}
    >
      {props.dataDrinks.map((drink) => (
        <ListGroup.Item as='li' key={drink.idDrink}>
          {drink.strDrink}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
