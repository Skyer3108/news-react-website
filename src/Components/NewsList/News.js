
import { useState } from "react"
import { useEffect } from "react"
// import { useContext } from "react"
import axios from 'axios'
import { useContext } from "react"

import './News.css'



 import { store } from "../../App"
import Pagination from "../Pagination.js"

const News = () => {

    

    const [dataNews, setData] = useState([])

     const [currentPage,setCurrentPage]=useState(1)

    const {category,setCategory,searchVal,setSearchVal}=useContext(store)
    
    const pageSize=6

    const totalArtical=dataNews.length

    console.log(totalArtical)

    const totolPages=Math.ceil(totalArtical/pageSize)

    const startIndex=(currentPage-1)* pageSize

    const endIndex=startIndex+pageSize;

    const currentArticles=dataNews.slice(startIndex,endIndex)

    

    // const pagesSize=12

    const onPageChange=(pageNumber)=>{

        setCurrentPage(pageNumber)



    }
    
    

    

    useEffect(() => {

        console.log('change')

        const fetchData = async () => {

            try{

                const API_KEY = '309fd9c3c81f4dbd98d0f416a74d883e'
                let url = `https://newsapi.org/v2/top-headlines?country=in`
    
                if(category){
    
                    console.log(category,'yes')
    
                    console.log('yes')
                    url+=`&category=${category}`
                }
                if(searchVal){
                    
                    url+=`&q=${searchVal}`
                }
    
    
                
                url += `&apiKey=${API_KEY}`
    
                const resp = await axios.get(url)
    
                console.log(resp.data.articles)
    
                setData(resp.data.articles)

            }catch(err){

                console.log(err,'Eroor')

            }

           

        }



        fetchData()
    },[category,searchVal])




    return (
        <div>

            

                <div className="container">
                        <div className='row'>
                    {
                        currentArticles.map((article,index) => (

                            
                                
                       <div className='col-4'>
                            <div key={index} className="car  card mb-3">

                                <img src={article.urlToImage} alt='Image was not loaded' className="card-img-top" />
                                    <div className="card-body">
                                        <h5 className="card-title">{article.title}</h5>
                                        <p className="card-text">{article.description}</p>
                                        <a href={article.url} className="btn btn-primary">For More</a>
                                    </div>
                            </div>
                       </div>


                        ))
                    }

                </div>

            </div>

            <Pagination currentPage={currentPage} totolPages={totolPages} onPageChange={onPageChange}/>





        </div>
    )
}
export default News