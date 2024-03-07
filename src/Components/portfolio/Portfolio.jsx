import React, { useRef } from 'react'
import './portfolio.scss'
import {motion , useScroll , useSpring , useTransform} from 'framer-motion'

const items = [
    {
        id : 1,
        img : "/react-website.jpg",
        title : "React E-commerce",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ratione esse dicta nesciunt, velit totam incidunt voluptas molestias corrupti possimus rerum tempore voluptate facere quia eos. Sequi quisquam nobis eligendi."
    },
    {
        id : 2,
        img : "/react-electronic.jpg",
        title : "React Electronic Website",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ratione esse dicta nesciunt, velit totam incidunt voluptas molestias corrupti possimus rerum tempore voluptate facere quia eos. Sequi quisquam nobis eligendi."
    },
    {
        id : 3,
        img : "/react-mens.jpg",
        title : "React Clothes Website",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ratione esse dicta nesciunt, velit totam incidunt voluptas molestias corrupti possimus rerum tempore voluptate facere quia eos. Sequi quisquam nobis eligendi."
    }
]




const Single = ({item})=>{

    const ref = useRef()
 
    const {scrollYProgress} = useScroll(
        {
            target : ref,

        }
    )

    const y = useTransform(scrollYProgress , [0,1] , [-300 , 300])

    return <section >
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer" ref={ref}>
                    <img src={item.img} alt="" />
                </div>
                <motion.div className="textContainer" style={{y}}>
                    <h1>{item.title}</h1>
                    <p>{item.desc}</p>
                    <button>See Demo</button>
                </motion.div>
            </div>
        </div>
    </section>;
}

const Portfolio = ({item}) => {

    const ref = useRef()
 
    const {scrollYProgress} = useScroll(
        {
            target : ref,
            offset : ["end end", "start start"]

        }
    )

    const scaleX = useSpring(scrollYProgress,{
        stiffness : 100,
        damping : 30,
    } )
  return (
    <div className='portfolio' ref={ref}>
        <motion.div className="progress" >
            <h1>Featured Works</h1>
            <motion.div className="progressBar" style={{scaleX}}></motion.div>
        </motion.div>
      {items.map((item)=>(
        <Single item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default Portfolio
