import React, { useEffect, useRef } from "react";
import { MdVerified } from "react-icons/md";
import { useAnimation, useInView, motion } from "framer-motion";
import A from './images/A.png';
const Review = () => {
    const { innerWidth: Width } = window;
    const ref = useRef();
    const isInView = useInView(ref);
    const mainControlls = useAnimation();
    useEffect(() => {
        if (isInView) {
            mainControlls.start("visible");
        }
    }, [isInView]);
    return (
        <div className="overflow-x-hidden max-w-screen font-poppins">
            <section className="">
                {Width < 631 ? (
                    <>
                        <div className="container px-6 py-12 mx-auto">
                            <div className="grid items-center gap-4 xl:grid-cols-5">
                                <div className="max-w-2xl mx-auto rounded shadow-md bg-white p-6 my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                                    <h2 className="text-4xl font-bold text-blue-500">
                                        What our costumers have to say
                                    </h2>
                                    <p className="text-black">
                                        Here are some reviews of our costumers and their excperience
                                        with our services and that wee provide!
                                    </p>
                                </div>
                                <div className="p-6 xl:col-span-3">
                                    <div className="grid gap-4 md:grid-cols-2">
                                        <div className="grid content-center gap-4">
                                            <div className="p-6 rounded shadow-md bg-white">
                                                <p>
                                                    Working with this team has been a game changer for our online presence.
                                                    Our traffic and leads have doubled in just 3 months!
                                                </p>
                                                <div className="flex items-center mt-4 space-x-4">
                                                    <img
                                                        src={A}
                                                        alt="profile"
                                                        className="w-12 h-12 bg-center bg-cover rounded-full "
                                                    />
                                                    <div>
                                                        <p className="text-md font-semibold">Aditya Mishra</p>
                                                        {/* <p className="text-sm text-gray-400">Logitech</p> */}
                                                    </div>
                                                    <div className="flex">
                                                        <MdVerified
                                                            size={Width < 631 ? 35 : 40}
                                                            className="text-blue-500 ml-2"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-6 rounded shadow-md bg-white">
                                                <p>
                                                Their digital marketing strategies have taken our brand to the next level.
                                                We're seeing significant growth in both engagement and sales.
                                                </p>
                                                <div className="flex items-center mt-4 space-x-4">
                                                    <img
                                                        src={A}
                                                        alt=""
                                                        className="w-12 h-12 bg-center bg-cover rounded-full "
                                                    />
                                                    <div>
                                                        <p className="text-md font-semibold">
                                                            Aryan
                                                        </p>

                                                    </div>
                                                    <div className="flex">
                                                        <MdVerified
                                                            size={Width < 631 ? 35 : 40}
                                                            className="text-blue-500 ml-2"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid content-center gap-4">
                                            <div className="p-6 rounded shadow-md bg-white">
                                                <p>
                                                Their development team is top-notch.
                                                They helped us build an eCommerce platform that exceeded our expectations
                                                </p>
                                                <div className="flex items-center mt-4 space-x-4">
                                                    <img
                                                        src={A}
                                                        alt=""
                                                        className="w-12 h-12 bg-center bg-cover rounded-full "
                                                    />
                                                    <div>
                                                        <p className="text-md font-semibold">
                                                        Paras Tomar
                                                        </p>

                                                    </div>
                                                    <div className="flex">
                                                        <MdVerified
                                                            size={Width < 631 ? 35 : 40}
                                                            className="text-blue-500 ml-2"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="container px-6 py-12 mx-auto">
                            <div className="grid items-center gap-4 xl:grid-cols-5">
                                <motion.div
                                    ref={ref}
                                    variants={{
                                        hidden: { opacity: 0 },
                                        visible: { opacity: 1 },
                                    }}
                                    initial="hidden"
                                    animate={mainControlls}
                                    transition={{ duration: 0.5, delay: 0.25 }}
                                    className="max-w-2xl mx-auto rounded shadow-md bg-white p-6 my-8  space-y-4 text-center xl:col-span-2 xl:text-left"
                                >
                                    <h2 className="text-4xl font-bold text-blue-500">
                                        What our costumers have to say
                                    </h2>
                                    <p className="text-gray-500">
                                        Here are some reviews of our costumers and their excperience
                                        with our services and that wee provide!
                                    </p>
                                </motion.div>
                                <div className="p-6 xl:col-span-3">
                                    <div className="grid gap-4 md:grid-cols-2">

                                        <div className="grid content-center gap-4">
                                            <motion.div
                                                ref={ref}
                                                variants={{
                                                    hidden: { opacity: 0, x: -75, y: -45 },
                                                    visible: { opacity: 1, x: 0, y: 0 },
                                                }}
                                                initial="hidden"
                                                animate={mainControlls}
                                                transition={{ duration: 0.6, delay: 0.15 }}
                                                className="p-6 rounded-lg shadow-lg bg-white mt-6"
                                            >
                                                <p>
                                                Working with this team has been a game changer for our online presence.
                                                Our traffic and leads have doubled in just 3 months!
                                                </p>
                                                <div className="flex justify-between items-center mt-4 space-x-4">
                                                    <div className="flex">
                                                        <img
                                                            src={A}
                                                            alt=""
                                                            className="w-12 h-12 bg-center bg-cover rounded-full "
                                                        />
                                                        <div className="flex-col ml-4">
                                                            <p className="text-lg font-semibold block">
                                                                Aditya Mishra
                                                            </p>
                                                            
                                                        </div>
                                                    </div>

                                                    <div className="flex">
                                                        <MdVerified
                                                            size={Width < 631 ? 35 : 40}
                                                            className="text-blue-500 ml-2"
                                                        />
                                                    </div>
                                                </div>
                                            </motion.div>
                                            <motion.div
                                                ref={ref}
                                                variants={{
                                                    hidden: { opacity: 0, x: -75, y: 45 },
                                                    visible: { opacity: 1, x: 0, y: 0 },
                                                }}
                                                initial="hidden"
                                                animate={mainControlls}
                                                transition={{ duration: 0.6, delay: 0.35 }}
                                                className="p-6 rounded-lg shadow-lg bg-white "
                                            >
                                                <p>
                                                Their digital marketing strategies have taken our brand to the next level.
                                                We're seeing significant growth in both engagement and sales.
                                                </p>
                                                <div className="flex items-center justify-between mt-4 space-x-4">
                                                    <div className="flex">
                                                        <img
                                                            src={A}
                                                            alt=""
                                                            className="w-12 h-12 bg-center bg-cover rounded-full "
                                                        />
                                                        <div className="flex-col sm:ml-2 ">
                                                            <p className="text-lg font-semibold block">
                                                                Aryan
                                                            </p>
                                                            
                                                        </div>
                                                    </div>
                                                    <div className="flex">
                                                        <MdVerified
                                                            size={Width < 631 ? 35 : 40}
                                                            className="text-blue-500 ml-2"
                                                        />
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </div>

                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </section>
        </div>
    );
};

export default Review;