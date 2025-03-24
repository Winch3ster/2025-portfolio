import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { PerspectiveCamera, } from "@react-three/drei"
import { Home_scene } from "../assets/model_components/home_scene";
import { useEffect,  useState } from "react";
import {  Vector3 } from "three";
import InteractableIndicator from "../assets/UI_components/interactable_indicator";
import { EffectComposer,  Bloom, Vignette, Glitch } from '@react-three/postprocessing'
import {GlitchMode } from 'postprocessing'
import SimulationPageOverlay from "../assets/UI_components/simulation_page_overlay";
import AboutMePanel from "../assets/UI_components/about_me_panel";
import MyProjectsPanel from "../assets/UI_components/my_projects_panel";
import { AnimatePresence, motion } from "motion/react";
import { simulationContext } from "../context";


const CAMERA_POSITION = [-2.5, 0, 3.3];
const LOOK_AT_COORDINATE = [1.3, 0.6, -3.8];

const newPosition = new Vector3();
const lookAtPosition = new Vector3();

const isTouchDevice =window.matchMedia("(any-pointer: coarse)").matches;

function Rig({currentActivatedPanel}) {
  const { camera } = useThree()
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMovement = (event) => {
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = -(event.clientY / window.innerHeight) * 2 + 1;
    setMouse({ x, y });
  };

  const handleTouchMovement = (event) => {
    const touches = event.touches[0];
    const x = (touches.clientX / window.innerWidth) * 2 - 1;
    const y = -(touches.clientY / window.innerHeight) * 2 + 1;
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
  }, []);


  useFrame(() => {
    const xOffset = mouse.x * 0.3;
    const yOffset =  mouse.y*0.2;

    // Default camera position & lookAt target
    newPosition.set(-2.5 + xOffset, 0 + yOffset, 3.3 + xOffset);
    lookAtPosition.set(1.3, 0.6, -3.8);

    // Adjust position based on the active panel
    if (currentActivatedPanel === "about") {
      newPosition.set(xOffset, -0.1 + yOffset, 2.86 + xOffset);
    } else if (currentActivatedPanel === "project") {
      newPosition.set(-2.56 + xOffset, 0.78 + yOffset, 0.23 + xOffset);
      lookAtPosition.set(2, 0.6, -1.5);
    }

    // Smooth interpolation
    camera.position.lerp(newPosition, 0.05);
    camera.lookAt(lookAtPosition);

  })
}



function SimulationPage({loadingCallback, Home_scene_param}) {

    const [enableSpecialEffect, setEnableSpecialEffect ] = useState(true);

    const [currentActivatedPanel, setCurrentActivatedPanel] = useState("none");

    //[My Projects] Play the project picture slide's entrance animation AFTER parent component's animation finishes 
    const [isProjectPanelParentAnimationDone, setIsProjectPanelParentAnimationDone] = useState(false);
    
    const [loadingScene, setLoadingScene] = useState(true);

    useEffect(() => {
    loadingCallback()
      
    }, [loadingScene]);
    
    function setIsLoadingHelperScene(){
      setLoadingScene(false);
    }

    //"about" --> about me
    //"project" --> my projects
    const interactableClicked = (panel) =>{
      switch(panel) {
        case "about":
          //open about me panel  
          setCurrentActivatedPanel("about");
          break;
        case "project":
          setCurrentActivatedPanel("project");
          setIsProjectPanelParentAnimationDone(false);
          break;
        default:
          //open my work panel
          setCurrentActivatedPanel("none");
      }
    }

    const closePanel = () =>{
      setCurrentActivatedPanel("none");
      setIsProjectPanelParentAnimationDone(false);
    }

    function toggleSpecialEffectHelper(){
      setEnableSpecialEffect(!enableSpecialEffect);
    }

    return (
        <simulationContext.Provider value={[toggleSpecialEffectHelper, enableSpecialEffect]}>
          

            <div className='w-full h-screen overflow-hidden'>
            <SimulationPageOverlay currentActivatedPanel={currentActivatedPanel}></SimulationPageOverlay>
              
            
              <AnimatePresence>
                {currentActivatedPanel == "about" && 
                  <motion.div
                  initial={{ x: -200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -200, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  class='z-30 absolute w-full h-full overflow-hidden'
                  >
                    <AboutMePanel closePanelCallbackFunction={closePanel}></AboutMePanel>
                  </motion.div> 
                }
                
                
                {currentActivatedPanel == "project" && 
                
                  <motion.div
                  initial={{ x: -200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -200, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  class='z-30 absolute w-full h-full overflow-hidden'
                  onAnimationComplete={() => setIsProjectPanelParentAnimationDone(true)}
                  >
                    <MyProjectsPanel closePanelCallbackFunction={closePanel}  isParentAnimationDone={isProjectPanelParentAnimationDone}></MyProjectsPanel>
                  </motion.div> 
                }
              </AnimatePresence>
              
              <Canvas 
              className="w-full h-screen z-0 relative overflow-x-hidden"
              linear={true}
              >
         
                <color attach="background" args={["#53545c"]} />


                <ambientLight  intensity={2} color={"#e8eafa"}></ambientLight>
                <pointLight  position={[2, 1, 1]} intensity={9} decay={0.2} color={"#89a2b3"} ></pointLight>
                <pointLight  position={[-2, 0.2, -1]} intensity={2} decay={0.5}  color={"#fff1e6"} ></pointLight>

                <Home_scene finishedLoadingCallback={setIsLoadingHelperScene} preFetchedModel={Home_scene_param}></Home_scene>

                <PerspectiveCamera  makeDefault position={CAMERA_POSITION} fov={32} onUpdate={(self) => self.lookAt(...LOOK_AT_COORDINATE)}> </PerspectiveCamera>

                /* 
                    The effectcomposer component may cause performance issue
                    */

                {enableSpecialEffect && 
                <EffectComposer>
                  <Glitch
                      delay={[1.5, 13.5]} // min and max glitch delay
                      duration={[0.6, 1.0]} // min and max glitch duration
                      strength={[0.005, 0.01]} // min and max glitch strength
                      mode={GlitchMode.SPORADIC} // glitch mode
                      active // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
                      ratio={0.25} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
                    />
                  <Bloom luminanceThreshold={0} luminanceSmoothing={0.6} height={100} intensity={0.2} />
                  <Vignette eskil={false} offset={.1} darkness={0.8} />
                </EffectComposer>
                
                }

                <Rig currentActivatedPanel={currentActivatedPanel}></Rig>
                <InteractableIndicator position={[-1.3, 0.6, -1.7]} onclickCallBack={() => interactableClicked("project")} buttonContent={"Project"}></InteractableIndicator>
                <InteractableIndicator position={[-0.5, -0.3, 0.2]} onclickCallBack={() => interactableClicked("about")} buttonContent={"About"}></InteractableIndicator>

              </Canvas>
            </div>
            </simulationContext.Provider>
     
    )
  }
  
  export default SimulationPage
  