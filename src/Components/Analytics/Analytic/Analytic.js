import React from "react";
import classes from "./Analytic.module.css";
const an = (props) => {
  let feedback = null;
  if (props.ts > 430 && props.med > 35) {
    feedback = <p>You Geeky Monk!</p>;
  }
  if (props.ts < 350 && props.med < 25) {
    feedback = <p>You piece of shit!</p>;
  } else feedback = <p>Tu aam aadmi hi rahega!</p>;
  return (
    <React.Fragment>
      <div onClick={props.del} className={classes.Ana}>
        <p>WEEK:{props.no}</p>
        <p>DRS Score:{props.ts}</p>
        <p>Med Score:{props.med}</p>
        <p style={{ color: "#e9ab17" }}>{feedback}</p>
      </div>
    </React.Fragment>
  );
};
export default an;
