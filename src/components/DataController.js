import React from 'react'
import styled from 'styled-components'
import SearchBar from './SearchBar'
import RegionFilter from './RegionFilter'

const DataControllerContainer = styled.div`
  width: 90%;
  margin: 5% auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 640px) {
    display: block;
    width: 100%;
  }
`

const DataController = (props) => {
  return (
    <DataControllerContainer>
      <SearchBar />
      <RegionFilter />
    </DataControllerContainer>
  )
} 
  

export default DataController