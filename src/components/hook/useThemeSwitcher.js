
import React, { useEffect, useState } from 'react'



const useThemeSwitcher = () => {

    

    const preferDarkQuery = "(prefer-color-scheme: dark)";

    const [mode, setMode] = useState("");

    // ejecutamos este fragmento de codigo en el primer render; 
    useEffect(() =>{
    const mediaQuery = window.matchMedia(preferDarkQuery);
    // obtenemos del local storage el item del theme 
    const userPref = window.localStorage.getItem("theme");
    

        const handleChange = () => {

            if(userPref){
                // hacemos un ternario para validar si la seleccion del usuario es dark o light
                let check = userPref === "dark" ? "dark" : "light";
                setMode(check);
                window.localStorage.setItem("theme", check);

                if(check === "dark"){
                    document.documentElement.classList.add("dark");
                }else{
                    document.documentElement.classList.remove("dark");
                }
            }else{
               
                let check = mediaQuery.matches ? "dark" : "light";
                setMode(check);
                window.localStorage.setItem("theme", check);
                
                if(check === "dark"){
                    document.documentElement.classList.add("dark");
               

                }else{
                    document.documentElement.classList.remove("dark");
                }
                
            }

        }

        // invocamos la funcion 


        handleChange();
    mediaQuery.addEventListener("change", handleChange);


    return () => mediaQuery.removeEventListener("change", handleChange);

    
    }, [])


    // efect para cuando se le de click al dark mode 
    useEffect(() =>{

        if(mode === "dark"){
            window.localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        }
        
        if(mode === "light"){
            window.localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
        }


    }, [mode])


  return [mode, setMode]
}

export default useThemeSwitcher