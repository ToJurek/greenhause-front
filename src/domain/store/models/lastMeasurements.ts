import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ILastMeasurement} from "../../../types/lastMeasurement";

export const initialState: ILastMeasurement = {
        temp: 10,
        sun: 10,
        humidity: 10,
        moisture: 10
}


const lastMeasurements = createSlice({
    name: "lastMeasurements",
    initialState,
    reducers: {
        fetchLastMeasurements: (
            state: ILastMeasurement,
            action: PayloadAction<ILastMeasurement>
        ) => {
            state = action.payload
        }
    }
})

export const {
    fetchLastMeasurements
} = lastMeasurements.actions

export const lastMeasurementsReducer = lastMeasurements.reducer