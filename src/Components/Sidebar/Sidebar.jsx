import React, { useState } from 'react'
import './Sidebar.scss'
import Links from './Links/Links'
import ButtonToggle from './ButtonToggle/ButtonToggle'
import {motion} from 'framer-motion'

const Sidebar = () => {
const [open , setOpen] = useState(false)

const variants = {
    open : {
        clipPath : "circle(1220px at 50px 50px)",
        transistion : {
            type : "spring",
            stiffness : 20,
        },
    },
    closed :{
        clipPath : "circle(30px at 50px 50px)",
        transistion : {
            delay : .5,
            type : "spring",
            stiffness : 400,
            damping : 40,
        },
    },
}

  return (
    <motion.div className='sidebar' animate ={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links/>
      </motion.div>
      <ButtonToggle setOpen={setOpen}/>
    </motion.div>
  )
}

export default Sidebar
