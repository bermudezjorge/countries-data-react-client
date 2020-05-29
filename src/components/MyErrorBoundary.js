import React from 'react'
import styled from 'styled-components'

const ErrorMessage = styled.h1`
  margin-top: 10%;
  height: 60vh;
  font-family: NunitoBlack;
  font-size: ${props => props.theme.detailPage};  
  color: ${props => props.theme.textColor};
`

class MyErrorBoundary extends React.Component {
  state = {
    errorMessage: ''
  }
  static getDerivedStateFromError(error) {
    return {errorMessage: error.toString()}
  }
  componentDidCatch(error, info) {
    this.logErrorToServices(error.toString(), info.componentStack)
  }
  logErrorToServices = console.log
  render() {
    if (this.state.errorMessage) {
      return (
        <ErrorMessage>
          {this.state.errorMessage}
        </ErrorMessage>
      )
    }
    return this.props.children
  }
}

export default MyErrorBoundary