import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import React, {useState} from "react";
import Nav from "react-bootstrap/Nav";
import bell from "../../icons/bell.svg"
import SystemStatus from "../SystemStatus"
import WelcomeView from "../WelcomeView";
import StyledMonitorView from "../MonitorView";
import {Params} from "../../types/params";
import {useDispatch} from "react-redux";
import {fetchHumidity, fetchSun, fetchTemp} from "../../domain/store/models/measurements";
import {fetchWeather} from "../../domain/store/models/weather";


interface IProps {
    className?: string
}

const Greenhouse = ({className}: IProps) => {

    const dispatch = useDispatch()

   dispatch(fetchSun())
   dispatch(fetchTemp())
   dispatch(fetchHumidity())
    dispatch(fetchWeather())



    const [isVisible, setVisible] = useState<boolean>(false)
    const [parameter, setParameter] = useState<Params|null>()

    return (
        <div className={className}>
            <SystemStatus isVisible={isVisible} setVisible={setVisible}/>
            <div className='content'>
                <Navbar className={"navbar"}><Navbar.Brand href="#home" className={"brand-name"}>Szklarnia
                    AGH</Navbar.Brand>
                    <Nav className="ml-auto" onClick={() => setVisible(true)}>
                        <Nav.Link><img src={bell}/></Nav.Link>
                    </Nav></Navbar>
                {parameter ? <StyledMonitorView parameter={parameter} setParameter={setParameter}/> : <WelcomeView setParameter={setParameter}/>}
            </div>
        </div>
    )
}
const StyledGreenhouse = styled(Greenhouse)`
  opacity: 90%;
  width: 40%;
  align-content: center;
  display: flex;
  justify-content: center;
  align-content: center;
  .content{
    width: 80%;
    height: 100%;
    align-content: center;
    background-color: #541388;
    
    
    .navbar {
      
      background-color: #370D59;      
      display: flex;
      
      .brand-name {
      color: #fc2344;
      font-family: Gotham -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      }
      .alert {
      align-content: flex-end;
      }
    
    }
  } 
  @media(max-width: 640px){
  width: 100%;
  }
`

export default StyledGreenhouse