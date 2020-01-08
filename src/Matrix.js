import React, { Component } from 'react';
import Cell from './Cell'

export default class Matrix extends Component {

  genRow = (vals) => (
    vals.map(val => <Cell value={val} />) // replace me and render a cell component instead!
  )

  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }


}

Matrix.defaultProps = {
  values: dataGen('#F00')
}

function dataGen (value)  {
  let outer = [];
  for (let y = 0; y < 10; y++) {
    let row = []
    for (let x = 0; x < 10; x++) {
      row.push(value)
    }
    outer.push(row)
  }
  return outer
}
