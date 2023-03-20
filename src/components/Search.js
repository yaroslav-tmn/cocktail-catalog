import { Col, Row, FormSelect } from 'react-bootstrap';

export default function Search() {
  return (
    <Row className='mx-5 p-3 row justify-content-start border border-1 rounded-3 align-items-center'>
      <Col className='col-1'>Search by:</Col>
      <Col className='col-2'>
        <FormSelect>
          <option value='1'>name</option>
          <option value='2'>ingredient</option>
        </FormSelect>
      </Col>
      <Col>
        <input className='form-control'></input>
      </Col>
    </Row>
  );
}
