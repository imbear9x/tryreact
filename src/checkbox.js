import React, { PureComponent } from 'react';

import './App.css';
class Check extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.aValue,
        };
    }
    
    check = () =>{
        const xValue = this.props.aValue;
        console.log('xValue _____________', xValue)
        if(xValue==="X") {
            this.props.func(true);
            this.setState({ value: 'X' });
        }
        if(xValue==="O") {
            this.props.func(false);
            this.setState({ value: 'O' });
        }
    }
    
    render() {
        return (
            <button  className="Check-box btn" children={this.state.value} onClick={() => this.check()}/>
        );
    }
}

export default Check;
