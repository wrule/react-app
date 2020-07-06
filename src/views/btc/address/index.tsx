import React from 'react';
import style from './index.module.scss';

export default class ViewBTCAddress extends React.Component {
  public render() {
    return (
      <div
        className={style.view}>
        <span>BTC地址</span>
      </div>
    );
  }
}
