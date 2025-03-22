import { useState } from 'react';
import { motion } from "motion/react";
import textBundle from '../../msgbundle';
import monitor from '../icons/monitor.png'


const TutorialPopup = ({closeTutorialCallback}) =>{
    const [pageNumber, setPageNumber] = useState(0);
    
    return(
        <div className="z-50 w-full h-screen overflow-hidden standard-dark-gray flex items-center justify-center flex-col text-white">
            <div className="flex">
                {pageNumber == 1 ? 
                    <motion.div 
                        className='pt-10 w-10 flex' onClick={() => setPageNumber(0)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        >
                            Prev
                        </motion.div>
                    : 
                    <div className='w-10'/> 
                }
                      
                <div className="w-5"></div>
                <div className='tutorial-image-container'>
                    {pageNumber == 0 ?  
                        <motion.img 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            src={monitor}
                        />
                        :
                         <motion.div 
                            className='swipe-icon'
                            initial={{ x:20, opacity: 0.3 }}
                            animate={{ x:-20, opacity: 1 }}
                            transition={{ duration: 0.7, repeat:Infinity, repeatType:"loop", repeatDelay:1, ease: "linear" }}
                         />
                         }
                </div>

                <div className="w-5"></div>
                {pageNumber == 0 ? 
                    <motion.div 
                        className='pt-7 w-10 flex' onClick={() => setPageNumber(1)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        >
                        Next
                        </motion.div>
                    :
                    <div className='w-10'/>
                }
                
            </div>
            <div className="h-4"></div>
            <div className='max-w-sm text-center h-10'>
                {
                pageNumber == 0 ? 
                    textBundle["pc.for.more.interactive.experience"] 
                    : 
                    textBundle["background.model.movable"]
                }         
            </div>     

            {/* Button to close tutorial on the second page */}
            {pageNumber == 1 && 
                <div 
                    class="standard-button text-white bg-transparent border-2 border-white focus:outline-none  hover:text-white focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-6 py-1 cursor-pointer"
                    onClick={closeTutorialCallback}
                >
                    {textBundle["common.got.it"]}
                </div>                   
            }
        </div>
    )
}


export default TutorialPopup;