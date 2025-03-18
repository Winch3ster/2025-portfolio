import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {  OrbitControls, PerspectiveCamera, } from "@react-three/drei"
import { Home_scene } from "../assets/model_components/home_scene";
import { Suspense, useState } from "react";
import NavigationBar from "../assets/UI_components/navigation_bar"
import { Vector3 } from "three";
import ExploreGithubSection from "../assets/UI_components/visit_my_github";
import InteractableIndicator from "../assets/UI_components/interactable_indicator";
import { EffectComposer,  Bloom, Vignette, Glitch } from '@react-three/postprocessing'
import {GlitchMode } from 'postprocessing'
import HomepageOverlay from "../assets/UI_components/homepage_overlay";
import MouseHelper from "../assets/UI_components/mouse_helper";


function Rig() {
  const [vec] = useState(() => new Vector3)
  const { camera, mouse } = useThree()
  
  /*useFrame(() => {

    const xShakeFactorTreshold = 0.25;
    const yShakeFactorTreshold = 0.1;


    let xShakeFactor = mouse.x;
    let yShakeFactor = mouse.y;

    if(xShakeFactor > xShakeFactorTreshold){
      xShakeFactor = xShakeFactorTreshold;
    }else if(xShakeFactor < xShakeFactorTreshold){
      xShakeFactor = -xShakeFactorTreshold;
    }else{
      xShakeFactor = mouse.x
    }

    if(yShakeFactor > yShakeFactorTreshold){
      yShakeFactor = yShakeFactorTreshold;
    }else if(yShakeFactor < -yShakeFactorTreshold){
      yShakeFactor = -yShakeFactorTreshold;
    }else{
      yShakeFactor = mouse.y
    }

    camera.position.lerp(vec.set(xShakeFactor + -2.8,  yShakeFactor+0.2, 3.5), 0.015)
  
  })*/




  //return <CameraShake maxYaw={0.01} maxPitch={0.01} maxRoll={0.01} yawFrequency={0.5} pitchFrequency={0.5} rollFrequency={0.4} />
}




function HomePage() {

    //Entry point of the app 
  
    // Architecture 
    
    /*
        - scene 
            - Lighting and ambience
            - Models 
    */

  

  const lookAtCoordinate = [1.5, 0.6, -3.8]//[0, 0.3, -2]; // Target position


    return (
      <div className='w-full h-screen overflow-hidden'>
      <NavigationBar isOpen={true}></NavigationBar>
        <Canvas
        
        className="w-full h-screen z-0 relative overflow-hidden"
        linear={true}
        
        >
      

          <Suspense> 
          <color attach="background" args={["#53545c"]} />


          <ambientLight  intensity={2} color={"#e8eafa"}></ambientLight>
          <pointLight  position={[2, 1, 1]} intensity={9} decay={0.2} color={"#89a2b3"} ></pointLight>
          <pointLight  position={[-2, 0.2, -1]} intensity={2} decay={0.5}  color={"#fff1e6"} ></pointLight>

     
         
          
         
        
          <Home_scene ></Home_scene>
      

          <InteractableIndicator></InteractableIndicator>


  

        
          <PerspectiveCamera  makeDefault position={[-2.7, 0.6, 3.3]} fov={32} onUpdate={(self) => self.lookAt(...lookAtCoordinate)}> </PerspectiveCamera>


          <Rig></Rig>

          <EffectComposer>
            <Glitch
              delay={[1.5, 13.5]} // min and max glitch delay
              duration={[0.6, 1.0]} // min and max glitch duration
              strength={[0.005, 0.01]} // min and max glitch strength
              mode={GlitchMode.SPORADIC} // glitch mode
              active // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
              ratio={0.25} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
            />



            <Bloom luminanceThreshold={0} luminanceSmoothing={0.6} height={100} intensity={0.4} />
            <Vignette eskil={false} offset={0.1} darkness={0.4} />
          </EffectComposer>


        </Suspense>


        </Canvas>
        <ExploreGithubSection></ExploreGithubSection>

    



      </div>
    )
  }
  
  export default HomePage
  
  /*




    <Rig />
          <pointLight  position={[-1.1, 3.9, -0.4]} intensity={10} decay={0.5}   ></pointLight>


                    <pointLight  position={[1, 1, -0.4]} intensity={10} decay={0.05} color={"#9fb5b4"} distance={100}></pointLight>


             <Environment preset="city" environmentIntensity={0.2} ></Environment>
          <ambientLight intensity={2.5} color={[0.224*ambienceLightIntensityFactor, 0.231*ambienceLightIntensityFactor, 0.255*ambienceLightIntensityFactor]} ></ambientLight>
          <pointLight  position={[-1.1, 3.9, -0.4]} intensity={2.5} decay={0.5}   ></pointLight>



  <mesh position={[-0.2, -0.6, 0.2]}>
            <boxGeometry
              args={[0.5, 0.5, 0.5]}
            />
            <meshNormalMaterial/>
          </mesh>




  camera={{
            
            position: [-1.2,4,8],
            fov: 30,
            
          }}



  <mesh>
            <boxGeometry
              args={[0.5, 0.5, 0.5]}
            />
            <meshNormalMaterial/>
          </mesh>

 <mesh position={[-1.1, 4.4, -1.3]}>
            <boxGeometry
            
              args={[0.5,0.5,0.5]}
            />
            <meshNormalMaterial/>
          </mesh>

   <ambientLight intensity={2.5}></ambientLight>




          <pointLight position={[-1.2, 4.2, -0.1]} intensity={3}></pointLight>
          <pointLight position={[-1.2, 2, -0.2]} intensity={3}></pointLight>
  
  
  
  
            <ambientLight intensity={2} color={[0.224*ambienceLightIntensityFactor, 0.231*ambienceLightIntensityFactor, 0.255*ambienceLightIntensityFactor]}></ambientLight>




            
         
          <pointLight  position={[-1.1, 3.9, -0.4]} intensity={5} decay={0.5}   ></pointLight>
          <ambientLight intensity={1.5} color={[0.224*ambienceLightIntensityFactor, 0.231*ambienceLightIntensityFactor, 0.255*ambienceLightIntensityFactor]} frustumCulled></ambientLight>

          <pointLight position={[-0.5, 5, 1,5]} intensity={3}></pointLight>


          */