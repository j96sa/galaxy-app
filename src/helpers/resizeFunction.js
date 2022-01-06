import { useEffect, useLayoutEffect, useState } from "react"

const windowWidth = ()=>{
    let {innerWidth} = window;
    return innerWidth;
};

export const useResize = ()=>{    
    const [device, setDevice] = useState(windowWidth());
    
    useEffect(() => {
        const resizeWindow = () =>{            
            /* if(windowWidth() < 750){
                setDevice("mobile")
            }else if(windowWidth() > 1200){
                setDevice("desktop")
            }else if(windowWidth() > 750){
                setDevice("tablet")
            }; */

            setDevice(windowWidth());
        };

        window.addEventListener("resize",resizeWindow);
        return()=> window.removeEventListener("resize",resizeWindow);
    }, []);

    return {device};
};