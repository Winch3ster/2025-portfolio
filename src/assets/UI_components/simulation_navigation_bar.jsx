
import '../../index.css'

import instagramLogo from '../icons/instagram.png'
import effect from '../icons/effect.png'
import githubLogo from '../icons/github.png'
import hamburgerMenu from '../icons/hamburger_menu.png'
import homeIcon from '../icons/home.png'
import closeNavIcon from '../icons/close.png'
import { useContext, useState } from 'react'


import { simulationContext } from '../../context'

const isMobile = window.matchMedia("(any-pointer: coarse)").matches &&  window.innerHeight < 500;



const QuickNavComponent = ({marginX, marginY, content, link, specialEffectCallback, isHomeButton}) => {
    

        return(
        
        <div >
            
            <div class={`${marginX} ${marginY}  quick-nav-comp-effect ${isMobile ? "w-10 h-10 quick-nav-component-container-mobile":  "w-16 h-16 quick-nav-component-container"}  rounded-4xl flex justify-center items-center  ${specialEffectCallback ?  !specialEffectCallback[1] && " enable-special-effect-off" : ""}`}>
                
                <div class={`bg-white w-10 h-10 flex rounded-4xl justify-center items-center ${specialEffectCallback ?  !specialEffectCallback[1] && " enable-special-effect-off" : ""} `} onClick={() =>  specialEffectCallback[0]()}> 

                    {isHomeButton ?
                        <a href='/'>
                            <img className={isMobile ? "quick-nav-component-content-mobile": "quick-nav-component-content"} src={content} alt="" />
                        </a>
                        :
                        specialEffectCallback ?
                            <img className={isMobile ? "quick-nav-component-content-mobile": "quick-nav-component-content"} src={content} alt="" />
                            :
                            <a href={`${link}`} target="_blank">
                                <img className={isMobile ? "quick-nav-component-content-mobile": "quick-nav-component-content"} src={content} alt="" />
                            </a>
                    }
                </div>

            </div>
        </div>
       
    )
}

const QuickNavigation = ({navIsOpen}) => {
    const contextValues = useContext(simulationContext);

   

    return(
        <div class={` absolute top-0 ${isMobile ? "w-40": "w-52"} right-0 h-full flex items-center justify-start overflow-hidden  opacity-70 quick-navigation-open-animation ${navIsOpen ? "open" : ""} `}>
            <div class={`absolute  ${isMobile ? "h-40 w-40 ml-5":" h-60 w-60 ml-5"}   radar-quick-menu `}>
                <QuickNavComponent marginX={ "ml-[25px]"} marginY={isMobile ? "-mt-[8px]": "-mt-[10px]"} content={homeIcon} isHomeButton={true}></QuickNavComponent>
                <QuickNavComponent marginX={isMobile ? "-ml-[15px]" :"-ml-[25px]"} marginY={isMobile ? "mt-[2px]": "-mt-[5px]"} content={githubLogo} link={"https://github.com/Winch3ster"}></QuickNavComponent>
                <QuickNavComponent marginX={isMobile ? "-ml-[14px]": "-ml-[25px]"} marginY={"mt-[15px]"} content={instagramLogo} link={"https://www.instagram.com/king_st0ne/"} ></QuickNavComponent>
                <QuickNavComponent marginX={"ml-[25px]"} marginY={ isMobile ? "-mt-[2px]": "-mt-[5px]"} content={effect} specialEffectCallback={contextValues}></QuickNavComponent>

            </div>
        </div>

    )
}


const SimulationNav = () => {
    
    //This is for the navigation
    
    const [quickNavIsOpen, setQuickNavIsOpenState] = useState(false);

    function openQuickNav(){
        setQuickNavIsOpenState(!quickNavIsOpen);
    }




return(
    <div class="absolute z-20 right-5 top-0 w-15  h-full">
        <div class="h-2/5 items-center justify-center flex">
            <div class="bg-white w-0.5 h-full"></div>
        </div>

        <QuickNavigation navIsOpen={quickNavIsOpen}></QuickNavigation>


        <div class="h-1/5 items-center justify-center flex" onClick={() => {openQuickNav()}}>
            <div className="simulation-hamburger-menu flex justify-center items-center" >
                {quickNavIsOpen ? <img class="h-5 w-5" src={closeNavIcon} alt="" /> : <img class="h-5 w-5" src={hamburgerMenu} alt="" />}
            
            </div>
        </div>
        
        <div class="h-2/5 items-center justify-center flex">
            <div class="bg-white w-0.5 h-full"></div>
        </div>
        
    </div>
)
    
   


}


export default SimulationNav;

