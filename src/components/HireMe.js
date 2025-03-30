import Link from 'next/link'
import React from 'react'
import { CircularText } from './Icons'
import {motion} from 'framer-motion'
import {WhatsApp3} from './Icons'


const HireMe = () => {
  return (
    <div className='fixed left-9 bottom-9 flex items-center justify-center 
    overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md-absolute sm:right-3'>
          {/* circulo del hireme  */}
             <motion.a href="https://wa.me/5533824406?text=Hola buen dia, me interasa hacer una cotizacion " 
             target={'_blank'}  whileHover={{y: -3}}  whileTap={{scale:0.9}}> <WhatsApp3/> </motion.a>
        </div>
  )
}

export default HireMe