import {Col, Container, Row} from "react-bootstrap";
import Parameter from "../Parameter";
import moisture from "../../icons/moisture.svg"
import humidity from "../../icons/humidity.svg"
import temperature from "../../icons/temperature.svg"
import cloudy from "../../icons/cloudy.svg"
import styled from "styled-components";
import {Params} from "../../types/params";
import {useTypedSelector} from "../../domain/store";


interface IProps {
    className?: string,
    setParameter: (param: Params) => void
}

const WelcomeView = ({className, setParameter}: IProps) => {
    const lastMeasurement = useTypedSelector(state => state.lastMeasurements)

    return <Container className={className}>
        <Row className={"row-styled"}>
            <Col onClick={() => setParameter(Params.MOISTURE)}>
                <Parameter icon={moisture} name={"MOISTURE"} measurement={`${lastMeasurement.moisture}%`}/>
            </Col>
            <Col onClick={() => setParameter(Params.HUMIDITY)}>
                <Parameter icon={humidity} name={"HUMIDITY"} measurement={`${lastMeasurement.humidity}%`}/>
            </Col>
        </Row>
        <Row className={"row-styled"}>
            <Col onClick={() => setParameter(Params.TEMPERATURE)}>
                <Parameter icon={temperature} name={"TEMPERATURE"} measurement={`${lastMeasurement.temp}°C`}/>
            </Col>
            <Col onClick={() => setParameter(Params.SUN)}>
                <Parameter icon={cloudy} name={"CLOUDY"} measurement={`${lastMeasurement.sun}%`}/>
            </Col>
        </Row>
    </Container>
};

const WelcomeViewStyled = styled(WelcomeView)`

    .row-styled {
      margin-top: 10px;
    }
`

export default WelcomeViewStyled;