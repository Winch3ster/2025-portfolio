import { useEffect, useState } from "react";
import textBundle from "../../msgbundle";
import leftChevron from '../icons/left-chevron.png'
import rightChevron from '../icons/right-chevron_black.png'
import { motion, AnimatePresence } from "framer-motion";
import projectList from '../../projects'



const isMobile = window.matchMedia("(any-pointer: coarse)").matches &&  window.innerHeight < 500;

const NUMBER_OF_VISIBLE_PROJECT_PICTURE = 3

const ProjectPictureComponent = ({isFocused, imageUrl}) =>{

    return (
        <div class={` bg-gray-600 rounded-2xl ${isFocused ? "h-36 w-56" : "h-28 w-44"} mr-10`}
        style={{ backgroundImage: `url("../projects/fsmone.jpg")`, backgroundSize: "contain", backgroundPosition: "center" }}
        ></div>
    )
}

const ProjectDetailSection = ({currentFocusedProject}) => {

  const isFypProject =  currentFocusedProject.isFYP;
  const [page, setPage] = useState(0);

  if(isFypProject && isMobile){
    return (
      <div className="project-details-panel-mobile mt-2 pr-8">
          <p class='text-black opacity-80 mb-1 font-semibold'>{currentFocusedProject.name}</p>

          {
            page == 0 ?
             <p >{currentFocusedProject.description}</p>  
            :
              <div>
                <p >{currentFocusedProject.description2}</p>
                <div className='font-bold mt-2'>Tech & concept</div>
                <div className='grid grid-cols-3 grid-flow-row-dense'>
                
                  {currentFocusedProject.tech.map((tech) => {
                    return(<li>{tech}</li>)
                  })} 
              
                </div>
              </div>
              
          }

        
          <div className='flex justify-end font-bold'>
            { page == 0 ?

              <div onClick={() => setPage(1)}>Next..</div> 
              :
              <div onClick={() => setPage(0)}>..Prev</div>
            }
         </div>

          
      </div>
    );
  }else{
    return (
      <div class={` mb-2 mt-2 ${isMobile ? "project-details-panel-mobile" : ""}`}>
        {currentFocusedProject.companyAttached ?
          <div>
              <p class='text-black opacity-80 mb-1 font-semibold'>{currentFocusedProject.name}</p>
              <p class='text-black opacity-80 mb-1 text-sm'>{textBundle["attached.company"]}{currentFocusedProject.companyName}</p>
  
          </div>
          :
          <p class='text-black opacity-80 mb-1 font-semibold'>{currentFocusedProject.name}</p>
        }
        <p >{currentFocusedProject.description}</p>  
        <div className='font-bold mt-2'>Tech & concept</div>
        <div className='grid grid-cols-3 grid-flow-row-dense'>
         
          {currentFocusedProject.tech.map((tech) => {
            return(<li>{tech}</li>)
          })} 
       
          
        </div>
      </div>);
  }
  
  


}

const MyProjectsPanel = ({closePanelCallbackFunction, isParentAnimationDone}) => {


      const [projectObjectList, setProjectObjectListState] = useState(projectList);
      const [currentFocusedProject, setCurrentFocusedProject] = useState(projectObjectList.find((c) => c.isBeingFocused));

      useEffect(() => {
        //Force reset state when unmounting component
        return () => {
          setProjectObjectListState([...projectList.map(project => ({ ...project }))]);
        };
      }, []);


      const nextSlide = () => {
        setProjectObjectListState((prev) => {
          var temp = prev;
          var firstElement = temp[0];

          firstElement.isVisible = false;
          firstElement.isBeingFocused = false;

          temp[1].isBeingFocused = true;

          temp[NUMBER_OF_VISIBLE_PROJECT_PICTURE].isVisible = true;
 
          temp = temp.slice(1);
          temp.push(firstElement)
       
          return temp;
        })
        console.log("next is clicked")
        setCurrentFocusedProject(projectObjectList.find((c) => c.isBeingFocused) );

        
      };
    return(
        <div>
            <div class='z-20 absolute w-full h-full bg-black opacity-30'></div>
            <div class={`absolute ${isMobile ? "right-8 top-8 about-me-panel-config-mobile text-sm" : " right-30 top-30 about-me-panel-config w-3/4 h-3/4 text-base"} rounded-2xl pt-5`}>   
              
            <div class='panel-close' onClick={closePanelCallbackFunction} >
              <img class='h-4 w-4'  src={leftChevron} alt="" />
              <div>{textBundle["common.back"]}</div>
            </div>

   
              

            <div class="px-8 pt-2">
                <div class={`${isMobile ? "text-base" : "text-xl"} font-semibold`}>{textBundle["my.projects"]}</div>

                {isMobile ?  
                <div className="flex items-center" style={{height: "60vh", width: "100%"}}>
                  <div className='flex' style={{width: "95%", height:"100%"}}>
                    <ProjectDetailSection currentFocusedProject={currentFocusedProject}></ProjectDetailSection>

                    <div className="w-10"></div>

                    {/* THIS IS FOR THE PROJECT PICTURE SLIDE SHOW */}

                    <div id="project-slide-show-container" class="py-2 grid grid-cols-2 gap-4 overflow-hidden">

                      {isParentAnimationDone && (
                        <AnimatePresence mode="popLayout">


                            {projectObjectList.map((block) => {                       
                              if(block.isVisible ){

                                return (<motion.div
                                  key={block.id}
                                  class={`shadow-lg rounded-md ${block.isBeingFocused ? "h-32 w-40 col-span-2" : "h-12 w-24"} mr-10`}             
                                  style={{ backgroundImage: `url(${block.image})`, backgroundSize: "cover", backgroundPosition: "center" }}

                                  initial={{ x: 200, opacity: 1 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  exit={{ x: -200, opacity: 0 }}
                                  transition={{ duration: 0.5 }}
                                  layout
                                >
                                  
                                </motion.div>)
                              }
                            }
                          )}
                            
                        </AnimatePresence>)}
                      </div>
                    </div>

                    <div className="w-7 h-16 rounded-2xl flex justify-center items-center cursor-pointer next-project-btn" onClick={nextSlide}>
                      <img src={rightChevron} alt="" />
                    </div>

                  </div>
                :
                <>
                  <div id="project-slide-show-container" class="py-2 flex items-center justify-between overflow-hidden">
        
                      <div class="overflow-hidden flex">
                      {isParentAnimationDone && (
                        <AnimatePresence mode="popLayout">
                            {projectObjectList.map((block) => {                       
                              if(block.isVisible ){
                                return (<motion.div
                                  key={block.id}
                                  class={` rounded-2xl ${block.isBeingFocused ? "h-36 w-56" : "h-28 w-44"} mr-10`}             
                                  style={{ backgroundImage: `url(${block.image})`, backgroundSize: "cover", backgroundPosition: "center" }}

                                  initial={{ x: 200, opacity: 1 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  exit={{ x: -200, opacity: 0 }}
                                  transition={{ duration: 0.5 }}
                                  layout
                                >
                                  
                                </motion.div>)
                              }
                            }
                          )}
                            
                        </AnimatePresence>)}
                      </div>

                      <div className="w-7 h-16 rounded-2xl flex justify-center items-center cursor-pointer next-project-btn" onClick={nextSlide}>
                          <img src={rightChevron} alt="" />
                      </div>
              
                  </div>

                  <>
                    <ProjectDetailSection currentFocusedProject={currentFocusedProject}></ProjectDetailSection>
                  </>
                </>
                }
            </div> 
        </div>
        </div>
        
    )
}

export default MyProjectsPanel;
