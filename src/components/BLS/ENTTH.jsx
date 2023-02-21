/* eslint-disable */
import { number } from "prop-types";
import React, { useState } from "react";

import CheckBoxInputNumber from "./ReusableComponents/CheckBoxInputNumber";

export default function ENTTH() {
  return (
    <div className="homeContainer">


      <h3>Types of Operations</h3>
      <br />

      <CheckBoxInputNumber checkBoxTitle="Chest adult cases No./Month" />
      <CheckBoxInputNumber checkBoxTitle="Chest Pediatric cases No./Month" />
      <CheckBoxInputNumber checkBoxTitle="Thorax adult cases No./Month" />
      <CheckBoxInputNumber checkBoxTitle="Thorax Pediatric cases No./Month" />
      
    </div>
  );
}
