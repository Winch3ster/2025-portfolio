import { OrbitControls, PerspectiveCamera, Sparkles,  } from "@react-three/drei";
import LandingPageNavigationBar from "../assets/UI_components/landing_page_nav_bar";
import LandingPageOverlay from "../assets/UI_components/landing_page_overlay";
import { Canvas, useFrame, useThree} from "@react-three/fiber";
import { useState, } from "react";
import { LandingPageScene } from "../assets/model_components/landing_page_scene";
import { EffectComposer, Vignette } from "@react-three/postprocessing";
import { Vector3 } from "three";


function Rig() {


  const [vec] = useState(() => new Vector3)

  

  const { camera, mouse } = useThree()
  const defaultCameraPosition =camera.position;
  vec.set(defaultCameraPosition);


 useFrame(() => {
    camera.position.lerp(vec.set(-40 + (mouse.x * 8), 7 + (mouse.y * 8), 10.26 + (mouse.x * 10)), 0.05)
    camera.lookAt(...[-5,3 ,-37]);
  })  



  //return <CameraShake maxYaw={0.01} maxPitch={0.01} maxRoll={0.01} yawFrequency={0.5} pitchFrequency={0.5} rollFrequency={0.4} />
}


const LandingPage = () => {


    return (
        <div className='w-full h-screen overflow-hidden bg-black'>
            <LandingPageNavigationBar></LandingPageNavigationBar>

            <LandingPageOverlay></LandingPageOverlay>
            <Canvas>
            <pointLight  position={[2, 5, 1]} intensity={1} decay={0.2} color={"#a5b9c7"} ></pointLight>

            <PerspectiveCamera  makeDefault position={[-40, 7, 10.26]} fov={40} rotation={[-0.13, -0.609, -0.077]} zoom={1.4} onUpdate={(self) => self.lookAt(...[-5,3,-37])} > </PerspectiveCamera>
            <LandingPageScene></LandingPageScene>
           


           <group position={[-19,12,-43]}>
                <pointLight   intensity={50} decay={3} color={"#0b9485"} ></pointLight>
           </group>


           <group position={[-15,11,-48]}>
                <pointLight   intensity={50} decay={3} color={"#0b9485"} ></pointLight>
           </group>
           
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
    );


}

                //{sourceRef ? <TrailEffect meshRef={sourceRef}></TrailEffect> : console.log("No source does not exist")}
//            <PerspectiveCamera  makeDefault position={[-1.7, -0.6, 30]} fov={40} > </PerspectiveCamera>

export default LandingPage;



/*

                <Sparkles count={50} scale={4 * 2} size={100} speed={10} color={"#0b9485"} noise={0.5} />




  <mesh position={[-18,10,-45]}>
            <boxGeometry
              args={[5,5,5]}
            />
            <meshNormalMaterial/>
          </mesh>


*/