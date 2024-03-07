import React from 'react'
import {motion} from 'framer-motion'

const variants = {
    open : {
        transition:{
            staggerChildren : 0.1,
            stiffness : 400
        }

    },
    closed:{
        transition :{
            staggerChildren : 0.05,
            staggerDirection : -1,

        }

    }
};

const Itemvariants = {
    open : {
        y:0,
        opacity : 1,

    },
    closed:{
        y:50,
        opacity : 0

    }
};


const Links = () => {

    const items = [
        "HomePage","Services","Portfolio","Contact","About"
    ]

  return (
    <motion.div className='Links' variants={variants}>
      {items.map(item=>(
        <motion.a href={`#${item}`} key={item} variants={Itemvariants} whileHover={{scale:1.1}} whileTap={{scale: 0.9}}>{item}</motion.a>
      ))}
    </motion.div>
  )
}

export default Links
