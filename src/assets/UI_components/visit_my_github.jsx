

/*
 This section will stay on screen, but when cursor is hovered over an indicator,
 this section will close with animation
*/

import textBundle from "../../msgbundle";


const SimulationTitle = () => {

   
const isMobile = window.matchMedia("(any-pointer: coarse)").matches &&  window.innerHeight < 500;


    return (
        <div class={`absolute z-20  ${isMobile  ? "left-3 bottom-3 pb-5 w-6/12 " : "xl:left-20 lg:left-10 bottom-0 left-10 mr-20 xl:mb-20 lg:mb-10 mb-8 2xl:w-5/12 sm:w-1/3 w-1/4 near-square-screen-size-panel"}  px-5`}>

            <div class={` ${isMobile  ? "text-xs":"5xl:text-2xl lg:text-base  text-sm"} text-start text-white tracking-wide`}>{textBundle["simulation.page.subtitle"]}</div>
            
            <div class="h-1"></div>

                <p class={`${isMobile  ?"text-lg" : "5xl:text-6xl xl:text-3xl lg:text-2xl text-lg"} text-start font-normal text-white tracking-wider`}>{textBundle["simualtion.page.title.1"]}<br></br>{textBundle["simualtion.page.title.2"]}</p>
           
            <div class={`${isMobile  ? "h-1" : "h-4"}`}></div>

            <div  class={` ${isMobile  ? "text-xs":"5xl:text-2xl lg:text-base text-sm"} text-start text-white tracking-wide`} >{textBundle["simulation.page.description"]}</div>                
        
        </div>


    )

}


export default SimulationTitle;