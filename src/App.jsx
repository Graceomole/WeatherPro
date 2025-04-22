import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Loading from './pages/PageLoader.jsx';
const LandingPage = lazy(() => import('./pages/LandingPage'));
const ForecastPage = lazy(() => import('./pages/ForecastPage'));
const TodayWeatherPage = lazy(() => import('./pages/TodayWeatherPage'));

function App() {
	return (
		<Router>
			<Suspense fallback={<Loading />} />
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/today" element={<TodayWeatherPage />} />
				{/* <Route path='/loader' element={<Loading/>}/> */}
				<Route path="/forecast" element={<ForecastPage />} />
			</Routes>
		</Router>
	);
}

export default App;
