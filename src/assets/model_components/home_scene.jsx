import React, { useEffect, useRef } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'

//position={[1,-5.5,-93]
export const Home_scene = ({...props}) => {
    const group = useRef()
    
    const { nodes, materials,animations } = useGLTF(
      "./src/assets/models/17_march_OO_raiser_portfolio_final_version_compression_blue_color_fixed.glb"

    );
    const { actions } = useAnimations(animations, group);

    
    useEffect(() => {
        const animationList = Object.keys(actions);
        //actions["bodyAction"].play();
        animationList.forEach(animation => {
            actions[animation].play();
        });
        
      });
      return (
        <group ref={group} {...props} dispose={null} position={[1,-5.5,-93]}>
          <group name="Scene">
            <group name="left_leg">
              <mesh
                name="00Raiser_1-repaired084"
                
                receiveShadow
                geometry={nodes['00Raiser_1-repaired084'].geometry}
                material={materials.white}
              
              />
              <mesh
                name="00Raiser_1-repaired084_1"
                
                receiveShadow
                geometry={nodes['00Raiser_1-repaired084_1'].geometry}
                material={materials.dark_gray}
              />
              <mesh
                name="00Raiser_1-repaired084_2"
                
                receiveShadow
                geometry={nodes['00Raiser_1-repaired084_2'].geometry}
                material={materials.gray}
              />
              <mesh
                name="00Raiser_1-repaired084_3"
                
                receiveShadow
                geometry={nodes['00Raiser_1-repaired084_3'].geometry}
                material={materials.green}
              />
              <mesh
                name="00Raiser_1-repaired084_4"
                
                receiveShadow
                geometry={nodes['00Raiser_1-repaired084_4'].geometry}
                material={materials.red}
              />
              <mesh
                name="00Raiser_1-repaired084_5"
                
                receiveShadow
                geometry={nodes['00Raiser_1-repaired084_5'].geometry}
                material={materials.white_small}
              />
            </group>
            <group name="gn_drives">
              <mesh
                name="00Raiser_1-repaired021"
                
                receiveShadow
                geometry={nodes['00Raiser_1-repaired021'].geometry}
                material={materials.white_small}
              />
              <mesh
                name="00Raiser_1-repaired021_1"
                
                receiveShadow
                geometry={nodes['00Raiser_1-repaired021_1'].geometry}
                material={materials.dark_gray}
              />
              <mesh
                name="00Raiser_1-repaired021_2"
                
                receiveShadow
                geometry={nodes['00Raiser_1-repaired021_2'].geometry}
                material={materials.main_blue}
              />
              <mesh
                name="00Raiser_1-repaired021_3"
                
                receiveShadow
                geometry={nodes['00Raiser_1-repaired021_3'].geometry}
                material={materials.white}
              />
              <mesh
                name="00Raiser_1-repaired021_4"
                
                receiveShadow
                geometry={nodes['00Raiser_1-repaired021_4'].geometry}
                material={materials.black}
              />
              <mesh
                name="00Raiser_1-repaired021_5"
                
                receiveShadow
                geometry={nodes['00Raiser_1-repaired021_5'].geometry}
                material={materials.green}
              />
              <mesh
                name="00Raiser_1-repaired021_6"
                
                receiveShadow
                geometry={nodes['00Raiser_1-repaired021_6'].geometry}
                material={materials.gray}
              />
            </group>
            <group name="body">
              <mesh
                name="Plane004_1"
                
                receiveShadow
                geometry={nodes.Plane004_1.geometry}
                material={materials.Yellow}
              />
              <mesh
                name="Plane004_2"
                
                receiveShadow
                geometry={nodes.Plane004_2.geometry}
                material={materials.main_blue}
                
              />

              <mesh
                name="Plane004_3"
                
                receiveShadow
                geometry={nodes.Plane004_3.geometry}
                material={materials.white}
              />
              <mesh
                name="Plane004_4"
                
                receiveShadow
                geometry={nodes.Plane004_4.geometry}
                material={materials.red}
              />
              <mesh
                name="Plane004_5"
                
                receiveShadow
                geometry={nodes.Plane004_5.geometry}
                material={materials.orange}
              />
              <mesh
                name="Plane004_6"
                
                receiveShadow
                geometry={nodes.Plane004_6.geometry}
                material={materials.dark_gray}
              />
              <mesh
                name="Plane004_7"
                
                receiveShadow
                geometry={nodes.Plane004_7.geometry}
                material={materials.gray}
              />
              <mesh
                name="Plane004_8"
                
                receiveShadow
                geometry={nodes.Plane004_8.geometry}
                material={materials.green}
              />
              <mesh
                name="Plane004_9"
                
                receiveShadow
                geometry={nodes.Plane004_9.geometry}
                material={materials.black}
              />
              <mesh
                name="Plane004_10"
                
                receiveShadow
                geometry={nodes.Plane004_10.geometry}
                material={materials.glossy_red}
              />
              <mesh
                name="Plane004_11"
                
                receiveShadow
                geometry={nodes.Plane004_11.geometry}
                material={materials.white_small}
              />
            </group>
            <group name="left_hand">
              <mesh
                name="00Raiser_1-repaired031"
                
                receiveShadow
                geometry={nodes['00Raiser_1-repaired031'].geometry}
                material={materials.dark_gray}
              />
              <mesh
                name="00Raiser_1-repaired031_1"
                
                receiveShadow
                geometry={nodes['00Raiser_1-repaired031_1'].geometry}
                material={materials.main_blue}
              />
              <mesh
                name="00Raiser_1-repaired031_2"
                
                receiveShadow
                geometry={nodes['00Raiser_1-repaired031_2'].geometry}
                material={materials.white}
              />
              <mesh
                name="00Raiser_1-repaired031_3"
                
                receiveShadow
                geometry={nodes['00Raiser_1-repaired031_3'].geometry}
                material={materials.white_shading}
              />
              <mesh
                name="00Raiser_1-repaired031_4"
                
                receiveShadow
                geometry={nodes['00Raiser_1-repaired031_4'].geometry}
                material={materials.gray}
              />
            </group>
            <group name="right_hand">
              <mesh
                name="00Raiser_1-repaired041"
                
                receiveShadow
                geometry={nodes['00Raiser_1-repaired041'].geometry}
                material={materials.dark_gray}
              />
              <mesh
                name="00Raiser_1-repaired041_1"
                
                receiveShadow
                geometry={nodes['00Raiser_1-repaired041_1'].geometry}
                material={materials.main_blue}
              />
              <mesh
                name="00Raiser_1-repaired041_2"
                
                receiveShadow
                geometry={nodes['00Raiser_1-repaired041_2'].geometry}
                material={materials.white}
              />
              <mesh
                name="00Raiser_1-repaired041_3"
                
                receiveShadow
                geometry={nodes['00Raiser_1-repaired041_3'].geometry}
                material={materials.white_shading}
              />
              <mesh
                name="00Raiser_1-repaired041_4"
                
                receiveShadow
                geometry={nodes['00Raiser_1-repaired041_4'].geometry}
                material={materials.gray}
              />
            </group>
            <group name="shoulder">
              <mesh
                name="00Raiser_1-repaired042"
                
                receiveShadow
                geometry={nodes['00Raiser_1-repaired042'].geometry}
                material={materials.dark_gray}
              />
              <mesh
                name="00Raiser_1-repaired042_1"
                
                receiveShadow
                geometry={nodes['00Raiser_1-repaired042_1'].geometry}
                material={materials.main_blue}
              />
              <mesh
                name="00Raiser_1-repaired042_2"
                
                receiveShadow
                geometry={nodes['00Raiser_1-repaired042_2'].geometry}
                material={materials.white}
              />
            </group>
            <group name="Cube">
              <mesh
                name="Cube004_1"
                
                receiveShadow
                geometry={nodes.Cube004_1.geometry}
                material={materials.main_white}
              />
              <mesh
                name="Cube004_2"
                
                receiveShadow
                geometry={nodes.Cube004_2.geometry}
                material={materials.main_gray}
              />
            </group>
            <group name="Plane004">
              <mesh
                name="Plane005_1"
                
                receiveShadow
                geometry={nodes.Plane005_1.geometry}
                material={materials.main_gray}
              />
              <mesh
                name="Plane005_2"
                
                receiveShadow
                geometry={nodes.Plane005_2.geometry}
                material={materials.main_white}
              />
            </group>
            <group name="Plane005">
              <mesh
                name="Plane006_1"
                
                receiveShadow
                geometry={nodes.Plane006_1.geometry}
                material={materials.main_gray}
              />
              <mesh
                name="Plane006_2"
                
                receiveShadow
                geometry={nodes.Plane006_2.geometry}
                material={materials.main_white}
              />
            </group>
            <group name="Cube001">
              <mesh
                name="Cube005"
                
                receiveShadow
                geometry={nodes.Cube005.geometry}
                material={materials.standard_dark_gray}
              />
              <mesh
                name="Cube005_1"
                
                receiveShadow
                geometry={nodes.Cube005_1.geometry}
                material={materials.main_white}
              />
            </group>
            <group name="Cube002">
              <mesh
                name="Cube006"
                
                receiveShadow
                geometry={nodes.Cube006.geometry}
                material={materials.standard_dark_gray}
              />
              <mesh
                name="Cube006_1"
                
                receiveShadow
                geometry={nodes.Cube006_1.geometry}
                material={materials.main_white}
              />
            </group>
            <group name="Cube003">
              <mesh
                name="Cube007"
                
                receiveShadow
                geometry={nodes.Cube007.geometry}
                material={materials.main_white}
              />
              <mesh
                name="Cube007_1"
                
                receiveShadow
                geometry={nodes.Cube007_1.geometry}
                material={materials.main_gray}
              />
            </group>
            <mesh
              name="Cube008"
              
              receiveShadow
              geometry={nodes.Cube008.geometry}
              material={materials.standard_dark_gray}
            />
            <mesh
              name="Plane006"
              
              receiveShadow
              geometry={nodes.Plane006.geometry}
              material={materials.main_white}
            />
            <mesh
              name="Plane008"
              
              receiveShadow
              geometry={nodes.Plane008.geometry}
              material={materials.main_white}
            />
            <mesh
              name="Cylinder003"
              
              receiveShadow
              geometry={nodes.Cylinder003.geometry}
              material={materials.standard_dark_gray}
            />
            <mesh
              name="Plane009"
              
              receiveShadow
              geometry={nodes.Plane009.geometry}
              material={materials.main_white}
            />
            <mesh
              name="Cube011"
              
              receiveShadow
              geometry={nodes.Cube011.geometry}
              material={materials.main_white}
            />
            <mesh
              name="Plane012"
              
              receiveShadow
              geometry={nodes.Plane012.geometry}
              material={materials.main_white}
            />
            <mesh
              name="Plane013"
              
              receiveShadow
              geometry={nodes.Plane013.geometry}
              material={materials.main_white}
            />
            <mesh
              name="Plane014"
              
              receiveShadow
              geometry={nodes.Plane014.geometry}
              material={materials.main_white}
            />
            <mesh
              name="Cube014"
              
              receiveShadow
              geometry={nodes.Cube014.geometry}
              material={materials.main_white}
            />
            <group name="Plane015">
              <mesh
                name="Plane016_1"
                
                receiveShadow
                geometry={nodes.Plane016_1.geometry}
                material={materials.main_gray}
              />
              <mesh
                name="Plane016_2"
                
                receiveShadow
                geometry={nodes.Plane016_2.geometry}
                material={materials.main_white}
              />
            </group>
            <group name="Plane016">
              <mesh
                name="Plane017_1"
                
                receiveShadow
                geometry={nodes.Plane017_1.geometry}
                material={materials.main_gray}
              />
              <mesh
                name="Plane017_2"
                
                receiveShadow
                geometry={nodes.Plane017_2.geometry}
                material={materials.main_white}
              />
            </group>
            <group name="Plane017">
              <mesh
                name="Plane018"
                
                receiveShadow
                geometry={nodes.Plane018.geometry}
                material={materials.main_gray}
              />
              <mesh
                name="Plane018_1"
                
                receiveShadow
                geometry={nodes.Plane018_1.geometry}
                material={materials.main_white}
              />
            </group>
            <mesh
              name="Plane001"
              
              receiveShadow
              geometry={nodes.Plane001.geometry}
              material={materials.main_white}
            />
            <mesh
              name="Cube015"
              
              receiveShadow
              geometry={nodes.Cube015.geometry}
              material={materials.main_white}
            />
            <mesh
              name="Plane002"
              
              receiveShadow
              geometry={nodes.Plane002.geometry}
              material={materials.main_white}
            />
            <mesh
              name="Cube016"
              
              receiveShadow
              geometry={nodes.Cube016.geometry}
              material={materials.main_white}
            />
            <mesh
              name="Cube017"
              
              receiveShadow
              geometry={nodes.Cube017.geometry}
              material={materials.main_white}
            />
            <mesh
              name="Cube018"
              
              receiveShadow
              geometry={nodes.Cube018.geometry}
              material={materials.main_white}
            />
            <group name="0_Hangar">
              <mesh
                name="Cylinder003_1"
                
                receiveShadow
                geometry={nodes.Cylinder003_1.geometry}
                material={materials.hangar_base}
              />
              <mesh
                name="Cylinder003_2"
                
                receiveShadow
                geometry={nodes.Cylinder003_2.geometry}
                material={materials.hangar_tile}
              />
              <mesh
                name="Cylinder003_3"
                
                receiveShadow
                geometry={nodes.Cylinder003_3.geometry}
                material={materials.light}
              />
            </group>
            <group name="Cube009">
              <mesh
                name="Cube009_1"
                
                receiveShadow
                geometry={nodes.Cube009_1.geometry}
                material={materials.main_white}
              />
              <mesh
                name="Cube009_2"
                
                receiveShadow
                geometry={nodes.Cube009_2.geometry}
                material={materials.main_gray}
              />
            </group>
            <mesh
              name="Cube004"
              
              receiveShadow
              geometry={nodes.Cube004.geometry}
              material={materials.main_white}
            />
            <mesh
              name="Cylinder015"
              
              receiveShadow
              geometry={nodes.Cylinder015.geometry}
              material={materials.main_gray}
            />
            <mesh
              name="Cylinder017"
              
              receiveShadow
              geometry={nodes.Cylinder017.geometry}
              material={materials.standard_dark_gray}
            />
            <mesh
              name="Cylinder021"
              
              receiveShadow
              geometry={nodes.Cylinder021.geometry}
              material={materials.standard_dark_gray}
            />
            <mesh
              name="Cylinder022"
              
              receiveShadow
              geometry={nodes.Cylinder022.geometry}
              material={materials.standard_dark_gray}
            />
            <group name="Cylinder023">
              <mesh
                name="Cylinder033_1"
                
                receiveShadow
                geometry={nodes.Cylinder033_1.geometry}
                material={materials.main_white}
              />
              <mesh
                name="Cylinder033_2"
                
                receiveShadow
                geometry={nodes.Cylinder033_2.geometry}
                material={materials.main_gray}
              />
            </group>
            <group name="Cylinder024">
              <mesh
                name="Cylinder024_1"
                
                receiveShadow
                geometry={nodes.Cylinder024_1.geometry}
                material={materials.main_white}
              />
              <mesh
                name="Cylinder024_2"
                
                receiveShadow
                geometry={nodes.Cylinder024_2.geometry}
                material={materials.main_gray}
              />
            </group>
            <group name="Cylinder025">
              <mesh
                name="Cylinder025_1"
                
                receiveShadow
                geometry={nodes.Cylinder025_1.geometry}
                material={materials.main_white}
              />
              <mesh
                name="Cylinder025_2"
                
                receiveShadow
                geometry={nodes.Cylinder025_2.geometry}
                material={materials.main_gray}
              />
            </group>
            <mesh
              name="Cylinder033"
              
              receiveShadow
              geometry={nodes.Cylinder033.geometry}
              material={materials.main_white}
            />
            <group name="Plane007">
              <mesh
                name="Plane051"
                
                receiveShadow
                geometry={nodes.Plane051.geometry}
                material={materials.main_white}
              />
              <mesh
                name="Plane051_1"
                
                receiveShadow
                geometry={nodes.Plane051_1.geometry}
                material={materials.main_gray}
              />
              <mesh
                name="Plane051_2"
                
                receiveShadow
                geometry={nodes.Plane051_2.geometry}
                material={materials.standard_dark_gray}
              />
            </group>
            <group name="Plane025">
              <mesh
                name="Plane032"
                
                receiveShadow
                geometry={nodes.Plane032.geometry}
                material={materials.main_white}
              />
              <mesh
                name="Plane032_1"
                
                receiveShadow
                geometry={nodes.Plane032_1.geometry}
                material={materials.main_gray}
              />
            </group>
            <group name="Plane027">
              <mesh
                name="Plane034"
                
                receiveShadow
                geometry={nodes.Plane034.geometry}
                material={materials.main_gray}
              />
              <mesh
                name="Plane034_1"
                
                receiveShadow
                geometry={nodes.Plane034_1.geometry}
                material={materials.main_white}
              />
            </group>
            <group name="Plane028">
              <mesh
                name="Plane035"
                
                receiveShadow
                geometry={nodes.Plane035.geometry}
                material={materials.main_white}
              />
              <mesh
                name="Plane035_1"
                
                receiveShadow
                geometry={nodes.Plane035_1.geometry}
                material={materials.standard_dark_gray}
              />
            </group>
            <group name="Plane030">
              <mesh
                name="Plane037"
                
                receiveShadow
                geometry={nodes.Plane037.geometry}
                material={materials.main_gray}
              />
              <mesh
                name="Plane037_1"
                
                receiveShadow
                geometry={nodes.Plane037_1.geometry}
                material={materials.main_white}
              />
            </group>
            <mesh
              name="Plane042"
              
              receiveShadow
              geometry={nodes.Plane042.geometry}
              material={materials.main_white}
            />
            <mesh
              name="Plane043"
              
              receiveShadow
              geometry={nodes.Plane043.geometry}
              material={materials.main_gray}
            />
          </group>
        </group>
      )


}
