import textBundle from "../../msgbundle";

const AvailabilityIndicator = ({seekingJob}) => {
    // if you are available for hiring or not
    //Available

  return(

    <div className="flex items-center justify-center">
    {seekingJob ? (
        <>
              <span className="w-3 h-3 me-2 bg-green-600 rounded-full animate-pulse"></span>
              <p>{textBundle["home.available.for.work"]}</p>
        </>
    ) : (
        <>
              <span className="w-3 h-3 me-2 bg-gray-900 rounded-full dark:bg-gray-700"></span>
              <p>{textBundle["home.unavailable.for.work"]}</p>
        </>
    )}
   
  </div>

  )



}

export default AvailabilityIndicator;