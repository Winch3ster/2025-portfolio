import { Html } from "@react-three/drei";

const InteractableIndicator = () => {


    return (
       


        <Html 
        position = {[-0.5, -0.3, 0.2]}
        
    

        
        rotateOnWorldAxis={[0,-Math.PI / 2,0]}
        
        >
            <a className='interactable-button' href=''>
                <div></div>
                <span>Explore</span>
            </a>


        </Html>
        
    );


}
/*
 <div className='indicator-outer-layer ' onClick={() => {console.log("Indicator clicked")}}>
                    <div className='indicator-inner-layer'></div>
            </div>   

*/

export default InteractableIndicator;