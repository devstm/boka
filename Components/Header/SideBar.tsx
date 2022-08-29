import { Breadcrumb } from 'antd';
import { useState } from 'react';
import style from '../../styles/index.module.css';
import Langs from './Lang';

function SideBar() {
  const [visible, setVisible] = useState(false);

  return (
    <Breadcrumb separator='|' className={style.bar}>
      <Breadcrumb.Item>For Business</Breadcrumb.Item>
      <Breadcrumb.Item>Help</Breadcrumb.Item>
      <Breadcrumb.Item onClick={() => setVisible(!visible)}>
        <Langs visible={visible}/>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default SideBar;
