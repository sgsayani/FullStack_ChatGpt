import React from 'react'
import { useAppContext } from '../Context/AppContext'

const Sidebar = () => {
  const {chats,setselectedChat,user,theme, setTheme} = useAppContext()
  
  return (
    <div>
      sidebar
    </div>
  )
}

export default Sidebar
