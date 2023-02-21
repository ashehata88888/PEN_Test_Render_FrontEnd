/* eslint-disable */
import { number } from "prop-types";
import React, { useState } from "react";

import CheckBoxInputNumber from "./ReusableComponents/CheckBoxInputNumber";

export default function TRM() {
  return (
    <div className="homeContainer">
      <CheckBoxInputNumber checkBoxTitle="Number of operation rooms" />

      <CheckBoxInputNumber checkBoxTitle="Number of Trauma cases/month" />
    </div>
  );
}
