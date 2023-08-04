import React from 'react'
import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'
import linkedin from '../images/linkedin.svg'
import phone from '../images/telephone-fill.svg'
import location from '../images/geo-alt-fill.svg'
function Footer() {
  return (
    <div id='footer'>
    <div className='container'>
      <div className='row' id='row-footer'>
        <div className='col-4 d-flex ' id='logo-footer'>
          <div>
          <div className='logo'>JobHunter</div>
          <p className='footertext-logo'>Happy job hunting! 🎯 Explore our exciting listings and take the leap towards your dream career. Let's make your aspirations a reality! </p>
          </div>
          <div>
          <h3 id='follow'>Follow us on</h3>
            <div className='socialMedia'>
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram"/>
          <img src={linkedin} alt="linkedin"/>
          <img src={phone} alt="phone"/>
          <img src={location} alt="location"/>
        </div>
          </div>
        </div>
        <div className='col-2'>
        <h4  className="h4Footer">Categories </h4>
        <div>
        <ul className='footerlist'>
            <li>Accounting</li>
            <li>Business</li>
            <li>Engineering</li>
            <li>Marketing</li>
            <li>Medical</li>
            <li>Sales</li>
            <li>Teaching</li>
            <li>Technology</li>
          </ul>
        </div>
        </div>
        <div className='col-2'>
        <h4  className="h4Footer">Community </h4>
        <div>
        <ul className='footerlist'>
            <li>Blog</li>
            <li>Podcast</li>
            <li>Events</li>
            <li>Invite a Friend</li>
          </ul>
        </div>
        </div>
        <div className='col-2'>
        <h4  className="h4Footer">Contact Info</h4>
        <div>
          <ul className='footerlist'>
            <li>
              Amman,Jordan
            </li>
            <li>+99958525448563</li>
            <li>Email:Jobs@Hunting.co</li>
            <li></li>
          </ul>
        </div>
        </div>
      </div>
    </div>
    
    <div className='CopyRight'>
      <h6>JobHunter2023@CopyRight</h6>
    </div>
    </div>
  )
}

export default Footer
