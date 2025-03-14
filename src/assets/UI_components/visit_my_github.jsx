

/*
 This section will stay on screen, but when cursor is hovered over an indicator,
 this section will close with animation
*/


const ExploreGithubSection = () => {

    return (
        <div class="absolute right-0 bottom-0 h- mr-30 mb-30">
            <div class="text-end">Interested?</div>
            
            <div class="pt-0.5">
                <p class="text-2xl">Explore My Work on GitHub</p>
                
                <div class="flex justify-end">
                <button type="button" class="text-black bg-transparent border-2 border-black focus:outline-none hover:bg-black hover:text-white focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-10 py-5 me-2 mb-2 mt-3 cursor-pointer">Explore</button>

                </div>

            </div>
           
                
        
        </div>


    )

}


export default ExploreGithubSection;