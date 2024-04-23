import React, { useEffect, useState } from 'react'
import "../styles/style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import "../styles/Cards.css"
import axios from 'axios'
function MyAccount() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetchData()
      , []
  })

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');
      const url = await axios.post('/api/v1/users/getUserDetails', {}, {
        headers: {
          Authorization: `Bearer ${token}` // Send the token in the Authorization header
        }
      })
      setData(url.data)
    } catch (error) {
      console.log("Error in fatching data", error)
    }

  }
  return (
    <>
      <div className="card round" style={{ "width": "33rem" }}>
        {Array.isArray(data)&&   data.map((element) => {
          return <div className="container" key={element._id}>
      <FontAwesomeIcon className='large-icon' icon={faCircleUser}  style={{   " position": "relative",
    "left": "0px","fontSize":"9rem"}}/>
        <div className="card-body ">
          <h5 className="card-title">{element. fullName}</h5>
          <h4>{element.email}</h4>
          </div>
        </div>
        })}
      </div>
    </>
  )
}

export default MyAccount
