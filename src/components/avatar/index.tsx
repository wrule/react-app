import React from 'react';
import style from './index.module.scss';
import hash from './hash';
import colors from './colors';

interface Props {
  size?: number;
  name?: string;
  img?: string;
}

export default class XAvatar extends React.Component<Props, {}> {
  /**
   * Hash计算得出的背景颜色
   */
  private get autoBackgroundColor() {
    const index = hash(this.props.name || '') % colors.length;
    return colors[index];
  }

  /**
   * 判断是否为图像图像模式
   */
  private get autoIsImg() {
    return !!this.props.img;
  }

  /**
   * 基础样式
   */
  private get autoBaseStyle() {
    return {
      width: `${this.props.size}px`,
      height: `${this.props.size}px`,
      borderRadius: `${this.props.size}px`,
      border: `solid ${(this.props.size || 0) / 20}px white`,
    };
  }

  private get autoStyle() {
    if (this.autoIsImg) {
      return {
        ...this.autoBaseStyle,
        background: `url(${this.props.img})`,
        backgroundSize: `100% 100%`,
        backgroundRepeat: `no-repeat`,
        fontSize: `${this.props.size}px`,
      };
    } else {
      return {
        ...this.autoBaseStyle,
        backgroundColor: this.autoBackgroundColor,
        fontSize: `${this.props.size}px`,
      };
    }
  }

  public render() {
    return (
      <div
        className={style.com}
        style={this.autoStyle}>
        {this.autoIsImg ?
          <span className={style.hidspan}>{this.props.name}</span> :
          <span>{this.props.name}</span>}
      </div>
    );
  }
}
