import {IMeasurement} from "./measurements";

export interface IWeather {
    temp: IMeasurement[],
    sun: IMeasurement[],
    humidity: IMeasurement[],
    moisture: IMeasurement[]
}