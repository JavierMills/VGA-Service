import React from 'react'
import {motion, useScroll} from 'framer-motion'

const Lilcon = ({referencia}) => {
    const {scrollYProgress} = useScroll({
        target: referencia,
        offset:["center end", "center center"]
    })
  return (
    <figure className='absolute left-0 stroke-dark dark:stroke-light'>
        <svg className='-rotate-90 md:w-[60px] md:h-[60px] sm:w-[40px] sm:h-[40px]' width="75" height="75" viewBox="0 0 100 100">

            <circle cx="75" cy="50" r="20" className='stroke-yellow-400 dark:stroke-light stroke-1 fill-none'/>

            {/* lo que se anima  */}
            <motion.circle cx="75" cy="50" r="20" className="stroke-[5px] fill-light dark:fill-dark"
            style={{pathLength: scrollYProgress}}
            />
        {/* reprecenta el ultimo criculo el punto amarillo  */}
            <circle cx="75" cy="50" r="10" className='animate-pulse stroke-1 fill-yellow-400 dark:stroke-light '/>
        </svg>
    
    </figure>
  )
}

export default Lilcon