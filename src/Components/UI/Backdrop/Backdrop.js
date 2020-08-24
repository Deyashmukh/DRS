import React from "react";
import classes from "./Backdrop.module.css";

const backdrop = (props) =>
  props.staywidme ? (
    <div className={classes.BackDrop} onClick={props.klick} />
  ) : null;
export default backdrop;
