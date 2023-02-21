/* eslint-disable */
import { number } from "prop-types";
import React, { useState } from "react";

import CheckBoxInputNumber from "./ReusableComponents/CheckBoxInputNumber";

export default function CONS() {
  return (
    <div className="homeContainer">
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
    </div>
  );
}
