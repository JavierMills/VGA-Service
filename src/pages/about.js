import AnimatedText from '@/components/AnimatedText'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Layout from '@/components/Layout'
import Skills from '@/components/Skills'
import TransitionEffects from '@/components/TransitionEffects'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import profileImage from '../../public/images/profile/developer-pic-1.png'
import styled, { ThemeProvider } from 'styled-components';
import COLDTECH  from '../../public/images/imagenes_vga/coldtech.png';



const Box = styled.div`
width: 100%;
height: 100%;
min-height:60vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 40em){
  min-height:50vh;
}
`


const AnimatedNumbers = ({value}) =>{

    const ref = useRef(null);
    // desde donde arrancara la animation 
    const motionValue = useMotionValue(0);
    // cambio de los numeros hasta llegar a la valor que recibimos por parametros 
    const sprinValue = useSpring(motionValue, {duration:3000});
    // si esta en la vista se renderiza el componente 
    const isInview = useInView(ref,{once:true});

    useEffect(() =>{
        if(isInview){
          motionValue.set(value);
        }

    }, [isInview, value, motionValue])

    useEffect(() =>{
        sprinValue.on("change", (latest) =>{
           if(ref.current && latest.toFixed(0) <= value){
            ref.current.textContent = latest.toFixed(0);
           }
        })
    },[sprinValue, value])


    return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
        <Head>
            <title>JavierMills | About Page</title>
            <meta name='fullstack-developer' content='fullstack developer appian developer marketing cloud' />
        </Head>
      <TransitionEffects />

        <main className='flex w-full flex-col items-center justify-center dark:text-light pt-2'>
            <Layout className='pt-16'>
                {/* Colocamos el texto animado  */}
                <AnimatedText title="ColdTech."  className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"/>
                {/* Contenedor que albergara la biografia, foto y la experiencia  */}
                <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                    {/* biografia  */}
                    <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                        <h2 className='dark:text-light/75 mb-4 text-lg font-bold uppercase underline text-dark/75'>NOSOTROS.</h2>
                        <p className='font-medium'> Hi, I'm Javier, a web and FullStack developer and UI/UX designer with a passion for creating beautiful, functional, 
                            and user-centered digital experiences and clean code. With 5 years of experience in the field. I am always looking for 
                            new and innovative ways to bring my clients' visions to life.</p>
                        <p className='my-4 font-medium'>I believe that design is about more than just making things look pretty – it's about solving problems and 
                           creating intuitive, enjoyable experiences for users.</p>
                        <p className='font-medium'>Whether I'm working on a website, mobile app, or 
                           other digital product, I bring my commitment to design excellence and user-centered thinking to 
                           every project I work on.</p>
                    </div>
                    {/* imagen  */}
                    <div className='col-span-3 relative h-max p-8 
                    xl:col-span-4 md:order-1 md:col-span-8'>
                        {/* poner imagen propia  */}
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem]'/>
                        <Image src={COLDTECH} alt="JavierMills" className='w-full h-auto rounded-2xl' 
                        priority sizes="(max-width: 768px) 100vw,
                          (max-width: 1200px) 50vw, 33vw" />
                    </div>
                    {/* numeros  */}
                    <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'><AnimatedNumbers value={50} />+</span>
                            <h2 className='dark:text-light/75 text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base
                            xs:text-sm
                            '>satisfied clients</h2>
                        </div>

                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'><AnimatedNumbers value={40} />+</span>
                            <h2 className='dark:text-light/75 text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base
                            xs:text-sm'>projects</h2>
                        </div>

                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'><AnimatedNumbers value={4} />+</span>
                            <h2 className='dark:text-light/75 text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base
                            xs:text-sm'>years of experience</h2>
                        </div>
                    </div>

                </div>

              <Box>
              <Skills />

              </Box>
              

            <Experience />
            
            <Education />
               
            </Layout>

        </main>
    </>
  )
}

export default about