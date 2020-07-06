import React from 'react';
import style from './index.module.scss';
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import ViewTransaction from './transaction';
import ViewBlock from './block';
import ViewAddress from './address';


export default class ViewBTC extends React.Component {
  public render() {
    return (
      <Router>
        <Link to="/transaction">交易</Link>
        <Link to="/block">区块</Link>
        <Link to="/address">地址</Link>
        <Switch>
          <Route to="/transaction">
            <ViewTransaction />
          </Route>
          <Route to="/block">
            <ViewBlock />
          </Route>
          <Route to="/address">
            <ViewAddress />
          </Route>
        </Switch>
        {/* <div
          className={style.view}>
          <span>BTC</span>
        </div> */}
      </Router>
    );
  }
}
