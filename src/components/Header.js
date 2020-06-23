import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useHistory } from "react-router-dom"

const HeaderCon = styled.header`
  width: 100%;
  height: 4vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.2s background-color;
  background-color: ${props => props.theme.elementsColor};
  padding: 1.5rem 0;
  box-shadow: ${props => props.theme.boxShadow};
`

const StyledIcon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.textColor};
`

const Title = styled.h1`
  margin-left: 5%;
  font-size: 25px;
  font-family: NunitoBlack;
  transition: 0.2s color;
  color: ${props => props.theme.textColor};
  cursor: pointer;
  transition: 0.07s transform;
  &:hover {
    transform: scale(1.07)
  }
`

const ButtonStyled = styled.button`
  margin-right: 5%;
  font-size: ${props => props.theme.detailtPage};
  font-family: NunitoBlack;
  background-color: transparent;
  transition: 0.2s color;
  color: ${props => props.theme.textColor};
  border: none;
  cursor: pointer;
`

const Header = ({ title, theme, switchMode }) => {

  const history = useHistory()

  return(
    <HeaderCon>
      <Title onClick={() => history.push('/')}>{title}</Title>

      <ButtonStyled onClick={() => switchMode(theme)}>
        <StyledIcon icon={theme === 'Dark Mode' ? 'moon' : 'sun'} />
          {' ' + theme}
      </ButtonStyled>
    </HeaderCon>
  )
}

export default Header