/* eslint-disable */
import { number } from "prop-types";
import React, { useState } from "react";

import CheckBoxInputNumber from "./ReusableComponents/CheckBoxInputNumber";

export default function LAPA() {
  return (
    <div className="homeContainer">
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
    </div>
  );
}
