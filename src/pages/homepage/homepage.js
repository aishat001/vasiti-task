import React, { useState } from 'react'
import testimonialImageMobile from '../../assets/ti2.png'
import testimonialImage from '../../assets/ti2-duplicate.png'
import ti3Mobile from '../../assets/ti3.png'
import ti3 from '../../assets/ti3-duplicate.png'
import ti4 from '../../assets/ti4.png'
import attach from '../../assets/chooseFile.svg'
import share from '../../assets/share.png'
import './homepage.css'
import { Link } from 'react-router-dom'
import people, { vendors } from '../../data'


function Homepage() {
    const [click, setClick] = useState(false)


    return (
        <div className="flex flex-col">

            <section className='space-y-10 md:space-y-0 flex flex-col sm:flex-row justify-center align-center pt-10 md:px-20'>
                <div
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    className="px-5 sm:px-10  md:px-0 text-left space-y-8 flex flex-col justify-center align-center md:w-5/12">
                    <h1 className='text-3xl xs:text-4xl sm:text-3xl md:text-3xl lg:text-5xl  font-bold'>
                        Amazing
                        Experiences from Our Wonderful Customers
                    </h1>
                    <p className="text-lg font-normal">
                        Here is what customers and vendors
                        are saying about us, you can share
                        your stories with us too.
                    </p>
                </div>
                <div className="md:w-7/12">
                    <img src={testimonialImageMobile} alt="testimonial" className="w-screen sm:hidden " />
                    <img src={testimonialImage} alt="testimonial" className="hidden sm:flex" />
                </div>
            </section>


            <section className=' overflow-hidden pb-24 space-y-10 md:space-y-0 text-white flex flex-col-reverse md:flex-row justify-between align-center md:px-20 hp-sectionBg'>
                <div
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    className="md:w-4/12 xl:w-6/12">
                    <img src={ti3Mobile} alt="testimonial" className="w-screen sm:hidden relative top-24" />
                    <img src={ti3} alt="testimonial" className="hidden sm:flex relative top-40" />
                </div>

                <div
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    className=" mt-10 md:mt-0 mb-28 md:mb-0 px-5 sm:px-10   md:px-0 text-left space-y-10 flex flex-col justify-center align-center  md:w-6/12  xl:w-4/12 relative top-14">
                    <h1 className='text-2xl  font-bold'>
                        Oby's Experience <br></br>
                        <span className="border max-w-min p-1 rounded font-normal relative top-2">
                            Customer
                        </span>
                    </h1>

                    <p className="text-lg font-normal">
                        I had the best experience shopping with vasiti.
                        Usability of the website was great, very good customer service,
                        an all round great experience. I would definately be coming back!
                        I had the best experience shopping with vasiti. Usability of
                        the website was great, very good customer service,
                        an all round great experience. I would definately be coming back!
                    </p>

                    <Link to="" className="uppercase tracking-3 font-medium letter-spacing" data-modal-toggle="authentication-modal">
                        Share your story!
                        <img src={share} alt="share your story line" width="240px" />
                    </Link>
                </div>

            </section>


            <section className='mt-20 flex flex-wrap flex-row py-20 justify-start lg:justify-around align-center px-5 sm:px-10 md:px-20'>

                {
                    people.map(item =>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="3000"
                            className="space-y-3 w-80 mb-20 mr-5">
                            <img src={item.image} alt="" />
                            <p className="text-2xl">{item.name}</p>
                            <div className="flex flex-row space-x-3 items-center">
                                <span >IN {item.location}</span>
                                <span className="blue p-2">{item.type}</span>

                            </div>
                            <p>{item.info}</p>
                        </div>)
                }

            </section>

            <section className='hp-section4bg flex flex-col-reverse md:flex-row py-20 md:pb-0 justify-between sm:justify-between align-center md:px-20'>

                <div

                    data-aos="fade-up"
                    data-aos-duration="3000"
                    className="px-8 md:px-0 text-left space-y-6 flex flex-col justify-center align-center md:w-5/12 mt-20 md:mt-0">
                    <h1 className='text-2xl  font-bold'>
                        Oby's Experience <br></br>
                        <span className="border max-w-min p-1 rounded font-normal relative top-2 text-orange">
                            VENDOR
                        </span>
                    </h1>

                    <p className="text-lg font-normal">
                        I had the best experience shopping with vasiti.
                        Usability of the website was great, very good customer service,
                        an all round great experience. I would definately be coming back!
                        I had the best experience shopping with vasiti. Usability of
                        the website was great, very good customer service,
                        an all round great experience. I would definately be coming back!
                    </p>

                    <Link to="" className="uppercase tracking-3 font-medium letter-spacing text-orange" data-modal-toggle="authentication-modal">
                        Share your story!
                        <img src={share} alt="share your story line" width="240px" />
                    </Link>
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    className="md:w-7/12 xl:w-6/12 overflow-hidden">
                    <img src={ti4} alt="testimonial" className="w-screen md:hidden " />
                    <img src={ti4} alt="testimonial" className="hidden md:flex relative top-20 height-700" height="700px" />
                </div>
            </section>

            <section className='mt-20 flex flex-wrap flex-row py-20 justify-start lg:justify-around align-center px-5 sm:px-10  md:px-20 py-20'>

                {
                    vendors.map(item =>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="3000"
                            className="space-y-3 w-80 mb-20 mr-5">
                            <img src={item.image} alt="" />
                            <p className="text-2xl">{item.name}</p>
                            <div className="flex flex-row space-x-3 items-center">
                                {/* <span>IN {item.location}</span> */}
                                <span className="green p-2">{item.type}</span>

                            </div>
                            <p>{item.info}</p>
                        </div>)
                }

            </section>


            {/* <!-- Main modal --> */}
            <div id="authentication-modal" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0">
                <div class="relative px-4 w-full max-w-md h-full md:h-auto">
                    {/* <!-- Modal content --> */}
             
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div class="flex justify-end p-2">
                                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>
                            </div>
                            { 
                            click === false &&
                        (

                            <form class="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8" action="#">
                                <h3 class="text-xl font-bold text-gray-900 dark:text-white">Share your amazing story!</h3>
                                <div>
                                    <label class="block">Upload your Picture
                                        <div className="w-full text-sm text-slate-500 p-4 border border-1 bg-transparent flex flex-row justify-between">
                                            <label className='inline-flex -webkit-inline-box items-center'>Choose image
                                                <input type="file" class="opacity file:bg-violet-50 file:opacity-0  " placeholder='choose file' />
                                                <img src={attach} alt="" />

                                            </label>
                                        </div>
                                    </label>
                                </div>

                                <div className="flex flex-row space-x-3">
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First Name
                                        <input type="text" name="firstName" id="firstName" class=" border border-gray-300 text-gray-900 text-sm rounded focus:border-orange block w-full p-2.5" placeholder="" required />
                                    </label>

                                    <label for="lastName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last Name
                                        <input type="text" name="lastName" id="lastName" class=" border border-gray-300  text-sm rounded  focus:border-orange block w-full p-2.5 " required />
                                    </label>

                                </div>
                                <div class="mb-2">
                                    <label for="comment" class="text-lg text-gray-600">Share your story</label>
                                    <textarea class="w-full h-20 p-2 border rounded focus:outline-none focus:border-orange"
                                        name="comment" placeholder=""></textarea>
                                </div>

                                <div class="flex justify-between">
                                    <div class="flex items-start">
                                        <div class="ml-3 text-sm">
                                            <label for="remember" class="font-medium text-gray-900 dark:text-gray-300">What did you interact with Vasiti as?</label>
                                        </div>
                                        <div class="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="radio" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300" required />
                                            <input id="remember" aria-describedby="remember" type="radio" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300" required />
                                        </div>

                                    </div>
                                </div>

                                <div class="mb-2">
                                    <label for="comment" class="text-lg text-gray-600">City or Higher Institution (for Students)</label>
                                    <input class="w-full p-2 border rounded focus:outline-none focus:ring-gray-300 "
                                        name="comment" placeholder="" />
                                </div>

                                <button
                                    // onClick={setClick(true)}
                                    type="submit"
                                    class="flex ml-auto text-white bg-orange focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                    Share your story</button>

                            </form>
                                 ) 
                                 
                        }
                        {click === true &&
                                 (
                                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <h1>Thank you for
                                sharing your story!</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        
                            <button type="submit" class="flex ml-auto text-white bg-orange focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Share your story</button>
        
                        </div>
                                 )
                                }

                    </div>
                   
         
            </div>
        </div>
        </div >
    )
}

export default Homepage