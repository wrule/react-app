import React from 'react';
import style from './index.module.scss';
import { Descriptions, Card } from 'antd';
import XNiceHash from '../../niceHash';

export default class XBTCBlock extends React.Component {
  public render() {
    return (
      <Card
        title="区块10000"
        extra={<span>More</span>}
        style={{width: undefined}}>
        <Descriptions title="区块信息">
          <Descriptions.Item label="Hash值">
            <XNiceHash hash="000000000003ba27aa200b1cecaad478d2b00432346c3f1f3986da1afd33e506" />
          </Descriptions.Item>
        </Descriptions>
      </Card>
    );
  }
}
