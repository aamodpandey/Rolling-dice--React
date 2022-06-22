import React, { Component } from "react";
import "./styles/die.css";
class die extends Component {
  static defaultProps = {
    num: 1,
  };
  render() {
    let arr = ["", "one", "two", "three", "four", "five", "six"];
    let num_str = `fa-dice-${arr[this.props.num]}`;
    let src = "die fas fa-10x " + num_str + " " + this.props.className;
    return (
      <div style={{ display: "flex" }} className={this.props.className}>
        <div className={src} style={{ color: "var(--bs-purple)" }}></div>
      </div>
    );
  }
}
export default die;
