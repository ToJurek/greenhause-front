import {combineReducers} from "@reduxjs/toolkit"
import {rulesReducer} from "./models/rules";
import {lastMeasurementsReducer} from "./models/lastMeasurements";
import {measurementsReducer} from "./models/measurements";
import {systemStatusReducer} from "./models/systemStatus";
import {defaultValuesReducer} from "./models/defaultValues";
import {deviceActivityReducer} from "./models/deviceActivity";
import {weatherReducer} from "./models/weather";

const rootReducer = combineReducers({
    defaultValues: defaultValuesReducer,
    rules: rulesReducer,
    lastMeasurements: lastMeasurementsReducer,
    measurements: measurementsReducer,
    systemStatus: systemStatusReducer,
    weather: weatherReducer,
    deviceActivity: deviceActivityReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer