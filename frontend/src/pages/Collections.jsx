import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/style.css"
import axios from 'axios';
import CollectionItems from './CollectionItems';
import Spinner from '../components/Spinner';
import InfiniteScroll from 'react-infinite-scroll-component'
import { useNavigate } from 'react-router-dom';


// AIzaSyAd2EI8WVjsJGHDOIn6SivOOmY9hgTUlEs

const Collections = () => {

  const [books, setBooks] = useState([])
  const [totalItems, setTotalItems] = useState(0)
  const [page, setpage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('javascript')
  const navigate = useNavigate()
  const [accessToken,setAccessToken]=useState(false)



  const updateBooks = async (searchTerm) => {
    try {

      if (!searchTerm.trim()) {
        setBooks([]);
        setLoading(false);
        return;
      }
      const url = ` https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyAd2EI8WVjsJGHDOIn6SivOOmY9hgTUlEs`;
      const response = await axios.get(url);
      setBooks(response.data.items)
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
    updateBooks(searchTerm)
  }, [searchTerm])


  const fetchMore = async () => {

    try {
      if (!online) {
        throw new Error('No internet connection');
      }
      const url = ` https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${process.env.BOOK_API_KEY}`;
      const response = await axios.get(url);
      setpage(page + 1)
      setBooks(books.concat(response.data.items))
      setTotalItems(response.data.totalItems)
      setLoading(false)
    }
    catch (error) {
      setError(error.message)
    }
    finally {
      setLoading(false)
    }
  }
  const handleSeachTermChenge = (event) => {
    event.preventDefault()
    setSearchTerm(event.target.value)
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    // console.log("Token from collections", token)
    if (!token) {
      navigate('/form/login')
    }
    else {
      fatchAccessToken(token)
    }

  }, [navigate])

  const fatchAccessToken = async (token) => {
  
    try {
      const tokenData = await axios('/api/v1/users/verifyToken', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          "Content-Type": 'application/json'
        }
      }
     
    )
    // console.log("Token data",tokenData)
    // console.log("token status code:",tokenData.status)
    if (tokenData.status === 200) {
      // console.log("token status code:",tokenData.status)
      setAccessToken(true)
      // console.log("access token status:",accessToken)
      
      // const data= await tokenData.json();
      // console.log("got token Data from collections",data)
    }
    else{
      navigate('/form/login')
      return null
    }
    } catch (error) {
          console.log('Error fetching protected data:', error)
          navigate('/form/login')
    }
  }


  return (
    <>
      <div>
        <form className="d-flex search" role="search">
          <input className="form-control me-2 " type="search" placeholder="Search Books Here" aria-label="Search" value={searchTerm} onChange={handleSeachTermChenge} />
        </form>
      </div>
      <div className="container" style={{
        "margin": "63px",
        "padding": " 25px",

        "position": "relative",
        "right": "30px"
      }}>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={books.length}
          next={fetchMore}
          hasMore={books.length < totalItems}
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