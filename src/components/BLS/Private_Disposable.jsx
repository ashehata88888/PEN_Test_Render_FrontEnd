/* eslint-disable */
import { number } from "prop-types";
import React, { useState } from "react";

import STER from "./STER";
import CONS from "./CONS";
import BIOS from "./BIOS";
import CheckBoxInputNumber from './ReusableComponents/CheckBoxInputNumber';

export default function Private_Disposable() {
  return (
    <div className="homeContainer">
      <div>
        <br />
        <h3>STER</h3>
        <br />
        <CheckBoxInputNumber checkBoxTitle="Cycle rate/month" />
        <br />
      </div>

      <div>
        <br />
        <h3>CONS</h3>
        <br />
        <h3>Types of Operations</h3>
      <br />

      <CheckBoxInputNumber checkBoxTitle="Ostomy No./Month" />
      <CheckBoxInputNumber checkBoxTitle="Diabetic Foot Ulcers No./Month" />
      <CheckBoxInputNumber checkBoxTitle="Pressure Ulcers No./Month" />
      <CheckBoxInputNumber checkBoxTitle="Burns No./month" />
      <CheckBoxInputNumber checkBoxTitle="Cardiothoracic  No./Month" />
      <CheckBoxInputNumber checkBoxTitle="Spinal Chord Injury No./Month" />
      <CheckBoxInputNumber checkBoxTitle="PCNL No./Month" />
      <CheckBoxInputNumber checkBoxTitle="FURS No./month" />
        <br />
      </div>

      <div>
        <br />
        <h3>BIOS</h3>
        <br />
        <h3>Types of Operations</h3>

<CheckBoxInputNumber checkBoxTitle="Neuro surgery No./Month" />
<CheckBoxInputNumber checkBoxTitle="Cardiothoracic No./Month" />
<CheckBoxInputNumber checkBoxTitle="Oncology No./Month" />
<CheckBoxInputNumber checkBoxTitle="Urology No./Month" />
<CheckBoxInputNumber checkBoxTitle="Liver transplant No./Month" />
<CheckBoxInputNumber checkBoxTitle="Kidney transplant No./Month" />
<CheckBoxInputNumber checkBoxTitle="Gynecology No./Month" />
<CheckBoxInputNumber checkBoxTitle="General surgery No./Month" />
        <br />
      </div>
    </div>
  );
}
