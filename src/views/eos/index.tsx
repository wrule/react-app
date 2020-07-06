import React from 'react';
import style from './index.module.scss';

export default class ViewEOS extends React.Component {
  public render() {
    return (
      <div
        className={style.view}>
        <span>EOS</span>
      </div>
    );
  }
}
