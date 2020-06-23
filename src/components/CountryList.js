import React, { Suspense, useContext } from 'react'
import styled from 'styled-components'
import useSWR from 'swr'
import fetcher from '../helper/fetcher'
import MyErrorBoundary from './MyErrorBoundary'
import CountryBox from './CountryBox'
import CountryContext from '../context/country-context'

const CountrysDataCon = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(4, 22%);
  grid-column-gap: 4%;
  padding-bottom: 7%;

  @media (max-width: 640px) {
    width: 90%;
    grid-template-columns: 100%;
  } 
`

const Loading = styled.div`
  text-align: center;
  margin-top: 10%;
  height: 60vh;
  font-family: NunitoBlack;
  font-size: 30px;
  color: ${props => props.theme.textColor};
`

const NotFound = styled.div`
  text-align: center;
  margin-top: 10%;
  height: 60vh;
  font-family: NunitoBlack;
  font-size: 30px;
  color: ${props => props.theme.textColor};
`

const CountrysData = () => {
  const { search } = useContext(CountryContext)
  let url = ''

  switch(search.by) {
    case('country'):
      if(search.filter === 'all' || search.filter === '') {
        url = `https://restcountries.eu/rest/v2/all?fields=flag;name;population;region;capital`
      } else {
        url = `https://restcountries.eu/rest/v2/name/${search.filter}?fullText=true;fields=flag;name;population;region;capital`
      }
    break;

    case('region'):
      url = `https://restcountries.eu/rest/v2/region/${search.filter}?fields=flag;name;population;region;capital`
    break;

    default:
      url = `https://restcountries.eu/rest/v2/${search.filter}?fields=flag;name;population;region;capital`
    break;
  }

  const { data } = useSWR(url, fetcher, { suspense: true })

  return (
    <CountrysDataCon key="countries">
      {
        Array.isArray(data) ? (
          <>
            {data && data.map(countryData => (
              <CountryBox key={countryData.name} {...countryData} />
            ))}
          </>
        ) : (
          <NotFound>{data.message}</NotFound>
        )
      }
    </CountrysDataCon>
  )
}

const CountryList = () => (
  <Suspense fallback={<Loading>Loading...</Loading>}>
    <MyErrorBoundary>
      <CountrysData/>
    </MyErrorBoundary>
  </Suspense>
)

export default CountryList