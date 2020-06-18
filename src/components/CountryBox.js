import React from 'react'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";

const CountryBoxCon = styled.div`
  width: 100%;
  height: 350px;
  background-color: ${props => props.theme.elementsColor};
  margin-bottom: 10%;
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: 5px;
  transition: 0.5s transform ease;
  &:hover {
    cursor: pointer;
    transform: translateY(-5%);
    box-shadow: ${props => props.theme.boxShadowActive};
  }
`

const CountryFlag = styled.img`
  width: 100%;
  height: 50%;
  border-radius: 5px 5px 0 0;
`

const CountryDataCon = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0% 12%;
  box-sizing: border-box;
`

const CountryName = styled.h1`
  font-size: ${props => props.theme.detailtPage};
  font-family: NunitoBlack;
  color: ${props => props.theme.textColor};
  margin-bottom: 10%;
`

const CountryDataKey = styled.h2`
  font-size: ${props => props.theme.homepageItems};
  font-family: NunitoRegular;
  font-weight: 500;
  color: ${props => props.theme.textColor};
  margin-bottom: 5%;
`

const CountryDataValue = styled.span`
  font-size: ${props => props.theme.homepageItems};
  font-family: NunitoLight;
  color: ${props => props.theme.textColor};
`

const CountryBox = ({ flag, name, population, region, capital }) => {
  const history = useHistory()

  return (
    <CountryBoxCon key={name} onClick={() => history.push(`/country/${name.toLowerCase()}`)}>
      <CountryFlag src={flag} alt="Flag" />
      <CountryDataCon>
        <CountryName>{name}</CountryName>
        <CountryDataKey>Population: <CountryDataValue>{population}</CountryDataValue></CountryDataKey>
        <CountryDataKey>Region: <CountryDataValue>{region}</CountryDataValue></CountryDataKey>
        <CountryDataKey>Capital: <CountryDataValue>{capital}</CountryDataValue></CountryDataKey>
      </CountryDataCon>
    </CountryBoxCon>
  )
}

export default CountryBox