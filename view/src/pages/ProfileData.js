import React from 'react'
import useFetch from '../customhooks/useFetch';
import Profile from './Profile';

const ProfileData = () => {
      
    let userData = JSON.parse(localStorage.getItem('userData')[0]); 
  console.log(userData)
  const { data: users, error, isPending } = useFetch('http://localhost:5000/users/'+ userData.id);
  console.log(userData.id)
  return (

    <>
       
    </>
  )
}

export default ProfileData
