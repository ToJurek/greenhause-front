import React, {ReactNode, useRef, useState} from "react";
// @ts-ignore
import {CanvasJSChart} from 'canvasjs-react-charts'
import {Col, Row, Modal} from "react-bootstrap";
import {IMeasurement} from "../../types/measurements";
import styled from "styled-components";
import {TableRow, TextField, Typography, Button, ButtonGroup} from "@material-ui/core";
import moment from "moment";

interface IProps {
    className?: string
    isChartModal: boolean;
    setChartModal: (visible: boolean) => any
    title: string
    areaData?: IMeasurement[]
    splineDate?: IMeasurement[]
    splineDate2?: IMeasurement[]
    children?: ReactNode
}

const Chart = ({className, isChartModal, setChartModal, title, areaData, splineDate, splineDate2, children}: IProps) => {

    const startDateInput = useRef<HTMLInputElement>(null)
    const endDateInput = useRef<HTMLInputElement>(null)

    const onSubmit = () => {
        console.log(startDateInput.current?.value)
        console.log(endDateInput.current?.value)
    }


    const options = {
        theme: "light1", // "light1", "dark1", "dark2"
        animationEnabled: true,
        zoomEnabled: true,
        data: [{
            type: "area",
            dataPoints: areaData
        }, {
            type: "spline",
            dataPoints: splineDate
        },
            {
                type: "spline",
                dataPoints: splineDate2
            }]
    }


    return (
        <Modal show={isChartModal} onHide={() => setChartModal(false)}>
            <div className={className}>
                <div className={"chart"}>
                    <Typography variant={"h4"} align={"center"}>Measurements {title} </Typography>
                    <Row className={'period-picker'}>
                        <Col>
                            <TextField
                                id="datetime-local"
                                label="Start"
                                defaultValue={moment().subtract(12, 'hours').format("YYYY-MM-DDTHH:mm")}
                                type="datetime-local"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                inputRef={startDateInput}
                            />
                        </Col>
                        <Col>
                            <TextField
                                id="datetime-local"
                                label="End"
                                defaultValue={moment().format("YYYY-MM-DDTHH:mm")}
                                type="datetime-local"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                inputRef={endDateInput}
                            />
                        </Col>
                        <div className={"submit-button"}/>
                        <Button onClick={(e) => onSubmit()} variant="contained" color="primary" fullWidth>
                            See result
                        </Button>


                    </Row>

                    <div className={"submit-button"}/>
                    <CanvasJSChart options={options}/>


                    {children}
                    <div className={"submit-button"}/>
                </div>
            </div>
        </Modal>
    );
}

const StyledChart = styled(Chart)`
  min-height: 90vh;
  .period-picker {
  margin-top: 15px;
  margin-left: 5px;
  margin-right: 5px;
 
  }
  .chart {
  margin-top: 15px;
  } 
  .submit-button {
    margin: 5px;
  }
`


export default StyledChart