/* eslint-disable */
import { number } from "prop-types";
import React, { useState } from "react";

import CheckBoxInputNumber from "./ReusableComponents/CheckBoxInputNumber";

export default function OR() {
  return (
    <div className="homeContainer">

      <h3>Types of Neuro Operations</h3>
      <br />

      <CheckBoxInputNumber checkBoxTitle="Open surgery No./Month" />
      <CheckBoxInputNumber checkBoxTitle="Endoscopy No./Month" />
      <CheckBoxInputNumber checkBoxTitle="Cranial Navigation GYN No./Month" />
      <CheckBoxInputNumber checkBoxTitle="Neuro Biopsy Hysteroscopy No./Month" />
      <CheckBoxInputNumber checkBoxTitle="Stereotactic Neurosurgery No./Month" />
    </div>
  );
}
