import Link from 'next/link'
import React from 'react'
import COLDTECH  from '../../public/images/imagenes_vga/coldtech.png';
import styled from 'styled-components'
import {motion} from 'framer-motion'



const ItemContainer = styled.div`
width: 7rem;
margin: 0 1rem;
cursor: pointer;
img{
  width: 100%;
  height: auto;
  position:static;

}

@media (max-width: 67rem){
width: 4rem; 
}


@media (max-width: 48em){
width: 6rem; 
}

@media (max-width: 30em){
  width: 4rem; 
  }
`

const ColdTechIcon = ({img}) =>{  
    return (
      <ItemContainer>
        <img className='!width-[6rem]' src={img.src} alt='marcas' />
      </ItemContainer>
    )
  }


const MotionLink = motion(Link);

const Logo = () => {

  return (
    
    <ColdTechIcon img={COLDTECH}/> 

  
  )
}

export default Logo