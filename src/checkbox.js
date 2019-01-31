import React from 'react';
import './App.css';
class Check extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            isChecked: false
        };
    }

    handleCheck = (xValue) => {
        if (this.state.isChecked) return;
        if (xValue === "X") {
            this.props.func(true);
            this.setState({
                value: 'X',
                isChecked: true
            });
        }
        if (xValue === "O") {
            this.props.func(false);
            this.setState({
                value: 'O',
                isChecked: true
            });
        }
    }

    render() {
        return (
            <button className="Check-box btn" children={this.state.value} onClick={() => this.handleCheck(this.props.aValue)} />
        );
    }
}

export default Check;
