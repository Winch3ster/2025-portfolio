
import { useState, useEffect, useRef } from "react";
import '../playground.css'
import arc from '../assets/icons/arc.png'
import { useFrame, useThree } from "@react-three/fiber";
import AboutMePanel from "../assets/UI_components/about_me_panel";
import MyProjectsPanel from "../assets/UI_components/my_projects_panel";
import NotificationPanel from "../assets/UI_components/notification";
import textBundle from "../msgbundle";
import effect from '../assets/icons/effect.png'

const ToPleaseReact= () =>{
    const { camera, mouse } = useThree()

    function CalculateDegree(x){

        
        Math.tan(x);
    }
   

    useFrame(() => {
        console.log(mouse.x);
        console.log(mouse.y)
      })  


      return(<div>a</div>)
}



function PlaygroundPage() {

    const closeNotificationCallback = () =>{
        console.log("closing notification panel")
    }
    return (


<div className='w-full h-screen overflow-hidden bg-gray-950'>
        <NotificationPanel closeNotificationCallback={closeNotificationCallback} content={textBundle["notification.effect.composer"]} icon={effect}></NotificationPanel>

</div>
    )
}

export default PlaygroundPage;





/*



   function radians_to_degrees(radians)
   {
    var pi = Math. PI;
    return radians * (180/pi);
   }

   var screenWidth = window.innerWidth;
   var screenHeight = window.innerHeight;
   var global_rad;
   var globalx;
   var globaly;
   var globalAngleOfRotation;
   const circleRef = useRef(null);
  const [angle, setAngle] = useState(0);


    useEffect(() => {
         screenWidth = window.innerWidth;
         screenHeight = window.innerHeight;

        const handleMouseMove = (event) => {
          //if (!circleRef.current) return;
    
          //const rect = circleRef.current.getBoundingClientRect();
          //const centerX = rect.left + rect.width / 2;
          //const centerY = rect.top + rect.height / 2;
            const coordinateX = event.clientX - (screenWidth/2);
            const coordinateY = event.clientY - (screenHeight/2);

            var angleOfRotation = 0;
            console.log("--------------")
            //quadrants 
            if(coordinateX >= 0 && coordinateY < 0){ //top right, quadrant 4 
                console.log("In Quadrant 4")
                var radian = Math.atan(Math.abs( coordinateY)/Math.abs(coordinateX));

                global_rad = radian;
                console.log("radian")
                console.log(radian)
                angleOfRotation = radians_to_degrees(radian) + 270;


            }else if(coordinateX < 0 && coordinateY < 0){ //top left, quadrant 1 

                console.log("In Quadrant 1")

                var radian = Math.atan(Math.abs(coordinateX)/ Math.abs( coordinateY));
                global_rad = radian;
                angleOfRotation = radians_to_degrees(radian);
                console.log("radian")
                console.log(radian)
            }else if(coordinateX < 0 && coordinateY >= 0){ //bottom left, quadrant 2 

                console.log("In Quadrant 2")

                var radian = Math.atan(Math.abs( coordinateY)/Math.abs(coordinateX));
                global_rad = radian;
                angleOfRotation = radians_to_degrees(radian) + 90;
                console.log("radian")
                console.log(radian)

            }else{ //bottom right, quadrant 3

                console.log("In Quadrant 3")
                var radian = Math.atan(Math.abs(coordinateX)/Math.abs( coordinateY));
                global_rad = radian;
                angleOfRotation = radians_to_degrees(radian) + 180;
                console.log("radian")
                console.log(radian)
            }
            globalAngleOfRotation = angleOfRotation;

            setAngle(angleOfRotation);
            
            console.log("coordinateX");
            console.log(coordinateX)
            console.log("coordinateY");
            console.log(coordinateY)
            console.log("angleOfRotation");
            console.log(angleOfRotation)
            console.log("--------------")
            
          //const newAngle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
    
          //setAngle(newAngle);
        };
    
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
      }, []);

  
    return (
        <div>
            <div className="bg-black w-full awd">
                <div>
                <img ref={circleRef} style={{ "--angle": `-${angle}deg` }} className="circle" src={arc} alt="" />
                <div class="text-white">
                    <p>global rad: {global_rad}</p>
                    <p>x coor: {global_rad}</p>
                    <p>y coor: {global_rad}</p>
                   
                </div>
                </div>
               

            </div>
           
        </div>
        
      
    );



*/