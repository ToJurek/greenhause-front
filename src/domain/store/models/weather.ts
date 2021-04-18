import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IWeather} from "../../../types/weather";

export const initialState: IWeather = {

        temp: [{x: 1, y:2}],
        sun: [{x: 1, y:2},{x: 10, y:2}],
        humidity: [{x: 1, y:2},{x: 3, y:2}, {x: 21, y:5}],
        moisture: [{x: 1, y:2},{x: 10, y:2}, {x: 21, y:5}]

}



const weather = createSlice({
    name: "weather",
    initialState,
    reducers: {
        fetchWeather: (
            state: IWeather,
            action: PayloadAction<IWeather>
        ) => {
            state = action.payload
        }
    }
})

export const {
    fetchWeather
} = weather.actions

export const weatherReducer = weather.reducer