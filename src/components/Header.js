import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HeaderCon = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  transition: 0.2s background-color;
  background-color: ${props => props.theme.elementsColor};
  padding: 1.5rem 0;
  box-shadow: 0px -20px 8px 17px ${props => props.theme.inputColor};
`

const Title = styled.h1`
  margin-left: 5%;
  font-size: 25px;
  font-family: NunitoBlack;
  transition: 0.2s color;
  color: ${props => props.theme.textColor}
`

const ButtonStyled = styled.button`
  margin-right: 5%;
  font-size: ${props => props.theme.detailtPage};
  font-family: NunitoBlack;
  background-color: transparent;
  outline: none;
  transition: 0.2s color;
  color: ${props => props.theme.textColor};
  border: none;
  cursor: pointer;
`

const Header = ({ title, theme, switchMode }) => (  
  <HeaderCon>
    <Title>{title}</Title>

    <ButtonStyled onClick={() => switchMode(theme)}>
      <FontAwesomeIcon icon={theme === 'Dark Mode' ? 'moon' : 'sun'} />
        {' ' + theme}
    </ButtonStyled>
  </HeaderCon>
)

export default Header