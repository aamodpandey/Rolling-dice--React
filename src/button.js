import React, { Component } from "react";
import Diegenerator from "./diegenerator";
import "./styles/button.css";
class button extends Component {
  state = {
    isclicked: 0,
    rand: 1,
    rand1: 1,
  };
  randgen = () => {
    let r = Math.floor(Math.random() * 6) + 1;
    let r1 = Math.floor(Math.random() * 6) + 1;
    let arr = [r, r1];
    this.setState({ rand: arr[0], rand1: arr[1], isclicked: 1 });
  };
  render() {
    return (
      <div className=" justify-content-center  d-flex flex-column">
        <Diegenerator
          num1={this.state.rand}
          num2={this.state.rand1}
          className={this.state.isclicked ? "animatedie" : null}
        />
        <div className="purple m-auto mt-5 rounded">
          <button
            onClick={() => {
              setTimeout(() => {
                this.randgen();
              }, 200);
              setTimeout(() => {
                this.setState({ isclicked: 0 });
              }, 700);
            }}
            className={
              "btn btn-dark p-3 py-2 " +
              (this.state.isclicked == 1 ? "disabled shadow-none" : null)
            }
          >
            <h4 className="p-0 m-0">
              {this.state.isclicked == 1 ? "Rolling die!" : "Roll Die!"}
            </h4>
          </button>
        </div>
      </div>
    );
  }
}
export default button;
