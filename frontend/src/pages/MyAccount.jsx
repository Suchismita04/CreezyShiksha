import React, { useEffect, useState } from 'react'
import "../styles/style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import "../styles/Cards.css"
import axios from 'axios'
function MyAccount() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Retrieve the token from localStorage
        const token = localStorage.getItem('token');
        console.log("token from myAccount:",token)

        // Make a request to the server to fetch user data
        const response = await axios.post('/api/v1/users/getUserDetails', {}, {
          headers: {
            Authorization: `Bearer ${token}` // Send the token in the Authorization header
          }
        });
        console.log("res from my account:",response)

        // Set the user data in state
      console.log( "res.data",setUserData(response.data.user))
      } catch (error) {
        console.error('Error fetching user data:', error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="card round" style={{ "width": "33rem" }}>
        {userData &&   userData.map((element) => {
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
