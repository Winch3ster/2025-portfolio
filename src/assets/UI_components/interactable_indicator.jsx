import { Html } from "@react-three/drei";

const InteractableIndicator = ({position, onclickCallBack}) => {

    return (
        <Html 
        position = {position}
        rotateOnWorldAxis={[0,-Math.PI / 8, 0]}
        >
            <div className='interactable-button' onClick={onclickCallBack}>
                <div></div>
                <span>Explore</span>
            </div>
        </Html>
        
    );
}


export default InteractableIndicator;