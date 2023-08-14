/* eslint-disable no-unused-vars */
import React from 'react'
import { Logo } from '../src/assets/Logo'
import { FaSquareFacebook, FaSquareTwitter, FaSquareYoutube, FaSquareInstagram, FaChevronRight } from 'react-icons/fa6'

export const Footer = () => {
  return (
    <>
      <div className='separator' />
      <hr />
      <footer>
        <h3>Ableton</h3>
        <div className='footer-part-1'>
          <ul className='footer-ul'>
            <li><a href='#'>Register Live or Push <FaChevronRight size={8} /></a></li>
            <li><a href='#'>About Ableton <FaChevronRight size={8} /></a></li>
            <li><a href='#'>Jobs <FaChevronRight size={8} /></a></li>
            <li>
              <a href='#'><FaSquareFacebook color='blue' size={45} /></a>
              <a href='#'><FaSquareTwitter color='skyBlue' size={45} /></a>
              <a href='#'><FaSquareYoutube color='red' size={45} /></a>
              <a href='#'><FaSquareInstagram color='orange' size={45} /></a>
            </li>
          </ul>
          <ul className='footer-ul-2'>
            <li><strong>Education</strong></li>
            <li><a href='#'>Offers for students and teachers <FaChevronRight size={8} /></a></li>
            <li><a href='#'>Ableton for the Classroom <FaChevronRight size={8} /></a></li>
            <li><a href='#'>Ableton for Colleges and Universities <FaChevronRight size={8} /></a></li>
          </ul>
          <div className='footer-newsteller'>
            <p><strong>Sign up to our newsletter</strong></p>
            <p>Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.</p>
            <div>
              <input type='text' placeholder='Email Address' />
              <button>Sign Up</button>
            </div>
          </div>
        </div>
        <div className='footer-part-2'>
          <ul>
            <li><strong>Community</strong></li>
            <li><a href='#'>Find Ableton User Groups <FaChevronRight size={8} /></a></li>
            <li><a href='#'>Find Certified Training <FaChevronRight size={8} /></a></li>
            <li><a href='#'>Become a Certified Trainer <FaChevronRight size={8} /></a></li>
          </ul>
          <div className='footer-select'>
            <p><strong>Language and Location</strong></p>
            <div>
              <select style={{ width: '40%' }}>
                <option>English</option>
                <option>Deutsch</option>
                <option>日本語</option>
                <option>Español</option>
              </select>
              <select style={{ width: '60%' }}>
                <option>Worldwide</option>
                <option>Deutschland</option>
                <option>日本</option>
                <option>United States</option>
                <option>Chile</option>
              </select>
            </div>
          </div>
        </div>
        <div className='footer-part-3'>
          <ul>
            <li><a href='#'>Contact Us</a></li>
            <li><a href='#'>Press Resources</a></li>
            <li><a href='#'>Legal Info</a></li>
            <li><a href='#'>Privacy Policy</a></li>
            <li><a href='#'>Cookie Settings</a></li>
            <li><a href='#'>Imprint</a></li>
          </ul>
          <div className='footer-logo'>
            <h4>Made in Berlin</h4>
            <Logo />
          </div>
        </div>
      </footer>
    </>
  )
}
