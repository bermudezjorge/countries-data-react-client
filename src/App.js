import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import CountryContext from './context/country-context'
import Header from './components/Header'
import MainContent from './components/MainContent'
import CountryView from './components/CountryView'
import { library } from '@fortawesome/fontawesome-svg-core'
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom"
import { faMoon, faSun, faSearch, faArrowAltCircleDown, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

library.add(faMoon, faSun, faSearch, faArrowAltCircleDown, faArrowAltCircleRight)


const lightTheme = {
  elementsColor: 'hsl(0, 0%, 100%)',
  backgroundColor: 'hsl(0, 0%, 98%)',
  backgroundImage: 'radial-gradient(#ddd 1px,transparent 0),radial-gradient(#ddd 1px,transparent 0)',
  boxShadow: '0px 0px 0px 4px hsla(0, 0%, 70%, 0.05)',
  boxShadowActive: '0px 0px 0px 4px hsla(0, 0%, 80%, 0.5)',
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
  boxShadowActive: '0px 0px 0px 4px hsla(0, 0%, 100%, 0.5)',
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

const AnimatedSwitch = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition key={location.key} classNames="fade" timeout={1}>
      <Switch location={location}>
        <Route path="/" exact component={MainContent} />
        <Route path="/country/:name" component={CountryView} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme'))
  const [filter, setFilter] = useState({ by: 'country', filter: 'all'})

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
    <CountryContext.Provider value={{
      search: filter,
      setFilter: filter => setFilter(filter)
    }}>
      <ThemeProvider theme={theme === 'Dark Mode' ? lightTheme : darkTheme}>
        <Page>
          <Header title="Kountry" switchMode={switchMode} theme={theme} />
          <BrowserRouter>
            <AnimatedSwitch />
          </BrowserRouter>
        </Page>
      </ThemeProvider>
    </CountryContext.Provider>
  )
}

export default App
