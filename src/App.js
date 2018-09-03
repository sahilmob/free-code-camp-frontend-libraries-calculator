import React, { Component } from 'react';
import ButtonNormal from './components/ButtonNormal'
import ButtonWide from './components/ButtonWide'
import ButtonTall from './components/ButtonTall'

class App extends Component {
  state = {
    total: null,
    currentNum: ["0"],
    expression: []
  }

  numClickHandler = (e) => {
    let newCurrentNum = this.state.currentNum
    newCurrentNum.push(e.target.innerText)
    if (newCurrentNum[0] === "0") {
      newCurrentNum.shift()
    }
    this.setState({
      currentNum: newCurrentNum
    })
  }
  acClickHandler = (e) => {
    this.setState({
      total: null,
      currentNum: [0]
    })
  }
  mathOpClickHandler = (e) => {
    let newExpression = this.state.expression
    newExpression.push(this.state.currentNum.join(''))
    newExpression.push(e.target.innerText)
    this.setState({
      currentNum: [],
      expression: newExpression
    })
    console.log(this.state.expression.join(''))
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
        <div id="display">{this.state.currentNum.join('')}</div>
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
