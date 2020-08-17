import React, { Component } from "react";
import "./ButtonColor.css";
import Btn from "./Btn";
class ButtonColor extends Component {
  state = {
    btnNum: [1, 2, 3, 4, 5],
  };

  removeNum(num) {
    this.setState((curSt) => ({
      btnNum: curSt.btnNum.filter((n) => n !== num),
    }));
  }
  render() {
    return (
      <div className="ButtonColor">
        {this.state.btnNum.map((num) => (
          <Btn number={num} remove={() => this.removeNum(num)} />
        ))}
      </div>
    );
  }
}

export default ButtonColor;
