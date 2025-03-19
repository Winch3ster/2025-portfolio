
import '../../index.css'

import instagramLogo from '../icons/instagram.png'
import linkedin from '../icons/linkedin.png'
import githubLogo from '../icons/github.png'
import hamburgerMenu from '../icons/hamburger_menu.png'
import homeIcon from '../icons/home.png'
import closeNavIcon from '../icons/close.png'
import { useState } from 'react'




const QuickNavComponent = ({marginX, marginY, content}) => {


    return(

        <div >
            
            <div class={`${marginX} ${marginY} quick-nav-comp-effect w-16 h-16 rounded-4xl flex justify-center items-center quick-nav-component-container`}>
                
                <div class='bg-white w-12 h-12 flex rounded-4xl justify-center items-center'>
                    <img className="quick-nav-component-content" src={content} alt="" />

                </div>

            </div>
        </div>
       
    )
}



const QuickNavigation = ({navIsOpen}) => {

    return(
        <div class={`absolute top-0 w-72 right-0 h-full flex items-center overflow-hidden  opacity-70 quick-navigation-open-animation ${navIsOpen ? "open" : ""} `}>
            <div class="absolute ml-28 h-60 w-60 radar-quick-menu ">
                <QuickNavComponent marginX={"ml-[25px]"} marginY={"-mt-[10px]"} content={homeIcon}></QuickNavComponent>
                <QuickNavComponent marginX={"-ml-[25px]"} marginY={"-mt-[5px]"} content={githubLogo}></QuickNavComponent>
                <QuickNavComponent marginX={"-ml-[25px]"} marginY={"mt-[15px]"} content={instagramLogo}></QuickNavComponent>
                <QuickNavComponent marginX={"ml-[25px]"} marginY={"-mt-[5px]"} content={linkedin}></QuickNavComponent>

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

        console.log("openQuickNav is running");
        console.log(quickNavIsOpen);
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

