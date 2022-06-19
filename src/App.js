import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Money from './Money';
import Number from './NumberBox';
import Checkout from './Checkout';

import { useState} from "react";


function App() {

  const [number, setNumber] = useState([]);
  const [money, setMoney] = useState([]);
  // const [currentPrice, setCurrentPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);


  const dataFromNumberBox = (event, index) => {
    const hash = {
      position: index || number.length,
      value: event
    }
    if(index === undefined){
      console.log(index)
    }
    if(index > 5){
      alert("You can only select 5 numbers.")
    }else if(index === undefined && hash.position >= 5){
      alert("You can only select 5 numbers.")
    }else{
      setNumber( number => [...number, hash])
    }
  };

  const dataFromMoneyBox = (event) => {
    const hash = {
      moneyLength: money.length,
      moneyPrice: event
    }
    // setCurrentPrice(event)
    setMoney( money => [...money, hash])
    setTotalPrice(totalPrice + event);
  }

  const clearTheNumber = () =>{
    setNumber([])
    setMoney([])
    setTotalPrice(0)
  }


  const totalData = () =>{
    let a = Object.values(number).map(o => {
        return {
            values: o.value
        }
    }).filter(v => v)
    if(a.length != 0){
      alert("You have selected " + a.length + " number : "+ (a.map(o=>o.values) || "x") + " and the cash is "+ totalPrice)
    }else{
      alert("You have selected no numbers and the cash is "+ totalPrice)
    }
  }

  const randomNumbers = () =>{
    clearTheNumber()
    let a = 0
    {[...Array(5)].map((x,i) =>{
      a = a + 1
      const val = Math.floor(Math.random() * 19) + 1
      dataFromNumberBox(val, a)
    })}
  }

  return (
    <div className="App">
      <header className="App-header">
        WHE WHE on D'Avenue
      </header>
      <div>
      <Container style={{backgroundColor:'#f5d054'}}>
        <Row>
          <Col md={3}>
            <Money money={money} dataFromMoneyBox={dataFromMoneyBox} />
          </Col>
          <Col md={6} className="numberbox">
            <Number number={number} dataFromNumberBox={dataFromNumberBox} clearTheNumber={clearTheNumber} totalData={totalData} randomNumbers={randomNumbers}/>
            
          </Col>
          <Col md={3} className="checkout">
            <Checkout {...number}/>
            <b>Price: ${totalPrice}</b>
          </Col>
        </Row>
      </Container>
      </div>
    </div>
  );
}

export default App;
