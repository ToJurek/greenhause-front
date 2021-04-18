import styled from "styled-components";
import React, {useEffect, useState} from "react";
import {Typography, Slider} from '@material-ui/core';
import {Modal} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {IDefaultValues} from "../../types/defaultValues";
import {updateDefaultValues} from "../../domain/store/models/defaultValues";
import {useTypedSelector} from "../../domain/store";

interface IProps {
    className?: string;
    isChartModal: boolean;
    setChartModal: (visible: boolean) => any
}

function valueCelsius(value: number) {
    return `${value}°C`;
}

function valuePercent(value: number) {
    return `${value}%`;
}

const RangeSliders = ({className, isChartModal, setChartModal}: IProps) => {

    const dispatch = useDispatch()

    const defaultValues = useTypedSelector(state => state.defaultValues)

    const [temperature, setTemperature] = React.useState([defaultValues.temp.min, defaultValues.temp.max]);
    const [moisture, setMoisture] = React.useState([defaultValues.moisture.min, defaultValues.moisture.max]);
    const [humidity, setHumidity] = React.useState([defaultValues.humidity.min, defaultValues.humidity.max]);

    useEffect(() => {
        const updatedValues: IDefaultValues = {
            temp: {
                max: temperature[1],
                min: temperature[0]
            },
            humidity: {
                max: humidity[1],
                min: humidity[0]
            },
            moisture: {
                max: moisture[1],
                min: moisture[0]
            }
        }
        dispatch(updateDefaultValues(updatedValues))
    })

    // @ts-ignore
    const handleChangeTemperature = (event, newValue) => {
        setTemperature(newValue);
    };

    // @ts-ignore
    const handleChangeHumidity = (event, newValue) => {
        setHumidity(newValue);
    };

    // @ts-ignore
    const handleChangeMoisture = (event, newValue) => {
        setMoisture(newValue);
    };

    return (
        <Modal show={isChartModal} onHide={() => setChartModal(false)} className={className}>
            <div className={"modal-full-height"}>
                <Typography variant="h4">
                    Dopuszczalne zakresy
                </Typography>
                <Typography variant="h5" id="range-slider" gutterBottom>
                    Temperature range
                </Typography>
                <Slider
                    value={temperature}
                    onChange={handleChangeTemperature}
                    min={-10}
                    max={40}
                    valueLabelDisplay="on"
                    aria-labelledby="range-slider"
                    getAriaValueText={valueCelsius}
                />
                <Typography variant="h5" id="range-slider" gutterBottom>
                    Moisture range
                </Typography>
                <Slider
                    value={moisture}
                    onChange={handleChangeMoisture}
                    min={0}
                    max={100}
                    valueLabelDisplay="on"
                    aria-labelledby="range-slider"
                    getAriaValueText={valuePercent}
                />
                <Typography variant="h5" id="range-slider" gutterBottom>
                    Humidity range
                </Typography>
                <Slider
                    value={humidity}
                    onChange={handleChangeHumidity}
                    min={0}
                    max={100}
                    valueLabelDisplay="on"
                    aria-labelledby="range-slider"
                    getAriaValueText={valuePercent}
                />
            </div>
        </Modal>
    )
}

const StyledRangeSliders = styled(RangeSliders)`
.modal-full-height{
  height: 85vh;
  margin: 20px;
}
 #range-slider {
  margin-bottom: 50px;
 }
`;

export default StyledRangeSliders;