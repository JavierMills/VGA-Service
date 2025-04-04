import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import {Montserrat} from 'next/font/google'
import Head from 'next/head'
import { useRouter } from 'next/router'


const monserrat = Montserrat({
  subsets:["latin"],
  variable:"--font-mont"
})

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (

    <>
    <Head>
       <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    {/* remombramos la clase dark para que haga match con los effectos  */}
    <main className={`${monserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
     
      <NavBar></NavBar>

      <AnimatePresence mode='wait'>
      <Component key={router.asPath} {...pageProps} />
      </AnimatePresence>
      <Footer />
    </main>
    </>
  )
}
