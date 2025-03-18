

/*
 This section will stay on screen, but when cursor is hovered over an indicator,
 this section will close with animation
*/

import textBundle from "../../msgbundle";


const SimulationTitle = () => {

    return (
        <div class="absolute z-20 left-20 bottom-0 mr-20 mb-20 py-10 px-5 w-1/3">
            <div class="text-start text-white tracking-wide">{textBundle["simulation.page.subtitle"]}</div>
            
            <div class="h-1"></div>
                <p class="text-4xl text-start font-normal text-white tracking-wider">{textBundle["simualtion.page.title.1"]}<br></br>{textBundle["simualtion.page.title.2"]}</p>
          

           
            <div class="h-4"></div>
            <div  class="text-start text-white tracking-wide">{textBundle["simulation.page.description"]}</div>                
        
        </div>


    )

}


export default SimulationTitle;