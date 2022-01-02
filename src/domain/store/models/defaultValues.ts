import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IDefaultValues, IInterval} from "../../../types/defaultValues";

export const initialState: IDefaultValues  = {
        temp: {
            max: 20,
            min: 10
        },
        moisture: {
            max: 70,
            min: 60
        },
        humidity: {
            max: 70,
            min: 60
        }
}


const defaultValues = createSlice({
    name: "defaultValues",
    initialState,
    reducers: {
        fetchDefaultValues(
            state: IDefaultValues,
            action: PayloadAction<IDefaultValues>
        ) {
            state = action.payload
        },
        changeDefaultValues(
            state: IDefaultValues,
            action: PayloadAction<IDefaultValues>
        ) {
            state = action.payload
        }
    }
})

export const {
    changeDefaultValues, fetchDefaultValues
} = defaultValues.actions

export const defaultValuesReducer = defaultValues.reducer


// @ts-ignore
export  const updateDefaultValues = (newState: IDefaultValues) => async (dispatch) => {
    dispatch(changeDefaultValues(newState))
}