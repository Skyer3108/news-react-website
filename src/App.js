import Nav from './Navbar/Nav'

import { useState } from 'react'

import News from './Components/NewsList/News'
import { createContext } from 'react'


export const store = createContext()

function App() {
   
  const [category, setCategory] = useState('')

   

   const [searchVal,setSearchVal]=useState('')


   console.log(category)
  
  return (
    <store.Provider value={{category,setCategory,searchVal,setSearchVal}}>

    <div>

      <Nav />
      <News />


    </div>
  </store.Provider>
  )
}

export default App;
