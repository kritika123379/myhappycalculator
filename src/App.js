import React, { Component } from 'react'
import Keypad from './components/Keypad';
import Output from './components/Output';
import 'bootstrap/dist/css/bootstrap.min.css';

import { LIGHT_MODE, DARK_MODE } from './constants';


export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       result:'',
       heading:'Hii my beautiful calculator',
       mode: LIGHT_MODE,
    }
  }

  componentDidUpdate() {
    const body = document.getElementsByTagName('body')[0];
    if (this.state.mode === LIGHT_MODE) {
      body.classList.remove(DARK_MODE)
      body.classList.add(LIGHT_MODE)
    } else {
      body.classList.remove(LIGHT_MODE)
      body.classList.add(DARK_MODE)
      document.getElementsByTagName('body')[0].classList.add(DARK_MODE)
    }
  }
  
  changeMode = (e) => {
    this.setState({ mode: e.target.name });
  }

  buttonPressed = buttonName => {

    if(buttonName === '='){
      this.calculate()
    }
    else if(buttonName ==='C'){
      this.reset()
    }
    else if(buttonName ==='CE'){
      this.backspace();
    }
    else
    this.setState({
      result:this.state.result+buttonName
    });
  };

  reset = () =>{
    this.setState({
      result:""
    })
  }

  backspace = () =>{
    this.setState({
      result:this.state.result.slice(0,-1)
    })
  }

  calculate= () =>{
    try {
      this.setState({
        result:(eval(this.state.result)||"")+""
      })
    }
    catch(e){
      this.setState({
        result:"error" 
      })
    }
  }

  render() {
    return (
      <div className="App">
        <div className="calci-body">
          <h1>{this.state.heading}</h1>
          <Output result={this.state.result}/>
          <Keypad buttonPressed={this.buttonPressed} changeMode={this.changeMode} mode={this.state.mode}/>
        </div>
      </div>
    )
  }
}

export default App
