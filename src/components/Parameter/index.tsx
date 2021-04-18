import styled from "styled-components"

interface IProps {
    className?: string;
    icon: string;
    name: string;
    measurement?: string
}

const Parameter = ({className, icon, name, measurement}: IProps) => (
    <div className={className}>
        <div className={"icon"}><img src={icon}/>{measurement &&
        <div className={"overlay-measurement"}>{measurement}</div>}</div>
        <div className={"parameter-name"}>{name}</div>
    </div>
)

const StyledParameter = styled(Parameter)`
  border-radius: 12px;
  border: #98CE00 3px solid;
  text-align: center;
  
  .icon {
   position: relative;
   margin-top: 10px;
    .overlay-measurement {
  position: absolute;
   z-index: 2;
   right: 10px;
   top: 0px;
   height: 50px;
  width: 50px;
  background-color: #bbb;
  border-radius: 50%;
  display: flex; /* or inline-flex */
  align-items: center; 
  justify-content: center;
  font-weight: bold;
  }
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

export default StyledParameter