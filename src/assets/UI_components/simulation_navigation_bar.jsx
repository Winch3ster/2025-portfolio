
import '../../index.css'

import instagramLogo from '../icons/instagram.png'
import effect from '../icons/effect.png'
import githubLogo from '../icons/github.png'
import hamburgerMenu from '../icons/hamburger_menu.png'
import homeIcon from '../icons/home.png'
import closeNavIcon from '../icons/close.png'
import { useContext, useState } from 'react'


import { simulationContext } from '../../context'

const QuickNavComponent = ({marginX, marginY, content, link, specialEffectCallback, isHomeButton}) => {
        console.log(specialEffectCallback)
    

        return(
        
        <div >
            
            <div class={`${marginX} ${marginY}  quick-nav-comp-effect w-16 h-16 rounded-4xl flex justify-center items-center quick-nav-component-container ${specialEffectCallback ?  !specialEffectCallback[1] && " enable-special-effect-off" : ""}`}>
                
                <div class={`bg-white w-12 h-12 flex rounded-4xl justify-center items-center ${specialEffectCallback ?  !specialEffectCallback[1] && " enable-special-effect-off" : ""} `} onClick={() =>  specialEffectCallback[0]()}> 

                    {isHomeButton ?
                        <a href='/'>
                            <img className="quick-nav-component-content" src={content} alt="" />
                        </a>
                        :
                        specialEffectCallback ?
                            <img className="quick-nav-component-content" src={content} alt="" />
                            :
                            <a href={`${link}`} target="_blank">
                                <img className="quick-nav-component-content" src={content} alt="" />
                            </a>
                    }
                </div>

            </div>
        </div>
       
    )
}
// ${specialEffectCallback.enableSpecialEffect && " enable-special-effect-off"}   onClick={() => specialEffectCallback.toggleSpecialEffectHelper()}


const QuickNavigation = ({navIsOpen}) => {
    const contextValues = useContext(simulationContext);

   

    return(
        <div class={`absolute top-0 w-72 right-0 h-full flex items-center overflow-hidden  opacity-70 quick-navigation-open-animation ${navIsOpen ? "open" : ""} `}>
            <div class="absolute ml-28 h-60 w-60 radar-quick-menu ">
                <QuickNavComponent marginX={"ml-[25px]"} marginY={"-mt-[10px]"} content={homeIcon} isHomeButton={true}></QuickNavComponent>
                <QuickNavComponent marginX={"-ml-[25px]"} marginY={"-mt-[5px]"} content={githubLogo} link={"https://github.com/Winch3ster"}></QuickNavComponent>
                <QuickNavComponent marginX={"-ml-[25px]"} marginY={"mt-[15px]"} content={instagramLogo} link={"https://www.instagram.com/king_st0ne/"} ></QuickNavComponent>
                <QuickNavComponent marginX={"ml-[25px]"} marginY={"-mt-[5px]"} content={effect} specialEffectCallback={contextValues}></QuickNavComponent>

            </div>
        </div>

    )
}


const SimulationNav = () => {
    //This is for the navigation

    //Name, status --> looking for job, employed, unavailable, social media links 

    //Green --> looking for job
    //Gray --> unavailable

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

