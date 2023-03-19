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
    saveBtn: 0 ,
    selectedItemGroup: 0 ,
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
    marketSize: []
  }
  ,
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

    updateSaveBtn : (state, action) => { state.saveBtn = action.payload },

    updateSelectedItemGroup : (state, action) => { state.saveBtn = action.payload },

    updateMarketSize(state , action) {
    state.marketSize.push(action.payload)
    },

    delFirstMarketSize(state , action){
      state.marketSize.filter((j,inx )=> state.marketSize[0] === undefined && inx != 0 )
    },

   

  }
})



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
  updateMarketSize,
  delFirstMarketSize,
  updateSaveBtn,
  updateSelectedItemGroup

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

store.dispatch(updateSaveBtn())

store.dispatch(updateSelectedItemGroup())

// store.dispatch(updateMarketSize())


store.dispatch(delFirstMarketSize())