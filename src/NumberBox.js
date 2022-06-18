import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useState, useEffect, useRef } from "react";

const number = [];

const NumberBox = () => {

  const [number, setNumber] = useState([]);

  function SmallBox(data, index){
    return <Col md={2} style={{minHeight: "70px"}}>
      <Button className="button border-gradient border-gradient-purple" 
      variant="dark" 
      size="lg" 
      key={data.index} 
      value= {data.number} 
      onClick={handleClick}
      >
        {data.number}
      </Button>{' '}
    </Col>
  }
  
  const handleClick = event => {
    event.preventDefault();
    console.log('handleClick 👉️', event.target.value);

    setNumber( number => [...number, {
      position: number.length,
      value: event.target.value
    }])

    console.log(event.target.value)
    console.log(number)
  };


  return (
    <div>
      <Row style={{backgroundColor:'#4688ebe6'}}>
        {[...Array(20)].map((x, i) =>
          <SmallBox number={i+1}/>
        )}

        {number.map(item =>
          <p>{item.position}: {item.value}</p>
        )}
        <Col md={2} className="cashbox">
          <Button className="button cashbutton border-gradient border-gradient-purple" variant="dark" size="lg" >CASH</Button>{' '}
        </Col>
        <Col md={2} className="cashbox" style={{marginLeft:'1%'}}>
          <Button className="button cashbutton border-gradient border-gradient-purple" variant="dark" size="lg" >CLEAR</Button>{' '}
        </Col>
      </Row>
    </div>
  )
}

export default NumberBox
export {number};