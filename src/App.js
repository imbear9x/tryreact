import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import Check from './checkbox.js';
let turn = "X";
class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  bienhinh = () => {
    console.log('Goi lai');
    let child = [];
    var possible = "XO";
    for (let index = 0; index < 100; index++) {
      console.log('Vao FOR ', index);
      const result = possible.charAt(Math.floor(Math.random() * possible.length));
      child.push(<Check  aValue={result} func={this.tangdiem} />);
    }
    return child;
  }
  tangdiem = (bool) => {
    console.log('BOOL: ________ ', bool);
    if (bool === true) this.setState({ count: this.state.count + 1 });
    if (bool === false) this.setState({ count: this.state.count - 1 });
  }
  
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 children={this.state.count}></h1>
        <div className="App-content" id="hihi">
          { this.bienhinh() }
        </div>
      </div>
    );
  }
}

export default App;
