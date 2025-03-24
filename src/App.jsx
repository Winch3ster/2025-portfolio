import { BrowserRouter, Routes, Route} from "react-router-dom";
import LoadingPage from './pages/loading_page.jsx';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoadingPage pageName={"landing"}/>} />
          <Route path="/simulation" element={<LoadingPage  pageName={"simulation"} />} />
        </Routes>
    </BrowserRouter>
    
  )
}

export default App
