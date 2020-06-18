import React, { useState, useContext } from 'react'
import styled, { keyframes } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CountryContext from '../context/country-context'

const RegionButton = styled.div`
  position: relative;
  width: 15%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 1rem 1.5rem;
  align-items: center;
  cursor: pointer;
  background-color: ${props => props.theme.elementsColor};
  box-shadow: ${props => props.theme.boxShadow};
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
  font-size: ${props => props.theme.homepageItems};
  color: ${props => props.theme.textColor};
`

const fadeIn = keyframes`
  from {
    transform: scale(0.1) translateY(-100%);
    opacity: 0;
  }
  to {
    transform: scale(1) translateY(0%);
    opacity: 1;
  }
`;

const MenuRegions = styled.ul`
  width: 100%;
  position: absolute;
  left: 0;
  bottom: -11.7rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: ${props => props.theme.elementsColor};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  padding: 1rem 1.5rem;
  animation: 0.2s ${fadeIn} linear;
  &:before {
    content: '';
    width: 100%;
    height: 10%;
    position: absolute;
    top: -5%;
    left: 0;
  }
`

const RegionOption = styled.li`
  width: 100%;
  color: ${props => props.theme.textColor};
  padding: 0.5rem 0;
  font-size: ${props => props.theme.homepageItems};
  font-family: NunitoRegular;
  transition: 0.03s transform;
  &:hover {
    transform: scale(1.1) translateX(11.9%);
    font-family: NunitoBlack;
  }
`

const RegionFilter = () => {
  const [showMenu, setShowMenu] = useState(false)

  const { setFilter } = useContext(CountryContext)

  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

  return (
    <RegionButton 
      onMouseEnter={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
    >
      <RegionButtonText>
        Filter by Region 
      </RegionButtonText>
      <StyledIcon 
        icon={showMenu ? 'arrow-alt-circle-down' : 'arrow-alt-circle-right'}
      />

      {showMenu && (
        <MenuRegions>
          {regions.map(region => (
            <RegionOption
              key={region}
              onClick={() => {
                setFilter({ by: 'region', filter: region.toLowerCase() })
                setShowMenu(false)
              }}
              >
                {region}
            </RegionOption>
          ))}
        </MenuRegions>
      )}
    </RegionButton>
  )
}

export default RegionFilter