import React, { useContext } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CountryContext from '../context/country-context'

const SearchInputCon = styled.div`
  background-color: ${props => props.theme.elementsColor};
  width: 30%;
  display: flex;
  align-items: center;
  padding-left: 1.5rem;
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: ${props => props.theme.borderRadius};
  opacity: 0.7;
  box-sizing: border-box;
  &:focus-within {
    opacity: 1;
  }

  @media (max-width: 640px) {
    width: 100%;
    margin-top: 5%;
    opacity: 1;
  }
`

const StyledIcon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.textColor};
`

const SearchInput = styled.input`
  width: 90%;
  height: 100%;
  padding: 1rem;
  background-color: transparent;
  color: ${props => props.theme.textColor};
  border: none;
  outline: none;
  font-family: NunitoRegular;
  font-size: 14px;
  ::placeholder {
    color: ${props => props.theme.textColor};
  }
`

const SearchBar = () => {
  const { setFilter } = useContext(CountryContext)
  return (
    <SearchInputCon>
      <StyledIcon icon="search" />
        <SearchInput placeholder="Search a country..." onKeyUp={e => setFilter({ by: 'country', filter: e.target.value })}/>
    </SearchInputCon>
  )
}


export default SearchBar