import {Params} from "./params";

export interface IRule {
    id?: number,
    param: Params,
    value: number,
    start: Date,
    end: Date
}

export interface IRules {
    rules: IRule[]
}