import {Button} from "react-bootstrap";
import {turnHeater, turnPump, turnVentilator} from "../../domain/store/models/deviceActivity";
import React from "react";
import {useTypedSelector} from "../../domain/store";
import {useDispatch} from "react-redux";
import styled from "styled-components";


interface IProps {
    className?: string
}

const SwitchButtons = ({className}: IProps) => {
    const data = useTypedSelector(state => state.deviceActivity)
    const dispatch = useDispatch()

    return <div className={className}>
        <Button variant={data.pump.isWorking ? "success" : "danger"}
                onClick={() => dispatch(turnPump())}>{data.pump.isWorking ?
            <span>Pump On</span> :
            <span>Pump Off</span>}</Button>
        <Button variant={data.ventilator.isWorking ? "success" : "danger"}
                onClick={() => dispatch(turnVentilator())}>{data.ventilator.isWorking ?
            <span>Ventilator On</span> : <span>Ventilator Off</span>}</Button>
        <Button variant={data.heater.isWorking ? "success" : "danger"}
                onClick={() => dispatch(turnHeater())}>{data.heater.isWorking ? <span>Heater On</span> :
            <span>Heater Off</span>}</Button>
    </div>
}

const StyledSwitchButtons = styled(SwitchButtons)`
  display: grid;
  button {
  margin: 5px;
  }
`

export default StyledSwitchButtons