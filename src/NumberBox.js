import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useState, useEffect, useRef } from "react";
import Checkout from './Checkout';
import Item from './item';


const NumberBox = ({data, dataFromNumberBox ,clearTheNumber, totalData, randomNumbers, number}) => {

  function SmallBox(data){
    let a = Object.values(number).map(o => {
        return {
            values: o.value
        }
    }).filter(v => v).map(o=>o.values)

    return <Col md={2} style={{minHeight: "70px"}}>
      <Button 
      // className="button border-gradient border-gradient-purple" 
      variant="dark" 
      size="lg" 
      key={data.index} 
      value= {data.number} 
      onClick={()=>dataFromNumberBox(data.number)}
      id= {data.number}
      className={a.find(element => element === data.number) != undefined ? "active button border-gradient border-gradient-purple" : "button border-gradient border-gradient-purple"}
      >
        {data.number}
      </Button>{' '}
    </Col>
  }


  return (
    <div>
      <Row style={{backgroundColor:'#4688ebe6'}}>
        {[...Array(20)].map((x, i) =>
          <SmallBox number={i+1} key={i}/>
        )}

        <Col md={2} className="cashbox">
          <Button className="button cashbutton border-gradient border-gradient-purple" variant="dark" size="lg" onClick={()=>totalData()}>CASH</Button>{' '}
        </Col>
        <Col md={2} className="cashbox" style={{marginLeft:'1%'}}>
          <Button className="button cashbutton border-gradient border-gradient-purple" variant="dark" size="lg" onClick={()=>clearTheNumber()}>CLEAR</Button>{' '}
        </Col>
      </Row>
      <Col md={2} className="cashbox" style={{marginLeft:'1%'}}>
        <Button className="button cashbutton border-gradient border-gradient-purple" variant="dark" size="lg" onClick={()=>randomNumbers()}>RANDOM</Button>{' '}
      </Col>
      
    </div>
  )
}

export default NumberBox