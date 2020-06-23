import React from 'react'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";

const CountryFullInfoCon = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 5%;

  @media (max-width: 640px) {
    flex-direction: column;
    padding-bottom: 45%;
  }
`

const Flag = styled.img`
  width: 40%;

  @media (max-width: 640px) {
    width: 100%;
  }
`

const CountryFullInfoTextCon = styled.div`
  width: 52%;
  display: flex;
  flex-direction: column;
  margin-top: 2%;

  @media (max-width: 640px) {
    width: 100%;
  }
`

const MainName = styled.h1`
  font-size: 32px;
  font-family: 'NunitoBlack';
  color: ${props => props.theme.textColor};
  margin-bottom: 3%;

  @media (max-width: 640px) {
    margin-top: 12%;
    margin-bottom: 5%;
  }
`

const CountryFullInfoTextConOuterSides = styled.div`
  display: flex;

  @media (max-width: 640px) {
    flex-direction: column;

    div:nth-child(even) {
      margin-top: 10%;
    }
  }
`

const CountryFullInfoTextConSides = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  text-align: left;

  @media (max-width: 640px) {
    width: 100%;
  }
`

const CountryInfoParagraph = styled.p`
  color: ${props => props.theme.textColor};
  font-family: 'NunitoRegular';
  font-weight: 600;
  font-size: ${props => props.theme.detailtPage};
`

const CountryInfoSpan = styled.span`
  color: ${props => props.theme.textColor};
  font-family: 'NunitoLight';
  font-weight: 100;
  font-size: ${props => props.theme.homepageItems}
`

const BorderCountries = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 7%;

  @media (max-width: 640px) {
    flex-direction: column;
    margin-top: 5%;
  }
`

const BorderCountriesButtonCon = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px 10px;
  margin-left: 2%;

  @media (max-width: 640px) {
    margin-top: 5%;
    grid-template-columns: repeat(4, 1fr);
  }
` 

const BorderContryButton = styled.button`
  padding: 5px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.elementsColor};
  box-shadow: ${props => props.theme.boxShadow};
  color: ${props => props.theme.textColor};
  border: none;
  cursor: pointer;
  border-radius: ${props => props.theme.borderRadius};
`

const CountryDetailedInfo = ({ title, detail, borderTitle}) => (
  <CountryInfoParagraph
    style={borderTitle ? { marginTop: '0%', whiteSpace: 'nowrap'} : { marginTop: '5%'}}
  >
    {title + ': '}
    <CountryInfoSpan>
      {detail}
    </CountryInfoSpan>
  </CountryInfoParagraph>
)

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
        <MainName>{name}</MainName>
        <CountryFullInfoTextConOuterSides>
          <CountryFullInfoTextConSides>
            <CountryDetailedInfo title="Native Name" detail={nativeName}/>
            <CountryDetailedInfo title="Population" detail={population}/>
            <CountryDetailedInfo title="Region" detail={region}/>
            <CountryDetailedInfo title="Sub Region" detail={subregion}/>
            <CountryDetailedInfo title="Capital" detail={capital}/>
          </CountryFullInfoTextConSides>
          <CountryFullInfoTextConSides>
            <CountryDetailedInfo title="Top Level Domain" detail={topLevelDomain[0]}/>
            <CountryDetailedInfo title="Currencies" detail={currencies[0].code}/>
            <CountryDetailedInfo title="Languages" detail={languages.map(l => l.name).join(", ")}/>
          </CountryFullInfoTextConSides>
        </CountryFullInfoTextConOuterSides>
        {borders.length > 0 && (
          <BorderCountries>
            <CountryDetailedInfo title="Border Countries" borderTitle={true}/>
            <BorderCountriesButtonCon>
              {borders.map(border => (
                <BorderContryButton key={border} onClick={() => history.push(`/country/${border}`)}>
                  {border}
                </BorderContryButton>
              ))}
            </BorderCountriesButtonCon>
          </BorderCountries>
        )}
      </CountryFullInfoTextCon>
    </CountryFullInfoCon>
  )
}
export default CountryFullInfo