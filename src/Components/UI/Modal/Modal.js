import React, { Component } from "react";
import classes from "./Modal.module.css";
import BackDrop from "../Backdrop/Backdrop";
//import Aux from "../../../hoc/Auxiliary";

class Modal extends Component {
  //   shouldComponentUpdate(nextProps, nextState) {
  //     return (
  //       nextProps.stay !== this.props.stay ||
  //       nextProps.children !== this.props.children
  //     );
  //   }

  render() {
    return (
      <React.Fragment>
        <BackDrop staywidme klick={this.props.klick} />
        <div
          className={classes.Modal}
          //   style={{
          //     transform: this.props.stay ? "translateY(0)" : "translateY(-100vh)",
          //     opacity: this.props.stay ? "1" : "0",
          //   }}
        >
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}
export default Modal;
