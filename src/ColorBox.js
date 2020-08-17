import React, { Component } from "react";
import Box from "./Box";
import "./ColorBox.css";

class ColorBox extends Component {
  static defaultProps = {
    nBox: 6,
  };
  render() {
    // new Array(this.props.nBox).fill(null).map(() => <Box />);
    // console.log("Here!!!");
    const boxes = Array.from({ length: this.props.nBox }).map(() => <Box />);
    return <div className="ColorBox">{boxes}</div>;
  }
}

export default ColorBox;
