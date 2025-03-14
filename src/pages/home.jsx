import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { CameraShake, Environment, OrbitControls, PerspectiveCamera} from "@react-three/drei"
import { Home_scene } from "../assets/model_components/home_scene";
import { Suspense, useState } from "react";
import NavigationBar from "../assets/UI_components/navigation_bar"
import { Vector3 } from "three";
import ExploreGithubSection from "../assets/UI_components/visit_my_github";



function Rig() {
  const [vec] = useState(() => new Vector3)
  const { camera, mouse } = useThree()
  useFrame(() => {
    console.log(mouse.x)

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
  
  })




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
   const ambienceLightIntensityFactor = 2.5; 

  

  const lookAtCoordinate = [0.5, 0.3, -2]//[0, 0.3, -2]; // Target position



    return (
      <div className='w-full h-screen overflow-hidden'>
      <NavigationBar isOpen={true}></NavigationBar>
        <Canvas
        className="w-full h-screen z-0 relative overflow-hidden"
        >
          <Suspense> 
            
     

          <PerspectiveCamera  makeDefault position={[-2.8, 0.2, 3.5]} fov={32} onUpdate={(self) => self.lookAt(...lookAtCoordinate)}> </PerspectiveCamera>
          <color attach={"background"} args={["#121212"]}/>
          
       
          <Environment preset="studio" environmentIntensity={0.2} ></Environment>

          <pointLight  position={[-1.1, 3.9, -0.4]} intensity={2.5} decay={0.5}   ></pointLight>
          <ambientLight intensity={1.5} color={[0.224*ambienceLightIntensityFactor, 0.231*ambienceLightIntensityFactor, 0.255*ambienceLightIntensityFactor]} ></ambientLight>
          
          <Home_scene ></Home_scene>
          <Rig />

        </Suspense>
        </Canvas>
        <ExploreGithubSection></ExploreGithubSection>
      </div>
    )
  }
  
  export default HomePage
  
  /*


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