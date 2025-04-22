import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import BackgroundImage from './../assets/images/forcastImage.jpg';
import loadingGif from './../assets/images/la.gif';

const ForecastPage = () => {
	const [current, setCurrent] = useState('');
	const [forecast, setForecast] = useState([]);
	const [location, setLocation] = useState('');
	const [city, setCity] = useState('Lagos');
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const cityArray = [
		{ key: 0, label: 'Select city ' },
		{ key: 1, label: 'Abuja' },
		{ key: 2, label: 'London' },
		{ key: 3, label: 'New York' },
		{ key: 4, label: 'Tokyo' },
		{ key: 5, label: 'Paris' },
		{ key: 6, label: 'Nairobi' },
		{ key: 7, label: 'Cape Town' },
		{ key: 8, label: 'Sydney' },
		{ key: 9, label: 'Toronto' },
		{ key: 10, label: 'Dubai' },
		{ key: 11, label: 'Lagos' },
		{ key: 12, label: 'Berlin' },
		{ key: 13, label: 'Rome' },
		{ key: 14, label: 'Los Angeles' },
		{ key: 15, label: 'Chicago' },
		{ key: 16, label: 'Madrid' },
		{ key: 17, label: 'Mumbai' },
		{ key: 18, label: 'Beijing' },
		{ key: 19, label: 'Seoul' },
		{ key: 20, label: 'Istanbul' },
		{ key: 21, label: 'Cairo' },
		{ key: 22, label: 'Bangkok' },
		{ key: 23, label: 'Moscow' },
		{ key: 24, label: 'Rio de Janeiro' },
		{ key: 25, label: 'Johannesburg' },
		{ key: 26, label: 'Amsterdam' },
		{ key: 27, label: 'Vienna' },
		{ key: 28, label: 'Lisbon' },
		{ key: 29, label: 'Helsinki' },
		{ key: 30, label: 'Kuala Lumpur' },
		{ key: 31, label: 'Jakarta' },
		{ key: 32, label: 'Manila' },
		{ key: 33, label: 'Athens' },
		{ key: 34, label: 'Mexico City' },
		{ key: 35, label: 'San Francisco' },
		{ key: 36, label: 'Zurich' },
		{ key: 37, label: 'Oslo' },
		{ key: 38, label: 'Brussels' },
		{ key: 39, label: 'Stockholm' },
		{ key: 40, label: 'Doha' },
		{ key: 41, label: 'San Diego' },
		{ key: 42, label: 'Bogotá' },
		{ key: 43, label: 'Buenos Aires' },
		{ key: 44, label: 'Santiago' },
		{ key: 45, label: 'Caracas' },
		{ key: 46, label: 'Hanoi' },
		{ key: 47, label: 'Lima' },
		{ key: 48, label: 'Quito' },
		{ key: 49, label: 'Panama City' },
		{ key: 50, label: 'Accra' },
		{ key: 51, label: 'Addis Ababa' },
		{ key: 52, label: 'Dar es Salaam' },
		{ key: 53, label: 'Kigali' },
		{ key: 54, label: 'Kampala' },
		{ key: 55, label: 'Pretoria' },
		{ key: 56, label: 'Algiers' },
		{ key: 57, label: 'Casablanca' },
		{ key: 58, label: 'Rabat' },
		{ key: 59, label: 'Tunis' },
		{ key: 60, label: 'Tripoli' },
		{ key: 61, label: 'Tehran' },
		{ key: 62, label: 'Baghdad' },
		{ key: 63, label: 'Riyadh' },
		{ key: 64, label: 'Jeddah' },
		{ key: 65, label: 'Amman' },
		{ key: 66, label: 'Jerusalem' },
		{ key: 67, label: 'Kuwait City' },
		{ key: 68, label: 'Muscat' },
		{ key: 69, label: 'Bahrain' },
		{ key: 70, label: 'Doha' },
		{ key: 71, label: 'Islamabad' },
		{ key: 72, label: 'Karachi' },
		{ key: 73, label: 'Lahore' },
		{ key: 74, label: 'Colombo' },
		{ key: 75, label: 'Dhaka' },
		{ key: 76, label: 'Kathmandu' },
		{ key: 77, label: 'Yangon' },
		{ key: 78, label: 'Tashkent' },
		{ key: 79, label: 'Baku' },
		{ key: 80, label: 'Yerevan' },
		{ key: 81, label: 'Tbilisi' },
		{ key: 82, label: 'Belgrade' },
		{ key: 83, label: 'Zagreb' },
		{ key: 84, label: 'Prague' },
		{ key: 85, label: 'Budapest' },
		{ key: 86, label: 'Warsaw' },
		{ key: 87, label: 'Vilnius' },
		{ key: 88, label: 'Riga' },
		{ key: 89, label: 'Tallinn' },
		{ key: 90, label: 'Reykjavik' },
		{ key: 91, label: 'Edinburgh' },
		{ key: 92, label: 'Glasgow' },
		{ key: 93, label: 'Birmingham' },
		{ key: 94, label: 'Manchester' },
		{ key: 95, label: 'Leeds' },
		{ key: 96, label: 'Dublin' },
		{ key: 97, label: 'Belfast' },
		{ key: 98, label: 'Cardiff' },
		{ key: 99, label: 'Geneva' },
		{ key: 100, label: 'Monaco' },
	];

	const handleForecastFetch = async () => {
		setLoading(true);
		const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`;
		const options = {
			method: 'GET',
			headers: {
				'x-rapidapi-key': '8cce465dc3msh73422dc19021f1ep1c5218jsn30b6406e933a',
				'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
			},
		};
		await fetch(url, options)
			.then(async (data) => {
				const result = await data.json();
				console.log(result);
				setLoading(false);
				setCurrent(result.current);
				setForecast(result.forecast);
				setLocation(result.location);
				console.log(result.current, result.forecast, result.location);
				console.log('hiii');
			})
			.catch((error) => {
				console.log(error);
				setLoading(false);
			})
			.finally(() => {
				setLoading(false);

				return;
			});
	};
	useEffect(() => {
		if (city && city.length >= 3) {
			handleForecastFetch();
		}
	}, [city]);

	console.log('fpre', forecast);
	return (
		<div
			className="flex flex-col p-10 mx-auto  space-y-12  w-full bg-cover bg-center   min-h-screen bg-no-repeat "
			style={{
				backgroundImage: `url(${BackgroundImage})`,
			}}
		>
			<div className="flex space-x-12 items-center lg:space-x-54 xl:space-x-80 ">
				<div>
					<li
						onClick={() => navigate('/')}
						className="list-none cursor-pointer    text-white font-bold hover:border-b-2 hover:border-white"
					>
						Back
					</li>
				</div>
				<div className="flex justify-between items-center space-x-4 px-5 border-white hover:border-amber-200  py-2 rounded-3xl border-2">
					<button onSubmit={handleForecastFetch}>
						<select
							onChange={(e) => setCity(e.target.value)}
							className="block outline-none text-white  font-bold w-[170px] xxsm:w-[150px] md:w-[500px] lg:w-[600px] px-2"
							value={city}
						>
							{cityArray.map((item, index) => (
								<option
									className="bg-amber-200 text-white"
									key={index}
									value={item.label}
								>
									{item.label}
								</option>
							))}
						</select>
					</button>
				</div>
			</div>
			{loading ? (
				<div className="flex  justify-center items-center h-[500px]">
					<img src={loadingGif} alt="Loading..." className="w-32 h-32" />
				</div>
			) : (
				<section>
					<div className="flex flex-col md:flex-row justify-around space-x-8 ">
						<div className="flex flex-col space-y-4 md:space-y-0 items-center text-center">
							<img
								className=" w-50 h-50 md:w-30 md:h-30"
								src={current?.condition?.icon}
								alt=""
							/>
							<p className=" text-white text-lg md:text-md font-medium">
								Sunrise: {forecast.forecastday?.[0].astro?.sunrise}
							</p>
							<p className=" text-white text-lg md:text-md font-medium">
								Sunset: {forecast.forecastday?.[0].astro?.sunset}
							</p>
						</div>
						<div className="flex flex-col space-y-4  md:space-y-0 text-center">
							<p className="text-3xl md:text-xl text-white font-medium">
								{location?.localtime}
							</p>
							<p className=" text-yellow-300 text-6xl md:text-4xl  font-medium">
								{current?.temp_c}°C
							</p>
							<p className="text-white text-lg md:text-md font-medium">
								{current?.condition?.text}
							</p>
							<p className="text-white text-lg md:text-md font-medium">
								Feels like {Math.round(current?.temp_c + 1)}°{' '}
							</p>
							<p className="text-white text-lg md:text-md font-medium ">
								{' '}
								{location?.country}
							</p>
							<p className="text-white text-lg md:text-md font-medium">
								{location?.tz_id}
							</p>
						</div>
						<div className="flex flex-col space-y-2 md:space-x-0 mt-2 md:mt-0 text-center">
							<p className="text-white font-medium uppercase text-3xl md:text-xl">
								more details
							</p>
							<p className="text-white text-lg md:text-md font-medium text-md">
								Wind speed{' '}
								<span className="font-semibold text-lg md:text-md">
									{current?.wind_kph} km/h
								</span>
							</p>
							<p className="text-white font-medium text-lg md:text-md">
								Air humidity{' '}
								<span className="font-semibold text-lg">
									{current?.humidity}%
								</span>
							</p>
							<p className="text-white font-medium text-lg md:text-md">
								Pressure{' '}
								<span className="font-semibold text-lg md:text-md">
									{current?.pressure_mb}mb
								</span>{' '}
							</p>
							<p className="text-white font-medium text-lg md:text-md">
								Wind degree{' '}
								<span className="font-semibold text-lg md:text-md">
									{current?.wind_degree}°
								</span>{' '}
							</p>
						</div>
						<div className="flex flex-col p-4 mt-6 md:max-h-70 md:mt-0 bg-white/30 backdrop-blur-md rounded-xl shadow-2xl font-medium text-white ">
							<div>
								<h1 className="text-xl">3-Day Forecast</h1>
							</div>
							<div className="flex flex-col mx-auto md:flex-row space-x-12 ">
								{forecast?.forecastday?.map((items, index) => (
									<div key={index} className="">
										<img src={items.day.condition.icon} alt="" />
										<p className="text-lg md:text-md">{items.day.avgtemp_c}°</p>
										<h1 className="text-lg md:text-md">
											{items.day.condition.text}
										</h1>
										<hr className="md:hidden" />
									</div>
								))}
							</div>
							{/* <div>
							<img src={forecast.forecastday?.[0].day?.condition.icon} />
							<p>{forecast.forecastday?.[0].day?.avgtemp_c}</p>
							<p>{forecast.forecastday?.[0].day?.condition.text}</p>
										</div>
										<div>
							<img src={forecast.forecastday?.[1].day?.condition.icon} />
							<p>{forecast.forecastday?.[1].day?.avgtemp_c}</p>
							<p>{forecast.forecastday?.[1].day?.condition.text}</p>
										</div>
										<div>
							<img src={forecast.forecastday?.[2].day?.condition.icon} />
							<p>{forecast.forecastday?.[2].day?.avgtemp_c}</p>
							<p>{forecast.forecastday?.[2].day?.condition.text}</p>
										</div> */}
						</div>
					</div>
					<div>
						<div className="w-[100%] flex flex-col space-y-4 md:space-y-0  md:max-h-86 p-10 bg-white/30 backdrop-blur-md rounded-xl shadow-2xl font-medium text-white mx-auto mt-10 ">
							<h1 className="text-xl">Hourly Forecast</h1>
							<div className="flex flex-col mx-auto md:flex-row space-x-4">
								{forecast?.forecastday?.[0].hour?.map(
									(items, index) =>
										index > 7 &&
										index < 22 &&
										index % 2 == 0 && (
											<div key={index}>
												<p>{items.temp_c}°</p>
												<img src={items.condition.icon} alt="" />
												<p className="text-lg md:text-md">{items.time}</p>
												<p className="text-lg md:text-md">
													{items.condition.text}
												</p>
												<hr className="md:hidden" />
											</div>
										)
								)}
							</div>
						</div>
					</div>
				</section>
			)}
		</div>
	);
};

export default ForecastPage;
