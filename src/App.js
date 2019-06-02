import React from 'react';
import logo from './logo.svg';
import './App.css';
import PresentaionContainer from "./Presentation/presentaionContainer";

class Roulette extends React.Component{
  render(){
    return <div className='app'>
      <PresentaionContainer/>
    </div>
  }
}

export default Roulette;