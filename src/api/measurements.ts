import {endpoints} from "../types/endpoints";
import {IMeasurements} from "../types/measurements";
import {api} from "./api";


export const getMeasurements = async (startDate: Date, endDate: Date) =>
    api.get(`${endpoints.measurements}?start=${startDate}&end=${endDate}`)
        .catch((err: string[])  => console.error(err))


