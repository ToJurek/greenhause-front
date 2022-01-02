import {endpoints} from "../types/endpoints";
import axios from "axios"
import {IMeasurement} from "../types/measurements";

export const getMeasurements = async (startDate: number, endDate: number, parameter: string) =>
      await axios.get<IMeasurement[]>(`${endpoints.measurements}?parameter=${parameter}&start=${startDate}&end=${endDate}`)
        .catch((err: string[])  => console.error(err))


