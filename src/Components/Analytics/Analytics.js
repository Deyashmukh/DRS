import React, { Component } from "react";
import axios from "../../axios-instance";
import Analytic from "./Analytic/Analytic";
import Spinner from "../UI/Spinner/Spinner";
class ana extends Component {
  state = {
    array: [],
    spin: true,
  };
  componentDidMount() {
    axios
      .get("/stats.json")
      .then((response) => {
        console.log(response);
        const req = Object.keys(response.data).map((num, index) => {
          return {
            ...response.data[num],
            Weekno: index + 1,
            //    perdrs:
            //       ((response.data[index + 1].totalweekscore -
            //         response.data[index].totalweekscore) /
            //         response.data[index].totalweekscore) *
            //       100,
          };
        });
        this.setState({ array: req, spin: false });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  delhandler = (index) => {
    const array = [...this.state.array];
    array.splice(index, 1);
    this.setState({ array: array });
  };
  render() {
    let loa = null;
    if (this.state.spin) {
      loa = <Spinner />;
    }
    const ans = this.state.array.map((num, index) => {
      return (
        <Analytic
          no={num.Weekno}
          ts={num.totalweekscore}
          med={num.totalscore}
          per={num.perdrs}
          del={() => this.delhandler(index)}
        />
      );
    });
    return (
      <React.Fragment>
        <div>{loa}</div>
        <div>{ans}</div>
      </React.Fragment>
    );
  }
}
export default ana;
