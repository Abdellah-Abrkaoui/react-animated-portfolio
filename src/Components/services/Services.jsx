import React, { useRef } from 'react'
import './services.scss'
import {motion, useInView } from 'framer-motion'

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0

    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,

        transition: {
            duration : 1,
            staggerChildren: 0.1
        }
    },
}



const Services = () => {

    const ref = useRef()
    const isInView = useInView(ref , {margin : "-100px"})
    return (
        
        <motion.div className='services' ref={ref} variants={variants} initial="initial" animate={"animate"}>
            <motion.div className="topContainer" variants={variants}>
                <p>I focus on helping your brand grow <br />and move forward</p>
                <hr />
            </motion.div>

            <motion.div className="centerContainer" variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1><b>Unique</b> Ideas</h1>
                </div>
                <div className="title">
                    <h1><b>For Your</b> Business</h1>
                    <button>WHAT WE DO ?</button>
                </div>
            </motion.div>

            <motion.div className="bottomContainer" variants={variants}>
                <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black", transition: "all 1s ease" }}>
                    <h2>Branding</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, distinctio veritatis nemo quibusdam nesciunt molestias laborum, recusandae assumenda explicabo quo dolore dolor dignissimos mollitia dolores.</p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black", transition: "all 1s ease" }}>
                    <h2>Branding</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, distinctio veritatis nemo quibusdam nesciunt molestias laborum, recusandae assumenda explicabo quo dolore dolor dignissimos mollitia dolores.</p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black", transition: "all 1s ease" }}>
                    <h2>Branding</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, distinctio veritatis nemo quibusdam nesciunt molestias laborum, recusandae assumenda explicabo quo dolore dolor dignissimos mollitia dolores.</p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black", transition: "all 1s ease" }}>
                    <h2>Branding</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, distinctio veritatis nemo quibusdam nesciunt molestias laborum, recusandae assumenda explicabo quo dolore dolor dignissimos mollitia dolores.</p>
                    <button>Go</button>
                </motion.div>
            </motion.div>
        </motion.div>


    )
}

export default Services
