import {CartesianGrid, Legend, Line, LineChart, XAxis, YAxis} from "recharts";
import React from "react";
import Tooltip from "@material-ui/core/Tooltip";

interface IProps {
    className?: string
}

const Chart = ({className}: IProps) => (
    <div className={className}>
    <LineChart width={730} height={250} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="pv" stroke="#8884d8" />
    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
</LineChart></div>)

export default Chart