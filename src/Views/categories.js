import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Loader from '../Components/loader'
import ErrorPage from '../Components/error'
import Header from '../Components/header'
import {Link} from "react-router-dom"
  function Categories(){
    const url = 'https://api.chucknorris.io/jokes/categories'
    const [categories, setCategories] = useState({loading: false,
    data: null, error: false})
    let pageContent = null

  useEffect(() => {
    setCategories({loading: true,
      data: null, 
      error: false})
    axios.get(url).then(response => {
      setCategories({loading: false, 
        data: response.data, 
        error: false})
    }).catch(error => {
      setCategories({loading: false, 
        data: null, 
        error: true})
    })
  }, [url])
  if(categories.error){
    pageContent = <ErrorPage/>
  }
  if(categories.loading){
    pageContent = <Loader />
  }
  if(categories.data){
    pageContent = categories.data.map((category, key) => 
<Link to={`/joke/${category}`} className="category-row" style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    
    }}><div><h3>{category}</h3></div></Link>
    )
  }
  
  return(
    
    <div>
      <Header />
      {pageContent}
      </div>)
  
  }

export default Categories