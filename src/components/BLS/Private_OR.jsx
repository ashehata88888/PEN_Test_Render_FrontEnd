/* eslint-disable */
import { number } from "prop-types";
import React, { useState } from "react";

import STER from "./STER";
import CONS from "./CONS";
import BIOS from "./BIOS";
import CheckBoxInputNumber from "./ReusableComponents/CheckBoxInputNumber";

export default function Private_OR() {
  return (
    <div className="homeContainer">
      <div>
        <br />
        <h3>ICU</h3>
        <br />
        <CheckBoxInputNumber checkBoxTitle="Number of ICU beds" />
        <br />
      </div>

      <div>
        <br />
        <h3>NICU</h3>
        <br />
        <CheckBoxInputNumber checkBoxTitle="Number of ICU beds" />
        <CheckBoxInputNumber checkBoxTitle="Number of Inpatient beds" />
        <br />
      </div>

      <div>
        <br />
        <h3>SE</h3>
        <br />
        <h3>Types of Operations</h3>
        <br />
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

        <br />
      </div>
    </div>
  );
}
