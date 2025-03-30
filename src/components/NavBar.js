import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import {TwitterIcon , FacebookIcon, Youtube, SunIcon, MoonIcon, WhatsApp} from './Icons'
import Logo from './Logo'
import {motion} from 'framer-motion'
import useThemeSwitcher from './hook/useThemeSwitcher'

const CostomLink = ({href, title, className=""}) =>{
  const router = useRouter()
  return(
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span className='bg-dark dark:bg-light block h-0.5 w-6 rounded-none-sm ' className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full 
      transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-light`}
      
      >
    &nbsp;
      </span>
    </Link>
    
  )
}

const CostomMobileLink = ({href, title, className="", toggle}) =>{
  const router = useRouter()
  
  const handleClick = () => {
    toggle();
    router.push(href)
  }

  return(
    <button href={href} className={`${className} relative group text-light dark:text-dark my-2` } onClick={handleClick}>
      {title}

      <span className={`h-[2px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full 
      transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-dark`}
      >
    &nbsp;
      </span>
    </button>
    
  )
}

const NavBar = () => { 


  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick= () => {
    setIsOpen(!isOpen)
  }


  return (
   <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light z-100 lg:px-16 md:px-12 sm:px-8'>

{/* lo oculatanos con HIDDEN y lo mostramos cuando sea 1023px  */}
     <button className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
     </button>
     
<div className='w-full flex justify-between items-center lg:hidden'>
    <nav>

      <CostomLink href="/" title="Inicio" className='mr-4'/>
      <CostomLink href="/about" title="Nosotros" className='mx-4'/>
      <CostomLink href="/projects" title="Servicios" className='mx-4'/>
      <CostomLink href="/articles" title="Articles" className='ml-4'/>
    </nav>



    <nav className='flex items-center justify-center flex-wrap'>
        <motion.a href="" target={'_blank'}  whileHover={{y: -3}}  whileTap={{scale:0.9}} className="w-6 mx-3"> <FacebookIcon/> </motion.a>
        <motion.a href="https://www.youtube.com/watch?v=dFpSnBrjIhg" target={"_blank"}  whileHover={{y: -3}}  whileTap={{scale:0.9}} className="w-6 mx-3"> <Youtube/> </motion.a>
        <motion.a href="https://wa.me/5533824406?text=Hola buen dia, me interasa hacer una cotizacion " target={"_blank"} whileHover={{y: -3}}  whileTap={{scale:0.9}} className="w-10 mx-5"> <WhatsApp/> </motion.a>

        <button onClick={() => setMode(mode === "light" ? "dark" : "light")}
        // lo colocamos en backtiks para poner un ternario en la clase y validar 
        // si esta en el theme light poner el bg del boton en dark y vicebersa 
        className={`ml-3 flex items-center justify-center rounded-full p-1
        ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
        `}
        > 
        {/* estamos colocando los iconos dependiendo que theme se elija  */}
        {
          mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />
        }
        </button>
   </nav>

</div>  

{/* condicoin  */}
{
  isOpen ? 

  <motion.div
  initial={{scale: 0, opacity:0, x:"-50%", y:"-50%"}}
  animate={{scale:1, opacity:1}}
  className='min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2
-translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32
'>
    <nav className='flex items-center flex-col justify-center'>

      <CostomMobileLink href="/" title="Inicio" className='' toggle={handleClick}/>
      <CostomMobileLink href="/about" title="Nosotros" className='' toggle={handleClick}/>
      <CostomMobileLink href="/projects" title="Servicios" className='' toggle={handleClick}/>
      <CostomMobileLink href="/articles" title="Articles" className='' toggle={handleClick}/>
    </nav>



    <nav className='flex items-center justify-center flex-wrap mt-2'> 
             <motion.a href="" target={'_blank'}  whileHover={{y: -3}}  whileTap={{scale:0.9}} className="w-6 mx-3"> <FacebookIcon/> </motion.a>
             <motion.a href="https://www.youtube.com/watch?v=dFpSnBrjIhg" target={'_blank'}  whileHover={{y: -3}}  whileTap={{scale:0.9}} className="w-6 mx-3"> <Youtube/> </motion.a>
             <motion.a href="https://wa.me/5533824406?text=Hola buen dia, me interasa hacer una cotizacion " target={"_blank"} whileHover={{y: -3}}  whileTap={{scale:0.9}} className="w-6 mx-5"> <WhatsApp/> </motion.a>


        <button onClick={() => setMode(mode === "light" ? "dark" : "light")}
        // lo colocamos en backtiks para poner un ternario en la clase y validar 
        // si esta en el theme light poner el bg del boton en dark y vicebersa 
        className={`ml-3 flex items-center justify-center rounded-full p-1
        ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
        `}
        > 
        {/* estamos colocando los iconos dependiendo que theme se elija  */}
        {
          mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />
        }
        </button>
   </nav>

  </motion.div> 

  :null
}
   
   

    
   </header>
  )
}

export default NavBar