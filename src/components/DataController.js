import React from 'react'
import styled from 'styled-components'

import SearchBar from './SearchBar'
import RegionFilter from './RegionFilter'

const DataControllerContainer = styled.div`
  width: 90%;
  margin: 5% 0;
  display: flex;
  justify-content: space-between;
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