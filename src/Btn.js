import React, { Component } from "react";
import "./Btn.css";
class Btn extends Component {
  render() {
    return <button onClick={this.props.remove}>{this.props.number}</button>;
  }
}

export default Btn;
