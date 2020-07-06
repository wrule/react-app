import React from 'react';
import style from './index.module.scss';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import ViewTransaction from './transaction';
import ViewBlock from './block';
import ViewAddress from './address';

export default () => {
  let { path, url } = useRouteMatch();
  return <div className={style.view}>
    <Link to={`${url}/transaction`}>交易</Link>
    <Link to={`${url}/block`}>区块</Link>
    <Link to={`${url}/address`}>地址</Link>
    <Switch>
      <Route exact path={path}>
        <h3>请选择一个项目进入</h3>
      </Route>
      <Route path={`${path}/transaction`}>
        <ViewTransaction />
      </Route>
      <Route path={`${path}/block`}>
        <ViewBlock />
      </Route>
      <Route path={`${path}/address`}>
        <ViewAddress />
      </Route>
    </Switch>
  </div>;
}
