import textBundle from "../../msgbundle";
import SimulationNav from "./simulation_navigation_bar";
import SimulationTitle from "./visit_my_github";

const SimulationPageOverlay = () => {

    return(
        <>
            <div class="absolute top-5 left-20 z-20">

                <p class="standard-small-text-size text-white tracking-[.25em] opacity-80">{textBundle["simulation.page.featuring"]}</p>
            </div>

            <SimulationNav></SimulationNav>

            <SimulationTitle></SimulationTitle>            
        </>
        
    )

}



export default SimulationPageOverlay;