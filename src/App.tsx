import React from 'react';
import styled from 'styled-components'
import background from "./pexels-mark-stebnicki-2749165.jpg"
import Greenhouse from "./components/Greenhause";
interface IProps  {
    className?: string
}

const App = ({className}: IProps) => (<div className={className}>
      <Greenhouse />
    </div>
  )


const StyledApp = styled(App)`
   width: 100%;
   height: 100vh;
   background-image: url(${background});
   display: flex;
   justify-content: center;
   align-content: center;
`

export default StyledApp;
