

import { useState } from 'react'

import { useContext } from 'react'
import { store } from '../App'

import './Nav.css'
import News from '../Components/NewsList/News'


const Nav=()=>{

    

    const {category,setCategory,searchVal,setSearchVal}=useContext(store)

    const [ser,setSer]=useState('')

    console.log(ser)
    console.log(searchVal,'searchval')
    
  

   

    let handleCategory=(category)=>{

        console.log('changed dddddddddddd')
       
        setCategory(category)
        setSearchVal('')
    }

    

    

   


   

    return(
        <div>

            <div className='nav'>

                <h1>News-App</h1>

             <div>
             <ul className='list'>
                <li onClick={()=>handleCategory('')} >Home</li>
                <li onClick={()=>handleCategory('business')}>Bussiness</li>

                <li onClick={()=>handleCategory('technology')}>Technology</li>

                <li onClick={()=>handleCategory('sports')}>Sports</li>

             </ul>

             </div>

             <div>
                <form className='d-flex'>
                <input value={ser} onChange={(e)=>setSer(e.target.value)} type='text' placeholder='search' className='me-2 from-control' name='search'/>
                <button onClick={(event)=>{
                    event.preventDefault()
                setSearchVal(ser)
                setSer('')
                    

                }} className='btn btn-primary' type='submit'>Search</button>

                </form>
             

             </div>
            

             {/* <div>
                <select className='form-select form-select-lg '>
                    <option onClick={()=>handleCategory('business')}>Bussiness</option>
                    <option onClick={()=>handleCategory('technology')}>Technology</option>
                    <option onClick={()=>handleCategory('sports')}>Sports</option>

                </select>
             </div> */}
               

            </div>

            

           

            
        
        </div>
    )

}
export default Nav