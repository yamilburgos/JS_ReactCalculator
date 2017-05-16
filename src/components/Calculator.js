import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { displayResults : 0 };
  }

  handleValue() {
    this.number1 = parseFloat(document.querySelector("#num1").value);
    this.number2 = parseFloat(document.querySelector("#num2").value);
    this.operator = document.querySelector("#operator").value;

    if(this.IsValidNumber(this.number1) || this.IsValidNumber(this.number2)) {
      return;
    }

    this.ChosenOperator(this.operator);
  }

  IsValidNumber(current) {
    return !(!isNaN(current) && isFinite(current));
  }

  ChosenOperator(operator) {
    switch(operator){
      case "-":
        this.SaveNumberResult(this.number1 - this.number2);
        break;
      case "*":
        this.SaveNumberResult(this.number1 * this.number2);
        break;
      case "/":
        this.SaveNumberResult(this.number1 / this.number2);
        break;
      default:
        this.SaveNumberResult(this.number1 + this.number2);
        break;
    }
  }

  SaveNumberResult(result) {
    this.setState ({ displayResults: result });
  }

  render() {
    return (
     <div>
        <h1>Math with React!</h1>

        <input type="text" id="num1" className="spacing" />

        <select id="operator">
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>

        <input type="text" id="num2" className="spacing" />

        <span className="spacing">=</span>
        <span className="spacing">{this.state.displayResults}</span>
        
        <button className="button" onClick={() => this.handleValue()}>Calculate!</button>
    </div>
    );
  }
}

export default Calculator;