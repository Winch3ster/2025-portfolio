import { useEffect, useState, } from "react";
import { PerspectiveCamera, Sparkles,  } from "@react-three/drei";
import { Canvas, useFrame, useThree} from "@react-three/fiber";
import { EffectComposer, Vignette } from "@react-three/postprocessing";
import { Vector3 } from "three";

import LandingPageNavigationBar from "../assets/UI_components/landing_page_nav_bar";
import LandingPageOverlay from "../assets/UI_components/landing_page_overlay";
import { LandingPageScene } from "../assets/model_components/landing_page_scene";

const isTouchDevice = window.matchMedia("(any-pointer: coarse)").matches
const lookAtTarget = new Vector3(-5, 3, -37);
const targetPosition = new Vector3();

function Rig() {

  const { camera } = useThree()
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleTouchMovement = (event) => {
    const touches = event.touches[0];
    const x = (touches.clientX / window.innerWidth) * 2 - 1;
    const y = -(touches.clientY / window.innerHeight) * 2 + 1;
    setMouse({ x, y });
  };
  const handleMouseMovement = (event) => {
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = -(event.clientY / window.innerHeight) * 2 + 1;
    setMouse({ x, y });
  };

  useEffect(() => {
    if(isTouchDevice){
      window.addEventListener("touchmove", handleTouchMovement);
      return () => window.removeEventListener("touchmove", handleTouchMovement);
    }else{
      window.addEventListener("mousemove", handleMouseMovement);
      return () => window.removeEventListener("mousemove", handleMouseMovement);
    }
  }, [])

  useFrame(() => {
    targetPosition.set(
      -40 + mouse.x * (isTouchDevice ? 20: 8),
      7 + mouse.y * (isTouchDevice ? 20: 8),
      10.26 + mouse.x * (isTouchDevice ? 25: 10)
    );

    camera.position.lerp(targetPosition, 0.05);
    camera.lookAt(lookAtTarget);
  })  


}

const LandingPage = ({loadingCallback, Home_scene_param}) => {

  const [loadingScene, setLoadingScene] = useState(true);
  useEffect(() => {
    
    if(loadingScene == false){
      loadingCallback();
    }
    
  }, [loadingScene]);

  function setIsLoadingHelperScene(){
    setLoadingScene(false);
  }
  return  (
    <>

      <div className="w-full h-screen overflow-hidden bg-black">
        <LandingPageOverlay />
        <LandingPageNavigationBar />
        
          <Canvas>
            <pointLight position={[2, 5, 1]} intensity={1} decay={0.2} color={"#a5b9c7"} />
            <PerspectiveCamera makeDefault position={[-40, 7, 10.26]} fov={40} rotation={[-0.13, -0.609, -0.077]} zoom={1.4} onUpdate={(self) => self.lookAt(lookAtTarget)} />
            
            <LandingPageScene finishedLoadingCallback={setIsLoadingHelperScene} />  

            <group position={[-19, 12, -43]}>
              <pointLight intensity={100} decay={3} color={"#0b9485"} />
            </group>

            <Sparkles position={[0, -5, -38]} count={200} scale={40} size={15} speed={3} color={"#0b9485"} />
            <pointLight position={[0,9.2,-34]}  intensity={50} decay={2.9} color={"#0b9485"} ></pointLight>

                    
            <pointLight position={[-3,8.8,-37.4]}  intensity={50} decay={2.5} color={"#0b9485"} ></pointLight>
            <pointLight position={[3,8.8,-37.4]}  intensity={50} decay={2.5} color={"#0b9485"} ></pointLight>

            <pointLight position={[17.5,12.3,-43.5]}  intensity={50} decay={3} color={"#0b9485"} ></pointLight>


            <Sparkles  position={[0,-5,-38]} count={200} scale={20 * 2} size={15} speed={3} color={"#0b9485"} />

            <Sparkles  position={[4,-5,-40]} count={100} scale={20 * 2} size={20} speed={2}  color={"#0b9485"} />

              <EffectComposer>
                      
                <Vignette eskil={false} offset={0.1} darkness={1} />
            </EffectComposer>
            


            <Rig></Rig>
          </Canvas>
      </div>
    </>
  );
};
export default LandingPage;
