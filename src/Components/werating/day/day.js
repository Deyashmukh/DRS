import React from "react";
import classes from "./day.module.css";
const Day = (props) => {
  let time = null;
  if (props.inp) {
    time = (
      <input
        className={classes.Input}
        type="number"
        name="time"
        placeholder="Time"
        onChange={props.input}
      />
    );
  }
  return (
    <React.Fragment>
      <div className={classes.Day}>
        <div className={classes.Label}>{props.weekday}</div>
        <div className={classes.Label}>{props.score}</div>
        <button
          onClick={props.inc}
          className={[classes.Button, classes.Success, classes.Label].join(" ")}
        >
          +
        </button>
        <button
          onClick={props.dec}
          className={[classes.Button, classes.Danger, classes.Label].join(" ")}
        >
          -
        </button>
        {time}
      </div>
    </React.Fragment>
  );
};

export default Day;
