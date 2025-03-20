import textBundle from "../../msgbundle";
import SimulationNav from "./simulation_navigation_bar";
import SimulationTitle from "./visit_my_github";


const WordOverlay = () =>{
    return(
        <div class='absolute top-5 left-20 pl-5 text-white tracking-widest z-20 standard-small-text-size'>
            {textBundle["model.created.in.blender"]}
        </div>
    )
}
const SimulationPageOverlay = () => {

    return(
        <>
            <WordOverlay></WordOverlay>
            <SimulationNav></SimulationNav>
            <SimulationTitle></SimulationTitle>            
        </>
        
    )

}



export default SimulationPageOverlay;