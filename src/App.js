import './App.css';
import React from 'react';
import Header from './components/Header';
import Component1 from './components/Component1';
import Component2 from './components/Component2';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      display1 : false,
      display2 : false
    }
  }

  displayContent1() {
    this.setState ({
      display1 : !this.state.display1
    })
  }

  displayContent2() {
    this.setState ({
      display2 : !this.state.display2
    })
  }

  render () {
    return (
      <div className="App" >
        <Header />
        <div className="ButtonContainer">
          <button onClick={() => this.displayContent1()}>To see styling in Functional Component</button>
          <button onClick={() => this.displayContent2()}>To see styling in class component</button>
        </div>
        <div className="ContentShow">
          {
            this.state.display1 ? <Component1 /> : null
          }
          {
            this.state.display2 ? <Component2 /> : null
          } 
        </div>
      </div>
    );
  }
}

export default App;
