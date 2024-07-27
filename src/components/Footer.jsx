import React from 'react'
import { FaAndroid, FaAppStoreIos, FaApple, FaApplePay, FaAppleWhole, FaFacebook, FaGooglePay, FaGooglePlay, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6'
import TestComponent from './TestComponent'
export default function Footer() {
    return (
        <footer className=" bg-slate-800 text-white">
            <div className="max-w-6xl mx-auto pb-10 pt-5">
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-0 text-gray-400">
                    <aside>
                        <h1 className="text-2xl mb-5 text-white">
                            Learnify
                        </h1>
                        <ul className='space-y-3'>
                            <li><a href="#">Get in Touch</a></li>
                            <li><a href="#">Questions or feedback</a></li>
                            <li><a href="#">waiting to hear from you</a></li>
                        </ul>
                        <div className='text-white flex gap-3 font-bold mt-6'>
                            <FaFacebook/>
                            <FaLinkedin/>
                            <FaInstagram/>
                            <FaTwitter/>
                        </div>         
                    </aside> 
                    
                    <aside >
                        <h1 className="text-2xl mb-5 text-white">
                            products
                        </h1>
                        <ul className='space-y-3'>
                            <li><a href="#">student screen</a></li>
                            <li><a href="#">Remote Acess</a></li>
                            <li><a href="#">Grading</a></li>
                            <li><a href="#">Monitoring</a></li>
                        </ul>
                    </aside>
                            
                    <aside>
                        <h1 className="text-2xl mb-5 text-white">
                            Support
                        </h1>
                        <ul className='space-y-3'>
                            <li><a href="#">Help Desk</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Privacy center</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </aside>
                        
                    <aside>
                        <h1 className="text-2xl mb-5 text-white">
                            Available on
                        </h1>
                        <section className='inline-flex bg-white rounded-md p-2'>
                            <div className='text-black font-bold text-2xl text-center'>
                                <FaApple/>
                            </div>

                            <div className='flex-grow text-black text-xs '>
                            <h4>Download from</h4>
                            <span className='font-semibold'>APP STORE</span>
                            </div>
                        </section> <br />

                        <section className='mt-2 bg-white inline-flex rounded-md p-2'>
                            <div className='text-teal-300 text-2xl text-center'>
                                <FaGooglePlay/>
                            </div>

                            <div className='flex-grow text-black text-xs'>
                                <h4>Download from</h4>
                                <h1 className='font-semibold '>Google Play</h1>
                            </div>

                        </section>

                        <TestComponent />
                    </aside>
                </section>
            </div>     
        </footer>
    )
}

