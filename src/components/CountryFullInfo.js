import React from 'react'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";

const CountryFullInfoCon = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
`

const Flag = styled.img`
  width: 50%;
`

const CountryFullInfoTextCon = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
`

const BorderCountries = styled.div`
  display: flex;
`

const BorderContryButton = styled.button`
  box-shadow: ${props => props.theme.boxShadow};
`

const CountryFullInfo = ({
  flag,
  name,
  nativeName,
  population,
  region,
  subregion,
  capital,
  topLevelDomain,
  currencies,
  languages,
  borders
}) => {

  const history = useHistory()

  return (
    <CountryFullInfoCon>
      <Flag src={flag} alt="flag"/> 
      <CountryFullInfoTextCon>
        <h1>{name}</h1>
        <p>{nativeName}</p>
        <p>{population}</p>
        <p>{region}</p>
        <p>{subregion}</p>
        <p>{capital}</p>
        <p>{topLevelDomain[0]}</p>
        <p>{currencies[0].code}</p>
        <p>{languages.map(l => l.name).join(", ")}</p>
        {borders.length > 0 && <BorderCountries>
          <p>Border Countries: </p>
          {borders.map(border => (
            <BorderContryButton key={border} onClick={() => history.push(`/country/${border}`)}>
              {border}
            </BorderContryButton>
          ))}
        </BorderCountries>}
      </CountryFullInfoTextCon>
    </CountryFullInfoCon>
  )
}
export default CountryFullInfo