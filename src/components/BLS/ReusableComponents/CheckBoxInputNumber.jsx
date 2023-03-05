/* eslint-disable */
import React, { useEffect, useState, useRef } from "react";
import hTabs from "../hTabs.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  updateKnee_Replacement,
  updateHip_Replacement,
  updateNumber_Of_Operation_Rooms,
  updateNumber_Of_Trauma_Cases_Month,
  updateNeuro_Surgery,
  updateCardiothoracic,
  updateOncology,
  updateUrology,
  updateLiver_Transplant,
  updateKidney_Transplant,
  updateGynecology,
  updateGeneral_Surgery,
  updateNumber_Of_Plasma_Bags_Dispensed,
  updateOpen_Heart,
  updateNumber_Of_Icu_Beds,
  updateNumber_Of_Plasma_Autoclaves,
  updateLoad_Of_Plasma_Autoclave_Day,
  updateRate_Of_Pouches_Load_Day_Of_Instruments,
  updateNumber_Of_Steam_Autoclaves,
  updateLoad_Of_Steam_Autoclave_Day,
  updateRate_Of_Pouches_Load_Day_Of_Dressings,
  updateOrtho,
  updateCardio,
  updateNeuro,
  updateTransplant,
  updateOstomy,
  updateDiabetic_Foot_Ulcers,
  updatePressure_Ulcers,
  updateBurns,
  updateSpinal_Chord_Injury,
  updatePcnl,
  updateFurs,
  updateTotal_Ed_Cases,
  updateNumber_Of_Ed_Cases_Operated,
  updateNumber_Of_Ed_Recurrent_Cases,
  updateCycle_Rate,
  updateTotal_Number_Of_Operations_Per,
  updateTotal_Number_Of_Operations_Per_Month,
  updateNumber_Of_Renting_Cases_Month,
  updateCost_Of_Renting_Case,
  updateOpen_Surgery,
  updateBasic_Laproscopy,
  updateAdvanced_Laproscopy,
  updateNose,
  updateEar,
  updateLarynx,
  updateDiagnostic,
  updateChest_Adult_Cases,
  updateChest_Pediatric_Cases,
  updateThorax_Adult_Cases,
  updateThorax_Pediatric_Cases,
  updateMyomectomy,
  updateHysterectomy,
  updateLaproscopic_Gyn,
  updateDiagnostic_Hysteroscopy,
  updateOperative_Hysteroscopy,
  updateNumber_Of_Kidney_Stone_Cases,
  updateEndoscopy,
  updateCranial_Navigation,
  updateNeuro_Biopsy,
  updateStereotactic_Neurosurgery,
  updateNumber_Of_Inpatient_Beds,
  updateBariatric_Surgery,
  updateUro_Surgery,
  updateGyn_Surgery,
  updatePediatric_Surgery,
  updateCardiovascular_Surgery,
  updateEnt_Surgery,
  updateOphthalmolgy,
  updateOrtho_Surgery,
  updateNumber_Of_Devices_Tested_Year,
} from "../../../store/index";

const CheckBoxInputNumber = ({ checkBoxTitle }) => {
  const globalState = useSelector((state) => state);

  const [checked, setChecked] = useState(
    (globalState.marketPotentials.knee_replacement != null ||
      globalState.marketPotentials.knee_replacement != undefined) &&
      checkBoxTitle === "Knee replacement No./Month"
      ? true
      : (globalState.marketPotentials.hip_replacement != null ||
          globalState.marketPotentials.hip_replacement != undefined) &&
        checkBoxTitle === "Hip replacement No./Month"
      ? true
      : (globalState.marketPotentials.number_of_operation_rooms != null ||
          globalState.marketPotentials.number_of_operation_rooms !=
            undefined) &&
        checkBoxTitle === "Number of operation rooms"
      ? true
      : (globalState.marketPotentials.number_of_Trauma_cases_month != null ||
          globalState.marketPotentials.number_of_Trauma_cases_month !=
            undefined) &&
        checkBoxTitle === "Number of Trauma cases/month"
      ? true
      : (globalState.marketPotentials.neuro_surgery != null ||
          globalState.marketPotentials.neuro_surgery != undefined) &&
        checkBoxTitle === "Neuro surgery No./Month"
      ? true
      : (globalState.marketPotentials.cardiothoracic != null ||
          globalState.marketPotentials.cardiothoracic != undefined) &&
        checkBoxTitle === "Cardiothoracic No./Month"
      ? true
      : (globalState.marketPotentials.oncology != null ||
          globalState.marketPotentials.oncology != undefined) &&
        checkBoxTitle === "Oncology No./Month"
      ? true
      : (globalState.marketPotentials.urology != null ||
          globalState.marketPotentials.urology != undefined) &&
        checkBoxTitle === "Urology No./Month"
      ? true
      : (globalState.marketPotentials.liver_transplant != null ||
          globalState.marketPotentials.liver_transplant != undefined) &&
        checkBoxTitle === "Liver transplant No./Month"
      ? true
      : (globalState.marketPotentials.kidney_transplant != null ||
          globalState.marketPotentials.kidney_transplant != undefined) &&
        checkBoxTitle === "Kidney transplant No./Month"
      ? true
      : (globalState.marketPotentials.gynecology != null ||
          globalState.marketPotentials.gynecology != undefined) &&
        checkBoxTitle === "Gynecology No./Month"
      ? true
      : (globalState.marketPotentials.general_surgery != null ||
          globalState.marketPotentials.general_surgery != undefined) &&
        checkBoxTitle === "General surgery No./Month"
      ? true
      : (globalState.marketPotentials.number_of_plasma_bags_dispensed != null ||
          globalState.marketPotentials.number_of_plasma_bags_dispensed !=
            undefined) &&
        checkBoxTitle === "Number of plasma bags dispensed/month"
      ? true
      : (globalState.marketPotentials.open_heart != null ||
          globalState.marketPotentials.open_heart != undefined) &&
        checkBoxTitle === "Open heart No./Month"
      ? true
      : (globalState.marketPotentials.number_of_ICU_beds != null ||
          globalState.marketPotentials.number_of_ICU_beds != undefined) &&
        checkBoxTitle === "Number of ICU beds"
      ? true
      : (globalState.marketPotentials.number_of_Plasma_Autoclaves != null ||
          globalState.marketPotentials.number_of_Plasma_Autoclaves !=
            undefined) &&
        checkBoxTitle === "Number of Plasma Autoclaves"
      ? true
      : (globalState.marketPotentials.load_of_Plasma_autoclave_day != null ||
          globalState.marketPotentials.load_of_Plasma_autoclave_day !=
            undefined) &&
        checkBoxTitle === "Load of Plasma autoclave/day"
      ? true
      : (globalState.marketPotentials.rate_of_pouches_load_day_of_Instruments !=
          null ||
          globalState.marketPotentials
            .rate_of_pouches_load_day_of_Instruments != undefined) &&
        checkBoxTitle === "Rate of pouches/load/day of Instruments"
      ? true
      : (globalState.marketPotentials.number_of_Steam_Autoclaves != null ||
          globalState.marketPotentials.number_of_Steam_Autoclaves !=
            undefined) &&
        checkBoxTitle === "Number of Steam Autoclaves"
      ? true
      : (globalState.marketPotentials.load_of_Steam_autoclave_day != null ||
          globalState.marketPotentials.load_of_Steam_autoclave_day !=
            undefined) &&
        checkBoxTitle === "Load of Steam autoclave/day"
      ? true
      : (globalState.marketPotentials.rate_of_pouches_load_day_of_Dressings !=
          null ||
          globalState.marketPotentials.rate_of_pouches_load_day_of_Dressings !=
            undefined) &&
        checkBoxTitle === "Rate of pouches/load/day of Dressings"
      ? true
      : (globalState.marketPotentials.ortho != null ||
          globalState.marketPotentials.ortho != undefined) &&
        checkBoxTitle === "Ortho surgery No./Month"
      ? true
      : (globalState.marketPotentials.cardio != null ||
          globalState.marketPotentials.cardio != undefined) &&
        checkBoxTitle === "Cardiovascular surgery No./Month"
      ? true
      : (globalState.marketPotentials.neuro != null ||
          globalState.marketPotentials.neuro != undefined) &&
        checkBoxTitle === "Neuro surgery No./Month"
      ? true
      : (globalState.marketPotentials.transplant != null ||
          globalState.marketPotentials.transplant != undefined) &&
        checkBoxTitle === "transplant No./Month"
      ? true
      : (globalState.marketPotentials.ostomy != null ||
          globalState.marketPotentials.ostomy != undefined) &&
        checkBoxTitle === "Ostomy No./Month"
      ? true
      : (globalState.marketPotentials.diabetic_Foot_Ulcers != null ||
          globalState.marketPotentials.diabetic_Foot_Ulcers != undefined) &&
        checkBoxTitle === "Diabetic Foot Ulcers No./Month"
      ? true
      : (globalState.marketPotentials.pressure_Ulcers != null ||
          globalState.marketPotentials.pressure_Ulcers != undefined) &&
        checkBoxTitle === "Pressure Ulcers No./Month"
      ? true
      : (globalState.marketPotentials.burns != null ||
          globalState.marketPotentials.burns != undefined) &&
        checkBoxTitle === "Burns No./month"
      ? true
      : (globalState.marketPotentials.spinal_Chord_Injury != null ||
          globalState.marketPotentials.spinal_Chord_Injury != undefined) &&
        checkBoxTitle === "Spinal Chord Injury No./Month"
      ? true
      : (globalState.marketPotentials.pcnl != null ||
          globalState.marketPotentials.pcnl != undefined) &&
        checkBoxTitle === "PCNL No./Month"
      ? true
      : (globalState.marketPotentials.furs != null ||
          globalState.marketPotentials.furs != undefined) &&
        checkBoxTitle === "FURS No./month"
      ? true
      : (globalState.marketPotentials.total_ed_cases != null ||
          globalState.marketPotentials.total_ed_cases != undefined) &&
        checkBoxTitle === "Total ED cases No./Month"
      ? true
      : (globalState.marketPotentials.number_of_ed_cases_operated != null ||
          globalState.marketPotentials.number_of_ed_cases_operated !=
            undefined) &&
        checkBoxTitle === "Number of ED cases operated No./Month"
      ? true
      : (globalState.marketPotentials.number_of_ed_recurrent_cases != null ||
          globalState.marketPotentials.number_of_ed_recurrent_cases !=
            undefined) &&
        checkBoxTitle === "Number of ED recurrent cases No./Month />"
      ? true
      : (globalState.marketPotentials.cycle_rate != null ||
          globalState.marketPotentials.cycle_rate != undefined) &&
        checkBoxTitle === "Cycle rate/month"
      ? true
      : (globalState.marketPotentials.total_number_of_operations_per != null ||
          globalState.marketPotentials.total_number_of_operations_per !=
            undefined) &&
        checkBoxTitle === "Total number of operations per month"
      ? true
      : (globalState.marketPotentials.total_number_of_operations_per_month !=
          null ||
          globalState.marketPotentials.total_number_of_operations_per_month !=
            undefined) &&
        checkBoxTitle === "Total number of operations per month"
      ? true
      : (globalState.marketPotentials.number_of_renting_cases_month != null ||
          globalState.marketPotentials.number_of_renting_cases_month !=
            undefined) &&
        checkBoxTitle === "Number of renting cases/month"
      ? true
      : (globalState.marketPotentials.cost_of_renting_case != null ||
          globalState.marketPotentials.cost_of_renting_case != undefined) &&
        checkBoxTitle === "Cost of renting/case"
      ? true
      : (globalState.marketPotentials.open_surgery != null ||
          globalState.marketPotentials.open_surgery != undefined) &&
        checkBoxTitle === "Open surgery"
      ? true
      : (globalState.marketPotentials.basic_laproscopy != null ||
          globalState.marketPotentials.basic_laproscopy != undefined) &&
        checkBoxTitle === "Basic Laproscopy"
      ? true
      : (globalState.marketPotentials.advanced_laproscopy != null ||
          globalState.marketPotentials.advanced_laproscopy != undefined) &&
        checkBoxTitle === "Advanced Laproscopy"
      ? true
      : (globalState.marketPotentials.nose != null ||
          globalState.marketPotentials.nose != undefined) &&
        checkBoxTitle === "Nose No./Month"
      ? true
      : (globalState.marketPotentials.ear != null ||
          globalState.marketPotentials.ear != undefined) &&
        checkBoxTitle === "Ear No./Month"
      ? true
      : (globalState.marketPotentials.larynx != null ||
          globalState.marketPotentials.larynx != undefined) &&
        checkBoxTitle === "Larynx No./Month"
      ? true
      : (globalState.marketPotentials.diagnostic != null ||
          globalState.marketPotentials.diagnostic != undefined) &&
        checkBoxTitle === "Diagnostic No./Month "
      ? true
      : (globalState.marketPotentials.chest_adult_cases != null ||
          globalState.marketPotentials.chest_adult_cases != undefined) &&
        checkBoxTitle === "Chest adult cases No./Month"
      ? true
      : (globalState.marketPotentials.chest_Pediatric_cases != null ||
          globalState.marketPotentials.chest_Pediatric_cases != undefined) &&
        checkBoxTitle === "Chest Pediatric cases No./Month"
      ? true
      : (globalState.marketPotentials.thorax_adult_cases != null ||
          globalState.marketPotentials.thorax_adult_cases != undefined) &&
        checkBoxTitle === "Thorax adult cases No./Month"
      ? true
      : (globalState.marketPotentials.thorax_Pediatric_cases != null ||
          globalState.marketPotentials.thorax_Pediatric_cases != undefined) &&
        checkBoxTitle === "Thorax Pediatric cases No./Month"
      ? true
      : (globalState.marketPotentials.myomectomy != null ||
          globalState.marketPotentials.myomectomy != undefined) &&
        checkBoxTitle === "Myomectomy No./Month"
      ? true
      : (globalState.marketPotentials.hysterectomy != null ||
          globalState.marketPotentials.hysterectomy != undefined) &&
        checkBoxTitle === "Hysterectomy No./Month"
      ? true
      : (globalState.marketPotentials.laproscopic_gyn != null ||
          globalState.marketPotentials.laproscopic_gyn != undefined) &&
        checkBoxTitle === "Laproscopic GYN No./Month"
      ? true
      : (globalState.marketPotentials.diagnostic_hysteroscopy != null ||
          globalState.marketPotentials.diagnostic_hysteroscopy != undefined) &&
        checkBoxTitle === "Diagnostic Hysteroscopy No./Month"
      ? true
      : (globalState.marketPotentials.operative_hysteroscopy != null ||
          globalState.marketPotentials.operative_hysteroscopy != undefined) &&
        checkBoxTitle === "Operative Hysteroscopy No./Month"
      ? true
      : (globalState.marketPotentials.number_of_kidney_stone_cases != null ||
          globalState.marketPotentials.number_of_kidney_stone_cases !=
            undefined) &&
        checkBoxTitle === "Number of Kidney stone cases/month"
      ? true
      : (globalState.marketPotentials.endoscopy != null ||
          globalState.marketPotentials.endoscopy != undefined) &&
        checkBoxTitle === "Endoscopy No./Month"
      ? true
      : (globalState.marketPotentials.cranial_navigation != null ||
          globalState.marketPotentials.cranial_navigation != undefined) &&
        checkBoxTitle === "Cranial Navigation GYN No./Month"
      ? true
      : (globalState.marketPotentials.neuro_biopsy != null ||
          globalState.marketPotentials.neuro_biopsy != undefined) &&
        checkBoxTitle === "Neuro Biopsy Hysteroscopy No./Month"
      ? true
      : (globalState.marketPotentials.stereotactic_neurosurgery != null ||
          globalState.marketPotentials.stereotactic_neurosurgery !=
            undefined) &&
        checkBoxTitle === "Stereotactic Neurosurgery No./Month"
      ? true
      : (globalState.marketPotentials.number_of_inpatient_beds != null ||
          globalState.marketPotentials.number_of_inpatient_beds != undefined) &&
        checkBoxTitle === "Number of Inpatient beds"
      ? true
      : (globalState.marketPotentials.bariatric_surgery != null ||
          globalState.marketPotentials.bariatric_surgery != undefined) &&
        checkBoxTitle === "Bariatric surgery No./Month"
      ? true
      : (globalState.marketPotentials.uro_surgery != null ||
          globalState.marketPotentials.uro_surgery != undefined) &&
        checkBoxTitle === "Uro surgery No./Month"
      ? true
      : (globalState.marketPotentials.gyn_surgery != null ||
          globalState.marketPotentials.gyn_surgery != undefined) &&
        checkBoxTitle === "Gyn surgery No./Month"
      ? true
      : (globalState.marketPotentials.pediatric_surgery != null ||
          globalState.marketPotentials.pediatric_surgery != undefined) &&
        checkBoxTitle === "Pediatric surgery No./Month"
      ? true
      : (globalState.marketPotentials.cardiovascular_surgery != null ||
          globalState.marketPotentials.cardiovascular_surgery != undefined) &&
        checkBoxTitle === "Pediatric surgery No./Month"
      ? true
      : (globalState.marketPotentials.ent_surgery != null ||
          globalState.marketPotentials.ent_surgery != undefined) &&
        checkBoxTitle === "ENT surgery No./Month"
      ? true
      : (globalState.marketPotentials.ophthalmolgy != null ||
          globalState.marketPotentials.ophthalmolgy != undefined) &&
        checkBoxTitle === "Ophthalmolgy No./Month"
      ? true
      : (globalState.marketPotentials.ortho_surgery != null ||
          globalState.marketPotentials.ortho_surgery != undefined) &&
        checkBoxTitle === "Ortho surgery No./Month"
      ? true
      : (globalState.marketPotentials.number_of_devices_tested_year != null ||
          globalState.marketPotentials.number_of_devices_tested_year !=
            undefined) &&
        checkBoxTitle === "Number of devices tested/year"
      ? true
      : false
  );

  const [text, setText] = useState(
    globalState.marketPotentials.knee_replacement != 0 &&
      checkBoxTitle === "Knee replacement No./Month"
      ? globalState.marketPotentials.knee_replacement
      : globalState.marketPotentials.hip_replacement != 0 &&
        checkBoxTitle === "Hip replacement No./Month"
      ? globalState.marketPotentials.hip_replacement
      : globalState.marketPotentials.number_of_operation_rooms != 0 &&
        checkBoxTitle === "Number of operation rooms"
      ? globalState.marketPotentials.number_of_operation_rooms
      : globalState.marketPotentials.number_of_Trauma_cases_month != 0 &&
        checkBoxTitle === "Number of Trauma cases/month"
      ? globalState.marketPotentials.number_of_Trauma_cases_month
      : globalState.marketPotentials.neuro_surgery != 0 &&
        checkBoxTitle === "Neuro surgery No./Month"
      ? globalState.marketPotentials.neuro_surgery
      : globalState.marketPotentials.cardiothoracic != 0 &&
        checkBoxTitle === "Cardiothoracic No./Month"
      ? globalState.marketPotentials.cardiothoracic
      : globalState.marketPotentials.oncology != 0 &&
        checkBoxTitle === "Oncology No./Month"
      ? globalState.marketPotentials.oncology
      : globalState.marketPotentials.urology != 0 &&
        checkBoxTitle === "Urology No./Month"
      ? globalState.marketPotentials.urology
      : globalState.marketPotentials.liver_transplant != 0 &&
        checkBoxTitle === "Liver transplant No./Month"
      ? globalState.marketPotentials.liver_transplant
      : globalState.marketPotentials.kidney_transplant != 0 &&
        checkBoxTitle === "Kidney transplant No./Month"
      ? globalState.marketPotentials.kidney_transplant
      : globalState.marketPotentials.gynecology != 0 &&
        checkBoxTitle === "Gynecology No./Month"
      ? globalState.marketPotentials.gynecology
      : globalState.marketPotentials.general_surgery != 0 &&
        checkBoxTitle === "General surgery No./Month"
      ? globalState.marketPotentials.general_surgery
      : globalState.marketPotentials.number_of_plasma_bags_dispensed != 0 &&
        checkBoxTitle === "Number of plasma bags dispensed/month"
      ? globalState.marketPotentials.number_of_plasma_bags_dispensed
      : globalState.marketPotentials.open_heart != 0 &&
        checkBoxTitle === "Open heart No./Month"
      ? globalState.marketPotentials.open_heart
      : globalState.marketPotentials.number_of_ICU_beds != 0 &&
        checkBoxTitle === "Number of ICU beds"
      ? globalState.marketPotentials.number_of_ICU_beds
      : globalState.marketPotentials.number_of_Plasma_Autoclaves != 0 &&
        checkBoxTitle === "Number of Plasma Autoclaves"
      ? globalState.marketPotentials.number_of_Plasma_Autoclaves
      : globalState.marketPotentials.load_of_Plasma_autoclave_day != 0 &&
        checkBoxTitle === "Load of Plasma autoclave/day"
      ? globalState.marketPotentials.load_of_Plasma_autoclave_day
      : globalState.marketPotentials.rate_of_pouches_load_day_of_Instruments !=
          0 && checkBoxTitle === "Rate of pouches/load/day of Instruments"
      ? globalState.marketPotentials.rate_of_pouches_load_day_of_Instruments
      : globalState.marketPotentials.number_of_Steam_Autoclaves != 0 &&
        checkBoxTitle === "Number of Steam Autoclaves"
      ? globalState.marketPotentials.number_of_Steam_Autoclaves
      : globalState.marketPotentials.load_of_Steam_autoclave_day != 0 &&
        checkBoxTitle === "Load of Steam autoclave/day"
      ? globalState.marketPotentials.load_of_Steam_autoclave_day
      : globalState.marketPotentials.rate_of_pouches_load_day_of_Dressings !=
          0 && checkBoxTitle === "Rate of pouches/load/day of Dressings"
      ? globalState.marketPotentials.rate_of_pouches_load_day_of_Dressings
      : globalState.marketPotentials.ortho != 0 &&
        checkBoxTitle === "Ortho surgery No./Month"
      ? globalState.marketPotentials.ortho
      : globalState.marketPotentials.cardio != 0 &&
        checkBoxTitle === "Cardiovascular surgery No./Month"
      ? globalState.marketPotentials.cardio
      : globalState.marketPotentials.neuro != 0 &&
        checkBoxTitle === "Neuro surgery No./Month"
      ? globalState.marketPotentials.neuro
      : globalState.marketPotentials.transplant != 0 &&
        checkBoxTitle === "transplant No./Month"
      ? globalState.marketPotentials.transplant
      : globalState.marketPotentials.ostomy != 0 &&
        checkBoxTitle === "Ostomy No./Month"
      ? globalState.marketPotentials.ostomy
      : globalState.marketPotentials.diabetic_Foot_Ulcers != 0 &&
        checkBoxTitle === "Diabetic Foot Ulcers No./Month"
      ? globalState.marketPotentials.diabetic_Foot_Ulcers
      : globalState.marketPotentials.pressure_Ulcers != 0 &&
        checkBoxTitle === "Pressure Ulcers No./Month"
      ? globalState.marketPotentials.pressure_Ulcers
      : globalState.marketPotentials.burns != 0 &&
        checkBoxTitle === "Burns No./month"
      ? globalState.marketPotentials.burns
      : globalState.marketPotentials.spinal_Chord_Injury != 0 &&
        checkBoxTitle === "Spinal Chord Injury No./Month"
      ? globalState.marketPotentials.spinal_Chord_Injury
      : globalState.marketPotentials.pcnl != 0 &&
        checkBoxTitle === "PCNL No./Month"
      ? globalState.marketPotentials.pcnl
      : globalState.marketPotentials.furs != 0 &&
        checkBoxTitle === "FURS No./month"
      ? globalState.marketPotentials.furs
      : globalState.marketPotentials.total_ed_cases != 0 &&
        checkBoxTitle === "Total ED cases No./Month"
      ? globalState.marketPotentials.total_ed_cases
      : globalState.marketPotentials.number_of_ed_cases_operated != 0 &&
        checkBoxTitle === "Number of ED cases operated No./Month"
      ? globalState.marketPotentials.number_of_ed_cases_operated
      : globalState.marketPotentials.number_of_ed_recurrent_cases != 0 &&
        checkBoxTitle === "Number of ED recurrent cases No./Month />"
      ? globalState.marketPotentials.number_of_ed_recurrent_cases
      : globalState.marketPotentials.cycle_rate != 0 &&
        checkBoxTitle === "Cycle rate/month"
      ? globalState.marketPotentials.cycle_rate
      : globalState.marketPotentials.total_number_of_operations_per != 0 &&
        checkBoxTitle === "Total number of operations per month"
      ? globalState.marketPotentials.total_number_of_operations_per
      : globalState.marketPotentials.total_number_of_operations_per_month !=
          0 && checkBoxTitle === "Total number of operations per month"
      ? globalState.marketPotentials.total_number_of_operations_per_month
      : globalState.marketPotentials.number_of_renting_cases_month != 0 &&
        checkBoxTitle === "Number of renting cases/month"
      ? globalState.marketPotentials.number_of_renting_cases_month
      : globalState.marketPotentials.cost_of_renting_case != 0 &&
        checkBoxTitle === "Cost of renting/case"
      ? globalState.marketPotentials.cost_of_renting_case
      : globalState.marketPotentials.open_surgery != 0 &&
        checkBoxTitle === "Open surgery"
      ? globalState.marketPotentials.open_surgery
      : globalState.marketPotentials.basic_laproscopy != 0 &&
        checkBoxTitle === "Basic Laproscopy"
      ? globalState.marketPotentials.basic_laproscopy
      : globalState.marketPotentials.advanced_laproscopy != 0 &&
        checkBoxTitle === "Advanced Laproscopy"
      ? globalState.marketPotentials.advanced_laproscopy
      : globalState.marketPotentials.nose != 0 &&
        checkBoxTitle === "Nose No./Month"
      ? globalState.marketPotentials.nose
      : globalState.marketPotentials.ear != 0 &&
        checkBoxTitle === "Ear No./Month"
      ? globalState.marketPotentials.ear
      : globalState.marketPotentials.larynx != 0 &&
        checkBoxTitle === "Larynx No./Month"
      ? globalState.marketPotentials.larynx
      : globalState.marketPotentials.diagnostic != 0 &&
        checkBoxTitle === "Diagnostic No./Month "
      ? globalState.marketPotentials.diagnostic
      : globalState.marketPotentials.chest_adult_cases != 0 &&
        checkBoxTitle === "Chest adult cases No./Month"
      ? globalState.marketPotentials.chest_adult_cases
      : globalState.marketPotentials.chest_Pediatric_cases != 0 &&
        checkBoxTitle === "Chest Pediatric cases No./Month"
      ? globalState.marketPotentials.chest_Pediatric_cases
      : globalState.marketPotentials.thorax_adult_cases != 0 &&
        checkBoxTitle === "Thorax adult cases No./Month"
      ? globalState.marketPotentials.thorax_adult_cases
      : globalState.marketPotentials.thorax_Pediatric_cases != 0 &&
        checkBoxTitle === "Thorax Pediatric cases No./Month"
      ? globalState.marketPotentials.thorax_Pediatric_cases
      : globalState.marketPotentials.myomectomy != 0 &&
        checkBoxTitle === "Myomectomy No./Month"
      ? globalState.marketPotentials.myomectomy
      : globalState.marketPotentials.hysterectomy != 0 &&
        checkBoxTitle === "Hysterectomy No./Month"
      ? globalState.marketPotentials.hysterectomy
      : globalState.marketPotentials.laproscopic_gyn != 0 &&
        checkBoxTitle === "Laproscopic GYN No./Month"
      ? globalState.marketPotentials.laproscopic_gyn
      : globalState.marketPotentials.diagnostic_hysteroscopy != 0 &&
        checkBoxTitle === "Diagnostic Hysteroscopy No./Month"
      ? globalState.marketPotentials.diagnostic_hysteroscopy
      : globalState.marketPotentials.operative_hysteroscopy != 0 &&
        checkBoxTitle === "Operative Hysteroscopy No./Month"
      ? globalState.marketPotentials.operative_hysteroscopy
      : globalState.marketPotentials.number_of_kidney_stone_cases != 0 &&
        checkBoxTitle === "Number of Kidney stone cases/month"
      ? globalState.marketPotentials.number_of_kidney_stone_cases
      : globalState.marketPotentials.endoscopy != 0 &&
        checkBoxTitle === "Endoscopy No./Month"
      ? globalState.marketPotentials.endoscopy
      : globalState.marketPotentials.cranial_navigation != 0 &&
        checkBoxTitle === "Cranial Navigation GYN No./Month"
      ? globalState.marketPotentials.cranial_navigation
      : globalState.marketPotentials.neuro_biopsy != 0 &&
        checkBoxTitle === "Neuro Biopsy Hysteroscopy No./Month"
      ? globalState.marketPotentials.neuro_biopsy
      : globalState.marketPotentials.stereotactic_neurosurgery != 0 &&
        checkBoxTitle === "Stereotactic Neurosurgery No./Month"
      ? globalState.marketPotentials.stereotactic_neurosurgery
      : globalState.marketPotentials.number_of_inpatient_beds != 0 &&
        checkBoxTitle === "Number of Inpatient beds"
      ? globalState.marketPotentials.number_of_inpatient_beds
      : globalState.marketPotentials.bariatric_surgery != 0 &&
        checkBoxTitle === "Bariatric surgery No./Month"
      ? globalState.marketPotentials.bariatric_surgery
      : globalState.marketPotentials.uro_surgery != 0 &&
        checkBoxTitle === "Uro surgery No./Month"
      ? globalState.marketPotentials.uro_surgery
      : globalState.marketPotentials.gyn_surgery != 0 &&
        checkBoxTitle === "Gyn surgery No./Month"
      ? globalState.marketPotentials.gyn_surgery
      : globalState.marketPotentials.pediatric_surgery != 0 &&
        checkBoxTitle === "Pediatric surgery No./Month"
      ? globalState.marketPotentials.pediatric_surgery
      : globalState.marketPotentials.cardiovascular_surgery != 0 &&
        checkBoxTitle === "Pediatric surgery No./Month"
      ? globalState.marketPotentials.cardiovascular_surgery
      : globalState.marketPotentials.ent_surgery != 0 &&
        checkBoxTitle === "ENT surgery No./Month"
      ? globalState.marketPotentials.ent_surgery
      : globalState.marketPotentials.ophthalmolgy != 0 &&
        checkBoxTitle === "Ophthalmolgy No./Month"
      ? globalState.marketPotentials.ophthalmolgy
      : globalState.marketPotentials.ortho_surgery != 0 &&
        checkBoxTitle === "Ortho surgery No./Month"
      ? globalState.marketPotentials.ortho_surgery
      : globalState.marketPotentials.number_of_devices_tested_year != 0 &&
        checkBoxTitle === "Number of devices tested/year"
      ? globalState.marketPotentials.number_of_devices_tested_year
      : ""
  );

  const dispatch = useDispatch();

  // globalState.marketPotentials.neuro_surgery

  const inputEl = useRef(null);

  useEffect(() => {
    if (checked) {
      inputEl.current.focus();
    }
  }, [checked]);

  const onChangeTextHandler = (e) => {
    e.target.value < 1 && setChecked(false);

    // console.log("value of neuro surgery No" , e.target.value)
    if (checkBoxTitle === "Knee replacement No./Month") {
      dispatch(updateKnee_Replacement(e.target.value));
      e.target.value < 1 && dispatch(updateKnee_Replacement());
    }
    if (checkBoxTitle === "Hip replacement No./Month") {
      dispatch(updateHip_Replacement(e.target.value));
      e.target.value < 1 && dispatch(updateHip_Replacement());
    }
    if (checkBoxTitle === "Number of operation rooms") {
      dispatch(updateNumber_Of_Operation_Rooms(e.target.value));
      e.target.value < 1 && dispatch(updateNumber_Of_Operation_Rooms());
    }
    if (checkBoxTitle === "Number of Trauma cases/month") {
      dispatch(updateNumber_Of_Trauma_Cases_Month(e.target.value));
      e.target.value < 1 && dispatch(updateNumber_Of_Trauma_Cases_Month());
    }
    if (checkBoxTitle === "Neuro surgery No./Month") {
      dispatch(updateNeuro_Surgery(e.target.value));
      e.target.value < 1 && dispatch(updateNeuro_Surgery());
    }
    if (checkBoxTitle === "Cardiothoracic No./Month") {
      dispatch(updateCardiothoracic(e.target.value));
      e.target.value < 1 && dispatch(updateCardiothoracic());
    }
    if (checkBoxTitle === "Oncology No./Month") {
      dispatch(updateOncology(e.target.value));
      e.target.value < 1 && dispatch(updateOncology());
    }
    if (checkBoxTitle === "Urology No./Month") {
      dispatch(updateUrology(e.target.value));
      e.target.value < 1 && dispatch(updateUrology());
    }
    if (checkBoxTitle === "Liver transplant No./Month") {
      dispatch(updateLiver_Transplant(e.target.value));
      e.target.value < 1 && dispatch(updateLiver_Transplant());
    }
    if (checkBoxTitle === "Kidney transplant No./Month") {
      dispatch(updateKidney_Transplant(e.target.value));
      e.target.value < 1 && dispatch(updateKidney_Transplant());
    }
    if (checkBoxTitle === "Gynecology No./Month") {
      dispatch(updateGynecology(e.target.value));
      e.target.value < 1 && dispatch(updateGynecology());
    }
    if (checkBoxTitle === "General surgery No./Month") {
      dispatch(updateGeneral_Surgery(e.target.value));
      e.target.value < 1 && dispatch(updateGeneral_Surgery());
    }
    if (checkBoxTitle === "Number of plasma bags dispensed/month") {
      dispatch(updateNumber_Of_Plasma_Bags_Dispensed(e.target.value));
      e.target.value < 1 && dispatch(updateNumber_Of_Plasma_Bags_Dispensed());
    }
    if (checkBoxTitle === "Open heart No./Month") {
      dispatch(updateOpen_Heart(e.target.value));
      e.target.value < 1 && dispatch(updateOpen_Heart());
    }
    if (checkBoxTitle === "Number of ICU beds") {
      dispatch(updateNumber_Of_Icu_Beds(e.target.value));
      e.target.value < 1 && dispatch(updateNumber_Of_Icu_Beds());
    }
    if (checkBoxTitle === "Number of Plasma Autoclaves") {
      dispatch(updateNumber_Of_Plasma_Autoclaves(e.target.value));
      e.target.value < 1 && dispatch(updateNumber_Of_Plasma_Autoclaves());
    }
    if (checkBoxTitle === "Load of Plasma autoclave/day") {
      dispatch(updateLoad_Of_Plasma_Autoclave_Day(e.target.value));
      e.target.value < 1 && dispatch(updateLoad_Of_Plasma_Autoclave_Day());
    }
    if (checkBoxTitle === "Rate of pouches/load/day of Instruments") {
      dispatch(updateRate_Of_Pouches_Load_Day_Of_Instruments(e.target.value));
      e.target.value < 1 &&
        dispatch(updateRate_Of_Pouches_Load_Day_Of_Instruments());
    }
    if (checkBoxTitle === "Number of Steam Autoclaves") {
      dispatch(updateNumber_Of_Steam_Autoclaves(e.target.value));
      e.target.value < 1 && dispatch(updateNumber_Of_Steam_Autoclaves());
    }
    if (checkBoxTitle === "Load of Steam autoclave/day") {
      dispatch(updateLoad_Of_Steam_Autoclave_Day(e.target.value));
      e.target.value < 1 && dispatch(updateLoad_Of_Steam_Autoclave_Day());
    }
    if (checkBoxTitle === "Rate of pouches/load/day of Dressings") {
      dispatch(updateRate_Of_Pouches_Load_Day_Of_Dressings(e.target.value));
      e.target.value < 1 &&
        dispatch(updateRate_Of_Pouches_Load_Day_Of_Dressings());
    }
    if (checkBoxTitle === "Ortho surgery No./Month") {
      dispatch(updateOrtho(e.target.value));
      e.target.value < 1 && dispatch(updateOrtho());
    }
    if (checkBoxTitle === "Cardiovascular surgery No./Month") {
      dispatch(updateCardio(e.target.value));
      e.target.value < 1 && dispatch(updateCardio());
    }
    if (checkBoxTitle === "Neuro surgery No./Month") {
      dispatch(updateNeuro(e.target.value));
      e.target.value < 1 && dispatch(updateNeuro());
    }
    if (checkBoxTitle === "transplant No./Month") {
      dispatch(updateTransplant(e.target.value));
      e.target.value < 1 && dispatch(updateTransplant());
    }
    if (checkBoxTitle === "Ostomy No./Month") {
      dispatch(updateOstomy(e.target.value));
      e.target.value < 1 && dispatch(updateOstomy());
    }
    if (checkBoxTitle === "Diabetic Foot Ulcers No./Month") {
      dispatch(updateDiabetic_Foot_Ulcers(e.target.value));
      e.target.value < 1 && dispatch(updateDiabetic_Foot_Ulcers());
    }
    if (checkBoxTitle === "Pressure Ulcers No./Month") {
      dispatch(updatePressure_Ulcers(e.target.value));
      e.target.value < 1 && dispatch(updatePressure_Ulcers());
    }
    if (checkBoxTitle === "Burns No./month") {
      dispatch(updateBurns(e.target.value));
      e.target.value < 1 && dispatch(updateBurns());
    }
    if (checkBoxTitle === "Spinal Chord Injury No./Month") {
      dispatch(updateSpinal_Chord_Injury(e.target.value));
      e.target.value < 1 && dispatch(updateSpinal_Chord_Injury());
    }
    if (checkBoxTitle === "PCNL No./Month") {
      dispatch(updatePcnl(e.target.value));
      e.target.value < 1 && dispatch(updatePcnl());
    }
    if (checkBoxTitle === "FURS No./month") {
      dispatch(updateFurs(e.target.value));
      e.target.value < 1 && dispatch(updateFurs());
    }
    if (checkBoxTitle === "Total ED cases No./Month") {
      dispatch(updateTotal_Ed_Cases(e.target.value));
      e.target.value < 1 && dispatch(updateTotal_Ed_Cases());
    }
    if (checkBoxTitle === "Number of ED cases operated No./Month") {
      dispatch(updateNumber_Of_Ed_Cases_Operated(e.target.value));
      e.target.value < 1 && dispatch(updateNumber_Of_Ed_Cases_Operated());
    }
    if (checkBoxTitle === "Number of ED recurrent cases No./Month />") {
      dispatch(updateNumber_Of_Ed_Recurrent_Cases(e.target.value));
      e.target.value < 1 && dispatch(updateNumber_Of_Ed_Recurrent_Cases());
    }
    if (checkBoxTitle === "Cycle rate/month") {
      dispatch(updateCycle_Rate(e.target.value));
      e.target.value < 1 && dispatch(updateCycle_Rate());
    }
    if (checkBoxTitle === "Total number of operations per month") {
      dispatch(updateTotal_Number_Of_Operations_Per(e.target.value));
      e.target.value < 1 && dispatch(updateTotal_Number_Of_Operations_Per());
    }
    if (checkBoxTitle === "Total number of operations per month") {
      dispatch(updateTotal_Number_Of_Operations_Per_Month(e.target.value));
      e.target.value < 1 &&
        dispatch(updateTotal_Number_Of_Operations_Per_Month());
    }
    if (checkBoxTitle === "Number of renting cases/month") {
      dispatch(updateNumber_Of_Renting_Cases_Month(e.target.value));
      e.target.value < 1 && dispatch(updateNumber_Of_Renting_Cases_Month());
    }
    if (checkBoxTitle === "Cost of renting/case") {
      dispatch(updateCost_Of_Renting_Case(e.target.value));
      e.target.value < 1 && dispatch(updateCost_Of_Renting_Case());
    }
    if (checkBoxTitle === "Open surgery") {
      dispatch(updateOpen_Surgery(e.target.value));
      e.target.value < 1 && dispatch(updateOpen_Surgery());
    }
    if (checkBoxTitle === "Basic Laproscopy") {
      dispatch(updateBasic_Laproscopy(e.target.value));
      e.target.value < 1 && dispatch(updateBasic_Laproscopy());
    }
    if (checkBoxTitle === "Advanced Laproscopy") {
      dispatch(updateAdvanced_Laproscopy(e.target.value));
      e.target.value < 1 && dispatch(updateAdvanced_Laproscopy());
    }
    if (checkBoxTitle === "Nose No./Month") {
      dispatch(updateNose(e.target.value));
      e.target.value < 1 && dispatch(updateNose());
    }
    if (checkBoxTitle === "Ear No./Month") {
      dispatch(updateEar(e.target.value));
      e.target.value < 1 && dispatch(updateEar());
    }
    if (checkBoxTitle === "Larynx No./Month") {
      dispatch(updateLarynx(e.target.value));
      e.target.value < 1 && dispatch(updateLarynx());
    }
    if (checkBoxTitle === "Diagnostic No./Month ") {
      dispatch(updateDiagnostic(e.target.value));
      e.target.value < 1 && dispatch(updateDiagnostic());
    }
    if (checkBoxTitle === "Chest adult cases No./Month") {
      dispatch(updateChest_Adult_Cases(e.target.value));
      e.target.value < 1 && dispatch(updateChest_Adult_Cases());
    }
    if (checkBoxTitle === "Chest Pediatric cases No./Month") {
      dispatch(updateChest_Pediatric_Cases(e.target.value));
      e.target.value < 1 && dispatch(updateChest_Pediatric_Cases());
    }
    if (checkBoxTitle === "Thorax adult cases No./Month") {
      dispatch(updateThorax_Adult_Cases(e.target.value));
      e.target.value < 1 && dispatch(updateThorax_Adult_Cases());
    }
    if (checkBoxTitle === "Thorax Pediatric cases No./Month") {
      dispatch(updateThorax_Pediatric_Cases(e.target.value));
      e.target.value < 1 && dispatch(updateThorax_Pediatric_Cases());
    }
    if (checkBoxTitle === "Myomectomy No./Month") {
      dispatch(updateMyomectomy(e.target.value));
      e.target.value < 1 && dispatch(updateMyomectomy());
    }
    if (checkBoxTitle === "Hysterectomy No./Month") {
      dispatch(updateHysterectomy(e.target.value));
      e.target.value < 1 && dispatch(updateHysterectomy());
    }
    if (checkBoxTitle === "Laproscopic GYN No./Month") {
      dispatch(updateLaproscopic_Gyn(e.target.value));
      e.target.value < 1 && dispatch(updateLaproscopic_Gyn());
    }
    if (checkBoxTitle === "Diagnostic Hysteroscopy No./Month") {
      dispatch(updateDiagnostic_Hysteroscopy(e.target.value));
      e.target.value < 1 && dispatch(updateDiagnostic_Hysteroscopy());
    }
    if (checkBoxTitle === "Operative Hysteroscopy No./Month") {
      dispatch(updateOperative_Hysteroscopy(e.target.value));
      e.target.value < 1 && dispatch(updateOperative_Hysteroscopy());
    }
    if (checkBoxTitle === "Number of Kidney stone cases/month") {
      dispatch(updateNumber_Of_Kidney_Stone_Cases(e.target.value));
      e.target.value < 1 && dispatch(updateNumber_Of_Kidney_Stone_Cases());
    }
    if (checkBoxTitle === "Endoscopy No./Month") {
      dispatch(updateEndoscopy(e.target.value));
      e.target.value < 1 && dispatch(updateEndoscopy());
    }
    if (checkBoxTitle === "Cranial Navigation GYN No./Month") {
      dispatch(updateCranial_Navigation(e.target.value));
      e.target.value < 1 && dispatch(updateCranial_Navigation());
    }
    if (checkBoxTitle === "Neuro Biopsy Hysteroscopy No./Month") {
      dispatch(updateNeuro_Biopsy(e.target.value));
      e.target.value < 1 && dispatch(updateNeuro_Biopsy());
    }
    if (checkBoxTitle === "Stereotactic Neurosurgery No./Month") {
      dispatch(updateStereotactic_Neurosurgery(e.target.value));
      e.target.value < 1 && dispatch(updateStereotactic_Neurosurgery());
    }
    if (checkBoxTitle === "Number of Inpatient beds") {
      dispatch(updateNumber_Of_Inpatient_Beds(e.target.value));
      e.target.value < 1 && dispatch(updateNumber_Of_Inpatient_Beds());
    }
    if (checkBoxTitle === "Bariatric surgery No./Month") {
      dispatch(updateBariatric_Surgery(e.target.value));
      e.target.value < 1 && dispatch(updateBariatric_Surgery());
    }
    if (checkBoxTitle === "Uro surgery No./Month") {
      dispatch(updateUro_Surgery(e.target.value));
      e.target.value < 1 && dispatch(updateUro_Surgery());
    }
    if (checkBoxTitle === "Gyn surgery No./Month") {
      dispatch(updateGyn_Surgery(e.target.value));
      e.target.value < 1 && dispatch(updateGyn_Surgery());
    }
    if (checkBoxTitle === "Pediatric surgery No./Month") {
      dispatch(updatePediatric_Surgery(e.target.value));
      e.target.value < 1 && dispatch(updatePediatric_Surgery());
    }
    if (checkBoxTitle === "Pediatric surgery No./Month") {
      dispatch(updateCardiovascular_Surgery(e.target.value));
      e.target.value < 1 && dispatch(updateCardiovascular_Surgery());
    }
    if (checkBoxTitle === "ENT surgery No./Month") {
      dispatch(updateEnt_Surgery(e.target.value));
      e.target.value < 1 && dispatch(updateEnt_Surgery());
    }
    if (checkBoxTitle === "Ophthalmolgy No./Month") {
      dispatch(updateOphthalmolgy(e.target.value));
      e.target.value < 1 && dispatch(updateOphthalmolgy());
    }
    if (checkBoxTitle === "Ortho surgery No./Month") {
      dispatch(updateOrtho_Surgery(e.target.value));
      e.target.value < 1 && dispatch(updateOrtho_Surgery());
    }
    if (checkBoxTitle === "Number of devices tested/year") {
      dispatch(updateNumber_Of_Devices_Tested_Year(e.target.value));
      e.target.value < 1 && dispatch(updateNumber_Of_Devices_Tested_Year());
    }

    setText(e.target.value);
  };

  // if(globalState.marketPotentials.neuro_surgery != 0){
  //   setChecked(true)
  //   setText(globalState.marketPotentials.neuro_surgery)

  // }

  return (
    <div style={{ marginLeft: "10px" }}>
      <input
        type="checkbox"
        className={hTabs.checkBox}
        value="Bike"
        // onClick={onClickCheckBoxHandler}
        checked={checked}
        onChange={() => {
          if (checked) {
            setText("");
            checkBoxTitle === "Knee replacement No./Month" &&
              dispatch(updateKnee_Replacement());
            checkBoxTitle === "Hip replacement No./Month" &&
              dispatch(updateHip_Replacement());
            checkBoxTitle === "Number of operation rooms" &&
              dispatch(updateNumber_Of_Operation_Rooms());
            checkBoxTitle === "Number of Trauma cases/month" &&
              dispatch(updateNumber_Of_Trauma_Cases_Month());
            checkBoxTitle === "Neuro surgery No./Month" &&
              dispatch(updateNeuro_Surgery());
            checkBoxTitle === "Cardiothoracic No./Month" &&
              dispatch(updateCardiothoracic());
            checkBoxTitle === "Oncology No./Month" &&
              dispatch(updateOncology());
            checkBoxTitle === "Urology No./Month" && 
            dispatch(updateUrology());
            checkBoxTitle === "Liver transplant No./Month" &&
              dispatch(updateLiver_Transplant());
            checkBoxTitle === "Kidney transplant No./Month" &&
              dispatch(updateKidney_Transplant());
            checkBoxTitle === "Gynecology No./Month" &&
              dispatch(updateGynecology());
            checkBoxTitle === "General surgery No./Month" &&
              dispatch(updateGeneral_Surgery());
            checkBoxTitle === "Number of plasma bags dispensed/month" &&
              dispatch(updateNumber_Of_Plasma_Bags_Dispensed());
            checkBoxTitle === "Open heart No./Month" &&
              dispatch(updateOpen_Heart());
            checkBoxTitle === "Number of ICU beds" &&
              dispatch(updateNumber_Of_Icu_Beds());
            checkBoxTitle === "Number of Plasma Autoclaves" &&
              dispatch(updateNumber_Of_Plasma_Autoclaves());
            checkBoxTitle === "Load of Plasma autoclave/day" &&
              dispatch(updateLoad_Of_Plasma_Autoclave_Day());
            checkBoxTitle === "Rate of pouches/load/day of Instruments" &&
              dispatch(updateRate_Of_Pouches_Load_Day_Of_Instruments());
            checkBoxTitle === "Number of Steam Autoclaves" &&
              dispatch(updateNumber_Of_Steam_Autoclaves());
            checkBoxTitle === "Load of Steam autoclave/day" &&
              dispatch(updateLoad_Of_Steam_Autoclave_Day());
            checkBoxTitle === "Rate of pouches/load/day of Dressings" &&
              dispatch(updateRate_Of_Pouches_Load_Day_Of_Dressings());
            checkBoxTitle === "Ortho surgery No./Month" &&
              dispatch(updateOrtho());
            checkBoxTitle === "Cardiovascular surgery No./Month" &&
              dispatch(updateCardio());
            checkBoxTitle === "Neuro surgery No./Month" &&
              dispatch(updateNeuro());
            checkBoxTitle === "transplant No./Month" &&
              dispatch(updateTransplant());
            checkBoxTitle === "Ostomy No./Month" && dispatch(updateOstomy());
            checkBoxTitle === "Diabetic Foot Ulcers No./Month" &&
              dispatch(updateDiabetic_Foot_Ulcers());
            checkBoxTitle === "Pressure Ulcers No./Month" &&
              dispatch(updatePressure_Ulcers());
            checkBoxTitle === "Burns No./month" && dispatch(updateBurns());
            checkBoxTitle === "Spinal Chord Injury No./Month" &&
              dispatch(updateSpinal_Chord_Injury());
            checkBoxTitle === "PCNL No./Month" && dispatch(updatePcnl());
            checkBoxTitle === "FURS No./month" && dispatch(updateFurs());
            checkBoxTitle === "Total ED cases No./Month" &&
              dispatch(updateTotal_Ed_Cases());
            checkBoxTitle === "Number of ED cases operated No./Month" &&
              dispatch(updateNumber_Of_Ed_Cases_Operated());
            checkBoxTitle === "Number of ED recurrent cases No./Month />" &&
              dispatch(updateNumber_Of_Ed_Recurrent_Cases());
            checkBoxTitle === "Cycle rate/month" &&
              dispatch(updateCycle_Rate());
            checkBoxTitle === "Total number of operations per month" &&
              dispatch(updateTotal_Number_Of_Operations_Per());
            checkBoxTitle === "Total number of operations per month" &&
              dispatch(updateTotal_Number_Of_Operations_Per_Month());
            checkBoxTitle === "Number of renting cases/month" &&
              dispatch(updateNumber_Of_Renting_Cases_Month());
            checkBoxTitle === "Cost of renting/case" &&
              dispatch(updateCost_Of_Renting_Case());
            checkBoxTitle === "Open surgery" && dispatch(updateOpen_Surgery());
            checkBoxTitle === "Basic Laproscopy" &&
              dispatch(updateBasic_Laproscopy());
            checkBoxTitle === "Advanced Laproscopy" &&
              dispatch(updateAdvanced_Laproscopy());
            checkBoxTitle === "Nose No./Month" && dispatch(updateNose());
            checkBoxTitle === "Ear No./Month" && dispatch(updateEar());
            checkBoxTitle === "Larynx No./Month" && dispatch(updateLarynx());
            checkBoxTitle === "Diagnostic No./Month " &&
              dispatch(updateDiagnostic());
            checkBoxTitle === "Chest adult cases No./Month" &&
              dispatch(updateChest_Adult_Cases());
            checkBoxTitle === "Chest Pediatric cases No./Month" &&
              dispatch(updateChest_Pediatric_Cases());
            checkBoxTitle === "Thorax adult cases No./Month" &&
              dispatch(updateThorax_Adult_Cases());
            checkBoxTitle === "Thorax Pediatric cases No./Month" &&
              dispatch(updateThorax_Pediatric_Cases());
            checkBoxTitle === "Myomectomy No./Month" &&
              dispatch(updateMyomectomy());
            checkBoxTitle === "Hysterectomy No./Month" &&
              dispatch(updateHysterectomy());
            checkBoxTitle === "Laproscopic GYN No./Month" &&
              dispatch(updateLaproscopic_Gyn());
            checkBoxTitle === "Diagnostic Hysteroscopy No./Month" &&
              dispatch(updateDiagnostic_Hysteroscopy());
            checkBoxTitle === "Operative Hysteroscopy No./Month" &&
              dispatch(updateOperative_Hysteroscopy());
            checkBoxTitle === "Number of Kidney stone cases/month" &&
              dispatch(updateNumber_Of_Kidney_Stone_Cases());
            checkBoxTitle === "Endoscopy No./Month" &&
              dispatch(updateEndoscopy());
            checkBoxTitle === "Cranial Navigation GYN No./Month" &&
              dispatch(updateCranial_Navigation());
            checkBoxTitle === "Neuro Biopsy Hysteroscopy No./Month" &&
              dispatch(updateNeuro_Biopsy());
            checkBoxTitle === "Stereotactic Neurosurgery No./Month" &&
              dispatch(updateStereotactic_Neurosurgery());
            checkBoxTitle === "Number of Inpatient beds" &&
              dispatch(updateNumber_Of_Inpatient_Beds());
            checkBoxTitle === "Bariatric surgery No./Month" &&
              dispatch(updateBariatric_Surgery());
            checkBoxTitle === "Uro surgery No./Month" &&
              dispatch(updateUro_Surgery());
            checkBoxTitle === "Gyn surgery No./Month" &&
              dispatch(updateGyn_Surgery());
            checkBoxTitle === "Pediatric surgery No./Month" &&
              dispatch(updatePediatric_Surgery());
            checkBoxTitle === "Pediatric surgery No./Month" &&
              dispatch(updateCardiovascular_Surgery());
            checkBoxTitle === "ENT surgery No./Month" &&
              dispatch(updateEnt_Surgery());
            checkBoxTitle === "Ophthalmolgy No./Month" &&
              dispatch(updateOphthalmolgy());
            checkBoxTitle === "Ortho surgery No./Month" &&
              dispatch(updateOrtho_Surgery());
            checkBoxTitle === "Number of devices tested/year" &&
              dispatch(updateNumber_Of_Devices_Tested_Year());
          }
          setChecked(!checked);
        }}
      ></input>
      <label className={hTabs.labels}>{checkBoxTitle}</label>
      <input
        className={hTabs.boxNum}
        type="number"
        disabled={!checked}
        value={text}
        autoFocus="true"
        ref={inputEl}
        // onFocus={e => e.currentTarget.select()}
        onChange={(e) => onChangeTextHandler(e)}
      />
    </div>
  );
};

export default CheckBoxInputNumber;
