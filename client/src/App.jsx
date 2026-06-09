import React from 'react'
import { useEffect } from 'react'
import {io} from 'socket.io-client'
import {Container} from "@mui/material";
const App = () => {
  const soket = io('http://localhost:3000')
 
  useEffect(() => {
    soket.on('connect' , ()=> {
      console.log(`User connected...`, soket.id)
    })

    return () => {
      soket.disconnect()
    }
  }, [])
  

  return (
    <>
      App
    </>
  )
}

export default App
