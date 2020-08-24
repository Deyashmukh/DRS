import React, { Component } from "react";
import Day from "../werating/day/day";
import classes from "./Medscore.module.css";
import axios from "../../axios-instance";
import Modal from "../UI/Modal/Modal";
import Summary from "../UI/Summary/Summary";
class Weekscore extends Component {
  state = {
    weeksco: {
      Monday: 0,
      Tuesday: 0,
      Wednesday: 0,
      Thursday: 0,
      Friday: 0,
      Saturday: 0,
      Sunday: 0,
    },
    week: {
      Monday: { s: 0, t: "" },
      Tuesday: { s: 0, t: "" },
      Wednesday: { s: 0, t: "" },
      Thursday: { s: 0, t: "" },
      Friday: { s: 0, t: "" },
      Saturday: { s: 0, t: "" },
      Sunday: { s: 0, t: "" },
    },
    totalscore: 0,
    totaltime: 0,
    totalweekscore: 0,
    mod: false,
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const weeksco = {};
    let tws = 0;
    for (let param of query.entries()) {
      console.log(param[0]);
      if (param[0] === "tscore") {
        tws = param[1];
      } else {
        weeksco[param[0]] = +param[1];
      }
    }
    this.setState({ weeksco: weeksco, totalweekscore: tws });
  }

  inc = (divas) => {
    const week = { ...this.state.week };
    const weekD = week[divas].s;
    const oldco = this.state.totalscore;
    const newsco = oldco + 1;
    if (weekD === 10) {
      return;
    }
    const newweekD = weekD + 1;
    week[divas].s = newweekD;
    this.setState({ week: week, totalscore: newsco });
  };
  dec = (divas) => {
    const week = { ...this.state.week };
    const weekD = week[divas].s;
    const oldco = this.state.totalscore;
    const newsco = oldco - 1;
    if (weekD === 0) {
      return;
    }
    const newweekD = weekD - 1;
    week[divas].s = newweekD;
    this.setState({ week: week, totalscore: newsco });
  };

  changehan = (event, ind) => {
    const week = { ...this.state.week };
    week[ind].t = event.target.value;
    const oldval = this.state.totaltime;
    const n = event.target.value;
    const newval = +(oldval + n);
    console.log(event.target.value);
    this.setState({ week: week, totaltime: newval });
  };
  backhan = () => {
    this.setState({ mod: false });
  };

  submithan = () => {
    const data = {
      weekmed: this.state.week,
      totalscore: this.state.totalscore,
      weeksco: this.state.weeksco,
      totalweekscore: this.state.totalweekscore,
    };
    axios
      .post("/stats.json", data)
      .then((response) => {
        this.setState({ mod: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  clchan = () => {
    this.props.history.push("/");
  };

  render() {
    let mo = null;
    if (this.state.mod) {
      mo = (
        <Modal klick={this.backhan}>
          <Summary
            ts={this.state.totalweekscore}
            med={this.state.totalscore}
            clc={this.clchan}
          />
        </Modal>
      );
    }
    const weeda = Object.keys(this.state.week).map((num) => {
      return (
        <Day
          key={num}
          weekday={num}
          score={this.state.week[num].s}
          inc={() => this.inc(num)}
          dec={() => this.dec(num)}
          inp={num}
          input={(event) => this.changehan(event, num)}
        />
      );
    });

    return (
      <React.Fragment>
        {mo}
        <div className={classes.Outline}>{weeda}</div>
        <div className={classes.fscore}>
          MedScore:{" "}
          <div style={{ fontSize: "60px", color: "#FBB117" }}>
            {this.state.totalscore}
          </div>
          <button onClick={this.submithan} className={classes.myButton}>
            Submit
          </button>
          <p>{this.state.totaltime}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Weekscore;
