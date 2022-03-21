import React from 'react'
import testimonialImageMobile from '../../assets/ti2.png'
import testimonialImage from '../../assets/ti2-duplicate.png'
import ti3Mobile from '../../assets/ti3.png'
import ti3 from '../../assets/ti3-duplicate.png'
import ti4 from '../../assets/ti4.png'
import share from '../../assets/share.png'
import './homepage.css'
import {Link} from 'react-router-dom'
import people, { vendors } from '../../data'
// import vendors from '../../data'


function Homepage() {
    return (
        <div className="flex flex-col">

            <section className='space-y-10 md:space-y-0 flex flex-col sm:flex-row justify-center align-center pt-10 md:px-20'>
                <div className="px-5 sm:px-10  md:px-0 text-left space-y-8 flex flex-col justify-center align-center md:w-5/12">
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
                    <img src={testimonialImageMobile} alt="testimonial" className="w-screen sm:hidden "/>
                    <img src={testimonialImage} alt="testimonial" className="hidden sm:flex"/>
                </div>
            </section>


            <section className=' overflow-hidden pb-24 space-y-10 md:space-y-0 text-white flex flex-col-reverse md:flex-row justify-between align-center md:px-20 hp-sectionBg'>
            <div className="md:w-4/12 xl:w-6/12">
                    <img src={ti3Mobile} alt="testimonial" className="w-screen sm:hidden relative top-24"/>
                    <img src={ti3} alt="testimonial" className="hidden sm:flex relative top-40"/>
                </div>
                <div className=" mt-10 md:mt-0 mb-28 md:mb-0 px-5 sm:px-10   md:px-0 text-left space-y-10 flex flex-col justify-center align-center  md:w-6/12  xl:w-4/12 relative top-14">
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

                    <Link to="" className="uppercase tracking-3 font-medium letter-spacing">
                        Share your story!
                        <img src={share} alt="share your story line" width="240px"/>
                    </Link>
                </div>
 
            </section>


            <section className='mt-20 flex flex-wrap flex-row py-20 justify-start lg:justify-around align-center px-5 sm:px-10 md:px-20'>
                
            {
                people.map(item => 
                    <div className="space-y-3 w-80 mb-20 mr-5">
                        <img src={item.image} alt=""/>
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
         
                <div className="px-8 md:px-0 text-left space-y-6 flex flex-col justify-center align-center md:w-5/12 mt-20 md:mt-0">
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

                    <Link to="" className="uppercase tracking-3 font-medium letter-spacing text-orange">
                        Share your story!
                        <img src={share} alt="share your story line" width="240px"/>
                    </Link>
                </div>
                <div className="md:w-7/12 xl:w-6/12">
                    <img src={ti4} alt="testimonial" className="w-screen sm:hidden "/>
                    <img src={ti4} alt="testimonial" className="hidden sm:flex relative top-20" height="700px"/>
                </div>
            </section>

            <section className='mt-20 flex flex-wrap flex-row py-20 justify-start lg:justify-around align-center px-5 sm:px-10  md:px-20 py-20'>
                
                {
                    vendors.map(item => 
                        <div className="space-y-3 w-80 mb-20 mr-5">
                            <img src={item.image} alt=""/>
                            <p className="text-2xl">{item.name}</p>
                            <div className="flex flex-row space-x-3 items-center">
                                {/* <span>IN {item.location}</span> */}
                                <span className="green p-2">{item.type}</span>
    
                            </div>
                            <p>{item.info}</p>
                        </div>)
                }
     
                </section>

        </div>
    )
}

export default Homepage