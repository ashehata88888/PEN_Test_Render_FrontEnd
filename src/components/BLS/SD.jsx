/* eslint-disable */
import { number } from "prop-types";
import React, { useState } from "react";

import CheckBoxInputNumber from "./ReusableComponents/CheckBoxInputNumber";

export default function SD() {
  return (
    <div className="homeContainer">
      

     
      <CheckBoxInputNumber checkBoxTitle="Number of operation rooms" />
      <CheckBoxInputNumber checkBoxTitle="Number of ICU beds" />
      <CheckBoxInputNumber checkBoxTitle="Number of Plasma Autoclaves" />
      <CheckBoxInputNumber checkBoxTitle="Load of Plasma autoclave/day" />
      <CheckBoxInputNumber checkBoxTitle="Rate of pouches/load/day of Instruments" />
      <CheckBoxInputNumber checkBoxTitle="Number of Steam Autoclaves" />
      <CheckBoxInputNumber checkBoxTitle="Load of Steam autoclave/day" />
      <CheckBoxInputNumber checkBoxTitle="Rate of pouches/load/day of Dressings" />
<br/>
      <h3>Types of Operations</h3>

      <CheckBoxInputNumber checkBoxTitle="Ortho No./Month" />
      <CheckBoxInputNumber checkBoxTitle="Cardio No./Month" />
      <CheckBoxInputNumber checkBoxTitle="Neuro No./Month" />
      <CheckBoxInputNumber checkBoxTitle="Transplant No./month" />

    </div>
  );
}
