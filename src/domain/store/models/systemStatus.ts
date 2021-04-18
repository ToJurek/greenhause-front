import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ISystemStatus, Status} from "../../../types/systemStatus";

export const initialState: ISystemStatus = {
        esp: {
            status: Status.CONNECTED,
            message: "Active"
        },
        iot: {
            status: Status.CONNECTED,
            message: "Active"
        },
        db: {
            status: Status.CONNECTED,
            message: "Active"
        },
        server: {
            status: Status.PENDING,
            message: "Pending"
        },
        lambda: {
            status: Status.ERROR,
            message: "Error"
        }
}

const systemStatus = createSlice({
    name: "XD",
    initialState,
    reducers: {
        fetchSystemStatus: (
            state: ISystemStatus,
            action: PayloadAction<ISystemStatus>
        ) => {
            state = action.payload
        }
    }
})

export const {
    fetchSystemStatus
} = systemStatus.actions

export const systemStatusReducer = systemStatus.reducer