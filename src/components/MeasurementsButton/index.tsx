import styled from "styled-components";
import React, {useState} from "react";
import Chart from "../Chart";
import {useTypedSelector} from "../../domain/store";

interface IProps {
    className?: string;
    icon: string;
    name: string;
    currentParam?: any
}
const parameters = [
    {name: "temp", title: ""},
    {name: "sun", title: ""},
    {name: "humidity", title: ""},
    {name: "moisture", title: ""},
]

const MeasurementsButton = ({className, icon, name, currentParam}: IProps) => {

    const [isChartModal, setChartModal] = useState(false)
    const parameter = parameters[currentParam]

    // @ts-ignore
    const data = useTypedSelector(state => state.measurements[parameter.name])
    // @ts-ignore
    const weather = useTypedSelector(state => state.weather[parameter.name])
    return (
        <div className={className} onClick={() => setChartModal(true)}>
            <Chart isChartModal={isChartModal} setChartModal={setChartModal} title={parameter.title} areaData={data} splineDate={weather}/>
            <div className={"icon"}><img src={icon}/></div>
            <div className={"parameter-name"}>{name}</div>
        </div>
    )
}

const StyledMeasurementsButton = styled(MeasurementsButton)`
  border-radius: 12px;
  border: #98CE00 3px solid;
  text-align: center;
  
  .icon {
   position: relative;
   margin-top: 10px;
    
    img {
    width: 60%;
    height: 60%; 
    }
    
  }
  
  .parameter-name {
  color: #98CE00;
  margin: 10px 0px 10px 0;
  }
`;

export default StyledMeasurementsButton;