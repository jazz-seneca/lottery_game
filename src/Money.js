import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import dice from './roundDice.png';
import Button from 'react-bootstrap/Button';

const Money = () => {
  return (
    <div>
      <img src={dice} alt="Dice Picture"></img>
      <Button className="button round border-gradient border-gradient-purple" variant="dark" size="lg" active>$1</Button>{' '}
      <Button className="button round border-gradient border-gradient-purple" variant="dark" size="lg" >$5</Button>{' '}
      <Button className="button round border-gradient border-gradient-purple" variant="dark" size="lg" >$10</Button>{' '}
      <Button className="button round border-gradient border-gradient-purple" variant="dark" size="lg" >$20</Button>{' '}

    </div>
  )
}

export default Money
