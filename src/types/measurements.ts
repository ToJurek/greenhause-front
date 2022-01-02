export interface IMeasurement {
    x: number,
    y: number
}

export interface IMeasurements {
    temp: IMeasurement[],
    sun: IMeasurement[],
    humidity: IMeasurement[]
}