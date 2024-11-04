import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroImage from './images/heroImage.jpg';
import ayroui from './images/brands/ayroui.svg';
import graygrids from './images/brands/graygrids.svg';
import uideck from './images/brands/uideck.svg';
import target from './images/brands/target.svg';
import mobile from './images/brands/mobile.svg';
import time from './images/brands/time.svg';
import price from './images/brands/price.svg';

function Hero() {
    return (
        <div className="font-poppins overflow-x-hidden bg-gradient-to-br from-blue-100">
            <div className="relative pt-[120px] pb-[110px] lg:pt-[150px]">
                <div className="container mx-auto max-sm:px-2">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4 lg:w-6/12">
                            <div className="hero-content">
                                <motion.div
                                    variants={{
                                        visible: { opacity: 1, y: 0 },
                                        hidden: { opacity: 0, y: 75 },
                                    }}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{ duration: 0.75, delay: 0.25 }}
                                    className=''
                                >
                                    <h1 className="sm:text-8xl text-2xl from-blue-400 to-emerald-600 mb-3  xl:mt-20
                            font-bold leading-snug sm:text-[42px] lg:text-[40px] xl:text-[42px]">

                                        Welcome to <br />
                                        <span className="sm:text-7xl text-6xl xl:my-40 ">
                                            <span className='text-blue-500 cursor-pointer my-40'>XCENTIC</span> <br />
                                        </span>
                                        <span className="sm:text-7xl text-6xl">

                                            Connecting Brands With Audiences
                                        </span>

                                    </h1>
                                    <p className="text-gray-500 text-sm my-8 max-w-[480px] sm:text-base">
                                        We offer creative solutions to present your content.
                                        From sleek blog cards to user profiles and product showcases,
                                        each design is crafted with your brand in mind.
                                        With options that cater to every business need,
                                        our cards ensure your message stands out while adhering
                                        to modern design principles.

                                    </p>
                                </motion.div>
                                <motion.div
                                    variants={{
                                        visible: { opacity: 1, x: 0 },
                                        hidden: { opacity: 0, x: -75 },
                                    }}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{ duration: 0.75, delay: 0.25 }}
                                >
                                    <ul className="flex flex-wrap items-center">
                                        <li>
                                            <Link
                                                to="/contact"
                                                class="bg-blue-500 border-solid border-2 border-blue-500 hover:border-blue-700 hover:bg-blue-700 transition ease-in-out delay-100
                                    inline-flex items-center justify-center rounded-lg py-4 px-6 text-center text-base font-normal text-white  sm:px-10 lg:px-8 xl:px-10"
                                            >
                                                Contact
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/about"
                                                class="border-solid border-2 border-blue-500   text-black font-normal hover:bg-blue-500 hover:text-white transition ease-in-out delay-100
                                    ml-6 inline-flex items-center justify-center rounded-lg py-4 px-6 text-centersm:px-10 lg:px-8 xl:px-10"
                                            >
                                                About
                                            </Link>
                                        </li>
                                    </ul>
                                </motion.div>


                                <motion.div
                                    variants={{
                                        visible: { opacity: 1 },
                                        hidden: { opacity: 0 },
                                    }}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{ duration: 0.75, delay: 0.25 }}
                                    class="clients pt-16"
                                >
                                    <h6 className="text-body-color mb-2 flex items-center text-xl font-normal text-gray-500">
                                        Elevate Your Brand's Online Impact
                                        <span className="bg-body-color ml-2 inline-block h-[1px] w-8"></span>
                                    </h6>
                                    <div className="flex items-center">
                                        <div className="mr-4 w-1/2 py-3">
                                            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium jss137 jss142 css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="GridOnIcon">
                                                <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z"></path>
                                            </svg>
                                            <div className="text-body-color mb-2 flex items-center text-xl font-normal text-gray-500">
                                                Targeted Campaign
                                            </div>
                                        </div>
                                        <div className="mr-4 w-1/2 py-3">
                                            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium jss137 jss142 css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PhonelinkIcon">
                                                <path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"></path>
                                            </svg>
                                            <div className="text-body-color mb-2 flex items-center text-xl font-normal text-gray-500">
                                                Mobile Optimization
                                            </div>
                                        </div>
                                        <div className="mr-4 w-1/2 py-3">
                                            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium jss137 jss142 css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AccessTimeIcon">
                                                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                                                <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
                                            </svg>
                                            <div className="text-body-color mb-2 flex items-center text-xl font-normal text-gray-500">
                                                Time-Efficient Solutions
                                            </div>
                                        </div>
                                        <div className="mr-4 w-1/2 py-3">
                                            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium jss137 jss142 css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AttachMoneyIcon"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"></path></svg>
                                            <div className="text-body-color mb-2 flex items-center text-xl font-normal text-gray-500">
                                            Cost-Effective Strategies
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        <div className="hidden px-4 lg:block lg:w-1/12 "></div>

                        <div className="w-full px-4 lg:w-5/12 ">
                            <div className="lg:ml-auto lg:text-right">
                                <motion.div
                                    variants={{
                                        visible: { opacity: 1, x: 0, filter: "blur(0px)" },
                                        hidden: { opacity: 0, x: 75, filter: "blur(5px)" },
                                    }}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{ duration: 0.75, delay: 0.25 }}
                                    class="relative z-10 inline-block pt-11 lg:pt-0 mt-6"
                                >
                                    <img
                                        src={heroImage}
                                        alt="hero"
                                        className="max-w-full lg:ml-auto rounded-l-[20%] "
                                    />
                                </motion.div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero