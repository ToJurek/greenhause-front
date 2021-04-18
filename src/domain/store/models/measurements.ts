import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IMeasurements} from "../../../types/measurements";

export const initialState: IMeasurements = {

        temp: [{x: 1, y:2},{x: 2, y:3},{x: 3, y:4},{x: 4, y:5} ],
        sun: [],
        humidity: [{x: 3, y:2},{x: 22, y:3},{x: 23, y:4},{x: 40, y:5}],
        moisture: []

}



const measurements = createSlice({
    name: "measurements",
    initialState,
    reducers: {
        fetchMeasurements: (
            state: IMeasurements,
            action: PayloadAction<IMeasurements>
        ) => {
            state = action.payload
        }
    }
})

export const {
    fetchMeasurements
} = measurements.actions

export const measurementsReducer = measurements.reducer