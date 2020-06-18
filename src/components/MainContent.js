import React from 'react'
import styled from 'styled-components'
import DataController from '../components/DataController'
import CountryList from '../components/CountryList'

const Content = styled.div`
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: ${props => props.theme.backgroundImage};
  background-position: 0 0,25px 25px;
  background-attachment: fixed;
  background-size: 50px 50px;
`

const MainContent = () => (
  <Content>
    <DataController />
    <CountryList />
  </Content>
)

export default MainContent
