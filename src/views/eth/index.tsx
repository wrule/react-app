import React from 'react';
import style from './index.module.scss';

export default class ViewETH extends React.Component {
  public render() {
    return (
      <div
        className={style.view}>
        <span>ETH</span>
      </div>
    );
  }
}
