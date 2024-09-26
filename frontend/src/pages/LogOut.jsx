import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'


function LogOut() {


useEffect(()=>{
    const token=localStorage.getItem('token')
    if (!token) {
        alert("Please Register Yourself!!!")
    }
    else{
        console.log("Token from logOut",token)
        processToken(token)
    }
  
},[])


const processToken= async(token)=>{
   
    try {
        console.log("token from process token",token)
        const response=await axios('/api/v1/users/logOut',{
            method:'POST',
            headers:{
                'Authorization':`Bearer ${token}`,
                'Content-Type':'Application/json'
            }
        })
    
        if(response.status === 200){
            localStorage.removeItem('token')
            alert("Successfully Logged Out")
            
        }
        else {
            console.error('Logout failed');
          }
    } catch (error) {
        console.log("Error has been occured during log out",error)
    }
}




  return (
    <>
     {<Navigate to={'/form/login'}/>}
    </>
   
  )
}

export default LogOut

