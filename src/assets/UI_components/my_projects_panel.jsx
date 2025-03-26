import { useEffect, useState } from "react";
import textBundle from "../../msgbundle";
import leftChevron from '../icons/left-chevron.png'
import rightChevron from '../icons/right-chevron_black.png'
import { motion, AnimatePresence } from "framer-motion";
import projectList from '../../projects'
import { sliderVariants, sliderTransition } from "../../context";



const screenTouchable = window.matchMedia("(any-pointer: coarse)").matches
const isMobile = screenTouchable &&  window.innerHeight < 500;

const NUMBER_OF_VISIBLE_PROJECT_PICTURE = 3

const ProjectDetailSection = ({currentFocusedProject,windowWithSmallHeight, isSmallScreenView }) => {

  const isFypProject =  currentFocusedProject.isFYP;


  const [[pageNumber, direction], setPageNumber] = useState([0,0]);

    
    
  const swipeToPage = swipeDirection => {
      setPageNumber([pageNumber + swipeDirection, swipeDirection])
    }
  


  if(isFypProject && isMobile){
    return (
      <div className="project-details-panel-mobile mt-2 pr-8 not-mobile-fyp">
          <p class='text-black opacity-80 mb-1 font-semibold'>{currentFocusedProject.name}</p>



          <div className="flex flex-col items-center bg-amber-300">
            <div className="relative overflow-hidden">




            <AnimatePresence mode="popLayout" initial={false} custom={direction}>
              <motion.div
                key={pageNumber}
                custom={direction}
                variants={sliderVariants}
                initial="incoming"
                animate="active"
                exit="exit"
                transition={sliderTransition}
              >
                {
                            pageNumber == 0 ?
                            <div className={` dynamic-height-fyp  relative`}>
                            <p >{currentFocusedProject.description}</p>  
                            <div  className="absolute bottom-0 right-4 simple-button cursor-pointer" onClick={() => swipeToPage(1)}>Next..</div> 

                            </div>
                            :
                            <div className={`dynamic-height-fyp relative`}>
                                <p >{currentFocusedProject.description2}</p>
                                <div className='font-bold mt-2'>Tech & concept</div>
                                <div className='grid grid-cols-3 grid-flow-row-dense'>
                                
                                  {currentFocusedProject.tech.map((tech) => {
                                    return(<li>{tech}</li>)
                                  })} 
                              
                                </div>
                                <div  className="absolute bottom-0 right-4 simple-button cursor-pointer" onClick={() => swipeToPage(-1)}>..Prev</div>

                              </div>     
                          }
                </motion.div>
              </AnimatePresence>                 
            </div>
          </div>
      </div>
    );
  }else{
    //if FYP but not on mobile
    if(isFypProject){
      return (
        <div className={`project-details-panel-mobile mt-2 pr-8`} style={isSmallScreenView ? {maxWidth: "65%"} : {maxWidth:"100%"}} >
            <p class='text-black opacity-80 mb-1 font-semibold'>{currentFocusedProject.name}</p>
  

            <div className="flex flex-col  items-center ">
            <div className="relative overflow-hidden">




            <AnimatePresence mode="popLayout" initial={false} custom={direction}>
              <motion.div
                key={pageNumber}
                custom={direction}
                variants={sliderVariants}
                initial="incoming"
                animate="active"
                exit="exit"
                transition={sliderTransition}
              >
              {
                pageNumber == 0 ?
                <div className={`h-40  relative p-4`}>
                                <p >{currentFocusedProject.description}</p>  

                                <div  className="absolute bottom-0 right-4 simple-button cursor-pointer" onClick={() => swipeToPage(1)}>Next..</div> 
                  </div>
                :
                  <div className={`h-40 relative p-4`}>
                    <p >{currentFocusedProject.description2}</p>
                    <div className='font-bold mt-2'>Tech & concept</div>
                    <div className='grid grid-cols-3 grid-flow-row-dense'>
                    
                      {currentFocusedProject.tech.map((tech) => {
                        return(<li>{tech}</li>)
                      })} 
                  
                    </div>
                    <div  className="absolute bottom-0 right-4 simple-button cursor-pointer" onClick={() => swipeToPage(-1)}>..Prev</div>

                  </div>   
              }


              </motion.div>
            </AnimatePresence>
          </div>
        </div>     
      </div>
      );
    }
    return (
      <div class={` mb-2 mt-2 ${isMobile ? "project-details-panel-mobile text-extra-small" : windowWithSmallHeight ? "w-8/12" : ""}`}>
        {currentFocusedProject.companyAttached ?
          <div>
              <p class='text-black opacity-80 mb-1 font-semibold'>{currentFocusedProject.name}</p>
              <p class='text-black opacity-80 mb-1 text-sm'>{textBundle["attached.company"]}{currentFocusedProject.companyName}</p>
  
          </div>
          :
          <p class='text-black opacity-80 mb-1 font-semibold'>{currentFocusedProject.name}</p>
        }
        <p>{currentFocusedProject.description}</p>  
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
      const [windowWithSmallHeight, setWindowWithSmallHeight] = useState(false);

      function checkWindowForSmallHeight(){
        if(window.innerHeight < 600){
          setWindowWithSmallHeight(true);
        }else{
          setWindowWithSmallHeight(false);

        }
      }
      useEffect(() => {

        if(!isMobile){
          window.addEventListener("resize", checkWindowForSmallHeight); // Listen for screen size changes
          checkWindowForSmallHeight();
        }

        //Force reset state when unmounting component
        return () => {
          setProjectObjectListState([...projectList.map(project => ({ ...project }))]);
          window.removeEventListener("resize", checkWindowForSmallHeight);

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
        setCurrentFocusedProject(projectObjectList.find((c) => c.isBeingFocused) );

        
      };
    return(
        <div>
            <div class='z-20 absolute w-full h-full bg-black opacity-30'></div>
            <div class={`absolute ${(isMobile || windowWithSmallHeight) ? "right-8 top-8 my-project-panel-config-mobile text-sm text-extra-small" : "xl:right-30 xl:top-30  lg:right-20 lg:top-20 right-10 top-10 my-project-panel-config w-3/4 text-base" + (!windowWithSmallHeight && " remove-max-height")  } rounded-2xl pt-5`} style={(windowWithSmallHeight && !isMobile) ? {maxHeight:"70vh"} : {}}>   
              
            <div class='panel-close' onClick={closePanelCallbackFunction} >
              <img class='h-4 w-4'  src={leftChevron} alt="" />
              <div>{textBundle["common.back"]}</div>
            </div>

   
              

            <div class={`px-8 pt-2`}>
                <div class={`${isMobile ? "text-base" : "text-xl"} font-semibold`}>{textBundle["my.projects"]}</div>

                {isMobile || windowWithSmallHeight ?  
                <div className="flex items-center" style={{height: "60vh", width: "100%"}}>
                  <div className='flex' style={{width: "95%", height:"100%"}}>
                    <ProjectDetailSection className={windowWithSmallHeight && "w-10"} currentFocusedProject={currentFocusedProject} windowWithSmallHeight={windowWithSmallHeight} isSmallScreenView={true}></ProjectDetailSection>

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
                    <div className="w-2"></div>
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
                    <ProjectDetailSection currentFocusedProject={currentFocusedProject} isSmallScreenView={false}></ProjectDetailSection>
                  </>
                </>
                }
            </div> 
        </div>
        </div>
        
    )
}

export default MyProjectsPanel;
