/* eslint-disable */
import { number } from "prop-types";
import React, { useState } from "react";

import STER from "./STER";
import CONS from "./CONS";
import BIOS from "./BIOS";
import CheckBoxInputNumber from "./ReusableComponents/CheckBoxInputNumber";

export default function Private_Medical_upper() {
  return (
    <div className="homeContainer">
      <div>
        <br />
        <h3>ENT</h3>
        <br />
        <h3>Types of Operations</h3>
        <br />

        <CheckBoxInputNumber checkBoxTitle="Nose No./Month" />
        <CheckBoxInputNumber checkBoxTitle="Ear No./Month" />
        <CheckBoxInputNumber checkBoxTitle="Larynx No./Month" />
        <CheckBoxInputNumber checkBoxTitle="Diagnostic No./Month" />

        <br />
        <h3>Types of Operations</h3>
        <br />

        <CheckBoxInputNumber checkBoxTitle="Open surgery" />
        <CheckBoxInputNumber checkBoxTitle="Basic Laproscopy" />
        <CheckBoxInputNumber checkBoxTitle="Advanced Laproscopy" />
        <br />
      </div>

      <div>
        <br />
        <h3>ENTTH</h3>
        <br />
        <h3>Types of Operations</h3>
        <br />

        <CheckBoxInputNumber checkBoxTitle="Chest adult cases No./Month" />
        <CheckBoxInputNumber checkBoxTitle="Chest Pediatric cases No./Month" />
        <CheckBoxInputNumber checkBoxTitle="Thorax adult cases No./Month" />
        <CheckBoxInputNumber checkBoxTitle="Thorax Pediatric cases No./Month" />
      </div>

      <div>
        <br />
        <h3>OR</h3>
        <br />
        <h3>Types of Neuro Operations</h3>
        <br />

        <CheckBoxInputNumber checkBoxTitle="Open surgery No./Month" />
        <CheckBoxInputNumber checkBoxTitle="Endoscopy No./Month" />
        <CheckBoxInputNumber checkBoxTitle="Cranial Navigation GYN No./Month" />
        <CheckBoxInputNumber checkBoxTitle="Neuro Biopsy Hysteroscopy No./Month" />
        <CheckBoxInputNumber checkBoxTitle="Stereotactic Neurosurgery No./Month" />
        <br />
      </div>
      <h3>ERBE</h3>
      <br />

      <CheckBoxInputNumber checkBoxTitle="Number of operation rooms" />
      <br />
    </div>
  );
}
