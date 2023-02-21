/* eslint-disable */
import { number } from "prop-types";
import React, { useState } from "react";

import CheckBoxInputNumber from "./ReusableComponents/CheckBoxInputNumber";

export default function BIOS() {
  return (
    <div className="homeContainer">
      <h3>Types of Operations</h3>

      <CheckBoxInputNumber checkBoxTitle="Neuro surgery No./Month" />
      <CheckBoxInputNumber checkBoxTitle="Cardiothoracic No./Month" />
      <CheckBoxInputNumber checkBoxTitle="Oncology No./Month" />
      <CheckBoxInputNumber checkBoxTitle="Urology No./Month" />
      <CheckBoxInputNumber checkBoxTitle="Liver transplant No./Month" />
      <CheckBoxInputNumber checkBoxTitle="Kidney transplant No./Month" />
      <CheckBoxInputNumber checkBoxTitle="Gynecology No./Month" />
      <CheckBoxInputNumber checkBoxTitle="General surgery No./Month" />

    </div>
  );
}
