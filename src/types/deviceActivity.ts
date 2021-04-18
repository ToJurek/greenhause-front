interface IDeviceMeasurement {
    x: number,
    y: 0|1
}

export interface IDeviceActivity {
    pump: {measurements: IDeviceMeasurement[], isWorking: boolean}
    heater: {measurements: IDeviceMeasurement[], isWorking: boolean}
    ventilator: {measurements: IDeviceMeasurement[], isWorking: boolean}
}