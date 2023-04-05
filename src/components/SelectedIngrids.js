export default function SelectedIngrids(props) {
  return (
    <div className='form-control' style={{ height: '2.4rem', color: 'grey' }}>
      {props.selectedItems.length === 0 && <p>Selected ingredients</p>}
    </div>
  );
}

//
