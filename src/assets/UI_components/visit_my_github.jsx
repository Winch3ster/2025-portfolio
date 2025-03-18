

/*
 This section will stay on screen, but when cursor is hovered over an indicator,
 this section will close with animation
*/


const ExploreGithubSection = () => {

    return (
        <div class="absolute z-20 right-0 bottom-0 mr-20 mb-15 py-10 px-5">
            <div class="text-end">One creation at a time</div>
            
            <div class="pt-0.5">
                <p class="text-4xl text-end font-normal text-gray-950">Turning Ideas into Reality<br></br>Software, Art & Simulations</p>
                
                <div class="flex justify-end">
                <button type="button" class="standard-button text-black bg-transparent border-2 border-black focus:outline-none hover:bg-black hover:text-white focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-10 py-3 me-2 mb-2 mt-3 mr-8 cursor-pointer">Github</button>
            
                <button type="button" class="standard-button text-black bg-transparent border-2 border-black focus:outline-none hover:bg-black hover:text-white focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-10 py-3 me-2 mb-2 mt-3 cursor-pointer">Resume</button>

                </div>

            </div>
           
                
        
        </div>


    )

}


export default ExploreGithubSection;