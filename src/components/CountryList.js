import React, { Suspense } from 'react'
import styled from 'styled-components'
import useSWR from 'swr'

import MyErrorBoundary from './MyErrorBoundary'

const CountrysDataCon = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(4, 22%);
  grid-column-gap: 4%;
`

const CountryBox = styled.div`
  width: 100%;
  height: 350px;
  background-color: ${props => props.theme.elementsColor};
  margin-bottom: 10%;
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: 5px;
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

const Loading = styled.div`
  display: flex;
  justifiy-content: center;
  align-items: center;
  margin-top: 10%;
  height: 60vh;
  font-family: NunitoBlack;
  font-size: ${props => props.theme.detailPage};  
  color: ${props => props.theme.textColor};
`

const fetcher = (url) => fetch(url).then(r => r.json())

const CountrysData = () => {
  const { data } = useSWR('https://restcountries.eu/rest/v2/all?fields=flag;name;population;region;capital', fetcher, { suspense: true })
  return (
    <CountrysDataCon key="parent">
      {data && data.map(c => (
          <CountryBox key={c.name}>
            <CountryFlag src={c.flag} alt="Flag" />
            <CountryDataCon>
              <CountryName>{c.name}</CountryName>
              <CountryDataKey>Population: <CountryDataValue>{c.population}</CountryDataValue></CountryDataKey>
              <CountryDataKey>Region: <CountryDataValue>{c.region}</CountryDataValue></CountryDataKey>
              <CountryDataKey>Capital: <CountryDataValue>{c.capital}</CountryDataValue></CountryDataKey>
            </CountryDataCon>
          </CountryBox>
      ))}
    </CountrysDataCon>
  )
}

const CountryList = () => {
  return (
    <Suspense fallback={<Loading>Loading...</Loading>}>
      <MyErrorBoundary>
        <CountrysData />
      </MyErrorBoundary>
    </Suspense>
  )
}

export default CountryList