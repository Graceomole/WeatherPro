import React, { useEffect } from 'react';
import { useState } from 'react';
import BackgroundImage from './../assets/images/img2.jpg';
import { useNavigate } from 'react-router';
import loadingGif from './../assets/images/la.gif';

const TodayWeatherPage = () => {
	const [city, setCity] = useState('lagos');
	const [current, setCurrent] = useState(null);
	const [location, setLocation] = useState(null);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
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

	const HandleFetch = async () => {
		setLoading(true);
		const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`;
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
				setLoading(false);
				console.log(result);
				console.log(result.current.cloud);
				setCurrent(result.current);
				setLocation(result.location);
			})
			.catch((error) => {
				setLoading(false);
				console.log(error);
			})
			.finally(() => {
				setLoading(false);
				return;
			});
	};

	useEffect(() => {
		if (city && city.length >= 3) {
			HandleFetch();
		}
	}, [city]);

	return (
		<div>
			<div className="flex flex-col  mx-auto   w-full min-h-screen p-5 ">
				<div className="flex mb-5 justify-around shadow-lg pb-2">
					<li
						onClick={() => navigate('/')}
						className="list-none  bg-violet-400 py-2 px-6 rounded-xl font-medium cursor-pointer text-white"
					>
						Home
					</li>
					<form onSubmit={HandleFetch}>
						<select
							className="block w-[100%] md:w-[400px] lg:w-[600px]  px-4 bg-blue-00 py-2 rounded-3xl border-2"
							onChange={(e) => setCity(e.target.value)}
							value={city}
						>
							{cityArray.map((item, index) => (
								<option value={item.label} key={index}>
									{item.label}
								</option>
							))}
						</select>
					</form>
				</div>
				{loading ? (
					<div className="flex bg-white justify-center items-center h-[500px]">
						<img src={loadingGif} alt="Loading..." className="w-32 h-32" />
					</div>
				) : (
					<div
						className="flex flex-col md:flex-row justify-around rounded-2xl w-[100%] h-full lg:h-[500px] mt-5 p-12 bg-cover bg-no-repeat bg-center   "
						style={{ backgroundImage: `url(${BackgroundImage})` }}
					>
						<div className="flex flex-col space-y-8">
							<p className="text-3xl  lg:text-9xl font-bold text-white capitalize mt-12 ">
								{city}
							</p>
							<p className="text-2xl lg:text-6xl text-white font-semibold">
								{location?.localtime}
							</p>
							<div className="flex space-x-12 lg:space-x-28">
								<p className="text-white font-semibold text-lg md:text-xl lg:text-2xl">
									{location?.country}
								</p>
								<p className="text-white text-lg md:text-xl lg:text-2xl font-semibold">
									{location?.tz_id}
								</p>
							</div>
						</div>
						<div className="bg-violet-400 h-72 max-w-[220px] mt-12 p-6 rounded-3xl">
							<p className="text-white font-semibold text-lg lg:text-2xl">
								{current?.condition.text}
							</p>
							<img
								className="w-32 h-32 border-none"
								src={current?.condition.icon}
								alt=""
							/>
							<p className="text-white text-lg font-medium">
								Temperature: {current?.temp_c}°C
							</p>
							<p className="text-white text-lg  font-medium">
								Wind: {current?.wind_kph}km/h{' '}
							</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default TodayWeatherPage;
