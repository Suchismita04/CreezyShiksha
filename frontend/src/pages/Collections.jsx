import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Animation.css"
import "../styles/style.css"
import axios from 'axios';
import CollectionItems from './CollectionItems';
import Spinner from '../components/Spinner';

// AIzaSyAd2EI8WVjsJGHDOIn6SivOOmY9hgTUlEs
const Collections = () => {
  const [books, setBooks] = useState([])
  const [totalItems, setTotalItems] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const updateBooks = async () => {
    try {
      const url = 'https://www.googleapis.com/books/v1/volumes?q=search+terms&key=AIzaSyAd2EI8WVjsJGHDOIn6SivOOmY9hgTUlEs';
      const response = await axios.get(url);
      console.log("response=",response)
      setBooks(response.data.items)
      console.log("Books after res=",books)
      setTotalItems(response.data.length)
    }
    catch {
      setError(error)
    }
    finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    console.log("Updated books:", books);
    updateBooks()
  }, [])


  return (
    <>
    {loading && <Spinner />}
      <div className='container' style={{ "position": "absolute", "left": "158px", "top": "120px" }}>
        <div className='container py-4 py-md-5 px-4 px-md-3 text-body-secondary'>
       
          <div className="row">
            {Array.isArray(books) && books.map((element, index) => {
              return <div className='col-md-4' key={index}>
                <CollectionItems title={element.volumeInfo.title ? element.volumeInfo.title : ""} bookUrl={element.selfLink} description={element.volumeInfo.description} imageLinks={element.imageLinks?.thumbnail || ""} publisher={element.volumeInfo.publisher} />
              </div>
            })}
          </div>
        </div>
      </div>
    </>
  )
}
export default Collections;