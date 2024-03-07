import React from 'react'
import './contact.scss'
import {motion} from 'framer-motion'

const variants = {
    initial : {
        y : 500,
        opacity : 0,
    },

    animate:{
        y : 0,
        opacity : 1,
        transition : {
            duration : .5,
            staggerChildren : 0.1,
        }
    },
}

const Contact = () => {
  return (
    <motion.div className='contact' variants={variants} whileInView="animate" initial="initial">
        <motion.div className="textContainer" variants={variants}>
            <motion.h1 variants={variants}>Let's Work Together</motion.h1>
            <motion.div className="item" variants={variants}>
                <h2>Mail</h2>
                <span>hello@react.dev</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
                <h2>Adress</h2>
                <span>Street New York</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
                <h2>Phone</h2>
                <span>+212 634 652 763</span>
            </motion.div>
        </motion.div>
        <div className="formContainer">
            <form>
                <input type="text" placeholder='Name' />
                <input type="email" placeholder='Email' />
                <textarea rows={8} placeholder='Message'></textarea>
                <button>Submit</button>
            </form>
        </div>
      
    </motion.div>
  )
}

export default Contact
