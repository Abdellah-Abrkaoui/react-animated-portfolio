import React from 'react'
import './hero.scss'
import { animate, motion } from 'framer-motion'
const textvariants = {
    initial: {
        x: -500,
        opacity: 0,
    },

    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1.5,
            staggerChildren: 0.1,
        }
    },

    scrollBtn: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 1,
            repeat: Infinity,
        }
    }

}

const sliderVariants = {
    initial: {
        x: 0,
    },

    animate: {
        x: "-220%",
        transition :{
            repeat: Infinity,
            duration: 20,
            repeatType : "mirror"


            }
    },
}

const Hero = () => {
    return (
        <div className='hero'>
            <div className="wrapper">
                <motion.div className="textContainer" variants={textvariants} animate="animate" initial="initial">
                    <motion.h2 variants={textvariants}>ABRKAOUI ABDELLAH</motion.h2>
                    <motion.h1 variants={textvariants}>Web Developper Frontend Dev</motion.h1>
                    <motion.div className="btns" variants={textvariants}>
                        <motion.button variants={textvariants}>See Our latest Projects</motion.button>
                        <motion.button variants={textvariants}>Contact us</motion.button>
                    </motion.div>
                    <motion.img src="/scroll.png" variants={textvariants} animate="scrollBtn" alt="" />
                </motion.div>
            </div>
            <motion.div className="slidingText" variants={sliderVariants} animate="animate" initial="initial">
                Frontend Dev and Content Creator
            </motion.div>
            <div className="imageContainer">
                <img src="/hero.png" alt="" />
            </div>

        </div>
    )
}

export default Hero 
