import React from 'react'
import Col from 'react-bootstrap/Col';
import Item from './item'

const Checkout = (numberArray) => {
  const numbers = Object.values(numberArray).map(o => {
          return {
              position: o.position,
              values: o.value
          }
  }).filter(v => v)

  return (    
    <div>
      <div style={{minHeight:"510px"}}>
      <b>Numbers Selected</b>
      <Col>
        {
          numbers.map((data,index) => <div key={index}>
            <Item count={data.position} data={data.values} name="Mark"></Item>
          </div>)
        }
      </Col>
      </div>
    </div>
  )
}

export default Checkout
