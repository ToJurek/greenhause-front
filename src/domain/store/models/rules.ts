import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IRule, IRules} from "../../../types/rules";
import {Params} from "../../../types/params";
import {ILastMeasurement} from "../../../types/lastMeasurement";

export const initialState = {
    rules: [{
        id: 1,
        param: Params.TEMPERATURE,
        value: 12,
        start: new Date(),
        end: new Date()
    }]
}

interface IState {
    rules: IRule[]
}

const rules = createSlice({
    name: "rules",
    initialState,
    reducers: {
        fetchRules: (
            state: IState,
            action: PayloadAction<IRule[]>
        ) => {
            state.rules = action.payload
        },
        addNewRule: (
            state: IState,
            action: PayloadAction<IRule>
        ) => {
            state.rules = state.rules.concat(action.payload)
        },
        removeRule: (
            state: IState,
            action: PayloadAction<IRule>
        ) => {
            state.rules = state.rules.filter(rule => rule.id !== action.payload.id)
        }
    }
})

export const {
    fetchRules, addNewRule, removeRule
} = rules.actions

export const rulesReducer = rules.reducer