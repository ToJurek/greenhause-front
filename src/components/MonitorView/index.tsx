import styled from "styled-components";
import Parameter from "../Parameter"
import moisture from "../../icons/moisture.svg"
import humidity from "../../icons/humidity.svg"
import temperature from "../../icons/temperature.svg"
import cloudy from "../../icons/cloudy.svg"
import React from "react";
import { Row, Col, Button} from "react-bootstrap";
import MeasurementsButton from "../MeasurementsButton";
import DeviceButton from "../DeviceButton"
import SettingsButton from "../SettingsButton"
import chart from "../../icons/chart.svg"
import settings from "../../icons/settings.svg"
import controller from "../../icons/controller.svg"
import {Params} from "../../types/params";


interface IProps {
    className?: string,
    parameter: Params,
    setParameter: (arg: null) => void
}

const icons = [temperature,
    cloudy,
    humidity,
    moisture]


const MonitorView = ({className, parameter, setParameter}:IProps) => (
    <div className={className}>

        <Parameter icon={icons[parameter]} name={Params[parameter]}/>
        <Row className={"buttons"}>
            <Col>
                <MeasurementsButton icon={chart} name={"Measurements"} currentParam={parameter} />
            </Col>
            <Col>
                <DeviceButton icon={controller} name={"Devices"} />
            </Col>
            <Col>
                <SettingsButton icon={settings} name={"Settings"}  />
            </Col>
        </Row>
        <div className={"back-button"}><Button onClick={() => setParameter(null)}>Back to Params</Button></div>
    </div>
)


const StyledMonitorView = styled(MonitorView)`
  margin: 10px;
  .back-button {
  display: grid;
  margin-top: 10px;
  margin-bottom: 10px;
  }
  .buttons {
    margin-top: 20px;
  }
`

export default StyledMonitorView