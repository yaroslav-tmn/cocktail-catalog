import { Col, Row, FormSelect } from 'react-bootstrap';

//<Col xxl='auto' xl='auto' lg='auto' md='auto' xs sm>

export default function Search() {
  return (
    <Row className='mx-5 p-3 justify-content-start border border-1 rounded-3 align-items-center d-flex flex-row flex-wrap'>
      <Col xs='auto' className='p-1'>
        Search by:
      </Col>
      <Col md='auto' sm xs className='p-1'>
        <FormSelect>
          <option value='1'>name</option>
          <option value='2'>ingredient</option>
        </FormSelect>
      </Col>
      <Col xxl md className='p-1'>
        <input className='form-control'></input>
      </Col>
    </Row>
  );
}
