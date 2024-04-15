import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/style.css"
import axios from 'axios';
import CollectionItems from './CollectionItems';
import Spinner from '../components/Spinner';
import InfiniteScroll from 'react-infinite-scroll-component'
import { Suspense } from 'react';

// AIzaSyAd2EI8WVjsJGHDOIn6SivOOmY9hgTUlEs

const Collections = () => {
  const [books, setBooks] = useState([])
  const [totalItems, setTotalItems] = useState(0)
  const [page, setpage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('java')


  const updateBooks = async (searchTerm) => {
    try {
      const url = ` https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyAd2EI8WVjsJGHDOIn6SivOOmY9hgTUlEs`;
      const response = await axios.get(url);
      setBooks(response.data.items)
      setTotalItems(response.data.length)
      if (!searchTerm.trim()) {
        // If search term is empty or contains only whitespace, return early
        setLoading(false);
        return;
      }
    }
    catch {
      setError(error)
    }
    finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    updateBooks(searchTerm)
  }, [searchTerm])


  const fetchMore = async () => {

    try {
      if (!online) {
        throw new Error('No internet connection');
      }
      const url = ` https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyAd2EI8WVjsJGHDOIn6SivOOmY9hgTUlEs`;
      const response = await axios.get(url);
      setpage(page + 1)
      setBooks(books.concat(response.data.items))
      setTotalItems(response.data.totalItems)
      setLoading(false)
    }
    catch (error) {
      setError(error.message)
    }
  }
  const handleSeachTermChenge = (event) => {
    event.preventDefault()
    setSearchTerm(event.target.value)
  }

  const handleSearchTermSubmit = () => {
    updateBooks(searchTerm);
  };



  return (
    <>
      <div>
        <form className="d-flex search" role="search">
          <input className="form-control me-2 " type="search" placeholder="Search Books Here" aria-label="Search" value={searchTerm} onChange={handleSeachTermChenge} />
          <button className="btn btn-outline-success" type="submit" onSubmit={handleSearchTermSubmit}>Search</button>
        </form>
      </div>
      <div className="container">
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={books.length}
          next={fetchMore}
          hasMore={books.length != totalItems}
          loader={<Spinner />}
          style={{ 'overflow': 'hidden' }}
        >
          <div className='container' >
            <div className='container py-4 py-md-5 px-4 px-md-3 text-body-secondary'>

              <div className="row">
                {Array.isArray(books) && books.map((element, index) => {
                  return <div className='col-md-4' key={index}>
                    <CollectionItems
                      title={element.volumeInfo.title ? element.volumeInfo.title : ""}
                      bookUrl={element.selfLink}
                      description={element.volumeInfo.description ? element.volumeInfo.description.slice(0, 50) : ""}
                      imageLinks={element.volumeInfo.imageLinks?.thumbnail || ""}
                      publisher={element.volumeInfo.publisher} />
                  </div>
                })}
              </div>
            </div>
          </div>
        </InfiniteScroll>
      </div>

    </>
  )
}
export default Collections;