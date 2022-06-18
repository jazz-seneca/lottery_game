import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Money from './Money';
import Number from './NumberBox';
import Checkout from './Checkout';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        WHE WHE on D'Avenue
      </header>
      <div>
      <Container style={{backgroundColor:'#f5d054'}}>
        <Row>
          <Col md={3}>
            <Money/>
          </Col>
          <Col md={6} className="numberbox">
            <Number/>
            
          </Col>
          <Col md={3} className="checkout">
            <Checkout/>
          </Col>
        </Row>
      </Container>
      </div>
    </div>
  );
}

export default App;
