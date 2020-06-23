import React from 'react'
import styled from 'styled-components'

const LoadingComponentCon = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const LoadingText = styled.div`
  font-family: NunitoBlack;
  font-size: 30px;
  color: ${props => props.theme.textColor};
`

export default function LoadingComponent({ title }) {
 return (
   <LoadingComponentCon>
     <LoadingText>
       {title}
     </LoadingText>
   </LoadingComponentCon>
 ) 
}