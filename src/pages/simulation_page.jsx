import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {  OrbitControls, PerspectiveCamera, } from "@react-three/drei"
import { Home_scene } from "../assets/model_components/home_scene";
import { Suspense, useState } from "react";
import { Vector3 } from "three";
import InteractableIndicator from "../assets/UI_components/interactable_indicator";
import { EffectComposer,  Bloom, Vignette, Glitch } from '@react-three/postprocessing'
import {GlitchMode } from 'postprocessing'
import SimulationPageOverlay from "../assets/UI_components/simulation_page_overlay";


function Rig() {
  
  const [vec] = useState(() => new Vector3)

  

  const { camera, mouse } = useThree()
  const defaultCameraPosition =camera.position;
  vec.set(defaultCameraPosition);


 useFrame(() => {
    const xOffset = mouse.x * 0.3;
    const yOffset = mouse.y*0.2;
    camera.position.lerp(vec.set(-2.5 + xOffset, 0 + yOffset, 3.3 + xOffset), 0.05)
    camera.lookAt(...[1 , 0.6 , -3.8 ]);
  })  
}


function SimulationPage() {

   

  const lookAtCoordinate = [1, 0.6, -3.8]


    return (
      <div className='w-full h-screen overflow-hidden'>
      <SimulationPageOverlay></SimulationPageOverlay>
        <Canvas 
        className="w-full h-screen z-0 relative overflow-x-hidden"
        linear={true}
        >

          <Suspense> 
          <color attach="background" args={["#53545c"]} />


          <ambientLight  intensity={2} color={"#e8eafa"}></ambientLight>
          <pointLight  position={[2, 1, 1]} intensity={9} decay={0.2} color={"#89a2b3"} ></pointLight>
          <pointLight  position={[-2, 0.2, -1]} intensity={2} decay={0.5}  color={"#fff1e6"} ></pointLight>

          <Home_scene ></Home_scene>
          <InteractableIndicator></InteractableIndicator>

        
          <PerspectiveCamera  makeDefault position={[-2.5, 0, 3.3]} fov={32} onUpdate={(self) => self.lookAt(...lookAtCoordinate)}> </PerspectiveCamera>

          /* 
              The effectcomposer component may cause performance issue
              */
   
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
        
        <Rig></Rig>

        </Suspense>

        </Canvas>

      </div>
    )
  }
  
  export default SimulationPage
  
  /*






















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





<Glitch
              delay={[1.5, 13.5]} // min and max glitch delay
              duration={[0.6, 1.0]} // min and max glitch duration
              strength={[0.005, 0.01]} // min and max glitch strength
              mode={GlitchMode.SPORADIC} // glitch mode
              active // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
              ratio={0.25} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
            />
            <Bloom luminanceThreshold={0} luminanceSmoothing={0.6} height={100} intensity={0.4} />
            <Vignette eskil={false} offset={0.1} darkness={0.8} />









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