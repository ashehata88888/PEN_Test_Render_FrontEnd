/* eslint-disable */
import { number } from "prop-types";
import React, { useState } from "react";

import CheckBoxInputNumber from "./ReusableComponents/CheckBoxInputNumber";

export default function NICU() {
  return (
    <div className="homeContainer">
      <br />
      <CheckBoxInputNumber checkBoxTitle="Number of ICU beds" />
      <CheckBoxInputNumber checkBoxTitle="Number of Inpatient beds" />
    </div>
  );
}
