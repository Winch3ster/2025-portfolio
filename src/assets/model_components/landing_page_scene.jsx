import {  useGLTF } from '@react-three/drei'

//position={[1,-5.5,-93]
export const LandingPageScene = ({...props}) => {


    const { nodes, materials } = useGLTF('./src/assets/models/00Raiser_18_march_landing_page.glb')
  return (
    <group {...props} dispose={null} position={[0,-55,-35]}>
      <mesh
        
        receiveShadow
        geometry={nodes.neck.geometry}
        material={materials.dark_gray}
      />
      <group position={[0, -39.152, 0]}>
        <mesh
          
          receiveShadow
          geometry={nodes.Plane005.geometry}
          material={materials.main_blue}
        />
        <mesh
          
          receiveShadow
          geometry={nodes.Plane005_1.geometry}
          material={materials.dark_gray}
        />
        <mesh
          
          receiveShadow
          geometry={nodes.Plane005_2.geometry}
          material={materials.white}
        />
      </group>
      <mesh
        
        receiveShadow
        geometry={nodes['gn_drive_holder_-_left'].geometry}
        material={materials.dark_gray}
        position={[-16.526, 0.186, 60.064]}
        rotation={[0, 0.221, 0]}
      />
      <group position={[23.049, 37.107, 26.122]}>
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired'].geometry}
          material={materials.dark_gray}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired_1'].geometry}
          material={materials.red}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired_2'].geometry}
          material={materials.white}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired_3'].geometry}
          material={materials.gray}
        />
      </group>
      <group position={[70.412, -33.827, 69.573]} rotation={[-0.109, 0.722, 0.428]}>
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired008'].geometry}
          material={materials.dark_gray}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired008_1'].geometry}
          material={materials.main_blue}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired008_2'].geometry}
          material={materials.white}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired008_3'].geometry}
          material={materials.green}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired008_4'].geometry}
          material={materials.gray}
        />
      </group>
      <group position={[-1.834, -2.678, 88.464]} rotation={[-0.134, 0.684, 0.041]}>
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired007'].geometry}
          material={materials.main_blue}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired007_1'].geometry}
          material={materials.dark_gray}
        />
      </group>
      <group position={[25.744, -7.728, -22.561]} rotation={[0.162, -0.02, 0.003]}>
        <mesh
          
          receiveShadow
          geometry={nodes.Plane017.geometry}
          material={materials.white}
        />
        <mesh
          
          receiveShadow
          geometry={nodes.Plane017_1.geometry}
          material={materials.red}
        />
        <mesh
          
          receiveShadow
          geometry={nodes.Plane017_2.geometry}
          material={materials.dark_gray}
        />
        <mesh
          
          receiveShadow
          geometry={nodes.Plane017_3.geometry}
          material={materials.black}
        />
        <mesh
          
          receiveShadow
          geometry={nodes.Plane017_4.geometry}
          material={materials.green}
        />
        <mesh
          
          receiveShadow
          geometry={nodes.Plane017_5.geometry}
          material={materials.gray}
        />
        <mesh
          
          receiveShadow
          geometry={nodes.Plane017_6.geometry}
          material={materials.glossy_red}
        />
        <mesh
          
          receiveShadow
          geometry={nodes.Plane017_7.geometry}
          material={materials.Yellow}
        />
      </group>
      <mesh
        
        receiveShadow
        geometry={nodes['upper-hand-joint-left001'].geometry}
        material={materials.dark_gray}
        position={[-23.407, 1.27, -33.85]}
        rotation={[0, 0.163, 0]}
      />
      <group position={[-50.027, 35.067, -29.163]} rotation={[0, 0.163, 0]}>
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired029'].geometry}
          material={materials.dark_gray}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired029_1'].geometry}
          material={materials.main_blue}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired029_2'].geometry}
          material={materials.white}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired029_3'].geometry}
          material={materials.gray}
        />
      </group>
      <mesh
        
        receiveShadow
        geometry={nodes['upper-hand-joint-left003'].geometry}
        material={materials.dark_gray}
        position={[-22.891, 0.39, -33.56]}
        rotation={[0, 0.163, 0]}
      />
      <group position={[-23.407, 1.27, -33.85]} rotation={[0, 0.163, 0]}>
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired031'].geometry}
          material={materials.dark_gray}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired031_1'].geometry}
          material={materials.white}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired031_2'].geometry}
          material={materials.gray}
        />
      </group>
      <mesh
        
        receiveShadow
        geometry={nodes['upper-hand-joint-left005'].geometry}
        material={materials.dark_gray}
        position={[-81.036, 46.068, -41.962]}
        rotation={[0, 0.163, 0]}
      />
      <group position={[79.095, 0.871, -19.168]}>
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired034'].geometry}
          material={materials.main_blue}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired034_1'].geometry}
          material={materials.Yellow}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired034_2'].geometry}
          material={materials.white}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired034_3'].geometry}
          material={materials.dark_gray}
        />
      </group>
      <group position={[-79.085, 0.871, -19.168]} rotation={[-Math.PI, 0, 0]} scale={-1}>
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired001'].geometry}
          material={materials.main_blue}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired001_1'].geometry}
          material={materials.Yellow}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired001_2'].geometry}
          material={materials.white}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired001_3'].geometry}
          material={materials.dark_gray}
        />
      </group>
      <group position={[-31.103, -16.575, -79.904]} rotation={[0, 0.163, 0]}>
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired002'].geometry}
          material={materials.dark_gray}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired002_1'].geometry}
          material={materials.main_blue}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired002_2'].geometry}
          material={materials.white}
        />
      </group>
      <group position={[-22.891, 0.39, -33.56]} rotation={[0, 0.163, 0]}>
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired003'].geometry}
          material={materials.dark_gray}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired003_1'].geometry}
          material={materials.white}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired003_2'].geometry}
          material={materials.white_shading}
        />
      </group>
      <mesh
        
        receiveShadow
        geometry={nodes['gn_drive_holder_-_left001'].geometry}
        material={materials.dark_gray}
        position={[23.446, 0.186, 56.372]}
        rotation={[-Math.PI, 0.118, 0]}
        scale={-1}
      />
      <group position={[-41.971, -29.927, 87.378]} rotation={[3.042, 0.584, 0.204]} scale={-1}>
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired035'].geometry}
          material={materials.dark_gray}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired035_1'].geometry}
          material={materials.main_blue}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired035_2'].geometry}
          material={materials.white}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired035_3'].geometry}
          material={materials.green}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired035_4'].geometry}
          material={materials.gray}
        />
      </group>
      <group position={[12.41, -1.905, 85.173]} rotation={[3.027, 0.58, 0.004]} scale={-1}>
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired036'].geometry}
          material={materials.main_blue}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired036_1'].geometry}
          material={materials.dark_gray}
        />
      </group>
      <mesh
        
        receiveShadow
        geometry={nodes['upper-hand-joint-left008'].geometry}
        material={materials.dark_gray}
        position={[25.051, 1.27, -31.735]}
        rotation={[-Math.PI, 0.222, 0]}
        scale={-1}
      />
      <group position={[51.353, 35.067, -25.508]} rotation={[-Math.PI, 0.222, 0]} scale={-1}>
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired038'].geometry}
          material={materials.dark_gray}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired038_1'].geometry}
          material={materials.main_blue}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired038_2'].geometry}
          material={materials.white}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired038_3'].geometry}
          material={materials.gray}
        />
      </group>
      <mesh
        
        receiveShadow
        geometry={nodes['upper-hand-joint-left010'].geometry}
        material={materials.dark_gray}
        position={[24.519, 0.39, -31.476]}
        rotation={[-Math.PI, 0.222, 0]}
        scale={-1}
      />
      <group position={[25.051, 1.27, -31.735]} rotation={[-Math.PI, 0.222, 0]} scale={-1}>
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired040'].geometry}
          material={materials.dark_gray}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired040_1'].geometry}
          material={materials.white}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired040_2'].geometry}
          material={materials.gray}
        />
      </group>
      <mesh
        
        receiveShadow
        geometry={nodes['upper-hand-joint-left012'].geometry}
        material={materials.dark_gray}
        position={[83.054, 46.068, -36.48]}
        rotation={[-Math.PI, 0.222, 0]}
        scale={-1}
      />
      <group position={[35.413, -16.575, -77.263]} rotation={[-Math.PI, 0.222, 0]} scale={-1}>
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired042'].geometry}
          material={materials.dark_gray}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired042_1'].geometry}
          material={materials.main_blue}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired042_2'].geometry}
          material={materials.white}
        />
      </group>
      <group position={[24.519, 0.39, -31.476]} rotation={[-Math.PI, 0.222, 0]} scale={-1}>
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired043'].geometry}
          material={materials.dark_gray}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired043_1'].geometry}
          material={materials.white}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired043_2'].geometry}
          material={materials.white_shading}
        />
      </group>
      <group position={[92.421, -114.289, -6.856]} rotation={[0.206, 0, 0]}>
        <mesh
          
          receiveShadow
          geometry={nodes.Plane011.geometry}
          material={materials.white}
        />
        <mesh
          
          receiveShadow
          geometry={nodes.Plane011_1.geometry}
          material={materials.orange}
        />
        <mesh
          
          receiveShadow
          geometry={nodes.Plane011_2.geometry}
          material={materials.dark_gray}
        />
        <mesh
          
          receiveShadow
          geometry={nodes.Plane011_3.geometry}
          material={materials.main_blue}
        />
        <mesh
          
          receiveShadow
          geometry={nodes.Plane011_4.geometry}
          material={materials.gray}
        />
      </group>
      <group position={[0.023, -55.005, 9.767]}>
        <mesh
          
          receiveShadow
          geometry={nodes.Plane012.geometry}
          material={materials.gray}
        />
        <mesh
          
          receiveShadow
          geometry={nodes.Plane012_1.geometry}
          material={materials.dark_gray}
        />
      </group>
      <mesh
        
        receiveShadow
        geometry={nodes['plane-part-2-left'].geometry}
        material={materials.dark_gray}
        position={[0, 30.816, 0.067]}
      />
      <mesh
        
        receiveShadow
        geometry={nodes['plane-part-2-right'].geometry}
        material={materials.dark_gray}
        position={[0, 30.816, 0.067]}
      />
      <mesh
        
        receiveShadow
        geometry={nodes['plane-part-3-right'].geometry}
        material={materials.main_blue}
        position={[-0.054, -7.286, 5.196]}
      />
      <mesh
        
        receiveShadow
        geometry={nodes['plane-part-4-right'].geometry}
        material={materials.white}
        position={[-0.054, -7.286, 5.196]}
      />
      <mesh
        
        receiveShadow
        geometry={nodes['plane-part-3-right001'].geometry}
        material={materials.main_blue}
        position={[6.452, -7.286, 5.196]}
      />
      <mesh
        
        receiveShadow
        geometry={nodes['plane-part-4-right001'].geometry}
        material={materials.white}
        position={[6.452, -7.286, 5.196]}
      />
      <group position={[102.667, 6.919, -25.057]}>
        <mesh
          
          receiveShadow
          geometry={nodes.Plane013.geometry}
          material={materials.white}
        />
        <mesh
          
          receiveShadow
          geometry={nodes.Plane013_1.geometry}
          material={materials.dark_gray}
        />
        <mesh
          
          receiveShadow
          geometry={nodes.Plane013_2.geometry}
          material={materials.gray}
        />
      </group>
      <mesh
        
        receiveShadow
        geometry={nodes['leg-3'].geometry}
        material={materials.dark_gray}
      />
      <group position={[-48.405, 1.228, -22.249]}>
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired084'].geometry}
          material={materials.white}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired084_1'].geometry}
          material={materials.dark_gray}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired084_2'].geometry}
          material={materials.gray}
        />
      </group>
      <group position={[50, 1.333, 0.452]}>
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired085'].geometry}
          material={materials.dark_gray}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired085_1'].geometry}
          material={materials.white}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired085_2'].geometry}
          material={materials.gray}
        />
      </group>
      <group position={[-0.761, 1.243, 0.253]}>
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired086'].geometry}
          material={materials.white}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired086_1'].geometry}
          material={materials.dark_gray}
        />
      </group>
      <group position={[60.375, 1.33, 89.53]}>
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired087'].geometry}
          material={materials.white}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired087_1'].geometry}
          material={materials.dark_gray}
        />
      </group>
      <mesh
        
        receiveShadow
        geometry={nodes['leg-7'].geometry}
        material={materials.green}
        position={[-1.114, 1.756, -0.582]}
      />
      <group position={[56.294, 1.835, -48.702]}>
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired089'].geometry}
          material={materials.white}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired089_1'].geometry}
          material={materials.gray}
        />
      </group>
      <group position={[-102.652, 6.919, -25.057]} rotation={[-Math.PI, 0, 0]} scale={-1}>
        <mesh
          
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials.white}
        />
        <mesh
          
          receiveShadow
          geometry={nodes.Plane001_1.geometry}
          material={materials.dark_gray}
        />
        <mesh
          
          receiveShadow
          geometry={nodes.Plane001_2.geometry}
          material={materials.gray}
        />
      </group>
      <mesh
        
        receiveShadow
        geometry={nodes['leg-3001'].geometry}
        material={materials.dark_gray}
        position={[0.015, 0, 0]}
        rotation={[-Math.PI, 0, 0]}
        scale={-1}
      />
      <group position={[48.42, 1.228, -22.249]} rotation={[-Math.PI, 0, 0]} scale={-1}>
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired009'].geometry}
          material={materials.white}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired009_1'].geometry}
          material={materials.dark_gray}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired009_2'].geometry}
          material={materials.gray}
        />
      </group>
      <group position={[-49.985, 1.333, 0.452]} rotation={[-Math.PI, 0, 0]} scale={-1}>
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired010'].geometry}
          material={materials.dark_gray}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired010_1'].geometry}
          material={materials.white}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired010_2'].geometry}
          material={materials.gray}
        />
      </group>
      <group position={[0.776, 1.243, 0.253]} rotation={[-Math.PI, 0, 0]} scale={-1}>
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired011'].geometry}
          material={materials.white}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired011_1'].geometry}
          material={materials.dark_gray}
        />
      </group>
      <group position={[-60.36, 1.33, 89.53]} rotation={[-Math.PI, 0, 0]} scale={-1}>
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired012'].geometry}
          material={materials.white}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired012_1'].geometry}
          material={materials.dark_gray}
        />
      </group>
      <mesh
        
        receiveShadow
        geometry={nodes['leg-7001'].geometry}
        material={materials.green}
        position={[1.129, 1.756, -0.582]}
        rotation={[-Math.PI, 0, 0]}
        scale={-1}
      />
      <group position={[-56.279, 1.835, -48.702]} rotation={[-Math.PI, 0, 0]} scale={-1}>
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired015'].geometry}
          material={materials.white}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired015_1'].geometry}
          material={materials.gray}
        />
      </group>
      <mesh
        
        receiveShadow
        geometry={nodes['side_shield-2-left'].geometry}
        material={materials.white_small}
        position={[7.489, -16.647, 51.116]}
        rotation={[-0.109, 0.722, 0.428]}
      />
      <group position={[-20.244, -26.599, 48.874]} rotation={[-0.109, 0.722, 0.428]}>
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired057'].geometry}
          material={materials.main_blue}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired057_1'].geometry}
          material={materials.white}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired057_2'].geometry}
          material={materials.black}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired057_3'].geometry}
          material={materials.dark_gray}
        />
      </group>
      <group position={[-85.73, -39.543, 5.53]} rotation={[-0.109, 0.722, 0.428]}>
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired061'].geometry}
          material={materials.white}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired061_1'].geometry}
          material={materials.main_blue}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired061_2'].geometry}
          material={materials.black}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired061_3'].geometry}
          material={materials.dark_gray}
        />
      </group>
      <group position={[-103.631, 9.048, 10.197]} rotation={[-0.526, 0.525, 0.263]}>
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired062'].geometry}
          material={materials.main_blue}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired062_1'].geometry}
          material={materials.white}
        />
      </group>
      <group position={[7.608, -16.81, 51.01]} rotation={[-0.109, 0.722, 0.428]}>
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired105'].geometry}
          material={materials.white}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired105_1'].geometry}
          material={materials.dark_gray}
        />
      </group>
      <group position={[6.584, -28.326, 110.185]} rotation={[-0.109, 0.722, 0.428]}>
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired116'].geometry}
          material={materials.white}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired116_1'].geometry}
          material={materials.main_blue}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired116_2'].geometry}
          material={materials.black}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired116_3'].geometry}
          material={materials.dark_gray}
        />
      </group>
      <group position={[-1.52, 0.739, 114.882]} rotation={[-0.109, 0.722, 0.428]}>
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired117'].geometry}
          material={materials.main_blue}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired117_1'].geometry}
          material={materials.white}
        />
      </group>
      <mesh
        
        receiveShadow
        geometry={nodes['side_shield-2-left001'].geometry}
        material={materials.white_small}
        position={[13.805, -6.147, 57.069]}
        rotation={[3.042, 0.584, 0.204]}
        scale={-1}
      />
      <group position={[42.22, -12.005, 51.464]} rotation={[3.042, 0.584, 0.204]} scale={-1}>
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired022'].geometry}
          material={materials.main_blue}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired022_1'].geometry}
          material={materials.white}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired022_2'].geometry}
          material={materials.black}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired022_3'].geometry}
          material={materials.dark_gray}
        />
      </group>
      <group position={[102.081, -20.757, -0.255]} rotation={[3.042, 0.584, 0.204]} scale={-1}>
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired023'].geometry}
          material={materials.white}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired023_1'].geometry}
          material={materials.main_blue}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired023_2'].geometry}
          material={materials.black}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired023_3'].geometry}
          material={materials.dark_gray}
        />
      </group>
      <group position={[110.819, 24.317, -5.088]} rotation={[2.602, 0.447, 0.053]} scale={-1}>
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired025'].geometry}
          material={materials.main_blue}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired025_1'].geometry}
          material={materials.white}
        />
      </group>
      <group position={[13.701, -6.338, 57.003]} rotation={[3.042, 0.584, 0.204]} scale={-1}>
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired026'].geometry}
          material={materials.white}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired026_1'].geometry}
          material={materials.dark_gray}
        />
      </group>
      <group position={[25.119, -9.294, 116.132]} rotation={[3.042, 0.584, 0.204]} scale={-1}>
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired027'].geometry}
          material={materials.white}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired027_1'].geometry}
          material={materials.main_blue}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired027_2'].geometry}
          material={materials.black}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired027_3'].geometry}
          material={materials.dark_gray}
        />
      </group>
      <group position={[31.936, 29.152, 116.728]} rotation={[-2.944, 0.615, -0.2]} scale={-1}>
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired028'].geometry}
          material={materials.main_blue}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired028_1'].geometry}
          material={materials.white}
        />
      </group>
      <group position={[0, 0, -58.502]}>
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired018'].geometry}
          material={materials.white}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired018_1'].geometry}
          material={materials.dark_gray}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired018_2'].geometry}
          material={materials.gray}
        />
      </group>
      <group position={[0, 0, -49.545]}>
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired024'].geometry}
          material={materials.white}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired024_1'].geometry}
          material={materials.dark_gray}
        />
        <mesh
          
          receiveShadow
          geometry={nodes['00Raiser_1-repaired024_2'].geometry}
          material={materials.gray}
        />
      </group>
      <group position={[0, 43.26, -16.484]} rotation={[0.23, 0, 0]}>
        <mesh
          
          receiveShadow
          geometry={nodes.Plane003.geometry}
          material={materials.dark_gray}
        />
        <mesh
          
          receiveShadow
          geometry={nodes.Plane003_1.geometry}
          material={materials.white}
        />
        <mesh
          
          receiveShadow
          geometry={nodes.Plane003_2.geometry}
          material={materials.main_blue}
        />
        <mesh
          
          receiveShadow
          geometry={nodes.Plane003_3.geometry}
          material={materials.gray}
        />
      </group>
      <mesh
        
        receiveShadow
        geometry={nodes['00Raiser_1-repaired142'].geometry}
        material={materials.main_blue}
      />
      <mesh
        
        receiveShadow
        geometry={nodes['00Raiser_1-repaired142_1'].geometry}
        material={materials.Yellow}
      />
      <mesh
        
        receiveShadow
        geometry={nodes['00Raiser_1-repaired142_2'].geometry}
        material={materials.white}
      />
      <mesh
        
        receiveShadow
        geometry={nodes['00Raiser_1-repaired142_3'].geometry}
        material={materials.dark_gray}
      />
      <mesh
        
        receiveShadow
        geometry={nodes['00Raiser_1-repaired142_4'].geometry}
        material={materials.red}
      />
    </group>
  )



}