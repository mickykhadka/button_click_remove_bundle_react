import React, { Component } from "react";
import "./Box.css";
import { choice } from "./helpers";
class Box extends Component {
  static defaultProps = {
    colors: [
      "blue",
      "blueviolet",
      "burlywood",
      "brown",
      "crimson",
      "cyan",
      "magenta",
      "pink",
      "black",
      "yellow",
      "green",
      "orange",
      "purple",
      "red",
      "deeppink",
      "gold",
      "gray",
      "tomato",
    ],
  };
  constructor(props) {
    super(props);
    this.state = {
      color: choice(this.props.colors),
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let randColor;
    do {
      randColor = choice(this.props.colors);
    } while (randColor === this.state.color);
    this.setState({
      color: randColor,
    });
  }
  render() {
    return (
      <div className="Box">
        <div
          style={{ backgroundColor: this.state.color }}
          onClick={this.handleClick}
        ></div>
      </div>
    );
  }
}

export default Box;
