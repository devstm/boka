import { Checkbox, Col, Row } from 'antd';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import React from 'react';
import style from '../styles/Home.module.css';

const onChange = (checkedValues: CheckboxValueType[]) => {
  console.log('checked = ', checkedValues);
};

function CheckBoxGroup() {
  return (
    <Checkbox.Group onChange={onChange}>
      <Row>
          <Checkbox className={style.text} value='At home'>At home</Checkbox>
      </Row>
      <Row>
          <Checkbox className={style.text} value='Business'>Business</Checkbox>
      </Row>
    </Checkbox.Group>
  );
}
export default CheckBoxGroup;
