/* eslint-disable */
import { number } from "prop-types";
import React, { useState } from "react";

import CheckBoxInputNumber from "./ReusableComponents/CheckBoxInputNumber";

export default function SE() {
  return (
    <div className="homeContainer">
      <h3>Types of Operations</h3>

      <CheckBoxInputNumber checkBoxTitle="General surgery No./Month" />
      <CheckBoxInputNumber checkBoxTitle="Bariatric surgery No./Month" />
      <CheckBoxInputNumber checkBoxTitle="Uro surgery No./Month" />
      <CheckBoxInputNumber checkBoxTitle="Gyn surgery No./Month" />
      <CheckBoxInputNumber checkBoxTitle="Pediatric surgery No./Month" />
      <CheckBoxInputNumber checkBoxTitle="Cardiovascular surgery No./Month" />
      <CheckBoxInputNumber checkBoxTitle="ENT surgery No./Month" />
      <CheckBoxInputNumber checkBoxTitle="Ophthalmolgy No./Month" />
      <CheckBoxInputNumber checkBoxTitle="Neuro surgery No./Month" />
      <CheckBoxInputNumber checkBoxTitle="Ortho surgery No./Month" />
    </div>
  );
}
