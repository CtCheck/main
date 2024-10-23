import { useState } from 'react'
import RouterApp from './RouterApp'
import { CssBaseline } from '@mui/material'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CssBaseline/>
      <RouterApp />
    </>
  )
}

export default App
