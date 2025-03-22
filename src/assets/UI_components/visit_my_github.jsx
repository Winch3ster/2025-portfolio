

/*
 This section will stay on screen, but when cursor is hovered over an indicator,
 this section will close with animation
*/

import textBundle from "../../msgbundle";


const SimulationTitle = () => {

    const screenWithSmallHeight = window.innerWidth/ window.innerHeight > 2;
    const isMobile = window.matchMedia("(any-pointer: coarse)").matches &&  window.innerHeight < 500;


    return (
        <div class={`absolute z-20  ${isMobile ? "left-3 bottom-3 pb-5 w-6/12 " : "left-20 bottom-0 mr-20 mb-20 pb-10 w-1/3"} px-5 w-1/3 `}>

            <div class={` ${isMobile ? "text-xs":"text-base"} text-start text-white tracking-wide`}>{textBundle["simulation.page.subtitle"]}</div>
            
            <div class="h-1"></div>

                <p class={`${isMobile ?"text-lg" : "text-3xl"} text-start font-normal text-white tracking-wider`}>{textBundle["simualtion.page.title.1"]}<br></br>{textBundle["simualtion.page.title.2"]}</p>
           
            <div class={`${isMobile ? "h-1" : "h-4"}`}></div>

            <div  class={` ${isMobile ? "text-xs":"text-base"} text-start text-white tracking-wide`} >{textBundle["simulation.page.description"]}</div>                
        
        </div>


    )

}


export default SimulationTitle;