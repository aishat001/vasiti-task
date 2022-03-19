import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

export default function Footer() {
  return (
    <footer className='footer-bg'>
      <div className="className">

      </div>
      <div className="className">
      <div class="mb-6">
        <h5 class="uppercase font-bold mb-2.5 text-gray-800">Links</h5>

        <ul class="list-none mb-0">
          <li>
            <Link 
            to=""
            class="text-white">Link 1
            </Link>
            <Link 
            to=""
            class="text-white">Link 1
            </Link>
          </li>
         
        </ul>
      </div>
      </div>
    </footer>
  )
}

