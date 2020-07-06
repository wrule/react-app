import React from 'react';
import style from './index.module.scss';

export default class ViewBTCBlock extends React.Component {
  public render() {
    return (
      <div
        className={style.view}>
        <span>BTC区块</span>
      </div>
    );
  }
}
