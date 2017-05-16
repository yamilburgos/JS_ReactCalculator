import React, { Component } from 'react';

class Bonus extends Component {
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

  CreatingCells() {
    var rows = [];
    var entries = [1,2,3,4,5,6,7,8,9,"+","-","*","/", "clr", "res"];

    for(var i = 0; i < entries.length; i++ ) {        
        rows.push(<div className="cell" onClick={() => 
        this.Testing()} key={entries[i]}>{entries[i]}</div>);
    }
    


    return <div className="board">{rows}</div>;
  }

  Testing(){
    console.log(document.querySelector('.cell'));
  }

  render() {
    return (
     <div>
        <h1>Bonus Points</h1>

        <input type="text" id="num1" className="spacing" />
        <input type="text" id="num2" className="spacing" />

        {this.CreatingCells()}

        <select id="operator">
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>

        <span className="spacing">=</span>
        <span className="spacing">{this.state.displayResults}</span>
        
        <button className="button" onClick={() => this.handleValue()}>Calculate!</button>
    </div>
    );
  }
}

export default Bonus;