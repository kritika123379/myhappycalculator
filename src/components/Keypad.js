import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

import { LIGHT_MODE, DARK_MODE } from '../constants';

export class Keypad extends Component {
    buttonPressed = e =>{
        this.props.buttonPressed(e.target.name);
    }

    componentDidMount() {
        const buttons = document.getElementsByTagName('button');
        const remove = this.props.mode === LIGHT_MODE ? DARK_MODE: LIGHT_MODE
        for (let i of buttons) {
            i.classList.add(`${this.props.mode}-btn`)
            i.classList.remove(`${remove}-btn`)
        }
    }
    componentDidUpdate() {
        const buttons = document.getElementsByTagName('button');
        const remove = this.props.mode === LIGHT_MODE ? DARK_MODE: LIGHT_MODE
        for (let i of buttons) {
            i.classList.add(`${this.props.mode}-btn`)
            i.classList.remove(`${remove}-btn`)
        }
    }
    render() {
        return (
            <div className="buttons">
                <div className="wrapper">
                    <Button name="1" onClick={this.buttonPressed}>1</Button> 
                    <Button name="2" onClick={this.buttonPressed}>2</Button> 
                    <Button name="3" onClick={this.buttonPressed}>3</Button>
                    <Button name="/" onClick={this.buttonPressed}>/</Button> 
                    <Button name="CE" onClick={this.buttonPressed}>{'<-'}</Button>  
                    <br/>
                    <Button name="4" onClick={this.buttonPressed}>4</Button> 
                    <Button name="5" onClick={this.buttonPressed}>5</Button> 
                    <Button name="6" onClick={this.buttonPressed}>6</Button>
                    <Button name="*" onClick={this.buttonPressed}>*</Button>
                    <Button name="("  onClick={this.buttonPressed}>(</Button>
                    <br/>
                    <Button name="7" onClick={this.buttonPressed}>7</Button> 
                    <Button name="8" onClick={this.buttonPressed}>8</Button> 
                    <Button name="9" onClick={this.buttonPressed}>9</Button>
                    <Button name="-" onClick={this.buttonPressed}>-</Button>
                    <Button name=")" onClick={this.buttonPressed}>)</Button> 
                    <br/>
                    <Button name="." onClick={this.buttonPressed}>.</Button>
                    <Button name="0" onClick={this.buttonPressed}>0</Button>
                    <Button name="C" onClick={this.buttonPressed}>CE</Button>
                    <Button name="+" onClick={this.buttonPressed}>+</Button>
                    <Button name="=" onClick={this.buttonPressed}>=</Button>
               </div> 
                    <br/><br/>
                    <Button name={LIGHT_MODE} className="Light" onClick={this.props.changeMode}>  Light Theme</Button>
                    <Button name={DARK_MODE} className="Dark" onClick={this.props.changeMode}>Dark Theme</Button> 
               </div>
        )
    }
}

export default Keypad
