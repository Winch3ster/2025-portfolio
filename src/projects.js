import fsm from './assets/projects/fsmone.jpg';
import fyp from './assets/projects/fyp.jpg';
import vendor from './assets/projects/citisoftApp.jpg'
import preInterview from './assets/projects/intergence.jpg'
import gasStationSimulation from './assets/projects/brokerPetrol.jpg'
import bitsey from './assets/projects/bitsey.jpg'
import forza from './assets/projects/2d_forza.jpg'
import drawingApplication from './assets/projects/drawingApplication.jpg'

const projects = [
    {
        id:0,
        companyAttached : true,
        companyName: "iFAST Global Hub",
        name:"FSMOne Mobile App Singapore Region",
        description: "Assisted in the feature development and maintenance of FSMOne mobile app in Singapore region. FSMOne is an investment platform to empower investors in Singapore, Hong Kong and Malaysia to invest in transparent investment products such as stocks, ETFs, funds, bonds and foreign exchange.",
        githubLink: "",
        image: fsm,
        isVisible:true, 
        isBeingFocused:true,
        tech: ["Flutter", "IOS"] 
    },
    {
        id:1,
        companyAttached : false,
        companyName: "",
        name:"Wav2Vec: A Potential Automation for Facial lip-syncing Animation",
        isFYP: true,
        description: "This study explores the use of deep learning techniques, specifically the Wav2Vec model, to automate the generation of facial animations from audio inputs. By leveraging a fine-tuned phoneme recognition model and the blendshapes technique, it maps audio signals to corresponding viseme sequences in real time, enabling seamless lip-syncing.",
        description2: "To demonstrate the results, Meta's Wav2Vec AI model was fine-tuned using TIMIT dataset, and a Unity-based program is developed.",
        githubLink: "",
        image: fyp,
        isVisible:true, 
        isBeingFocused:false,
        tech: ["Unity", "Blender", "C#", "Python", "Tensorflow", "Flask"],
    },
    {
        id:2,
        companyAttached : true,
        companyName: "CitiSoft Inc",
        name:"Vendor Application Inventory Platform",
        type: "Industry-partnered assignment",
        description: " An inventory software developed using C# ASP.NET CORE framework based on the case study given by Citisoft Inc (Business management consultant in Boston, Massachusetts) ",
        githubLink: "https://github.com/Winch3ster/Vendor-Application-Inventory-Platform",
        image: vendor,
        isVisible:true, 
        isBeingFocused:false,
        tech: ["C#", ".NET CORE"]
    },
    {
        id:3,
        companyAttached : true,
        companyName: "Intergence (Pampisford, England)",
        name:"Pre-Interview candidate selection system",
        type: "Industry-partnered assignment",
        description: "An application system developed using Vaadin framework to streamline the hiring process by pre-screening candidates with a series of questions set by the human resource team. The system allows customization of question types and provide a way to score candidate responses.",
        githubLink: "https://github.com/Winch3ster/Broker-Petrol",
        image: preInterview,
        isVisible:false, 
        isBeingFocused:false,
        tech: ["Vaadin", "Java"]
    },


    {
        id:4,
        companyAttached : false,
        companyName: "",
        name:"Gas Station Simulation",
        type: "Software Assignment",
        description: " Designed, implemented, and tested, an automated demo of a Petrol Station Management app using windows Form.",
        githubLink: "https://github.com/Winch3ster/Broker-Petrol",
        image: gasStationSimulation,
        isVisible:false, 
        isBeingFocused:false,
        tech: [ "C#", "Window Forms"] 
    },

    {
        id:5,
        companyAttached : false,
        companyName: "",
        name:"Bitsey E-commerce website",
        type: "Software Assignment",
        description: "Bitsey is a fictional eCommerce website for selling games, developed as part of my college assignment using the Django framework.",
        githubLink: "https://github.com/Winch3ster/Broker-Petrol",
        image: bitsey,
        isVisible:false, 
        isBeingFocused:false,
        tech: ["Django", "Python", "Bootstrap", "Javascript" , "SQL"] 
    },
    {
        id:6,
        companyAttached : false,
        companyName: "",
        name:"2D Forza Horizon",
        type: "Software Assignment",
        description: "A simple (top-down view) 2 player racing game that runs on LAN developed using Java Swing for the user interfaces and Java Networking classes for communication between clients and server. A networking protocol was designed to facilitate communication.  ",
        githubLink: "https://github.com/Winch3ster/Broker-Petrol",
        image: forza,
        isVisible:false, 
        isBeingFocused:false,
        tech: ["Java Swing", "Java Networking"] 
    },
    {
        id:7,
        companyAttached : false,
        companyName: "",
        name:"Drawing Application",
        type: "Software Assignment",
        description: "A simple drawing application similar to Microsoft Paint that allow user to create simple illustrations. This program also allow user to export the illustration crreated as an image.",
        githubLink: "https://github.com/Winch3ster/Broker-Petrol",
        image: drawingApplication,
        isVisible:false, 
        isBeingFocused:false,
        tech: [ "C#", "Window Forms"] 
    },
    
]


export default projects;