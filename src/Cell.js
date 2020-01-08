import React, { Component } from 'react';

class Cell extends Component {
  state = {
    color: this.props.value
  }

  render() {
    return (
      <div className='cell' style={{backgroundColor: this.state.color}} onClick={this.handleClick}></div>
    );
  }

  handleClick = () => {
    this.setState({color: '#333'})
  }
}

export default Cell;
