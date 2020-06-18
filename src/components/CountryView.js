import React, { Suspense } from 'react'
import styled from 'styled-components'
import CountryFullInfo from '../components/CountryFullInfo'
import MyErrorBoundary from './MyErrorBoundary'
import useSWR from 'swr'
import fetcher from '../helper/fetcher'
import { useParams, useHistory } from "react-router-dom"

const CountryViewCon = styled.div`
  width: 100%;
  height: 100vh;
  background-image: ${props => props.theme.backgroundImage};
  background-position: 0 0,25px 25px;
  background-attachment: fixed;
  background-size: 50px 50px;
`

const BackButton = styled.button`
  padding: 10px 20px;
  background-color: ${props => props.theme.elementsColor};
  color: ${props => props.theme.textColor};
`

const Loading = styled.div`
  text-align: center;
  margin-top: 10%;
  height: 60vh;
  font-family: NunitoBlack;
  font-size: 30px;
  color: ${props => props.theme.textColor};
`

const CountryViewData = () => {
  let { name } = useParams()

  let typeSearch = ''
  name.length > 3 ? typeSearch = 'name' : typeSearch = 'alpha'
  console.log(`https://restcountries.eu/rest/v2/${typeSearch}/${name}?fields=flag;name;nativeName;population;region;subregion;capital;topLevelDomain;currencies;languages;borders`)
  const { data } = useSWR(`https://restcountries.eu/rest/v2/${typeSearch}/${name}?fields=flag;name;nativeName;population;region;subregion;capital;topLevelDomain;currencies;languages;borders`, fetcher, { suspense: true})

  return (
    <div>
      {data && (
        <CountryFullInfo  {...data[0]} />
      )}
    </div>
  )
}

const CountryView = () => {
  const history = useHistory()

  return (
    <CountryViewCon>
      <BackButton onClick={() => history.push('/')}>Back</BackButton>
      <Suspense fallback={<Loading>Loading...</Loading>}>
        <MyErrorBoundary>
          <CountryViewData />
        </MyErrorBoundary>
      </Suspense>
    </CountryViewCon>
  )
}

export default CountryView