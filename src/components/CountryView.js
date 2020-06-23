import React, { Suspense } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CountryFullInfo from '../components/CountryFullInfo'
import MyErrorBoundary from './MyErrorBoundary'
import useSWR from 'swr'
import fetcher from '../helper/fetcher'
import { useParams, useHistory } from "react-router-dom"

const CountryViewCon = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 5%;
  padding-top: 4%;
  box-sizing: border-box;
  background-image: ${props => props.theme.backgroundImage};
  background-position: 0 0,25px 25px;
  background-attachment: fixed;
  background-size: 50px 50px;
  overflow-y: scroll;

  @media (max-width: 640px) {
    padding: 10%;
  }
`

const StyledIcon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.textColor};
  margin: 5% 20% 0 0;
`

const BackButton = styled.button`
  padding: 10px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.elementsColor};
  box-shadow: ${props => props.theme.boxShadow};
  color: ${props => props.theme.textColor};
  font-family: NunitoBlack;
  font-size: ${props => props.theme.detailtPage};
  border: none;
  cursor: pointer;
  border-radius: ${props => props.theme.borderRadius};

  @media (max-width: 640px) {
    padding: 7px 30px;
    margin-top: 13%;
    margin-bottom: 20%;
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

const CountryViewData = () => {
  let { name } = useParams()

  let url = ''
  switch(true) {
    case(name.length > 3):
      url = `https://restcountries.eu/rest/v2/name/${name}?fields=flag;name;nativeName;population;region;subregion;capital;topLevelDomain;currencies;languages;borders`
    break;

    case(name.length <= 3):
      url = `https://restcountries.eu/rest/v2/alpha/${name}?fields=flag;name;nativeName;population;region;subregion;capital;topLevelDomain;currencies;languages;borders`
    break;

    default:
      url = `https://restcountries.eu/rest/v2/name/${name}?fields=flag;name;nativeName;population;region;subregion;capital;topLevelDomain;currencies;languages;borders`
    break;
  }

  const { data } = useSWR(url, fetcher, { suspense: true})

  let contryData = null
  data && Array.isArray(data) ? contryData = data[0] : contryData = data
  return (
    <div>
      {data && (
        <CountryFullInfo  {...contryData} />
      )}
    </div>
  )
}

const CountryView = () => {
  const history = useHistory()

  return (
    <CountryViewCon>
      <BackButton onClick={() => history.goBack()}>
        <StyledIcon icon="arrow-left" />
        Back
      </BackButton>
      <Suspense fallback={<Loading>Loading...</Loading>}>
        <MyErrorBoundary>
          <CountryViewData />
        </MyErrorBoundary>
      </Suspense>
    </CountryViewCon>
  )
}

export default CountryView