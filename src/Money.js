import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import dice from './roundDice.png';
import Button from 'react-bootstrap/Button';

const Money = ({data, dataFromMoneyBox, money}) => {

  function CashBox(data){
    let a = Object.values(money).map(o => {
      return {
        moneyPrice: o.moneyPrice
      }
    }).filter(v => v).map(o=>o.moneyPrice)
    console.log(a)

    return <Button
      variant="dark" 
      size="lg" 
      key={data.index} 
      onClick={()=>dataFromMoneyBox(data.cash)} 
      value= {data.cash} 
      className={a.find(element => element === data.cash) != undefined ? "active button round border-gradient border-gradient-purple" : "button round border-gradient border-gradient-purple"}
      >
        {data.cash}
      </Button>
  }
  
  return (
    <div>
      <img src={dice} alt="Dice Picture"></img>
      {[1,5,10,20].map((cash, index) =>
          <CashBox cash={cash} key={index}/>
      )}


    </div>
  )
}

export default Money
