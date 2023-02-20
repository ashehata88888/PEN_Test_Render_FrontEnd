/* eslint-disable */
import { number } from 'prop-types';
import React,{useState} from 'react'

import CheckBoxInputNumber from './ReusableComponents/CheckBoxInputNumber';





export default function JOT() {



  return <div className="homeContainer">
      <h3>Types of Operations</h3>

      <CheckBoxInputNumber
      checkBoxTitle="Knee replacement No./Month"
      />

      <CheckBoxInputNumber
      checkBoxTitle="Hip replacement No./Month"
      />

    </div>;
}

