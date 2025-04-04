import Link from 'next/link'
import React from 'react'
import Layout from './Layout'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark dark:text-light dark:border-light sm:text-base'>
        <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6' >
            <span>{new Date().getFullYear()} &copy; All Rights Reseved</span>
                 <div className='flex items-center lg:py-2'>
                 Build With  
                 <span className='text-primary dark:text-yellow-400 text-2xl px-1'> &#9825; </span>
                by &nbsp; <Link className='underline underline-offset-2' 
                href="https://github.com/JavierMills" target={'_blank'}> JavierMills </Link>
            </div> 
        </Layout>
    </footer>
  )
}

export default Footer