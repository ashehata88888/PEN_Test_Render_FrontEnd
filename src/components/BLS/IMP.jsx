/* eslint-disable */
import { number } from "prop-types";
import React, { useState } from "react";

import CheckBoxInputNumber from "./ReusableComponents/CheckBoxInputNumber";

export default function IMP() {
  return (
    <div className="homeContainer">
      


      <h3>Types of Operations</h3>
      <br/>

      <CheckBoxInputNumber checkBoxTitle="Total ED cases No./Month" />
      <CheckBoxInputNumber checkBoxTitle="Number of ED cases operated No./Month" />
      <CheckBoxInputNumber checkBoxTitle="Number of ED recurrent cases No./Month" />


    </div>
  );
}
