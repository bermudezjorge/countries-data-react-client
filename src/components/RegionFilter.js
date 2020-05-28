import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const RegionButton = styled.div`
  width: 12%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  cursor: pointer;
  background-color: ${props => props.theme.elementsColor};
  box-shadow: 0px 0px 18px -10px ${props => props.theme.inputColor};
  border-radius: ${props => props.theme.borderRadius};
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`

const StyledIcon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.textColor};
`

const RegionButtonText = styled.h1`
  font-family: NunitoRegular;
  font-size: 14px;
  color: ${props => props.theme.textColor};
`

const RegionFilter = () => (
  <RegionButton>
    <RegionButtonText>
      Filter by Region 
    </RegionButtonText>
    <StyledIcon icon="arrow-circle-down"/>
  </RegionButton>
)

export default RegionFilter