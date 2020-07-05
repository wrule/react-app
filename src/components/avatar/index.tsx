import React from 'react';
import style from './index.module.scss';
import hash from './hash';

interface Props {
  size?: number;
  img?: string;
  name?: string;
}

const colors = [
  '#6acfb2',
  '#f39f7a',
  '#e07583',
  '#9f94e3',
  '#6ea4ef',
  '#f3aa2a',
  '#2c9cb4',
  '#c77a88',
  '#2e6bc0',
  '#995edc',
  '#70c4d6',
  '#d6629b',
  '#58b670',
  '#b17d5a',
  '#dab33e',
  '#849bc2',
  '#93ac68',
  '#896089',
  '#71a69e',
  '#3a8f8e',
];

export default class XAvatar extends React.Component<Props, {}> {
  private get autoBackgroundColor() {
    const index = hash(this.props.name || '') % colors.length;
    return colors[index];
  }

  private get autoStyle() {
    return {
      // backgroundColor: this.autoBackgroundColor,
      width: `${this.props.size}px`,
      height: `${this.props.size}px`,
      borderRadius: `${this.props.size}px`,
      fontSize: `${this.props.size}px`,
      border: `solid ${(this.props.size || 0) / 20}px white`,
    };
  }

  public render() {
    return (
      <div
        className={style.com}
        style={this.autoStyle}>
        {/* <span>{this.props.name}</span> */}
      </div>
    );
  }
}
