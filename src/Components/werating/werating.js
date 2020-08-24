import React, { Component } from "react";
import Day from "./day/day";
import classes from "./werating.module.css";
//import axios from "axios";
class Weekscore extends Component {
  state = {
    week: {
      Monday: 50,
      Tuesday: 50,
      Wednesday: 50,
      Thursday: 50,
      Friday: 50,
      Saturday: 50,
      Sunday: 50,
    },
    totalscore: 350,
  };
  incfive = (divas) => {
    const week = { ...this.state.week };
    const weekD = week[divas];
    const oldco = this.state.totalscore;
    const newsco = oldco + 5;
    if (weekD === 100) {
      return;
    }
    const newweekD = weekD + 5;
    week[divas] = newweekD;
    this.setState({ week: week, totalscore: newsco });
  };
  decfive = (divas) => {
    const week = { ...this.state.week };
    const weekD = week[divas];
    const oldco = this.state.totalscore;
    const newsco = oldco - 5;
    if (weekD === 50) {
      return;
    }
    const newweekD = weekD - 5;
    week[divas] = newweekD;
    this.setState({ week: week, totalscore: newsco });
  };
  proceedhan = () => {
    const arr = [];
    for (let i in this.state.week) {
      arr.push(
        encodeURIComponent(i) + "=" + encodeURIComponent(this.state.week[i])
      );
    }
    arr.push("tscore=" + this.state.totalscore);
    const qstring = arr.join("&");
    this.props.history.push({ pathname: "/med", search: "?" + qstring });
  };
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    const weeda = Object.keys(this.state.week).map((num) => {
      return (
        <Day
          key={num}
          weekday={num}
          score={this.state.week[num]}
          inc={() => this.incfive(num)}
          dec={() => this.decfive(num)}
        />
      );
    });

    return (
      <React.Fragment>
        <div className={classes.Outline}>{weeda}</div>
        <div className={classes.fscore}>
          WeekScore:{" "}
          <div style={{ fontSize: "60px", color: "#FBB117" }}>
            {this.state.totalscore}
          </div>
          <button onClick={this.proceedhan} className={classes.myButton}>
            Proceed
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Weekscore;
