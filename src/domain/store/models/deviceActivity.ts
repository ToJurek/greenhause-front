import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IDeviceActivity} from "../../../types/deviceActivity";

export const initialState: IDeviceActivity = {
        pump: {measurements: [{x:1, y:0},{x:2, y:0},{x:3, y:0},{x:4, y:0},{x:5, y:1},{x:6, y:1},{x:7, y:0}], isWorking: false},
        ventilator: {measurements: [{x:1, y:0},{x:2, y:0},{x:3, y:0},{x:4, y:0},{x:5, y:0},{x:6, y:1},{x:7, y:1}], isWorking: false},
        heater: {measurements: [{x:1, y:1},{x:2, y:1},{x:3, y:1},{x:4, y:1},{x:5, y:1},{x:6, y:1},{x:7, y:1},], isWorking: false}
}



const deviceActivity = createSlice({
    name: "deviceActivity",
    initialState,
    reducers: {
        fetchDeviceActivity: (
            state: IDeviceActivity,
            action: PayloadAction<IDeviceActivity>
        ) => {
            state = action.payload
        },
        switchHeater: (
            state: IDeviceActivity,
            action: PayloadAction<boolean>
        ) => {
            state.heater.isWorking = action.payload
        },
        switchPump: (
            state: IDeviceActivity,
            action: PayloadAction<boolean>
        ) => {
            state.pump.isWorking = action.payload
        },
        switchVentilator: (
            state: IDeviceActivity,
            action: PayloadAction<boolean>
        ) => {
            state.ventilator.isWorking = action.payload
        },
    }
})

export const {
    fetchDeviceActivity, switchHeater, switchPump, switchVentilator
} = deviceActivity.actions


// @ts-ignore
export const turnPump = () => async (dispatch, getState) => {
    dispatch(switchPump(!getState().deviceActivity.pump.isWorking))
}
// @ts-ignore
export const turnVentilator = () => async (dispatch, getState) => {
    dispatch(switchVentilator(!getState().deviceActivity.ventilator.isWorking))
}
// @ts-ignore
export const turnHeater = () => async (dispatch, getState) => {
    dispatch(switchHeater(!getState().deviceActivity.heater.isWorking))
}

export const deviceActivityReducer = deviceActivity.reducer