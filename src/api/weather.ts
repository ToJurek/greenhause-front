import axios from "axios";
import {IMeasurement} from "../types/measurements";
import {endpoints} from "../types/endpoints";


export const getWeather = async (startDate: number, endDate: number, parameter: string) =>
    await axios.get<IMeasurement[]>(`${endpoints.weather}?parameter=${parameter}&start=${startDate}&end=${endDate}`)
        .catch((err: string[])  => console.error(err))