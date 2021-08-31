import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Loader from '../Components/loader'
import ErrorPage from '../Components/error'
import { useParams } from 'react-router-dom'


  function CategoryItem(){
    const { category } = useParams()
    const url = `https://api.chucknorris.io/jokes/random?category=${category}`
    const [joke, setJoke] = useState({loading: false,
    data: null, error: false})
    let pageContent = null

  useEffect(() => {
    setJoke({loading: true,
      data: null, 
      error: false})
    axios.get(url).then(response => {
      setJoke({loading: false, 
        data: response.data, 
        error: false})
    }).catch(error => {
      setJoke({loading: false, 
        data: null, 
        error: true})
    })
  }, [url])
  if(joke.error){
    pageContent = <ErrorPage/>
  }
  if(joke.loading){
    pageContent = <Loader />
  }
  if(joke.data){
    pageContent = <div className="category-joke"><h3 style={{
        color: "#fff",
      }}>{joke.data.value}</h3></div>
  }
  
  return(
    
    <div>
     <h1>Random joke from {category} category</h1>
      {pageContent}
      </div>)
  
  }

export default CategoryItem