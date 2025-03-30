import React,{ useRef }  from 'react'
import {motion} from 'framer-motion'
import styled, { keyframes } from 'styled-components'
import {WhatsApp} from './Icons'


import LG from '../../public/images/imagenes_vga/image_lg.png';
import SAMSUMG from '../../public/images/imagenes_vga/samsumg.png';
import MABE  from '../../public/images/imagenes_vga/mabe.png';
import WINA  from '../../public/images/imagenes_vga/wina.png';
import WHIRL  from '../../public/images/imagenes_vga/pol.png';
import HISSENSE  from '../../public/images/imagenes_vga/hissense.png';
import FRI  from '../../public/images/imagenes_vga/frigadiere.png';
import MY  from '../../public/images/imagenes_vga/tagg.png';
import GENERAL  from '../../public/images/imagenes_vga/gl.png';
import DAE  from '../../public/images/imagenes_vga/dae.png';



const Section = styled.section`
min-height: 8vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    overflow: hidden;

&>*:first-child{
  animation-duration: 20s;

  @media (max-width: 30em){
    animation-duration: 20s;
  }
}

&>*:last-child{
  animation-duration: 15s;
  @media (max-width: 30em){
    animation-duration: 10s;
  }
}
`

const move = keyframes`
0%{ transform: translateX(100%)};
100% { transform: translateX(-100%)}
`
//fila de del componente
const Row = styled.div`
background-color:${props => props.theme.text};
//el comportamiento del espacio en blanco que babra dentro de el elemto
white-space: nowrap;
// el ancho de cualquier borde o relleno ser añadirá al ancho final desplegado.
box-sizing: content-box;
margin: 1rem 0;
display: flex;
animation: ${move} linear infinite ${props => props.direction};

`

//estilo de cada item
const ItemContainer = styled.div`
width: 16rem;
margin: 0 1rem;
border-radius: 20px;
cursor: pointer;

img{
  width: 100%;
  height: auto;
}

@media (max-width: 48em){
width: 12rem; 
}

@media (max-width: 30em){
  width: 10rem; 
  }
`




// segundo componente de el iyem y su contenido dentro de la row
const NtfItem = ({img, number=0, price=0, passref}) =>{

let play = (e) => {
  passref.current.style.animationPlayState ='running';

}
let pause = (e) => {
  passref.current.style.animationPlayState ='paused';
}

  return (
    <ItemContainer onMouseOver={e => pause(e)}
     onMouseOut={e => play(e)}>

      <img src={img.src} alt='marcas' />
     
    </ItemContainer>
  )
}





const Skills = () => {

  const Row1Ref= useRef(null);
  const Row2Ref= useRef(null);
    return (

    <>
        {/* <h2 className='bg-slate-800 font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2> */}
      <Section className='bg-light dark:bg-dark' id='showcase'>
        <Row direction="none" ref={Row1Ref}>
        <NtfItem className="bg-light" img={HISSENSE} passref={Row1Ref}/> 
          <NtfItem className="bg-light" img={MABE} passref={Row1Ref}/> 
          <NtfItem className="bg-light" img={WINA} passref={Row1Ref}/>
          <NtfItem className="bg-light" img={DAE} passref={Row1Ref}/> 
          <NtfItem className="bg-light"  img={FRI} passref={Row1Ref}/>
  
  
        </Row>
  
        <Row direction="reverse" ref={Row2Ref}>
          <NtfItem className="bg-light" img={LG} passref={Row1Ref}/>
          <NtfItem  number={9}  price={4} img={SAMSUMG} passref={Row2Ref}/>
          <NtfItem className="bg-light" img={MY} passref={Row1Ref}/>
          <NtfItem className="bg-light" img={WHIRL} passref={Row1Ref}/>
          <NtfItem className="bg-light" img={GENERAL} passref={Row1Ref}/>  
        </Row>
  
      </Section>
      </>
    )
}

export default Skills