import React from 'react';
import style from './index.module.scss';

export default class ViewBTC extends React.Component {
  public render() {
    return (
      <div
        className={style.view}>
        <span>BTC</span>
      </div>
    );
  }
}
