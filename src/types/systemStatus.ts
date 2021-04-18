export enum Status {
    CONNECTED,
    PENDING,
    ERROR
}

interface IParameterStatus {
    status: Status,
    message: string
}

export interface ISystemStatus {
    esp: IParameterStatus,
    iot: IParameterStatus,
    db: IParameterStatus,
    server: IParameterStatus,
    lambda: IParameterStatus
}