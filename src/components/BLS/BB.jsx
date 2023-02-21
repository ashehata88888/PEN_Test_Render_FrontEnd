/* eslint-disable */
import { number } from "prop-types";
import React, { useState } from "react";

import CheckBoxInputNumber from "./ReusableComponents/CheckBoxInputNumber";

export default function BB() {
  return (
    <div className="homeContainer">
      

      <CheckBoxInputNumber checkBoxTitle="Number of plasma bags dispensed/month" />

      <h3>Types of Operations</h3>

      <CheckBoxInputNumber checkBoxTitle="Open heart No./Month" />
      <CheckBoxInputNumber checkBoxTitle="Liver transplant No./Month" />
      <CheckBoxInputNumber checkBoxTitle="Kidney transplant No./Month" />

    </div>
  );
}
