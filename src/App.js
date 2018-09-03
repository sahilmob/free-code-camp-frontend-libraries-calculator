import React, { Component } from 'react';
import ButtonNormal from './components/ButtonNormal'
import ButtonWide from './components/ButtonWide'
import ButtonTall from './components/ButtonTall'

class App extends Component {
  state = {
    total: null,
    currentNum: 0
  }

  numClickHandler = (e) => {
    console.log(e.target.innerText);
  }
  acClickHandler = (e) => {
    console.log(e.target.innerText);
  }
  mathOpClickHandler = (e) => {
    console.log(e.target.innerText);
  }
  decimalClickHandler = (e) => {
    console.log(e.target.innerText);
  }
  equalsClickHandler = (e) => {
    console.log(e.target.innerText);
  }


  render() {
    return (
      <div className="App">
        <div></div>
        <div id="display">0</div>
        <ButtonWide numString="clear" number="AC" clicked={this.acClickHandler} />
        <ButtonNormal numString="add" number="+" clicked={this.mathOpClickHandler} />
        <ButtonNormal numString="subtract" number="-" clicked={this.mathOpClickHandler} />
        <ButtonNormal numString="multiply" number="*" clicked={this.mathOpClickHandler} />
        <ButtonNormal numString="divide" number="/" clicked={this.mathOpClickHandler} />
        <ButtonNormal numString="one" number="1" clicked={this.numClickHandler} />
        <ButtonNormal numString="two" number="2" clicked={this.numClickHandler} />
        <ButtonNormal numString="three" number="3" clicked={this.numClickHandler} />
        <ButtonNormal numString="four" number="4" clicked={this.numClickHandler} />
        <ButtonNormal numString="five" number="5" clicked={this.numClickHandler} />
        <ButtonNormal numString="six" number="6" clicked={this.numClickHandler} />
        <ButtonNormal numString="seven" number="7" clicked={this.numClickHandler} />
        <ButtonNormal numString="eight" number="8" clicked={this.numClickHandler} />
        <ButtonNormal numString="nine" number="9" clicked={this.numClickHandler} />
        <ButtonWide numString="zero" number="0" clicked={this.numClickHandler} />
        <ButtonNormal numString="decimal" number="." clicked={this.decimalClickHandler} />
        <ButtonTall numString="equals" number="=" clicked={this.equalsClickHandler} />
      </div>
    );
  }
}

export default App;
