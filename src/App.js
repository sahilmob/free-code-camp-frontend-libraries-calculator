import React, { Component } from 'react';
import ButtonNormal from './components/ButtonNormal'
import ButtonWide from './components/ButtonWide'
import ButtonTall from './components/ButtonTall'

class App extends Component {
  state = {
    total: null,
    currentNum: 0
  }

  render() {
    return (
      <div className="App">
        <ButtonWide numString="clear" number="AC" />
        <ButtonNormal numString="add" number="+" />
        <ButtonNormal numString="subtract" number="-" />
        <ButtonNormal numString="multiply" number="*" />
        <ButtonNormal numString="divide" number="/" />
        <ButtonNormal numString="one" number="1" />
        <ButtonNormal numString="two" number="2" />
        <ButtonNormal numString="three" number="3" />
        <ButtonNormal numString="four" number="4" />
        <ButtonNormal numString="five" number="5" />
        <ButtonNormal numString="six" number="6" />
        <ButtonNormal numString="seven" number="7" />
        <ButtonNormal numString="eight" number="8" />
        <ButtonNormal numString="nine" number="9" />
        <ButtonWide numString="zero" number="0" />
        <ButtonNormal numString="decimal" number="." />
        <ButtonTall numString="equals" number="=" />
      </div>
    );
  }
}

export default App;
