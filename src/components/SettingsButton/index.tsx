import styled from "styled-components";
import React, {useState} from "react";
import RangeSliders from "./RangeSliders";

interface IProps {
    className?: string;
    icon: string
    name: string
}

const SettingsButton = ({className, icon, name}: IProps) => {
    const [isChartModal, setChartModal] = useState(false)
    // @ts-ignore
    return (
        <div className={className} onClick={() => setChartModal(true)}>
            <RangeSliders isChartModal={isChartModal} setChartModal={setChartModal}/>
            <div className={"icon"}><img src={icon}/></div>
            <div className={"parameter-name"}>{name}</div>
        </div>
    )
}

const StyledSettingsButton = styled(SettingsButton)`
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

export default StyledSettingsButton;