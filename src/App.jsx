import LandingPage from "./pages/LandingPage"
import TodayWeatherPage from "./pages/TodayWeatherPage";
import ForecastPage from "./pages/ForecastPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/> 
        <Route path='/today' element={<TodayWeatherPage/>} /> 
        <Route path='/forecast' element={<ForecastPage/>}/>
      </Routes>
    </Router>
    
  )
}

export default App
