import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      numberClick1: 0,
      numberClick2: 0,
      numberClick3: 0,
    }

    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  }

  handleClick1 = () => this.setState((estadoAnterior, _props) => ({numberClick1: estadoAnterior.numberClick1 +1}))
  handleClick2 = () => this.setState((estadoAnterior, _props) => ({numberClick2: estadoAnterior.numberClick2 +1}))
  handleClick3 = () => this.setState((estadoAnterior, _props) => ({numberClick3: estadoAnterior.numberClick3 +1}))
  getButtonColor = (num) => num % 2 === 0 ? 'green' : 'blue';

  render() {
    const { numberClick1, numberClick2, numberClick3} = this.state;
    return (
      <>
      <button onClick={this.handleClick1} style={{ backgroundColor: this.getButtonColor(numberClick1)}}>{this.state.numberClick1}</button>
      
      <button onClick={this.handleClick2} style={{ backgroundColor: this.getButtonColor(numberClick2)}}>{this.state.numberClick2}</button>
      
      <button onClick={this.handleClick3} style={{ backgroundColor: this.getButtonColor(numberClick3)}}>{this.state.numberClick3}</button>
      </>
    );
  }
}

export default App;
