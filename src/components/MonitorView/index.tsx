import styled from "styled-components";
import Parameter from "../Parameter"
import moisture from "../../icons/moisture.svg";
import Chart from "../Chart/index";


interface IProps {
    className?: string
}

const MonitorView = ({className}:IProps) => (
    <div className={className}>
        <Parameter icon={moisture} name={"MOISTURE"}/>
        <Chart />
    </div>
)


const StyledMonitorView = styled(MonitorView)`
  margin: 10px;
`

export default StyledMonitorView