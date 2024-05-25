import { useState } from 'react'
import Ricerca from './components/Ricerca'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='col-6'>
        <h1>test</h1>
        <Ricerca />
      </div>
    </>
  )
}

export default App
