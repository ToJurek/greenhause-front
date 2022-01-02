import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IMeasurement, IMeasurements} from "../../../types/measurements";
import {getMeasurements} from "../../../api/measurements";
import moment from "moment";

export const initialState: IMeasurements = {

        temp: [],
        sun: [],
        humidity: [],
}



const measurements = createSlice({
    name: "measurements",
    initialState,
    reducers: {
        setTemperature: (
            state: IMeasurements,
            action: PayloadAction<IMeasurement[]>
        ) => {
            state.temp = action.payload
        },
        setSun: (
            state: IMeasurements,
            action: PayloadAction<IMeasurement[]>
        ) => {
            state.sun = action.payload
        },
        setHumidity: (
            state: IMeasurements,
            action: PayloadAction<IMeasurement[]>
        ) => {
            state.humidity = action.payload
        }
    }
})

export const {
    setTemperature,
    setSun,
    setHumidity
} = measurements.actions

export const measurementsReducer = measurements.reducer

// @ts-ignore
export const fetchSun = () => dispatch => {
    const end = moment().unix() * 1000;
    const start = end - 10800000
    // @ts-ignore
    getMeasurements(start, end, "sun").then(r => dispatch(setSun(r.data)))}

// @ts-ignore
export const fetchTemp = () => dispatch => {
    const end = moment().unix() * 1000;
    const start = end - 10800000
    // @ts-ignore
    getMeasurements(start, end, "temp").then(r => dispatch(setTemperature(r.data)))
}

// @ts-ignore
export const fetchHumidity = () => dispatch => {
    const end = moment().unix() * 1000;
    const start = end - 10800000
    // @ts-ignore
    getMeasurements(start, end, "humidity").then(r => dispatch(setHumidity(r.data)))
}