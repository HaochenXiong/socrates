import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import FunctionOne from './Components/Function1'
import FunctionTwo from './Components/Function2'

const students = ["Bob","Robert","Angel","Ellen","Jacky","James"];
const nameList = ["Bob","Robert","Angel","Ellen","Jacky","James"];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenName: undefined,
    }
  };

  changeResultOne = () => {
    const index = Math.floor(Math.random() * students.length);
    this.setState({
      chosenName: students[index]
    })
  }

  changeResultTwo = () => {
  const index = Math.floor(Math.random() * nameList.length);
  nameList.splice(index,1)
  if (nameList.length < 1) { alert('Every one has been called!'); }
  this.setState({
    pickName: nameList[index]
  }) 
  }
 
  render() {
    
   return (
      <div>
        <Header />
        <FunctionOne buttonPressed={this.changeResultOne}/>
        <p class= "answerOne">Answer: {this.state.chosenName}</p>
        <FunctionTwo buttonPressed={this.changeResultTwo}/>
        <p class= "answerTwo">Answer: {this.state.pickName}</p>
      </div>
    );
  }
}

export default App;
