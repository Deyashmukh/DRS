import React from "react";
import classes from "./Summary.module.css";
const sum = (props) => {
  let feedback = null;
  if (props.ts > 450 && props.med > 35) {
    feedback = <p>Hell yeah! I get to watch 3 movies the following week!</p>;
  }
  if (props.ts > 450) {
    feedback = <p>Two movies! wohooooo!</p>;
  }
  if (350 < props.ts < 450 && 30 < props.med < 35) {
    feedback = <p>Ahhh! Just one :(</p>;
  } else {
    feedback = <p>Na na na! Pathetic.</p>;
  }

  return (
    <React.Fragment>
      <div>
        <h3>Yash's Weekly Scores </h3>
      </div>
      <p>DRS: {props.ts}</p>
      <p>Med: {props.med} </p>
      <h4>{feedback}</h4>
      <button className={classes.Button} onClick={props.clc}>
        Continue
      </button>
    </React.Fragment>
  );
};
export default sum;
