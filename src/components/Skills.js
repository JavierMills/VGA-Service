import React from 'react'
import {motion} from 'framer-motion'


const Skill = ({name, x ,y, className=""}) => {

  return (
    <motion.div className={`flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark
    cursor-pointer absolute dark:text-dark ${className} lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
    xs:text-light xs:dark:text-light xs:font-bold
    `}
      whileHover={{scale: 1.05}}
      initial={{x:0 , y: 0}}
      whileInView={{x: x, y:y, transition:{duration: 1.5} }}
      viewport={{once: true}}
    
      // viewport={{once: true}}
    >
      {name}
    </motion.div>
  )
}



const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark first-letter:
      lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
      lg:bg-circularDarkLg lg:dark:bg-circularDarkLg
      md:bg-circularDarkMd md:dark:bg-circularDarkMd
      sm:bg-circularDarkSm sm:dark:bg-circularDarkSm
      '>

      <motion.div className='flex items-center justify-center rounded-full font-semibold bg-yellow-400 text-light p-8 shadow-dark
      cursor-pointer absolute dark:text-dark dark:font-semibold lg:p-6 md:p-4 xs:text-sm xs:p-2
      '
        whileHover={{scale: 1.05}}f
      >
        Web
      </motion.div>
    <Skill className='bg-slate-500'    name="CSS" x="-5vw" y="-10vw" />
    <Skill className='bg-emerald-500'  name="Docker" x="-20vw" y="2vw" />
    <Skill className='bg-pink-500'     name="Tailwind CSS" x="20vw" y="6vw" />
    <Skill className='bg-lime-500'     name="ReactJS" x="0vw" y="12vw" />
    <Skill className='bg-red-500'      name="Angular" x="-20vw" y="-15vw" />
    <Skill className='bg-zinc-500'     name="NextJS" x="15vw" y="-12vw" />
    <Skill className='bg-sky-500'      name="Appian" x="32vw" y="-5vw" />
    <Skill className='bg-yellow-400'   name="JavaScript" x="0vw" y="-20vw" />
    <Skill className='bg-red-500'      name="Java" x="-12vw" y="22vw" />
    <Skill className='bg-neutral-500'  name="GitHub" x="18vw" y="18vw" />
    <Skill className='bg-fuchsia-500'  name="HTML" x="-27vw" y="10vw" />
    <Skill className='bg-purple-500'   name="GraphQL" x="-39vw" y="-2vw" />
    <Skill className='bg-teal-500'     name="NodeJS" x="32vw" y="6vw" />
    <Skill className='bg-green-500'    name="SpringBoot" x="30vw" y="-15vw" />
      </div>
    
    </>
  )
}

export default Skills