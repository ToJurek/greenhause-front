import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IWeather} from "../../../types/weather";
import {IMeasurement, IMeasurements} from "../../../types/measurements";
import {getWeather} from "../../../api/weather";
import moment from "moment";

export const initialState: IWeather = {
        temp: [],
        sun: [],
        humidity: [],
}



const weather = createSlice({
    name: "weather",
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
} = weather.actions

export const weatherReducer = weather.reducer

// @ts-ignore
export const fetchSun = () => dispatch =>
    // @ts-ignore
    getWeather(1639915590867, 1639918451516, "sun").then(r => dispatch(setSun(r.data)))

// @ts-ignore
export const fetchTemp = () => dispatch =>
    // @ts-ignore
    getWeather(1639915590867, 1639918451516, "temp").then(r => dispatch(setTemperature(r.data)))

// @ts-ignore
export const fetchHumidity = () => dispatch =>
    // @ts-ignore
    getWeather(1639915590867, 1639918451516, "humidity").then(r => dispatch(setHumidity(r.data)))

// @ts-ignore
export const fetchWeather = () => dispatch => {
    const end = moment().unix() ;
    const start = end - 10800
    // @ts-ignore
    getWeather(start, end, "sun").then(r => dispatch(setSun(r.data)))
    // @ts-ignore
    getWeather(start, end, "temp").then(r => dispatch(setTemperature(r.data)))
    // @ts-ignore
    getWeather(start, end, "humidity").then(r => dispatch(setHumidity(r.data)))
}