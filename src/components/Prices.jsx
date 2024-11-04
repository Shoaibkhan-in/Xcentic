import { useEffect, useRef } from "react";

import { FcBarChart } from "react-icons/fc";
import { FcMindMap } from "react-icons/fc";
import { FcFlowChart } from "react-icons/fc";
import { useAnimation, useInView, motion } from "framer-motion";

const Prices = () => {
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
        <div className="max-w-screen overflow-x-hidden font-poppins">
            <div className="w-full py-[10rem] px-4  -mt-28">
                <div className="mx-auto mb-12 text-center lg:mb-20">
                    <h2 className="mb-4 text-3xl font-bold text-blue-500 sm:text-4xl md:text-[40px]">
                    Empower Your Digital Growth
                    </h2>
                    <p className="text-lg text-gray-500">
                    Learn more about how we can help elevate your brand
                    with our digital marketing and web development expertise.
                    Our tailored solutions are designed to engage your audience and drive measurable success.
                    Reach out to discover the strategies that can transform your business.
                    </p>
                </div>
                <>
                    {Width < 631 ? (
                        <>
                            <div className="max-w-[1240px] mx-auto grid sm:grid-cols-3 gap-8">
                                <div>
                                    <Card
                                        image={<FcBarChart style={{ fontSize: '5rem' }} />}
                                        Package={"Proven Results"}
                                        Feature1={"We deliver data-driven solutions, ensuring that every campaign is optimized for performance and measurable ROI."}
                                    />
                                </div>
                                <div>
                                    <Card
                                        image={<FcMindMap style={{ fontSize: '5rem' }} />}
                                        Package={"Innovative Development"}
                                        
                                        Feature1={"From custom websites to advanced web apps, our development team creates scalable solutions that power your business online."}
                                        standOutBg={"bg-blue-100/30"}
                                        marginMiddle={"md:my-6"}
                                    />
                                </div>
                                <div>
                                    <Card
                                        image={<FcFlowChart style={{ fontSize: '5rem' }} />}
                                        Package={"Marketing Strategy"}
                                        
                                        Feature1={"Our experts design tailored marketing strategies that maximize your brand's visibility and growth in the digital landscape."}
                                    
                                    />
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="max-w-[1240px] mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <motion.div
                                    ref={ref}
                                    variants={{
                                        hidden: { opacity: 0, y: 75 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                    initial="hidden"
                                    animate={mainControlls}
                                    transition={{ duration: 0.5, delay: 0.25 }}
                                >
                                    <Card
                                        image={<FcBarChart style={{ fontSize: '5rem' }} />}
                                        Package={"Proven Results"}
                                        
                                        Feature1={"We deliver data-driven solutions, ensuring that every campaign is optimized for performance and measurable ROI."}
                                    />
                                </motion.div>
                                <motion.div
                                    ref={ref}
                                    variants={{
                                        hidden: { opacity: 0, y: 75 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                    initial="hidden"
                                    animate={mainControlls}
                                    transition={{ duration: 0.5, delay: 0.65 }}
                                >
                                    <Card
                                        image={<FcMindMap style={{ fontSize: '5rem' }} />}
                                        Package={"Innovative Development"}
                                        
                                        Feature1={"From custom websites to advanced web apps, our development team creates scalable solutions that power your business online."}
                                        standOutBg={"border border-blue-500"}
                                        marginMiddle={"md:my-2"}
                                    />
                                </motion.div>
                                <motion.div
                                    ref={ref}
                                    variants={{
                                        hidden: { opacity: 0, y: 75 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                    initial="hidden"
                                    animate={mainControlls}
                                    transition={{ duration: 0.5, delay: 0.25 }}
                                >
                                    <Card
                                        image={<FcFlowChart style={{ fontSize: '5rem' }} />}
                                        Package={"Marketing Strategy"}
                                        
                                        Feature1={"Our experts design tailored marketing strategies that maximize your brand's visibility and growth in the digital landscape."}
                                        
                                        
                                        
                                        hoverBgButton={"hover:bg-gray-200"}
                                    />
                                </motion.div>
                            </div>
                        </>
                    )}
                </>
            </div>
        </div>
    );
};
export default Prices;

/* Card */

const Card = ({ standOutBg, marginMiddle, Package,
    image, Feature1
}) => {
    return (
        <div className={`w-full shadow-xl flex flex-col p-4 my-4 bg-white ${standOutBg} ${marginMiddle} rounded-lg hover:scale-105 duration-300`} >
            <div className="w-20 mx-auto mt-0">
                {image}
            </div>
            <h2 className="text-2xl font-bold text-center">{Package}</h2>
            <div className="text-center font-medium">
                <p className="py-2 border-b mx-8 flex justify-between">
                    {Feature1}
                </p>
            </div>
        </div>
    );
};