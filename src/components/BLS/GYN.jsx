/* eslint-disable */
import { number } from "prop-types";
import React, { useState } from "react";

import CheckBoxInputNumber from "./ReusableComponents/CheckBoxInputNumber";

export default function GYN() {
  return (
    <div className="homeContainer">
      <CheckBoxInputNumber checkBoxTitle="Number of operation rooms" />
      <br />
      <h3>Types of Operations</h3>
      <br />

      <CheckBoxInputNumber checkBoxTitle="Myomectomy No./Month" />
      <CheckBoxInputNumber checkBoxTitle="Hysterectomy No./Month" />
      <CheckBoxInputNumber checkBoxTitle="Laproscopic GYN No./Month" />
      <CheckBoxInputNumber checkBoxTitle="Diagnostic Hysteroscopy No./Month" />
      <CheckBoxInputNumber checkBoxTitle="Operative Hysteroscopy No./Month" />
    </div>
  );
}
