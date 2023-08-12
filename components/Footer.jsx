/* eslint-disable no-unused-vars */
import React from 'react'
import { Logo } from '../src/assets/Logo'
import { FaSquareFacebook, FaSquareTwitter, FaSquareYoutube, FaSquareInstagram } from 'react-icons/fa6'

export const Footer = () => {
  return (
    <footer>
      <h3>Ableton</h3>
      <div>
        <ul>
          <li><a href='#'>Register Live or Push</a></li>
          <li><a href='#'>About Ableton</a></li>
          <li><a href='#'>Jobs</a></li>
          <li>
            <a href='#'><FaSquareFacebook /></a>
            <a href='#'><FaSquareTwitter /></a>
            <a href='#'><FaSquareYoutube /></a>
            <a href='#'><FaSquareInstagram /></a>
          </li>
        </ul>
        <ul>
          <li><strong>Education</strong></li>
          <li><a href='#'>Offers for students and teachers</a></li>
          <li><a href='#'>Ableton for the Classroom</a></li>
          <li><a href='#'>Ableton for Colleges and Universities</a></li>
        </ul>
        <div>
          <p><strong>Sign up to our newsletter</strong></p>
          <p>Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.</p>
          <div>
            <input type='text' placeholder='Email Address' />
            <button>Sign Up</button>
          </div>
        </div>
      </div>
      <div>
        <ul>
          <li><strong>Community</strong></li>
          <li><a href='#'>Find Ableton User Groups</a></li>
          <li><a href='#'>Find Certified Training</a></li>
          <li><a href='#'>Become a Certified Trainer</a></li>
        </ul>
        <div>
          <p><strong>Language and Location</strong></p>
          <div>
            <select>
              <option>English</option>
              <option>Deutsch</option>
              <option>日本語</option>
              <option>Español</option>
            </select>
            <select>
              <option>Worldwide</option>
              <option>Deutschland</option>
              <option>日本</option>
              <option>United States</option>
              <option>Chile</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <ul>
          <li><a href='#'>Contact Us</a></li>
          <li><a href='#'>Press Resources</a></li>
          <li><a href='#'>Legal Info</a></li>
          <li><a href='#'>Privacy Policy</a></li>
          <li><a href='#'>Cookie Settings</a></li>
          <li><a href='#'>Imprint</a></li>
        </ul>
        <div>
          <Logo />
          <h4>Made in Berlin</h4>
        </div>
      </div>
    </footer>
  )
}
