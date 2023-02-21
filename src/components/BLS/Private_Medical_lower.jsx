/* eslint-disable */
import { number } from "prop-types";
import React, { useState } from "react";

import STER from "./STER";
import CONS from "./CONS";
import BIOS from "./BIOS";
import CheckBoxInputNumber from "./ReusableComponents/CheckBoxInputNumber";

export default function Private_Medical_lower() {
  return (
    <div className="homeContainer">
      <div>
        <br />
        <h3>LAPA</h3>
        <br />
        <CheckBoxInputNumber checkBoxTitle="Number of operation rooms" />
        <CheckBoxInputNumber checkBoxTitle="Total number of operations per month" />
        <CheckBoxInputNumber checkBoxTitle="Number of renting cases/month" />
        <CheckBoxInputNumber checkBoxTitle="Cost of renting/case" />

        <br />
        <h3>Types of Operations</h3>
        <br />

        <CheckBoxInputNumber checkBoxTitle="Open surgery" />
        <CheckBoxInputNumber checkBoxTitle="Basic Laproscopy" />
        <CheckBoxInputNumber checkBoxTitle="Advanced Laproscopy" />
        <br />
      </div>

      <div>
        <br />
        <h3>GYN</h3>
        <br />
        <h3>Types of Operations</h3>
        <br />

        <CheckBoxInputNumber checkBoxTitle="Myomectomy No./Month" />
        <CheckBoxInputNumber checkBoxTitle="Hysterectomy No./Month" />
        <CheckBoxInputNumber checkBoxTitle="Laproscopic GYN No./Month" />
        <CheckBoxInputNumber checkBoxTitle="Diagnostic Hysteroscopy No./Month" />
        <CheckBoxInputNumber checkBoxTitle="Operative Hysteroscopy No./Month" />
      </div>

      <div>
        <br />
        <h3>UR</h3>
        <br />
        <h3>Types of Operations</h3>

        <CheckBoxInputNumber checkBoxTitle="Number of Kidney stone cases/month" />
        <br />
      </div>
      <h3>ERBE</h3>
      <br />

      <CheckBoxInputNumber checkBoxTitle="Number of operation rooms" />
      <br />
    </div>
  );
}
