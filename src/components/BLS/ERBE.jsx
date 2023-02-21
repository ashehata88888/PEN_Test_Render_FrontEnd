/* eslint-disable */
import { number } from "prop-types";
import React, { useState } from "react";

import CheckBoxInputNumber from "./ReusableComponents/CheckBoxInputNumber";

export default function ERBE() {
  return (
    <div className="homeContainer">
      <br />

      <CheckBoxInputNumber checkBoxTitle="Number of operation rooms" />
    </div>
  );
}
