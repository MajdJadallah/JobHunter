import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';

function UpdateProfile() {
let profileForm = localStorage.getItem('profileForm');
if (profileForm) {
profileForm = JSON.parse(profileForm);
}
console.log(profileForm)
  return (
    <div>
    <Header/>
    <h1>UpdateProfile</h1>
    <div className='personal'>
        <img src={profileForm.avatar} alt='user '/>
        <p>{profileForm.name}</p>
    </div>
      <p>{profileForm.email}</p>
      <p>{profileForm.Education}</p>
      <p>{profileForm.Experience}</p>
      <p>{profileForm.Location}</p>
      <p>{profileForm.Qualification}</p>
      <p>{profileForm.Skills}</p>
      <p>{profileForm.birthday}</p>
      <p>{profileForm.jobRole}</p>
      <p>{profileForm.jobTitle}</p>
      <Footer/>
    </div>
  )
}

export default UpdateProfile
