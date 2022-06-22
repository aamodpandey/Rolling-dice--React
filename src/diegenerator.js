import React, { Component } from "react";
import Die from "./die";
import "./styles/diegenerator.css";
class diegenerator extends Component {
  render() {
    return (
      <div className="row mw-50 mt-5 row-cols-2 gx-5 ">
        <Die
          className={"justify-content-end " + this.props.className}
          num={this.props.num1}
        />
        <Die className={this.props.className} num={this.props.num2} />
      </div>
    );
  }
}
export default diegenerator;
