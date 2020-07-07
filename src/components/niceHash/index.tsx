import React from 'react';
import style from './index.module.scss';
import { Tooltip, message } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import CopyToClipboard from 'react-copy-to-clipboard';

interface IProps {
  hash: string,
}

export default (props: IProps) => {
  function handleCopy() {
    message.info('Hash已复制到剪切板');
  }

  return <span className={style.com}>
    <Tooltip
      placement="bottom"
      title={props.hash}>
      <span>{props.hash.slice(0, 7)}</span>
    </Tooltip>
    <Tooltip
      placement="bottom"
      title="复制">
      <CopyToClipboard
        text={props.hash}
        onCopy={handleCopy}>
        <CopyOutlined className={style.copy} />
      </CopyToClipboard>
    </Tooltip>
  </span>;
}
