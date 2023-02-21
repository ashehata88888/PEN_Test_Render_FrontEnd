/* eslint-disable */
import { number } from "prop-types";
import React, { useState } from "react";

import CheckBoxInputNumber from "./ReusableComponents/CheckBoxInputNumber";

export default function ENT() {
  return (
    <div className="homeContainer">
      <h3>Types of Operations</h3>
      <br />

      <CheckBoxInputNumber checkBoxTitle="Nose No./Month" />
      <CheckBoxInputNumber checkBoxTitle="Ear No./Month" />
      <CheckBoxInputNumber checkBoxTitle="Larynx No./Month" />
      <CheckBoxInputNumber checkBoxTitle="Diagnostic No./Month" />
    </div>
  );
}
