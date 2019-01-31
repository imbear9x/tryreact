import React from 'react';
import logo from './logo.svg';
import Check from './checkbox.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.source = [];
  }

  handleAddPoint = (bool) => {
    if (bool === true)
      this.setState({ count: this.state.count + 1 });
    if (bool === false)
      this.setState({ count: this.state.count - 1 });
  }

  componentWillMount() {
    const possible = "XO";
    let i = 0;
    while (i < 100) {
      this.source.push(possible.charAt(Math.floor(Math.random() * possible.length)));
      i++;
    }
  }
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 children={this.state.count}></h1>
        <div className="App-content" id="hihi">
          {
            this.source.map((result, key) =>
              <Check key={key} aValue={result} func={this.handleAddPoint} />
            )
          }
        </div>
      </div>
    );
  }
}

export default App;
