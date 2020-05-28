import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'

//components
import Header from './components/Header'
import DataController from './components/DataController'

//icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMoon, faSun, faSearch, faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'

library.add(faMoon, faSun, faSearch, faArrowCircleDown)


const lightTheme = {
  elementsColor: 'hsl(0, 0%, 100%)',
  backgroundColor: 'hsl(0, 0%, 98%)',
  shadowColor: 'hsl(0, 0%, 52%)',
  borderRadius: '5px',
  detailtPage: '16px',
  homepageItems: '14px',
  textColor: 'hsl(200, 15%, 8%)',
  maxWidth: '1440px'
}

const darkTheme = {
  elementsColor: 'hsl(209, 23%, 22%)',
  backgroundColor: 'hsl(207, 26%, 17%)',
  shadowColor: 'hsl(0, 0%, 52%)',
  borderRadius: '5px',
  detailtPage: '16px',
  homepageItems: '14px',
  textColor: 'hsl(0, 0%, 100%)',
  maxWidth: '1440px'
}

const Page = styled.div`
  width: 100%;
  height: 100vh;
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
        </Content>
      </Page>
    </ThemeProvider>
  )
}

export default App
