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
                <div className="px-8 md:px-0 text-left space-y-8 flex flex-col justify-center align-center md:w-5/12">
                    <h1 className='text-3xl xs:text-4xl md:text-5xl  font-bold'>
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


            <section className=' overflow-hidden space-y-10 md:space-y-0 text-white flex flex-col-reverse sm:flex-row py-10 justify-center align-center md:px-20 hp-sectionBg'>
            <div className="md:w-7/12 mt-10">
                    <img src={ti3Mobile} alt="testimonial" className="w-screen sm:hidden "/>
                    <img src={ti3} alt="testimonial" className="hidden sm:flex relative top-16"/>
                </div>
                <div className="px-8 md:px-0 text-left space-y-6 flex flex-col justify-center align-center md:w-5/12">
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

                    <Link to="" className="uppercase tracking-3 font-medium">
                        Share your story!
                        <img src={share} alt="share your story line"/>
                    </Link>
                </div>
 
            </section>


            <section className='mt-20 space-y-10 flex flex-wrap flex-row pt-10 justify-between align-center px-10 md:px-20'>
                
            {
                people.map(item => 
                    <div className="space-y-3 w-96">
                        <img src={item.image} alt=""/>
                        <p className="text-2xl">{item.name}</p>
                        <div className="flex flex-row space-x-3">
                            <span>IN {item.location}</span>
                            <span>{item.type}</span>

                        </div>
                        <p>{item.info}</p>
                    </div>)
            }
 
            </section>

            <section className='hp-section4bg space-y-10 md:space-y-0 flex flex-col-reverse sm:flex-row pt-10 mt-20 justify-center align-center md:px-20'>
         
                <div className="px-8 md:px-0 text-left space-y-6 flex flex-col justify-center align-center md:w-5/12">
                    <h1 className='text-2xl  font-bold'>
                    Oby's Experience <br></br>
                    <span className="border max-w-min p-1 rounded font-normal relative top-2">
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

                    <Link to="" className="uppercase tracking-3 font-medium">
                        Share your story!
                        <img src={share} alt="share your story line"/>
                    </Link>
                </div>
                <div className="md:w-7/12 mt-10">
                    <img src={ti4} alt="testimonial" className="w-screen sm:hidden "/>
                    <img src={ti4} alt="testimonial" className="hidden sm:flex"/>
                </div>
            </section>

            <section className='mt-20 space-y-10  flex flex-wrap flex-row pt-10 justify-start md:justify-between align-center px-10 md:px-20'>
                
                {
                    vendors.map(item => 
                        <div className="space-y-3 w-96">
                            <img src={item.image} alt=""/>
                            <p className="text-2xl">{item.name}</p>
                            <div className="flex flex-row space-x-3">
                                <span>IN {item.location}</span>
                                <span>{item.type}</span>
    
                            </div>
                            <p>{item.info}</p>
                        </div>)
                }
     
                </section>

        </div>
    )
}

export default Homepage