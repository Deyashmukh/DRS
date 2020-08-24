import React, { Component } from "react";
import classes from "./App.module.css";
import Weekscore from "./Components/werating/werating";
import { Route, Switch, Redirect, NavLink } from "react-router-dom";
import MedScore from "./Components/Medscore/Medscore";
import Analytics from "./Components/Analytics/Analytics";
class App extends Component {
  render() {
    return (
      <div className={classes.Blog}>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/analytics" exact activeClassName={classes.active}>
                  Analytics
                </NavLink>
              </li>
              <li>
                <NavLink to="/drs" exact activeClassName={classes.active}>
                  DRS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/med",
                    hash: "#submit",
                    search: "?quick-search=true",
                  }}
                  activeClassName={classes.active}
                >
                  MedScore
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/analytics" exact component={Analytics} />
          <Route path="/drs" exact component={Weekscore} />
          <Route path="/med" exact component={MedScore} />
          <Redirect from="/" to="/drs" />
        </Switch>
      </div>
    );
  }
}

export default App;
