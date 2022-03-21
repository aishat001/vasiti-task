import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
import mobile from '../../assets/vasiti-mag.png'
import facebook from '../../assets/fb.svg'
import twitter from '../../assets/tw.svg'
import linkedin from '../../assets/in.svg'
import instagram from '../../assets/ig.svg'

export default function Footer() {
  return (
    <footer className='footer-bg px-5 sm:px-10 md:px-20 space-y-10 pb-20'>
      <div
          data-aos="fade-up"
          data-aos-duration="3000"
           className="w-full flex flex-col-reverse sm:flex-row justify-around relative pt-20 md:pt-0 md:-top-5">
        <img src={mobile} alt="" className='sm:w-5/12 ' height=""/>

        <div class="mb-10 md:w-6/12 lg:w-4/12 flex flex-col self-center">
          <h5 class="uppercase font-bold mb-2.5 text-3xl text-white">Be a  member
            of our community 🎉</h5>

          <ul class="flex flex-col list-none mb-0 space-y-10">
            <li>
              <Link
                to=""
                class="text-white">We’d make sure you’re always first to know what’s happening on Vasiti—thus, the world.
              </Link>
            </li>

            <li className=' border border-1 flex justify-between p-1 footer-bg-subscribe'>
            <input type="text" name="" placeholder='enter your email address' className='bg-transparent pl-5'/>
             <button type="button" className='bg-white text-dark rounded p-2'>Subscribe</button>
            </li>
          </ul>
        </div>      
      </div>

      <div className="flex flex-wrap flex-row justify-between text-white">

        <div
            data-aos="fade-up"
            data-aos-duration="3000"
             class="mb-6 mr-5">
          <h5 class="uppercase font-bold mb-2.5 ">Company</h5>

          <ul class="flex flex-col list-none mb-0">
            <li>
              <Link
                to=""
                class="text-white">About us
              </Link>
            </li>
            <li>
              <Link
                to=""
                class="text-white">Terms of Use
              </Link>
            </li>
            <li>
              <Link
                to=""
                class="text-white">Private Policy
              </Link>
            </li>
            <li>
              <Link
                to=""
                class="text-white">Press & Media
              </Link>
            </li>

          </ul>
        </div>

        <div
            data-aos="fade-up"
            data-aos-duration="3000"
             class="mb-6 mr-5">
          <h5 class="uppercase font-bold mb-2.5 ">Products</h5>

          <ul class="flex flex-col list-none mb-0">
            <li>
              <Link
                to=""
                class="text-white">Marketplace
              </Link>
            </li>
            <li>
              <Link
                to=""
                class="text-white">Magazine
              </Link>
            </li>
            <li>
              <Link
                to=""
                class="text-white">Seller
              </Link>
            </li>
            <li>
              <Link
                to=""
                class="text-white">Wholesale
              </Link>
            </li>
            <li>
              <Link
                to=""
                class="text-white">Services
              </Link>
            </li>

          </ul>
        </div>

        <div
            data-aos="fade-up"
            data-aos-duration="3000"
             class="mb-6 mr-5">
          <h5 class="uppercase font-bold mb-2.5 ">Careers</h5>

          <ul class="flex flex-col list-none mb-0">
            <li>
              <Link
                to=""
                class="text-white">Become a Campus Rep
              </Link>
            </li>
            <li>
              <Link
                to=""
                class="text-white">Become a Vasiti Influencer
              </Link>
            </li>
            <li>
              <Link
                to=""
                class="text-white">Become a Campus writer
              </Link>
            </li>
            <li>
              <Link
                to=""
                class="text-white">Become an Affiliate
              </Link>
            </li>

          </ul>
        </div>

        <div 
            data-aos="fade-up"
            data-aos-duration="3000"
            class="mb-6 mr-5">
          <h5 class="uppercase font-bold mb-2.5 ">Get in touch</h5>

          <ul class="flex flex-col list-none mb-0">
            <li>
              <Link
                to=""
                class="text-white">Contact us
              </Link>
            </li>
            <li>
              <Link
                to=""
                class="text-white">Partner with us
              </Link>
            </li>
            <li>
              <Link
                to=""
                class="text-white">Advertise with us
              </Link>
            </li>
            <li>
              <Link
                to=""
                class="text-white">Help/FAQs
              </Link>
            </li>

          </ul>
        </div>

        <div
            data-aos="fade-up"
            data-aos-duration="3000"
             class="mb-6">
          <h5 class="uppercase font-bold mb-2.5 ">Join our community</h5>

          <ul class="flex flex-col list-none mb-0 space-y-6">
            <li className='inline-flex'>
            <a
                    href="https://m.facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className=""
                  >
                    <img src={facebook} alt="facebook" width="24px" height="24px"
                    />
                  </a>
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="ml-6"
                  >
                    <img src={twitter} alt="twitter" />
                  </a>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="ml-6"
                  >
                    <img src={instagram} alt="instagram" />
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="ml-6"
                  >
                    <img src={linkedin} alt="linkedin" />
                  </a>
            </li>
            <li>
              <Link
                to=""
                class="text-white">Email Newsletter
              </Link>
            </li>

          </ul>

        </div>

      </div>
    </footer>
  )
}

