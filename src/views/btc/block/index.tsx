import React from 'react';
import style from './index.module.scss';
import XBTCBlock from '../../../components/btc/block';

export default class ViewBTCBlock extends React.Component {
  public render() {
    return (
      <div
        className={style.view}>
        <XBTCBlock />
      </div>
    );
  }
}
