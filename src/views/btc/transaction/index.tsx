import React from 'react';
import style from './index.module.scss';

export default class ViewBTCTransation extends React.Component {
  public render() {
    return (
      <div
        className={style.view}>
        <span>BTC交易</span>
      </div>
    );
  }
}
