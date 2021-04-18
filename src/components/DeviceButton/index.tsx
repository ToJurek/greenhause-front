import styled from "styled-components";
import React, {useState} from "react";
import Chart from "../Chart";
import {useTypedSelector} from "../../domain/store";
import SwitchButtons from "./SwitchButtons";

interface IProps {
    className?: string;
    icon: string;
    name: string;
}


const DeviceButton = ({className, icon, name}: IProps) => {

    const [isChartModal, setChartModal] = useState(false)
    // @ts-ignore
    const data = useTypedSelector(state => state.deviceActivity)
    return (
        <div className={className} onClick={() => setChartModal(true)}>
            <Chart isChartModal={isChartModal} setChartModal={setChartModal} title={"Device activity"}
                   areaData={data.pump.measurements} splineDate={data.heater.measurements}
                   splineDate2={data.ventilator.measurements}>
                <SwitchButtons />
            </Chart>
            <div className={"icon"}><img src={icon}/></div>
            <div className={"parameter-name"}>{name}</div>
        </div>
    )
}

const StyledDeviceButton = styled(DeviceButton)`
  border-radius: 12px;
  border: #98CE00 3px solid;
  text-align: center;
  .switch-buttons {
    background-color: black;
  }
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

export default StyledDeviceButton;