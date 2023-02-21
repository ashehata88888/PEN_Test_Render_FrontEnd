/* eslint-disable */
import { number } from "prop-types";
import React, { useState } from "react";

import CheckBoxInputNumber from "./ReusableComponents/CheckBoxInputNumber";

export default function Fluke() {
  return (
    <div className="homeContainer">
      <h3>Types of Operations</h3>
      <br />

      <CheckBoxInputNumber checkBoxTitle="Number of devices tested/year" />
    </div>
  );
}
