import { Drawer } from '@mui/material'
import React from 'react'
import SideBar from '../../ui/components/SideBar/SideBar'
import Spinner from '../../ui/components/Spinner/Spinner'
import ScrollableBox from '../../ui/components/ScrollableBox/ScrollableBox'

const Home = () => {
  return (
    <div>
      <div>home</div>
      <ScrollableBox>
      
        {Array(230).fill('10').map((item,index)=>
        
          <div>{index}</div>
          )}

      </ScrollableBox>
      d
    </div>
  )
}

export default Home