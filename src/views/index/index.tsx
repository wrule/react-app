import React from 'react';
import style from './index.module.scss';

export default class ViewIndex extends React.Component {
  public render() {
    return (
      <div
        className={style.view}>
        <span>主页</span>
      </div>
    );
  }
}
