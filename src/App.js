import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'

//components
import Header from './components/Header'
import DataController from './components/DataController'
import CountryList from './components/CountryList'

//icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMoon, faSun, faSearch, faArrowAltCircleDown, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

library.add(faMoon, faSun, faSearch, faArrowAltCircleDown, faArrowAltCircleRight)


const lightTheme = {
  elementsColor: 'hsl(0, 0%, 100%)',
  backgroundColor: 'hsl(0, 0%, 98%)',
  backgroundImage: 'radial-gradient(#ddd 1px,transparent 0),radial-gradient(#ddd 1px,transparent 0)',
  boxShadow: '0px 0px 0px 4px hsla(0, 0%, 70%, 0.05)',
  borderRadius: '5px',
  detailtPage: '16px',
  homepageItems: '14px',
  textColor: 'hsl(200, 15%, 8%)',
  maxWidth: '1440px'
}

const darkTheme = {
  elementsColor: 'hsl(209, 23%, 22%)',
  backgroundColor: 'hsl(207, 26%, 17%)',
  backgroundImage: 'radial-gradient(#dddddd26 1px,transparent 0),radial-gradient(#dddddd1f 1px,transparent 0)',
  boxShadow: '0px 0px 0px 4px hsla(0, 0%, 100%, 0.01)',
  borderRadius: '5px',
  detailtPage: '16px',
  homepageItems: '14px',
  textColor: 'hsl(0, 0%, 100%)',
  maxWidth: '1440px'
}

const Page = styled.div`
  width: 100%;
  background-color: ${props => props.theme.backgroundColor};
  transition: 0.2s background-color;
`

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

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme'))

  if(localStorage.getItem('theme') === null) {
    localStorage.setItem('theme', 'Dark Mode')
  }

  const changeThemeState = theme => {
    setTheme(theme)
    localStorage.setItem('theme', theme)
  }

  const switchMode = mode => {
    if(mode === 'Light Mode') {
      changeThemeState('Dark Mode')
    } else {
      changeThemeState('Light Mode')
    }
  }

  return (
    <ThemeProvider theme={theme === 'Dark Mode' ? lightTheme : darkTheme}>
      <Page>
        <Header title="Kountry" switchMode={switchMode} theme={theme} />
        <Content>
          <DataController />
          <CountryList />
        </Content>
      </Page>
    </ThemeProvider>
  )
}

export default App
