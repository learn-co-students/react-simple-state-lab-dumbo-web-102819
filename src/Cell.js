import React, { Component } from 'react';

class Cell extends Component {
    constructor(props) {
        super();
        this.state = {
            color: props.value
        }

        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.setState({
            color: '#333'
        })
    }

    render() {
        return(
            <div onClick={this.handleClick} className="cell" style={{backgroundColor: this.state.color}}></div>
        )
    }
}

export default Cell;