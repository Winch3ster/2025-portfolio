import { Html } from "@react-three/drei";

const InteractableIndicator = ({position, onclickCallBack, buttonContent}) => {

    const isMobile = window.matchMedia("(any-pointer: coarse)").matches &&  window.innerHeight < 500;

    return (
        <Html 
        position = {position}
        rotateOnWorldAxis={[0,-Math.PI / 8, 0]}
        >
            <div className={isMobile ? "interactable-button-mobile" : "interactable-button"} onClick={onclickCallBack}>
                <div></div>
                <span>{buttonContent}</span>
            </div>
        </Html>
        
    );
}


export default InteractableIndicator;