import { createSlice, configureStore } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    incremented: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decremented: state => {
      state.value -= 1
    }
  }
})

const marketDataSlice = createSlice({
  name: 'marketData',
  initialState: {
    marketPotentials: {
      user_id: 0,
      bl_id: 0,
      bu_id: 0,
      account_type_id: 0,
      account_id: 0,
      account_name: "",
      account_area: "",
      knee_replacement: 0,
      hip_replacement: 0,
      number_of_operation_rooms: 0,
      number_of_Trauma_cases_month: 0,
      neuro_surgery: 0,
      cardiothoracic: 0,
      oncology: 0,
      urology: 0,
      liver_transplant: 0,
      kidney_transplant: 0,
      gynecology: 0,
      general_surgery: 0,
      number_of_plasma_bags_dispensed: 0,
      open_heart: 0,
      number_of_ICU_beds: 0,
      number_of_Plasma_Autoclaves: 0,
      load_of_Plasma_autoclave_day: 0,
      rate_of_pouches_load_day_of_Instruments: 0,
      number_of_Steam_Autoclaves: 0,
      load_of_Steam_autoclave_day: 0,
      rate_of_pouches_load_day_of_Dressings: 0,
      ortho: 0,
      cardio: 0,
      neuro: 0,
      transplant: 0,
      ostomy: 0,
      diabetic_Foot_Ulcers: 0,
      pressure_Ulcers: 0,
      burns: 0,
      spinal_Chord_Injury: 0,
      pcnl: 0,
      furs: 0,
      total_ed_cases: 0,
      number_of_ed_cases_operated: 0,
      number_of_ed_recurrent_cases: 0,
      cycle_rate: 0,
      total_number_of_operations_per: 0,
      total_number_of_operations_per_month: 0,
      number_of_renting_cases_month: 0,
      cost_of_renting_case: 0,
      open_surgery: 0,
      basic_laproscopy: 0,
      advanced_laproscopy: 0,
      nose: 0,
      ear: 0,
      larynx: 0,
      diagnostic: 0,
      chest_adult_cases: 0,
      chest_Pediatric_cases: 0,
      thorax_adult_cases: 0,
      thorax_Pediatric_cases: 0,
      myomectomy: 0,
      hysterectomy: 0,
      laproscopic_gyn: 0,
      diagnostic_hysteroscopy: 0,
      operative_hysteroscopy: 0,
      number_of_kidney_stone_cases: 0,
      endoscopy: 0,
      cranial_navigation: 0,
      neuro_biopsy: 0,
      stereotactic_neurosurgery: 0,
      number_of_inpatient_beds: 0,
      bariatric_surgery: 0,
      uro_surgery: 0,
      gyn_surgery: 0,
      pediatric_surgery: 0,
      cardiovascular_surgery: 0,
      ent_surgery: 0,
      ophthalmolgy: 0,
      ortho_surgery: 0,
      number_of_devices_tested_year: 0
    },

    marketSize: [{
      marketSizeRowID: 0,
      supplier_id: 0,
      product_family_id: 0,
      item_group_id: 0,
      market_potential_id: 0,
      marketSizeRecords: [{
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      }
    ]
    },
    {
      marketSizeRowID: 0,
      supplier_id: 0,
      product_family_id: 0,
      item_group_id: 0,
      market_potential_id: 0,
      marketSizeRecords: [{
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      }
    ]
    },
    {
      marketSizeRowID: 0,
      supplier_id: 0,
      product_family_id: 0,
      item_group_id: 0,
      market_potential_id: 0,
      marketSizeRecords: [{
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      }
    ]
    },
    {
      marketSizeRowID: 0,
      supplier_id: 0,
      product_family_id: 0,
      item_group_id: 0,
      market_potential_id: 0,
      marketSizeRecords: [{
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      }
    ]
    },
    {
      marketSizeRowID: 0,
      supplier_id: 0,
      product_family_id: 0,
      item_group_id: 0,
      market_potential_id: 0,
      marketSizeRecords: [{
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      }
    ]
    },
    {
      marketSizeRowID: 0,
      supplier_id: 0,
      product_family_id: 0,
      item_group_id: 0,
      market_potential_id: 0,
      marketSizeRecords: [{
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      }
    ]
    },
    {
      marketSizeRowID: 0,
      supplier_id: 0,
      product_family_id: 0,
      item_group_id: 0,
      market_potential_id: 0,
      marketSizeRecords: [{
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      }
    ]
    },
    {
      marketSizeRowID: 0,
      supplier_id: 0,
      product_family_id: 0,
      item_group_id: 0,
      market_potential_id: 0,
      marketSizeRecords: [{
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      }
    ]
    },
    {
      marketSizeRowID: 0,
      supplier_id: 0,
      product_family_id: 0,
      item_group_id: 0,
      market_potential_id: 0,
      marketSizeRecords: [{
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      }
    ]
    },
    {
      marketSizeRowID: 0,
      supplier_id: 0,
      product_family_id: 0,
      item_group_id: 0,
      market_potential_id: 0,
      marketSizeRecords: [{
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      },
      {
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0
      }
    ]
    }],


  },
  reducers: {
    updateUser_Id: (state, action) => { state.marketPotentials.user_id = action.payload },
    updateBl_Id: (state, action) => { state.marketPotentials.bl_id = action.payload },
    updateBu_Id: (state, action) => { state.marketPotentials.bu_id = action.payload },
    updateAccount_Type_Id: (state, action) => { state.marketPotentials.account_type_id = action.payload },
    updateAccount_Id: (state, action) => { state.marketPotentials.account_id = action.payload },
    updateAccount_Name: (state, action) => { state.marketPotentials.account_name = action.payload },
    updateAccount_Area: (state, action) => { state.marketPotentials.account_area = action.payload },
    updateKnee_Replacement: (state, action) => { state.marketPotentials.knee_replacement = action.payload },
    updateHip_Replacement: (state, action) => { state.marketPotentials.hip_replacement = action.payload },
    updateNumber_Of_Operation_Rooms: (state, action) => { state.marketPotentials.number_of_operation_rooms = action.payload },
    updateNumber_Of_Trauma_Cases_Month: (state, action) => { state.marketPotentials.number_of_Trauma_cases_month = action.payload },
    updateNeuro_Surgery: (state, action) => { state.marketPotentials.neuro_surgery = action.payload },
    updateCardiothoracic: (state, action) => { state.marketPotentials.cardiothoracic = action.payload },
    updateOncology: (state, action) => { state.marketPotentials.oncology = action.payload },
    updateUrology: (state, action) => { state.marketPotentials.urology = action.payload },
    updateLiver_Transplant: (state, action) => { state.marketPotentials.liver_transplant = action.payload },
    updateKidney_Transplant: (state, action) => { state.marketPotentials.kidney_transplant = action.payload },
    updateGynecology: (state, action) => { state.marketPotentials.gynecology = action.payload },
    updateGeneral_Surgery: (state, action) => { state.marketPotentials.general_surgery = action.payload },
    updateNumber_Of_Plasma_Bags_Dispensed: (state, action) => { state.marketPotentials.number_of_plasma_bags_dispensed = action.payload },
    updateOpen_Heart: (state, action) => { state.marketPotentials.open_heart = action.payload },
    updateNumber_Of_Icu_Beds: (state, action) => { state.marketPotentials.number_of_ICU_beds = action.payload },
    updateNumber_Of_Plasma_Autoclaves: (state, action) => { state.marketPotentials.number_of_Plasma_Autoclaves = action.payload },
    updateLoad_Of_Plasma_Autoclave_Day: (state, action) => { state.marketPotentials.load_of_Plasma_autoclave_day = action.payload },
    updateRate_Of_Pouches_Load_Day_Of_Instruments: (state, action) => { state.marketPotentials.rate_of_pouches_load_day_of_Instruments = action.payload },
    updateNumber_Of_Steam_Autoclaves: (state, action) => { state.marketPotentials.number_of_Steam_Autoclaves = action.payload },
    updateLoad_Of_Steam_Autoclave_Day: (state, action) => { state.marketPotentials.load_of_Steam_autoclave_day = action.payload },
    updateRate_Of_Pouches_Load_Day_Of_Dressings: (state, action) => { state.marketPotentials.rate_of_pouches_load_day_of_Dressings = action.payload },
    updateOrtho: (state, action) => { state.marketPotentials.ortho = action.payload },
    updateCardio: (state, action) => { state.marketPotentials.cardio = action.payload },
    updateNeuro: (state, action) => { state.marketPotentials.neuro = action.payload },
    updateTransplant: (state, action) => { state.marketPotentials.transplant = action.payload },
    updateOstomy: (state, action) => { state.marketPotentials.ostomy = action.payload },
    updateDiabetic_Foot_Ulcers: (state, action) => { state.marketPotentials.diabetic_Foot_Ulcers = action.payload },
    updatePressure_Ulcers: (state, action) => { state.marketPotentials.pressure_Ulcers = action.payload },
    updateBurns: (state, action) => { state.marketPotentials.burns = action.payload },
    updateSpinal_Chord_Injury: (state, action) => { state.marketPotentials.spinal_Chord_Injury = action.payload },
    updatePcnl: (state, action) => { state.marketPotentials.pcnl = action.payload },
    updateFurs: (state, action) => { state.marketPotentials.furs = action.payload },
    updateTotal_Ed_Cases: (state, action) => { state.marketPotentials.total_ed_cases = action.payload },
    updateNumber_Of_Ed_Cases_Operated: (state, action) => { state.marketPotentials.number_of_ed_cases_operated = action.payload },
    updateNumber_Of_Ed_Recurrent_Cases: (state, action) => { state.marketPotentials.number_of_ed_recurrent_cases = action.payload },
    updateCycle_Rate: (state, action) => { state.marketPotentials.cycle_rate = action.payload },
    updateTotal_Number_Of_Operations_Per: (state, action) => { state.marketPotentials.total_number_of_operations_per = action.payload },
    updateTotal_Number_Of_Operations_Per_Month: (state, action) => { state.marketPotentials.total_number_of_operations_per_month = action.payload },
    updateNumber_Of_Renting_Cases_Month: (state, action) => { state.marketPotentials.number_of_renting_cases_month = action.payload },
    updateCost_Of_Renting_Case: (state, action) => { state.marketPotentials.cost_of_renting_case = action.payload },
    updateOpen_Surgery: (state, action) => { state.marketPotentials.open_surgery = action.payload },
    updateBasic_Laproscopy: (state, action) => { state.marketPotentials.basic_laproscopy = action.payload },
    updateAdvanced_Laproscopy: (state, action) => { state.marketPotentials.advanced_laproscopy = action.payload },
    updateNose: (state, action) => { state.marketPotentials.nose = action.payload },
    updateEar: (state, action) => { state.marketPotentials.ear = action.payload },
    updateLarynx: (state, action) => { state.marketPotentials.larynx = action.payload },
    updateDiagnostic: (state, action) => { state.marketPotentials.diagnostic = action.payload },
    updateChest_Adult_Cases: (state, action) => { state.marketPotentials.chest_adult_cases = action.payload },
    updateChest_Pediatric_Cases: (state, action) => { state.marketPotentials.chest_Pediatric_cases = action.payload },
    updateThorax_Adult_Cases: (state, action) => { state.marketPotentials.thorax_adult_cases = action.payload },
    updateThorax_Pediatric_Cases: (state, action) => { state.marketPotentials.thorax_Pediatric_cases = action.payload },
    updateMyomectomy: (state, action) => { state.marketPotentials.myomectomy = action.payload },
    updateHysterectomy: (state, action) => { state.marketPotentials.hysterectomy = action.payload },
    updateLaproscopic_Gyn: (state, action) => { state.marketPotentials.laproscopic_gyn = action.payload },
    updateDiagnostic_Hysteroscopy: (state, action) => { state.marketPotentials.diagnostic_hysteroscopy = action.payload },
    updateOperative_Hysteroscopy: (state, action) => { state.marketPotentials.operative_hysteroscopy = action.payload },
    updateNumber_Of_Kidney_Stone_Cases: (state, action) => { state.marketPotentials.number_of_kidney_stone_cases = action.payload },
    updateEndoscopy: (state, action) => { state.marketPotentials.endoscopy = action.payload },
    updateCranial_Navigation: (state, action) => { state.marketPotentials.cranial_navigation = action.payload },
    updateNeuro_Biopsy: (state, action) => { state.marketPotentials.neuro_biopsy = action.payload },
    updateStereotactic_Neurosurgery: (state, action) => { state.marketPotentials.stereotactic_neurosurgery = action.payload },
    updateNumber_Of_Inpatient_Beds: (state, action) => { state.marketPotentials.number_of_inpatient_beds = action.payload },
    updateBariatric_Surgery: (state, action) => { state.marketPotentials.bariatric_surgery = action.payload },
    updateUro_Surgery: (state, action) => { state.marketPotentials.uro_surgery = action.payload },
    updateGyn_Surgery: (state, action) => { state.marketPotentials.gyn_surgery = action.payload },
    updatePediatric_Surgery: (state, action) => { state.marketPotentials.pediatric_surgery = action.payload },
    updateCardiovascular_Surgery: (state, action) => { state.marketPotentials.cardiovascular_surgery = action.payload },
    updateEnt_Surgery: (state, action) => { state.marketPotentials.ent_surgery = action.payload },
    updateOphthalmolgy: (state, action) => { state.marketPotentials.ophthalmolgy = action.payload },
    updateOrtho_Surgery: (state, action) => { state.marketPotentials.ortho_surgery = action.payload },
    updateNumber_Of_Devices_Tested_Year: (state, action) => { state.marketPotentials.number_of_devices_tested_year = action.payload },


    u0pdateMarketSizeRowID: (state, action) => { state.marketSize[0].marketSizeRowID = action.payload },
    u0pdateSupplier_id: (state, action) => { state.marketSize[0].supplier_id = action.payload },
    u0pdateProduct_family_id: (state, action) => { state.marketSize[0].product_family_id = action.payload },
    u0pdateItem_group_id: (state, action) => { state.marketSize[0].item_group_id = action.payload },
    u0pdateMarket_potential_id: (state, action) => { state.marketSize[0].market_potential_id = action.payload },

    u1pdateMarketSizeRowID: (state, action) => { state.marketSize[1].marketSizeRowID = action.payload },
    u1pdateSupplier_id: (state, action) => { state.marketSize[1].supplier_id = action.payload },
    u1pdateProduct_family_id: (state, action) => { state.marketSize[1].product_family_id = action.payload },
    u1pdateItem_group_id: (state, action) => { state.marketSize[1].item_group_id = action.payload },
    u1pdateMarket_potential_id: (state, action) => { state.marketSize[1].market_potential_id = action.payload },

    u2pdateMarketSizeRowID: (state, action) => { state.marketSize[2].marketSizeRowID = action.payload },
    u2pdateSupplier_id: (state, action) => { state.marketSize[2].supplier_id = action.payload },
    u2pdateProduct_family_id: (state, action) => { state.marketSize[2].product_family_id = action.payload },
    u2pdateItem_group_id: (state, action) => { state.marketSize[2].item_group_id = action.payload },
    u2pdateMarket_potential_id: (state, action) => { state.marketSize[2].market_potential_id = action.payload },

    u3pdateMarketSizeRowID: (state, action) => { state.marketSize[3].marketSizeRowID = action.payload },
    u3pdateSupplier_id: (state, action) => { state.marketSize[3].supplier_id = action.payload },
    u3pdateProduct_family_id: (state, action) => { state.marketSize[3].product_family_id = action.payload },
    u3pdateItem_group_id: (state, action) => { state.marketSize[3].item_group_id = action.payload },
    u3pdateMarket_potential_id: (state, action) => { state.marketSize[3].market_potential_id = action.payload },


    u4pdateMarketSizeRowID: (state, action) => { state.marketSize[4].marketSizeRowID = action.payload },
    u4pdateSupplier_id: (state, action) => { state.marketSize[4].supplier_id = action.payload },
    u4pdateProduct_family_id: (state, action) => { state.marketSize[4].product_family_id = action.payload },
    u4pdateItem_group_id: (state, action) => { state.marketSize[4].item_group_id = action.payload },
    u4pdateMarket_potential_id: (state, action) => { state.marketSize[4].market_potential_id = action.payload },

    
    u5pdateMarketSizeRowID: (state, action) => { state.marketSize[5].marketSizeRowID = action.payload },
    u5pdateSupplier_id: (state, action) => { state.marketSize[5].supplier_id = action.payload },
    u5pdateProduct_family_id: (state, action) => { state.marketSize[5].product_family_id = action.payload },
    u5pdateItem_group_id: (state, action) => { state.marketSize[5].item_group_id = action.payload },
    u5pdateMarket_potential_id: (state, action) => { state.marketSize[5].market_potential_id = action.payload },


    u6pdateMarketSizeRowID: (state, action) => { state.marketSize[6].marketSizeRowID = action.payload },
    u6pdateSupplier_id: (state, action) => { state.marketSize[6].supplier_id = action.payload },
    u6pdateProduct_family_id: (state, action) => { state.marketSize[6].product_family_id = action.payload },
    u6pdateItem_group_id: (state, action) => { state.marketSize[6].item_group_id = action.payload },
    u6pdateMarket_potential_id: (state, action) => { state.marketSize[6].market_potential_id = action.payload },


    u7pdateMarketSizeRowID: (state, action) => { state.marketSize[7].marketSizeRowID = action.payload },
    u7pdateSupplier_id: (state, action) => { state.marketSize[7].supplier_id = action.payload },
    u7pdateProduct_family_id: (state, action) => { state.marketSize[7].product_family_id = action.payload },
    u7pdateItem_group_id: (state, action) => { state.marketSize[7].item_group_id = action.payload },
    u7pdateMarket_potential_id: (state, action) => { state.marketSize[7].market_potential_id = action.payload },


    u8pdateMarketSizeRowID: (state, action) => { state.marketSize[8].marketSizeRowID = action.payload },
    u8pdateSupplier_id: (state, action) => { state.marketSize[8].supplier_id = action.payload },
    u8pdateProduct_family_id: (state, action) => { state.marketSize[8].product_family_id = action.payload },
    u8pdateItem_group_id: (state, action) => { state.marketSize[8].item_group_id = action.payload },
    u8pdateMarket_potential_id: (state, action) => { state.marketSize[8].market_potential_id = action.payload },


    u9pdateMarketSizeRowID: (state, action) => { state.marketSize[9].marketSizeRowID = action.payload },
    u9pdateSupplier_id: (state, action) => { state.marketSize[9].supplier_id = action.payload },
    u9pdateProduct_family_id: (state, action) => { state.marketSize[9].product_family_id = action.payload },
    u9pdateItem_group_id: (state, action) => { state.marketSize[9].item_group_id = action.payload },
    u9pdateMarket_potential_id: (state, action) => { state.marketSize[9].market_potential_id = action.payload },


    // updateMarketSizeRecordsID: (state, action) => { state.marketSize[0].marketSizeRecords[0].marketSizeRecordsID = action.payload },
    // updateEgmed_consumption: (state, action) => { state.marketSize[0].marketSizeRecords[0].egmed_consumption = action.payload },
    // updateTotal_consumption: (state, action) => { state.marketSize[0].marketSizeRecords[0].total_consumption = action.payload },
    // updateCompetitor_id: (state, action) => { state.marketSize[0].marketSizeRecords[0].competitor_id = action.payload },
    // updateItem_qty1: (state, action) => { state.marketSize[0].marketSizeRecords[0].item_qty1 = action.payload },
    // updateItem_status1: (state, action) => { state.marketSize[0].marketSizeRecords[0].item_status1 = action.payload },
    // updateItem_qty2: (state, action) => { state.marketSize[0].marketSizeRecords[0].item_qty2 = action.payload },
    // updateItem_status2: (state, action) => { state.marketSize[0].marketSizeRecords[0].item_status2 = action.payload },
    // updateMarket_size_id: (state, action) => { state.marketSize[0].marketSizeRecords[0].market_size_id = action.payload },

    u0_0pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[0].marketSizeRecords[0].marketSizeRecordsID = action.payload },
    u0_0pdateEgmed_consumption : (state, action) =>{ state.marketSize[0].marketSizeRecords[0].egmed_consumption = action.payload },
    u0_0pdateTotal_consumption : (state, action) =>{ state.marketSize[0].marketSizeRecords[0].total_consumption = action.payload },
    u0_0pdateCompetitor_id : (state, action) =>{ state.marketSize[0].marketSizeRecords[0].competitor_id = action.payload },
    u0_0pdateItem_qty1 : (state, action) =>{ state.marketSize[0].marketSizeRecords[0].item_qty1 = action.payload },
    u0_0pdateItem_status1 : (state, action) =>{ state.marketSize[0].marketSizeRecords[0].item_status1 = action.payload },
    u0_0pdateItem_qty2 : (state, action) =>{ state.marketSize[0].marketSizeRecords[0].item_qty2 = action.payload },
    u0_0pdateItem_status2 : (state, action) =>{ state.marketSize[0].marketSizeRecords[0].item_status2 = action.payload },
    u0_0pdateMarket_size_id : (state, action) =>{ state.marketSize[0].marketSizeRecords[0].market_size_id = action.payload },
    
    
u0_1pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[0].marketSizeRecords[1].marketSizeRecordsID = action.payload },
u0_1pdateEgmed_consumption : (state, action) =>{ state.marketSize[0].marketSizeRecords[1].egmed_consumption = action.payload },
u0_1pdateTotal_consumption : (state, action) =>{ state.marketSize[0].marketSizeRecords[1].total_consumption = action.payload },
u0_1pdateCompetitor_id : (state, action) =>{ state.marketSize[0].marketSizeRecords[1].competitor_id = action.payload },
u0_1pdateItem_qty1 : (state, action) =>{ state.marketSize[0].marketSizeRecords[1].item_qty1 = action.payload },
u0_1pdateItem_status1 : (state, action) =>{ state.marketSize[0].marketSizeRecords[1].item_status1 = action.payload },
u0_1pdateItem_qty2 : (state, action) =>{ state.marketSize[0].marketSizeRecords[1].item_qty2 = action.payload },
u0_1pdateItem_status2 : (state, action) =>{ state.marketSize[0].marketSizeRecords[1].item_status2 = action.payload },
u0_1pdateMarket_size_id : (state, action) =>{ state.marketSize[0].marketSizeRecords[1].market_size_id = action.payload },


u0_2pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[0].marketSizeRecords[2].marketSizeRecordsID = action.payload },
u0_2pdateEgmed_consumption : (state, action) =>{ state.marketSize[0].marketSizeRecords[2].egmed_consumption = action.payload },
u0_2pdateTotal_consumption : (state, action) =>{ state.marketSize[0].marketSizeRecords[2].total_consumption = action.payload },
u0_2pdateCompetitor_id : (state, action) =>{ state.marketSize[0].marketSizeRecords[2].competitor_id = action.payload },
u0_2pdateItem_qty1 : (state, action) =>{ state.marketSize[0].marketSizeRecords[2].item_qty1 = action.payload },
u0_2pdateItem_status1 : (state, action) =>{ state.marketSize[0].marketSizeRecords[2].item_status1 = action.payload },
u0_2pdateItem_qty2 : (state, action) =>{ state.marketSize[0].marketSizeRecords[2].item_qty2 = action.payload },
u0_2pdateItem_status2 : (state, action) =>{ state.marketSize[0].marketSizeRecords[2].item_status2 = action.payload },
u0_2pdateMarket_size_id : (state, action) =>{ state.marketSize[0].marketSizeRecords[2].market_size_id = action.payload },


u0_3pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[0].marketSizeRecords[3].marketSizeRecordsID = action.payload },
u0_3pdateEgmed_consumption : (state, action) =>{ state.marketSize[0].marketSizeRecords[3].egmed_consumption = action.payload },
u0_3pdateTotal_consumption : (state, action) =>{ state.marketSize[0].marketSizeRecords[3].total_consumption = action.payload },
u0_3pdateCompetitor_id : (state, action) =>{ state.marketSize[0].marketSizeRecords[3].competitor_id = action.payload },
u0_3pdateItem_qty1 : (state, action) =>{ state.marketSize[0].marketSizeRecords[3].item_qty1 = action.payload },
u0_3pdateItem_status1 : (state, action) =>{ state.marketSize[0].marketSizeRecords[3].item_status1 = action.payload },
u0_3pdateItem_qty2 : (state, action) =>{ state.marketSize[0].marketSizeRecords[3].item_qty2 = action.payload },
u0_3pdateItem_status2 : (state, action) =>{ state.marketSize[0].marketSizeRecords[3].item_status2 = action.payload },
u0_3pdateMarket_size_id : (state, action) =>{ state.marketSize[0].marketSizeRecords[3].market_size_id = action.payload },



u0_4pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[0].marketSizeRecords[4].marketSizeRecordsID = action.payload },
u0_4pdateEgmed_consumption : (state, action) =>{ state.marketSize[0].marketSizeRecords[4].egmed_consumption = action.payload },
u0_4pdateTotal_consumption : (state, action) =>{ state.marketSize[0].marketSizeRecords[4].total_consumption = action.payload },
u0_4pdateCompetitor_id : (state, action) =>{ state.marketSize[0].marketSizeRecords[4].competitor_id = action.payload },
u0_4pdateItem_qty1 : (state, action) =>{ state.marketSize[0].marketSizeRecords[4].item_qty1 = action.payload },
u0_4pdateItem_status1 : (state, action) =>{ state.marketSize[0].marketSizeRecords[4].item_status1 = action.payload },
u0_4pdateItem_qty2 : (state, action) =>{ state.marketSize[0].marketSizeRecords[4].item_qty2 = action.payload },
u0_4pdateItem_status2 : (state, action) =>{ state.marketSize[0].marketSizeRecords[4].item_status2 = action.payload },
u0_4pdateMarket_size_id : (state, action) =>{ state.marketSize[0].marketSizeRecords[4].market_size_id = action.payload },



u0_5pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[0].marketSizeRecords[5].marketSizeRecordsID = action.payload },
u0_5pdateEgmed_consumption : (state, action) =>{ state.marketSize[0].marketSizeRecords[5].egmed_consumption = action.payload },
u0_5pdateTotal_consumption : (state, action) =>{ state.marketSize[0].marketSizeRecords[5].total_consumption = action.payload },
u0_5pdateCompetitor_id : (state, action) =>{ state.marketSize[0].marketSizeRecords[5].competitor_id = action.payload },
u0_5pdateItem_qty1 : (state, action) =>{ state.marketSize[0].marketSizeRecords[5].item_qty1 = action.payload },
u0_5pdateItem_status1 : (state, action) =>{ state.marketSize[0].marketSizeRecords[5].item_status1 = action.payload },
u0_5pdateItem_qty2 : (state, action) =>{ state.marketSize[0].marketSizeRecords[5].item_qty2 = action.payload },
u0_5pdateItem_status2 : (state, action) =>{ state.marketSize[0].marketSizeRecords[5].item_status2 = action.payload },
u0_5pdateMarket_size_id : (state, action) =>{ state.marketSize[0].marketSizeRecords[5].market_size_id = action.payload },



u0_6pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[0].marketSizeRecords[6].marketSizeRecordsID = action.payload },
u0_6pdateEgmed_consumption : (state, action) =>{ state.marketSize[0].marketSizeRecords[6].egmed_consumption = action.payload },
u0_6pdateTotal_consumption : (state, action) =>{ state.marketSize[0].marketSizeRecords[6].total_consumption = action.payload },
u0_6pdateCompetitor_id : (state, action) =>{ state.marketSize[0].marketSizeRecords[6].competitor_id = action.payload },
u0_6pdateItem_qty1 : (state, action) =>{ state.marketSize[0].marketSizeRecords[6].item_qty1 = action.payload },
u0_6pdateItem_status1 : (state, action) =>{ state.marketSize[0].marketSizeRecords[6].item_status1 = action.payload },
u0_6pdateItem_qty2 : (state, action) =>{ state.marketSize[0].marketSizeRecords[6].item_qty2 = action.payload },
u0_6pdateItem_status2 : (state, action) =>{ state.marketSize[0].marketSizeRecords[6].item_status2 = action.payload },
u0_6pdateMarket_size_id : (state, action) =>{ state.marketSize[0].marketSizeRecords[6].market_size_id = action.payload },

u0_7pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[0].marketSizeRecords[7].marketSizeRecordsID = action.payload },
u0_7pdateEgmed_consumption : (state, action) =>{ state.marketSize[0].marketSizeRecords[7].egmed_consumption = action.payload },
u0_7pdateTotal_consumption : (state, action) =>{ state.marketSize[0].marketSizeRecords[7].total_consumption = action.payload },
u0_7pdateCompetitor_id : (state, action) =>{ state.marketSize[0].marketSizeRecords[7].competitor_id = action.payload },
u0_7pdateItem_qty1 : (state, action) =>{ state.marketSize[0].marketSizeRecords[7].item_qty1 = action.payload },
u0_7pdateItem_status1 : (state, action) =>{ state.marketSize[0].marketSizeRecords[7].item_status1 = action.payload },
u0_7pdateItem_qty2 : (state, action) =>{ state.marketSize[0].marketSizeRecords[7].item_qty2 = action.payload },
u0_7pdateItem_status2 : (state, action) =>{ state.marketSize[0].marketSizeRecords[7].item_status2 = action.payload },
u0_7pdateMarket_size_id : (state, action) =>{ state.marketSize[0].marketSizeRecords[7].market_size_id = action.payload },

u0_8pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[0].marketSizeRecords[8].marketSizeRecordsID = action.payload },
u0_8pdateEgmed_consumption : (state, action) =>{ state.marketSize[0].marketSizeRecords[8].egmed_consumption = action.payload },
u0_8pdateTotal_consumption : (state, action) =>{ state.marketSize[0].marketSizeRecords[8].total_consumption = action.payload },
u0_8pdateCompetitor_id : (state, action) =>{ state.marketSize[0].marketSizeRecords[8].competitor_id = action.payload },
u0_8pdateItem_qty1 : (state, action) =>{ state.marketSize[0].marketSizeRecords[8].item_qty1 = action.payload },
u0_8pdateItem_status1 : (state, action) =>{ state.marketSize[0].marketSizeRecords[8].item_status1 = action.payload },
u0_8pdateItem_qty2 : (state, action) =>{ state.marketSize[0].marketSizeRecords[8].item_qty2 = action.payload },
u0_8pdateItem_status2 : (state, action) =>{ state.marketSize[0].marketSizeRecords[8].item_status2 = action.payload },
u0_8pdateMarket_size_id : (state, action) =>{ state.marketSize[0].marketSizeRecords[8].market_size_id = action.payload },

u0_9pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[0].marketSizeRecords[9].marketSizeRecordsID = action.payload },
u0_9pdateEgmed_consumption : (state, action) =>{ state.marketSize[0].marketSizeRecords[9].egmed_consumption = action.payload },
u0_9pdateTotal_consumption : (state, action) =>{ state.marketSize[0].marketSizeRecords[9].total_consumption = action.payload },
u0_9pdateCompetitor_id : (state, action) =>{ state.marketSize[0].marketSizeRecords[9].competitor_id = action.payload },
u0_9pdateItem_qty1 : (state, action) =>{ state.marketSize[0].marketSizeRecords[9].item_qty1 = action.payload },
u0_9pdateItem_status1 : (state, action) =>{ state.marketSize[0].marketSizeRecords[9].item_status1 = action.payload },
u0_9pdateItem_qty2 : (state, action) =>{ state.marketSize[0].marketSizeRecords[9].item_qty2 = action.payload },
u0_9pdateItem_status2 : (state, action) =>{ state.marketSize[0].marketSizeRecords[9].item_status2 = action.payload },
u0_9pdateMarket_size_id : (state, action) =>{ state.marketSize[0].marketSizeRecords[9].market_size_id = action.payload },


u0_10pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[0].marketSizeRecords[10].marketSizeRecordsID = action.payload },
u0_10pdateEgmed_consumption : (state, action) =>{ state.marketSize[0].marketSizeRecords[10].egmed_consumption = action.payload },
u0_10pdateTotal_consumption : (state, action) =>{ state.marketSize[0].marketSizeRecords[10].total_consumption = action.payload },
u0_10pdateCompetitor_id : (state, action) =>{ state.marketSize[0].marketSizeRecords[10].competitor_id = action.payload },
u0_10pdateItem_qty1 : (state, action) =>{ state.marketSize[0].marketSizeRecords[10].item_qty1 = action.payload },
u0_10pdateItem_status1 : (state, action) =>{ state.marketSize[0].marketSizeRecords[10].item_status1 = action.payload },
u0_10pdateItem_qty2 : (state, action) =>{ state.marketSize[0].marketSizeRecords[10].item_qty2 = action.payload },
u0_10pdateItem_status2 : (state, action) =>{ state.marketSize[0].marketSizeRecords[10].item_status2 = action.payload },
u0_10pdateMarket_size_id : (state, action) =>{ state.marketSize[0].marketSizeRecords[10].market_size_id = action.payload },

u0_11pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[0].marketSizeRecords[11].marketSizeRecordsID = action.payload },
u0_11pdateEgmed_consumption : (state, action) =>{ state.marketSize[0].marketSizeRecords[11].egmed_consumption = action.payload },
u0_11pdateTotal_consumption : (state, action) =>{ state.marketSize[0].marketSizeRecords[11].total_consumption = action.payload },
u0_11pdateCompetitor_id : (state, action) =>{ state.marketSize[0].marketSizeRecords[11].competitor_id = action.payload },
u0_11pdateItem_qty1 : (state, action) =>{ state.marketSize[0].marketSizeRecords[11].item_qty1 = action.payload },
u0_11pdateItem_status1 : (state, action) =>{ state.marketSize[0].marketSizeRecords[11].item_status1 = action.payload },
u0_11pdateItem_qty2 : (state, action) =>{ state.marketSize[0].marketSizeRecords[11].item_qty2 = action.payload },
u0_11pdateItem_status2 : (state, action) =>{ state.marketSize[0].marketSizeRecords[11].item_status2 = action.payload },
u0_11pdateMarket_size_id : (state, action) =>{ state.marketSize[0].marketSizeRecords[11].market_size_id = action.payload },


u0_12pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[0].marketSizeRecords[12].marketSizeRecordsID = action.payload },
u0_12pdateEgmed_consumption : (state, action) =>{ state.marketSize[0].marketSizeRecords[12].egmed_consumption = action.payload },
u0_12pdateTotal_consumption : (state, action) =>{ state.marketSize[0].marketSizeRecords[12].total_consumption = action.payload },
u0_12pdateCompetitor_id : (state, action) =>{ state.marketSize[0].marketSizeRecords[12].competitor_id = action.payload },
u0_12pdateItem_qty1 : (state, action) =>{ state.marketSize[0].marketSizeRecords[12].item_qty1 = action.payload },
u0_12pdateItem_status1 : (state, action) =>{ state.marketSize[0].marketSizeRecords[12].item_status1 = action.payload },
u0_12pdateItem_qty2 : (state, action) =>{ state.marketSize[0].marketSizeRecords[12].item_qty2 = action.payload },
u0_12pdateItem_status2 : (state, action) =>{ state.marketSize[0].marketSizeRecords[12].item_status2 = action.payload },
u0_12pdateMarket_size_id : (state, action) =>{ state.marketSize[0].marketSizeRecords[12].market_size_id = action.payload },


u0_13pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[0].marketSizeRecords[13].marketSizeRecordsID = action.payload },
u0_13pdateEgmed_consumption : (state, action) =>{ state.marketSize[0].marketSizeRecords[13].egmed_consumption = action.payload },
u0_13pdateTotal_consumption : (state, action) =>{ state.marketSize[0].marketSizeRecords[13].total_consumption = action.payload },
u0_13pdateCompetitor_id : (state, action) =>{ state.marketSize[0].marketSizeRecords[13].competitor_id = action.payload },
u0_13pdateItem_qty1 : (state, action) =>{ state.marketSize[0].marketSizeRecords[13].item_qty1 = action.payload },
u0_13pdateItem_status1 : (state, action) =>{ state.marketSize[0].marketSizeRecords[13].item_status1 = action.payload },
u0_13pdateItem_qty2 : (state, action) =>{ state.marketSize[0].marketSizeRecords[13].item_qty2 = action.payload },
u0_13pdateItem_status2 : (state, action) =>{ state.marketSize[0].marketSizeRecords[13].item_status2 = action.payload },
u0_13pdateMarket_size_id : (state, action) =>{ state.marketSize[0].marketSizeRecords[13].market_size_id = action.payload },


u0_14pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[0].marketSizeRecords[14].marketSizeRecordsID = action.payload },
u0_14pdateEgmed_consumption : (state, action) =>{ state.marketSize[0].marketSizeRecords[14].egmed_consumption = action.payload },
u0_14pdateTotal_consumption : (state, action) =>{ state.marketSize[0].marketSizeRecords[14].total_consumption = action.payload },
u0_14pdateCompetitor_id : (state, action) =>{ state.marketSize[0].marketSizeRecords[14].competitor_id = action.payload },
u0_14pdateItem_qty1 : (state, action) =>{ state.marketSize[0].marketSizeRecords[14].item_qty1 = action.payload },
u0_14pdateItem_status1 : (state, action) =>{ state.marketSize[0].marketSizeRecords[14].item_status1 = action.payload },
u0_14pdateItem_qty2 : (state, action) =>{ state.marketSize[0].marketSizeRecords[14].item_qty2 = action.payload },
u0_14pdateItem_status2 : (state, action) =>{ state.marketSize[0].marketSizeRecords[14].item_status2 = action.payload },
u0_14pdateMarket_size_id : (state, action) =>{ state.marketSize[0].marketSizeRecords[14].market_size_id = action.payload },


u0_15pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[0].marketSizeRecords[15].marketSizeRecordsID = action.payload },
u0_15pdateEgmed_consumption : (state, action) =>{ state.marketSize[0].marketSizeRecords[15].egmed_consumption = action.payload },
u0_15pdateTotal_consumption : (state, action) =>{ state.marketSize[0].marketSizeRecords[15].total_consumption = action.payload },
u0_15pdateCompetitor_id : (state, action) =>{ state.marketSize[0].marketSizeRecords[15].competitor_id = action.payload },
u0_15pdateItem_qty1 : (state, action) =>{ state.marketSize[0].marketSizeRecords[15].item_qty1 = action.payload },
u0_15pdateItem_status1 : (state, action) =>{ state.marketSize[0].marketSizeRecords[15].item_status1 = action.payload },
u0_15pdateItem_qty2 : (state, action) =>{ state.marketSize[0].marketSizeRecords[15].item_qty2 = action.payload },
u0_15pdateItem_status2 : (state, action) =>{ state.marketSize[0].marketSizeRecords[15].item_status2 = action.payload },
u0_15pdateMarket_size_id : (state, action) =>{ state.marketSize[0].marketSizeRecords[15].market_size_id = action.payload },


u0_16pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[0].marketSizeRecords[16].marketSizeRecordsID = action.payload },
u0_16pdateEgmed_consumption : (state, action) =>{ state.marketSize[0].marketSizeRecords[16].egmed_consumption = action.payload },
u0_16pdateTotal_consumption : (state, action) =>{ state.marketSize[0].marketSizeRecords[16].total_consumption = action.payload },
u0_16pdateCompetitor_id : (state, action) =>{ state.marketSize[0].marketSizeRecords[16].competitor_id = action.payload },
u0_16pdateItem_qty1 : (state, action) =>{ state.marketSize[0].marketSizeRecords[16].item_qty1 = action.payload },
u0_16pdateItem_status1 : (state, action) =>{ state.marketSize[0].marketSizeRecords[16].item_status1 = action.payload },
u0_16pdateItem_qty2 : (state, action) =>{ state.marketSize[0].marketSizeRecords[16].item_qty2 = action.payload },
u0_16pdateItem_status2 : (state, action) =>{ state.marketSize[0].marketSizeRecords[16].item_status2 = action.payload },
u0_16pdateMarket_size_id : (state, action) =>{ state.marketSize[0].marketSizeRecords[16].market_size_id = action.payload },

////////////////////////////////1//0///


u1_0pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[1].marketSizeRecords[0].marketSizeRecordsID = action.payload },
u1_0pdateEgmed_consumption : (state, action) =>{ state.marketSize[1].marketSizeRecords[0].egmed_consumption = action.payload },
u1_0pdateTotal_consumption : (state, action) =>{ state.marketSize[1].marketSizeRecords[0].total_consumption = action.payload },
u1_0pdateCompetitor_id : (state, action) =>{ state.marketSize[1].marketSizeRecords[0].competitor_id = action.payload },
u1_0pdateItem_qty1 : (state, action) =>{ state.marketSize[1].marketSizeRecords[0].item_qty1 = action.payload },
u1_0pdateItem_status1 : (state, action) =>{ state.marketSize[1].marketSizeRecords[0].item_status1 = action.payload },
u1_0pdateItem_qty2 : (state, action) =>{ state.marketSize[1].marketSizeRecords[0].item_qty2 = action.payload },
u1_0pdateItem_status2 : (state, action) =>{ state.marketSize[1].marketSizeRecords[0].item_status2 = action.payload },
u1_0pdateMarket_size_id : (state, action) =>{ state.marketSize[1].marketSizeRecords[0].market_size_id = action.payload },


u1_1pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[1].marketSizeRecords[1].marketSizeRecordsID = action.payload },
u1_1pdateEgmed_consumption : (state, action) =>{ state.marketSize[1].marketSizeRecords[1].egmed_consumption = action.payload },
u1_1pdateTotal_consumption : (state, action) =>{ state.marketSize[1].marketSizeRecords[1].total_consumption = action.payload },
u1_1pdateCompetitor_id : (state, action) =>{ state.marketSize[1].marketSizeRecords[1].competitor_id = action.payload },
u1_1pdateItem_qty1 : (state, action) =>{ state.marketSize[1].marketSizeRecords[1].item_qty1 = action.payload },
u1_1pdateItem_status1 : (state, action) =>{ state.marketSize[1].marketSizeRecords[1].item_status1 = action.payload },
u1_1pdateItem_qty2 : (state, action) =>{ state.marketSize[1].marketSizeRecords[1].item_qty2 = action.payload },
u1_1pdateItem_status2 : (state, action) =>{ state.marketSize[1].marketSizeRecords[1].item_status2 = action.payload },
u1_1pdateMarket_size_id : (state, action) =>{ state.marketSize[1].marketSizeRecords[1].market_size_id = action.payload },


u1_2pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[1].marketSizeRecords[2].marketSizeRecordsID = action.payload },
u1_2pdateEgmed_consumption : (state, action) =>{ state.marketSize[1].marketSizeRecords[2].egmed_consumption = action.payload },
u1_2pdateTotal_consumption : (state, action) =>{ state.marketSize[1].marketSizeRecords[2].total_consumption = action.payload },
u1_2pdateCompetitor_id : (state, action) =>{ state.marketSize[1].marketSizeRecords[2].competitor_id = action.payload },
u1_2pdateItem_qty1 : (state, action) =>{ state.marketSize[1].marketSizeRecords[2].item_qty1 = action.payload },
u1_2pdateItem_status1 : (state, action) =>{ state.marketSize[1].marketSizeRecords[2].item_status1 = action.payload },
u1_2pdateItem_qty2 : (state, action) =>{ state.marketSize[1].marketSizeRecords[2].item_qty2 = action.payload },
u1_2pdateItem_status2 : (state, action) =>{ state.marketSize[1].marketSizeRecords[2].item_status2 = action.payload },
u1_2pdateMarket_size_id : (state, action) =>{ state.marketSize[1].marketSizeRecords[2].market_size_id = action.payload },


u1_3pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[1].marketSizeRecords[3].marketSizeRecordsID = action.payload },
u1_3pdateEgmed_consumption : (state, action) =>{ state.marketSize[1].marketSizeRecords[3].egmed_consumption = action.payload },
u1_3pdateTotal_consumption : (state, action) =>{ state.marketSize[1].marketSizeRecords[3].total_consumption = action.payload },
u1_3pdateCompetitor_id : (state, action) =>{ state.marketSize[1].marketSizeRecords[3].competitor_id = action.payload },
u1_3pdateItem_qty1 : (state, action) =>{ state.marketSize[1].marketSizeRecords[3].item_qty1 = action.payload },
u1_3pdateItem_status1 : (state, action) =>{ state.marketSize[1].marketSizeRecords[3].item_status1 = action.payload },
u1_3pdateItem_qty2 : (state, action) =>{ state.marketSize[1].marketSizeRecords[3].item_qty2 = action.payload },
u1_3pdateItem_status2 : (state, action) =>{ state.marketSize[1].marketSizeRecords[3].item_status2 = action.payload },
u1_3pdateMarket_size_id : (state, action) =>{ state.marketSize[1].marketSizeRecords[3].market_size_id = action.payload },


u1_4pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[1].marketSizeRecords[4].marketSizeRecordsID = action.payload },
u1_4pdateEgmed_consumption : (state, action) =>{ state.marketSize[1].marketSizeRecords[4].egmed_consumption = action.payload },
u1_4pdateTotal_consumption : (state, action) =>{ state.marketSize[1].marketSizeRecords[4].total_consumption = action.payload },
u1_4pdateCompetitor_id : (state, action) =>{ state.marketSize[1].marketSizeRecords[4].competitor_id = action.payload },
u1_4pdateItem_qty1 : (state, action) =>{ state.marketSize[1].marketSizeRecords[4].item_qty1 = action.payload },
u1_4pdateItem_status1 : (state, action) =>{ state.marketSize[1].marketSizeRecords[4].item_status1 = action.payload },
u1_4pdateItem_qty2 : (state, action) =>{ state.marketSize[1].marketSizeRecords[4].item_qty2 = action.payload },
u1_4pdateItem_status2 : (state, action) =>{ state.marketSize[1].marketSizeRecords[4].item_status2 = action.payload },
u1_4pdateMarket_size_id : (state, action) =>{ state.marketSize[1].marketSizeRecords[4].market_size_id = action.payload },


u1_5pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[1].marketSizeRecords[5].marketSizeRecordsID = action.payload },
u1_5pdateEgmed_consumption : (state, action) =>{ state.marketSize[1].marketSizeRecords[5].egmed_consumption = action.payload },
u1_5pdateTotal_consumption : (state, action) =>{ state.marketSize[1].marketSizeRecords[5].total_consumption = action.payload },
u1_5pdateCompetitor_id : (state, action) =>{ state.marketSize[1].marketSizeRecords[5].competitor_id = action.payload },
u1_5pdateItem_qty1 : (state, action) =>{ state.marketSize[1].marketSizeRecords[5].item_qty1 = action.payload },
u1_5pdateItem_status1 : (state, action) =>{ state.marketSize[1].marketSizeRecords[5].item_status1 = action.payload },
u1_5pdateItem_qty2 : (state, action) =>{ state.marketSize[1].marketSizeRecords[5].item_qty2 = action.payload },
u1_5pdateItem_status2 : (state, action) =>{ state.marketSize[1].marketSizeRecords[5].item_status2 = action.payload },
u1_5pdateMarket_size_id : (state, action) =>{ state.marketSize[1].marketSizeRecords[5].market_size_id = action.payload },


u1_6pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[1].marketSizeRecords[6].marketSizeRecordsID = action.payload },
u1_6pdateEgmed_consumption : (state, action) =>{ state.marketSize[1].marketSizeRecords[6].egmed_consumption = action.payload },
u1_6pdateTotal_consumption : (state, action) =>{ state.marketSize[1].marketSizeRecords[6].total_consumption = action.payload },
u1_6pdateCompetitor_id : (state, action) =>{ state.marketSize[1].marketSizeRecords[6].competitor_id = action.payload },
u1_6pdateItem_qty1 : (state, action) =>{ state.marketSize[1].marketSizeRecords[6].item_qty1 = action.payload },
u1_6pdateItem_status1 : (state, action) =>{ state.marketSize[1].marketSizeRecords[6].item_status1 = action.payload },
u1_6pdateItem_qty2 : (state, action) =>{ state.marketSize[1].marketSizeRecords[6].item_qty2 = action.payload },
u1_6pdateItem_status2 : (state, action) =>{ state.marketSize[1].marketSizeRecords[6].item_status2 = action.payload },
u1_6pdateMarket_size_id : (state, action) =>{ state.marketSize[1].marketSizeRecords[6].market_size_id = action.payload },


u1_7pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[1].marketSizeRecords[7].marketSizeRecordsID = action.payload },
u1_7pdateEgmed_consumption : (state, action) =>{ state.marketSize[1].marketSizeRecords[7].egmed_consumption = action.payload },
u1_7pdateTotal_consumption : (state, action) =>{ state.marketSize[1].marketSizeRecords[7].total_consumption = action.payload },
u1_7pdateCompetitor_id : (state, action) =>{ state.marketSize[1].marketSizeRecords[7].competitor_id = action.payload },
u1_7pdateItem_qty1 : (state, action) =>{ state.marketSize[1].marketSizeRecords[7].item_qty1 = action.payload },
u1_7pdateItem_status1 : (state, action) =>{ state.marketSize[1].marketSizeRecords[7].item_status1 = action.payload },
u1_7pdateItem_qty2 : (state, action) =>{ state.marketSize[1].marketSizeRecords[7].item_qty2 = action.payload },
u1_7pdateItem_status2 : (state, action) =>{ state.marketSize[1].marketSizeRecords[7].item_status2 = action.payload },
u1_7pdateMarket_size_id : (state, action) =>{ state.marketSize[1].marketSizeRecords[7].market_size_id = action.payload },


u1_8pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[1].marketSizeRecords[8].marketSizeRecordsID = action.payload },
u1_8pdateEgmed_consumption : (state, action) =>{ state.marketSize[1].marketSizeRecords[8].egmed_consumption = action.payload },
u1_8pdateTotal_consumption : (state, action) =>{ state.marketSize[1].marketSizeRecords[8].total_consumption = action.payload },
u1_8pdateCompetitor_id : (state, action) =>{ state.marketSize[1].marketSizeRecords[8].competitor_id = action.payload },
u1_8pdateItem_qty1 : (state, action) =>{ state.marketSize[1].marketSizeRecords[8].item_qty1 = action.payload },
u1_8pdateItem_status1 : (state, action) =>{ state.marketSize[1].marketSizeRecords[8].item_status1 = action.payload },
u1_8pdateItem_qty2 : (state, action) =>{ state.marketSize[1].marketSizeRecords[8].item_qty2 = action.payload },
u1_8pdateItem_status2 : (state, action) =>{ state.marketSize[1].marketSizeRecords[8].item_status2 = action.payload },
u1_8pdateMarket_size_id : (state, action) =>{ state.marketSize[1].marketSizeRecords[8].market_size_id = action.payload },


u1_9pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[1].marketSizeRecords[9].marketSizeRecordsID = action.payload },
u1_9pdateEgmed_consumption : (state, action) =>{ state.marketSize[1].marketSizeRecords[9].egmed_consumption = action.payload },
u1_9pdateTotal_consumption : (state, action) =>{ state.marketSize[1].marketSizeRecords[9].total_consumption = action.payload },
u1_9pdateCompetitor_id : (state, action) =>{ state.marketSize[1].marketSizeRecords[9].competitor_id = action.payload },
u1_9pdateItem_qty1 : (state, action) =>{ state.marketSize[1].marketSizeRecords[9].item_qty1 = action.payload },
u1_9pdateItem_status1 : (state, action) =>{ state.marketSize[1].marketSizeRecords[9].item_status1 = action.payload },
u1_9pdateItem_qty2 : (state, action) =>{ state.marketSize[1].marketSizeRecords[9].item_qty2 = action.payload },
u1_9pdateItem_status2 : (state, action) =>{ state.marketSize[1].marketSizeRecords[9].item_status2 = action.payload },
u1_9pdateMarket_size_id : (state, action) =>{ state.marketSize[1].marketSizeRecords[9].market_size_id = action.payload },


u1_10pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[1].marketSizeRecords[10].marketSizeRecordsID = action.payload },
u1_10pdateEgmed_consumption : (state, action) =>{ state.marketSize[1].marketSizeRecords[10].egmed_consumption = action.payload },
u1_10pdateTotal_consumption : (state, action) =>{ state.marketSize[1].marketSizeRecords[10].total_consumption = action.payload },
u1_10pdateCompetitor_id : (state, action) =>{ state.marketSize[1].marketSizeRecords[10].competitor_id = action.payload },
u1_10pdateItem_qty1 : (state, action) =>{ state.marketSize[1].marketSizeRecords[10].item_qty1 = action.payload },
u1_10pdateItem_status1 : (state, action) =>{ state.marketSize[1].marketSizeRecords[10].item_status1 = action.payload },
u1_10pdateItem_qty2 : (state, action) =>{ state.marketSize[1].marketSizeRecords[10].item_qty2 = action.payload },
u1_10pdateItem_status2 : (state, action) =>{ state.marketSize[1].marketSizeRecords[10].item_status2 = action.payload },
u1_10pdateMarket_size_id : (state, action) =>{ state.marketSize[1].marketSizeRecords[10].market_size_id = action.payload },


u1_11pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[1].marketSizeRecords[11].marketSizeRecordsID = action.payload },
u1_11pdateEgmed_consumption : (state, action) =>{ state.marketSize[1].marketSizeRecords[11].egmed_consumption = action.payload },
u1_11pdateTotal_consumption : (state, action) =>{ state.marketSize[1].marketSizeRecords[11].total_consumption = action.payload },
u1_11pdateCompetitor_id : (state, action) =>{ state.marketSize[1].marketSizeRecords[11].competitor_id = action.payload },
u1_11pdateItem_qty1 : (state, action) =>{ state.marketSize[1].marketSizeRecords[11].item_qty1 = action.payload },
u1_11pdateItem_status1 : (state, action) =>{ state.marketSize[1].marketSizeRecords[11].item_status1 = action.payload },
u1_11pdateItem_qty2 : (state, action) =>{ state.marketSize[1].marketSizeRecords[11].item_qty2 = action.payload },
u1_11pdateItem_status2 : (state, action) =>{ state.marketSize[1].marketSizeRecords[11].item_status2 = action.payload },
u1_11pdateMarket_size_id : (state, action) =>{ state.marketSize[1].marketSizeRecords[11].market_size_id = action.payload },


u1_12pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[1].marketSizeRecords[12].marketSizeRecordsID = action.payload },
u1_12pdateEgmed_consumption : (state, action) =>{ state.marketSize[1].marketSizeRecords[12].egmed_consumption = action.payload },
u1_12pdateTotal_consumption : (state, action) =>{ state.marketSize[1].marketSizeRecords[12].total_consumption = action.payload },
u1_12pdateCompetitor_id : (state, action) =>{ state.marketSize[1].marketSizeRecords[12].competitor_id = action.payload },
u1_12pdateItem_qty1 : (state, action) =>{ state.marketSize[1].marketSizeRecords[12].item_qty1 = action.payload },
u1_12pdateItem_status1 : (state, action) =>{ state.marketSize[1].marketSizeRecords[12].item_status1 = action.payload },
u1_12pdateItem_qty2 : (state, action) =>{ state.marketSize[1].marketSizeRecords[12].item_qty2 = action.payload },
u1_12pdateItem_status2 : (state, action) =>{ state.marketSize[1].marketSizeRecords[12].item_status2 = action.payload },
u1_12pdateMarket_size_id : (state, action) =>{ state.marketSize[1].marketSizeRecords[12].market_size_id = action.payload },


u1_13pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[1].marketSizeRecords[13].marketSizeRecordsID = action.payload },
u1_13pdateEgmed_consumption : (state, action) =>{ state.marketSize[1].marketSizeRecords[13].egmed_consumption = action.payload },
u1_13pdateTotal_consumption : (state, action) =>{ state.marketSize[1].marketSizeRecords[13].total_consumption = action.payload },
u1_13pdateCompetitor_id : (state, action) =>{ state.marketSize[1].marketSizeRecords[13].competitor_id = action.payload },
u1_13pdateItem_qty1 : (state, action) =>{ state.marketSize[1].marketSizeRecords[13].item_qty1 = action.payload },
u1_13pdateItem_status1 : (state, action) =>{ state.marketSize[1].marketSizeRecords[13].item_status1 = action.payload },
u1_13pdateItem_qty2 : (state, action) =>{ state.marketSize[1].marketSizeRecords[13].item_qty2 = action.payload },
u1_13pdateItem_status2 : (state, action) =>{ state.marketSize[1].marketSizeRecords[13].item_status2 = action.payload },
u1_13pdateMarket_size_id : (state, action) =>{ state.marketSize[1].marketSizeRecords[13].market_size_id = action.payload },


u1_14pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[1].marketSizeRecords[14].marketSizeRecordsID = action.payload },
u1_14pdateEgmed_consumption : (state, action) =>{ state.marketSize[1].marketSizeRecords[14].egmed_consumption = action.payload },
u1_14pdateTotal_consumption : (state, action) =>{ state.marketSize[1].marketSizeRecords[14].total_consumption = action.payload },
u1_14pdateCompetitor_id : (state, action) =>{ state.marketSize[1].marketSizeRecords[14].competitor_id = action.payload },
u1_14pdateItem_qty1 : (state, action) =>{ state.marketSize[1].marketSizeRecords[14].item_qty1 = action.payload },
u1_14pdateItem_status1 : (state, action) =>{ state.marketSize[1].marketSizeRecords[14].item_status1 = action.payload },
u1_14pdateItem_qty2 : (state, action) =>{ state.marketSize[1].marketSizeRecords[14].item_qty2 = action.payload },
u1_14pdateItem_status2 : (state, action) =>{ state.marketSize[1].marketSizeRecords[14].item_status2 = action.payload },
u1_14pdateMarket_size_id : (state, action) =>{ state.marketSize[1].marketSizeRecords[14].market_size_id = action.payload },


u1_15pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[1].marketSizeRecords[15].marketSizeRecordsID = action.payload },
u1_15pdateEgmed_consumption : (state, action) =>{ state.marketSize[1].marketSizeRecords[15].egmed_consumption = action.payload },
u1_15pdateTotal_consumption : (state, action) =>{ state.marketSize[1].marketSizeRecords[15].total_consumption = action.payload },
u1_15pdateCompetitor_id : (state, action) =>{ state.marketSize[1].marketSizeRecords[15].competitor_id = action.payload },
u1_15pdateItem_qty1 : (state, action) =>{ state.marketSize[1].marketSizeRecords[15].item_qty1 = action.payload },
u1_15pdateItem_status1 : (state, action) =>{ state.marketSize[1].marketSizeRecords[15].item_status1 = action.payload },
u1_15pdateItem_qty2 : (state, action) =>{ state.marketSize[1].marketSizeRecords[15].item_qty2 = action.payload },
u1_15pdateItem_status2 : (state, action) =>{ state.marketSize[1].marketSizeRecords[15].item_status2 = action.payload },
u1_15pdateMarket_size_id : (state, action) =>{ state.marketSize[1].marketSizeRecords[15].market_size_id = action.payload },


u1_16pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[1].marketSizeRecords[16].marketSizeRecordsID = action.payload },
u1_16pdateEgmed_consumption : (state, action) =>{ state.marketSize[1].marketSizeRecords[16].egmed_consumption = action.payload },
u1_16pdateTotal_consumption : (state, action) =>{ state.marketSize[1].marketSizeRecords[16].total_consumption = action.payload },
u1_16pdateCompetitor_id : (state, action) =>{ state.marketSize[1].marketSizeRecords[16].competitor_id = action.payload },
u1_16pdateItem_qty1 : (state, action) =>{ state.marketSize[1].marketSizeRecords[16].item_qty1 = action.payload },
u1_16pdateItem_status1 : (state, action) =>{ state.marketSize[1].marketSizeRecords[16].item_status1 = action.payload },
u1_16pdateItem_qty2 : (state, action) =>{ state.marketSize[1].marketSizeRecords[16].item_qty2 = action.payload },
u1_16pdateItem_status2 : (state, action) =>{ state.marketSize[1].marketSizeRecords[16].item_status2 = action.payload },
u1_16pdateMarket_size_id : (state, action) =>{ state.marketSize[1].marketSizeRecords[16].market_size_id = action.payload },




////////////2//0



u2_0pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[2].marketSizeRecords[0].marketSizeRecordsID = action.payload },
u2_0pdateEgmed_consumption : (state, action) =>{ state.marketSize[2].marketSizeRecords[0].egmed_consumption = action.payload },
u2_0pdateTotal_consumption : (state, action) =>{ state.marketSize[2].marketSizeRecords[0].total_consumption = action.payload },
u2_0pdateCompetitor_id : (state, action) =>{ state.marketSize[2].marketSizeRecords[0].competitor_id = action.payload },
u2_0pdateItem_qty1 : (state, action) =>{ state.marketSize[2].marketSizeRecords[0].item_qty1 = action.payload },
u2_0pdateItem_status1 : (state, action) =>{ state.marketSize[2].marketSizeRecords[0].item_status1 = action.payload },
u2_0pdateItem_qty2 : (state, action) =>{ state.marketSize[2].marketSizeRecords[0].item_qty2 = action.payload },
u2_0pdateItem_status2 : (state, action) =>{ state.marketSize[2].marketSizeRecords[0].item_status2 = action.payload },
u2_0pdateMarket_size_id : (state, action) =>{ state.marketSize[2].marketSizeRecords[0].market_size_id = action.payload },


u2_1pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[2].marketSizeRecords[1].marketSizeRecordsID = action.payload },
u2_1pdateEgmed_consumption : (state, action) =>{ state.marketSize[2].marketSizeRecords[1].egmed_consumption = action.payload },
u2_1pdateTotal_consumption : (state, action) =>{ state.marketSize[2].marketSizeRecords[1].total_consumption = action.payload },
u2_1pdateCompetitor_id : (state, action) =>{ state.marketSize[2].marketSizeRecords[1].competitor_id = action.payload },
u2_1pdateItem_qty1 : (state, action) =>{ state.marketSize[2].marketSizeRecords[1].item_qty1 = action.payload },
u2_1pdateItem_status1 : (state, action) =>{ state.marketSize[2].marketSizeRecords[1].item_status1 = action.payload },
u2_1pdateItem_qty2 : (state, action) =>{ state.marketSize[2].marketSizeRecords[1].item_qty2 = action.payload },
u2_1pdateItem_status2 : (state, action) =>{ state.marketSize[2].marketSizeRecords[1].item_status2 = action.payload },
u2_1pdateMarket_size_id : (state, action) =>{ state.marketSize[2].marketSizeRecords[1].market_size_id = action.payload },


u2_2pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[2].marketSizeRecords[2].marketSizeRecordsID = action.payload },
u2_2pdateEgmed_consumption : (state, action) =>{ state.marketSize[2].marketSizeRecords[2].egmed_consumption = action.payload },
u2_2pdateTotal_consumption : (state, action) =>{ state.marketSize[2].marketSizeRecords[2].total_consumption = action.payload },
u2_2pdateCompetitor_id : (state, action) =>{ state.marketSize[2].marketSizeRecords[2].competitor_id = action.payload },
u2_2pdateItem_qty1 : (state, action) =>{ state.marketSize[2].marketSizeRecords[2].item_qty1 = action.payload },
u2_2pdateItem_status1 : (state, action) =>{ state.marketSize[2].marketSizeRecords[2].item_status1 = action.payload },
u2_2pdateItem_qty2 : (state, action) =>{ state.marketSize[2].marketSizeRecords[2].item_qty2 = action.payload },
u2_2pdateItem_status2 : (state, action) =>{ state.marketSize[2].marketSizeRecords[2].item_status2 = action.payload },
u2_2pdateMarket_size_id : (state, action) =>{ state.marketSize[2].marketSizeRecords[2].market_size_id = action.payload },


u2_3pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[2].marketSizeRecords[3].marketSizeRecordsID = action.payload },
u2_3pdateEgmed_consumption : (state, action) =>{ state.marketSize[2].marketSizeRecords[3].egmed_consumption = action.payload },
u2_3pdateTotal_consumption : (state, action) =>{ state.marketSize[2].marketSizeRecords[3].total_consumption = action.payload },
u2_3pdateCompetitor_id : (state, action) =>{ state.marketSize[2].marketSizeRecords[3].competitor_id = action.payload },
u2_3pdateItem_qty1 : (state, action) =>{ state.marketSize[2].marketSizeRecords[3].item_qty1 = action.payload },
u2_3pdateItem_status1 : (state, action) =>{ state.marketSize[2].marketSizeRecords[3].item_status1 = action.payload },
u2_3pdateItem_qty2 : (state, action) =>{ state.marketSize[2].marketSizeRecords[3].item_qty2 = action.payload },
u2_3pdateItem_status2 : (state, action) =>{ state.marketSize[2].marketSizeRecords[3].item_status2 = action.payload },
u2_3pdateMarket_size_id : (state, action) =>{ state.marketSize[2].marketSizeRecords[3].market_size_id = action.payload },


u2_4pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[2].marketSizeRecords[4].marketSizeRecordsID = action.payload },
u2_4pdateEgmed_consumption : (state, action) =>{ state.marketSize[2].marketSizeRecords[4].egmed_consumption = action.payload },
u2_4pdateTotal_consumption : (state, action) =>{ state.marketSize[2].marketSizeRecords[4].total_consumption = action.payload },
u2_4pdateCompetitor_id : (state, action) =>{ state.marketSize[2].marketSizeRecords[4].competitor_id = action.payload },
u2_4pdateItem_qty1 : (state, action) =>{ state.marketSize[2].marketSizeRecords[4].item_qty1 = action.payload },
u2_4pdateItem_status1 : (state, action) =>{ state.marketSize[2].marketSizeRecords[4].item_status1 = action.payload },
u2_4pdateItem_qty2 : (state, action) =>{ state.marketSize[2].marketSizeRecords[4].item_qty2 = action.payload },
u2_4pdateItem_status2 : (state, action) =>{ state.marketSize[2].marketSizeRecords[4].item_status2 = action.payload },
u2_4pdateMarket_size_id : (state, action) =>{ state.marketSize[2].marketSizeRecords[4].market_size_id = action.payload },


u2_5pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[2].marketSizeRecords[5].marketSizeRecordsID = action.payload },
u2_5pdateEgmed_consumption : (state, action) =>{ state.marketSize[2].marketSizeRecords[5].egmed_consumption = action.payload },
u2_5pdateTotal_consumption : (state, action) =>{ state.marketSize[2].marketSizeRecords[5].total_consumption = action.payload },
u2_5pdateCompetitor_id : (state, action) =>{ state.marketSize[2].marketSizeRecords[5].competitor_id = action.payload },
u2_5pdateItem_qty1 : (state, action) =>{ state.marketSize[2].marketSizeRecords[5].item_qty1 = action.payload },
u2_5pdateItem_status1 : (state, action) =>{ state.marketSize[2].marketSizeRecords[5].item_status1 = action.payload },
u2_5pdateItem_qty2 : (state, action) =>{ state.marketSize[2].marketSizeRecords[5].item_qty2 = action.payload },
u2_5pdateItem_status2 : (state, action) =>{ state.marketSize[2].marketSizeRecords[5].item_status2 = action.payload },
u2_5pdateMarket_size_id : (state, action) =>{ state.marketSize[2].marketSizeRecords[5].market_size_id = action.payload },


u2_6pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[2].marketSizeRecords[6].marketSizeRecordsID = action.payload },
u2_6pdateEgmed_consumption : (state, action) =>{ state.marketSize[2].marketSizeRecords[6].egmed_consumption = action.payload },
u2_6pdateTotal_consumption : (state, action) =>{ state.marketSize[2].marketSizeRecords[6].total_consumption = action.payload },
u2_6pdateCompetitor_id : (state, action) =>{ state.marketSize[2].marketSizeRecords[6].competitor_id = action.payload },
u2_6pdateItem_qty1 : (state, action) =>{ state.marketSize[2].marketSizeRecords[6].item_qty1 = action.payload },
u2_6pdateItem_status1 : (state, action) =>{ state.marketSize[2].marketSizeRecords[6].item_status1 = action.payload },
u2_6pdateItem_qty2 : (state, action) =>{ state.marketSize[2].marketSizeRecords[6].item_qty2 = action.payload },
u2_6pdateItem_status2 : (state, action) =>{ state.marketSize[2].marketSizeRecords[6].item_status2 = action.payload },
u2_6pdateMarket_size_id : (state, action) =>{ state.marketSize[2].marketSizeRecords[6].market_size_id = action.payload },


u2_7pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[2].marketSizeRecords[7].marketSizeRecordsID = action.payload },
u2_7pdateEgmed_consumption : (state, action) =>{ state.marketSize[2].marketSizeRecords[7].egmed_consumption = action.payload },
u2_7pdateTotal_consumption : (state, action) =>{ state.marketSize[2].marketSizeRecords[7].total_consumption = action.payload },
u2_7pdateCompetitor_id : (state, action) =>{ state.marketSize[2].marketSizeRecords[7].competitor_id = action.payload },
u2_7pdateItem_qty1 : (state, action) =>{ state.marketSize[2].marketSizeRecords[7].item_qty1 = action.payload },
u2_7pdateItem_status1 : (state, action) =>{ state.marketSize[2].marketSizeRecords[7].item_status1 = action.payload },
u2_7pdateItem_qty2 : (state, action) =>{ state.marketSize[2].marketSizeRecords[7].item_qty2 = action.payload },
u2_7pdateItem_status2 : (state, action) =>{ state.marketSize[2].marketSizeRecords[7].item_status2 = action.payload },
u2_7pdateMarket_size_id : (state, action) =>{ state.marketSize[2].marketSizeRecords[7].market_size_id = action.payload },


u2_8pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[2].marketSizeRecords[8].marketSizeRecordsID = action.payload },
u2_8pdateEgmed_consumption : (state, action) =>{ state.marketSize[2].marketSizeRecords[8].egmed_consumption = action.payload },
u2_8pdateTotal_consumption : (state, action) =>{ state.marketSize[2].marketSizeRecords[8].total_consumption = action.payload },
u2_8pdateCompetitor_id : (state, action) =>{ state.marketSize[2].marketSizeRecords[8].competitor_id = action.payload },
u2_8pdateItem_qty1 : (state, action) =>{ state.marketSize[2].marketSizeRecords[8].item_qty1 = action.payload },
u2_8pdateItem_status1 : (state, action) =>{ state.marketSize[2].marketSizeRecords[8].item_status1 = action.payload },
u2_8pdateItem_qty2 : (state, action) =>{ state.marketSize[2].marketSizeRecords[8].item_qty2 = action.payload },
u2_8pdateItem_status2 : (state, action) =>{ state.marketSize[2].marketSizeRecords[8].item_status2 = action.payload },
u2_8pdateMarket_size_id : (state, action) =>{ state.marketSize[2].marketSizeRecords[8].market_size_id = action.payload },


u2_9pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[2].marketSizeRecords[9].marketSizeRecordsID = action.payload },
u2_9pdateEgmed_consumption : (state, action) =>{ state.marketSize[2].marketSizeRecords[9].egmed_consumption = action.payload },
u2_9pdateTotal_consumption : (state, action) =>{ state.marketSize[2].marketSizeRecords[9].total_consumption = action.payload },
u2_9pdateCompetitor_id : (state, action) =>{ state.marketSize[2].marketSizeRecords[9].competitor_id = action.payload },
u2_9pdateItem_qty1 : (state, action) =>{ state.marketSize[2].marketSizeRecords[9].item_qty1 = action.payload },
u2_9pdateItem_status1 : (state, action) =>{ state.marketSize[2].marketSizeRecords[9].item_status1 = action.payload },
u2_9pdateItem_qty2 : (state, action) =>{ state.marketSize[2].marketSizeRecords[9].item_qty2 = action.payload },
u2_9pdateItem_status2 : (state, action) =>{ state.marketSize[2].marketSizeRecords[9].item_status2 = action.payload },
u2_9pdateMarket_size_id : (state, action) =>{ state.marketSize[2].marketSizeRecords[9].market_size_id = action.payload },


u2_10pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[2].marketSizeRecords[10].marketSizeRecordsID = action.payload },
u2_10pdateEgmed_consumption : (state, action) =>{ state.marketSize[2].marketSizeRecords[10].egmed_consumption = action.payload },
u2_10pdateTotal_consumption : (state, action) =>{ state.marketSize[2].marketSizeRecords[10].total_consumption = action.payload },
u2_10pdateCompetitor_id : (state, action) =>{ state.marketSize[2].marketSizeRecords[10].competitor_id = action.payload },
u2_10pdateItem_qty1 : (state, action) =>{ state.marketSize[2].marketSizeRecords[10].item_qty1 = action.payload },
u2_10pdateItem_status1 : (state, action) =>{ state.marketSize[2].marketSizeRecords[10].item_status1 = action.payload },
u2_10pdateItem_qty2 : (state, action) =>{ state.marketSize[2].marketSizeRecords[10].item_qty2 = action.payload },
u2_10pdateItem_status2 : (state, action) =>{ state.marketSize[2].marketSizeRecords[10].item_status2 = action.payload },
u2_10pdateMarket_size_id : (state, action) =>{ state.marketSize[2].marketSizeRecords[10].market_size_id = action.payload },


u2_11pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[2].marketSizeRecords[11].marketSizeRecordsID = action.payload },
u2_11pdateEgmed_consumption : (state, action) =>{ state.marketSize[2].marketSizeRecords[11].egmed_consumption = action.payload },
u2_11pdateTotal_consumption : (state, action) =>{ state.marketSize[2].marketSizeRecords[11].total_consumption = action.payload },
u2_11pdateCompetitor_id : (state, action) =>{ state.marketSize[2].marketSizeRecords[11].competitor_id = action.payload },
u2_11pdateItem_qty1 : (state, action) =>{ state.marketSize[2].marketSizeRecords[11].item_qty1 = action.payload },
u2_11pdateItem_status1 : (state, action) =>{ state.marketSize[2].marketSizeRecords[11].item_status1 = action.payload },
u2_11pdateItem_qty2 : (state, action) =>{ state.marketSize[2].marketSizeRecords[11].item_qty2 = action.payload },
u2_11pdateItem_status2 : (state, action) =>{ state.marketSize[2].marketSizeRecords[11].item_status2 = action.payload },
u2_11pdateMarket_size_id : (state, action) =>{ state.marketSize[2].marketSizeRecords[11].market_size_id = action.payload },


u2_12pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[2].marketSizeRecords[12].marketSizeRecordsID = action.payload },
u2_12pdateEgmed_consumption : (state, action) =>{ state.marketSize[2].marketSizeRecords[12].egmed_consumption = action.payload },
u2_12pdateTotal_consumption : (state, action) =>{ state.marketSize[2].marketSizeRecords[12].total_consumption = action.payload },
u2_12pdateCompetitor_id : (state, action) =>{ state.marketSize[2].marketSizeRecords[12].competitor_id = action.payload },
u2_12pdateItem_qty1 : (state, action) =>{ state.marketSize[2].marketSizeRecords[12].item_qty1 = action.payload },
u2_12pdateItem_status1 : (state, action) =>{ state.marketSize[2].marketSizeRecords[12].item_status1 = action.payload },
u2_12pdateItem_qty2 : (state, action) =>{ state.marketSize[2].marketSizeRecords[12].item_qty2 = action.payload },
u2_12pdateItem_status2 : (state, action) =>{ state.marketSize[2].marketSizeRecords[12].item_status2 = action.payload },
u2_12pdateMarket_size_id : (state, action) =>{ state.marketSize[2].marketSizeRecords[12].market_size_id = action.payload },


u2_13pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[2].marketSizeRecords[13].marketSizeRecordsID = action.payload },
u2_13pdateEgmed_consumption : (state, action) =>{ state.marketSize[2].marketSizeRecords[13].egmed_consumption = action.payload },
u2_13pdateTotal_consumption : (state, action) =>{ state.marketSize[2].marketSizeRecords[13].total_consumption = action.payload },
u2_13pdateCompetitor_id : (state, action) =>{ state.marketSize[2].marketSizeRecords[13].competitor_id = action.payload },
u2_13pdateItem_qty1 : (state, action) =>{ state.marketSize[2].marketSizeRecords[13].item_qty1 = action.payload },
u2_13pdateItem_status1 : (state, action) =>{ state.marketSize[2].marketSizeRecords[13].item_status1 = action.payload },
u2_13pdateItem_qty2 : (state, action) =>{ state.marketSize[2].marketSizeRecords[13].item_qty2 = action.payload },
u2_13pdateItem_status2 : (state, action) =>{ state.marketSize[2].marketSizeRecords[13].item_status2 = action.payload },
u2_13pdateMarket_size_id : (state, action) =>{ state.marketSize[2].marketSizeRecords[13].market_size_id = action.payload },


u2_14pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[2].marketSizeRecords[14].marketSizeRecordsID = action.payload },
u2_14pdateEgmed_consumption : (state, action) =>{ state.marketSize[2].marketSizeRecords[14].egmed_consumption = action.payload },
u2_14pdateTotal_consumption : (state, action) =>{ state.marketSize[2].marketSizeRecords[14].total_consumption = action.payload },
u2_14pdateCompetitor_id : (state, action) =>{ state.marketSize[2].marketSizeRecords[14].competitor_id = action.payload },
u2_14pdateItem_qty1 : (state, action) =>{ state.marketSize[2].marketSizeRecords[14].item_qty1 = action.payload },
u2_14pdateItem_status1 : (state, action) =>{ state.marketSize[2].marketSizeRecords[14].item_status1 = action.payload },
u2_14pdateItem_qty2 : (state, action) =>{ state.marketSize[2].marketSizeRecords[14].item_qty2 = action.payload },
u2_14pdateItem_status2 : (state, action) =>{ state.marketSize[2].marketSizeRecords[14].item_status2 = action.payload },
u2_14pdateMarket_size_id : (state, action) =>{ state.marketSize[2].marketSizeRecords[14].market_size_id = action.payload },


u2_15pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[2].marketSizeRecords[15].marketSizeRecordsID = action.payload },
u2_15pdateEgmed_consumption : (state, action) =>{ state.marketSize[2].marketSizeRecords[15].egmed_consumption = action.payload },
u2_15pdateTotal_consumption : (state, action) =>{ state.marketSize[2].marketSizeRecords[15].total_consumption = action.payload },
u2_15pdateCompetitor_id : (state, action) =>{ state.marketSize[2].marketSizeRecords[15].competitor_id = action.payload },
u2_15pdateItem_qty1 : (state, action) =>{ state.marketSize[2].marketSizeRecords[15].item_qty1 = action.payload },
u2_15pdateItem_status1 : (state, action) =>{ state.marketSize[2].marketSizeRecords[15].item_status1 = action.payload },
u2_15pdateItem_qty2 : (state, action) =>{ state.marketSize[2].marketSizeRecords[15].item_qty2 = action.payload },
u2_15pdateItem_status2 : (state, action) =>{ state.marketSize[2].marketSizeRecords[15].item_status2 = action.payload },
u2_15pdateMarket_size_id : (state, action) =>{ state.marketSize[2].marketSizeRecords[15].market_size_id = action.payload },


u2_16pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[2].marketSizeRecords[16].marketSizeRecordsID = action.payload },
u2_16pdateEgmed_consumption : (state, action) =>{ state.marketSize[2].marketSizeRecords[16].egmed_consumption = action.payload },
u2_16pdateTotal_consumption : (state, action) =>{ state.marketSize[2].marketSizeRecords[16].total_consumption = action.payload },
u2_16pdateCompetitor_id : (state, action) =>{ state.marketSize[2].marketSizeRecords[16].competitor_id = action.payload },
u2_16pdateItem_qty1 : (state, action) =>{ state.marketSize[2].marketSizeRecords[16].item_qty1 = action.payload },
u2_16pdateItem_status1 : (state, action) =>{ state.marketSize[2].marketSizeRecords[16].item_status1 = action.payload },
u2_16pdateItem_qty2 : (state, action) =>{ state.marketSize[2].marketSizeRecords[16].item_qty2 = action.payload },
u2_16pdateItem_status2 : (state, action) =>{ state.marketSize[2].marketSizeRecords[16].item_status2 = action.payload },
u2_16pdateMarket_size_id : (state, action) =>{ state.marketSize[2].marketSizeRecords[16].market_size_id = action.payload },



/////////3////0


u3_0pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[3].marketSizeRecords[0].marketSizeRecordsID = action.payload },
u3_0pdateEgmed_consumption : (state, action) =>{ state.marketSize[3].marketSizeRecords[0].egmed_consumption = action.payload },
u3_0pdateTotal_consumption : (state, action) =>{ state.marketSize[3].marketSizeRecords[0].total_consumption = action.payload },
u3_0pdateCompetitor_id : (state, action) =>{ state.marketSize[3].marketSizeRecords[0].competitor_id = action.payload },
u3_0pdateItem_qty1 : (state, action) =>{ state.marketSize[3].marketSizeRecords[0].item_qty1 = action.payload },
u3_0pdateItem_status1 : (state, action) =>{ state.marketSize[3].marketSizeRecords[0].item_status1 = action.payload },
u3_0pdateItem_qty2 : (state, action) =>{ state.marketSize[3].marketSizeRecords[0].item_qty2 = action.payload },
u3_0pdateItem_status2 : (state, action) =>{ state.marketSize[3].marketSizeRecords[0].item_status2 = action.payload },
u3_0pdateMarket_size_id : (state, action) =>{ state.marketSize[3].marketSizeRecords[0].market_size_id = action.payload },


u3_1pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[3].marketSizeRecords[1].marketSizeRecordsID = action.payload },
u3_1pdateEgmed_consumption : (state, action) =>{ state.marketSize[3].marketSizeRecords[1].egmed_consumption = action.payload },
u3_1pdateTotal_consumption : (state, action) =>{ state.marketSize[3].marketSizeRecords[1].total_consumption = action.payload },
u3_1pdateCompetitor_id : (state, action) =>{ state.marketSize[3].marketSizeRecords[1].competitor_id = action.payload },
u3_1pdateItem_qty1 : (state, action) =>{ state.marketSize[3].marketSizeRecords[1].item_qty1 = action.payload },
u3_1pdateItem_status1 : (state, action) =>{ state.marketSize[3].marketSizeRecords[1].item_status1 = action.payload },
u3_1pdateItem_qty2 : (state, action) =>{ state.marketSize[3].marketSizeRecords[1].item_qty2 = action.payload },
u3_1pdateItem_status2 : (state, action) =>{ state.marketSize[3].marketSizeRecords[1].item_status2 = action.payload },
u3_1pdateMarket_size_id : (state, action) =>{ state.marketSize[3].marketSizeRecords[1].market_size_id = action.payload },


u3_2pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[3].marketSizeRecords[2].marketSizeRecordsID = action.payload },
u3_2pdateEgmed_consumption : (state, action) =>{ state.marketSize[3].marketSizeRecords[2].egmed_consumption = action.payload },
u3_2pdateTotal_consumption : (state, action) =>{ state.marketSize[3].marketSizeRecords[2].total_consumption = action.payload },
u3_2pdateCompetitor_id : (state, action) =>{ state.marketSize[3].marketSizeRecords[2].competitor_id = action.payload },
u3_2pdateItem_qty1 : (state, action) =>{ state.marketSize[3].marketSizeRecords[2].item_qty1 = action.payload },
u3_2pdateItem_status1 : (state, action) =>{ state.marketSize[3].marketSizeRecords[2].item_status1 = action.payload },
u3_2pdateItem_qty2 : (state, action) =>{ state.marketSize[3].marketSizeRecords[2].item_qty2 = action.payload },
u3_2pdateItem_status2 : (state, action) =>{ state.marketSize[3].marketSizeRecords[2].item_status2 = action.payload },
u3_2pdateMarket_size_id : (state, action) =>{ state.marketSize[3].marketSizeRecords[2].market_size_id = action.payload },


u3_3pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[3].marketSizeRecords[3].marketSizeRecordsID = action.payload },
u3_3pdateEgmed_consumption : (state, action) =>{ state.marketSize[3].marketSizeRecords[3].egmed_consumption = action.payload },
u3_3pdateTotal_consumption : (state, action) =>{ state.marketSize[3].marketSizeRecords[3].total_consumption = action.payload },
u3_3pdateCompetitor_id : (state, action) =>{ state.marketSize[3].marketSizeRecords[3].competitor_id = action.payload },
u3_3pdateItem_qty1 : (state, action) =>{ state.marketSize[3].marketSizeRecords[3].item_qty1 = action.payload },
u3_3pdateItem_status1 : (state, action) =>{ state.marketSize[3].marketSizeRecords[3].item_status1 = action.payload },
u3_3pdateItem_qty2 : (state, action) =>{ state.marketSize[3].marketSizeRecords[3].item_qty2 = action.payload },
u3_3pdateItem_status2 : (state, action) =>{ state.marketSize[3].marketSizeRecords[3].item_status2 = action.payload },
u3_3pdateMarket_size_id : (state, action) =>{ state.marketSize[3].marketSizeRecords[3].market_size_id = action.payload },


u3_4pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[3].marketSizeRecords[4].marketSizeRecordsID = action.payload },
u3_4pdateEgmed_consumption : (state, action) =>{ state.marketSize[3].marketSizeRecords[4].egmed_consumption = action.payload },
u3_4pdateTotal_consumption : (state, action) =>{ state.marketSize[3].marketSizeRecords[4].total_consumption = action.payload },
u3_4pdateCompetitor_id : (state, action) =>{ state.marketSize[3].marketSizeRecords[4].competitor_id = action.payload },
u3_4pdateItem_qty1 : (state, action) =>{ state.marketSize[3].marketSizeRecords[4].item_qty1 = action.payload },
u3_4pdateItem_status1 : (state, action) =>{ state.marketSize[3].marketSizeRecords[4].item_status1 = action.payload },
u3_4pdateItem_qty2 : (state, action) =>{ state.marketSize[3].marketSizeRecords[4].item_qty2 = action.payload },
u3_4pdateItem_status2 : (state, action) =>{ state.marketSize[3].marketSizeRecords[4].item_status2 = action.payload },
u3_4pdateMarket_size_id : (state, action) =>{ state.marketSize[3].marketSizeRecords[4].market_size_id = action.payload },


u3_5pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[3].marketSizeRecords[5].marketSizeRecordsID = action.payload },
u3_5pdateEgmed_consumption : (state, action) =>{ state.marketSize[3].marketSizeRecords[5].egmed_consumption = action.payload },
u3_5pdateTotal_consumption : (state, action) =>{ state.marketSize[3].marketSizeRecords[5].total_consumption = action.payload },
u3_5pdateCompetitor_id : (state, action) =>{ state.marketSize[3].marketSizeRecords[5].competitor_id = action.payload },
u3_5pdateItem_qty1 : (state, action) =>{ state.marketSize[3].marketSizeRecords[5].item_qty1 = action.payload },
u3_5pdateItem_status1 : (state, action) =>{ state.marketSize[3].marketSizeRecords[5].item_status1 = action.payload },
u3_5pdateItem_qty2 : (state, action) =>{ state.marketSize[3].marketSizeRecords[5].item_qty2 = action.payload },
u3_5pdateItem_status2 : (state, action) =>{ state.marketSize[3].marketSizeRecords[5].item_status2 = action.payload },
u3_5pdateMarket_size_id : (state, action) =>{ state.marketSize[3].marketSizeRecords[5].market_size_id = action.payload },


u3_6pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[3].marketSizeRecords[6].marketSizeRecordsID = action.payload },
u3_6pdateEgmed_consumption : (state, action) =>{ state.marketSize[3].marketSizeRecords[6].egmed_consumption = action.payload },
u3_6pdateTotal_consumption : (state, action) =>{ state.marketSize[3].marketSizeRecords[6].total_consumption = action.payload },
u3_6pdateCompetitor_id : (state, action) =>{ state.marketSize[3].marketSizeRecords[6].competitor_id = action.payload },
u3_6pdateItem_qty1 : (state, action) =>{ state.marketSize[3].marketSizeRecords[6].item_qty1 = action.payload },
u3_6pdateItem_status1 : (state, action) =>{ state.marketSize[3].marketSizeRecords[6].item_status1 = action.payload },
u3_6pdateItem_qty2 : (state, action) =>{ state.marketSize[3].marketSizeRecords[6].item_qty2 = action.payload },
u3_6pdateItem_status2 : (state, action) =>{ state.marketSize[3].marketSizeRecords[6].item_status2 = action.payload },
u3_6pdateMarket_size_id : (state, action) =>{ state.marketSize[3].marketSizeRecords[6].market_size_id = action.payload },


u3_7pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[3].marketSizeRecords[7].marketSizeRecordsID = action.payload },
u3_7pdateEgmed_consumption : (state, action) =>{ state.marketSize[3].marketSizeRecords[7].egmed_consumption = action.payload },
u3_7pdateTotal_consumption : (state, action) =>{ state.marketSize[3].marketSizeRecords[7].total_consumption = action.payload },
u3_7pdateCompetitor_id : (state, action) =>{ state.marketSize[3].marketSizeRecords[7].competitor_id = action.payload },
u3_7pdateItem_qty1 : (state, action) =>{ state.marketSize[3].marketSizeRecords[7].item_qty1 = action.payload },
u3_7pdateItem_status1 : (state, action) =>{ state.marketSize[3].marketSizeRecords[7].item_status1 = action.payload },
u3_7pdateItem_qty2 : (state, action) =>{ state.marketSize[3].marketSizeRecords[7].item_qty2 = action.payload },
u3_7pdateItem_status2 : (state, action) =>{ state.marketSize[3].marketSizeRecords[7].item_status2 = action.payload },
u3_7pdateMarket_size_id : (state, action) =>{ state.marketSize[3].marketSizeRecords[7].market_size_id = action.payload },


u3_8pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[3].marketSizeRecords[8].marketSizeRecordsID = action.payload },
u3_8pdateEgmed_consumption : (state, action) =>{ state.marketSize[3].marketSizeRecords[8].egmed_consumption = action.payload },
u3_8pdateTotal_consumption : (state, action) =>{ state.marketSize[3].marketSizeRecords[8].total_consumption = action.payload },
u3_8pdateCompetitor_id : (state, action) =>{ state.marketSize[3].marketSizeRecords[8].competitor_id = action.payload },
u3_8pdateItem_qty1 : (state, action) =>{ state.marketSize[3].marketSizeRecords[8].item_qty1 = action.payload },
u3_8pdateItem_status1 : (state, action) =>{ state.marketSize[3].marketSizeRecords[8].item_status1 = action.payload },
u3_8pdateItem_qty2 : (state, action) =>{ state.marketSize[3].marketSizeRecords[8].item_qty2 = action.payload },
u3_8pdateItem_status2 : (state, action) =>{ state.marketSize[3].marketSizeRecords[8].item_status2 = action.payload },
u3_8pdateMarket_size_id : (state, action) =>{ state.marketSize[3].marketSizeRecords[8].market_size_id = action.payload },


u3_9pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[3].marketSizeRecords[9].marketSizeRecordsID = action.payload },
u3_9pdateEgmed_consumption : (state, action) =>{ state.marketSize[3].marketSizeRecords[9].egmed_consumption = action.payload },
u3_9pdateTotal_consumption : (state, action) =>{ state.marketSize[3].marketSizeRecords[9].total_consumption = action.payload },
u3_9pdateCompetitor_id : (state, action) =>{ state.marketSize[3].marketSizeRecords[9].competitor_id = action.payload },
u3_9pdateItem_qty1 : (state, action) =>{ state.marketSize[3].marketSizeRecords[9].item_qty1 = action.payload },
u3_9pdateItem_status1 : (state, action) =>{ state.marketSize[3].marketSizeRecords[9].item_status1 = action.payload },
u3_9pdateItem_qty2 : (state, action) =>{ state.marketSize[3].marketSizeRecords[9].item_qty2 = action.payload },
u3_9pdateItem_status2 : (state, action) =>{ state.marketSize[3].marketSizeRecords[9].item_status2 = action.payload },
u3_9pdateMarket_size_id : (state, action) =>{ state.marketSize[3].marketSizeRecords[9].market_size_id = action.payload },


u3_10pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[3].marketSizeRecords[10].marketSizeRecordsID = action.payload },
u3_10pdateEgmed_consumption : (state, action) =>{ state.marketSize[3].marketSizeRecords[10].egmed_consumption = action.payload },
u3_10pdateTotal_consumption : (state, action) =>{ state.marketSize[3].marketSizeRecords[10].total_consumption = action.payload },
u3_10pdateCompetitor_id : (state, action) =>{ state.marketSize[3].marketSizeRecords[10].competitor_id = action.payload },
u3_10pdateItem_qty1 : (state, action) =>{ state.marketSize[3].marketSizeRecords[10].item_qty1 = action.payload },
u3_10pdateItem_status1 : (state, action) =>{ state.marketSize[3].marketSizeRecords[10].item_status1 = action.payload },
u3_10pdateItem_qty2 : (state, action) =>{ state.marketSize[3].marketSizeRecords[10].item_qty2 = action.payload },
u3_10pdateItem_status2 : (state, action) =>{ state.marketSize[3].marketSizeRecords[10].item_status2 = action.payload },
u3_10pdateMarket_size_id : (state, action) =>{ state.marketSize[3].marketSizeRecords[10].market_size_id = action.payload },


u3_11pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[3].marketSizeRecords[11].marketSizeRecordsID = action.payload },
u3_11pdateEgmed_consumption : (state, action) =>{ state.marketSize[3].marketSizeRecords[11].egmed_consumption = action.payload },
u3_11pdateTotal_consumption : (state, action) =>{ state.marketSize[3].marketSizeRecords[11].total_consumption = action.payload },
u3_11pdateCompetitor_id : (state, action) =>{ state.marketSize[3].marketSizeRecords[11].competitor_id = action.payload },
u3_11pdateItem_qty1 : (state, action) =>{ state.marketSize[3].marketSizeRecords[11].item_qty1 = action.payload },
u3_11pdateItem_status1 : (state, action) =>{ state.marketSize[3].marketSizeRecords[11].item_status1 = action.payload },
u3_11pdateItem_qty2 : (state, action) =>{ state.marketSize[3].marketSizeRecords[11].item_qty2 = action.payload },
u3_11pdateItem_status2 : (state, action) =>{ state.marketSize[3].marketSizeRecords[11].item_status2 = action.payload },
u3_11pdateMarket_size_id : (state, action) =>{ state.marketSize[3].marketSizeRecords[11].market_size_id = action.payload },


u3_12pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[3].marketSizeRecords[12].marketSizeRecordsID = action.payload },
u3_12pdateEgmed_consumption : (state, action) =>{ state.marketSize[3].marketSizeRecords[12].egmed_consumption = action.payload },
u3_12pdateTotal_consumption : (state, action) =>{ state.marketSize[3].marketSizeRecords[12].total_consumption = action.payload },
u3_12pdateCompetitor_id : (state, action) =>{ state.marketSize[3].marketSizeRecords[12].competitor_id = action.payload },
u3_12pdateItem_qty1 : (state, action) =>{ state.marketSize[3].marketSizeRecords[12].item_qty1 = action.payload },
u3_12pdateItem_status1 : (state, action) =>{ state.marketSize[3].marketSizeRecords[12].item_status1 = action.payload },
u3_12pdateItem_qty2 : (state, action) =>{ state.marketSize[3].marketSizeRecords[12].item_qty2 = action.payload },
u3_12pdateItem_status2 : (state, action) =>{ state.marketSize[3].marketSizeRecords[12].item_status2 = action.payload },
u3_12pdateMarket_size_id : (state, action) =>{ state.marketSize[3].marketSizeRecords[12].market_size_id = action.payload },


u3_13pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[3].marketSizeRecords[13].marketSizeRecordsID = action.payload },
u3_13pdateEgmed_consumption : (state, action) =>{ state.marketSize[3].marketSizeRecords[13].egmed_consumption = action.payload },
u3_13pdateTotal_consumption : (state, action) =>{ state.marketSize[3].marketSizeRecords[13].total_consumption = action.payload },
u3_13pdateCompetitor_id : (state, action) =>{ state.marketSize[3].marketSizeRecords[13].competitor_id = action.payload },
u3_13pdateItem_qty1 : (state, action) =>{ state.marketSize[3].marketSizeRecords[13].item_qty1 = action.payload },
u3_13pdateItem_status1 : (state, action) =>{ state.marketSize[3].marketSizeRecords[13].item_status1 = action.payload },
u3_13pdateItem_qty2 : (state, action) =>{ state.marketSize[3].marketSizeRecords[13].item_qty2 = action.payload },
u3_13pdateItem_status2 : (state, action) =>{ state.marketSize[3].marketSizeRecords[13].item_status2 = action.payload },
u3_13pdateMarket_size_id : (state, action) =>{ state.marketSize[3].marketSizeRecords[13].market_size_id = action.payload },


u3_14pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[3].marketSizeRecords[14].marketSizeRecordsID = action.payload },
u3_14pdateEgmed_consumption : (state, action) =>{ state.marketSize[3].marketSizeRecords[14].egmed_consumption = action.payload },
u3_14pdateTotal_consumption : (state, action) =>{ state.marketSize[3].marketSizeRecords[14].total_consumption = action.payload },
u3_14pdateCompetitor_id : (state, action) =>{ state.marketSize[3].marketSizeRecords[14].competitor_id = action.payload },
u3_14pdateItem_qty1 : (state, action) =>{ state.marketSize[3].marketSizeRecords[14].item_qty1 = action.payload },
u3_14pdateItem_status1 : (state, action) =>{ state.marketSize[3].marketSizeRecords[14].item_status1 = action.payload },
u3_14pdateItem_qty2 : (state, action) =>{ state.marketSize[3].marketSizeRecords[14].item_qty2 = action.payload },
u3_14pdateItem_status2 : (state, action) =>{ state.marketSize[3].marketSizeRecords[14].item_status2 = action.payload },
u3_14pdateMarket_size_id : (state, action) =>{ state.marketSize[3].marketSizeRecords[14].market_size_id = action.payload },


u3_15pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[3].marketSizeRecords[15].marketSizeRecordsID = action.payload },
u3_15pdateEgmed_consumption : (state, action) =>{ state.marketSize[3].marketSizeRecords[15].egmed_consumption = action.payload },
u3_15pdateTotal_consumption : (state, action) =>{ state.marketSize[3].marketSizeRecords[15].total_consumption = action.payload },
u3_15pdateCompetitor_id : (state, action) =>{ state.marketSize[3].marketSizeRecords[15].competitor_id = action.payload },
u3_15pdateItem_qty1 : (state, action) =>{ state.marketSize[3].marketSizeRecords[15].item_qty1 = action.payload },
u3_15pdateItem_status1 : (state, action) =>{ state.marketSize[3].marketSizeRecords[15].item_status1 = action.payload },
u3_15pdateItem_qty2 : (state, action) =>{ state.marketSize[3].marketSizeRecords[15].item_qty2 = action.payload },
u3_15pdateItem_status2 : (state, action) =>{ state.marketSize[3].marketSizeRecords[15].item_status2 = action.payload },
u3_15pdateMarket_size_id : (state, action) =>{ state.marketSize[3].marketSizeRecords[15].market_size_id = action.payload },


u3_16pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[3].marketSizeRecords[16].marketSizeRecordsID = action.payload },
u3_16pdateEgmed_consumption : (state, action) =>{ state.marketSize[3].marketSizeRecords[16].egmed_consumption = action.payload },
u3_16pdateTotal_consumption : (state, action) =>{ state.marketSize[3].marketSizeRecords[16].total_consumption = action.payload },
u3_16pdateCompetitor_id : (state, action) =>{ state.marketSize[3].marketSizeRecords[16].competitor_id = action.payload },
u3_16pdateItem_qty1 : (state, action) =>{ state.marketSize[3].marketSizeRecords[16].item_qty1 = action.payload },
u3_16pdateItem_status1 : (state, action) =>{ state.marketSize[3].marketSizeRecords[16].item_status1 = action.payload },
u3_16pdateItem_qty2 : (state, action) =>{ state.marketSize[3].marketSizeRecords[16].item_qty2 = action.payload },
u3_16pdateItem_status2 : (state, action) =>{ state.marketSize[3].marketSizeRecords[16].item_status2 = action.payload },
u3_16pdateMarket_size_id : (state, action) =>{ state.marketSize[3].marketSizeRecords[16].market_size_id = action.payload },


////////4//0


u4_0pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[4].marketSizeRecords[0].marketSizeRecordsID = action.payload },
u4_0pdateEgmed_consumption : (state, action) =>{ state.marketSize[4].marketSizeRecords[0].egmed_consumption = action.payload },
u4_0pdateTotal_consumption : (state, action) =>{ state.marketSize[4].marketSizeRecords[0].total_consumption = action.payload },
u4_0pdateCompetitor_id : (state, action) =>{ state.marketSize[4].marketSizeRecords[0].competitor_id = action.payload },
u4_0pdateItem_qty1 : (state, action) =>{ state.marketSize[4].marketSizeRecords[0].item_qty1 = action.payload },
u4_0pdateItem_status1 : (state, action) =>{ state.marketSize[4].marketSizeRecords[0].item_status1 = action.payload },
u4_0pdateItem_qty2 : (state, action) =>{ state.marketSize[4].marketSizeRecords[0].item_qty2 = action.payload },
u4_0pdateItem_status2 : (state, action) =>{ state.marketSize[4].marketSizeRecords[0].item_status2 = action.payload },
u4_0pdateMarket_size_id : (state, action) =>{ state.marketSize[4].marketSizeRecords[0].market_size_id = action.payload },


u4_1pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[4].marketSizeRecords[1].marketSizeRecordsID = action.payload },
u4_1pdateEgmed_consumption : (state, action) =>{ state.marketSize[4].marketSizeRecords[1].egmed_consumption = action.payload },
u4_1pdateTotal_consumption : (state, action) =>{ state.marketSize[4].marketSizeRecords[1].total_consumption = action.payload },
u4_1pdateCompetitor_id : (state, action) =>{ state.marketSize[4].marketSizeRecords[1].competitor_id = action.payload },
u4_1pdateItem_qty1 : (state, action) =>{ state.marketSize[4].marketSizeRecords[1].item_qty1 = action.payload },
u4_1pdateItem_status1 : (state, action) =>{ state.marketSize[4].marketSizeRecords[1].item_status1 = action.payload },
u4_1pdateItem_qty2 : (state, action) =>{ state.marketSize[4].marketSizeRecords[1].item_qty2 = action.payload },
u4_1pdateItem_status2 : (state, action) =>{ state.marketSize[4].marketSizeRecords[1].item_status2 = action.payload },
u4_1pdateMarket_size_id : (state, action) =>{ state.marketSize[4].marketSizeRecords[1].market_size_id = action.payload },


u4_2pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[4].marketSizeRecords[2].marketSizeRecordsID = action.payload },
u4_2pdateEgmed_consumption : (state, action) =>{ state.marketSize[4].marketSizeRecords[2].egmed_consumption = action.payload },
u4_2pdateTotal_consumption : (state, action) =>{ state.marketSize[4].marketSizeRecords[2].total_consumption = action.payload },
u4_2pdateCompetitor_id : (state, action) =>{ state.marketSize[4].marketSizeRecords[2].competitor_id = action.payload },
u4_2pdateItem_qty1 : (state, action) =>{ state.marketSize[4].marketSizeRecords[2].item_qty1 = action.payload },
u4_2pdateItem_status1 : (state, action) =>{ state.marketSize[4].marketSizeRecords[2].item_status1 = action.payload },
u4_2pdateItem_qty2 : (state, action) =>{ state.marketSize[4].marketSizeRecords[2].item_qty2 = action.payload },
u4_2pdateItem_status2 : (state, action) =>{ state.marketSize[4].marketSizeRecords[2].item_status2 = action.payload },
u4_2pdateMarket_size_id : (state, action) =>{ state.marketSize[4].marketSizeRecords[2].market_size_id = action.payload },


u4_3pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[4].marketSizeRecords[3].marketSizeRecordsID = action.payload },
u4_3pdateEgmed_consumption : (state, action) =>{ state.marketSize[4].marketSizeRecords[3].egmed_consumption = action.payload },
u4_3pdateTotal_consumption : (state, action) =>{ state.marketSize[4].marketSizeRecords[3].total_consumption = action.payload },
u4_3pdateCompetitor_id : (state, action) =>{ state.marketSize[4].marketSizeRecords[3].competitor_id = action.payload },
u4_3pdateItem_qty1 : (state, action) =>{ state.marketSize[4].marketSizeRecords[3].item_qty1 = action.payload },
u4_3pdateItem_status1 : (state, action) =>{ state.marketSize[4].marketSizeRecords[3].item_status1 = action.payload },
u4_3pdateItem_qty2 : (state, action) =>{ state.marketSize[4].marketSizeRecords[3].item_qty2 = action.payload },
u4_3pdateItem_status2 : (state, action) =>{ state.marketSize[4].marketSizeRecords[3].item_status2 = action.payload },
u4_3pdateMarket_size_id : (state, action) =>{ state.marketSize[4].marketSizeRecords[3].market_size_id = action.payload },


u4_4pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[4].marketSizeRecords[4].marketSizeRecordsID = action.payload },
u4_4pdateEgmed_consumption : (state, action) =>{ state.marketSize[4].marketSizeRecords[4].egmed_consumption = action.payload },
u4_4pdateTotal_consumption : (state, action) =>{ state.marketSize[4].marketSizeRecords[4].total_consumption = action.payload },
u4_4pdateCompetitor_id : (state, action) =>{ state.marketSize[4].marketSizeRecords[4].competitor_id = action.payload },
u4_4pdateItem_qty1 : (state, action) =>{ state.marketSize[4].marketSizeRecords[4].item_qty1 = action.payload },
u4_4pdateItem_status1 : (state, action) =>{ state.marketSize[4].marketSizeRecords[4].item_status1 = action.payload },
u4_4pdateItem_qty2 : (state, action) =>{ state.marketSize[4].marketSizeRecords[4].item_qty2 = action.payload },
u4_4pdateItem_status2 : (state, action) =>{ state.marketSize[4].marketSizeRecords[4].item_status2 = action.payload },
u4_4pdateMarket_size_id : (state, action) =>{ state.marketSize[4].marketSizeRecords[4].market_size_id = action.payload },


u4_5pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[4].marketSizeRecords[5].marketSizeRecordsID = action.payload },
u4_5pdateEgmed_consumption : (state, action) =>{ state.marketSize[4].marketSizeRecords[5].egmed_consumption = action.payload },
u4_5pdateTotal_consumption : (state, action) =>{ state.marketSize[4].marketSizeRecords[5].total_consumption = action.payload },
u4_5pdateCompetitor_id : (state, action) =>{ state.marketSize[4].marketSizeRecords[5].competitor_id = action.payload },
u4_5pdateItem_qty1 : (state, action) =>{ state.marketSize[4].marketSizeRecords[5].item_qty1 = action.payload },
u4_5pdateItem_status1 : (state, action) =>{ state.marketSize[4].marketSizeRecords[5].item_status1 = action.payload },
u4_5pdateItem_qty2 : (state, action) =>{ state.marketSize[4].marketSizeRecords[5].item_qty2 = action.payload },
u4_5pdateItem_status2 : (state, action) =>{ state.marketSize[4].marketSizeRecords[5].item_status2 = action.payload },
u4_5pdateMarket_size_id : (state, action) =>{ state.marketSize[4].marketSizeRecords[5].market_size_id = action.payload },


u4_6pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[4].marketSizeRecords[6].marketSizeRecordsID = action.payload },
u4_6pdateEgmed_consumption : (state, action) =>{ state.marketSize[4].marketSizeRecords[6].egmed_consumption = action.payload },
u4_6pdateTotal_consumption : (state, action) =>{ state.marketSize[4].marketSizeRecords[6].total_consumption = action.payload },
u4_6pdateCompetitor_id : (state, action) =>{ state.marketSize[4].marketSizeRecords[6].competitor_id = action.payload },
u4_6pdateItem_qty1 : (state, action) =>{ state.marketSize[4].marketSizeRecords[6].item_qty1 = action.payload },
u4_6pdateItem_status1 : (state, action) =>{ state.marketSize[4].marketSizeRecords[6].item_status1 = action.payload },
u4_6pdateItem_qty2 : (state, action) =>{ state.marketSize[4].marketSizeRecords[6].item_qty2 = action.payload },
u4_6pdateItem_status2 : (state, action) =>{ state.marketSize[4].marketSizeRecords[6].item_status2 = action.payload },
u4_6pdateMarket_size_id : (state, action) =>{ state.marketSize[4].marketSizeRecords[6].market_size_id = action.payload },


u4_7pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[4].marketSizeRecords[7].marketSizeRecordsID = action.payload },
u4_7pdateEgmed_consumption : (state, action) =>{ state.marketSize[4].marketSizeRecords[7].egmed_consumption = action.payload },
u4_7pdateTotal_consumption : (state, action) =>{ state.marketSize[4].marketSizeRecords[7].total_consumption = action.payload },
u4_7pdateCompetitor_id : (state, action) =>{ state.marketSize[4].marketSizeRecords[7].competitor_id = action.payload },
u4_7pdateItem_qty1 : (state, action) =>{ state.marketSize[4].marketSizeRecords[7].item_qty1 = action.payload },
u4_7pdateItem_status1 : (state, action) =>{ state.marketSize[4].marketSizeRecords[7].item_status1 = action.payload },
u4_7pdateItem_qty2 : (state, action) =>{ state.marketSize[4].marketSizeRecords[7].item_qty2 = action.payload },
u4_7pdateItem_status2 : (state, action) =>{ state.marketSize[4].marketSizeRecords[7].item_status2 = action.payload },
u4_7pdateMarket_size_id : (state, action) =>{ state.marketSize[4].marketSizeRecords[7].market_size_id = action.payload },


u4_8pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[4].marketSizeRecords[8].marketSizeRecordsID = action.payload },
u4_8pdateEgmed_consumption : (state, action) =>{ state.marketSize[4].marketSizeRecords[8].egmed_consumption = action.payload },
u4_8pdateTotal_consumption : (state, action) =>{ state.marketSize[4].marketSizeRecords[8].total_consumption = action.payload },
u4_8pdateCompetitor_id : (state, action) =>{ state.marketSize[4].marketSizeRecords[8].competitor_id = action.payload },
u4_8pdateItem_qty1 : (state, action) =>{ state.marketSize[4].marketSizeRecords[8].item_qty1 = action.payload },
u4_8pdateItem_status1 : (state, action) =>{ state.marketSize[4].marketSizeRecords[8].item_status1 = action.payload },
u4_8pdateItem_qty2 : (state, action) =>{ state.marketSize[4].marketSizeRecords[8].item_qty2 = action.payload },
u4_8pdateItem_status2 : (state, action) =>{ state.marketSize[4].marketSizeRecords[8].item_status2 = action.payload },
u4_8pdateMarket_size_id : (state, action) =>{ state.marketSize[4].marketSizeRecords[8].market_size_id = action.payload },


u4_9pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[4].marketSizeRecords[9].marketSizeRecordsID = action.payload },
u4_9pdateEgmed_consumption : (state, action) =>{ state.marketSize[4].marketSizeRecords[9].egmed_consumption = action.payload },
u4_9pdateTotal_consumption : (state, action) =>{ state.marketSize[4].marketSizeRecords[9].total_consumption = action.payload },
u4_9pdateCompetitor_id : (state, action) =>{ state.marketSize[4].marketSizeRecords[9].competitor_id = action.payload },
u4_9pdateItem_qty1 : (state, action) =>{ state.marketSize[4].marketSizeRecords[9].item_qty1 = action.payload },
u4_9pdateItem_status1 : (state, action) =>{ state.marketSize[4].marketSizeRecords[9].item_status1 = action.payload },
u4_9pdateItem_qty2 : (state, action) =>{ state.marketSize[4].marketSizeRecords[9].item_qty2 = action.payload },
u4_9pdateItem_status2 : (state, action) =>{ state.marketSize[4].marketSizeRecords[9].item_status2 = action.payload },
u4_9pdateMarket_size_id : (state, action) =>{ state.marketSize[4].marketSizeRecords[9].market_size_id = action.payload },


u4_10pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[4].marketSizeRecords[10].marketSizeRecordsID = action.payload },
u4_10pdateEgmed_consumption : (state, action) =>{ state.marketSize[4].marketSizeRecords[10].egmed_consumption = action.payload },
u4_10pdateTotal_consumption : (state, action) =>{ state.marketSize[4].marketSizeRecords[10].total_consumption = action.payload },
u4_10pdateCompetitor_id : (state, action) =>{ state.marketSize[4].marketSizeRecords[10].competitor_id = action.payload },
u4_10pdateItem_qty1 : (state, action) =>{ state.marketSize[4].marketSizeRecords[10].item_qty1 = action.payload },
u4_10pdateItem_status1 : (state, action) =>{ state.marketSize[4].marketSizeRecords[10].item_status1 = action.payload },
u4_10pdateItem_qty2 : (state, action) =>{ state.marketSize[4].marketSizeRecords[10].item_qty2 = action.payload },
u4_10pdateItem_status2 : (state, action) =>{ state.marketSize[4].marketSizeRecords[10].item_status2 = action.payload },
u4_10pdateMarket_size_id : (state, action) =>{ state.marketSize[4].marketSizeRecords[10].market_size_id = action.payload },


u4_11pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[4].marketSizeRecords[11].marketSizeRecordsID = action.payload },
u4_11pdateEgmed_consumption : (state, action) =>{ state.marketSize[4].marketSizeRecords[11].egmed_consumption = action.payload },
u4_11pdateTotal_consumption : (state, action) =>{ state.marketSize[4].marketSizeRecords[11].total_consumption = action.payload },
u4_11pdateCompetitor_id : (state, action) =>{ state.marketSize[4].marketSizeRecords[11].competitor_id = action.payload },
u4_11pdateItem_qty1 : (state, action) =>{ state.marketSize[4].marketSizeRecords[11].item_qty1 = action.payload },
u4_11pdateItem_status1 : (state, action) =>{ state.marketSize[4].marketSizeRecords[11].item_status1 = action.payload },
u4_11pdateItem_qty2 : (state, action) =>{ state.marketSize[4].marketSizeRecords[11].item_qty2 = action.payload },
u4_11pdateItem_status2 : (state, action) =>{ state.marketSize[4].marketSizeRecords[11].item_status2 = action.payload },
u4_11pdateMarket_size_id : (state, action) =>{ state.marketSize[4].marketSizeRecords[11].market_size_id = action.payload },


u4_12pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[4].marketSizeRecords[12].marketSizeRecordsID = action.payload },
u4_12pdateEgmed_consumption : (state, action) =>{ state.marketSize[4].marketSizeRecords[12].egmed_consumption = action.payload },
u4_12pdateTotal_consumption : (state, action) =>{ state.marketSize[4].marketSizeRecords[12].total_consumption = action.payload },
u4_12pdateCompetitor_id : (state, action) =>{ state.marketSize[4].marketSizeRecords[12].competitor_id = action.payload },
u4_12pdateItem_qty1 : (state, action) =>{ state.marketSize[4].marketSizeRecords[12].item_qty1 = action.payload },
u4_12pdateItem_status1 : (state, action) =>{ state.marketSize[4].marketSizeRecords[12].item_status1 = action.payload },
u4_12pdateItem_qty2 : (state, action) =>{ state.marketSize[4].marketSizeRecords[12].item_qty2 = action.payload },
u4_12pdateItem_status2 : (state, action) =>{ state.marketSize[4].marketSizeRecords[12].item_status2 = action.payload },
u4_12pdateMarket_size_id : (state, action) =>{ state.marketSize[4].marketSizeRecords[12].market_size_id = action.payload },


u4_13pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[4].marketSizeRecords[13].marketSizeRecordsID = action.payload },
u4_13pdateEgmed_consumption : (state, action) =>{ state.marketSize[4].marketSizeRecords[13].egmed_consumption = action.payload },
u4_13pdateTotal_consumption : (state, action) =>{ state.marketSize[4].marketSizeRecords[13].total_consumption = action.payload },
u4_13pdateCompetitor_id : (state, action) =>{ state.marketSize[4].marketSizeRecords[13].competitor_id = action.payload },
u4_13pdateItem_qty1 : (state, action) =>{ state.marketSize[4].marketSizeRecords[13].item_qty1 = action.payload },
u4_13pdateItem_status1 : (state, action) =>{ state.marketSize[4].marketSizeRecords[13].item_status1 = action.payload },
u4_13pdateItem_qty2 : (state, action) =>{ state.marketSize[4].marketSizeRecords[13].item_qty2 = action.payload },
u4_13pdateItem_status2 : (state, action) =>{ state.marketSize[4].marketSizeRecords[13].item_status2 = action.payload },
u4_13pdateMarket_size_id : (state, action) =>{ state.marketSize[4].marketSizeRecords[13].market_size_id = action.payload },


u4_14pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[4].marketSizeRecords[14].marketSizeRecordsID = action.payload },
u4_14pdateEgmed_consumption : (state, action) =>{ state.marketSize[4].marketSizeRecords[14].egmed_consumption = action.payload },
u4_14pdateTotal_consumption : (state, action) =>{ state.marketSize[4].marketSizeRecords[14].total_consumption = action.payload },
u4_14pdateCompetitor_id : (state, action) =>{ state.marketSize[4].marketSizeRecords[14].competitor_id = action.payload },
u4_14pdateItem_qty1 : (state, action) =>{ state.marketSize[4].marketSizeRecords[14].item_qty1 = action.payload },
u4_14pdateItem_status1 : (state, action) =>{ state.marketSize[4].marketSizeRecords[14].item_status1 = action.payload },
u4_14pdateItem_qty2 : (state, action) =>{ state.marketSize[4].marketSizeRecords[14].item_qty2 = action.payload },
u4_14pdateItem_status2 : (state, action) =>{ state.marketSize[4].marketSizeRecords[14].item_status2 = action.payload },
u4_14pdateMarket_size_id : (state, action) =>{ state.marketSize[4].marketSizeRecords[14].market_size_id = action.payload },


u4_15pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[4].marketSizeRecords[15].marketSizeRecordsID = action.payload },
u4_15pdateEgmed_consumption : (state, action) =>{ state.marketSize[4].marketSizeRecords[15].egmed_consumption = action.payload },
u4_15pdateTotal_consumption : (state, action) =>{ state.marketSize[4].marketSizeRecords[15].total_consumption = action.payload },
u4_15pdateCompetitor_id : (state, action) =>{ state.marketSize[4].marketSizeRecords[15].competitor_id = action.payload },
u4_15pdateItem_qty1 : (state, action) =>{ state.marketSize[4].marketSizeRecords[15].item_qty1 = action.payload },
u4_15pdateItem_status1 : (state, action) =>{ state.marketSize[4].marketSizeRecords[15].item_status1 = action.payload },
u4_15pdateItem_qty2 : (state, action) =>{ state.marketSize[4].marketSizeRecords[15].item_qty2 = action.payload },
u4_15pdateItem_status2 : (state, action) =>{ state.marketSize[4].marketSizeRecords[15].item_status2 = action.payload },
u4_15pdateMarket_size_id : (state, action) =>{ state.marketSize[4].marketSizeRecords[15].market_size_id = action.payload },


u4_16pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[4].marketSizeRecords[16].marketSizeRecordsID = action.payload },
u4_16pdateEgmed_consumption : (state, action) =>{ state.marketSize[4].marketSizeRecords[16].egmed_consumption = action.payload },
u4_16pdateTotal_consumption : (state, action) =>{ state.marketSize[4].marketSizeRecords[16].total_consumption = action.payload },
u4_16pdateCompetitor_id : (state, action) =>{ state.marketSize[4].marketSizeRecords[16].competitor_id = action.payload },
u4_16pdateItem_qty1 : (state, action) =>{ state.marketSize[4].marketSizeRecords[16].item_qty1 = action.payload },
u4_16pdateItem_status1 : (state, action) =>{ state.marketSize[4].marketSizeRecords[16].item_status1 = action.payload },
u4_16pdateItem_qty2 : (state, action) =>{ state.marketSize[4].marketSizeRecords[16].item_qty2 = action.payload },
u4_16pdateItem_status2 : (state, action) =>{ state.marketSize[4].marketSizeRecords[16].item_status2 = action.payload },
u4_16pdateMarket_size_id : (state, action) =>{ state.marketSize[4].marketSizeRecords[16].market_size_id = action.payload },


/////5///


u5_0pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[5].marketSizeRecords[0].marketSizeRecordsID = action.payload },
u5_0pdateEgmed_consumption : (state, action) =>{ state.marketSize[5].marketSizeRecords[0].egmed_consumption = action.payload },
u5_0pdateTotal_consumption : (state, action) =>{ state.marketSize[5].marketSizeRecords[0].total_consumption = action.payload },
u5_0pdateCompetitor_id : (state, action) =>{ state.marketSize[5].marketSizeRecords[0].competitor_id = action.payload },
u5_0pdateItem_qty1 : (state, action) =>{ state.marketSize[5].marketSizeRecords[0].item_qty1 = action.payload },
u5_0pdateItem_status1 : (state, action) =>{ state.marketSize[5].marketSizeRecords[0].item_status1 = action.payload },
u5_0pdateItem_qty2 : (state, action) =>{ state.marketSize[5].marketSizeRecords[0].item_qty2 = action.payload },
u5_0pdateItem_status2 : (state, action) =>{ state.marketSize[5].marketSizeRecords[0].item_status2 = action.payload },
u5_0pdateMarket_size_id : (state, action) =>{ state.marketSize[5].marketSizeRecords[0].market_size_id = action.payload },


u5_1pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[5].marketSizeRecords[1].marketSizeRecordsID = action.payload },
u5_1pdateEgmed_consumption : (state, action) =>{ state.marketSize[5].marketSizeRecords[1].egmed_consumption = action.payload },
u5_1pdateTotal_consumption : (state, action) =>{ state.marketSize[5].marketSizeRecords[1].total_consumption = action.payload },
u5_1pdateCompetitor_id : (state, action) =>{ state.marketSize[5].marketSizeRecords[1].competitor_id = action.payload },
u5_1pdateItem_qty1 : (state, action) =>{ state.marketSize[5].marketSizeRecords[1].item_qty1 = action.payload },
u5_1pdateItem_status1 : (state, action) =>{ state.marketSize[5].marketSizeRecords[1].item_status1 = action.payload },
u5_1pdateItem_qty2 : (state, action) =>{ state.marketSize[5].marketSizeRecords[1].item_qty2 = action.payload },
u5_1pdateItem_status2 : (state, action) =>{ state.marketSize[5].marketSizeRecords[1].item_status2 = action.payload },
u5_1pdateMarket_size_id : (state, action) =>{ state.marketSize[5].marketSizeRecords[1].market_size_id = action.payload },


u5_2pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[5].marketSizeRecords[2].marketSizeRecordsID = action.payload },
u5_2pdateEgmed_consumption : (state, action) =>{ state.marketSize[5].marketSizeRecords[2].egmed_consumption = action.payload },
u5_2pdateTotal_consumption : (state, action) =>{ state.marketSize[5].marketSizeRecords[2].total_consumption = action.payload },
u5_2pdateCompetitor_id : (state, action) =>{ state.marketSize[5].marketSizeRecords[2].competitor_id = action.payload },
u5_2pdateItem_qty1 : (state, action) =>{ state.marketSize[5].marketSizeRecords[2].item_qty1 = action.payload },
u5_2pdateItem_status1 : (state, action) =>{ state.marketSize[5].marketSizeRecords[2].item_status1 = action.payload },
u5_2pdateItem_qty2 : (state, action) =>{ state.marketSize[5].marketSizeRecords[2].item_qty2 = action.payload },
u5_2pdateItem_status2 : (state, action) =>{ state.marketSize[5].marketSizeRecords[2].item_status2 = action.payload },
u5_2pdateMarket_size_id : (state, action) =>{ state.marketSize[5].marketSizeRecords[2].market_size_id = action.payload },


u5_3pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[5].marketSizeRecords[3].marketSizeRecordsID = action.payload },
u5_3pdateEgmed_consumption : (state, action) =>{ state.marketSize[5].marketSizeRecords[3].egmed_consumption = action.payload },
u5_3pdateTotal_consumption : (state, action) =>{ state.marketSize[5].marketSizeRecords[3].total_consumption = action.payload },
u5_3pdateCompetitor_id : (state, action) =>{ state.marketSize[5].marketSizeRecords[3].competitor_id = action.payload },
u5_3pdateItem_qty1 : (state, action) =>{ state.marketSize[5].marketSizeRecords[3].item_qty1 = action.payload },
u5_3pdateItem_status1 : (state, action) =>{ state.marketSize[5].marketSizeRecords[3].item_status1 = action.payload },
u5_3pdateItem_qty2 : (state, action) =>{ state.marketSize[5].marketSizeRecords[3].item_qty2 = action.payload },
u5_3pdateItem_status2 : (state, action) =>{ state.marketSize[5].marketSizeRecords[3].item_status2 = action.payload },
u5_3pdateMarket_size_id : (state, action) =>{ state.marketSize[5].marketSizeRecords[3].market_size_id = action.payload },



u5_4pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[5].marketSizeRecords[4].marketSizeRecordsID = action.payload },
u5_4pdateEgmed_consumption : (state, action) =>{ state.marketSize[5].marketSizeRecords[4].egmed_consumption = action.payload },
u5_4pdateTotal_consumption : (state, action) =>{ state.marketSize[5].marketSizeRecords[4].total_consumption = action.payload },
u5_4pdateCompetitor_id : (state, action) =>{ state.marketSize[5].marketSizeRecords[4].competitor_id = action.payload },
u5_4pdateItem_qty1 : (state, action) =>{ state.marketSize[5].marketSizeRecords[4].item_qty1 = action.payload },
u5_4pdateItem_status1 : (state, action) =>{ state.marketSize[5].marketSizeRecords[4].item_status1 = action.payload },
u5_4pdateItem_qty2 : (state, action) =>{ state.marketSize[5].marketSizeRecords[4].item_qty2 = action.payload },
u5_4pdateItem_status2 : (state, action) =>{ state.marketSize[5].marketSizeRecords[4].item_status2 = action.payload },
u5_4pdateMarket_size_id : (state, action) =>{ state.marketSize[5].marketSizeRecords[4].market_size_id = action.payload },


u5_5pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[5].marketSizeRecords[5].marketSizeRecordsID = action.payload },
u5_5pdateEgmed_consumption : (state, action) =>{ state.marketSize[5].marketSizeRecords[5].egmed_consumption = action.payload },
u5_5pdateTotal_consumption : (state, action) =>{ state.marketSize[5].marketSizeRecords[5].total_consumption = action.payload },
u5_5pdateCompetitor_id : (state, action) =>{ state.marketSize[5].marketSizeRecords[5].competitor_id = action.payload },
u5_5pdateItem_qty1 : (state, action) =>{ state.marketSize[5].marketSizeRecords[5].item_qty1 = action.payload },
u5_5pdateItem_status1 : (state, action) =>{ state.marketSize[5].marketSizeRecords[5].item_status1 = action.payload },
u5_5pdateItem_qty2 : (state, action) =>{ state.marketSize[5].marketSizeRecords[5].item_qty2 = action.payload },
u5_5pdateItem_status2 : (state, action) =>{ state.marketSize[5].marketSizeRecords[5].item_status2 = action.payload },
u5_5pdateMarket_size_id : (state, action) =>{ state.marketSize[5].marketSizeRecords[5].market_size_id = action.payload },


u5_6pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[5].marketSizeRecords[6].marketSizeRecordsID = action.payload },
u5_6pdateEgmed_consumption : (state, action) =>{ state.marketSize[5].marketSizeRecords[6].egmed_consumption = action.payload },
u5_6pdateTotal_consumption : (state, action) =>{ state.marketSize[5].marketSizeRecords[6].total_consumption = action.payload },
u5_6pdateCompetitor_id : (state, action) =>{ state.marketSize[5].marketSizeRecords[6].competitor_id = action.payload },
u5_6pdateItem_qty1 : (state, action) =>{ state.marketSize[5].marketSizeRecords[6].item_qty1 = action.payload },
u5_6pdateItem_status1 : (state, action) =>{ state.marketSize[5].marketSizeRecords[6].item_status1 = action.payload },
u5_6pdateItem_qty2 : (state, action) =>{ state.marketSize[5].marketSizeRecords[6].item_qty2 = action.payload },
u5_6pdateItem_status2 : (state, action) =>{ state.marketSize[5].marketSizeRecords[6].item_status2 = action.payload },
u5_6pdateMarket_size_id : (state, action) =>{ state.marketSize[5].marketSizeRecords[6].market_size_id = action.payload },


u5_7pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[5].marketSizeRecords[7].marketSizeRecordsID = action.payload },
u5_7pdateEgmed_consumption : (state, action) =>{ state.marketSize[5].marketSizeRecords[7].egmed_consumption = action.payload },
u5_7pdateTotal_consumption : (state, action) =>{ state.marketSize[5].marketSizeRecords[7].total_consumption = action.payload },
u5_7pdateCompetitor_id : (state, action) =>{ state.marketSize[5].marketSizeRecords[7].competitor_id = action.payload },
u5_7pdateItem_qty1 : (state, action) =>{ state.marketSize[5].marketSizeRecords[7].item_qty1 = action.payload },
u5_7pdateItem_status1 : (state, action) =>{ state.marketSize[5].marketSizeRecords[7].item_status1 = action.payload },
u5_7pdateItem_qty2 : (state, action) =>{ state.marketSize[5].marketSizeRecords[7].item_qty2 = action.payload },
u5_7pdateItem_status2 : (state, action) =>{ state.marketSize[5].marketSizeRecords[7].item_status2 = action.payload },
u5_7pdateMarket_size_id : (state, action) =>{ state.marketSize[5].marketSizeRecords[7].market_size_id = action.payload },


u5_8pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[5].marketSizeRecords[8].marketSizeRecordsID = action.payload },
u5_8pdateEgmed_consumption : (state, action) =>{ state.marketSize[5].marketSizeRecords[8].egmed_consumption = action.payload },
u5_8pdateTotal_consumption : (state, action) =>{ state.marketSize[5].marketSizeRecords[8].total_consumption = action.payload },
u5_8pdateCompetitor_id : (state, action) =>{ state.marketSize[5].marketSizeRecords[8].competitor_id = action.payload },
u5_8pdateItem_qty1 : (state, action) =>{ state.marketSize[5].marketSizeRecords[8].item_qty1 = action.payload },
u5_8pdateItem_status1 : (state, action) =>{ state.marketSize[5].marketSizeRecords[8].item_status1 = action.payload },
u5_8pdateItem_qty2 : (state, action) =>{ state.marketSize[5].marketSizeRecords[8].item_qty2 = action.payload },
u5_8pdateItem_status2 : (state, action) =>{ state.marketSize[5].marketSizeRecords[8].item_status2 = action.payload },
u5_8pdateMarket_size_id : (state, action) =>{ state.marketSize[5].marketSizeRecords[8].market_size_id = action.payload },


u5_9pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[5].marketSizeRecords[9].marketSizeRecordsID = action.payload },
u5_9pdateEgmed_consumption : (state, action) =>{ state.marketSize[5].marketSizeRecords[9].egmed_consumption = action.payload },
u5_9pdateTotal_consumption : (state, action) =>{ state.marketSize[5].marketSizeRecords[9].total_consumption = action.payload },
u5_9pdateCompetitor_id : (state, action) =>{ state.marketSize[5].marketSizeRecords[9].competitor_id = action.payload },
u5_9pdateItem_qty1 : (state, action) =>{ state.marketSize[5].marketSizeRecords[9].item_qty1 = action.payload },
u5_9pdateItem_status1 : (state, action) =>{ state.marketSize[5].marketSizeRecords[9].item_status1 = action.payload },
u5_9pdateItem_qty2 : (state, action) =>{ state.marketSize[5].marketSizeRecords[9].item_qty2 = action.payload },
u5_9pdateItem_status2 : (state, action) =>{ state.marketSize[5].marketSizeRecords[9].item_status2 = action.payload },
u5_9pdateMarket_size_id : (state, action) =>{ state.marketSize[5].marketSizeRecords[9].market_size_id = action.payload },


u5_10pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[5].marketSizeRecords[10].marketSizeRecordsID = action.payload },
u5_10pdateEgmed_consumption : (state, action) =>{ state.marketSize[5].marketSizeRecords[10].egmed_consumption = action.payload },
u5_10pdateTotal_consumption : (state, action) =>{ state.marketSize[5].marketSizeRecords[10].total_consumption = action.payload },
u5_10pdateCompetitor_id : (state, action) =>{ state.marketSize[5].marketSizeRecords[10].competitor_id = action.payload },
u5_10pdateItem_qty1 : (state, action) =>{ state.marketSize[5].marketSizeRecords[10].item_qty1 = action.payload },
u5_10pdateItem_status1 : (state, action) =>{ state.marketSize[5].marketSizeRecords[10].item_status1 = action.payload },
u5_10pdateItem_qty2 : (state, action) =>{ state.marketSize[5].marketSizeRecords[10].item_qty2 = action.payload },
u5_10pdateItem_status2 : (state, action) =>{ state.marketSize[5].marketSizeRecords[10].item_status2 = action.payload },
u5_10pdateMarket_size_id : (state, action) =>{ state.marketSize[5].marketSizeRecords[10].market_size_id = action.payload },


u5_11pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[5].marketSizeRecords[11].marketSizeRecordsID = action.payload },
u5_11pdateEgmed_consumption : (state, action) =>{ state.marketSize[5].marketSizeRecords[11].egmed_consumption = action.payload },
u5_11pdateTotal_consumption : (state, action) =>{ state.marketSize[5].marketSizeRecords[11].total_consumption = action.payload },
u5_11pdateCompetitor_id : (state, action) =>{ state.marketSize[5].marketSizeRecords[11].competitor_id = action.payload },
u5_11pdateItem_qty1 : (state, action) =>{ state.marketSize[5].marketSizeRecords[11].item_qty1 = action.payload },
u5_11pdateItem_status1 : (state, action) =>{ state.marketSize[5].marketSizeRecords[11].item_status1 = action.payload },
u5_11pdateItem_qty2 : (state, action) =>{ state.marketSize[5].marketSizeRecords[11].item_qty2 = action.payload },
u5_11pdateItem_status2 : (state, action) =>{ state.marketSize[5].marketSizeRecords[11].item_status2 = action.payload },
u5_11pdateMarket_size_id : (state, action) =>{ state.marketSize[5].marketSizeRecords[11].market_size_id = action.payload },


u5_12pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[5].marketSizeRecords[12].marketSizeRecordsID = action.payload },
u5_12pdateEgmed_consumption : (state, action) =>{ state.marketSize[5].marketSizeRecords[12].egmed_consumption = action.payload },
u5_12pdateTotal_consumption : (state, action) =>{ state.marketSize[5].marketSizeRecords[12].total_consumption = action.payload },
u5_12pdateCompetitor_id : (state, action) =>{ state.marketSize[5].marketSizeRecords[12].competitor_id = action.payload },
u5_12pdateItem_qty1 : (state, action) =>{ state.marketSize[5].marketSizeRecords[12].item_qty1 = action.payload },
u5_12pdateItem_status1 : (state, action) =>{ state.marketSize[5].marketSizeRecords[12].item_status1 = action.payload },
u5_12pdateItem_qty2 : (state, action) =>{ state.marketSize[5].marketSizeRecords[12].item_qty2 = action.payload },
u5_12pdateItem_status2 : (state, action) =>{ state.marketSize[5].marketSizeRecords[12].item_status2 = action.payload },
u5_12pdateMarket_size_id : (state, action) =>{ state.marketSize[5].marketSizeRecords[12].market_size_id = action.payload },


u5_13pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[5].marketSizeRecords[13].marketSizeRecordsID = action.payload },
u5_13pdateEgmed_consumption : (state, action) =>{ state.marketSize[5].marketSizeRecords[13].egmed_consumption = action.payload },
u5_13pdateTotal_consumption : (state, action) =>{ state.marketSize[5].marketSizeRecords[13].total_consumption = action.payload },
u5_13pdateCompetitor_id : (state, action) =>{ state.marketSize[5].marketSizeRecords[13].competitor_id = action.payload },
u5_13pdateItem_qty1 : (state, action) =>{ state.marketSize[5].marketSizeRecords[13].item_qty1 = action.payload },
u5_13pdateItem_status1 : (state, action) =>{ state.marketSize[5].marketSizeRecords[13].item_status1 = action.payload },
u5_13pdateItem_qty2 : (state, action) =>{ state.marketSize[5].marketSizeRecords[13].item_qty2 = action.payload },
u5_13pdateItem_status2 : (state, action) =>{ state.marketSize[5].marketSizeRecords[13].item_status2 = action.payload },
u5_13pdateMarket_size_id : (state, action) =>{ state.marketSize[5].marketSizeRecords[13].market_size_id = action.payload },


u5_14pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[5].marketSizeRecords[14].marketSizeRecordsID = action.payload },
u5_14pdateEgmed_consumption : (state, action) =>{ state.marketSize[5].marketSizeRecords[14].egmed_consumption = action.payload },
u5_14pdateTotal_consumption : (state, action) =>{ state.marketSize[5].marketSizeRecords[14].total_consumption = action.payload },
u5_14pdateCompetitor_id : (state, action) =>{ state.marketSize[5].marketSizeRecords[14].competitor_id = action.payload },
u5_14pdateItem_qty1 : (state, action) =>{ state.marketSize[5].marketSizeRecords[14].item_qty1 = action.payload },
u5_14pdateItem_status1 : (state, action) =>{ state.marketSize[5].marketSizeRecords[14].item_status1 = action.payload },
u5_14pdateItem_qty2 : (state, action) =>{ state.marketSize[5].marketSizeRecords[14].item_qty2 = action.payload },
u5_14pdateItem_status2 : (state, action) =>{ state.marketSize[5].marketSizeRecords[14].item_status2 = action.payload },
u5_14pdateMarket_size_id : (state, action) =>{ state.marketSize[5].marketSizeRecords[14].market_size_id = action.payload },


u5_15pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[5].marketSizeRecords[15].marketSizeRecordsID = action.payload },
u5_15pdateEgmed_consumption : (state, action) =>{ state.marketSize[5].marketSizeRecords[15].egmed_consumption = action.payload },
u5_15pdateTotal_consumption : (state, action) =>{ state.marketSize[5].marketSizeRecords[15].total_consumption = action.payload },
u5_15pdateCompetitor_id : (state, action) =>{ state.marketSize[5].marketSizeRecords[15].competitor_id = action.payload },
u5_15pdateItem_qty1 : (state, action) =>{ state.marketSize[5].marketSizeRecords[15].item_qty1 = action.payload },
u5_15pdateItem_status1 : (state, action) =>{ state.marketSize[5].marketSizeRecords[15].item_status1 = action.payload },
u5_15pdateItem_qty2 : (state, action) =>{ state.marketSize[5].marketSizeRecords[15].item_qty2 = action.payload },
u5_15pdateItem_status2 : (state, action) =>{ state.marketSize[5].marketSizeRecords[15].item_status2 = action.payload },
u5_15pdateMarket_size_id : (state, action) =>{ state.marketSize[5].marketSizeRecords[15].market_size_id = action.payload },


u5_16pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[5].marketSizeRecords[16].marketSizeRecordsID = action.payload },
u5_16pdateEgmed_consumption : (state, action) =>{ state.marketSize[5].marketSizeRecords[16].egmed_consumption = action.payload },
u5_16pdateTotal_consumption : (state, action) =>{ state.marketSize[5].marketSizeRecords[16].total_consumption = action.payload },
u5_16pdateCompetitor_id : (state, action) =>{ state.marketSize[5].marketSizeRecords[16].competitor_id = action.payload },
u5_16pdateItem_qty1 : (state, action) =>{ state.marketSize[5].marketSizeRecords[16].item_qty1 = action.payload },
u5_16pdateItem_status1 : (state, action) =>{ state.marketSize[5].marketSizeRecords[16].item_status1 = action.payload },
u5_16pdateItem_qty2 : (state, action) =>{ state.marketSize[5].marketSizeRecords[16].item_qty2 = action.payload },
u5_16pdateItem_status2 : (state, action) =>{ state.marketSize[5].marketSizeRecords[16].item_status2 = action.payload },
u5_16pdateMarket_size_id : (state, action) =>{ state.marketSize[5].marketSizeRecords[16].market_size_id = action.payload },


////////6////0//

u6_0pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[6].marketSizeRecords[0].marketSizeRecordsID = action.payload },
u6_0pdateEgmed_consumption : (state, action) =>{ state.marketSize[6].marketSizeRecords[0].egmed_consumption = action.payload },
u6_0pdateTotal_consumption : (state, action) =>{ state.marketSize[6].marketSizeRecords[0].total_consumption = action.payload },
u6_0pdateCompetitor_id : (state, action) =>{ state.marketSize[6].marketSizeRecords[0].competitor_id = action.payload },
u6_0pdateItem_qty1 : (state, action) =>{ state.marketSize[6].marketSizeRecords[0].item_qty1 = action.payload },
u6_0pdateItem_status1 : (state, action) =>{ state.marketSize[6].marketSizeRecords[0].item_status1 = action.payload },
u6_0pdateItem_qty2 : (state, action) =>{ state.marketSize[6].marketSizeRecords[0].item_qty2 = action.payload },
u6_0pdateItem_status2 : (state, action) =>{ state.marketSize[6].marketSizeRecords[0].item_status2 = action.payload },
u6_0pdateMarket_size_id : (state, action) =>{ state.marketSize[6].marketSizeRecords[0].market_size_id = action.payload },


u6_1pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[6].marketSizeRecords[1].marketSizeRecordsID = action.payload },
u6_1pdateEgmed_consumption : (state, action) =>{ state.marketSize[6].marketSizeRecords[1].egmed_consumption = action.payload },
u6_1pdateTotal_consumption : (state, action) =>{ state.marketSize[6].marketSizeRecords[1].total_consumption = action.payload },
u6_1pdateCompetitor_id : (state, action) =>{ state.marketSize[6].marketSizeRecords[1].competitor_id = action.payload },
u6_1pdateItem_qty1 : (state, action) =>{ state.marketSize[6].marketSizeRecords[1].item_qty1 = action.payload },
u6_1pdateItem_status1 : (state, action) =>{ state.marketSize[6].marketSizeRecords[1].item_status1 = action.payload },
u6_1pdateItem_qty2 : (state, action) =>{ state.marketSize[6].marketSizeRecords[1].item_qty2 = action.payload },
u6_1pdateItem_status2 : (state, action) =>{ state.marketSize[6].marketSizeRecords[1].item_status2 = action.payload },
u6_1pdateMarket_size_id : (state, action) =>{ state.marketSize[6].marketSizeRecords[1].market_size_id = action.payload },


u6_2pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[6].marketSizeRecords[2].marketSizeRecordsID = action.payload },
u6_2pdateEgmed_consumption : (state, action) =>{ state.marketSize[6].marketSizeRecords[2].egmed_consumption = action.payload },
u6_2pdateTotal_consumption : (state, action) =>{ state.marketSize[6].marketSizeRecords[2].total_consumption = action.payload },
u6_2pdateCompetitor_id : (state, action) =>{ state.marketSize[6].marketSizeRecords[2].competitor_id = action.payload },
u6_2pdateItem_qty1 : (state, action) =>{ state.marketSize[6].marketSizeRecords[2].item_qty1 = action.payload },
u6_2pdateItem_status1 : (state, action) =>{ state.marketSize[6].marketSizeRecords[2].item_status1 = action.payload },
u6_2pdateItem_qty2 : (state, action) =>{ state.marketSize[6].marketSizeRecords[2].item_qty2 = action.payload },
u6_2pdateItem_status2 : (state, action) =>{ state.marketSize[6].marketSizeRecords[2].item_status2 = action.payload },
u6_2pdateMarket_size_id : (state, action) =>{ state.marketSize[6].marketSizeRecords[2].market_size_id = action.payload },


u6_3pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[6].marketSizeRecords[3].marketSizeRecordsID = action.payload },
u6_3pdateEgmed_consumption : (state, action) =>{ state.marketSize[6].marketSizeRecords[3].egmed_consumption = action.payload },
u6_3pdateTotal_consumption : (state, action) =>{ state.marketSize[6].marketSizeRecords[3].total_consumption = action.payload },
u6_3pdateCompetitor_id : (state, action) =>{ state.marketSize[6].marketSizeRecords[3].competitor_id = action.payload },
u6_3pdateItem_qty1 : (state, action) =>{ state.marketSize[6].marketSizeRecords[3].item_qty1 = action.payload },
u6_3pdateItem_status1 : (state, action) =>{ state.marketSize[6].marketSizeRecords[3].item_status1 = action.payload },
u6_3pdateItem_qty2 : (state, action) =>{ state.marketSize[6].marketSizeRecords[3].item_qty2 = action.payload },
u6_3pdateItem_status2 : (state, action) =>{ state.marketSize[6].marketSizeRecords[3].item_status2 = action.payload },
u6_3pdateMarket_size_id : (state, action) =>{ state.marketSize[6].marketSizeRecords[3].market_size_id = action.payload },



u6_4pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[6].marketSizeRecords[4].marketSizeRecordsID = action.payload },
u6_4pdateEgmed_consumption : (state, action) =>{ state.marketSize[6].marketSizeRecords[4].egmed_consumption = action.payload },
u6_4pdateTotal_consumption : (state, action) =>{ state.marketSize[6].marketSizeRecords[4].total_consumption = action.payload },
u6_4pdateCompetitor_id : (state, action) =>{ state.marketSize[6].marketSizeRecords[4].competitor_id = action.payload },
u6_4pdateItem_qty1 : (state, action) =>{ state.marketSize[6].marketSizeRecords[4].item_qty1 = action.payload },
u6_4pdateItem_status1 : (state, action) =>{ state.marketSize[6].marketSizeRecords[4].item_status1 = action.payload },
u6_4pdateItem_qty2 : (state, action) =>{ state.marketSize[6].marketSizeRecords[4].item_qty2 = action.payload },
u6_4pdateItem_status2 : (state, action) =>{ state.marketSize[6].marketSizeRecords[4].item_status2 = action.payload },
u6_4pdateMarket_size_id : (state, action) =>{ state.marketSize[6].marketSizeRecords[4].market_size_id = action.payload },


u6_5pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[6].marketSizeRecords[5].marketSizeRecordsID = action.payload },
u6_5pdateEgmed_consumption : (state, action) =>{ state.marketSize[6].marketSizeRecords[5].egmed_consumption = action.payload },
u6_5pdateTotal_consumption : (state, action) =>{ state.marketSize[6].marketSizeRecords[5].total_consumption = action.payload },
u6_5pdateCompetitor_id : (state, action) =>{ state.marketSize[6].marketSizeRecords[5].competitor_id = action.payload },
u6_5pdateItem_qty1 : (state, action) =>{ state.marketSize[6].marketSizeRecords[5].item_qty1 = action.payload },
u6_5pdateItem_status1 : (state, action) =>{ state.marketSize[6].marketSizeRecords[5].item_status1 = action.payload },
u6_5pdateItem_qty2 : (state, action) =>{ state.marketSize[6].marketSizeRecords[5].item_qty2 = action.payload },
u6_5pdateItem_status2 : (state, action) =>{ state.marketSize[6].marketSizeRecords[5].item_status2 = action.payload },
u6_5pdateMarket_size_id : (state, action) =>{ state.marketSize[6].marketSizeRecords[5].market_size_id = action.payload },


u6_6pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[6].marketSizeRecords[6].marketSizeRecordsID = action.payload },
u6_6pdateEgmed_consumption : (state, action) =>{ state.marketSize[6].marketSizeRecords[6].egmed_consumption = action.payload },
u6_6pdateTotal_consumption : (state, action) =>{ state.marketSize[6].marketSizeRecords[6].total_consumption = action.payload },
u6_6pdateCompetitor_id : (state, action) =>{ state.marketSize[6].marketSizeRecords[6].competitor_id = action.payload },
u6_6pdateItem_qty1 : (state, action) =>{ state.marketSize[6].marketSizeRecords[6].item_qty1 = action.payload },
u6_6pdateItem_status1 : (state, action) =>{ state.marketSize[6].marketSizeRecords[6].item_status1 = action.payload },
u6_6pdateItem_qty2 : (state, action) =>{ state.marketSize[6].marketSizeRecords[6].item_qty2 = action.payload },
u6_6pdateItem_status2 : (state, action) =>{ state.marketSize[6].marketSizeRecords[6].item_status2 = action.payload },
u6_6pdateMarket_size_id : (state, action) =>{ state.marketSize[6].marketSizeRecords[6].market_size_id = action.payload },


u6_7pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[6].marketSizeRecords[7].marketSizeRecordsID = action.payload },
u6_7pdateEgmed_consumption : (state, action) =>{ state.marketSize[6].marketSizeRecords[7].egmed_consumption = action.payload },
u6_7pdateTotal_consumption : (state, action) =>{ state.marketSize[6].marketSizeRecords[7].total_consumption = action.payload },
u6_7pdateCompetitor_id : (state, action) =>{ state.marketSize[6].marketSizeRecords[7].competitor_id = action.payload },
u6_7pdateItem_qty1 : (state, action) =>{ state.marketSize[6].marketSizeRecords[7].item_qty1 = action.payload },
u6_7pdateItem_status1 : (state, action) =>{ state.marketSize[6].marketSizeRecords[7].item_status1 = action.payload },
u6_7pdateItem_qty2 : (state, action) =>{ state.marketSize[6].marketSizeRecords[7].item_qty2 = action.payload },
u6_7pdateItem_status2 : (state, action) =>{ state.marketSize[6].marketSizeRecords[7].item_status2 = action.payload },
u6_7pdateMarket_size_id : (state, action) =>{ state.marketSize[6].marketSizeRecords[7].market_size_id = action.payload },


u6_8pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[6].marketSizeRecords[8].marketSizeRecordsID = action.payload },
u6_8pdateEgmed_consumption : (state, action) =>{ state.marketSize[6].marketSizeRecords[8].egmed_consumption = action.payload },
u6_8pdateTotal_consumption : (state, action) =>{ state.marketSize[6].marketSizeRecords[8].total_consumption = action.payload },
u6_8pdateCompetitor_id : (state, action) =>{ state.marketSize[6].marketSizeRecords[8].competitor_id = action.payload },
u6_8pdateItem_qty1 : (state, action) =>{ state.marketSize[6].marketSizeRecords[8].item_qty1 = action.payload },
u6_8pdateItem_status1 : (state, action) =>{ state.marketSize[6].marketSizeRecords[8].item_status1 = action.payload },
u6_8pdateItem_qty2 : (state, action) =>{ state.marketSize[6].marketSizeRecords[8].item_qty2 = action.payload },
u6_8pdateItem_status2 : (state, action) =>{ state.marketSize[6].marketSizeRecords[8].item_status2 = action.payload },
u6_8pdateMarket_size_id : (state, action) =>{ state.marketSize[6].marketSizeRecords[8].market_size_id = action.payload },


u6_9pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[6].marketSizeRecords[9].marketSizeRecordsID = action.payload },
u6_9pdateEgmed_consumption : (state, action) =>{ state.marketSize[6].marketSizeRecords[9].egmed_consumption = action.payload },
u6_9pdateTotal_consumption : (state, action) =>{ state.marketSize[6].marketSizeRecords[9].total_consumption = action.payload },
u6_9pdateCompetitor_id : (state, action) =>{ state.marketSize[6].marketSizeRecords[9].competitor_id = action.payload },
u6_9pdateItem_qty1 : (state, action) =>{ state.marketSize[6].marketSizeRecords[9].item_qty1 = action.payload },
u6_9pdateItem_status1 : (state, action) =>{ state.marketSize[6].marketSizeRecords[9].item_status1 = action.payload },
u6_9pdateItem_qty2 : (state, action) =>{ state.marketSize[6].marketSizeRecords[9].item_qty2 = action.payload },
u6_9pdateItem_status2 : (state, action) =>{ state.marketSize[6].marketSizeRecords[9].item_status2 = action.payload },
u6_9pdateMarket_size_id : (state, action) =>{ state.marketSize[6].marketSizeRecords[9].market_size_id = action.payload },


u6_10pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[6].marketSizeRecords[10].marketSizeRecordsID = action.payload },
u6_10pdateEgmed_consumption : (state, action) =>{ state.marketSize[6].marketSizeRecords[10].egmed_consumption = action.payload },
u6_10pdateTotal_consumption : (state, action) =>{ state.marketSize[6].marketSizeRecords[10].total_consumption = action.payload },
u6_10pdateCompetitor_id : (state, action) =>{ state.marketSize[6].marketSizeRecords[10].competitor_id = action.payload },
u6_10pdateItem_qty1 : (state, action) =>{ state.marketSize[6].marketSizeRecords[10].item_qty1 = action.payload },
u6_10pdateItem_status1 : (state, action) =>{ state.marketSize[6].marketSizeRecords[10].item_status1 = action.payload },
u6_10pdateItem_qty2 : (state, action) =>{ state.marketSize[6].marketSizeRecords[10].item_qty2 = action.payload },
u6_10pdateItem_status2 : (state, action) =>{ state.marketSize[6].marketSizeRecords[10].item_status2 = action.payload },
u6_10pdateMarket_size_id : (state, action) =>{ state.marketSize[6].marketSizeRecords[10].market_size_id = action.payload },


u6_11pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[6].marketSizeRecords[11].marketSizeRecordsID = action.payload },
u6_11pdateEgmed_consumption : (state, action) =>{ state.marketSize[6].marketSizeRecords[11].egmed_consumption = action.payload },
u6_11pdateTotal_consumption : (state, action) =>{ state.marketSize[6].marketSizeRecords[11].total_consumption = action.payload },
u6_11pdateCompetitor_id : (state, action) =>{ state.marketSize[6].marketSizeRecords[11].competitor_id = action.payload },
u6_11pdateItem_qty1 : (state, action) =>{ state.marketSize[6].marketSizeRecords[11].item_qty1 = action.payload },
u6_11pdateItem_status1 : (state, action) =>{ state.marketSize[6].marketSizeRecords[11].item_status1 = action.payload },
u6_11pdateItem_qty2 : (state, action) =>{ state.marketSize[6].marketSizeRecords[11].item_qty2 = action.payload },
u6_11pdateItem_status2 : (state, action) =>{ state.marketSize[6].marketSizeRecords[11].item_status2 = action.payload },
u6_11pdateMarket_size_id : (state, action) =>{ state.marketSize[6].marketSizeRecords[11].market_size_id = action.payload },


u6_12pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[6].marketSizeRecords[12].marketSizeRecordsID = action.payload },
u6_12pdateEgmed_consumption : (state, action) =>{ state.marketSize[6].marketSizeRecords[12].egmed_consumption = action.payload },
u6_12pdateTotal_consumption : (state, action) =>{ state.marketSize[6].marketSizeRecords[12].total_consumption = action.payload },
u6_12pdateCompetitor_id : (state, action) =>{ state.marketSize[6].marketSizeRecords[12].competitor_id = action.payload },
u6_12pdateItem_qty1 : (state, action) =>{ state.marketSize[6].marketSizeRecords[12].item_qty1 = action.payload },
u6_12pdateItem_status1 : (state, action) =>{ state.marketSize[6].marketSizeRecords[12].item_status1 = action.payload },
u6_12pdateItem_qty2 : (state, action) =>{ state.marketSize[6].marketSizeRecords[12].item_qty2 = action.payload },
u6_12pdateItem_status2 : (state, action) =>{ state.marketSize[6].marketSizeRecords[12].item_status2 = action.payload },
u6_12pdateMarket_size_id : (state, action) =>{ state.marketSize[6].marketSizeRecords[12].market_size_id = action.payload },


u6_13pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[6].marketSizeRecords[13].marketSizeRecordsID = action.payload },
u6_13pdateEgmed_consumption : (state, action) =>{ state.marketSize[6].marketSizeRecords[13].egmed_consumption = action.payload },
u6_13pdateTotal_consumption : (state, action) =>{ state.marketSize[6].marketSizeRecords[13].total_consumption = action.payload },
u6_13pdateCompetitor_id : (state, action) =>{ state.marketSize[6].marketSizeRecords[13].competitor_id = action.payload },
u6_13pdateItem_qty1 : (state, action) =>{ state.marketSize[6].marketSizeRecords[13].item_qty1 = action.payload },
u6_13pdateItem_status1 : (state, action) =>{ state.marketSize[6].marketSizeRecords[13].item_status1 = action.payload },
u6_13pdateItem_qty2 : (state, action) =>{ state.marketSize[6].marketSizeRecords[13].item_qty2 = action.payload },
u6_13pdateItem_status2 : (state, action) =>{ state.marketSize[6].marketSizeRecords[13].item_status2 = action.payload },
u6_13pdateMarket_size_id : (state, action) =>{ state.marketSize[6].marketSizeRecords[13].market_size_id = action.payload },



u6_14pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[6].marketSizeRecords[14].marketSizeRecordsID = action.payload },
u6_14pdateEgmed_consumption : (state, action) =>{ state.marketSize[6].marketSizeRecords[14].egmed_consumption = action.payload },
u6_14pdateTotal_consumption : (state, action) =>{ state.marketSize[6].marketSizeRecords[14].total_consumption = action.payload },
u6_14pdateCompetitor_id : (state, action) =>{ state.marketSize[6].marketSizeRecords[14].competitor_id = action.payload },
u6_14pdateItem_qty1 : (state, action) =>{ state.marketSize[6].marketSizeRecords[14].item_qty1 = action.payload },
u6_14pdateItem_status1 : (state, action) =>{ state.marketSize[6].marketSizeRecords[14].item_status1 = action.payload },
u6_14pdateItem_qty2 : (state, action) =>{ state.marketSize[6].marketSizeRecords[14].item_qty2 = action.payload },
u6_14pdateItem_status2 : (state, action) =>{ state.marketSize[6].marketSizeRecords[14].item_status2 = action.payload },
u6_14pdateMarket_size_id : (state, action) =>{ state.marketSize[6].marketSizeRecords[14].market_size_id = action.payload },


u6_15pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[6].marketSizeRecords[15].marketSizeRecordsID = action.payload },
u6_15pdateEgmed_consumption : (state, action) =>{ state.marketSize[6].marketSizeRecords[15].egmed_consumption = action.payload },
u6_15pdateTotal_consumption : (state, action) =>{ state.marketSize[6].marketSizeRecords[15].total_consumption = action.payload },
u6_15pdateCompetitor_id : (state, action) =>{ state.marketSize[6].marketSizeRecords[15].competitor_id = action.payload },
u6_15pdateItem_qty1 : (state, action) =>{ state.marketSize[6].marketSizeRecords[15].item_qty1 = action.payload },
u6_15pdateItem_status1 : (state, action) =>{ state.marketSize[6].marketSizeRecords[15].item_status1 = action.payload },
u6_15pdateItem_qty2 : (state, action) =>{ state.marketSize[6].marketSizeRecords[15].item_qty2 = action.payload },
u6_15pdateItem_status2 : (state, action) =>{ state.marketSize[6].marketSizeRecords[15].item_status2 = action.payload },
u6_15pdateMarket_size_id : (state, action) =>{ state.marketSize[6].marketSizeRecords[15].market_size_id = action.payload },


u6_16pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[6].marketSizeRecords[16].marketSizeRecordsID = action.payload },
u6_16pdateEgmed_consumption : (state, action) =>{ state.marketSize[6].marketSizeRecords[16].egmed_consumption = action.payload },
u6_16pdateTotal_consumption : (state, action) =>{ state.marketSize[6].marketSizeRecords[16].total_consumption = action.payload },
u6_16pdateCompetitor_id : (state, action) =>{ state.marketSize[6].marketSizeRecords[16].competitor_id = action.payload },
u6_16pdateItem_qty1 : (state, action) =>{ state.marketSize[6].marketSizeRecords[16].item_qty1 = action.payload },
u6_16pdateItem_status1 : (state, action) =>{ state.marketSize[6].marketSizeRecords[16].item_status1 = action.payload },
u6_16pdateItem_qty2 : (state, action) =>{ state.marketSize[6].marketSizeRecords[16].item_qty2 = action.payload },
u6_16pdateItem_status2 : (state, action) =>{ state.marketSize[6].marketSizeRecords[16].item_status2 = action.payload },
u6_16pdateMarket_size_id : (state, action) =>{ state.marketSize[6].marketSizeRecords[16].market_size_id = action.payload },


/////7/////0//


u7_0pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[7].marketSizeRecords[0].marketSizeRecordsID = action.payload },
u7_0pdateEgmed_consumption : (state, action) =>{ state.marketSize[7].marketSizeRecords[0].egmed_consumption = action.payload },
u7_0pdateTotal_consumption : (state, action) =>{ state.marketSize[7].marketSizeRecords[0].total_consumption = action.payload },
u7_0pdateCompetitor_id : (state, action) =>{ state.marketSize[7].marketSizeRecords[0].competitor_id = action.payload },
u7_0pdateItem_qty1 : (state, action) =>{ state.marketSize[7].marketSizeRecords[0].item_qty1 = action.payload },
u7_0pdateItem_status1 : (state, action) =>{ state.marketSize[7].marketSizeRecords[0].item_status1 = action.payload },
u7_0pdateItem_qty2 : (state, action) =>{ state.marketSize[7].marketSizeRecords[0].item_qty2 = action.payload },
u7_0pdateItem_status2 : (state, action) =>{ state.marketSize[7].marketSizeRecords[0].item_status2 = action.payload },
u7_0pdateMarket_size_id : (state, action) =>{ state.marketSize[7].marketSizeRecords[0].market_size_id = action.payload },


u7_1pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[7].marketSizeRecords[1].marketSizeRecordsID = action.payload },
u7_1pdateEgmed_consumption : (state, action) =>{ state.marketSize[7].marketSizeRecords[1].egmed_consumption = action.payload },
u7_1pdateTotal_consumption : (state, action) =>{ state.marketSize[7].marketSizeRecords[1].total_consumption = action.payload },
u7_1pdateCompetitor_id : (state, action) =>{ state.marketSize[7].marketSizeRecords[1].competitor_id = action.payload },
u7_1pdateItem_qty1 : (state, action) =>{ state.marketSize[7].marketSizeRecords[1].item_qty1 = action.payload },
u7_1pdateItem_status1 : (state, action) =>{ state.marketSize[7].marketSizeRecords[1].item_status1 = action.payload },
u7_1pdateItem_qty2 : (state, action) =>{ state.marketSize[7].marketSizeRecords[1].item_qty2 = action.payload },
u7_1pdateItem_status2 : (state, action) =>{ state.marketSize[7].marketSizeRecords[1].item_status2 = action.payload },
u7_1pdateMarket_size_id : (state, action) =>{ state.marketSize[7].marketSizeRecords[1].market_size_id = action.payload },


u7_2pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[7].marketSizeRecords[2].marketSizeRecordsID = action.payload },
u7_2pdateEgmed_consumption : (state, action) =>{ state.marketSize[7].marketSizeRecords[2].egmed_consumption = action.payload },
u7_2pdateTotal_consumption : (state, action) =>{ state.marketSize[7].marketSizeRecords[2].total_consumption = action.payload },
u7_2pdateCompetitor_id : (state, action) =>{ state.marketSize[7].marketSizeRecords[2].competitor_id = action.payload },
u7_2pdateItem_qty1 : (state, action) =>{ state.marketSize[7].marketSizeRecords[2].item_qty1 = action.payload },
u7_2pdateItem_status1 : (state, action) =>{ state.marketSize[7].marketSizeRecords[2].item_status1 = action.payload },
u7_2pdateItem_qty2 : (state, action) =>{ state.marketSize[7].marketSizeRecords[2].item_qty2 = action.payload },
u7_2pdateItem_status2 : (state, action) =>{ state.marketSize[7].marketSizeRecords[2].item_status2 = action.payload },
u7_2pdateMarket_size_id : (state, action) =>{ state.marketSize[7].marketSizeRecords[2].market_size_id = action.payload },


u7_3pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[7].marketSizeRecords[3].marketSizeRecordsID = action.payload },
u7_3pdateEgmed_consumption : (state, action) =>{ state.marketSize[7].marketSizeRecords[3].egmed_consumption = action.payload },
u7_3pdateTotal_consumption : (state, action) =>{ state.marketSize[7].marketSizeRecords[3].total_consumption = action.payload },
u7_3pdateCompetitor_id : (state, action) =>{ state.marketSize[7].marketSizeRecords[3].competitor_id = action.payload },
u7_3pdateItem_qty1 : (state, action) =>{ state.marketSize[7].marketSizeRecords[3].item_qty1 = action.payload },
u7_3pdateItem_status1 : (state, action) =>{ state.marketSize[7].marketSizeRecords[3].item_status1 = action.payload },
u7_3pdateItem_qty2 : (state, action) =>{ state.marketSize[7].marketSizeRecords[3].item_qty2 = action.payload },
u7_3pdateItem_status2 : (state, action) =>{ state.marketSize[7].marketSizeRecords[3].item_status2 = action.payload },
u7_3pdateMarket_size_id : (state, action) =>{ state.marketSize[7].marketSizeRecords[3].market_size_id = action.payload },


u7_4pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[7].marketSizeRecords[4].marketSizeRecordsID = action.payload },
u7_4pdateEgmed_consumption : (state, action) =>{ state.marketSize[7].marketSizeRecords[4].egmed_consumption = action.payload },
u7_4pdateTotal_consumption : (state, action) =>{ state.marketSize[7].marketSizeRecords[4].total_consumption = action.payload },
u7_4pdateCompetitor_id : (state, action) =>{ state.marketSize[7].marketSizeRecords[4].competitor_id = action.payload },
u7_4pdateItem_qty1 : (state, action) =>{ state.marketSize[7].marketSizeRecords[4].item_qty1 = action.payload },
u7_4pdateItem_status1 : (state, action) =>{ state.marketSize[7].marketSizeRecords[4].item_status1 = action.payload },
u7_4pdateItem_qty2 : (state, action) =>{ state.marketSize[7].marketSizeRecords[4].item_qty2 = action.payload },
u7_4pdateItem_status2 : (state, action) =>{ state.marketSize[7].marketSizeRecords[4].item_status2 = action.payload },
u7_4pdateMarket_size_id : (state, action) =>{ state.marketSize[7].marketSizeRecords[4].market_size_id = action.payload },


u7_5pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[7].marketSizeRecords[5].marketSizeRecordsID = action.payload },
u7_5pdateEgmed_consumption : (state, action) =>{ state.marketSize[7].marketSizeRecords[5].egmed_consumption = action.payload },
u7_5pdateTotal_consumption : (state, action) =>{ state.marketSize[7].marketSizeRecords[5].total_consumption = action.payload },
u7_5pdateCompetitor_id : (state, action) =>{ state.marketSize[7].marketSizeRecords[5].competitor_id = action.payload },
u7_5pdateItem_qty1 : (state, action) =>{ state.marketSize[7].marketSizeRecords[5].item_qty1 = action.payload },
u7_5pdateItem_status1 : (state, action) =>{ state.marketSize[7].marketSizeRecords[5].item_status1 = action.payload },
u7_5pdateItem_qty2 : (state, action) =>{ state.marketSize[7].marketSizeRecords[5].item_qty2 = action.payload },
u7_5pdateItem_status2 : (state, action) =>{ state.marketSize[7].marketSizeRecords[5].item_status2 = action.payload },
u7_5pdateMarket_size_id : (state, action) =>{ state.marketSize[7].marketSizeRecords[5].market_size_id = action.payload },


u7_6pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[7].marketSizeRecords[6].marketSizeRecordsID = action.payload },
u7_6pdateEgmed_consumption : (state, action) =>{ state.marketSize[7].marketSizeRecords[6].egmed_consumption = action.payload },
u7_6pdateTotal_consumption : (state, action) =>{ state.marketSize[7].marketSizeRecords[6].total_consumption = action.payload },
u7_6pdateCompetitor_id : (state, action) =>{ state.marketSize[7].marketSizeRecords[6].competitor_id = action.payload },
u7_6pdateItem_qty1 : (state, action) =>{ state.marketSize[7].marketSizeRecords[6].item_qty1 = action.payload },
u7_6pdateItem_status1 : (state, action) =>{ state.marketSize[7].marketSizeRecords[6].item_status1 = action.payload },
u7_6pdateItem_qty2 : (state, action) =>{ state.marketSize[7].marketSizeRecords[6].item_qty2 = action.payload },
u7_6pdateItem_status2 : (state, action) =>{ state.marketSize[7].marketSizeRecords[6].item_status2 = action.payload },
u7_6pdateMarket_size_id : (state, action) =>{ state.marketSize[7].marketSizeRecords[6].market_size_id = action.payload },


u7_7pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[7].marketSizeRecords[7].marketSizeRecordsID = action.payload },
u7_7pdateEgmed_consumption : (state, action) =>{ state.marketSize[7].marketSizeRecords[7].egmed_consumption = action.payload },
u7_7pdateTotal_consumption : (state, action) =>{ state.marketSize[7].marketSizeRecords[7].total_consumption = action.payload },
u7_7pdateCompetitor_id : (state, action) =>{ state.marketSize[7].marketSizeRecords[7].competitor_id = action.payload },
u7_7pdateItem_qty1 : (state, action) =>{ state.marketSize[7].marketSizeRecords[7].item_qty1 = action.payload },
u7_7pdateItem_status1 : (state, action) =>{ state.marketSize[7].marketSizeRecords[7].item_status1 = action.payload },
u7_7pdateItem_qty2 : (state, action) =>{ state.marketSize[7].marketSizeRecords[7].item_qty2 = action.payload },
u7_7pdateItem_status2 : (state, action) =>{ state.marketSize[7].marketSizeRecords[7].item_status2 = action.payload },
u7_7pdateMarket_size_id : (state, action) =>{ state.marketSize[7].marketSizeRecords[7].market_size_id = action.payload },


u7_8pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[7].marketSizeRecords[8].marketSizeRecordsID = action.payload },
u7_8pdateEgmed_consumption : (state, action) =>{ state.marketSize[7].marketSizeRecords[8].egmed_consumption = action.payload },
u7_8pdateTotal_consumption : (state, action) =>{ state.marketSize[7].marketSizeRecords[8].total_consumption = action.payload },
u7_8pdateCompetitor_id : (state, action) =>{ state.marketSize[7].marketSizeRecords[8].competitor_id = action.payload },
u7_8pdateItem_qty1 : (state, action) =>{ state.marketSize[7].marketSizeRecords[8].item_qty1 = action.payload },
u7_8pdateItem_status1 : (state, action) =>{ state.marketSize[7].marketSizeRecords[8].item_status1 = action.payload },
u7_8pdateItem_qty2 : (state, action) =>{ state.marketSize[7].marketSizeRecords[8].item_qty2 = action.payload },
u7_8pdateItem_status2 : (state, action) =>{ state.marketSize[7].marketSizeRecords[8].item_status2 = action.payload },
u7_8pdateMarket_size_id : (state, action) =>{ state.marketSize[7].marketSizeRecords[8].market_size_id = action.payload },


u7_9pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[7].marketSizeRecords[9].marketSizeRecordsID = action.payload },
u7_9pdateEgmed_consumption : (state, action) =>{ state.marketSize[7].marketSizeRecords[9].egmed_consumption = action.payload },
u7_9pdateTotal_consumption : (state, action) =>{ state.marketSize[7].marketSizeRecords[9].total_consumption = action.payload },
u7_9pdateCompetitor_id : (state, action) =>{ state.marketSize[7].marketSizeRecords[9].competitor_id = action.payload },
u7_9pdateItem_qty1 : (state, action) =>{ state.marketSize[7].marketSizeRecords[9].item_qty1 = action.payload },
u7_9pdateItem_status1 : (state, action) =>{ state.marketSize[7].marketSizeRecords[9].item_status1 = action.payload },
u7_9pdateItem_qty2 : (state, action) =>{ state.marketSize[7].marketSizeRecords[9].item_qty2 = action.payload },
u7_9pdateItem_status2 : (state, action) =>{ state.marketSize[7].marketSizeRecords[9].item_status2 = action.payload },
u7_9pdateMarket_size_id : (state, action) =>{ state.marketSize[7].marketSizeRecords[9].market_size_id = action.payload },


u7_10pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[7].marketSizeRecords[10].marketSizeRecordsID = action.payload },
u7_10pdateEgmed_consumption : (state, action) =>{ state.marketSize[7].marketSizeRecords[10].egmed_consumption = action.payload },
u7_10pdateTotal_consumption : (state, action) =>{ state.marketSize[7].marketSizeRecords[10].total_consumption = action.payload },
u7_10pdateCompetitor_id : (state, action) =>{ state.marketSize[7].marketSizeRecords[10].competitor_id = action.payload },
u7_10pdateItem_qty1 : (state, action) =>{ state.marketSize[7].marketSizeRecords[10].item_qty1 = action.payload },
u7_10pdateItem_status1 : (state, action) =>{ state.marketSize[7].marketSizeRecords[10].item_status1 = action.payload },
u7_10pdateItem_qty2 : (state, action) =>{ state.marketSize[7].marketSizeRecords[10].item_qty2 = action.payload },
u7_10pdateItem_status2 : (state, action) =>{ state.marketSize[7].marketSizeRecords[10].item_status2 = action.payload },
u7_10pdateMarket_size_id : (state, action) =>{ state.marketSize[7].marketSizeRecords[10].market_size_id = action.payload },


u7_11pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[7].marketSizeRecords[11].marketSizeRecordsID = action.payload },
u7_11pdateEgmed_consumption : (state, action) =>{ state.marketSize[7].marketSizeRecords[11].egmed_consumption = action.payload },
u7_11pdateTotal_consumption : (state, action) =>{ state.marketSize[7].marketSizeRecords[11].total_consumption = action.payload },
u7_11pdateCompetitor_id : (state, action) =>{ state.marketSize[7].marketSizeRecords[11].competitor_id = action.payload },
u7_11pdateItem_qty1 : (state, action) =>{ state.marketSize[7].marketSizeRecords[11].item_qty1 = action.payload },
u7_11pdateItem_status1 : (state, action) =>{ state.marketSize[7].marketSizeRecords[11].item_status1 = action.payload },
u7_11pdateItem_qty2 : (state, action) =>{ state.marketSize[7].marketSizeRecords[11].item_qty2 = action.payload },
u7_11pdateItem_status2 : (state, action) =>{ state.marketSize[7].marketSizeRecords[11].item_status2 = action.payload },
u7_11pdateMarket_size_id : (state, action) =>{ state.marketSize[7].marketSizeRecords[11].market_size_id = action.payload },


u7_12pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[7].marketSizeRecords[12].marketSizeRecordsID = action.payload },
u7_12pdateEgmed_consumption : (state, action) =>{ state.marketSize[7].marketSizeRecords[12].egmed_consumption = action.payload },
u7_12pdateTotal_consumption : (state, action) =>{ state.marketSize[7].marketSizeRecords[12].total_consumption = action.payload },
u7_12pdateCompetitor_id : (state, action) =>{ state.marketSize[7].marketSizeRecords[12].competitor_id = action.payload },
u7_12pdateItem_qty1 : (state, action) =>{ state.marketSize[7].marketSizeRecords[12].item_qty1 = action.payload },
u7_12pdateItem_status1 : (state, action) =>{ state.marketSize[7].marketSizeRecords[12].item_status1 = action.payload },
u7_12pdateItem_qty2 : (state, action) =>{ state.marketSize[7].marketSizeRecords[12].item_qty2 = action.payload },
u7_12pdateItem_status2 : (state, action) =>{ state.marketSize[7].marketSizeRecords[12].item_status2 = action.payload },
u7_12pdateMarket_size_id : (state, action) =>{ state.marketSize[7].marketSizeRecords[12].market_size_id = action.payload },


u7_13pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[7].marketSizeRecords[13].marketSizeRecordsID = action.payload },
u7_13pdateEgmed_consumption : (state, action) =>{ state.marketSize[7].marketSizeRecords[13].egmed_consumption = action.payload },
u7_13pdateTotal_consumption : (state, action) =>{ state.marketSize[7].marketSizeRecords[13].total_consumption = action.payload },
u7_13pdateCompetitor_id : (state, action) =>{ state.marketSize[7].marketSizeRecords[13].competitor_id = action.payload },
u7_13pdateItem_qty1 : (state, action) =>{ state.marketSize[7].marketSizeRecords[13].item_qty1 = action.payload },
u7_13pdateItem_status1 : (state, action) =>{ state.marketSize[7].marketSizeRecords[13].item_status1 = action.payload },
u7_13pdateItem_qty2 : (state, action) =>{ state.marketSize[7].marketSizeRecords[13].item_qty2 = action.payload },
u7_13pdateItem_status2 : (state, action) =>{ state.marketSize[7].marketSizeRecords[13].item_status2 = action.payload },
u7_13pdateMarket_size_id : (state, action) =>{ state.marketSize[7].marketSizeRecords[13].market_size_id = action.payload },


u7_14pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[7].marketSizeRecords[14].marketSizeRecordsID = action.payload },
u7_14pdateEgmed_consumption : (state, action) =>{ state.marketSize[7].marketSizeRecords[14].egmed_consumption = action.payload },
u7_14pdateTotal_consumption : (state, action) =>{ state.marketSize[7].marketSizeRecords[14].total_consumption = action.payload },
u7_14pdateCompetitor_id : (state, action) =>{ state.marketSize[7].marketSizeRecords[14].competitor_id = action.payload },
u7_14pdateItem_qty1 : (state, action) =>{ state.marketSize[7].marketSizeRecords[14].item_qty1 = action.payload },
u7_14pdateItem_status1 : (state, action) =>{ state.marketSize[7].marketSizeRecords[14].item_status1 = action.payload },
u7_14pdateItem_qty2 : (state, action) =>{ state.marketSize[7].marketSizeRecords[14].item_qty2 = action.payload },
u7_14pdateItem_status2 : (state, action) =>{ state.marketSize[7].marketSizeRecords[14].item_status2 = action.payload },
u7_14pdateMarket_size_id : (state, action) =>{ state.marketSize[7].marketSizeRecords[14].market_size_id = action.payload },


u7_15pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[7].marketSizeRecords[15].marketSizeRecordsID = action.payload },
u7_15pdateEgmed_consumption : (state, action) =>{ state.marketSize[7].marketSizeRecords[15].egmed_consumption = action.payload },
u7_15pdateTotal_consumption : (state, action) =>{ state.marketSize[7].marketSizeRecords[15].total_consumption = action.payload },
u7_15pdateCompetitor_id : (state, action) =>{ state.marketSize[7].marketSizeRecords[15].competitor_id = action.payload },
u7_15pdateItem_qty1 : (state, action) =>{ state.marketSize[7].marketSizeRecords[15].item_qty1 = action.payload },
u7_15pdateItem_status1 : (state, action) =>{ state.marketSize[7].marketSizeRecords[15].item_status1 = action.payload },
u7_15pdateItem_qty2 : (state, action) =>{ state.marketSize[7].marketSizeRecords[15].item_qty2 = action.payload },
u7_15pdateItem_status2 : (state, action) =>{ state.marketSize[7].marketSizeRecords[15].item_status2 = action.payload },
u7_15pdateMarket_size_id : (state, action) =>{ state.marketSize[7].marketSizeRecords[15].market_size_id = action.payload },


u7_16pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[7].marketSizeRecords[16].marketSizeRecordsID = action.payload },
u7_16pdateEgmed_consumption : (state, action) =>{ state.marketSize[7].marketSizeRecords[16].egmed_consumption = action.payload },
u7_16pdateTotal_consumption : (state, action) =>{ state.marketSize[7].marketSizeRecords[16].total_consumption = action.payload },
u7_16pdateCompetitor_id : (state, action) =>{ state.marketSize[7].marketSizeRecords[16].competitor_id = action.payload },
u7_16pdateItem_qty1 : (state, action) =>{ state.marketSize[7].marketSizeRecords[16].item_qty1 = action.payload },
u7_16pdateItem_status1 : (state, action) =>{ state.marketSize[7].marketSizeRecords[16].item_status1 = action.payload },
u7_16pdateItem_qty2 : (state, action) =>{ state.marketSize[7].marketSizeRecords[16].item_qty2 = action.payload },
u7_16pdateItem_status2 : (state, action) =>{ state.marketSize[7].marketSizeRecords[16].item_status2 = action.payload },
u7_16pdateMarket_size_id : (state, action) =>{ state.marketSize[7].marketSizeRecords[16].market_size_id = action.payload },



////8//0


u8_0pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[8].marketSizeRecords[0].marketSizeRecordsID = action.payload },
u8_0pdateEgmed_consumption : (state, action) =>{ state.marketSize[8].marketSizeRecords[0].egmed_consumption = action.payload },
u8_0pdateTotal_consumption : (state, action) =>{ state.marketSize[8].marketSizeRecords[0].total_consumption = action.payload },
u8_0pdateCompetitor_id : (state, action) =>{ state.marketSize[8].marketSizeRecords[0].competitor_id = action.payload },
u8_0pdateItem_qty1 : (state, action) =>{ state.marketSize[8].marketSizeRecords[0].item_qty1 = action.payload },
u8_0pdateItem_status1 : (state, action) =>{ state.marketSize[8].marketSizeRecords[0].item_status1 = action.payload },
u8_0pdateItem_qty2 : (state, action) =>{ state.marketSize[8].marketSizeRecords[0].item_qty2 = action.payload },
u8_0pdateItem_status2 : (state, action) =>{ state.marketSize[8].marketSizeRecords[0].item_status2 = action.payload },
u8_0pdateMarket_size_id : (state, action) =>{ state.marketSize[8].marketSizeRecords[0].market_size_id = action.payload },


u8_1pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[8].marketSizeRecords[1].marketSizeRecordsID = action.payload },
u8_1pdateEgmed_consumption : (state, action) =>{ state.marketSize[8].marketSizeRecords[1].egmed_consumption = action.payload },
u8_1pdateTotal_consumption : (state, action) =>{ state.marketSize[8].marketSizeRecords[1].total_consumption = action.payload },
u8_1pdateCompetitor_id : (state, action) =>{ state.marketSize[8].marketSizeRecords[1].competitor_id = action.payload },
u8_1pdateItem_qty1 : (state, action) =>{ state.marketSize[8].marketSizeRecords[1].item_qty1 = action.payload },
u8_1pdateItem_status1 : (state, action) =>{ state.marketSize[8].marketSizeRecords[1].item_status1 = action.payload },
u8_1pdateItem_qty2 : (state, action) =>{ state.marketSize[8].marketSizeRecords[1].item_qty2 = action.payload },
u8_1pdateItem_status2 : (state, action) =>{ state.marketSize[8].marketSizeRecords[1].item_status2 = action.payload },
u8_1pdateMarket_size_id : (state, action) =>{ state.marketSize[8].marketSizeRecords[1].market_size_id = action.payload },


u8_2pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[8].marketSizeRecords[2].marketSizeRecordsID = action.payload },
u8_2pdateEgmed_consumption : (state, action) =>{ state.marketSize[8].marketSizeRecords[2].egmed_consumption = action.payload },
u8_2pdateTotal_consumption : (state, action) =>{ state.marketSize[8].marketSizeRecords[2].total_consumption = action.payload },
u8_2pdateCompetitor_id : (state, action) =>{ state.marketSize[8].marketSizeRecords[2].competitor_id = action.payload },
u8_2pdateItem_qty1 : (state, action) =>{ state.marketSize[8].marketSizeRecords[2].item_qty1 = action.payload },
u8_2pdateItem_status1 : (state, action) =>{ state.marketSize[8].marketSizeRecords[2].item_status1 = action.payload },
u8_2pdateItem_qty2 : (state, action) =>{ state.marketSize[8].marketSizeRecords[2].item_qty2 = action.payload },
u8_2pdateItem_status2 : (state, action) =>{ state.marketSize[8].marketSizeRecords[2].item_status2 = action.payload },
u8_2pdateMarket_size_id : (state, action) =>{ state.marketSize[8].marketSizeRecords[2].market_size_id = action.payload },


u8_3pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[8].marketSizeRecords[3].marketSizeRecordsID = action.payload },
u8_3pdateEgmed_consumption : (state, action) =>{ state.marketSize[8].marketSizeRecords[3].egmed_consumption = action.payload },
u8_3pdateTotal_consumption : (state, action) =>{ state.marketSize[8].marketSizeRecords[3].total_consumption = action.payload },
u8_3pdateCompetitor_id : (state, action) =>{ state.marketSize[8].marketSizeRecords[3].competitor_id = action.payload },
u8_3pdateItem_qty1 : (state, action) =>{ state.marketSize[8].marketSizeRecords[3].item_qty1 = action.payload },
u8_3pdateItem_status1 : (state, action) =>{ state.marketSize[8].marketSizeRecords[3].item_status1 = action.payload },
u8_3pdateItem_qty2 : (state, action) =>{ state.marketSize[8].marketSizeRecords[3].item_qty2 = action.payload },
u8_3pdateItem_status2 : (state, action) =>{ state.marketSize[8].marketSizeRecords[3].item_status2 = action.payload },
u8_3pdateMarket_size_id : (state, action) =>{ state.marketSize[8].marketSizeRecords[3].market_size_id = action.payload },


u8_4pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[8].marketSizeRecords[4].marketSizeRecordsID = action.payload },
u8_4pdateEgmed_consumption : (state, action) =>{ state.marketSize[8].marketSizeRecords[4].egmed_consumption = action.payload },
u8_4pdateTotal_consumption : (state, action) =>{ state.marketSize[8].marketSizeRecords[4].total_consumption = action.payload },
u8_4pdateCompetitor_id : (state, action) =>{ state.marketSize[8].marketSizeRecords[4].competitor_id = action.payload },
u8_4pdateItem_qty1 : (state, action) =>{ state.marketSize[8].marketSizeRecords[4].item_qty1 = action.payload },
u8_4pdateItem_status1 : (state, action) =>{ state.marketSize[8].marketSizeRecords[4].item_status1 = action.payload },
u8_4pdateItem_qty2 : (state, action) =>{ state.marketSize[8].marketSizeRecords[4].item_qty2 = action.payload },
u8_4pdateItem_status2 : (state, action) =>{ state.marketSize[8].marketSizeRecords[4].item_status2 = action.payload },
u8_4pdateMarket_size_id : (state, action) =>{ state.marketSize[8].marketSizeRecords[4].market_size_id = action.payload },


u8_5pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[8].marketSizeRecords[5].marketSizeRecordsID = action.payload },
u8_5pdateEgmed_consumption : (state, action) =>{ state.marketSize[8].marketSizeRecords[5].egmed_consumption = action.payload },
u8_5pdateTotal_consumption : (state, action) =>{ state.marketSize[8].marketSizeRecords[5].total_consumption = action.payload },
u8_5pdateCompetitor_id : (state, action) =>{ state.marketSize[8].marketSizeRecords[5].competitor_id = action.payload },
u8_5pdateItem_qty1 : (state, action) =>{ state.marketSize[8].marketSizeRecords[5].item_qty1 = action.payload },
u8_5pdateItem_status1 : (state, action) =>{ state.marketSize[8].marketSizeRecords[5].item_status1 = action.payload },
u8_5pdateItem_qty2 : (state, action) =>{ state.marketSize[8].marketSizeRecords[5].item_qty2 = action.payload },
u8_5pdateItem_status2 : (state, action) =>{ state.marketSize[8].marketSizeRecords[5].item_status2 = action.payload },
u8_5pdateMarket_size_id : (state, action) =>{ state.marketSize[8].marketSizeRecords[5].market_size_id = action.payload },


u8_6pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[8].marketSizeRecords[6].marketSizeRecordsID = action.payload },
u8_6pdateEgmed_consumption : (state, action) =>{ state.marketSize[8].marketSizeRecords[6].egmed_consumption = action.payload },
u8_6pdateTotal_consumption : (state, action) =>{ state.marketSize[8].marketSizeRecords[6].total_consumption = action.payload },
u8_6pdateCompetitor_id : (state, action) =>{ state.marketSize[8].marketSizeRecords[6].competitor_id = action.payload },
u8_6pdateItem_qty1 : (state, action) =>{ state.marketSize[8].marketSizeRecords[6].item_qty1 = action.payload },
u8_6pdateItem_status1 : (state, action) =>{ state.marketSize[8].marketSizeRecords[6].item_status1 = action.payload },
u8_6pdateItem_qty2 : (state, action) =>{ state.marketSize[8].marketSizeRecords[6].item_qty2 = action.payload },
u8_6pdateItem_status2 : (state, action) =>{ state.marketSize[8].marketSizeRecords[6].item_status2 = action.payload },
u8_6pdateMarket_size_id : (state, action) =>{ state.marketSize[8].marketSizeRecords[6].market_size_id = action.payload },


u8_7pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[8].marketSizeRecords[7].marketSizeRecordsID = action.payload },
u8_7pdateEgmed_consumption : (state, action) =>{ state.marketSize[8].marketSizeRecords[7].egmed_consumption = action.payload },
u8_7pdateTotal_consumption : (state, action) =>{ state.marketSize[8].marketSizeRecords[7].total_consumption = action.payload },
u8_7pdateCompetitor_id : (state, action) =>{ state.marketSize[8].marketSizeRecords[7].competitor_id = action.payload },
u8_7pdateItem_qty1 : (state, action) =>{ state.marketSize[8].marketSizeRecords[7].item_qty1 = action.payload },
u8_7pdateItem_status1 : (state, action) =>{ state.marketSize[8].marketSizeRecords[7].item_status1 = action.payload },
u8_7pdateItem_qty2 : (state, action) =>{ state.marketSize[8].marketSizeRecords[7].item_qty2 = action.payload },
u8_7pdateItem_status2 : (state, action) =>{ state.marketSize[8].marketSizeRecords[7].item_status2 = action.payload },
u8_7pdateMarket_size_id : (state, action) =>{ state.marketSize[8].marketSizeRecords[7].market_size_id = action.payload },



u8_8pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[8].marketSizeRecords[8].marketSizeRecordsID = action.payload },
u8_8pdateEgmed_consumption : (state, action) =>{ state.marketSize[8].marketSizeRecords[8].egmed_consumption = action.payload },
u8_8pdateTotal_consumption : (state, action) =>{ state.marketSize[8].marketSizeRecords[8].total_consumption = action.payload },
u8_8pdateCompetitor_id : (state, action) =>{ state.marketSize[8].marketSizeRecords[8].competitor_id = action.payload },
u8_8pdateItem_qty1 : (state, action) =>{ state.marketSize[8].marketSizeRecords[8].item_qty1 = action.payload },
u8_8pdateItem_status1 : (state, action) =>{ state.marketSize[8].marketSizeRecords[8].item_status1 = action.payload },
u8_8pdateItem_qty2 : (state, action) =>{ state.marketSize[8].marketSizeRecords[8].item_qty2 = action.payload },
u8_8pdateItem_status2 : (state, action) =>{ state.marketSize[8].marketSizeRecords[8].item_status2 = action.payload },
u8_8pdateMarket_size_id : (state, action) =>{ state.marketSize[8].marketSizeRecords[8].market_size_id = action.payload },


u8_9pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[8].marketSizeRecords[9].marketSizeRecordsID = action.payload },
u8_9pdateEgmed_consumption : (state, action) =>{ state.marketSize[8].marketSizeRecords[9].egmed_consumption = action.payload },
u8_9pdateTotal_consumption : (state, action) =>{ state.marketSize[8].marketSizeRecords[9].total_consumption = action.payload },
u8_9pdateCompetitor_id : (state, action) =>{ state.marketSize[8].marketSizeRecords[9].competitor_id = action.payload },
u8_9pdateItem_qty1 : (state, action) =>{ state.marketSize[8].marketSizeRecords[9].item_qty1 = action.payload },
u8_9pdateItem_status1 : (state, action) =>{ state.marketSize[8].marketSizeRecords[9].item_status1 = action.payload },
u8_9pdateItem_qty2 : (state, action) =>{ state.marketSize[8].marketSizeRecords[9].item_qty2 = action.payload },
u8_9pdateItem_status2 : (state, action) =>{ state.marketSize[8].marketSizeRecords[9].item_status2 = action.payload },
u8_9pdateMarket_size_id : (state, action) =>{ state.marketSize[8].marketSizeRecords[9].market_size_id = action.payload },


u8_10pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[8].marketSizeRecords[10].marketSizeRecordsID = action.payload },
u8_10pdateEgmed_consumption : (state, action) =>{ state.marketSize[8].marketSizeRecords[10].egmed_consumption = action.payload },
u8_10pdateTotal_consumption : (state, action) =>{ state.marketSize[8].marketSizeRecords[10].total_consumption = action.payload },
u8_10pdateCompetitor_id : (state, action) =>{ state.marketSize[8].marketSizeRecords[10].competitor_id = action.payload },
u8_10pdateItem_qty1 : (state, action) =>{ state.marketSize[8].marketSizeRecords[10].item_qty1 = action.payload },
u8_10pdateItem_status1 : (state, action) =>{ state.marketSize[8].marketSizeRecords[10].item_status1 = action.payload },
u8_10pdateItem_qty2 : (state, action) =>{ state.marketSize[8].marketSizeRecords[10].item_qty2 = action.payload },
u8_10pdateItem_status2 : (state, action) =>{ state.marketSize[8].marketSizeRecords[10].item_status2 = action.payload },
u8_10pdateMarket_size_id : (state, action) =>{ state.marketSize[8].marketSizeRecords[10].market_size_id = action.payload },


u8_11pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[8].marketSizeRecords[11].marketSizeRecordsID = action.payload },
u8_11pdateEgmed_consumption : (state, action) =>{ state.marketSize[8].marketSizeRecords[11].egmed_consumption = action.payload },
u8_11pdateTotal_consumption : (state, action) =>{ state.marketSize[8].marketSizeRecords[11].total_consumption = action.payload },
u8_11pdateCompetitor_id : (state, action) =>{ state.marketSize[8].marketSizeRecords[11].competitor_id = action.payload },
u8_11pdateItem_qty1 : (state, action) =>{ state.marketSize[8].marketSizeRecords[11].item_qty1 = action.payload },
u8_11pdateItem_status1 : (state, action) =>{ state.marketSize[8].marketSizeRecords[11].item_status1 = action.payload },
u8_11pdateItem_qty2 : (state, action) =>{ state.marketSize[8].marketSizeRecords[11].item_qty2 = action.payload },
u8_11pdateItem_status2 : (state, action) =>{ state.marketSize[8].marketSizeRecords[11].item_status2 = action.payload },
u8_11pdateMarket_size_id : (state, action) =>{ state.marketSize[8].marketSizeRecords[11].market_size_id = action.payload },


u8_12pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[8].marketSizeRecords[12].marketSizeRecordsID = action.payload },
u8_12pdateEgmed_consumption : (state, action) =>{ state.marketSize[8].marketSizeRecords[12].egmed_consumption = action.payload },
u8_12pdateTotal_consumption : (state, action) =>{ state.marketSize[8].marketSizeRecords[12].total_consumption = action.payload },
u8_12pdateCompetitor_id : (state, action) =>{ state.marketSize[8].marketSizeRecords[12].competitor_id = action.payload },
u8_12pdateItem_qty1 : (state, action) =>{ state.marketSize[8].marketSizeRecords[12].item_qty1 = action.payload },
u8_12pdateItem_status1 : (state, action) =>{ state.marketSize[8].marketSizeRecords[12].item_status1 = action.payload },
u8_12pdateItem_qty2 : (state, action) =>{ state.marketSize[8].marketSizeRecords[12].item_qty2 = action.payload },
u8_12pdateItem_status2 : (state, action) =>{ state.marketSize[8].marketSizeRecords[12].item_status2 = action.payload },
u8_12pdateMarket_size_id : (state, action) =>{ state.marketSize[8].marketSizeRecords[12].market_size_id = action.payload },


u8_13pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[8].marketSizeRecords[13].marketSizeRecordsID = action.payload },
u8_13pdateEgmed_consumption : (state, action) =>{ state.marketSize[8].marketSizeRecords[13].egmed_consumption = action.payload },
u8_13pdateTotal_consumption : (state, action) =>{ state.marketSize[8].marketSizeRecords[13].total_consumption = action.payload },
u8_13pdateCompetitor_id : (state, action) =>{ state.marketSize[8].marketSizeRecords[13].competitor_id = action.payload },
u8_13pdateItem_qty1 : (state, action) =>{ state.marketSize[8].marketSizeRecords[13].item_qty1 = action.payload },
u8_13pdateItem_status1 : (state, action) =>{ state.marketSize[8].marketSizeRecords[13].item_status1 = action.payload },
u8_13pdateItem_qty2 : (state, action) =>{ state.marketSize[8].marketSizeRecords[13].item_qty2 = action.payload },
u8_13pdateItem_status2 : (state, action) =>{ state.marketSize[8].marketSizeRecords[13].item_status2 = action.payload },
u8_13pdateMarket_size_id : (state, action) =>{ state.marketSize[8].marketSizeRecords[13].market_size_id = action.payload },



u8_14pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[8].marketSizeRecords[14].marketSizeRecordsID = action.payload },
u8_14pdateEgmed_consumption : (state, action) =>{ state.marketSize[8].marketSizeRecords[14].egmed_consumption = action.payload },
u8_14pdateTotal_consumption : (state, action) =>{ state.marketSize[8].marketSizeRecords[14].total_consumption = action.payload },
u8_14pdateCompetitor_id : (state, action) =>{ state.marketSize[8].marketSizeRecords[14].competitor_id = action.payload },
u8_14pdateItem_qty1 : (state, action) =>{ state.marketSize[8].marketSizeRecords[14].item_qty1 = action.payload },
u8_14pdateItem_status1 : (state, action) =>{ state.marketSize[8].marketSizeRecords[14].item_status1 = action.payload },
u8_14pdateItem_qty2 : (state, action) =>{ state.marketSize[8].marketSizeRecords[14].item_qty2 = action.payload },
u8_14pdateItem_status2 : (state, action) =>{ state.marketSize[8].marketSizeRecords[14].item_status2 = action.payload },
u8_14pdateMarket_size_id : (state, action) =>{ state.marketSize[8].marketSizeRecords[14].market_size_id = action.payload },


u8_15pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[8].marketSizeRecords[15].marketSizeRecordsID = action.payload },
u8_15pdateEgmed_consumption : (state, action) =>{ state.marketSize[8].marketSizeRecords[15].egmed_consumption = action.payload },
u8_15pdateTotal_consumption : (state, action) =>{ state.marketSize[8].marketSizeRecords[15].total_consumption = action.payload },
u8_15pdateCompetitor_id : (state, action) =>{ state.marketSize[8].marketSizeRecords[15].competitor_id = action.payload },
u8_15pdateItem_qty1 : (state, action) =>{ state.marketSize[8].marketSizeRecords[15].item_qty1 = action.payload },
u8_15pdateItem_status1 : (state, action) =>{ state.marketSize[8].marketSizeRecords[15].item_status1 = action.payload },
u8_15pdateItem_qty2 : (state, action) =>{ state.marketSize[8].marketSizeRecords[15].item_qty2 = action.payload },
u8_15pdateItem_status2 : (state, action) =>{ state.marketSize[8].marketSizeRecords[15].item_status2 = action.payload },
u8_15pdateMarket_size_id : (state, action) =>{ state.marketSize[8].marketSizeRecords[15].market_size_id = action.payload },


u8_16pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[8].marketSizeRecords[16].marketSizeRecordsID = action.payload },
u8_16pdateEgmed_consumption : (state, action) =>{ state.marketSize[8].marketSizeRecords[16].egmed_consumption = action.payload },
u8_16pdateTotal_consumption : (state, action) =>{ state.marketSize[8].marketSizeRecords[16].total_consumption = action.payload },
u8_16pdateCompetitor_id : (state, action) =>{ state.marketSize[8].marketSizeRecords[16].competitor_id = action.payload },
u8_16pdateItem_qty1 : (state, action) =>{ state.marketSize[8].marketSizeRecords[16].item_qty1 = action.payload },
u8_16pdateItem_status1 : (state, action) =>{ state.marketSize[8].marketSizeRecords[16].item_status1 = action.payload },
u8_16pdateItem_qty2 : (state, action) =>{ state.marketSize[8].marketSizeRecords[16].item_qty2 = action.payload },
u8_16pdateItem_status2 : (state, action) =>{ state.marketSize[8].marketSizeRecords[16].item_status2 = action.payload },
u8_16pdateMarket_size_id : (state, action) =>{ state.marketSize[8].marketSizeRecords[16].market_size_id = action.payload },



///////9//0

u9_0pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[9].marketSizeRecords[0].marketSizeRecordsID = action.payload },
u9_0pdateEgmed_consumption : (state, action) =>{ state.marketSize[9].marketSizeRecords[0].egmed_consumption = action.payload },
u9_0pdateTotal_consumption : (state, action) =>{ state.marketSize[9].marketSizeRecords[0].total_consumption = action.payload },
u9_0pdateCompetitor_id : (state, action) =>{ state.marketSize[9].marketSizeRecords[0].competitor_id = action.payload },
u9_0pdateItem_qty1 : (state, action) =>{ state.marketSize[9].marketSizeRecords[0].item_qty1 = action.payload },
u9_0pdateItem_status1 : (state, action) =>{ state.marketSize[9].marketSizeRecords[0].item_status1 = action.payload },
u9_0pdateItem_qty2 : (state, action) =>{ state.marketSize[9].marketSizeRecords[0].item_qty2 = action.payload },
u9_0pdateItem_status2 : (state, action) =>{ state.marketSize[9].marketSizeRecords[0].item_status2 = action.payload },
u9_0pdateMarket_size_id : (state, action) =>{ state.marketSize[9].marketSizeRecords[0].market_size_id = action.payload },


u9_1pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[9].marketSizeRecords[1].marketSizeRecordsID = action.payload },
u9_1pdateEgmed_consumption : (state, action) =>{ state.marketSize[9].marketSizeRecords[1].egmed_consumption = action.payload },
u9_1pdateTotal_consumption : (state, action) =>{ state.marketSize[9].marketSizeRecords[1].total_consumption = action.payload },
u9_1pdateCompetitor_id : (state, action) =>{ state.marketSize[9].marketSizeRecords[1].competitor_id = action.payload },
u9_1pdateItem_qty1 : (state, action) =>{ state.marketSize[9].marketSizeRecords[1].item_qty1 = action.payload },
u9_1pdateItem_status1 : (state, action) =>{ state.marketSize[9].marketSizeRecords[1].item_status1 = action.payload },
u9_1pdateItem_qty2 : (state, action) =>{ state.marketSize[9].marketSizeRecords[1].item_qty2 = action.payload },
u9_1pdateItem_status2 : (state, action) =>{ state.marketSize[9].marketSizeRecords[1].item_status2 = action.payload },
u9_1pdateMarket_size_id : (state, action) =>{ state.marketSize[9].marketSizeRecords[1].market_size_id = action.payload },


u9_2pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[9].marketSizeRecords[2].marketSizeRecordsID = action.payload },
u9_2pdateEgmed_consumption : (state, action) =>{ state.marketSize[9].marketSizeRecords[2].egmed_consumption = action.payload },
u9_2pdateTotal_consumption : (state, action) =>{ state.marketSize[9].marketSizeRecords[2].total_consumption = action.payload },
u9_2pdateCompetitor_id : (state, action) =>{ state.marketSize[9].marketSizeRecords[2].competitor_id = action.payload },
u9_2pdateItem_qty1 : (state, action) =>{ state.marketSize[9].marketSizeRecords[2].item_qty1 = action.payload },
u9_2pdateItem_status1 : (state, action) =>{ state.marketSize[9].marketSizeRecords[2].item_status1 = action.payload },
u9_2pdateItem_qty2 : (state, action) =>{ state.marketSize[9].marketSizeRecords[2].item_qty2 = action.payload },
u9_2pdateItem_status2 : (state, action) =>{ state.marketSize[9].marketSizeRecords[2].item_status2 = action.payload },
u9_2pdateMarket_size_id : (state, action) =>{ state.marketSize[9].marketSizeRecords[2].market_size_id = action.payload },


u9_3pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[9].marketSizeRecords[3].marketSizeRecordsID = action.payload },
u9_3pdateEgmed_consumption : (state, action) =>{ state.marketSize[9].marketSizeRecords[3].egmed_consumption = action.payload },
u9_3pdateTotal_consumption : (state, action) =>{ state.marketSize[9].marketSizeRecords[3].total_consumption = action.payload },
u9_3pdateCompetitor_id : (state, action) =>{ state.marketSize[9].marketSizeRecords[3].competitor_id = action.payload },
u9_3pdateItem_qty1 : (state, action) =>{ state.marketSize[9].marketSizeRecords[3].item_qty1 = action.payload },
u9_3pdateItem_status1 : (state, action) =>{ state.marketSize[9].marketSizeRecords[3].item_status1 = action.payload },
u9_3pdateItem_qty2 : (state, action) =>{ state.marketSize[9].marketSizeRecords[3].item_qty2 = action.payload },
u9_3pdateItem_status2 : (state, action) =>{ state.marketSize[9].marketSizeRecords[3].item_status2 = action.payload },
u9_3pdateMarket_size_id : (state, action) =>{ state.marketSize[9].marketSizeRecords[3].market_size_id = action.payload },


u9_4pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[9].marketSizeRecords[4].marketSizeRecordsID = action.payload },
u9_4pdateEgmed_consumption : (state, action) =>{ state.marketSize[9].marketSizeRecords[4].egmed_consumption = action.payload },
u9_4pdateTotal_consumption : (state, action) =>{ state.marketSize[9].marketSizeRecords[4].total_consumption = action.payload },
u9_4pdateCompetitor_id : (state, action) =>{ state.marketSize[9].marketSizeRecords[4].competitor_id = action.payload },
u9_4pdateItem_qty1 : (state, action) =>{ state.marketSize[9].marketSizeRecords[4].item_qty1 = action.payload },
u9_4pdateItem_status1 : (state, action) =>{ state.marketSize[9].marketSizeRecords[4].item_status1 = action.payload },
u9_4pdateItem_qty2 : (state, action) =>{ state.marketSize[9].marketSizeRecords[4].item_qty2 = action.payload },
u9_4pdateItem_status2 : (state, action) =>{ state.marketSize[9].marketSizeRecords[4].item_status2 = action.payload },
u9_4pdateMarket_size_id : (state, action) =>{ state.marketSize[9].marketSizeRecords[4].market_size_id = action.payload },


u9_5pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[9].marketSizeRecords[5].marketSizeRecordsID = action.payload },
u9_5pdateEgmed_consumption : (state, action) =>{ state.marketSize[9].marketSizeRecords[5].egmed_consumption = action.payload },
u9_5pdateTotal_consumption : (state, action) =>{ state.marketSize[9].marketSizeRecords[5].total_consumption = action.payload },
u9_5pdateCompetitor_id : (state, action) =>{ state.marketSize[9].marketSizeRecords[5].competitor_id = action.payload },
u9_5pdateItem_qty1 : (state, action) =>{ state.marketSize[9].marketSizeRecords[5].item_qty1 = action.payload },
u9_5pdateItem_status1 : (state, action) =>{ state.marketSize[9].marketSizeRecords[5].item_status1 = action.payload },
u9_5pdateItem_qty2 : (state, action) =>{ state.marketSize[9].marketSizeRecords[5].item_qty2 = action.payload },
u9_5pdateItem_status2 : (state, action) =>{ state.marketSize[9].marketSizeRecords[5].item_status2 = action.payload },
u9_5pdateMarket_size_id : (state, action) =>{ state.marketSize[9].marketSizeRecords[5].market_size_id = action.payload },


u9_6pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[9].marketSizeRecords[6].marketSizeRecordsID = action.payload },
u9_6pdateEgmed_consumption : (state, action) =>{ state.marketSize[9].marketSizeRecords[6].egmed_consumption = action.payload },
u9_6pdateTotal_consumption : (state, action) =>{ state.marketSize[9].marketSizeRecords[6].total_consumption = action.payload },
u9_6pdateCompetitor_id : (state, action) =>{ state.marketSize[9].marketSizeRecords[6].competitor_id = action.payload },
u9_6pdateItem_qty1 : (state, action) =>{ state.marketSize[9].marketSizeRecords[6].item_qty1 = action.payload },
u9_6pdateItem_status1 : (state, action) =>{ state.marketSize[9].marketSizeRecords[6].item_status1 = action.payload },
u9_6pdateItem_qty2 : (state, action) =>{ state.marketSize[9].marketSizeRecords[6].item_qty2 = action.payload },
u9_6pdateItem_status2 : (state, action) =>{ state.marketSize[9].marketSizeRecords[6].item_status2 = action.payload },
u9_6pdateMarket_size_id : (state, action) =>{ state.marketSize[9].marketSizeRecords[6].market_size_id = action.payload },


u9_7pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[9].marketSizeRecords[7].marketSizeRecordsID = action.payload },
u9_7pdateEgmed_consumption : (state, action) =>{ state.marketSize[9].marketSizeRecords[7].egmed_consumption = action.payload },
u9_7pdateTotal_consumption : (state, action) =>{ state.marketSize[9].marketSizeRecords[7].total_consumption = action.payload },
u9_7pdateCompetitor_id : (state, action) =>{ state.marketSize[9].marketSizeRecords[7].competitor_id = action.payload },
u9_7pdateItem_qty1 : (state, action) =>{ state.marketSize[9].marketSizeRecords[7].item_qty1 = action.payload },
u9_7pdateItem_status1 : (state, action) =>{ state.marketSize[9].marketSizeRecords[7].item_status1 = action.payload },
u9_7pdateItem_qty2 : (state, action) =>{ state.marketSize[9].marketSizeRecords[7].item_qty2 = action.payload },
u9_7pdateItem_status2 : (state, action) =>{ state.marketSize[9].marketSizeRecords[7].item_status2 = action.payload },
u9_7pdateMarket_size_id : (state, action) =>{ state.marketSize[9].marketSizeRecords[7].market_size_id = action.payload },


u9_8pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[9].marketSizeRecords[8].marketSizeRecordsID = action.payload },
u9_8pdateEgmed_consumption : (state, action) =>{ state.marketSize[9].marketSizeRecords[8].egmed_consumption = action.payload },
u9_8pdateTotal_consumption : (state, action) =>{ state.marketSize[9].marketSizeRecords[8].total_consumption = action.payload },
u9_8pdateCompetitor_id : (state, action) =>{ state.marketSize[9].marketSizeRecords[8].competitor_id = action.payload },
u9_8pdateItem_qty1 : (state, action) =>{ state.marketSize[9].marketSizeRecords[8].item_qty1 = action.payload },
u9_8pdateItem_status1 : (state, action) =>{ state.marketSize[9].marketSizeRecords[8].item_status1 = action.payload },
u9_8pdateItem_qty2 : (state, action) =>{ state.marketSize[9].marketSizeRecords[8].item_qty2 = action.payload },
u9_8pdateItem_status2 : (state, action) =>{ state.marketSize[9].marketSizeRecords[8].item_status2 = action.payload },
u9_8pdateMarket_size_id : (state, action) =>{ state.marketSize[9].marketSizeRecords[8].market_size_id = action.payload },


u9_9pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[9].marketSizeRecords[9].marketSizeRecordsID = action.payload },
u9_9pdateEgmed_consumption : (state, action) =>{ state.marketSize[9].marketSizeRecords[9].egmed_consumption = action.payload },
u9_9pdateTotal_consumption : (state, action) =>{ state.marketSize[9].marketSizeRecords[9].total_consumption = action.payload },
u9_9pdateCompetitor_id : (state, action) =>{ state.marketSize[9].marketSizeRecords[9].competitor_id = action.payload },
u9_9pdateItem_qty1 : (state, action) =>{ state.marketSize[9].marketSizeRecords[9].item_qty1 = action.payload },
u9_9pdateItem_status1 : (state, action) =>{ state.marketSize[9].marketSizeRecords[9].item_status1 = action.payload },
u9_9pdateItem_qty2 : (state, action) =>{ state.marketSize[9].marketSizeRecords[9].item_qty2 = action.payload },
u9_9pdateItem_status2 : (state, action) =>{ state.marketSize[9].marketSizeRecords[9].item_status2 = action.payload },
u9_9pdateMarket_size_id : (state, action) =>{ state.marketSize[9].marketSizeRecords[9].market_size_id = action.payload },


u9_10pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[9].marketSizeRecords[10].marketSizeRecordsID = action.payload },
u9_10pdateEgmed_consumption : (state, action) =>{ state.marketSize[9].marketSizeRecords[10].egmed_consumption = action.payload },
u9_10pdateTotal_consumption : (state, action) =>{ state.marketSize[9].marketSizeRecords[10].total_consumption = action.payload },
u9_10pdateCompetitor_id : (state, action) =>{ state.marketSize[9].marketSizeRecords[10].competitor_id = action.payload },
u9_10pdateItem_qty1 : (state, action) =>{ state.marketSize[9].marketSizeRecords[10].item_qty1 = action.payload },
u9_10pdateItem_status1 : (state, action) =>{ state.marketSize[9].marketSizeRecords[10].item_status1 = action.payload },
u9_10pdateItem_qty2 : (state, action) =>{ state.marketSize[9].marketSizeRecords[10].item_qty2 = action.payload },
u9_10pdateItem_status2 : (state, action) =>{ state.marketSize[9].marketSizeRecords[10].item_status2 = action.payload },
u9_10pdateMarket_size_id : (state, action) =>{ state.marketSize[9].marketSizeRecords[10].market_size_id = action.payload },


u9_11pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[9].marketSizeRecords[11].marketSizeRecordsID = action.payload },
u9_11pdateEgmed_consumption : (state, action) =>{ state.marketSize[9].marketSizeRecords[11].egmed_consumption = action.payload },
u9_11pdateTotal_consumption : (state, action) =>{ state.marketSize[9].marketSizeRecords[11].total_consumption = action.payload },
u9_11pdateCompetitor_id : (state, action) =>{ state.marketSize[9].marketSizeRecords[11].competitor_id = action.payload },
u9_11pdateItem_qty1 : (state, action) =>{ state.marketSize[9].marketSizeRecords[11].item_qty1 = action.payload },
u9_11pdateItem_status1 : (state, action) =>{ state.marketSize[9].marketSizeRecords[11].item_status1 = action.payload },
u9_11pdateItem_qty2 : (state, action) =>{ state.marketSize[9].marketSizeRecords[11].item_qty2 = action.payload },
u9_11pdateItem_status2 : (state, action) =>{ state.marketSize[9].marketSizeRecords[11].item_status2 = action.payload },
u9_11pdateMarket_size_id : (state, action) =>{ state.marketSize[9].marketSizeRecords[11].market_size_id = action.payload },


u9_12pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[9].marketSizeRecords[12].marketSizeRecordsID = action.payload },
u9_12pdateEgmed_consumption : (state, action) =>{ state.marketSize[9].marketSizeRecords[12].egmed_consumption = action.payload },
u9_12pdateTotal_consumption : (state, action) =>{ state.marketSize[9].marketSizeRecords[12].total_consumption = action.payload },
u9_12pdateCompetitor_id : (state, action) =>{ state.marketSize[9].marketSizeRecords[12].competitor_id = action.payload },
u9_12pdateItem_qty1 : (state, action) =>{ state.marketSize[9].marketSizeRecords[12].item_qty1 = action.payload },
u9_12pdateItem_status1 : (state, action) =>{ state.marketSize[9].marketSizeRecords[12].item_status1 = action.payload },
u9_12pdateItem_qty2 : (state, action) =>{ state.marketSize[9].marketSizeRecords[12].item_qty2 = action.payload },
u9_12pdateItem_status2 : (state, action) =>{ state.marketSize[9].marketSizeRecords[12].item_status2 = action.payload },
u9_12pdateMarket_size_id : (state, action) =>{ state.marketSize[9].marketSizeRecords[12].market_size_id = action.payload },


u9_13pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[9].marketSizeRecords[13].marketSizeRecordsID = action.payload },
u9_13pdateEgmed_consumption : (state, action) =>{ state.marketSize[9].marketSizeRecords[13].egmed_consumption = action.payload },
u9_13pdateTotal_consumption : (state, action) =>{ state.marketSize[9].marketSizeRecords[13].total_consumption = action.payload },
u9_13pdateCompetitor_id : (state, action) =>{ state.marketSize[9].marketSizeRecords[13].competitor_id = action.payload },
u9_13pdateItem_qty1 : (state, action) =>{ state.marketSize[9].marketSizeRecords[13].item_qty1 = action.payload },
u9_13pdateItem_status1 : (state, action) =>{ state.marketSize[9].marketSizeRecords[13].item_status1 = action.payload },
u9_13pdateItem_qty2 : (state, action) =>{ state.marketSize[9].marketSizeRecords[13].item_qty2 = action.payload },
u9_13pdateItem_status2 : (state, action) =>{ state.marketSize[9].marketSizeRecords[13].item_status2 = action.payload },
u9_13pdateMarket_size_id : (state, action) =>{ state.marketSize[9].marketSizeRecords[13].market_size_id = action.payload },


u9_14pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[9].marketSizeRecords[14].marketSizeRecordsID = action.payload },
u9_14pdateEgmed_consumption : (state, action) =>{ state.marketSize[9].marketSizeRecords[14].egmed_consumption = action.payload },
u9_14pdateTotal_consumption : (state, action) =>{ state.marketSize[9].marketSizeRecords[14].total_consumption = action.payload },
u9_14pdateCompetitor_id : (state, action) =>{ state.marketSize[9].marketSizeRecords[14].competitor_id = action.payload },
u9_14pdateItem_qty1 : (state, action) =>{ state.marketSize[9].marketSizeRecords[14].item_qty1 = action.payload },
u9_14pdateItem_status1 : (state, action) =>{ state.marketSize[9].marketSizeRecords[14].item_status1 = action.payload },
u9_14pdateItem_qty2 : (state, action) =>{ state.marketSize[9].marketSizeRecords[14].item_qty2 = action.payload },
u9_14pdateItem_status2 : (state, action) =>{ state.marketSize[9].marketSizeRecords[14].item_status2 = action.payload },
u9_14pdateMarket_size_id : (state, action) =>{ state.marketSize[9].marketSizeRecords[14].market_size_id = action.payload },


u9_15pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[9].marketSizeRecords[15].marketSizeRecordsID = action.payload },
u9_15pdateEgmed_consumption : (state, action) =>{ state.marketSize[9].marketSizeRecords[15].egmed_consumption = action.payload },
u9_15pdateTotal_consumption : (state, action) =>{ state.marketSize[9].marketSizeRecords[15].total_consumption = action.payload },
u9_15pdateCompetitor_id : (state, action) =>{ state.marketSize[9].marketSizeRecords[15].competitor_id = action.payload },
u9_15pdateItem_qty1 : (state, action) =>{ state.marketSize[9].marketSizeRecords[15].item_qty1 = action.payload },
u9_15pdateItem_status1 : (state, action) =>{ state.marketSize[9].marketSizeRecords[15].item_status1 = action.payload },
u9_15pdateItem_qty2 : (state, action) =>{ state.marketSize[9].marketSizeRecords[15].item_qty2 = action.payload },
u9_15pdateItem_status2 : (state, action) =>{ state.marketSize[9].marketSizeRecords[15].item_status2 = action.payload },
u9_15pdateMarket_size_id : (state, action) =>{ state.marketSize[9].marketSizeRecords[15].market_size_id = action.payload },


u9_16pdateMarketSizeRecordsID : (state, action) =>{ state.marketSize[9].marketSizeRecords[16].marketSizeRecordsID = action.payload },
u9_16pdateEgmed_consumption : (state, action) =>{ state.marketSize[9].marketSizeRecords[16].egmed_consumption = action.payload },
u9_16pdateTotal_consumption : (state, action) =>{ state.marketSize[9].marketSizeRecords[16].total_consumption = action.payload },
u9_16pdateCompetitor_id : (state, action) =>{ state.marketSize[9].marketSizeRecords[16].competitor_id = action.payload },
u9_16pdateItem_qty1 : (state, action) =>{ state.marketSize[9].marketSizeRecords[16].item_qty1 = action.payload },
u9_16pdateItem_status1 : (state, action) =>{ state.marketSize[9].marketSizeRecords[16].item_status1 = action.payload },
u9_16pdateItem_qty2 : (state, action) =>{ state.marketSize[9].marketSizeRecords[16].item_qty2 = action.payload },
u9_16pdateItem_status2 : (state, action) =>{ state.marketSize[9].marketSizeRecords[16].item_status2 = action.payload },
u9_16pdateMarket_size_id : (state, action) =>{ state.marketSize[9].marketSizeRecords[16].market_size_id = action.payload },


}})

export const { incremented, decremented } = counterSlice.actions
export const {
  updateUser_Id,
  updateBl_Id,
  updateBu_Id,
  updateAccount_Type_Id,
  updateAccount_Id,
  updateAccount_Name,
  updateAccount_Area,
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
  updateMarketSizeRowID,
  updateSupplier_id,
  updateProduct_family_id,
  updateItem_group_id,
  updateMarket_potential_id,
  updateMarketSizeRecordsID,
  updateEgmed_consumption,
  updateTotal_consumption,
  updateCompetitor_id,
  updateItem_qty1,
  updateItem_status1,
  updateItem_qty2,
  updateItem_status2,
  updateMarket_size_id,

  u0pdateMarketSizeRowID	,
  u0pdateSupplier_id	,
  u0pdateProduct_family_id	,
  u0pdateItem_group_id	,
  u0pdateMarket_potential_id	,
  u1pdateMarketSizeRowID	,
  u1pdateSupplier_id	,
  u1pdateProduct_family_id	,
  u1pdateItem_group_id	,
  u1pdateMarket_potential_id	,
  u2pdateMarketSizeRowID	,
  u2pdateSupplier_id	,
  u2pdateProduct_family_id	,
  u2pdateItem_group_id	,
  u2pdateMarket_potential_id	,
  u3pdateMarketSizeRowID	,
  u3pdateSupplier_id	,
  u3pdateProduct_family_id	,
  u3pdateItem_group_id	,
  u3pdateMarket_potential_id	,
  u4pdateMarketSizeRowID	,
  u4pdateSupplier_id	,
  u4pdateProduct_family_id	,
  u4pdateItem_group_id	,
  u4pdateMarket_potential_id	,
  u5pdateMarketSizeRowID	,
  u5pdateSupplier_id	,
  u5pdateProduct_family_id	,
  u5pdateItem_group_id	,
  u5pdateMarket_potential_id	,
  u6pdateMarketSizeRowID	,
  u6pdateSupplier_id	,
  u6pdateProduct_family_id	,
  u6pdateItem_group_id	,
  u6pdateMarket_potential_id	,
  u7pdateMarketSizeRowID	,
  u7pdateSupplier_id	,
  u7pdateProduct_family_id	,
  u7pdateItem_group_id	,
  u7pdateMarket_potential_id	,
  u8pdateMarketSizeRowID	,
  u8pdateSupplier_id	,
  u8pdateProduct_family_id	,
  u8pdateItem_group_id	,
  u8pdateMarket_potential_id	,
  u9pdateMarketSizeRowID	,
  u9pdateSupplier_id	,
  u9pdateProduct_family_id	,
  u9pdateItem_group_id	,
  u9pdateMarket_potential_id	,
  u0_0pdateMarketSizeRecordsID 	,
  u0_0pdateEgmed_consumption 	,
  u0_0pdateTotal_consumption 	,
  u0_0pdateCompetitor_id 	,
  u0_0pdateItem_qty1 	,
  u0_0pdateItem_status1 	,
  u0_0pdateItem_qty2 	,
  u0_0pdateItem_status2 	,
  u0_0pdateMarket_size_id 	,
u0_1pdateMarketSizeRecordsID 	,
u0_1pdateEgmed_consumption 	,
u0_1pdateTotal_consumption 	,
u0_1pdateCompetitor_id 	,
u0_1pdateItem_qty1 	,
u0_1pdateItem_status1 	,
u0_1pdateItem_qty2 	,
u0_1pdateItem_status2 	,
u0_1pdateMarket_size_id 	,
u0_2pdateMarketSizeRecordsID 	,
u0_2pdateEgmed_consumption 	,
u0_2pdateTotal_consumption 	,
u0_2pdateCompetitor_id 	,
u0_2pdateItem_qty1 	,
u0_2pdateItem_status1 	,
u0_2pdateItem_qty2 	,
u0_2pdateItem_status2 	,
u0_2pdateMarket_size_id 	,
u0_3pdateMarketSizeRecordsID 	,
u0_3pdateEgmed_consumption 	,
u0_3pdateTotal_consumption 	,
u0_3pdateCompetitor_id 	,
u0_3pdateItem_qty1 	,
u0_3pdateItem_status1 	,
u0_3pdateItem_qty2 	,
u0_3pdateItem_status2 	,
u0_3pdateMarket_size_id 	,
u0_4pdateMarketSizeRecordsID 	,
u0_4pdateEgmed_consumption 	,
u0_4pdateTotal_consumption 	,
u0_4pdateCompetitor_id 	,
u0_4pdateItem_qty1 	,
u0_4pdateItem_status1 	,
u0_4pdateItem_qty2 	,
u0_4pdateItem_status2 	,
u0_4pdateMarket_size_id 	,
u0_5pdateMarketSizeRecordsID 	,
u0_5pdateEgmed_consumption 	,
u0_5pdateTotal_consumption 	,
u0_5pdateCompetitor_id 	,
u0_5pdateItem_qty1 	,
u0_5pdateItem_status1 	,
u0_5pdateItem_qty2 	,
u0_5pdateItem_status2 	,
u0_5pdateMarket_size_id 	,
u0_6pdateMarketSizeRecordsID 	,
u0_6pdateEgmed_consumption 	,
u0_6pdateTotal_consumption 	,
u0_6pdateCompetitor_id 	,
u0_6pdateItem_qty1 	,
u0_6pdateItem_status1 	,
u0_6pdateItem_qty2 	,
u0_6pdateItem_status2 	,
u0_6pdateMarket_size_id 	,
u0_7pdateMarketSizeRecordsID 	,
u0_7pdateEgmed_consumption 	,
u0_7pdateTotal_consumption 	,
u0_7pdateCompetitor_id 	,
u0_7pdateItem_qty1 	,
u0_7pdateItem_status1 	,
u0_7pdateItem_qty2 	,
u0_7pdateItem_status2 	,
u0_7pdateMarket_size_id 	,
u0_8pdateMarketSizeRecordsID 	,
u0_8pdateEgmed_consumption 	,
u0_8pdateTotal_consumption 	,
u0_8pdateCompetitor_id 	,
u0_8pdateItem_qty1 	,
u0_8pdateItem_status1 	,
u0_8pdateItem_qty2 	,
u0_8pdateItem_status2 	,
u0_8pdateMarket_size_id 	,
u0_9pdateMarketSizeRecordsID 	,
u0_9pdateEgmed_consumption 	,
u0_9pdateTotal_consumption 	,
u0_9pdateCompetitor_id 	,
u0_9pdateItem_qty1 	,
u0_9pdateItem_status1 	,
u0_9pdateItem_qty2 	,
u0_9pdateItem_status2 	,
u0_9pdateMarket_size_id 	,
u0_10pdateMarketSizeRecordsID 	,
u0_10pdateEgmed_consumption 	,
u0_10pdateTotal_consumption 	,
u0_10pdateCompetitor_id 	,
u0_10pdateItem_qty1 	,
u0_10pdateItem_status1 	,
u0_10pdateItem_qty2 	,
u0_10pdateItem_status2 	,
u0_10pdateMarket_size_id 	,
u0_11pdateMarketSizeRecordsID 	,
u0_11pdateEgmed_consumption 	,
u0_11pdateTotal_consumption 	,
u0_11pdateCompetitor_id 	,
u0_11pdateItem_qty1 	,
u0_11pdateItem_status1 	,
u0_11pdateItem_qty2 	,
u0_11pdateItem_status2 	,
u0_11pdateMarket_size_id 	,
u0_12pdateMarketSizeRecordsID 	,
u0_12pdateEgmed_consumption 	,
u0_12pdateTotal_consumption 	,
u0_12pdateCompetitor_id 	,
u0_12pdateItem_qty1 	,
u0_12pdateItem_status1 	,
u0_12pdateItem_qty2 	,
u0_12pdateItem_status2 	,
u0_12pdateMarket_size_id 	,
u0_13pdateMarketSizeRecordsID 	,
u0_13pdateEgmed_consumption 	,
u0_13pdateTotal_consumption 	,
u0_13pdateCompetitor_id 	,
u0_13pdateItem_qty1 	,
u0_13pdateItem_status1 	,
u0_13pdateItem_qty2 	,
u0_13pdateItem_status2 	,
u0_13pdateMarket_size_id 	,
u0_14pdateMarketSizeRecordsID 	,
u0_14pdateEgmed_consumption 	,
u0_14pdateTotal_consumption 	,
u0_14pdateCompetitor_id 	,
u0_14pdateItem_qty1 	,
u0_14pdateItem_status1 	,
u0_14pdateItem_qty2 	,
u0_14pdateItem_status2 	,
u0_14pdateMarket_size_id 	,
u0_15pdateMarketSizeRecordsID 	,
u0_15pdateEgmed_consumption 	,
u0_15pdateTotal_consumption 	,
u0_15pdateCompetitor_id 	,
u0_15pdateItem_qty1 	,
u0_15pdateItem_status1 	,
u0_15pdateItem_qty2 	,
u0_15pdateItem_status2 	,
u0_15pdateMarket_size_id 	,
u0_16pdateMarketSizeRecordsID 	,
u0_16pdateEgmed_consumption 	,
u0_16pdateTotal_consumption 	,
u0_16pdateCompetitor_id 	,
u0_16pdateItem_qty1 	,
u0_16pdateItem_status1 	,
u0_16pdateItem_qty2 	,
u0_16pdateItem_status2 	,
u0_16pdateMarket_size_id 	,
u1_0pdateMarketSizeRecordsID 	,
u1_0pdateEgmed_consumption 	,
u1_0pdateTotal_consumption 	,
u1_0pdateCompetitor_id 	,
u1_0pdateItem_qty1 	,
u1_0pdateItem_status1 	,
u1_0pdateItem_qty2 	,
u1_0pdateItem_status2 	,
u1_0pdateMarket_size_id 	,
u1_1pdateMarketSizeRecordsID 	,
u1_1pdateEgmed_consumption 	,
u1_1pdateTotal_consumption 	,
u1_1pdateCompetitor_id 	,
u1_1pdateItem_qty1 	,
u1_1pdateItem_status1 	,
u1_1pdateItem_qty2 	,
u1_1pdateItem_status2 	,
u1_1pdateMarket_size_id 	,
u1_2pdateMarketSizeRecordsID 	,
u1_2pdateEgmed_consumption 	,
u1_2pdateTotal_consumption 	,
u1_2pdateCompetitor_id 	,
u1_2pdateItem_qty1 	,
u1_2pdateItem_status1 	,
u1_2pdateItem_qty2 	,
u1_2pdateItem_status2 	,
u1_2pdateMarket_size_id 	,
u1_3pdateMarketSizeRecordsID 	,
u1_3pdateEgmed_consumption 	,
u1_3pdateTotal_consumption 	,
u1_3pdateCompetitor_id 	,
u1_3pdateItem_qty1 	,
u1_3pdateItem_status1 	,
u1_3pdateItem_qty2 	,
u1_3pdateItem_status2 	,
u1_3pdateMarket_size_id 	,
u1_4pdateMarketSizeRecordsID 	,
u1_4pdateEgmed_consumption 	,
u1_4pdateTotal_consumption 	,
u1_4pdateCompetitor_id 	,
u1_4pdateItem_qty1 	,
u1_4pdateItem_status1 	,
u1_4pdateItem_qty2 	,
u1_4pdateItem_status2 	,
u1_4pdateMarket_size_id 	,
u1_5pdateMarketSizeRecordsID 	,
u1_5pdateEgmed_consumption 	,
u1_5pdateTotal_consumption 	,
u1_5pdateCompetitor_id 	,
u1_5pdateItem_qty1 	,
u1_5pdateItem_status1 	,
u1_5pdateItem_qty2 	,
u1_5pdateItem_status2 	,
u1_5pdateMarket_size_id 	,
u1_6pdateMarketSizeRecordsID 	,
u1_6pdateEgmed_consumption 	,
u1_6pdateTotal_consumption 	,
u1_6pdateCompetitor_id 	,
u1_6pdateItem_qty1 	,
u1_6pdateItem_status1 	,
u1_6pdateItem_qty2 	,
u1_6pdateItem_status2 	,
u1_6pdateMarket_size_id 	,
u1_7pdateMarketSizeRecordsID 	,
u1_7pdateEgmed_consumption 	,
u1_7pdateTotal_consumption 	,
u1_7pdateCompetitor_id 	,
u1_7pdateItem_qty1 	,
u1_7pdateItem_status1 	,
u1_7pdateItem_qty2 	,
u1_7pdateItem_status2 	,
u1_7pdateMarket_size_id 	,
u1_8pdateMarketSizeRecordsID 	,
u1_8pdateEgmed_consumption 	,
u1_8pdateTotal_consumption 	,
u1_8pdateCompetitor_id 	,
u1_8pdateItem_qty1 	,
u1_8pdateItem_status1 	,
u1_8pdateItem_qty2 	,
u1_8pdateItem_status2 	,
u1_8pdateMarket_size_id 	,
u1_9pdateMarketSizeRecordsID 	,
u1_9pdateEgmed_consumption 	,
u1_9pdateTotal_consumption 	,
u1_9pdateCompetitor_id 	,
u1_9pdateItem_qty1 	,
u1_9pdateItem_status1 	,
u1_9pdateItem_qty2 	,
u1_9pdateItem_status2 	,
u1_9pdateMarket_size_id 	,
u1_10pdateMarketSizeRecordsID 	,
u1_10pdateEgmed_consumption 	,
u1_10pdateTotal_consumption 	,
u1_10pdateCompetitor_id 	,
u1_10pdateItem_qty1 	,
u1_10pdateItem_status1 	,
u1_10pdateItem_qty2 	,
u1_10pdateItem_status2 	,
u1_10pdateMarket_size_id 	,
u1_11pdateMarketSizeRecordsID 	,
u1_11pdateEgmed_consumption 	,
u1_11pdateTotal_consumption 	,
u1_11pdateCompetitor_id 	,
u1_11pdateItem_qty1 	,
u1_11pdateItem_status1 	,
u1_11pdateItem_qty2 	,
u1_11pdateItem_status2 	,
u1_11pdateMarket_size_id 	,
u1_12pdateMarketSizeRecordsID 	,
u1_12pdateEgmed_consumption 	,
u1_12pdateTotal_consumption 	,
u1_12pdateCompetitor_id 	,
u1_12pdateItem_qty1 	,
u1_12pdateItem_status1 	,
u1_12pdateItem_qty2 	,
u1_12pdateItem_status2 	,
u1_12pdateMarket_size_id 	,
u1_13pdateMarketSizeRecordsID 	,
u1_13pdateEgmed_consumption 	,
u1_13pdateTotal_consumption 	,
u1_13pdateCompetitor_id 	,
u1_13pdateItem_qty1 	,
u1_13pdateItem_status1 	,
u1_13pdateItem_qty2 	,
u1_13pdateItem_status2 	,
u1_13pdateMarket_size_id 	,
u1_14pdateMarketSizeRecordsID 	,
u1_14pdateEgmed_consumption 	,
u1_14pdateTotal_consumption 	,
u1_14pdateCompetitor_id 	,
u1_14pdateItem_qty1 	,
u1_14pdateItem_status1 	,
u1_14pdateItem_qty2 	,
u1_14pdateItem_status2 	,
u1_14pdateMarket_size_id 	,
u1_15pdateMarketSizeRecordsID 	,
u1_15pdateEgmed_consumption 	,
u1_15pdateTotal_consumption 	,
u1_15pdateCompetitor_id 	,
u1_15pdateItem_qty1 	,
u1_15pdateItem_status1 	,
u1_15pdateItem_qty2 	,
u1_15pdateItem_status2 	,
u1_15pdateMarket_size_id 	,
u1_16pdateMarketSizeRecordsID 	,
u1_16pdateEgmed_consumption 	,
u1_16pdateTotal_consumption 	,
u1_16pdateCompetitor_id 	,
u1_16pdateItem_qty1 	,
u1_16pdateItem_status1 	,
u1_16pdateItem_qty2 	,
u1_16pdateItem_status2 	,
u1_16pdateMarket_size_id 	,
u2_0pdateMarketSizeRecordsID 	,
u2_0pdateEgmed_consumption 	,
u2_0pdateTotal_consumption 	,
u2_0pdateCompetitor_id 	,
u2_0pdateItem_qty1 	,
u2_0pdateItem_status1 	,
u2_0pdateItem_qty2 	,
u2_0pdateItem_status2 	,
u2_0pdateMarket_size_id 	,
u2_1pdateMarketSizeRecordsID 	,
u2_1pdateEgmed_consumption 	,
u2_1pdateTotal_consumption 	,
u2_1pdateCompetitor_id 	,
u2_1pdateItem_qty1 	,
u2_1pdateItem_status1 	,
u2_1pdateItem_qty2 	,
u2_1pdateItem_status2 	,
u2_1pdateMarket_size_id 	,
u2_2pdateMarketSizeRecordsID 	,
u2_2pdateEgmed_consumption 	,
u2_2pdateTotal_consumption 	,
u2_2pdateCompetitor_id 	,
u2_2pdateItem_qty1 	,
u2_2pdateItem_status1 	,
u2_2pdateItem_qty2 	,
u2_2pdateItem_status2 	,
u2_2pdateMarket_size_id 	,
u2_3pdateMarketSizeRecordsID 	,
u2_3pdateEgmed_consumption 	,
u2_3pdateTotal_consumption 	,
u2_3pdateCompetitor_id 	,
u2_3pdateItem_qty1 	,
u2_3pdateItem_status1 	,
u2_3pdateItem_qty2 	,
u2_3pdateItem_status2 	,
u2_3pdateMarket_size_id 	,
u2_4pdateMarketSizeRecordsID 	,
u2_4pdateEgmed_consumption 	,
u2_4pdateTotal_consumption 	,
u2_4pdateCompetitor_id 	,
u2_4pdateItem_qty1 	,
u2_4pdateItem_status1 	,
u2_4pdateItem_qty2 	,
u2_4pdateItem_status2 	,
u2_4pdateMarket_size_id 	,
u2_5pdateMarketSizeRecordsID 	,
u2_5pdateEgmed_consumption 	,
u2_5pdateTotal_consumption 	,
u2_5pdateCompetitor_id 	,
u2_5pdateItem_qty1 	,
u2_5pdateItem_status1 	,
u2_5pdateItem_qty2 	,
u2_5pdateItem_status2 	,
u2_5pdateMarket_size_id 	,
u2_6pdateMarketSizeRecordsID 	,
u2_6pdateEgmed_consumption 	,
u2_6pdateTotal_consumption 	,
u2_6pdateCompetitor_id 	,
u2_6pdateItem_qty1 	,
u2_6pdateItem_status1 	,
u2_6pdateItem_qty2 	,
u2_6pdateItem_status2 	,
u2_6pdateMarket_size_id 	,
u2_7pdateMarketSizeRecordsID 	,
u2_7pdateEgmed_consumption 	,
u2_7pdateTotal_consumption 	,
u2_7pdateCompetitor_id 	,
u2_7pdateItem_qty1 	,
u2_7pdateItem_status1 	,
u2_7pdateItem_qty2 	,
u2_7pdateItem_status2 	,
u2_7pdateMarket_size_id 	,
u2_8pdateMarketSizeRecordsID 	,
u2_8pdateEgmed_consumption 	,
u2_8pdateTotal_consumption 	,
u2_8pdateCompetitor_id 	,
u2_8pdateItem_qty1 	,
u2_8pdateItem_status1 	,
u2_8pdateItem_qty2 	,
u2_8pdateItem_status2 	,
u2_8pdateMarket_size_id 	,
u2_9pdateMarketSizeRecordsID 	,
u2_9pdateEgmed_consumption 	,
u2_9pdateTotal_consumption 	,
u2_9pdateCompetitor_id 	,
u2_9pdateItem_qty1 	,
u2_9pdateItem_status1 	,
u2_9pdateItem_qty2 	,
u2_9pdateItem_status2 	,
u2_9pdateMarket_size_id 	,
u2_10pdateMarketSizeRecordsID 	,
u2_10pdateEgmed_consumption 	,
u2_10pdateTotal_consumption 	,
u2_10pdateCompetitor_id 	,
u2_10pdateItem_qty1 	,
u2_10pdateItem_status1 	,
u2_10pdateItem_qty2 	,
u2_10pdateItem_status2 	,
u2_10pdateMarket_size_id 	,
u2_11pdateMarketSizeRecordsID 	,
u2_11pdateEgmed_consumption 	,
u2_11pdateTotal_consumption 	,
u2_11pdateCompetitor_id 	,
u2_11pdateItem_qty1 	,
u2_11pdateItem_status1 	,
u2_11pdateItem_qty2 	,
u2_11pdateItem_status2 	,
u2_11pdateMarket_size_id 	,
u2_12pdateMarketSizeRecordsID 	,
u2_12pdateEgmed_consumption 	,
u2_12pdateTotal_consumption 	,
u2_12pdateCompetitor_id 	,
u2_12pdateItem_qty1 	,
u2_12pdateItem_status1 	,
u2_12pdateItem_qty2 	,
u2_12pdateItem_status2 	,
u2_12pdateMarket_size_id 	,
u2_13pdateMarketSizeRecordsID 	,
u2_13pdateEgmed_consumption 	,
u2_13pdateTotal_consumption 	,
u2_13pdateCompetitor_id 	,
u2_13pdateItem_qty1 	,
u2_13pdateItem_status1 	,
u2_13pdateItem_qty2 	,
u2_13pdateItem_status2 	,
u2_13pdateMarket_size_id 	,
u2_14pdateMarketSizeRecordsID 	,
u2_14pdateEgmed_consumption 	,
u2_14pdateTotal_consumption 	,
u2_14pdateCompetitor_id 	,
u2_14pdateItem_qty1 	,
u2_14pdateItem_status1 	,
u2_14pdateItem_qty2 	,
u2_14pdateItem_status2 	,
u2_14pdateMarket_size_id 	,
u2_15pdateMarketSizeRecordsID 	,
u2_15pdateEgmed_consumption 	,
u2_15pdateTotal_consumption 	,
u2_15pdateCompetitor_id 	,
u2_15pdateItem_qty1 	,
u2_15pdateItem_status1 	,
u2_15pdateItem_qty2 	,
u2_15pdateItem_status2 	,
u2_15pdateMarket_size_id 	,
u2_16pdateMarketSizeRecordsID 	,
u2_16pdateEgmed_consumption 	,
u2_16pdateTotal_consumption 	,
u2_16pdateCompetitor_id 	,
u2_16pdateItem_qty1 	,
u2_16pdateItem_status1 	,
u2_16pdateItem_qty2 	,
u2_16pdateItem_status2 	,
u2_16pdateMarket_size_id 	,
u3_0pdateMarketSizeRecordsID 	,
u3_0pdateEgmed_consumption 	,
u3_0pdateTotal_consumption 	,
u3_0pdateCompetitor_id 	,
u3_0pdateItem_qty1 	,
u3_0pdateItem_status1 	,
u3_0pdateItem_qty2 	,
u3_0pdateItem_status2 	,
u3_0pdateMarket_size_id 	,
u3_1pdateMarketSizeRecordsID 	,
u3_1pdateEgmed_consumption 	,
u3_1pdateTotal_consumption 	,
u3_1pdateCompetitor_id 	,
u3_1pdateItem_qty1 	,
u3_1pdateItem_status1 	,
u3_1pdateItem_qty2 	,
u3_1pdateItem_status2 	,
u3_1pdateMarket_size_id 	,
u3_2pdateMarketSizeRecordsID 	,
u3_2pdateEgmed_consumption 	,
u3_2pdateTotal_consumption 	,
u3_2pdateCompetitor_id 	,
u3_2pdateItem_qty1 	,
u3_2pdateItem_status1 	,
u3_2pdateItem_qty2 	,
u3_2pdateItem_status2 	,
u3_2pdateMarket_size_id 	,
u3_3pdateMarketSizeRecordsID 	,
u3_3pdateEgmed_consumption 	,
u3_3pdateTotal_consumption 	,
u3_3pdateCompetitor_id 	,
u3_3pdateItem_qty1 	,
u3_3pdateItem_status1 	,
u3_3pdateItem_qty2 	,
u3_3pdateItem_status2 	,
u3_3pdateMarket_size_id 	,
u3_4pdateMarketSizeRecordsID 	,
u3_4pdateEgmed_consumption 	,
u3_4pdateTotal_consumption 	,
u3_4pdateCompetitor_id 	,
u3_4pdateItem_qty1 	,
u3_4pdateItem_status1 	,
u3_4pdateItem_qty2 	,
u3_4pdateItem_status2 	,
u3_4pdateMarket_size_id 	,
u3_5pdateMarketSizeRecordsID 	,
u3_5pdateEgmed_consumption 	,
u3_5pdateTotal_consumption 	,
u3_5pdateCompetitor_id 	,
u3_5pdateItem_qty1 	,
u3_5pdateItem_status1 	,
u3_5pdateItem_qty2 	,
u3_5pdateItem_status2 	,
u3_5pdateMarket_size_id 	,
u3_6pdateMarketSizeRecordsID 	,
u3_6pdateEgmed_consumption 	,
u3_6pdateTotal_consumption 	,
u3_6pdateCompetitor_id 	,
u3_6pdateItem_qty1 	,
u3_6pdateItem_status1 	,
u3_6pdateItem_qty2 	,
u3_6pdateItem_status2 	,
u3_6pdateMarket_size_id 	,
u3_7pdateMarketSizeRecordsID 	,
u3_7pdateEgmed_consumption 	,
u3_7pdateTotal_consumption 	,
u3_7pdateCompetitor_id 	,
u3_7pdateItem_qty1 	,
u3_7pdateItem_status1 	,
u3_7pdateItem_qty2 	,
u3_7pdateItem_status2 	,
u3_7pdateMarket_size_id 	,
u3_8pdateMarketSizeRecordsID 	,
u3_8pdateEgmed_consumption 	,
u3_8pdateTotal_consumption 	,
u3_8pdateCompetitor_id 	,
u3_8pdateItem_qty1 	,
u3_8pdateItem_status1 	,
u3_8pdateItem_qty2 	,
u3_8pdateItem_status2 	,
u3_8pdateMarket_size_id 	,
u3_9pdateMarketSizeRecordsID 	,
u3_9pdateEgmed_consumption 	,
u3_9pdateTotal_consumption 	,
u3_9pdateCompetitor_id 	,
u3_9pdateItem_qty1 	,
u3_9pdateItem_status1 	,
u3_9pdateItem_qty2 	,
u3_9pdateItem_status2 	,
u3_9pdateMarket_size_id 	,
u3_10pdateMarketSizeRecordsID 	,
u3_10pdateEgmed_consumption 	,
u3_10pdateTotal_consumption 	,
u3_10pdateCompetitor_id 	,
u3_10pdateItem_qty1 	,
u3_10pdateItem_status1 	,
u3_10pdateItem_qty2 	,
u3_10pdateItem_status2 	,
u3_10pdateMarket_size_id 	,
u3_11pdateMarketSizeRecordsID 	,
u3_11pdateEgmed_consumption 	,
u3_11pdateTotal_consumption 	,
u3_11pdateCompetitor_id 	,
u3_11pdateItem_qty1 	,
u3_11pdateItem_status1 	,
u3_11pdateItem_qty2 	,
u3_11pdateItem_status2 	,
u3_11pdateMarket_size_id 	,
u3_12pdateMarketSizeRecordsID 	,
u3_12pdateEgmed_consumption 	,
u3_12pdateTotal_consumption 	,
u3_12pdateCompetitor_id 	,
u3_12pdateItem_qty1 	,
u3_12pdateItem_status1 	,
u3_12pdateItem_qty2 	,
u3_12pdateItem_status2 	,
u3_12pdateMarket_size_id 	,
u3_13pdateMarketSizeRecordsID 	,
u3_13pdateEgmed_consumption 	,
u3_13pdateTotal_consumption 	,
u3_13pdateCompetitor_id 	,
u3_13pdateItem_qty1 	,
u3_13pdateItem_status1 	,
u3_13pdateItem_qty2 	,
u3_13pdateItem_status2 	,
u3_13pdateMarket_size_id 	,
u3_14pdateMarketSizeRecordsID 	,
u3_14pdateEgmed_consumption 	,
u3_14pdateTotal_consumption 	,
u3_14pdateCompetitor_id 	,
u3_14pdateItem_qty1 	,
u3_14pdateItem_status1 	,
u3_14pdateItem_qty2 	,
u3_14pdateItem_status2 	,
u3_14pdateMarket_size_id 	,
u3_15pdateMarketSizeRecordsID 	,
u3_15pdateEgmed_consumption 	,
u3_15pdateTotal_consumption 	,
u3_15pdateCompetitor_id 	,
u3_15pdateItem_qty1 	,
u3_15pdateItem_status1 	,
u3_15pdateItem_qty2 	,
u3_15pdateItem_status2 	,
u3_15pdateMarket_size_id 	,
u3_16pdateMarketSizeRecordsID 	,
u3_16pdateEgmed_consumption 	,
u3_16pdateTotal_consumption 	,
u3_16pdateCompetitor_id 	,
u3_16pdateItem_qty1 	,
u3_16pdateItem_status1 	,
u3_16pdateItem_qty2 	,
u3_16pdateItem_status2 	,
u3_16pdateMarket_size_id 	,
u4_0pdateMarketSizeRecordsID 	,
u4_0pdateEgmed_consumption 	,
u4_0pdateTotal_consumption 	,
u4_0pdateCompetitor_id 	,
u4_0pdateItem_qty1 	,
u4_0pdateItem_status1 	,
u4_0pdateItem_qty2 	,
u4_0pdateItem_status2 	,
u4_0pdateMarket_size_id 	,
u4_1pdateMarketSizeRecordsID 	,
u4_1pdateEgmed_consumption 	,
u4_1pdateTotal_consumption 	,
u4_1pdateCompetitor_id 	,
u4_1pdateItem_qty1 	,
u4_1pdateItem_status1 	,
u4_1pdateItem_qty2 	,
u4_1pdateItem_status2 	,
u4_1pdateMarket_size_id 	,
u4_2pdateMarketSizeRecordsID 	,
u4_2pdateEgmed_consumption 	,
u4_2pdateTotal_consumption 	,
u4_2pdateCompetitor_id 	,
u4_2pdateItem_qty1 	,
u4_2pdateItem_status1 	,
u4_2pdateItem_qty2 	,
u4_2pdateItem_status2 	,
u4_2pdateMarket_size_id 	,
u4_3pdateMarketSizeRecordsID 	,
u4_3pdateEgmed_consumption 	,
u4_3pdateTotal_consumption 	,
u4_3pdateCompetitor_id 	,
u4_3pdateItem_qty1 	,
u4_3pdateItem_status1 	,
u4_3pdateItem_qty2 	,
u4_3pdateItem_status2 	,
u4_3pdateMarket_size_id 	,
u4_4pdateMarketSizeRecordsID 	,
u4_4pdateEgmed_consumption 	,
u4_4pdateTotal_consumption 	,
u4_4pdateCompetitor_id 	,
u4_4pdateItem_qty1 	,
u4_4pdateItem_status1 	,
u4_4pdateItem_qty2 	,
u4_4pdateItem_status2 	,
u4_4pdateMarket_size_id 	,
u4_5pdateMarketSizeRecordsID 	,
u4_5pdateEgmed_consumption 	,
u4_5pdateTotal_consumption 	,
u4_5pdateCompetitor_id 	,
u4_5pdateItem_qty1 	,
u4_5pdateItem_status1 	,
u4_5pdateItem_qty2 	,
u4_5pdateItem_status2 	,
u4_5pdateMarket_size_id 	,
u4_6pdateMarketSizeRecordsID 	,
u4_6pdateEgmed_consumption 	,
u4_6pdateTotal_consumption 	,
u4_6pdateCompetitor_id 	,
u4_6pdateItem_qty1 	,
u4_6pdateItem_status1 	,
u4_6pdateItem_qty2 	,
u4_6pdateItem_status2 	,
u4_6pdateMarket_size_id 	,
u4_7pdateMarketSizeRecordsID 	,
u4_7pdateEgmed_consumption 	,
u4_7pdateTotal_consumption 	,
u4_7pdateCompetitor_id 	,
u4_7pdateItem_qty1 	,
u4_7pdateItem_status1 	,
u4_7pdateItem_qty2 	,
u4_7pdateItem_status2 	,
u4_7pdateMarket_size_id 	,
u4_8pdateMarketSizeRecordsID 	,
u4_8pdateEgmed_consumption 	,
u4_8pdateTotal_consumption 	,
u4_8pdateCompetitor_id 	,
u4_8pdateItem_qty1 	,
u4_8pdateItem_status1 	,
u4_8pdateItem_qty2 	,
u4_8pdateItem_status2 	,
u4_8pdateMarket_size_id 	,
u4_9pdateMarketSizeRecordsID 	,
u4_9pdateEgmed_consumption 	,
u4_9pdateTotal_consumption 	,
u4_9pdateCompetitor_id 	,
u4_9pdateItem_qty1 	,
u4_9pdateItem_status1 	,
u4_9pdateItem_qty2 	,
u4_9pdateItem_status2 	,
u4_9pdateMarket_size_id 	,
u4_10pdateMarketSizeRecordsID 	,
u4_10pdateEgmed_consumption 	,
u4_10pdateTotal_consumption 	,
u4_10pdateCompetitor_id 	,
u4_10pdateItem_qty1 	,
u4_10pdateItem_status1 	,
u4_10pdateItem_qty2 	,
u4_10pdateItem_status2 	,
u4_10pdateMarket_size_id 	,
u4_11pdateMarketSizeRecordsID 	,
u4_11pdateEgmed_consumption 	,
u4_11pdateTotal_consumption 	,
u4_11pdateCompetitor_id 	,
u4_11pdateItem_qty1 	,
u4_11pdateItem_status1 	,
u4_11pdateItem_qty2 	,
u4_11pdateItem_status2 	,
u4_11pdateMarket_size_id 	,
u4_12pdateMarketSizeRecordsID 	,
u4_12pdateEgmed_consumption 	,
u4_12pdateTotal_consumption 	,
u4_12pdateCompetitor_id 	,
u4_12pdateItem_qty1 	,
u4_12pdateItem_status1 	,
u4_12pdateItem_qty2 	,
u4_12pdateItem_status2 	,
u4_12pdateMarket_size_id 	,
u4_13pdateMarketSizeRecordsID 	,
u4_13pdateEgmed_consumption 	,
u4_13pdateTotal_consumption 	,
u4_13pdateCompetitor_id 	,
u4_13pdateItem_qty1 	,
u4_13pdateItem_status1 	,
u4_13pdateItem_qty2 	,
u4_13pdateItem_status2 	,
u4_13pdateMarket_size_id 	,
u4_14pdateMarketSizeRecordsID 	,
u4_14pdateEgmed_consumption 	,
u4_14pdateTotal_consumption 	,
u4_14pdateCompetitor_id 	,
u4_14pdateItem_qty1 	,
u4_14pdateItem_status1 	,
u4_14pdateItem_qty2 	,
u4_14pdateItem_status2 	,
u4_14pdateMarket_size_id 	,
u4_15pdateMarketSizeRecordsID 	,
u4_15pdateEgmed_consumption 	,
u4_15pdateTotal_consumption 	,
u4_15pdateCompetitor_id 	,
u4_15pdateItem_qty1 	,
u4_15pdateItem_status1 	,
u4_15pdateItem_qty2 	,
u4_15pdateItem_status2 	,
u4_15pdateMarket_size_id 	,
u4_16pdateMarketSizeRecordsID 	,
u4_16pdateEgmed_consumption 	,
u4_16pdateTotal_consumption 	,
u4_16pdateCompetitor_id 	,
u4_16pdateItem_qty1 	,
u4_16pdateItem_status1 	,
u4_16pdateItem_qty2 	,
u4_16pdateItem_status2 	,
u4_16pdateMarket_size_id 	,
u5_0pdateMarketSizeRecordsID 	,
u5_0pdateEgmed_consumption 	,
u5_0pdateTotal_consumption 	,
u5_0pdateCompetitor_id 	,
u5_0pdateItem_qty1 	,
u5_0pdateItem_status1 	,
u5_0pdateItem_qty2 	,
u5_0pdateItem_status2 	,
u5_0pdateMarket_size_id 	,
u5_1pdateMarketSizeRecordsID 	,
u5_1pdateEgmed_consumption 	,
u5_1pdateTotal_consumption 	,
u5_1pdateCompetitor_id 	,
u5_1pdateItem_qty1 	,
u5_1pdateItem_status1 	,
u5_1pdateItem_qty2 	,
u5_1pdateItem_status2 	,
u5_1pdateMarket_size_id 	,
u5_2pdateMarketSizeRecordsID 	,
u5_2pdateEgmed_consumption 	,
u5_2pdateTotal_consumption 	,
u5_2pdateCompetitor_id 	,
u5_2pdateItem_qty1 	,
u5_2pdateItem_status1 	,
u5_2pdateItem_qty2 	,
u5_2pdateItem_status2 	,
u5_2pdateMarket_size_id 	,
u5_3pdateMarketSizeRecordsID 	,
u5_3pdateEgmed_consumption 	,
u5_3pdateTotal_consumption 	,
u5_3pdateCompetitor_id 	,
u5_3pdateItem_qty1 	,
u5_3pdateItem_status1 	,
u5_3pdateItem_qty2 	,
u5_3pdateItem_status2 	,
u5_3pdateMarket_size_id 	,
u5_4pdateMarketSizeRecordsID 	,
u5_4pdateEgmed_consumption 	,
u5_4pdateTotal_consumption 	,
u5_4pdateCompetitor_id 	,
u5_4pdateItem_qty1 	,
u5_4pdateItem_status1 	,
u5_4pdateItem_qty2 	,
u5_4pdateItem_status2 	,
u5_4pdateMarket_size_id 	,
u5_5pdateMarketSizeRecordsID 	,
u5_5pdateEgmed_consumption 	,
u5_5pdateTotal_consumption 	,
u5_5pdateCompetitor_id 	,
u5_5pdateItem_qty1 	,
u5_5pdateItem_status1 	,
u5_5pdateItem_qty2 	,
u5_5pdateItem_status2 	,
u5_5pdateMarket_size_id 	,
u5_6pdateMarketSizeRecordsID 	,
u5_6pdateEgmed_consumption 	,
u5_6pdateTotal_consumption 	,
u5_6pdateCompetitor_id 	,
u5_6pdateItem_qty1 	,
u5_6pdateItem_status1 	,
u5_6pdateItem_qty2 	,
u5_6pdateItem_status2 	,
u5_6pdateMarket_size_id 	,
u5_7pdateMarketSizeRecordsID 	,
u5_7pdateEgmed_consumption 	,
u5_7pdateTotal_consumption 	,
u5_7pdateCompetitor_id 	,
u5_7pdateItem_qty1 	,
u5_7pdateItem_status1 	,
u5_7pdateItem_qty2 	,
u5_7pdateItem_status2 	,
u5_7pdateMarket_size_id 	,
u5_8pdateMarketSizeRecordsID 	,
u5_8pdateEgmed_consumption 	,
u5_8pdateTotal_consumption 	,
u5_8pdateCompetitor_id 	,
u5_8pdateItem_qty1 	,
u5_8pdateItem_status1 	,
u5_8pdateItem_qty2 	,
u5_8pdateItem_status2 	,
u5_8pdateMarket_size_id 	,
u5_9pdateMarketSizeRecordsID 	,
u5_9pdateEgmed_consumption 	,
u5_9pdateTotal_consumption 	,
u5_9pdateCompetitor_id 	,
u5_9pdateItem_qty1 	,
u5_9pdateItem_status1 	,
u5_9pdateItem_qty2 	,
u5_9pdateItem_status2 	,
u5_9pdateMarket_size_id 	,
u5_10pdateMarketSizeRecordsID 	,
u5_10pdateEgmed_consumption 	,
u5_10pdateTotal_consumption 	,
u5_10pdateCompetitor_id 	,
u5_10pdateItem_qty1 	,
u5_10pdateItem_status1 	,
u5_10pdateItem_qty2 	,
u5_10pdateItem_status2 	,
u5_10pdateMarket_size_id 	,
u5_11pdateMarketSizeRecordsID 	,
u5_11pdateEgmed_consumption 	,
u5_11pdateTotal_consumption 	,
u5_11pdateCompetitor_id 	,
u5_11pdateItem_qty1 	,
u5_11pdateItem_status1 	,
u5_11pdateItem_qty2 	,
u5_11pdateItem_status2 	,
u5_11pdateMarket_size_id 	,
u5_12pdateMarketSizeRecordsID 	,
u5_12pdateEgmed_consumption 	,
u5_12pdateTotal_consumption 	,
u5_12pdateCompetitor_id 	,
u5_12pdateItem_qty1 	,
u5_12pdateItem_status1 	,
u5_12pdateItem_qty2 	,
u5_12pdateItem_status2 	,
u5_12pdateMarket_size_id 	,
u5_13pdateMarketSizeRecordsID 	,
u5_13pdateEgmed_consumption 	,
u5_13pdateTotal_consumption 	,
u5_13pdateCompetitor_id 	,
u5_13pdateItem_qty1 	,
u5_13pdateItem_status1 	,
u5_13pdateItem_qty2 	,
u5_13pdateItem_status2 	,
u5_13pdateMarket_size_id 	,
u5_14pdateMarketSizeRecordsID 	,
u5_14pdateEgmed_consumption 	,
u5_14pdateTotal_consumption 	,
u5_14pdateCompetitor_id 	,
u5_14pdateItem_qty1 	,
u5_14pdateItem_status1 	,
u5_14pdateItem_qty2 	,
u5_14pdateItem_status2 	,
u5_14pdateMarket_size_id 	,
u5_15pdateMarketSizeRecordsID 	,
u5_15pdateEgmed_consumption 	,
u5_15pdateTotal_consumption 	,
u5_15pdateCompetitor_id 	,
u5_15pdateItem_qty1 	,
u5_15pdateItem_status1 	,
u5_15pdateItem_qty2 	,
u5_15pdateItem_status2 	,
u5_15pdateMarket_size_id 	,
u5_16pdateMarketSizeRecordsID 	,
u5_16pdateEgmed_consumption 	,
u5_16pdateTotal_consumption 	,
u5_16pdateCompetitor_id 	,
u5_16pdateItem_qty1 	,
u5_16pdateItem_status1 	,
u5_16pdateItem_qty2 	,
u5_16pdateItem_status2 	,
u5_16pdateMarket_size_id 	,
u6_0pdateMarketSizeRecordsID 	,
u6_0pdateEgmed_consumption 	,
u6_0pdateTotal_consumption 	,
u6_0pdateCompetitor_id 	,
u6_0pdateItem_qty1 	,
u6_0pdateItem_status1 	,
u6_0pdateItem_qty2 	,
u6_0pdateItem_status2 	,
u6_0pdateMarket_size_id 	,
u6_1pdateMarketSizeRecordsID 	,
u6_1pdateEgmed_consumption 	,
u6_1pdateTotal_consumption 	,
u6_1pdateCompetitor_id 	,
u6_1pdateItem_qty1 	,
u6_1pdateItem_status1 	,
u6_1pdateItem_qty2 	,
u6_1pdateItem_status2 	,
u6_1pdateMarket_size_id 	,
u6_2pdateMarketSizeRecordsID 	,
u6_2pdateEgmed_consumption 	,
u6_2pdateTotal_consumption 	,
u6_2pdateCompetitor_id 	,
u6_2pdateItem_qty1 	,
u6_2pdateItem_status1 	,
u6_2pdateItem_qty2 	,
u6_2pdateItem_status2 	,
u6_2pdateMarket_size_id 	,
u6_3pdateMarketSizeRecordsID 	,
u6_3pdateEgmed_consumption 	,
u6_3pdateTotal_consumption 	,
u6_3pdateCompetitor_id 	,
u6_3pdateItem_qty1 	,
u6_3pdateItem_status1 	,
u6_3pdateItem_qty2 	,
u6_3pdateItem_status2 	,
u6_3pdateMarket_size_id 	,
u6_4pdateMarketSizeRecordsID 	,
u6_4pdateEgmed_consumption 	,
u6_4pdateTotal_consumption 	,
u6_4pdateCompetitor_id 	,
u6_4pdateItem_qty1 	,
u6_4pdateItem_status1 	,
u6_4pdateItem_qty2 	,
u6_4pdateItem_status2 	,
u6_4pdateMarket_size_id 	,
u6_5pdateMarketSizeRecordsID 	,
u6_5pdateEgmed_consumption 	,
u6_5pdateTotal_consumption 	,
u6_5pdateCompetitor_id 	,
u6_5pdateItem_qty1 	,
u6_5pdateItem_status1 	,
u6_5pdateItem_qty2 	,
u6_5pdateItem_status2 	,
u6_5pdateMarket_size_id 	,
u6_6pdateMarketSizeRecordsID 	,
u6_6pdateEgmed_consumption 	,
u6_6pdateTotal_consumption 	,
u6_6pdateCompetitor_id 	,
u6_6pdateItem_qty1 	,
u6_6pdateItem_status1 	,
u6_6pdateItem_qty2 	,
u6_6pdateItem_status2 	,
u6_6pdateMarket_size_id 	,
u6_7pdateMarketSizeRecordsID 	,
u6_7pdateEgmed_consumption 	,
u6_7pdateTotal_consumption 	,
u6_7pdateCompetitor_id 	,
u6_7pdateItem_qty1 	,
u6_7pdateItem_status1 	,
u6_7pdateItem_qty2 	,
u6_7pdateItem_status2 	,
u6_7pdateMarket_size_id 	,
u6_8pdateMarketSizeRecordsID 	,
u6_8pdateEgmed_consumption 	,
u6_8pdateTotal_consumption 	,
u6_8pdateCompetitor_id 	,
u6_8pdateItem_qty1 	,
u6_8pdateItem_status1 	,
u6_8pdateItem_qty2 	,
u6_8pdateItem_status2 	,
u6_8pdateMarket_size_id 	,
u6_9pdateMarketSizeRecordsID 	,
u6_9pdateEgmed_consumption 	,
u6_9pdateTotal_consumption 	,
u6_9pdateCompetitor_id 	,
u6_9pdateItem_qty1 	,
u6_9pdateItem_status1 	,
u6_9pdateItem_qty2 	,
u6_9pdateItem_status2 	,
u6_9pdateMarket_size_id 	,
u6_10pdateMarketSizeRecordsID 	,
u6_10pdateEgmed_consumption 	,
u6_10pdateTotal_consumption 	,
u6_10pdateCompetitor_id 	,
u6_10pdateItem_qty1 	,
u6_10pdateItem_status1 	,
u6_10pdateItem_qty2 	,
u6_10pdateItem_status2 	,
u6_10pdateMarket_size_id 	,
u6_11pdateMarketSizeRecordsID 	,
u6_11pdateEgmed_consumption 	,
u6_11pdateTotal_consumption 	,
u6_11pdateCompetitor_id 	,
u6_11pdateItem_qty1 	,
u6_11pdateItem_status1 	,
u6_11pdateItem_qty2 	,
u6_11pdateItem_status2 	,
u6_11pdateMarket_size_id 	,
u6_12pdateMarketSizeRecordsID 	,
u6_12pdateEgmed_consumption 	,
u6_12pdateTotal_consumption 	,
u6_12pdateCompetitor_id 	,
u6_12pdateItem_qty1 	,
u6_12pdateItem_status1 	,
u6_12pdateItem_qty2 	,
u6_12pdateItem_status2 	,
u6_12pdateMarket_size_id 	,
u6_13pdateMarketSizeRecordsID 	,
u6_13pdateEgmed_consumption 	,
u6_13pdateTotal_consumption 	,
u6_13pdateCompetitor_id 	,
u6_13pdateItem_qty1 	,
u6_13pdateItem_status1 	,
u6_13pdateItem_qty2 	,
u6_13pdateItem_status2 	,
u6_13pdateMarket_size_id 	,
u6_14pdateMarketSizeRecordsID 	,
u6_14pdateEgmed_consumption 	,
u6_14pdateTotal_consumption 	,
u6_14pdateCompetitor_id 	,
u6_14pdateItem_qty1 	,
u6_14pdateItem_status1 	,
u6_14pdateItem_qty2 	,
u6_14pdateItem_status2 	,
u6_14pdateMarket_size_id 	,
u6_15pdateMarketSizeRecordsID 	,
u6_15pdateEgmed_consumption 	,
u6_15pdateTotal_consumption 	,
u6_15pdateCompetitor_id 	,
u6_15pdateItem_qty1 	,
u6_15pdateItem_status1 	,
u6_15pdateItem_qty2 	,
u6_15pdateItem_status2 	,
u6_15pdateMarket_size_id 	,
u6_16pdateMarketSizeRecordsID 	,
u6_16pdateEgmed_consumption 	,
u6_16pdateTotal_consumption 	,
u6_16pdateCompetitor_id 	,
u6_16pdateItem_qty1 	,
u6_16pdateItem_status1 	,
u6_16pdateItem_qty2 	,
u6_16pdateItem_status2 	,
u6_16pdateMarket_size_id 	,
u7_0pdateMarketSizeRecordsID 	,
u7_0pdateEgmed_consumption 	,
u7_0pdateTotal_consumption 	,
u7_0pdateCompetitor_id 	,
u7_0pdateItem_qty1 	,
u7_0pdateItem_status1 	,
u7_0pdateItem_qty2 	,
u7_0pdateItem_status2 	,
u7_0pdateMarket_size_id 	,
u7_1pdateMarketSizeRecordsID 	,
u7_1pdateEgmed_consumption 	,
u7_1pdateTotal_consumption 	,
u7_1pdateCompetitor_id 	,
u7_1pdateItem_qty1 	,
u7_1pdateItem_status1 	,
u7_1pdateItem_qty2 	,
u7_1pdateItem_status2 	,
u7_1pdateMarket_size_id 	,
u7_2pdateMarketSizeRecordsID 	,
u7_2pdateEgmed_consumption 	,
u7_2pdateTotal_consumption 	,
u7_2pdateCompetitor_id 	,
u7_2pdateItem_qty1 	,
u7_2pdateItem_status1 	,
u7_2pdateItem_qty2 	,
u7_2pdateItem_status2 	,
u7_2pdateMarket_size_id 	,
u7_3pdateMarketSizeRecordsID 	,
u7_3pdateEgmed_consumption 	,
u7_3pdateTotal_consumption 	,
u7_3pdateCompetitor_id 	,
u7_3pdateItem_qty1 	,
u7_3pdateItem_status1 	,
u7_3pdateItem_qty2 	,
u7_3pdateItem_status2 	,
u7_3pdateMarket_size_id 	,
u7_4pdateMarketSizeRecordsID 	,
u7_4pdateEgmed_consumption 	,
u7_4pdateTotal_consumption 	,
u7_4pdateCompetitor_id 	,
u7_4pdateItem_qty1 	,
u7_4pdateItem_status1 	,
u7_4pdateItem_qty2 	,
u7_4pdateItem_status2 	,
u7_4pdateMarket_size_id 	,
u7_5pdateMarketSizeRecordsID 	,
u7_5pdateEgmed_consumption 	,
u7_5pdateTotal_consumption 	,
u7_5pdateCompetitor_id 	,
u7_5pdateItem_qty1 	,
u7_5pdateItem_status1 	,
u7_5pdateItem_qty2 	,
u7_5pdateItem_status2 	,
u7_5pdateMarket_size_id 	,
u7_6pdateMarketSizeRecordsID 	,
u7_6pdateEgmed_consumption 	,
u7_6pdateTotal_consumption 	,
u7_6pdateCompetitor_id 	,
u7_6pdateItem_qty1 	,
u7_6pdateItem_status1 	,
u7_6pdateItem_qty2 	,
u7_6pdateItem_status2 	,
u7_6pdateMarket_size_id 	,
u7_7pdateMarketSizeRecordsID 	,
u7_7pdateEgmed_consumption 	,
u7_7pdateTotal_consumption 	,
u7_7pdateCompetitor_id 	,
u7_7pdateItem_qty1 	,
u7_7pdateItem_status1 	,
u7_7pdateItem_qty2 	,
u7_7pdateItem_status2 	,
u7_7pdateMarket_size_id 	,
u7_8pdateMarketSizeRecordsID 	,
u7_8pdateEgmed_consumption 	,
u7_8pdateTotal_consumption 	,
u7_8pdateCompetitor_id 	,
u7_8pdateItem_qty1 	,
u7_8pdateItem_status1 	,
u7_8pdateItem_qty2 	,
u7_8pdateItem_status2 	,
u7_8pdateMarket_size_id 	,
u7_9pdateMarketSizeRecordsID 	,
u7_9pdateEgmed_consumption 	,
u7_9pdateTotal_consumption 	,
u7_9pdateCompetitor_id 	,
u7_9pdateItem_qty1 	,
u7_9pdateItem_status1 	,
u7_9pdateItem_qty2 	,
u7_9pdateItem_status2 	,
u7_9pdateMarket_size_id 	,
u7_10pdateMarketSizeRecordsID 	,
u7_10pdateEgmed_consumption 	,
u7_10pdateTotal_consumption 	,
u7_10pdateCompetitor_id 	,
u7_10pdateItem_qty1 	,
u7_10pdateItem_status1 	,
u7_10pdateItem_qty2 	,
u7_10pdateItem_status2 	,
u7_10pdateMarket_size_id 	,
u7_11pdateMarketSizeRecordsID 	,
u7_11pdateEgmed_consumption 	,
u7_11pdateTotal_consumption 	,
u7_11pdateCompetitor_id 	,
u7_11pdateItem_qty1 	,
u7_11pdateItem_status1 	,
u7_11pdateItem_qty2 	,
u7_11pdateItem_status2 	,
u7_11pdateMarket_size_id 	,
u7_12pdateMarketSizeRecordsID 	,
u7_12pdateEgmed_consumption 	,
u7_12pdateTotal_consumption 	,
u7_12pdateCompetitor_id 	,
u7_12pdateItem_qty1 	,
u7_12pdateItem_status1 	,
u7_12pdateItem_qty2 	,
u7_12pdateItem_status2 	,
u7_12pdateMarket_size_id 	,
u7_13pdateMarketSizeRecordsID 	,
u7_13pdateEgmed_consumption 	,
u7_13pdateTotal_consumption 	,
u7_13pdateCompetitor_id 	,
u7_13pdateItem_qty1 	,
u7_13pdateItem_status1 	,
u7_13pdateItem_qty2 	,
u7_13pdateItem_status2 	,
u7_13pdateMarket_size_id 	,
u7_14pdateMarketSizeRecordsID 	,
u7_14pdateEgmed_consumption 	,
u7_14pdateTotal_consumption 	,
u7_14pdateCompetitor_id 	,
u7_14pdateItem_qty1 	,
u7_14pdateItem_status1 	,
u7_14pdateItem_qty2 	,
u7_14pdateItem_status2 	,
u7_14pdateMarket_size_id 	,
u7_15pdateMarketSizeRecordsID 	,
u7_15pdateEgmed_consumption 	,
u7_15pdateTotal_consumption 	,
u7_15pdateCompetitor_id 	,
u7_15pdateItem_qty1 	,
u7_15pdateItem_status1 	,
u7_15pdateItem_qty2 	,
u7_15pdateItem_status2 	,
u7_15pdateMarket_size_id 	,
u7_16pdateMarketSizeRecordsID 	,
u7_16pdateEgmed_consumption 	,
u7_16pdateTotal_consumption 	,
u7_16pdateCompetitor_id 	,
u7_16pdateItem_qty1 	,
u7_16pdateItem_status1 	,
u7_16pdateItem_qty2 	,
u7_16pdateItem_status2 	,
u7_16pdateMarket_size_id 	,
u8_0pdateMarketSizeRecordsID 	,
u8_0pdateEgmed_consumption 	,
u8_0pdateTotal_consumption 	,
u8_0pdateCompetitor_id 	,
u8_0pdateItem_qty1 	,
u8_0pdateItem_status1 	,
u8_0pdateItem_qty2 	,
u8_0pdateItem_status2 	,
u8_0pdateMarket_size_id 	,
u8_1pdateMarketSizeRecordsID 	,
u8_1pdateEgmed_consumption 	,
u8_1pdateTotal_consumption 	,
u8_1pdateCompetitor_id 	,
u8_1pdateItem_qty1 	,
u8_1pdateItem_status1 	,
u8_1pdateItem_qty2 	,
u8_1pdateItem_status2 	,
u8_1pdateMarket_size_id 	,
u8_2pdateMarketSizeRecordsID 	,
u8_2pdateEgmed_consumption 	,
u8_2pdateTotal_consumption 	,
u8_2pdateCompetitor_id 	,
u8_2pdateItem_qty1 	,
u8_2pdateItem_status1 	,
u8_2pdateItem_qty2 	,
u8_2pdateItem_status2 	,
u8_2pdateMarket_size_id 	,
u8_3pdateMarketSizeRecordsID 	,
u8_3pdateEgmed_consumption 	,
u8_3pdateTotal_consumption 	,
u8_3pdateCompetitor_id 	,
u8_3pdateItem_qty1 	,
u8_3pdateItem_status1 	,
u8_3pdateItem_qty2 	,
u8_3pdateItem_status2 	,
u8_3pdateMarket_size_id 	,
u8_4pdateMarketSizeRecordsID 	,
u8_4pdateEgmed_consumption 	,
u8_4pdateTotal_consumption 	,
u8_4pdateCompetitor_id 	,
u8_4pdateItem_qty1 	,
u8_4pdateItem_status1 	,
u8_4pdateItem_qty2 	,
u8_4pdateItem_status2 	,
u8_4pdateMarket_size_id 	,
u8_5pdateMarketSizeRecordsID 	,
u8_5pdateEgmed_consumption 	,
u8_5pdateTotal_consumption 	,
u8_5pdateCompetitor_id 	,
u8_5pdateItem_qty1 	,
u8_5pdateItem_status1 	,
u8_5pdateItem_qty2 	,
u8_5pdateItem_status2 	,
u8_5pdateMarket_size_id 	,
u8_6pdateMarketSizeRecordsID 	,
u8_6pdateEgmed_consumption 	,
u8_6pdateTotal_consumption 	,
u8_6pdateCompetitor_id 	,
u8_6pdateItem_qty1 	,
u8_6pdateItem_status1 	,
u8_6pdateItem_qty2 	,
u8_6pdateItem_status2 	,
u8_6pdateMarket_size_id 	,
u8_7pdateMarketSizeRecordsID 	,
u8_7pdateEgmed_consumption 	,
u8_7pdateTotal_consumption 	,
u8_7pdateCompetitor_id 	,
u8_7pdateItem_qty1 	,
u8_7pdateItem_status1 	,
u8_7pdateItem_qty2 	,
u8_7pdateItem_status2 	,
u8_7pdateMarket_size_id 	,
u8_8pdateMarketSizeRecordsID 	,
u8_8pdateEgmed_consumption 	,
u8_8pdateTotal_consumption 	,
u8_8pdateCompetitor_id 	,
u8_8pdateItem_qty1 	,
u8_8pdateItem_status1 	,
u8_8pdateItem_qty2 	,
u8_8pdateItem_status2 	,
u8_8pdateMarket_size_id 	,
u8_9pdateMarketSizeRecordsID 	,
u8_9pdateEgmed_consumption 	,
u8_9pdateTotal_consumption 	,
u8_9pdateCompetitor_id 	,
u8_9pdateItem_qty1 	,
u8_9pdateItem_status1 	,
u8_9pdateItem_qty2 	,
u8_9pdateItem_status2 	,
u8_9pdateMarket_size_id 	,
u8_10pdateMarketSizeRecordsID 	,
u8_10pdateEgmed_consumption 	,
u8_10pdateTotal_consumption 	,
u8_10pdateCompetitor_id 	,
u8_10pdateItem_qty1 	,
u8_10pdateItem_status1 	,
u8_10pdateItem_qty2 	,
u8_10pdateItem_status2 	,
u8_10pdateMarket_size_id 	,
u8_11pdateMarketSizeRecordsID 	,
u8_11pdateEgmed_consumption 	,
u8_11pdateTotal_consumption 	,
u8_11pdateCompetitor_id 	,
u8_11pdateItem_qty1 	,
u8_11pdateItem_status1 	,
u8_11pdateItem_qty2 	,
u8_11pdateItem_status2 	,
u8_11pdateMarket_size_id 	,
u8_12pdateMarketSizeRecordsID 	,
u8_12pdateEgmed_consumption 	,
u8_12pdateTotal_consumption 	,
u8_12pdateCompetitor_id 	,
u8_12pdateItem_qty1 	,
u8_12pdateItem_status1 	,
u8_12pdateItem_qty2 	,
u8_12pdateItem_status2 	,
u8_12pdateMarket_size_id 	,
u8_13pdateMarketSizeRecordsID 	,
u8_13pdateEgmed_consumption 	,
u8_13pdateTotal_consumption 	,
u8_13pdateCompetitor_id 	,
u8_13pdateItem_qty1 	,
u8_13pdateItem_status1 	,
u8_13pdateItem_qty2 	,
u8_13pdateItem_status2 	,
u8_13pdateMarket_size_id 	,
u8_14pdateMarketSizeRecordsID 	,
u8_14pdateEgmed_consumption 	,
u8_14pdateTotal_consumption 	,
u8_14pdateCompetitor_id 	,
u8_14pdateItem_qty1 	,
u8_14pdateItem_status1 	,
u8_14pdateItem_qty2 	,
u8_14pdateItem_status2 	,
u8_14pdateMarket_size_id 	,
u8_15pdateMarketSizeRecordsID 	,
u8_15pdateEgmed_consumption 	,
u8_15pdateTotal_consumption 	,
u8_15pdateCompetitor_id 	,
u8_15pdateItem_qty1 	,
u8_15pdateItem_status1 	,
u8_15pdateItem_qty2 	,
u8_15pdateItem_status2 	,
u8_15pdateMarket_size_id 	,
u8_16pdateMarketSizeRecordsID 	,
u8_16pdateEgmed_consumption 	,
u8_16pdateTotal_consumption 	,
u8_16pdateCompetitor_id 	,
u8_16pdateItem_qty1 	,
u8_16pdateItem_status1 	,
u8_16pdateItem_qty2 	,
u8_16pdateItem_status2 	,
u8_16pdateMarket_size_id 	,
u9_0pdateMarketSizeRecordsID 	,
u9_0pdateEgmed_consumption 	,
u9_0pdateTotal_consumption 	,
u9_0pdateCompetitor_id 	,
u9_0pdateItem_qty1 	,
u9_0pdateItem_status1 	,
u9_0pdateItem_qty2 	,
u9_0pdateItem_status2 	,
u9_0pdateMarket_size_id 	,
u9_1pdateMarketSizeRecordsID 	,
u9_1pdateEgmed_consumption 	,
u9_1pdateTotal_consumption 	,
u9_1pdateCompetitor_id 	,
u9_1pdateItem_qty1 	,
u9_1pdateItem_status1 	,
u9_1pdateItem_qty2 	,
u9_1pdateItem_status2 	,
u9_1pdateMarket_size_id 	,
u9_2pdateMarketSizeRecordsID 	,
u9_2pdateEgmed_consumption 	,
u9_2pdateTotal_consumption 	,
u9_2pdateCompetitor_id 	,
u9_2pdateItem_qty1 	,
u9_2pdateItem_status1 	,
u9_2pdateItem_qty2 	,
u9_2pdateItem_status2 	,
u9_2pdateMarket_size_id 	,
u9_3pdateMarketSizeRecordsID 	,
u9_3pdateEgmed_consumption 	,
u9_3pdateTotal_consumption 	,
u9_3pdateCompetitor_id 	,
u9_3pdateItem_qty1 	,
u9_3pdateItem_status1 	,
u9_3pdateItem_qty2 	,
u9_3pdateItem_status2 	,
u9_3pdateMarket_size_id 	,
u9_4pdateMarketSizeRecordsID 	,
u9_4pdateEgmed_consumption 	,
u9_4pdateTotal_consumption 	,
u9_4pdateCompetitor_id 	,
u9_4pdateItem_qty1 	,
u9_4pdateItem_status1 	,
u9_4pdateItem_qty2 	,
u9_4pdateItem_status2 	,
u9_4pdateMarket_size_id 	,
u9_5pdateMarketSizeRecordsID 	,
u9_5pdateEgmed_consumption 	,
u9_5pdateTotal_consumption 	,
u9_5pdateCompetitor_id 	,
u9_5pdateItem_qty1 	,
u9_5pdateItem_status1 	,
u9_5pdateItem_qty2 	,
u9_5pdateItem_status2 	,
u9_5pdateMarket_size_id 	,
u9_6pdateMarketSizeRecordsID 	,
u9_6pdateEgmed_consumption 	,
u9_6pdateTotal_consumption 	,
u9_6pdateCompetitor_id 	,
u9_6pdateItem_qty1 	,
u9_6pdateItem_status1 	,
u9_6pdateItem_qty2 	,
u9_6pdateItem_status2 	,
u9_6pdateMarket_size_id 	,
u9_7pdateMarketSizeRecordsID 	,
u9_7pdateEgmed_consumption 	,
u9_7pdateTotal_consumption 	,
u9_7pdateCompetitor_id 	,
u9_7pdateItem_qty1 	,
u9_7pdateItem_status1 	,
u9_7pdateItem_qty2 	,
u9_7pdateItem_status2 	,
u9_7pdateMarket_size_id 	,
u9_8pdateMarketSizeRecordsID 	,
u9_8pdateEgmed_consumption 	,
u9_8pdateTotal_consumption 	,
u9_8pdateCompetitor_id 	,
u9_8pdateItem_qty1 	,
u9_8pdateItem_status1 	,
u9_8pdateItem_qty2 	,
u9_8pdateItem_status2 	,
u9_8pdateMarket_size_id 	,
u9_9pdateMarketSizeRecordsID 	,
u9_9pdateEgmed_consumption 	,
u9_9pdateTotal_consumption 	,
u9_9pdateCompetitor_id 	,
u9_9pdateItem_qty1 	,
u9_9pdateItem_status1 	,
u9_9pdateItem_qty2 	,
u9_9pdateItem_status2 	,
u9_9pdateMarket_size_id 	,
u9_10pdateMarketSizeRecordsID 	,
u9_10pdateEgmed_consumption 	,
u9_10pdateTotal_consumption 	,
u9_10pdateCompetitor_id 	,
u9_10pdateItem_qty1 	,
u9_10pdateItem_status1 	,
u9_10pdateItem_qty2 	,
u9_10pdateItem_status2 	,
u9_10pdateMarket_size_id 	,
u9_11pdateMarketSizeRecordsID 	,
u9_11pdateEgmed_consumption 	,
u9_11pdateTotal_consumption 	,
u9_11pdateCompetitor_id 	,
u9_11pdateItem_qty1 	,
u9_11pdateItem_status1 	,
u9_11pdateItem_qty2 	,
u9_11pdateItem_status2 	,
u9_11pdateMarket_size_id 	,
u9_12pdateMarketSizeRecordsID 	,
u9_12pdateEgmed_consumption 	,
u9_12pdateTotal_consumption 	,
u9_12pdateCompetitor_id 	,
u9_12pdateItem_qty1 	,
u9_12pdateItem_status1 	,
u9_12pdateItem_qty2 	,
u9_12pdateItem_status2 	,
u9_12pdateMarket_size_id 	,
u9_13pdateMarketSizeRecordsID 	,
u9_13pdateEgmed_consumption 	,
u9_13pdateTotal_consumption 	,
u9_13pdateCompetitor_id 	,
u9_13pdateItem_qty1 	,
u9_13pdateItem_status1 	,
u9_13pdateItem_qty2 	,
u9_13pdateItem_status2 	,
u9_13pdateMarket_size_id 	,
u9_14pdateMarketSizeRecordsID 	,
u9_14pdateEgmed_consumption 	,
u9_14pdateTotal_consumption 	,
u9_14pdateCompetitor_id 	,
u9_14pdateItem_qty1 	,
u9_14pdateItem_status1 	,
u9_14pdateItem_qty2 	,
u9_14pdateItem_status2 	,
u9_14pdateMarket_size_id 	,
u9_15pdateMarketSizeRecordsID 	,
u9_15pdateEgmed_consumption 	,
u9_15pdateTotal_consumption 	,
u9_15pdateCompetitor_id 	,
u9_15pdateItem_qty1 	,
u9_15pdateItem_status1 	,
u9_15pdateItem_qty2 	,
u9_15pdateItem_status2 	,
u9_15pdateMarket_size_id 	,
u9_16pdateMarketSizeRecordsID 	,
u9_16pdateEgmed_consumption 	,
u9_16pdateTotal_consumption 	,
u9_16pdateCompetitor_id 	,
u9_16pdateItem_qty1 	,
u9_16pdateItem_status1 	,
u9_16pdateItem_qty2 	,
u9_16pdateItem_status2 	,
u9_16pdateMarket_size_id 	

} = marketDataSlice.actions

export const store = configureStore({
  reducer: marketDataSlice.reducer
})

// Can still subscribe to the store
store.subscribe(() => console.log(store.getState()))

// Still pass action objects to `dispatch`, but they're created for us
store.dispatch(incremented())
// {value: 1}
store.dispatch(incremented())
// {value: 2}
store.dispatch(decremented())
// {value: 1}

store.dispatch(updateUser_Id())
store.dispatch(updateBl_Id())
store.dispatch(updateBu_Id())
store.dispatch(updateAccount_Type_Id())
store.dispatch(updateAccount_Id())
store.dispatch(updateAccount_Name())
store.dispatch(updateAccount_Area())
store.dispatch(updateKnee_Replacement())
store.dispatch(updateHip_Replacement())
store.dispatch(updateNumber_Of_Operation_Rooms())
store.dispatch(updateNumber_Of_Trauma_Cases_Month())
store.dispatch(updateNeuro_Surgery())
store.dispatch(updateCardiothoracic())
store.dispatch(updateOncology())
store.dispatch(updateUrology())
store.dispatch(updateLiver_Transplant())
store.dispatch(updateKidney_Transplant())
store.dispatch(updateGynecology())
store.dispatch(updateGeneral_Surgery())
store.dispatch(updateNumber_Of_Plasma_Bags_Dispensed())
store.dispatch(updateOpen_Heart())
store.dispatch(updateNumber_Of_Icu_Beds())
store.dispatch(updateNumber_Of_Plasma_Autoclaves())
store.dispatch(updateLoad_Of_Plasma_Autoclave_Day())
store.dispatch(updateRate_Of_Pouches_Load_Day_Of_Instruments())
store.dispatch(updateNumber_Of_Steam_Autoclaves())
store.dispatch(updateLoad_Of_Steam_Autoclave_Day())
store.dispatch(updateRate_Of_Pouches_Load_Day_Of_Dressings())
store.dispatch(updateOrtho())
store.dispatch(updateCardio())
store.dispatch(updateNeuro())
store.dispatch(updateTransplant())
store.dispatch(updateOstomy())
store.dispatch(updateDiabetic_Foot_Ulcers())
store.dispatch(updatePressure_Ulcers())
store.dispatch(updateBurns())
store.dispatch(updateSpinal_Chord_Injury())
store.dispatch(updatePcnl())
store.dispatch(updateFurs())
store.dispatch(updateTotal_Ed_Cases())
store.dispatch(updateNumber_Of_Ed_Cases_Operated())
store.dispatch(updateNumber_Of_Ed_Recurrent_Cases())
store.dispatch(updateCycle_Rate())
store.dispatch(updateTotal_Number_Of_Operations_Per())
store.dispatch(updateTotal_Number_Of_Operations_Per_Month())
store.dispatch(updateNumber_Of_Renting_Cases_Month())
store.dispatch(updateCost_Of_Renting_Case())
store.dispatch(updateOpen_Surgery())
store.dispatch(updateBasic_Laproscopy())
store.dispatch(updateAdvanced_Laproscopy())
store.dispatch(updateNose())
store.dispatch(updateEar())
store.dispatch(updateLarynx())
store.dispatch(updateDiagnostic())
store.dispatch(updateChest_Adult_Cases())
store.dispatch(updateChest_Pediatric_Cases())
store.dispatch(updateThorax_Adult_Cases())
store.dispatch(updateThorax_Pediatric_Cases())
store.dispatch(updateMyomectomy())
store.dispatch(updateHysterectomy())
store.dispatch(updateLaproscopic_Gyn())
store.dispatch(updateDiagnostic_Hysteroscopy())
store.dispatch(updateOperative_Hysteroscopy())
store.dispatch(updateNumber_Of_Kidney_Stone_Cases())
store.dispatch(updateEndoscopy())
store.dispatch(updateCranial_Navigation())
store.dispatch(updateNeuro_Biopsy())
store.dispatch(updateStereotactic_Neurosurgery())
store.dispatch(updateNumber_Of_Inpatient_Beds())
store.dispatch(updateBariatric_Surgery())
store.dispatch(updateUro_Surgery())
store.dispatch(updateGyn_Surgery())
store.dispatch(updatePediatric_Surgery())
store.dispatch(updateCardiovascular_Surgery())
store.dispatch(updateEnt_Surgery())
store.dispatch(updateOphthalmolgy())
store.dispatch(updateOrtho_Surgery())
store.dispatch(updateNumber_Of_Devices_Tested_Year())
// store.dispatch(updateSupplier_id())
// store.dispatch(updateProduct_family_id())
// store.dispatch(updateItem_group_id())
// store.dispatch(updateMarket_potential_id())
// store.dispatch(updateEgmed_consumption())
// store.dispatch(updateTotal_consumption())
// store.dispatch(updateCompetitor_id())
// store.dispatch(updateItem_qty1())
// store.dispatch(updateItem_status1())
// store.dispatch(updateItem_qty2())
// store.dispatch(updateItem_status2())
// store.dispatch(updateMarket_size_id())

// store.dispatch(updateMarketSizeRowID())
// store.dispatch(updateMarketSizeRecordsID())

store.dispatch(u0pdateMarketSizeRowID())
store.dispatch(u0pdateSupplier_id())
store.dispatch(u0pdateProduct_family_id())
store.dispatch(u0pdateItem_group_id())
store.dispatch(u0pdateMarket_potential_id())
store.dispatch(u1pdateMarketSizeRowID())
store.dispatch(u1pdateSupplier_id())
store.dispatch(u1pdateProduct_family_id())
store.dispatch(u1pdateItem_group_id())
store.dispatch(u1pdateMarket_potential_id())
store.dispatch(u2pdateMarketSizeRowID())
store.dispatch(u2pdateSupplier_id())
store.dispatch(u2pdateProduct_family_id())
store.dispatch(u2pdateItem_group_id())
store.dispatch(u2pdateMarket_potential_id())
store.dispatch(u3pdateMarketSizeRowID())
store.dispatch(u3pdateSupplier_id())
store.dispatch(u3pdateProduct_family_id())
store.dispatch(u3pdateItem_group_id())
store.dispatch(u3pdateMarket_potential_id())
store.dispatch(u4pdateMarketSizeRowID())
store.dispatch(u4pdateSupplier_id())
store.dispatch(u4pdateProduct_family_id())
store.dispatch(u4pdateItem_group_id())
store.dispatch(u4pdateMarket_potential_id())
store.dispatch(u5pdateMarketSizeRowID())
store.dispatch(u5pdateSupplier_id())
store.dispatch(u5pdateProduct_family_id())
store.dispatch(u5pdateItem_group_id())
store.dispatch(u5pdateMarket_potential_id())
store.dispatch(u6pdateMarketSizeRowID())
store.dispatch(u6pdateSupplier_id())
store.dispatch(u6pdateProduct_family_id())
store.dispatch(u6pdateItem_group_id())
store.dispatch(u6pdateMarket_potential_id())
store.dispatch(u7pdateMarketSizeRowID())
store.dispatch(u7pdateSupplier_id())
store.dispatch(u7pdateProduct_family_id())
store.dispatch(u7pdateItem_group_id())
store.dispatch(u7pdateMarket_potential_id())
store.dispatch(u8pdateMarketSizeRowID())
store.dispatch(u8pdateSupplier_id())
store.dispatch(u8pdateProduct_family_id())
store.dispatch(u8pdateItem_group_id())
store.dispatch(u8pdateMarket_potential_id())
store.dispatch(u9pdateMarketSizeRowID())
store.dispatch(u9pdateSupplier_id())
store.dispatch(u9pdateProduct_family_id())
store.dispatch(u9pdateItem_group_id())
store.dispatch(u9pdateMarket_potential_id())
store.dispatch(u0_0pdateMarketSizeRecordsID ())
store.dispatch(u0_0pdateEgmed_consumption ())
store.dispatch(u0_0pdateTotal_consumption ())
store.dispatch(u0_0pdateCompetitor_id ())
store.dispatch(u0_0pdateItem_qty1 ())
store.dispatch(u0_0pdateItem_status1 ())
store.dispatch(u0_0pdateItem_qty2 ())
store.dispatch(u0_0pdateItem_status2 ())
store.dispatch(u0_0pdateMarket_size_id ())
store.dispatch(u0_1pdateMarketSizeRecordsID ())
store.dispatch(u0_1pdateEgmed_consumption ())
store.dispatch(u0_1pdateTotal_consumption ())
store.dispatch(u0_1pdateCompetitor_id ())
store.dispatch(u0_1pdateItem_qty1 ())
store.dispatch(u0_1pdateItem_status1 ())
store.dispatch(u0_1pdateItem_qty2 ())
store.dispatch(u0_1pdateItem_status2 ())
store.dispatch(u0_1pdateMarket_size_id ())
store.dispatch(u0_2pdateMarketSizeRecordsID ())
store.dispatch(u0_2pdateEgmed_consumption ())
store.dispatch(u0_2pdateTotal_consumption ())
store.dispatch(u0_2pdateCompetitor_id ())
store.dispatch(u0_2pdateItem_qty1 ())
store.dispatch(u0_2pdateItem_status1 ())
store.dispatch(u0_2pdateItem_qty2 ())
store.dispatch(u0_2pdateItem_status2 ())
store.dispatch(u0_2pdateMarket_size_id ())
store.dispatch(u0_3pdateMarketSizeRecordsID ())
store.dispatch(u0_3pdateEgmed_consumption ())
store.dispatch(u0_3pdateTotal_consumption ())
store.dispatch(u0_3pdateCompetitor_id ())
store.dispatch(u0_3pdateItem_qty1 ())
store.dispatch(u0_3pdateItem_status1 ())
store.dispatch(u0_3pdateItem_qty2 ())
store.dispatch(u0_3pdateItem_status2 ())
store.dispatch(u0_3pdateMarket_size_id ())
store.dispatch(u0_4pdateMarketSizeRecordsID ())
store.dispatch(u0_4pdateEgmed_consumption ())
store.dispatch(u0_4pdateTotal_consumption ())
store.dispatch(u0_4pdateCompetitor_id ())
store.dispatch(u0_4pdateItem_qty1 ())
store.dispatch(u0_4pdateItem_status1 ())
store.dispatch(u0_4pdateItem_qty2 ())
store.dispatch(u0_4pdateItem_status2 ())
store.dispatch(u0_4pdateMarket_size_id ())
store.dispatch(u0_5pdateMarketSizeRecordsID ())
store.dispatch(u0_5pdateEgmed_consumption ())
store.dispatch(u0_5pdateTotal_consumption ())
store.dispatch(u0_5pdateCompetitor_id ())
store.dispatch(u0_5pdateItem_qty1 ())
store.dispatch(u0_5pdateItem_status1 ())
store.dispatch(u0_5pdateItem_qty2 ())
store.dispatch(u0_5pdateItem_status2 ())
store.dispatch(u0_5pdateMarket_size_id ())
store.dispatch(u0_6pdateMarketSizeRecordsID ())
store.dispatch(u0_6pdateEgmed_consumption ())
store.dispatch(u0_6pdateTotal_consumption ())
store.dispatch(u0_6pdateCompetitor_id ())
store.dispatch(u0_6pdateItem_qty1 ())
store.dispatch(u0_6pdateItem_status1 ())
store.dispatch(u0_6pdateItem_qty2 ())
store.dispatch(u0_6pdateItem_status2 ())
store.dispatch(u0_6pdateMarket_size_id ())
store.dispatch(u0_7pdateMarketSizeRecordsID ())
store.dispatch(u0_7pdateEgmed_consumption ())
store.dispatch(u0_7pdateTotal_consumption ())
store.dispatch(u0_7pdateCompetitor_id ())
store.dispatch(u0_7pdateItem_qty1 ())
store.dispatch(u0_7pdateItem_status1 ())
store.dispatch(u0_7pdateItem_qty2 ())
store.dispatch(u0_7pdateItem_status2 ())
store.dispatch(u0_7pdateMarket_size_id ())
store.dispatch(u0_8pdateMarketSizeRecordsID ())
store.dispatch(u0_8pdateEgmed_consumption ())
store.dispatch(u0_8pdateTotal_consumption ())
store.dispatch(u0_8pdateCompetitor_id ())
store.dispatch(u0_8pdateItem_qty1 ())
store.dispatch(u0_8pdateItem_status1 ())
store.dispatch(u0_8pdateItem_qty2 ())
store.dispatch(u0_8pdateItem_status2 ())
store.dispatch(u0_8pdateMarket_size_id ())
store.dispatch(u0_9pdateMarketSizeRecordsID ())
store.dispatch(u0_9pdateEgmed_consumption ())
store.dispatch(u0_9pdateTotal_consumption ())
store.dispatch(u0_9pdateCompetitor_id ())
store.dispatch(u0_9pdateItem_qty1 ())
store.dispatch(u0_9pdateItem_status1 ())
store.dispatch(u0_9pdateItem_qty2 ())
store.dispatch(u0_9pdateItem_status2 ())
store.dispatch(u0_9pdateMarket_size_id ())
store.dispatch(u0_10pdateMarketSizeRecordsID ())
store.dispatch(u0_10pdateEgmed_consumption ())
store.dispatch(u0_10pdateTotal_consumption ())
store.dispatch(u0_10pdateCompetitor_id ())
store.dispatch(u0_10pdateItem_qty1 ())
store.dispatch(u0_10pdateItem_status1 ())
store.dispatch(u0_10pdateItem_qty2 ())
store.dispatch(u0_10pdateItem_status2 ())
store.dispatch(u0_10pdateMarket_size_id ())
store.dispatch(u0_11pdateMarketSizeRecordsID ())
store.dispatch(u0_11pdateEgmed_consumption ())
store.dispatch(u0_11pdateTotal_consumption ())
store.dispatch(u0_11pdateCompetitor_id ())
store.dispatch(u0_11pdateItem_qty1 ())
store.dispatch(u0_11pdateItem_status1 ())
store.dispatch(u0_11pdateItem_qty2 ())
store.dispatch(u0_11pdateItem_status2 ())
store.dispatch(u0_11pdateMarket_size_id ())
store.dispatch(u0_12pdateMarketSizeRecordsID ())
store.dispatch(u0_12pdateEgmed_consumption ())
store.dispatch(u0_12pdateTotal_consumption ())
store.dispatch(u0_12pdateCompetitor_id ())
store.dispatch(u0_12pdateItem_qty1 ())
store.dispatch(u0_12pdateItem_status1 ())
store.dispatch(u0_12pdateItem_qty2 ())
store.dispatch(u0_12pdateItem_status2 ())
store.dispatch(u0_12pdateMarket_size_id ())
store.dispatch(u0_13pdateMarketSizeRecordsID ())
store.dispatch(u0_13pdateEgmed_consumption ())
store.dispatch(u0_13pdateTotal_consumption ())
store.dispatch(u0_13pdateCompetitor_id ())
store.dispatch(u0_13pdateItem_qty1 ())
store.dispatch(u0_13pdateItem_status1 ())
store.dispatch(u0_13pdateItem_qty2 ())
store.dispatch(u0_13pdateItem_status2 ())
store.dispatch(u0_13pdateMarket_size_id ())
store.dispatch(u0_14pdateMarketSizeRecordsID ())
store.dispatch(u0_14pdateEgmed_consumption ())
store.dispatch(u0_14pdateTotal_consumption ())
store.dispatch(u0_14pdateCompetitor_id ())
store.dispatch(u0_14pdateItem_qty1 ())
store.dispatch(u0_14pdateItem_status1 ())
store.dispatch(u0_14pdateItem_qty2 ())
store.dispatch(u0_14pdateItem_status2 ())
store.dispatch(u0_14pdateMarket_size_id ())
store.dispatch(u0_15pdateMarketSizeRecordsID ())
store.dispatch(u0_15pdateEgmed_consumption ())
store.dispatch(u0_15pdateTotal_consumption ())
store.dispatch(u0_15pdateCompetitor_id ())
store.dispatch(u0_15pdateItem_qty1 ())
store.dispatch(u0_15pdateItem_status1 ())
store.dispatch(u0_15pdateItem_qty2 ())
store.dispatch(u0_15pdateItem_status2 ())
store.dispatch(u0_15pdateMarket_size_id ())
store.dispatch(u0_16pdateMarketSizeRecordsID ())
store.dispatch(u0_16pdateEgmed_consumption ())
store.dispatch(u0_16pdateTotal_consumption ())
store.dispatch(u0_16pdateCompetitor_id ())
store.dispatch(u0_16pdateItem_qty1 ())
store.dispatch(u0_16pdateItem_status1 ())
store.dispatch(u0_16pdateItem_qty2 ())
store.dispatch(u0_16pdateItem_status2 ())
store.dispatch(u0_16pdateMarket_size_id ())
store.dispatch(u1_0pdateMarketSizeRecordsID ())
store.dispatch(u1_0pdateEgmed_consumption ())
store.dispatch(u1_0pdateTotal_consumption ())
store.dispatch(u1_0pdateCompetitor_id ())
store.dispatch(u1_0pdateItem_qty1 ())
store.dispatch(u1_0pdateItem_status1 ())
store.dispatch(u1_0pdateItem_qty2 ())
store.dispatch(u1_0pdateItem_status2 ())
store.dispatch(u1_0pdateMarket_size_id ())
store.dispatch(u1_1pdateMarketSizeRecordsID ())
store.dispatch(u1_1pdateEgmed_consumption ())
store.dispatch(u1_1pdateTotal_consumption ())
store.dispatch(u1_1pdateCompetitor_id ())
store.dispatch(u1_1pdateItem_qty1 ())
store.dispatch(u1_1pdateItem_status1 ())
store.dispatch(u1_1pdateItem_qty2 ())
store.dispatch(u1_1pdateItem_status2 ())
store.dispatch(u1_1pdateMarket_size_id ())
store.dispatch(u1_2pdateMarketSizeRecordsID ())
store.dispatch(u1_2pdateEgmed_consumption ())
store.dispatch(u1_2pdateTotal_consumption ())
store.dispatch(u1_2pdateCompetitor_id ())
store.dispatch(u1_2pdateItem_qty1 ())
store.dispatch(u1_2pdateItem_status1 ())
store.dispatch(u1_2pdateItem_qty2 ())
store.dispatch(u1_2pdateItem_status2 ())
store.dispatch(u1_2pdateMarket_size_id ())
store.dispatch(u1_3pdateMarketSizeRecordsID ())
store.dispatch(u1_3pdateEgmed_consumption ())
store.dispatch(u1_3pdateTotal_consumption ())
store.dispatch(u1_3pdateCompetitor_id ())
store.dispatch(u1_3pdateItem_qty1 ())
store.dispatch(u1_3pdateItem_status1 ())
store.dispatch(u1_3pdateItem_qty2 ())
store.dispatch(u1_3pdateItem_status2 ())
store.dispatch(u1_3pdateMarket_size_id ())
store.dispatch(u1_4pdateMarketSizeRecordsID ())
store.dispatch(u1_4pdateEgmed_consumption ())
store.dispatch(u1_4pdateTotal_consumption ())
store.dispatch(u1_4pdateCompetitor_id ())
store.dispatch(u1_4pdateItem_qty1 ())
store.dispatch(u1_4pdateItem_status1 ())
store.dispatch(u1_4pdateItem_qty2 ())
store.dispatch(u1_4pdateItem_status2 ())
store.dispatch(u1_4pdateMarket_size_id ())
store.dispatch(u1_5pdateMarketSizeRecordsID ())
store.dispatch(u1_5pdateEgmed_consumption ())
store.dispatch(u1_5pdateTotal_consumption ())
store.dispatch(u1_5pdateCompetitor_id ())
store.dispatch(u1_5pdateItem_qty1 ())
store.dispatch(u1_5pdateItem_status1 ())
store.dispatch(u1_5pdateItem_qty2 ())
store.dispatch(u1_5pdateItem_status2 ())
store.dispatch(u1_5pdateMarket_size_id ())
store.dispatch(u1_6pdateMarketSizeRecordsID ())
store.dispatch(u1_6pdateEgmed_consumption ())
store.dispatch(u1_6pdateTotal_consumption ())
store.dispatch(u1_6pdateCompetitor_id ())
store.dispatch(u1_6pdateItem_qty1 ())
store.dispatch(u1_6pdateItem_status1 ())
store.dispatch(u1_6pdateItem_qty2 ())
store.dispatch(u1_6pdateItem_status2 ())
store.dispatch(u1_6pdateMarket_size_id ())
store.dispatch(u1_7pdateMarketSizeRecordsID ())
store.dispatch(u1_7pdateEgmed_consumption ())
store.dispatch(u1_7pdateTotal_consumption ())
store.dispatch(u1_7pdateCompetitor_id ())
store.dispatch(u1_7pdateItem_qty1 ())
store.dispatch(u1_7pdateItem_status1 ())
store.dispatch(u1_7pdateItem_qty2 ())
store.dispatch(u1_7pdateItem_status2 ())
store.dispatch(u1_7pdateMarket_size_id ())
store.dispatch(u1_8pdateMarketSizeRecordsID ())
store.dispatch(u1_8pdateEgmed_consumption ())
store.dispatch(u1_8pdateTotal_consumption ())
store.dispatch(u1_8pdateCompetitor_id ())
store.dispatch(u1_8pdateItem_qty1 ())
store.dispatch(u1_8pdateItem_status1 ())
store.dispatch(u1_8pdateItem_qty2 ())
store.dispatch(u1_8pdateItem_status2 ())
store.dispatch(u1_8pdateMarket_size_id ())
store.dispatch(u1_9pdateMarketSizeRecordsID ())
store.dispatch(u1_9pdateEgmed_consumption ())
store.dispatch(u1_9pdateTotal_consumption ())
store.dispatch(u1_9pdateCompetitor_id ())
store.dispatch(u1_9pdateItem_qty1 ())
store.dispatch(u1_9pdateItem_status1 ())
store.dispatch(u1_9pdateItem_qty2 ())
store.dispatch(u1_9pdateItem_status2 ())
store.dispatch(u1_9pdateMarket_size_id ())
store.dispatch(u1_10pdateMarketSizeRecordsID ())
store.dispatch(u1_10pdateEgmed_consumption ())
store.dispatch(u1_10pdateTotal_consumption ())
store.dispatch(u1_10pdateCompetitor_id ())
store.dispatch(u1_10pdateItem_qty1 ())
store.dispatch(u1_10pdateItem_status1 ())
store.dispatch(u1_10pdateItem_qty2 ())
store.dispatch(u1_10pdateItem_status2 ())
store.dispatch(u1_10pdateMarket_size_id ())
store.dispatch(u1_11pdateMarketSizeRecordsID ())
store.dispatch(u1_11pdateEgmed_consumption ())
store.dispatch(u1_11pdateTotal_consumption ())
store.dispatch(u1_11pdateCompetitor_id ())
store.dispatch(u1_11pdateItem_qty1 ())
store.dispatch(u1_11pdateItem_status1 ())
store.dispatch(u1_11pdateItem_qty2 ())
store.dispatch(u1_11pdateItem_status2 ())
store.dispatch(u1_11pdateMarket_size_id ())
store.dispatch(u1_12pdateMarketSizeRecordsID ())
store.dispatch(u1_12pdateEgmed_consumption ())
store.dispatch(u1_12pdateTotal_consumption ())
store.dispatch(u1_12pdateCompetitor_id ())
store.dispatch(u1_12pdateItem_qty1 ())
store.dispatch(u1_12pdateItem_status1 ())
store.dispatch(u1_12pdateItem_qty2 ())
store.dispatch(u1_12pdateItem_status2 ())
store.dispatch(u1_12pdateMarket_size_id ())
store.dispatch(u1_13pdateMarketSizeRecordsID ())
store.dispatch(u1_13pdateEgmed_consumption ())
store.dispatch(u1_13pdateTotal_consumption ())
store.dispatch(u1_13pdateCompetitor_id ())
store.dispatch(u1_13pdateItem_qty1 ())
store.dispatch(u1_13pdateItem_status1 ())
store.dispatch(u1_13pdateItem_qty2 ())
store.dispatch(u1_13pdateItem_status2 ())
store.dispatch(u1_13pdateMarket_size_id ())
store.dispatch(u1_14pdateMarketSizeRecordsID ())
store.dispatch(u1_14pdateEgmed_consumption ())
store.dispatch(u1_14pdateTotal_consumption ())
store.dispatch(u1_14pdateCompetitor_id ())
store.dispatch(u1_14pdateItem_qty1 ())
store.dispatch(u1_14pdateItem_status1 ())
store.dispatch(u1_14pdateItem_qty2 ())
store.dispatch(u1_14pdateItem_status2 ())
store.dispatch(u1_14pdateMarket_size_id ())
store.dispatch(u1_15pdateMarketSizeRecordsID ())
store.dispatch(u1_15pdateEgmed_consumption ())
store.dispatch(u1_15pdateTotal_consumption ())
store.dispatch(u1_15pdateCompetitor_id ())
store.dispatch(u1_15pdateItem_qty1 ())
store.dispatch(u1_15pdateItem_status1 ())
store.dispatch(u1_15pdateItem_qty2 ())
store.dispatch(u1_15pdateItem_status2 ())
store.dispatch(u1_15pdateMarket_size_id ())
store.dispatch(u1_16pdateMarketSizeRecordsID ())
store.dispatch(u1_16pdateEgmed_consumption ())
store.dispatch(u1_16pdateTotal_consumption ())
store.dispatch(u1_16pdateCompetitor_id ())
store.dispatch(u1_16pdateItem_qty1 ())
store.dispatch(u1_16pdateItem_status1 ())
store.dispatch(u1_16pdateItem_qty2 ())
store.dispatch(u1_16pdateItem_status2 ())
store.dispatch(u1_16pdateMarket_size_id ())
store.dispatch(u2_0pdateMarketSizeRecordsID ())
store.dispatch(u2_0pdateEgmed_consumption ())
store.dispatch(u2_0pdateTotal_consumption ())
store.dispatch(u2_0pdateCompetitor_id ())
store.dispatch(u2_0pdateItem_qty1 ())
store.dispatch(u2_0pdateItem_status1 ())
store.dispatch(u2_0pdateItem_qty2 ())
store.dispatch(u2_0pdateItem_status2 ())
store.dispatch(u2_0pdateMarket_size_id ())
store.dispatch(u2_1pdateMarketSizeRecordsID ())
store.dispatch(u2_1pdateEgmed_consumption ())
store.dispatch(u2_1pdateTotal_consumption ())
store.dispatch(u2_1pdateCompetitor_id ())
store.dispatch(u2_1pdateItem_qty1 ())
store.dispatch(u2_1pdateItem_status1 ())
store.dispatch(u2_1pdateItem_qty2 ())
store.dispatch(u2_1pdateItem_status2 ())
store.dispatch(u2_1pdateMarket_size_id ())
store.dispatch(u2_2pdateMarketSizeRecordsID ())
store.dispatch(u2_2pdateEgmed_consumption ())
store.dispatch(u2_2pdateTotal_consumption ())
store.dispatch(u2_2pdateCompetitor_id ())
store.dispatch(u2_2pdateItem_qty1 ())
store.dispatch(u2_2pdateItem_status1 ())
store.dispatch(u2_2pdateItem_qty2 ())
store.dispatch(u2_2pdateItem_status2 ())
store.dispatch(u2_2pdateMarket_size_id ())
store.dispatch(u2_3pdateMarketSizeRecordsID ())
store.dispatch(u2_3pdateEgmed_consumption ())
store.dispatch(u2_3pdateTotal_consumption ())
store.dispatch(u2_3pdateCompetitor_id ())
store.dispatch(u2_3pdateItem_qty1 ())
store.dispatch(u2_3pdateItem_status1 ())
store.dispatch(u2_3pdateItem_qty2 ())
store.dispatch(u2_3pdateItem_status2 ())
store.dispatch(u2_3pdateMarket_size_id ())
store.dispatch(u2_4pdateMarketSizeRecordsID ())
store.dispatch(u2_4pdateEgmed_consumption ())
store.dispatch(u2_4pdateTotal_consumption ())
store.dispatch(u2_4pdateCompetitor_id ())
store.dispatch(u2_4pdateItem_qty1 ())
store.dispatch(u2_4pdateItem_status1 ())
store.dispatch(u2_4pdateItem_qty2 ())
store.dispatch(u2_4pdateItem_status2 ())
store.dispatch(u2_4pdateMarket_size_id ())
store.dispatch(u2_5pdateMarketSizeRecordsID ())
store.dispatch(u2_5pdateEgmed_consumption ())
store.dispatch(u2_5pdateTotal_consumption ())
store.dispatch(u2_5pdateCompetitor_id ())
store.dispatch(u2_5pdateItem_qty1 ())
store.dispatch(u2_5pdateItem_status1 ())
store.dispatch(u2_5pdateItem_qty2 ())
store.dispatch(u2_5pdateItem_status2 ())
store.dispatch(u2_5pdateMarket_size_id ())
store.dispatch(u2_6pdateMarketSizeRecordsID ())
store.dispatch(u2_6pdateEgmed_consumption ())
store.dispatch(u2_6pdateTotal_consumption ())
store.dispatch(u2_6pdateCompetitor_id ())
store.dispatch(u2_6pdateItem_qty1 ())
store.dispatch(u2_6pdateItem_status1 ())
store.dispatch(u2_6pdateItem_qty2 ())
store.dispatch(u2_6pdateItem_status2 ())
store.dispatch(u2_6pdateMarket_size_id ())
store.dispatch(u2_7pdateMarketSizeRecordsID ())
store.dispatch(u2_7pdateEgmed_consumption ())
store.dispatch(u2_7pdateTotal_consumption ())
store.dispatch(u2_7pdateCompetitor_id ())
store.dispatch(u2_7pdateItem_qty1 ())
store.dispatch(u2_7pdateItem_status1 ())
store.dispatch(u2_7pdateItem_qty2 ())
store.dispatch(u2_7pdateItem_status2 ())
store.dispatch(u2_7pdateMarket_size_id ())
store.dispatch(u2_8pdateMarketSizeRecordsID ())
store.dispatch(u2_8pdateEgmed_consumption ())
store.dispatch(u2_8pdateTotal_consumption ())
store.dispatch(u2_8pdateCompetitor_id ())
store.dispatch(u2_8pdateItem_qty1 ())
store.dispatch(u2_8pdateItem_status1 ())
store.dispatch(u2_8pdateItem_qty2 ())
store.dispatch(u2_8pdateItem_status2 ())
store.dispatch(u2_8pdateMarket_size_id ())
store.dispatch(u2_9pdateMarketSizeRecordsID ())
store.dispatch(u2_9pdateEgmed_consumption ())
store.dispatch(u2_9pdateTotal_consumption ())
store.dispatch(u2_9pdateCompetitor_id ())
store.dispatch(u2_9pdateItem_qty1 ())
store.dispatch(u2_9pdateItem_status1 ())
store.dispatch(u2_9pdateItem_qty2 ())
store.dispatch(u2_9pdateItem_status2 ())
store.dispatch(u2_9pdateMarket_size_id ())
store.dispatch(u2_10pdateMarketSizeRecordsID ())
store.dispatch(u2_10pdateEgmed_consumption ())
store.dispatch(u2_10pdateTotal_consumption ())
store.dispatch(u2_10pdateCompetitor_id ())
store.dispatch(u2_10pdateItem_qty1 ())
store.dispatch(u2_10pdateItem_status1 ())
store.dispatch(u2_10pdateItem_qty2 ())
store.dispatch(u2_10pdateItem_status2 ())
store.dispatch(u2_10pdateMarket_size_id ())
store.dispatch(u2_11pdateMarketSizeRecordsID ())
store.dispatch(u2_11pdateEgmed_consumption ())
store.dispatch(u2_11pdateTotal_consumption ())
store.dispatch(u2_11pdateCompetitor_id ())
store.dispatch(u2_11pdateItem_qty1 ())
store.dispatch(u2_11pdateItem_status1 ())
store.dispatch(u2_11pdateItem_qty2 ())
store.dispatch(u2_11pdateItem_status2 ())
store.dispatch(u2_11pdateMarket_size_id ())
store.dispatch(u2_12pdateMarketSizeRecordsID ())
store.dispatch(u2_12pdateEgmed_consumption ())
store.dispatch(u2_12pdateTotal_consumption ())
store.dispatch(u2_12pdateCompetitor_id ())
store.dispatch(u2_12pdateItem_qty1 ())
store.dispatch(u2_12pdateItem_status1 ())
store.dispatch(u2_12pdateItem_qty2 ())
store.dispatch(u2_12pdateItem_status2 ())
store.dispatch(u2_12pdateMarket_size_id ())
store.dispatch(u2_13pdateMarketSizeRecordsID ())
store.dispatch(u2_13pdateEgmed_consumption ())
store.dispatch(u2_13pdateTotal_consumption ())
store.dispatch(u2_13pdateCompetitor_id ())
store.dispatch(u2_13pdateItem_qty1 ())
store.dispatch(u2_13pdateItem_status1 ())
store.dispatch(u2_13pdateItem_qty2 ())
store.dispatch(u2_13pdateItem_status2 ())
store.dispatch(u2_13pdateMarket_size_id ())
store.dispatch(u2_14pdateMarketSizeRecordsID ())
store.dispatch(u2_14pdateEgmed_consumption ())
store.dispatch(u2_14pdateTotal_consumption ())
store.dispatch(u2_14pdateCompetitor_id ())
store.dispatch(u2_14pdateItem_qty1 ())
store.dispatch(u2_14pdateItem_status1 ())
store.dispatch(u2_14pdateItem_qty2 ())
store.dispatch(u2_14pdateItem_status2 ())
store.dispatch(u2_14pdateMarket_size_id ())
store.dispatch(u2_15pdateMarketSizeRecordsID ())
store.dispatch(u2_15pdateEgmed_consumption ())
store.dispatch(u2_15pdateTotal_consumption ())
store.dispatch(u2_15pdateCompetitor_id ())
store.dispatch(u2_15pdateItem_qty1 ())
store.dispatch(u2_15pdateItem_status1 ())
store.dispatch(u2_15pdateItem_qty2 ())
store.dispatch(u2_15pdateItem_status2 ())
store.dispatch(u2_15pdateMarket_size_id ())
store.dispatch(u2_16pdateMarketSizeRecordsID ())
store.dispatch(u2_16pdateEgmed_consumption ())
store.dispatch(u2_16pdateTotal_consumption ())
store.dispatch(u2_16pdateCompetitor_id ())
store.dispatch(u2_16pdateItem_qty1 ())
store.dispatch(u2_16pdateItem_status1 ())
store.dispatch(u2_16pdateItem_qty2 ())
store.dispatch(u2_16pdateItem_status2 ())
store.dispatch(u2_16pdateMarket_size_id ())
store.dispatch(u3_0pdateMarketSizeRecordsID ())
store.dispatch(u3_0pdateEgmed_consumption ())
store.dispatch(u3_0pdateTotal_consumption ())
store.dispatch(u3_0pdateCompetitor_id ())
store.dispatch(u3_0pdateItem_qty1 ())
store.dispatch(u3_0pdateItem_status1 ())
store.dispatch(u3_0pdateItem_qty2 ())
store.dispatch(u3_0pdateItem_status2 ())
store.dispatch(u3_0pdateMarket_size_id ())
store.dispatch(u3_1pdateMarketSizeRecordsID ())
store.dispatch(u3_1pdateEgmed_consumption ())
store.dispatch(u3_1pdateTotal_consumption ())
store.dispatch(u3_1pdateCompetitor_id ())
store.dispatch(u3_1pdateItem_qty1 ())
store.dispatch(u3_1pdateItem_status1 ())
store.dispatch(u3_1pdateItem_qty2 ())
store.dispatch(u3_1pdateItem_status2 ())
store.dispatch(u3_1pdateMarket_size_id ())
store.dispatch(u3_2pdateMarketSizeRecordsID ())
store.dispatch(u3_2pdateEgmed_consumption ())
store.dispatch(u3_2pdateTotal_consumption ())
store.dispatch(u3_2pdateCompetitor_id ())
store.dispatch(u3_2pdateItem_qty1 ())
store.dispatch(u3_2pdateItem_status1 ())
store.dispatch(u3_2pdateItem_qty2 ())
store.dispatch(u3_2pdateItem_status2 ())
store.dispatch(u3_2pdateMarket_size_id ())
store.dispatch(u3_3pdateMarketSizeRecordsID ())
store.dispatch(u3_3pdateEgmed_consumption ())
store.dispatch(u3_3pdateTotal_consumption ())
store.dispatch(u3_3pdateCompetitor_id ())
store.dispatch(u3_3pdateItem_qty1 ())
store.dispatch(u3_3pdateItem_status1 ())
store.dispatch(u3_3pdateItem_qty2 ())
store.dispatch(u3_3pdateItem_status2 ())
store.dispatch(u3_3pdateMarket_size_id ())
store.dispatch(u3_4pdateMarketSizeRecordsID ())
store.dispatch(u3_4pdateEgmed_consumption ())
store.dispatch(u3_4pdateTotal_consumption ())
store.dispatch(u3_4pdateCompetitor_id ())
store.dispatch(u3_4pdateItem_qty1 ())
store.dispatch(u3_4pdateItem_status1 ())
store.dispatch(u3_4pdateItem_qty2 ())
store.dispatch(u3_4pdateItem_status2 ())
store.dispatch(u3_4pdateMarket_size_id ())
store.dispatch(u3_5pdateMarketSizeRecordsID ())
store.dispatch(u3_5pdateEgmed_consumption ())
store.dispatch(u3_5pdateTotal_consumption ())
store.dispatch(u3_5pdateCompetitor_id ())
store.dispatch(u3_5pdateItem_qty1 ())
store.dispatch(u3_5pdateItem_status1 ())
store.dispatch(u3_5pdateItem_qty2 ())
store.dispatch(u3_5pdateItem_status2 ())
store.dispatch(u3_5pdateMarket_size_id ())
store.dispatch(u3_6pdateMarketSizeRecordsID ())
store.dispatch(u3_6pdateEgmed_consumption ())
store.dispatch(u3_6pdateTotal_consumption ())
store.dispatch(u3_6pdateCompetitor_id ())
store.dispatch(u3_6pdateItem_qty1 ())
store.dispatch(u3_6pdateItem_status1 ())
store.dispatch(u3_6pdateItem_qty2 ())
store.dispatch(u3_6pdateItem_status2 ())
store.dispatch(u3_6pdateMarket_size_id ())
store.dispatch(u3_7pdateMarketSizeRecordsID ())
store.dispatch(u3_7pdateEgmed_consumption ())
store.dispatch(u3_7pdateTotal_consumption ())
store.dispatch(u3_7pdateCompetitor_id ())
store.dispatch(u3_7pdateItem_qty1 ())
store.dispatch(u3_7pdateItem_status1 ())
store.dispatch(u3_7pdateItem_qty2 ())
store.dispatch(u3_7pdateItem_status2 ())
store.dispatch(u3_7pdateMarket_size_id ())
store.dispatch(u3_8pdateMarketSizeRecordsID ())
store.dispatch(u3_8pdateEgmed_consumption ())
store.dispatch(u3_8pdateTotal_consumption ())
store.dispatch(u3_8pdateCompetitor_id ())
store.dispatch(u3_8pdateItem_qty1 ())
store.dispatch(u3_8pdateItem_status1 ())
store.dispatch(u3_8pdateItem_qty2 ())
store.dispatch(u3_8pdateItem_status2 ())
store.dispatch(u3_8pdateMarket_size_id ())
store.dispatch(u3_9pdateMarketSizeRecordsID ())
store.dispatch(u3_9pdateEgmed_consumption ())
store.dispatch(u3_9pdateTotal_consumption ())
store.dispatch(u3_9pdateCompetitor_id ())
store.dispatch(u3_9pdateItem_qty1 ())
store.dispatch(u3_9pdateItem_status1 ())
store.dispatch(u3_9pdateItem_qty2 ())
store.dispatch(u3_9pdateItem_status2 ())
store.dispatch(u3_9pdateMarket_size_id ())
store.dispatch(u3_10pdateMarketSizeRecordsID ())
store.dispatch(u3_10pdateEgmed_consumption ())
store.dispatch(u3_10pdateTotal_consumption ())
store.dispatch(u3_10pdateCompetitor_id ())
store.dispatch(u3_10pdateItem_qty1 ())
store.dispatch(u3_10pdateItem_status1 ())
store.dispatch(u3_10pdateItem_qty2 ())
store.dispatch(u3_10pdateItem_status2 ())
store.dispatch(u3_10pdateMarket_size_id ())
store.dispatch(u3_11pdateMarketSizeRecordsID ())
store.dispatch(u3_11pdateEgmed_consumption ())
store.dispatch(u3_11pdateTotal_consumption ())
store.dispatch(u3_11pdateCompetitor_id ())
store.dispatch(u3_11pdateItem_qty1 ())
store.dispatch(u3_11pdateItem_status1 ())
store.dispatch(u3_11pdateItem_qty2 ())
store.dispatch(u3_11pdateItem_status2 ())
store.dispatch(u3_11pdateMarket_size_id ())
store.dispatch(u3_12pdateMarketSizeRecordsID ())
store.dispatch(u3_12pdateEgmed_consumption ())
store.dispatch(u3_12pdateTotal_consumption ())
store.dispatch(u3_12pdateCompetitor_id ())
store.dispatch(u3_12pdateItem_qty1 ())
store.dispatch(u3_12pdateItem_status1 ())
store.dispatch(u3_12pdateItem_qty2 ())
store.dispatch(u3_12pdateItem_status2 ())
store.dispatch(u3_12pdateMarket_size_id ())
store.dispatch(u3_13pdateMarketSizeRecordsID ())
store.dispatch(u3_13pdateEgmed_consumption ())
store.dispatch(u3_13pdateTotal_consumption ())
store.dispatch(u3_13pdateCompetitor_id ())
store.dispatch(u3_13pdateItem_qty1 ())
store.dispatch(u3_13pdateItem_status1 ())
store.dispatch(u3_13pdateItem_qty2 ())
store.dispatch(u3_13pdateItem_status2 ())
store.dispatch(u3_13pdateMarket_size_id ())
store.dispatch(u3_14pdateMarketSizeRecordsID ())
store.dispatch(u3_14pdateEgmed_consumption ())
store.dispatch(u3_14pdateTotal_consumption ())
store.dispatch(u3_14pdateCompetitor_id ())
store.dispatch(u3_14pdateItem_qty1 ())
store.dispatch(u3_14pdateItem_status1 ())
store.dispatch(u3_14pdateItem_qty2 ())
store.dispatch(u3_14pdateItem_status2 ())
store.dispatch(u3_14pdateMarket_size_id ())
store.dispatch(u3_15pdateMarketSizeRecordsID ())
store.dispatch(u3_15pdateEgmed_consumption ())
store.dispatch(u3_15pdateTotal_consumption ())
store.dispatch(u3_15pdateCompetitor_id ())
store.dispatch(u3_15pdateItem_qty1 ())
store.dispatch(u3_15pdateItem_status1 ())
store.dispatch(u3_15pdateItem_qty2 ())
store.dispatch(u3_15pdateItem_status2 ())
store.dispatch(u3_15pdateMarket_size_id ())
store.dispatch(u3_16pdateMarketSizeRecordsID ())
store.dispatch(u3_16pdateEgmed_consumption ())
store.dispatch(u3_16pdateTotal_consumption ())
store.dispatch(u3_16pdateCompetitor_id ())
store.dispatch(u3_16pdateItem_qty1 ())
store.dispatch(u3_16pdateItem_status1 ())
store.dispatch(u3_16pdateItem_qty2 ())
store.dispatch(u3_16pdateItem_status2 ())
store.dispatch(u3_16pdateMarket_size_id ())
store.dispatch(u4_0pdateMarketSizeRecordsID ())
store.dispatch(u4_0pdateEgmed_consumption ())
store.dispatch(u4_0pdateTotal_consumption ())
store.dispatch(u4_0pdateCompetitor_id ())
store.dispatch(u4_0pdateItem_qty1 ())
store.dispatch(u4_0pdateItem_status1 ())
store.dispatch(u4_0pdateItem_qty2 ())
store.dispatch(u4_0pdateItem_status2 ())
store.dispatch(u4_0pdateMarket_size_id ())
store.dispatch(u4_1pdateMarketSizeRecordsID ())
store.dispatch(u4_1pdateEgmed_consumption ())
store.dispatch(u4_1pdateTotal_consumption ())
store.dispatch(u4_1pdateCompetitor_id ())
store.dispatch(u4_1pdateItem_qty1 ())
store.dispatch(u4_1pdateItem_status1 ())
store.dispatch(u4_1pdateItem_qty2 ())
store.dispatch(u4_1pdateItem_status2 ())
store.dispatch(u4_1pdateMarket_size_id ())
store.dispatch(u4_2pdateMarketSizeRecordsID ())
store.dispatch(u4_2pdateEgmed_consumption ())
store.dispatch(u4_2pdateTotal_consumption ())
store.dispatch(u4_2pdateCompetitor_id ())
store.dispatch(u4_2pdateItem_qty1 ())
store.dispatch(u4_2pdateItem_status1 ())
store.dispatch(u4_2pdateItem_qty2 ())
store.dispatch(u4_2pdateItem_status2 ())
store.dispatch(u4_2pdateMarket_size_id ())
store.dispatch(u4_3pdateMarketSizeRecordsID ())
store.dispatch(u4_3pdateEgmed_consumption ())
store.dispatch(u4_3pdateTotal_consumption ())
store.dispatch(u4_3pdateCompetitor_id ())
store.dispatch(u4_3pdateItem_qty1 ())
store.dispatch(u4_3pdateItem_status1 ())
store.dispatch(u4_3pdateItem_qty2 ())
store.dispatch(u4_3pdateItem_status2 ())
store.dispatch(u4_3pdateMarket_size_id ())
store.dispatch(u4_4pdateMarketSizeRecordsID ())
store.dispatch(u4_4pdateEgmed_consumption ())
store.dispatch(u4_4pdateTotal_consumption ())
store.dispatch(u4_4pdateCompetitor_id ())
store.dispatch(u4_4pdateItem_qty1 ())
store.dispatch(u4_4pdateItem_status1 ())
store.dispatch(u4_4pdateItem_qty2 ())
store.dispatch(u4_4pdateItem_status2 ())
store.dispatch(u4_4pdateMarket_size_id ())
store.dispatch(u4_5pdateMarketSizeRecordsID ())
store.dispatch(u4_5pdateEgmed_consumption ())
store.dispatch(u4_5pdateTotal_consumption ())
store.dispatch(u4_5pdateCompetitor_id ())
store.dispatch(u4_5pdateItem_qty1 ())
store.dispatch(u4_5pdateItem_status1 ())
store.dispatch(u4_5pdateItem_qty2 ())
store.dispatch(u4_5pdateItem_status2 ())
store.dispatch(u4_5pdateMarket_size_id ())
store.dispatch(u4_6pdateMarketSizeRecordsID ())
store.dispatch(u4_6pdateEgmed_consumption ())
store.dispatch(u4_6pdateTotal_consumption ())
store.dispatch(u4_6pdateCompetitor_id ())
store.dispatch(u4_6pdateItem_qty1 ())
store.dispatch(u4_6pdateItem_status1 ())
store.dispatch(u4_6pdateItem_qty2 ())
store.dispatch(u4_6pdateItem_status2 ())
store.dispatch(u4_6pdateMarket_size_id ())
store.dispatch(u4_7pdateMarketSizeRecordsID ())
store.dispatch(u4_7pdateEgmed_consumption ())
store.dispatch(u4_7pdateTotal_consumption ())
store.dispatch(u4_7pdateCompetitor_id ())
store.dispatch(u4_7pdateItem_qty1 ())
store.dispatch(u4_7pdateItem_status1 ())
store.dispatch(u4_7pdateItem_qty2 ())
store.dispatch(u4_7pdateItem_status2 ())
store.dispatch(u4_7pdateMarket_size_id ())
store.dispatch(u4_8pdateMarketSizeRecordsID ())
store.dispatch(u4_8pdateEgmed_consumption ())
store.dispatch(u4_8pdateTotal_consumption ())
store.dispatch(u4_8pdateCompetitor_id ())
store.dispatch(u4_8pdateItem_qty1 ())
store.dispatch(u4_8pdateItem_status1 ())
store.dispatch(u4_8pdateItem_qty2 ())
store.dispatch(u4_8pdateItem_status2 ())
store.dispatch(u4_8pdateMarket_size_id ())
store.dispatch(u4_9pdateMarketSizeRecordsID ())
store.dispatch(u4_9pdateEgmed_consumption ())
store.dispatch(u4_9pdateTotal_consumption ())
store.dispatch(u4_9pdateCompetitor_id ())
store.dispatch(u4_9pdateItem_qty1 ())
store.dispatch(u4_9pdateItem_status1 ())
store.dispatch(u4_9pdateItem_qty2 ())
store.dispatch(u4_9pdateItem_status2 ())
store.dispatch(u4_9pdateMarket_size_id ())
store.dispatch(u4_10pdateMarketSizeRecordsID ())
store.dispatch(u4_10pdateEgmed_consumption ())
store.dispatch(u4_10pdateTotal_consumption ())
store.dispatch(u4_10pdateCompetitor_id ())
store.dispatch(u4_10pdateItem_qty1 ())
store.dispatch(u4_10pdateItem_status1 ())
store.dispatch(u4_10pdateItem_qty2 ())
store.dispatch(u4_10pdateItem_status2 ())
store.dispatch(u4_10pdateMarket_size_id ())
store.dispatch(u4_11pdateMarketSizeRecordsID ())
store.dispatch(u4_11pdateEgmed_consumption ())
store.dispatch(u4_11pdateTotal_consumption ())
store.dispatch(u4_11pdateCompetitor_id ())
store.dispatch(u4_11pdateItem_qty1 ())
store.dispatch(u4_11pdateItem_status1 ())
store.dispatch(u4_11pdateItem_qty2 ())
store.dispatch(u4_11pdateItem_status2 ())
store.dispatch(u4_11pdateMarket_size_id ())
store.dispatch(u4_12pdateMarketSizeRecordsID ())
store.dispatch(u4_12pdateEgmed_consumption ())
store.dispatch(u4_12pdateTotal_consumption ())
store.dispatch(u4_12pdateCompetitor_id ())
store.dispatch(u4_12pdateItem_qty1 ())
store.dispatch(u4_12pdateItem_status1 ())
store.dispatch(u4_12pdateItem_qty2 ())
store.dispatch(u4_12pdateItem_status2 ())
store.dispatch(u4_12pdateMarket_size_id ())
store.dispatch(u4_13pdateMarketSizeRecordsID ())
store.dispatch(u4_13pdateEgmed_consumption ())
store.dispatch(u4_13pdateTotal_consumption ())
store.dispatch(u4_13pdateCompetitor_id ())
store.dispatch(u4_13pdateItem_qty1 ())
store.dispatch(u4_13pdateItem_status1 ())
store.dispatch(u4_13pdateItem_qty2 ())
store.dispatch(u4_13pdateItem_status2 ())
store.dispatch(u4_13pdateMarket_size_id ())
store.dispatch(u4_14pdateMarketSizeRecordsID ())
store.dispatch(u4_14pdateEgmed_consumption ())
store.dispatch(u4_14pdateTotal_consumption ())
store.dispatch(u4_14pdateCompetitor_id ())
store.dispatch(u4_14pdateItem_qty1 ())
store.dispatch(u4_14pdateItem_status1 ())
store.dispatch(u4_14pdateItem_qty2 ())
store.dispatch(u4_14pdateItem_status2 ())
store.dispatch(u4_14pdateMarket_size_id ())
store.dispatch(u4_15pdateMarketSizeRecordsID ())
store.dispatch(u4_15pdateEgmed_consumption ())
store.dispatch(u4_15pdateTotal_consumption ())
store.dispatch(u4_15pdateCompetitor_id ())
store.dispatch(u4_15pdateItem_qty1 ())
store.dispatch(u4_15pdateItem_status1 ())
store.dispatch(u4_15pdateItem_qty2 ())
store.dispatch(u4_15pdateItem_status2 ())
store.dispatch(u4_15pdateMarket_size_id ())
store.dispatch(u4_16pdateMarketSizeRecordsID ())
store.dispatch(u4_16pdateEgmed_consumption ())
store.dispatch(u4_16pdateTotal_consumption ())
store.dispatch(u4_16pdateCompetitor_id ())
store.dispatch(u4_16pdateItem_qty1 ())
store.dispatch(u4_16pdateItem_status1 ())
store.dispatch(u4_16pdateItem_qty2 ())
store.dispatch(u4_16pdateItem_status2 ())
store.dispatch(u4_16pdateMarket_size_id ())
store.dispatch(u5_0pdateMarketSizeRecordsID ())
store.dispatch(u5_0pdateEgmed_consumption ())
store.dispatch(u5_0pdateTotal_consumption ())
store.dispatch(u5_0pdateCompetitor_id ())
store.dispatch(u5_0pdateItem_qty1 ())
store.dispatch(u5_0pdateItem_status1 ())
store.dispatch(u5_0pdateItem_qty2 ())
store.dispatch(u5_0pdateItem_status2 ())
store.dispatch(u5_0pdateMarket_size_id ())
store.dispatch(u5_1pdateMarketSizeRecordsID ())
store.dispatch(u5_1pdateEgmed_consumption ())
store.dispatch(u5_1pdateTotal_consumption ())
store.dispatch(u5_1pdateCompetitor_id ())
store.dispatch(u5_1pdateItem_qty1 ())
store.dispatch(u5_1pdateItem_status1 ())
store.dispatch(u5_1pdateItem_qty2 ())
store.dispatch(u5_1pdateItem_status2 ())
store.dispatch(u5_1pdateMarket_size_id ())
store.dispatch(u5_2pdateMarketSizeRecordsID ())
store.dispatch(u5_2pdateEgmed_consumption ())
store.dispatch(u5_2pdateTotal_consumption ())
store.dispatch(u5_2pdateCompetitor_id ())
store.dispatch(u5_2pdateItem_qty1 ())
store.dispatch(u5_2pdateItem_status1 ())
store.dispatch(u5_2pdateItem_qty2 ())
store.dispatch(u5_2pdateItem_status2 ())
store.dispatch(u5_2pdateMarket_size_id ())
store.dispatch(u5_3pdateMarketSizeRecordsID ())
store.dispatch(u5_3pdateEgmed_consumption ())
store.dispatch(u5_3pdateTotal_consumption ())
store.dispatch(u5_3pdateCompetitor_id ())
store.dispatch(u5_3pdateItem_qty1 ())
store.dispatch(u5_3pdateItem_status1 ())
store.dispatch(u5_3pdateItem_qty2 ())
store.dispatch(u5_3pdateItem_status2 ())
store.dispatch(u5_3pdateMarket_size_id ())
store.dispatch(u5_4pdateMarketSizeRecordsID ())
store.dispatch(u5_4pdateEgmed_consumption ())
store.dispatch(u5_4pdateTotal_consumption ())
store.dispatch(u5_4pdateCompetitor_id ())
store.dispatch(u5_4pdateItem_qty1 ())
store.dispatch(u5_4pdateItem_status1 ())
store.dispatch(u5_4pdateItem_qty2 ())
store.dispatch(u5_4pdateItem_status2 ())
store.dispatch(u5_4pdateMarket_size_id ())
store.dispatch(u5_5pdateMarketSizeRecordsID ())
store.dispatch(u5_5pdateEgmed_consumption ())
store.dispatch(u5_5pdateTotal_consumption ())
store.dispatch(u5_5pdateCompetitor_id ())
store.dispatch(u5_5pdateItem_qty1 ())
store.dispatch(u5_5pdateItem_status1 ())
store.dispatch(u5_5pdateItem_qty2 ())
store.dispatch(u5_5pdateItem_status2 ())
store.dispatch(u5_5pdateMarket_size_id ())
store.dispatch(u5_6pdateMarketSizeRecordsID ())
store.dispatch(u5_6pdateEgmed_consumption ())
store.dispatch(u5_6pdateTotal_consumption ())
store.dispatch(u5_6pdateCompetitor_id ())
store.dispatch(u5_6pdateItem_qty1 ())
store.dispatch(u5_6pdateItem_status1 ())
store.dispatch(u5_6pdateItem_qty2 ())
store.dispatch(u5_6pdateItem_status2 ())
store.dispatch(u5_6pdateMarket_size_id ())
store.dispatch(u5_7pdateMarketSizeRecordsID ())
store.dispatch(u5_7pdateEgmed_consumption ())
store.dispatch(u5_7pdateTotal_consumption ())
store.dispatch(u5_7pdateCompetitor_id ())
store.dispatch(u5_7pdateItem_qty1 ())
store.dispatch(u5_7pdateItem_status1 ())
store.dispatch(u5_7pdateItem_qty2 ())
store.dispatch(u5_7pdateItem_status2 ())
store.dispatch(u5_7pdateMarket_size_id ())
store.dispatch(u5_8pdateMarketSizeRecordsID ())
store.dispatch(u5_8pdateEgmed_consumption ())
store.dispatch(u5_8pdateTotal_consumption ())
store.dispatch(u5_8pdateCompetitor_id ())
store.dispatch(u5_8pdateItem_qty1 ())
store.dispatch(u5_8pdateItem_status1 ())
store.dispatch(u5_8pdateItem_qty2 ())
store.dispatch(u5_8pdateItem_status2 ())
store.dispatch(u5_8pdateMarket_size_id ())
store.dispatch(u5_9pdateMarketSizeRecordsID ())
store.dispatch(u5_9pdateEgmed_consumption ())
store.dispatch(u5_9pdateTotal_consumption ())
store.dispatch(u5_9pdateCompetitor_id ())
store.dispatch(u5_9pdateItem_qty1 ())
store.dispatch(u5_9pdateItem_status1 ())
store.dispatch(u5_9pdateItem_qty2 ())
store.dispatch(u5_9pdateItem_status2 ())
store.dispatch(u5_9pdateMarket_size_id ())
store.dispatch(u5_10pdateMarketSizeRecordsID ())
store.dispatch(u5_10pdateEgmed_consumption ())
store.dispatch(u5_10pdateTotal_consumption ())
store.dispatch(u5_10pdateCompetitor_id ())
store.dispatch(u5_10pdateItem_qty1 ())
store.dispatch(u5_10pdateItem_status1 ())
store.dispatch(u5_10pdateItem_qty2 ())
store.dispatch(u5_10pdateItem_status2 ())
store.dispatch(u5_10pdateMarket_size_id ())
store.dispatch(u5_11pdateMarketSizeRecordsID ())
store.dispatch(u5_11pdateEgmed_consumption ())
store.dispatch(u5_11pdateTotal_consumption ())
store.dispatch(u5_11pdateCompetitor_id ())
store.dispatch(u5_11pdateItem_qty1 ())
store.dispatch(u5_11pdateItem_status1 ())
store.dispatch(u5_11pdateItem_qty2 ())
store.dispatch(u5_11pdateItem_status2 ())
store.dispatch(u5_11pdateMarket_size_id ())
store.dispatch(u5_12pdateMarketSizeRecordsID ())
store.dispatch(u5_12pdateEgmed_consumption ())
store.dispatch(u5_12pdateTotal_consumption ())
store.dispatch(u5_12pdateCompetitor_id ())
store.dispatch(u5_12pdateItem_qty1 ())
store.dispatch(u5_12pdateItem_status1 ())
store.dispatch(u5_12pdateItem_qty2 ())
store.dispatch(u5_12pdateItem_status2 ())
store.dispatch(u5_12pdateMarket_size_id ())
store.dispatch(u5_13pdateMarketSizeRecordsID ())
store.dispatch(u5_13pdateEgmed_consumption ())
store.dispatch(u5_13pdateTotal_consumption ())
store.dispatch(u5_13pdateCompetitor_id ())
store.dispatch(u5_13pdateItem_qty1 ())
store.dispatch(u5_13pdateItem_status1 ())
store.dispatch(u5_13pdateItem_qty2 ())
store.dispatch(u5_13pdateItem_status2 ())
store.dispatch(u5_13pdateMarket_size_id ())
store.dispatch(u5_14pdateMarketSizeRecordsID ())
store.dispatch(u5_14pdateEgmed_consumption ())
store.dispatch(u5_14pdateTotal_consumption ())
store.dispatch(u5_14pdateCompetitor_id ())
store.dispatch(u5_14pdateItem_qty1 ())
store.dispatch(u5_14pdateItem_status1 ())
store.dispatch(u5_14pdateItem_qty2 ())
store.dispatch(u5_14pdateItem_status2 ())
store.dispatch(u5_14pdateMarket_size_id ())
store.dispatch(u5_15pdateMarketSizeRecordsID ())
store.dispatch(u5_15pdateEgmed_consumption ())
store.dispatch(u5_15pdateTotal_consumption ())
store.dispatch(u5_15pdateCompetitor_id ())
store.dispatch(u5_15pdateItem_qty1 ())
store.dispatch(u5_15pdateItem_status1 ())
store.dispatch(u5_15pdateItem_qty2 ())
store.dispatch(u5_15pdateItem_status2 ())
store.dispatch(u5_15pdateMarket_size_id ())
store.dispatch(u5_16pdateMarketSizeRecordsID ())
store.dispatch(u5_16pdateEgmed_consumption ())
store.dispatch(u5_16pdateTotal_consumption ())
store.dispatch(u5_16pdateCompetitor_id ())
store.dispatch(u5_16pdateItem_qty1 ())
store.dispatch(u5_16pdateItem_status1 ())
store.dispatch(u5_16pdateItem_qty2 ())
store.dispatch(u5_16pdateItem_status2 ())
store.dispatch(u5_16pdateMarket_size_id ())
store.dispatch(u6_0pdateMarketSizeRecordsID ())
store.dispatch(u6_0pdateEgmed_consumption ())
store.dispatch(u6_0pdateTotal_consumption ())
store.dispatch(u6_0pdateCompetitor_id ())
store.dispatch(u6_0pdateItem_qty1 ())
store.dispatch(u6_0pdateItem_status1 ())
store.dispatch(u6_0pdateItem_qty2 ())
store.dispatch(u6_0pdateItem_status2 ())
store.dispatch(u6_0pdateMarket_size_id ())
store.dispatch(u6_1pdateMarketSizeRecordsID ())
store.dispatch(u6_1pdateEgmed_consumption ())
store.dispatch(u6_1pdateTotal_consumption ())
store.dispatch(u6_1pdateCompetitor_id ())
store.dispatch(u6_1pdateItem_qty1 ())
store.dispatch(u6_1pdateItem_status1 ())
store.dispatch(u6_1pdateItem_qty2 ())
store.dispatch(u6_1pdateItem_status2 ())
store.dispatch(u6_1pdateMarket_size_id ())
store.dispatch(u6_2pdateMarketSizeRecordsID ())
store.dispatch(u6_2pdateEgmed_consumption ())
store.dispatch(u6_2pdateTotal_consumption ())
store.dispatch(u6_2pdateCompetitor_id ())
store.dispatch(u6_2pdateItem_qty1 ())
store.dispatch(u6_2pdateItem_status1 ())
store.dispatch(u6_2pdateItem_qty2 ())
store.dispatch(u6_2pdateItem_status2 ())
store.dispatch(u6_2pdateMarket_size_id ())
store.dispatch(u6_3pdateMarketSizeRecordsID ())
store.dispatch(u6_3pdateEgmed_consumption ())
store.dispatch(u6_3pdateTotal_consumption ())
store.dispatch(u6_3pdateCompetitor_id ())
store.dispatch(u6_3pdateItem_qty1 ())
store.dispatch(u6_3pdateItem_status1 ())
store.dispatch(u6_3pdateItem_qty2 ())
store.dispatch(u6_3pdateItem_status2 ())
store.dispatch(u6_3pdateMarket_size_id ())
store.dispatch(u6_4pdateMarketSizeRecordsID ())
store.dispatch(u6_4pdateEgmed_consumption ())
store.dispatch(u6_4pdateTotal_consumption ())
store.dispatch(u6_4pdateCompetitor_id ())
store.dispatch(u6_4pdateItem_qty1 ())
store.dispatch(u6_4pdateItem_status1 ())
store.dispatch(u6_4pdateItem_qty2 ())
store.dispatch(u6_4pdateItem_status2 ())
store.dispatch(u6_4pdateMarket_size_id ())
store.dispatch(u6_5pdateMarketSizeRecordsID ())
store.dispatch(u6_5pdateEgmed_consumption ())
store.dispatch(u6_5pdateTotal_consumption ())
store.dispatch(u6_5pdateCompetitor_id ())
store.dispatch(u6_5pdateItem_qty1 ())
store.dispatch(u6_5pdateItem_status1 ())
store.dispatch(u6_5pdateItem_qty2 ())
store.dispatch(u6_5pdateItem_status2 ())
store.dispatch(u6_5pdateMarket_size_id ())
store.dispatch(u6_6pdateMarketSizeRecordsID ())
store.dispatch(u6_6pdateEgmed_consumption ())
store.dispatch(u6_6pdateTotal_consumption ())
store.dispatch(u6_6pdateCompetitor_id ())
store.dispatch(u6_6pdateItem_qty1 ())
store.dispatch(u6_6pdateItem_status1 ())
store.dispatch(u6_6pdateItem_qty2 ())
store.dispatch(u6_6pdateItem_status2 ())
store.dispatch(u6_6pdateMarket_size_id ())
store.dispatch(u6_7pdateMarketSizeRecordsID ())
store.dispatch(u6_7pdateEgmed_consumption ())
store.dispatch(u6_7pdateTotal_consumption ())
store.dispatch(u6_7pdateCompetitor_id ())
store.dispatch(u6_7pdateItem_qty1 ())
store.dispatch(u6_7pdateItem_status1 ())
store.dispatch(u6_7pdateItem_qty2 ())
store.dispatch(u6_7pdateItem_status2 ())
store.dispatch(u6_7pdateMarket_size_id ())
store.dispatch(u6_8pdateMarketSizeRecordsID ())
store.dispatch(u6_8pdateEgmed_consumption ())
store.dispatch(u6_8pdateTotal_consumption ())
store.dispatch(u6_8pdateCompetitor_id ())
store.dispatch(u6_8pdateItem_qty1 ())
store.dispatch(u6_8pdateItem_status1 ())
store.dispatch(u6_8pdateItem_qty2 ())
store.dispatch(u6_8pdateItem_status2 ())
store.dispatch(u6_8pdateMarket_size_id ())
store.dispatch(u6_9pdateMarketSizeRecordsID ())
store.dispatch(u6_9pdateEgmed_consumption ())
store.dispatch(u6_9pdateTotal_consumption ())
store.dispatch(u6_9pdateCompetitor_id ())
store.dispatch(u6_9pdateItem_qty1 ())
store.dispatch(u6_9pdateItem_status1 ())
store.dispatch(u6_9pdateItem_qty2 ())
store.dispatch(u6_9pdateItem_status2 ())
store.dispatch(u6_9pdateMarket_size_id ())
store.dispatch(u6_10pdateMarketSizeRecordsID ())
store.dispatch(u6_10pdateEgmed_consumption ())
store.dispatch(u6_10pdateTotal_consumption ())
store.dispatch(u6_10pdateCompetitor_id ())
store.dispatch(u6_10pdateItem_qty1 ())
store.dispatch(u6_10pdateItem_status1 ())
store.dispatch(u6_10pdateItem_qty2 ())
store.dispatch(u6_10pdateItem_status2 ())
store.dispatch(u6_10pdateMarket_size_id ())
store.dispatch(u6_11pdateMarketSizeRecordsID ())
store.dispatch(u6_11pdateEgmed_consumption ())
store.dispatch(u6_11pdateTotal_consumption ())
store.dispatch(u6_11pdateCompetitor_id ())
store.dispatch(u6_11pdateItem_qty1 ())
store.dispatch(u6_11pdateItem_status1 ())
store.dispatch(u6_11pdateItem_qty2 ())
store.dispatch(u6_11pdateItem_status2 ())
store.dispatch(u6_11pdateMarket_size_id ())
store.dispatch(u6_12pdateMarketSizeRecordsID ())
store.dispatch(u6_12pdateEgmed_consumption ())
store.dispatch(u6_12pdateTotal_consumption ())
store.dispatch(u6_12pdateCompetitor_id ())
store.dispatch(u6_12pdateItem_qty1 ())
store.dispatch(u6_12pdateItem_status1 ())
store.dispatch(u6_12pdateItem_qty2 ())
store.dispatch(u6_12pdateItem_status2 ())
store.dispatch(u6_12pdateMarket_size_id ())
store.dispatch(u6_13pdateMarketSizeRecordsID ())
store.dispatch(u6_13pdateEgmed_consumption ())
store.dispatch(u6_13pdateTotal_consumption ())
store.dispatch(u6_13pdateCompetitor_id ())
store.dispatch(u6_13pdateItem_qty1 ())
store.dispatch(u6_13pdateItem_status1 ())
store.dispatch(u6_13pdateItem_qty2 ())
store.dispatch(u6_13pdateItem_status2 ())
store.dispatch(u6_13pdateMarket_size_id ())
store.dispatch(u6_14pdateMarketSizeRecordsID ())
store.dispatch(u6_14pdateEgmed_consumption ())
store.dispatch(u6_14pdateTotal_consumption ())
store.dispatch(u6_14pdateCompetitor_id ())
store.dispatch(u6_14pdateItem_qty1 ())
store.dispatch(u6_14pdateItem_status1 ())
store.dispatch(u6_14pdateItem_qty2 ())
store.dispatch(u6_14pdateItem_status2 ())
store.dispatch(u6_14pdateMarket_size_id ())
store.dispatch(u6_15pdateMarketSizeRecordsID ())
store.dispatch(u6_15pdateEgmed_consumption ())
store.dispatch(u6_15pdateTotal_consumption ())
store.dispatch(u6_15pdateCompetitor_id ())
store.dispatch(u6_15pdateItem_qty1 ())
store.dispatch(u6_15pdateItem_status1 ())
store.dispatch(u6_15pdateItem_qty2 ())
store.dispatch(u6_15pdateItem_status2 ())
store.dispatch(u6_15pdateMarket_size_id ())
store.dispatch(u6_16pdateMarketSizeRecordsID ())
store.dispatch(u6_16pdateEgmed_consumption ())
store.dispatch(u6_16pdateTotal_consumption ())
store.dispatch(u6_16pdateCompetitor_id ())
store.dispatch(u6_16pdateItem_qty1 ())
store.dispatch(u6_16pdateItem_status1 ())
store.dispatch(u6_16pdateItem_qty2 ())
store.dispatch(u6_16pdateItem_status2 ())
store.dispatch(u6_16pdateMarket_size_id ())
store.dispatch(u7_0pdateMarketSizeRecordsID ())
store.dispatch(u7_0pdateEgmed_consumption ())
store.dispatch(u7_0pdateTotal_consumption ())
store.dispatch(u7_0pdateCompetitor_id ())
store.dispatch(u7_0pdateItem_qty1 ())
store.dispatch(u7_0pdateItem_status1 ())
store.dispatch(u7_0pdateItem_qty2 ())
store.dispatch(u7_0pdateItem_status2 ())
store.dispatch(u7_0pdateMarket_size_id ())
store.dispatch(u7_1pdateMarketSizeRecordsID ())
store.dispatch(u7_1pdateEgmed_consumption ())
store.dispatch(u7_1pdateTotal_consumption ())
store.dispatch(u7_1pdateCompetitor_id ())
store.dispatch(u7_1pdateItem_qty1 ())
store.dispatch(u7_1pdateItem_status1 ())
store.dispatch(u7_1pdateItem_qty2 ())
store.dispatch(u7_1pdateItem_status2 ())
store.dispatch(u7_1pdateMarket_size_id ())
store.dispatch(u7_2pdateMarketSizeRecordsID ())
store.dispatch(u7_2pdateEgmed_consumption ())
store.dispatch(u7_2pdateTotal_consumption ())
store.dispatch(u7_2pdateCompetitor_id ())
store.dispatch(u7_2pdateItem_qty1 ())
store.dispatch(u7_2pdateItem_status1 ())
store.dispatch(u7_2pdateItem_qty2 ())
store.dispatch(u7_2pdateItem_status2 ())
store.dispatch(u7_2pdateMarket_size_id ())
store.dispatch(u7_3pdateMarketSizeRecordsID ())
store.dispatch(u7_3pdateEgmed_consumption ())
store.dispatch(u7_3pdateTotal_consumption ())
store.dispatch(u7_3pdateCompetitor_id ())
store.dispatch(u7_3pdateItem_qty1 ())
store.dispatch(u7_3pdateItem_status1 ())
store.dispatch(u7_3pdateItem_qty2 ())
store.dispatch(u7_3pdateItem_status2 ())
store.dispatch(u7_3pdateMarket_size_id ())
store.dispatch(u7_4pdateMarketSizeRecordsID ())
store.dispatch(u7_4pdateEgmed_consumption ())
store.dispatch(u7_4pdateTotal_consumption ())
store.dispatch(u7_4pdateCompetitor_id ())
store.dispatch(u7_4pdateItem_qty1 ())
store.dispatch(u7_4pdateItem_status1 ())
store.dispatch(u7_4pdateItem_qty2 ())
store.dispatch(u7_4pdateItem_status2 ())
store.dispatch(u7_4pdateMarket_size_id ())
store.dispatch(u7_5pdateMarketSizeRecordsID ())
store.dispatch(u7_5pdateEgmed_consumption ())
store.dispatch(u7_5pdateTotal_consumption ())
store.dispatch(u7_5pdateCompetitor_id ())
store.dispatch(u7_5pdateItem_qty1 ())
store.dispatch(u7_5pdateItem_status1 ())
store.dispatch(u7_5pdateItem_qty2 ())
store.dispatch(u7_5pdateItem_status2 ())
store.dispatch(u7_5pdateMarket_size_id ())
store.dispatch(u7_6pdateMarketSizeRecordsID ())
store.dispatch(u7_6pdateEgmed_consumption ())
store.dispatch(u7_6pdateTotal_consumption ())
store.dispatch(u7_6pdateCompetitor_id ())
store.dispatch(u7_6pdateItem_qty1 ())
store.dispatch(u7_6pdateItem_status1 ())
store.dispatch(u7_6pdateItem_qty2 ())
store.dispatch(u7_6pdateItem_status2 ())
store.dispatch(u7_6pdateMarket_size_id ())
store.dispatch(u7_7pdateMarketSizeRecordsID ())
store.dispatch(u7_7pdateEgmed_consumption ())
store.dispatch(u7_7pdateTotal_consumption ())
store.dispatch(u7_7pdateCompetitor_id ())
store.dispatch(u7_7pdateItem_qty1 ())
store.dispatch(u7_7pdateItem_status1 ())
store.dispatch(u7_7pdateItem_qty2 ())
store.dispatch(u7_7pdateItem_status2 ())
store.dispatch(u7_7pdateMarket_size_id ())
store.dispatch(u7_8pdateMarketSizeRecordsID ())
store.dispatch(u7_8pdateEgmed_consumption ())
store.dispatch(u7_8pdateTotal_consumption ())
store.dispatch(u7_8pdateCompetitor_id ())
store.dispatch(u7_8pdateItem_qty1 ())
store.dispatch(u7_8pdateItem_status1 ())
store.dispatch(u7_8pdateItem_qty2 ())
store.dispatch(u7_8pdateItem_status2 ())
store.dispatch(u7_8pdateMarket_size_id ())
store.dispatch(u7_9pdateMarketSizeRecordsID ())
store.dispatch(u7_9pdateEgmed_consumption ())
store.dispatch(u7_9pdateTotal_consumption ())
store.dispatch(u7_9pdateCompetitor_id ())
store.dispatch(u7_9pdateItem_qty1 ())
store.dispatch(u7_9pdateItem_status1 ())
store.dispatch(u7_9pdateItem_qty2 ())
store.dispatch(u7_9pdateItem_status2 ())
store.dispatch(u7_9pdateMarket_size_id ())
store.dispatch(u7_10pdateMarketSizeRecordsID ())
store.dispatch(u7_10pdateEgmed_consumption ())
store.dispatch(u7_10pdateTotal_consumption ())
store.dispatch(u7_10pdateCompetitor_id ())
store.dispatch(u7_10pdateItem_qty1 ())
store.dispatch(u7_10pdateItem_status1 ())
store.dispatch(u7_10pdateItem_qty2 ())
store.dispatch(u7_10pdateItem_status2 ())
store.dispatch(u7_10pdateMarket_size_id ())
store.dispatch(u7_11pdateMarketSizeRecordsID ())
store.dispatch(u7_11pdateEgmed_consumption ())
store.dispatch(u7_11pdateTotal_consumption ())
store.dispatch(u7_11pdateCompetitor_id ())
store.dispatch(u7_11pdateItem_qty1 ())
store.dispatch(u7_11pdateItem_status1 ())
store.dispatch(u7_11pdateItem_qty2 ())
store.dispatch(u7_11pdateItem_status2 ())
store.dispatch(u7_11pdateMarket_size_id ())
store.dispatch(u7_12pdateMarketSizeRecordsID ())
store.dispatch(u7_12pdateEgmed_consumption ())
store.dispatch(u7_12pdateTotal_consumption ())
store.dispatch(u7_12pdateCompetitor_id ())
store.dispatch(u7_12pdateItem_qty1 ())
store.dispatch(u7_12pdateItem_status1 ())
store.dispatch(u7_12pdateItem_qty2 ())
store.dispatch(u7_12pdateItem_status2 ())
store.dispatch(u7_12pdateMarket_size_id ())
store.dispatch(u7_13pdateMarketSizeRecordsID ())
store.dispatch(u7_13pdateEgmed_consumption ())
store.dispatch(u7_13pdateTotal_consumption ())
store.dispatch(u7_13pdateCompetitor_id ())
store.dispatch(u7_13pdateItem_qty1 ())
store.dispatch(u7_13pdateItem_status1 ())
store.dispatch(u7_13pdateItem_qty2 ())
store.dispatch(u7_13pdateItem_status2 ())
store.dispatch(u7_13pdateMarket_size_id ())
store.dispatch(u7_14pdateMarketSizeRecordsID ())
store.dispatch(u7_14pdateEgmed_consumption ())
store.dispatch(u7_14pdateTotal_consumption ())
store.dispatch(u7_14pdateCompetitor_id ())
store.dispatch(u7_14pdateItem_qty1 ())
store.dispatch(u7_14pdateItem_status1 ())
store.dispatch(u7_14pdateItem_qty2 ())
store.dispatch(u7_14pdateItem_status2 ())
store.dispatch(u7_14pdateMarket_size_id ())
store.dispatch(u7_15pdateMarketSizeRecordsID ())
store.dispatch(u7_15pdateEgmed_consumption ())
store.dispatch(u7_15pdateTotal_consumption ())
store.dispatch(u7_15pdateCompetitor_id ())
store.dispatch(u7_15pdateItem_qty1 ())
store.dispatch(u7_15pdateItem_status1 ())
store.dispatch(u7_15pdateItem_qty2 ())
store.dispatch(u7_15pdateItem_status2 ())
store.dispatch(u7_15pdateMarket_size_id ())
store.dispatch(u7_16pdateMarketSizeRecordsID ())
store.dispatch(u7_16pdateEgmed_consumption ())
store.dispatch(u7_16pdateTotal_consumption ())
store.dispatch(u7_16pdateCompetitor_id ())
store.dispatch(u7_16pdateItem_qty1 ())
store.dispatch(u7_16pdateItem_status1 ())
store.dispatch(u7_16pdateItem_qty2 ())
store.dispatch(u7_16pdateItem_status2 ())
store.dispatch(u7_16pdateMarket_size_id ())
store.dispatch(u8_0pdateMarketSizeRecordsID ())
store.dispatch(u8_0pdateEgmed_consumption ())
store.dispatch(u8_0pdateTotal_consumption ())
store.dispatch(u8_0pdateCompetitor_id ())
store.dispatch(u8_0pdateItem_qty1 ())
store.dispatch(u8_0pdateItem_status1 ())
store.dispatch(u8_0pdateItem_qty2 ())
store.dispatch(u8_0pdateItem_status2 ())
store.dispatch(u8_0pdateMarket_size_id ())
store.dispatch(u8_1pdateMarketSizeRecordsID ())
store.dispatch(u8_1pdateEgmed_consumption ())
store.dispatch(u8_1pdateTotal_consumption ())
store.dispatch(u8_1pdateCompetitor_id ())
store.dispatch(u8_1pdateItem_qty1 ())
store.dispatch(u8_1pdateItem_status1 ())
store.dispatch(u8_1pdateItem_qty2 ())
store.dispatch(u8_1pdateItem_status2 ())
store.dispatch(u8_1pdateMarket_size_id ())
store.dispatch(u8_2pdateMarketSizeRecordsID ())
store.dispatch(u8_2pdateEgmed_consumption ())
store.dispatch(u8_2pdateTotal_consumption ())
store.dispatch(u8_2pdateCompetitor_id ())
store.dispatch(u8_2pdateItem_qty1 ())
store.dispatch(u8_2pdateItem_status1 ())
store.dispatch(u8_2pdateItem_qty2 ())
store.dispatch(u8_2pdateItem_status2 ())
store.dispatch(u8_2pdateMarket_size_id ())
store.dispatch(u8_3pdateMarketSizeRecordsID ())
store.dispatch(u8_3pdateEgmed_consumption ())
store.dispatch(u8_3pdateTotal_consumption ())
store.dispatch(u8_3pdateCompetitor_id ())
store.dispatch(u8_3pdateItem_qty1 ())
store.dispatch(u8_3pdateItem_status1 ())
store.dispatch(u8_3pdateItem_qty2 ())
store.dispatch(u8_3pdateItem_status2 ())
store.dispatch(u8_3pdateMarket_size_id ())
store.dispatch(u8_4pdateMarketSizeRecordsID ())
store.dispatch(u8_4pdateEgmed_consumption ())
store.dispatch(u8_4pdateTotal_consumption ())
store.dispatch(u8_4pdateCompetitor_id ())
store.dispatch(u8_4pdateItem_qty1 ())
store.dispatch(u8_4pdateItem_status1 ())
store.dispatch(u8_4pdateItem_qty2 ())
store.dispatch(u8_4pdateItem_status2 ())
store.dispatch(u8_4pdateMarket_size_id ())
store.dispatch(u8_5pdateMarketSizeRecordsID ())
store.dispatch(u8_5pdateEgmed_consumption ())
store.dispatch(u8_5pdateTotal_consumption ())
store.dispatch(u8_5pdateCompetitor_id ())
store.dispatch(u8_5pdateItem_qty1 ())
store.dispatch(u8_5pdateItem_status1 ())
store.dispatch(u8_5pdateItem_qty2 ())
store.dispatch(u8_5pdateItem_status2 ())
store.dispatch(u8_5pdateMarket_size_id ())
store.dispatch(u8_6pdateMarketSizeRecordsID ())
store.dispatch(u8_6pdateEgmed_consumption ())
store.dispatch(u8_6pdateTotal_consumption ())
store.dispatch(u8_6pdateCompetitor_id ())
store.dispatch(u8_6pdateItem_qty1 ())
store.dispatch(u8_6pdateItem_status1 ())
store.dispatch(u8_6pdateItem_qty2 ())
store.dispatch(u8_6pdateItem_status2 ())
store.dispatch(u8_6pdateMarket_size_id ())
store.dispatch(u8_7pdateMarketSizeRecordsID ())
store.dispatch(u8_7pdateEgmed_consumption ())
store.dispatch(u8_7pdateTotal_consumption ())
store.dispatch(u8_7pdateCompetitor_id ())
store.dispatch(u8_7pdateItem_qty1 ())
store.dispatch(u8_7pdateItem_status1 ())
store.dispatch(u8_7pdateItem_qty2 ())
store.dispatch(u8_7pdateItem_status2 ())
store.dispatch(u8_7pdateMarket_size_id ())
store.dispatch(u8_8pdateMarketSizeRecordsID ())
store.dispatch(u8_8pdateEgmed_consumption ())
store.dispatch(u8_8pdateTotal_consumption ())
store.dispatch(u8_8pdateCompetitor_id ())
store.dispatch(u8_8pdateItem_qty1 ())
store.dispatch(u8_8pdateItem_status1 ())
store.dispatch(u8_8pdateItem_qty2 ())
store.dispatch(u8_8pdateItem_status2 ())
store.dispatch(u8_8pdateMarket_size_id ())
store.dispatch(u8_9pdateMarketSizeRecordsID ())
store.dispatch(u8_9pdateEgmed_consumption ())
store.dispatch(u8_9pdateTotal_consumption ())
store.dispatch(u8_9pdateCompetitor_id ())
store.dispatch(u8_9pdateItem_qty1 ())
store.dispatch(u8_9pdateItem_status1 ())
store.dispatch(u8_9pdateItem_qty2 ())
store.dispatch(u8_9pdateItem_status2 ())
store.dispatch(u8_9pdateMarket_size_id ())
store.dispatch(u8_10pdateMarketSizeRecordsID ())
store.dispatch(u8_10pdateEgmed_consumption ())
store.dispatch(u8_10pdateTotal_consumption ())
store.dispatch(u8_10pdateCompetitor_id ())
store.dispatch(u8_10pdateItem_qty1 ())
store.dispatch(u8_10pdateItem_status1 ())
store.dispatch(u8_10pdateItem_qty2 ())
store.dispatch(u8_10pdateItem_status2 ())
store.dispatch(u8_10pdateMarket_size_id ())
store.dispatch(u8_11pdateMarketSizeRecordsID ())
store.dispatch(u8_11pdateEgmed_consumption ())
store.dispatch(u8_11pdateTotal_consumption ())
store.dispatch(u8_11pdateCompetitor_id ())
store.dispatch(u8_11pdateItem_qty1 ())
store.dispatch(u8_11pdateItem_status1 ())
store.dispatch(u8_11pdateItem_qty2 ())
store.dispatch(u8_11pdateItem_status2 ())
store.dispatch(u8_11pdateMarket_size_id ())
store.dispatch(u8_12pdateMarketSizeRecordsID ())
store.dispatch(u8_12pdateEgmed_consumption ())
store.dispatch(u8_12pdateTotal_consumption ())
store.dispatch(u8_12pdateCompetitor_id ())
store.dispatch(u8_12pdateItem_qty1 ())
store.dispatch(u8_12pdateItem_status1 ())
store.dispatch(u8_12pdateItem_qty2 ())
store.dispatch(u8_12pdateItem_status2 ())
store.dispatch(u8_12pdateMarket_size_id ())
store.dispatch(u8_13pdateMarketSizeRecordsID ())
store.dispatch(u8_13pdateEgmed_consumption ())
store.dispatch(u8_13pdateTotal_consumption ())
store.dispatch(u8_13pdateCompetitor_id ())
store.dispatch(u8_13pdateItem_qty1 ())
store.dispatch(u8_13pdateItem_status1 ())
store.dispatch(u8_13pdateItem_qty2 ())
store.dispatch(u8_13pdateItem_status2 ())
store.dispatch(u8_13pdateMarket_size_id ())
store.dispatch(u8_14pdateMarketSizeRecordsID ())
store.dispatch(u8_14pdateEgmed_consumption ())
store.dispatch(u8_14pdateTotal_consumption ())
store.dispatch(u8_14pdateCompetitor_id ())
store.dispatch(u8_14pdateItem_qty1 ())
store.dispatch(u8_14pdateItem_status1 ())
store.dispatch(u8_14pdateItem_qty2 ())
store.dispatch(u8_14pdateItem_status2 ())
store.dispatch(u8_14pdateMarket_size_id ())
store.dispatch(u8_15pdateMarketSizeRecordsID ())
store.dispatch(u8_15pdateEgmed_consumption ())
store.dispatch(u8_15pdateTotal_consumption ())
store.dispatch(u8_15pdateCompetitor_id ())
store.dispatch(u8_15pdateItem_qty1 ())
store.dispatch(u8_15pdateItem_status1 ())
store.dispatch(u8_15pdateItem_qty2 ())
store.dispatch(u8_15pdateItem_status2 ())
store.dispatch(u8_15pdateMarket_size_id ())
store.dispatch(u8_16pdateMarketSizeRecordsID ())
store.dispatch(u8_16pdateEgmed_consumption ())
store.dispatch(u8_16pdateTotal_consumption ())
store.dispatch(u8_16pdateCompetitor_id ())
store.dispatch(u8_16pdateItem_qty1 ())
store.dispatch(u8_16pdateItem_status1 ())
store.dispatch(u8_16pdateItem_qty2 ())
store.dispatch(u8_16pdateItem_status2 ())
store.dispatch(u8_16pdateMarket_size_id ())
store.dispatch(u9_0pdateMarketSizeRecordsID ())
store.dispatch(u9_0pdateEgmed_consumption ())
store.dispatch(u9_0pdateTotal_consumption ())
store.dispatch(u9_0pdateCompetitor_id ())
store.dispatch(u9_0pdateItem_qty1 ())
store.dispatch(u9_0pdateItem_status1 ())
store.dispatch(u9_0pdateItem_qty2 ())
store.dispatch(u9_0pdateItem_status2 ())
store.dispatch(u9_0pdateMarket_size_id ())
store.dispatch(u9_1pdateMarketSizeRecordsID ())
store.dispatch(u9_1pdateEgmed_consumption ())
store.dispatch(u9_1pdateTotal_consumption ())
store.dispatch(u9_1pdateCompetitor_id ())
store.dispatch(u9_1pdateItem_qty1 ())
store.dispatch(u9_1pdateItem_status1 ())
store.dispatch(u9_1pdateItem_qty2 ())
store.dispatch(u9_1pdateItem_status2 ())
store.dispatch(u9_1pdateMarket_size_id ())
store.dispatch(u9_2pdateMarketSizeRecordsID ())
store.dispatch(u9_2pdateEgmed_consumption ())
store.dispatch(u9_2pdateTotal_consumption ())
store.dispatch(u9_2pdateCompetitor_id ())
store.dispatch(u9_2pdateItem_qty1 ())
store.dispatch(u9_2pdateItem_status1 ())
store.dispatch(u9_2pdateItem_qty2 ())
store.dispatch(u9_2pdateItem_status2 ())
store.dispatch(u9_2pdateMarket_size_id ())
store.dispatch(u9_3pdateMarketSizeRecordsID ())
store.dispatch(u9_3pdateEgmed_consumption ())
store.dispatch(u9_3pdateTotal_consumption ())
store.dispatch(u9_3pdateCompetitor_id ())
store.dispatch(u9_3pdateItem_qty1 ())
store.dispatch(u9_3pdateItem_status1 ())
store.dispatch(u9_3pdateItem_qty2 ())
store.dispatch(u9_3pdateItem_status2 ())
store.dispatch(u9_3pdateMarket_size_id ())
store.dispatch(u9_4pdateMarketSizeRecordsID ())
store.dispatch(u9_4pdateEgmed_consumption ())
store.dispatch(u9_4pdateTotal_consumption ())
store.dispatch(u9_4pdateCompetitor_id ())
store.dispatch(u9_4pdateItem_qty1 ())
store.dispatch(u9_4pdateItem_status1 ())
store.dispatch(u9_4pdateItem_qty2 ())
store.dispatch(u9_4pdateItem_status2 ())
store.dispatch(u9_4pdateMarket_size_id ())
store.dispatch(u9_5pdateMarketSizeRecordsID ())
store.dispatch(u9_5pdateEgmed_consumption ())
store.dispatch(u9_5pdateTotal_consumption ())
store.dispatch(u9_5pdateCompetitor_id ())
store.dispatch(u9_5pdateItem_qty1 ())
store.dispatch(u9_5pdateItem_status1 ())
store.dispatch(u9_5pdateItem_qty2 ())
store.dispatch(u9_5pdateItem_status2 ())
store.dispatch(u9_5pdateMarket_size_id ())
store.dispatch(u9_6pdateMarketSizeRecordsID ())
store.dispatch(u9_6pdateEgmed_consumption ())
store.dispatch(u9_6pdateTotal_consumption ())
store.dispatch(u9_6pdateCompetitor_id ())
store.dispatch(u9_6pdateItem_qty1 ())
store.dispatch(u9_6pdateItem_status1 ())
store.dispatch(u9_6pdateItem_qty2 ())
store.dispatch(u9_6pdateItem_status2 ())
store.dispatch(u9_6pdateMarket_size_id ())
store.dispatch(u9_7pdateMarketSizeRecordsID ())
store.dispatch(u9_7pdateEgmed_consumption ())
store.dispatch(u9_7pdateTotal_consumption ())
store.dispatch(u9_7pdateCompetitor_id ())
store.dispatch(u9_7pdateItem_qty1 ())
store.dispatch(u9_7pdateItem_status1 ())
store.dispatch(u9_7pdateItem_qty2 ())
store.dispatch(u9_7pdateItem_status2 ())
store.dispatch(u9_7pdateMarket_size_id ())
store.dispatch(u9_8pdateMarketSizeRecordsID ())
store.dispatch(u9_8pdateEgmed_consumption ())
store.dispatch(u9_8pdateTotal_consumption ())
store.dispatch(u9_8pdateCompetitor_id ())
store.dispatch(u9_8pdateItem_qty1 ())
store.dispatch(u9_8pdateItem_status1 ())
store.dispatch(u9_8pdateItem_qty2 ())
store.dispatch(u9_8pdateItem_status2 ())
store.dispatch(u9_8pdateMarket_size_id ())
store.dispatch(u9_9pdateMarketSizeRecordsID ())
store.dispatch(u9_9pdateEgmed_consumption ())
store.dispatch(u9_9pdateTotal_consumption ())
store.dispatch(u9_9pdateCompetitor_id ())
store.dispatch(u9_9pdateItem_qty1 ())
store.dispatch(u9_9pdateItem_status1 ())
store.dispatch(u9_9pdateItem_qty2 ())
store.dispatch(u9_9pdateItem_status2 ())
store.dispatch(u9_9pdateMarket_size_id ())
store.dispatch(u9_10pdateMarketSizeRecordsID ())
store.dispatch(u9_10pdateEgmed_consumption ())
store.dispatch(u9_10pdateTotal_consumption ())
store.dispatch(u9_10pdateCompetitor_id ())
store.dispatch(u9_10pdateItem_qty1 ())
store.dispatch(u9_10pdateItem_status1 ())
store.dispatch(u9_10pdateItem_qty2 ())
store.dispatch(u9_10pdateItem_status2 ())
store.dispatch(u9_10pdateMarket_size_id ())
store.dispatch(u9_11pdateMarketSizeRecordsID ())
store.dispatch(u9_11pdateEgmed_consumption ())
store.dispatch(u9_11pdateTotal_consumption ())
store.dispatch(u9_11pdateCompetitor_id ())
store.dispatch(u9_11pdateItem_qty1 ())
store.dispatch(u9_11pdateItem_status1 ())
store.dispatch(u9_11pdateItem_qty2 ())
store.dispatch(u9_11pdateItem_status2 ())
store.dispatch(u9_11pdateMarket_size_id ())
store.dispatch(u9_12pdateMarketSizeRecordsID ())
store.dispatch(u9_12pdateEgmed_consumption ())
store.dispatch(u9_12pdateTotal_consumption ())
store.dispatch(u9_12pdateCompetitor_id ())
store.dispatch(u9_12pdateItem_qty1 ())
store.dispatch(u9_12pdateItem_status1 ())
store.dispatch(u9_12pdateItem_qty2 ())
store.dispatch(u9_12pdateItem_status2 ())
store.dispatch(u9_12pdateMarket_size_id ())
store.dispatch(u9_13pdateMarketSizeRecordsID ())
store.dispatch(u9_13pdateEgmed_consumption ())
store.dispatch(u9_13pdateTotal_consumption ())
store.dispatch(u9_13pdateCompetitor_id ())
store.dispatch(u9_13pdateItem_qty1 ())
store.dispatch(u9_13pdateItem_status1 ())
store.dispatch(u9_13pdateItem_qty2 ())
store.dispatch(u9_13pdateItem_status2 ())
store.dispatch(u9_13pdateMarket_size_id ())
store.dispatch(u9_14pdateMarketSizeRecordsID ())
store.dispatch(u9_14pdateEgmed_consumption ())
store.dispatch(u9_14pdateTotal_consumption ())
store.dispatch(u9_14pdateCompetitor_id ())
store.dispatch(u9_14pdateItem_qty1 ())
store.dispatch(u9_14pdateItem_status1 ())
store.dispatch(u9_14pdateItem_qty2 ())
store.dispatch(u9_14pdateItem_status2 ())
store.dispatch(u9_14pdateMarket_size_id ())
store.dispatch(u9_15pdateMarketSizeRecordsID ())
store.dispatch(u9_15pdateEgmed_consumption ())
store.dispatch(u9_15pdateTotal_consumption ())
store.dispatch(u9_15pdateCompetitor_id ())
store.dispatch(u9_15pdateItem_qty1 ())
store.dispatch(u9_15pdateItem_status1 ())
store.dispatch(u9_15pdateItem_qty2 ())
store.dispatch(u9_15pdateItem_status2 ())
store.dispatch(u9_15pdateMarket_size_id ())
store.dispatch(u9_16pdateMarketSizeRecordsID ())
store.dispatch(u9_16pdateEgmed_consumption ())
store.dispatch(u9_16pdateTotal_consumption ())
store.dispatch(u9_16pdateCompetitor_id ())
store.dispatch(u9_16pdateItem_qty1 ())
store.dispatch(u9_16pdateItem_status1 ())
store.dispatch(u9_16pdateItem_qty2 ())
store.dispatch(u9_16pdateItem_status2 ())
store.dispatch(u9_16pdateMarket_size_id ())

