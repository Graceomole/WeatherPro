import BackgroundImage from './../assets/images/img2.jpg';
import CloseIcon from './../assets/svgs/CloseIcon.jsx';
import BarIcon from '../assets/svgs/BarIcon.jsx';
import PageLoader from './PageLoader.jsx';
import flag1 from './../assets/Flag/Flag_of_Germany.png';
import flag2 from './../assets/Flag/Flag_of_Canada.png';
import flag3 from './../assets/Flag/Flag_of_Nigeria.png';
import flag4 from './../assets/Flag/Flag_of_United_States.png';
import flag5 from './../assets/Flag/Flag_of_Japan.png';
import flag6 from './../assets/Flag/Flag_of_United_Kingdom.png';
import flag7 from './../assets/Flag/Flag_of_Ireland.png';
import flag8 from './../assets/Flag/Flag_of_New_Mexico.png';
import flag9 from './../assets/Flag/Flag_of_Egypt.png';
import flag10 from './../assets/Flag/Flag_of_Brazil.png';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { useMediaQuery } from '@uidotdev/usehooks';

const LandingPage = () => {
	const navigate = useNavigate();
	const [isVisible, setIsVisible] = useState(false);
	const showNav = useMediaQuery('only screen and (max-width : 768px)');

	return (
		<div
			className="w-full relative min-h-screen bg-no-repeat bg-center  bg-cover p-10 "
			style={{ backgroundImage: `url(${BackgroundImage})` }}
		>
			<div className="w-full flex items-center justify-between md:space-x-8  xl:space-x-40">
				<div className="font-bold text-lg text-gray-800 ">
					Weather<span className="text-white">Pro</span>
				</div>
				<div>
					{!showNav ? (
						<div className="flex items-center justify-center ">
							<ul className="flex  md:space-x-5 lg:space-x-8   justify-center items-center cursor-pointer">
								<li className="py-2 px-7 text-lg bg-white text-black rounded-xl font-semibold list-none cursor-pointer hover:bg-black hover:border-black hover:text-white  hover:border-2">
									Home
								</li>
								<li className="text-white  text-lg font-semibold list-none cursor-pointer hover:border-b-2 hover:border-white ">
									Get Started
								</li>
								<li
									onClick={() => navigate('/today')}
									className="text-white text-lg font-semibold  list-none cursor-pointer hover:border-b-2 hover:border-white"
								>
									Today's weather
								</li>
								<li
									onClick={() => navigate('/loader')}
									className="text-white md:hidden lg:block text-lg font-semibold  list-none cursor-pointer hover:border-b-2 hover:border-white"
								>
									Research
								</li>
								<li
									onClick={() => navigate('/forecast')}
									className="text-white text-lg font-semibold  list-none cursor-pointer hover:border-b-2 hover:border-white"
								>
									Climate
								</li>
								<li className="py-2 px-7 text-lg bg-white text-black rounded-xl list-none cursor-pointer  hover:bg-black hover:text-white hover:border-black hover:border-2 font-semibold">
									LOGIN
								</li>
							</ul>
						</div>
					) : (
						<section>
							{isVisible ? (
								<button onClick={() => setIsVisible(false)}>
									{' '}
									<CloseIcon />
								</button>
							) : (
								<button onClick={() => setIsVisible(true)}>
									<BarIcon />
								</button>
							)}
							{isVisible ? (
								<div className=" ">
									<ul className="flex absolute  bg-white space-y-8  left-0   flex-col min-h-[100vh]  w-full border   justify-center items-center cursor-pointer">
										<li className="py-2 px-7 text-lg bg-black text-white rounded-xl font-semibold list-none cursor-pointer hover:bg-white hover:text-black hover:border-black hover:border-2">
											Home
										</li>
										<li className="text-black    text-lg font-semibold list-none cursor-pointer hover:border-b-2 hover:border-black 3s ">
											Get Started
										</li>
										<li
											onClick={() => navigate('/today')}
											className="text-black text-lg font-semibold  list-none cursor-pointer hover:border-b-2 hover:border-black "
										>
											Today's weather
										</li>
										<li className=" text-black  text-lg font-semibold  list-none cursor-pointer hover:border-b-2 hover:border-black">
											Research
										</li>
										<li
											onClick={() => navigate('/forecast')}
											className="text-black text-lg font-semibold  list-none cursor-pointer hover:border-b-2 hover:border-black"
										>
											Climate
										</li>
										<li className="text-lg  text-black list-none cursor-pointer font-semibold hover:border-b-2 hover:border-black">
											LOGIN
										</li>
									</ul>
								</div>
							) : (
								<></>
							)}
						</section>
					)}
				</div>
			</div>

			<div className="flex flex-col md:flex-row mt-15 md:mt-30 space-y-10 md:space-y-0 md:space-x-20  lg:space-x-64">
				<div className="w-[100%] md:w-[45%] lg:w-[60%] ">
					<h1 className="font-bold text-4xl  lg:text-5xl xl:text-6xl text-white ">
						Provide you a world wide weather forecast
					</h1>
				</div>
				<div className=" w-[100%] md:w-[45%] lg:w-[35%] ">
					<p className="font-medium text-xl text-white ">
						The World's Most Accurate Forecaster. With extreme weather on the
						rise. its so easy to receive the weather condition in your current
						location.
					</p>
				</div>
			</div>

			<div className="mt-5 xl:mt-15">
				<h2 className="text-3xl font-bold text-center text-white mb-10">
					Why Choose Us?
				</h2>
				<div className="flex flex-col md:flex-row justify-center items-stretch gap-10 text-center">
					<div className="flex-1 p-6 rounded-xl shadow-md bg-white">
						<h3 className="text-xl text-black font-semibold mb-2">
							Accurate Forecast
						</h3>
						<p className="text-black">
							Backed by real-time meteorological data and models.
						</p>
					</div>
					<div className="flex-1 p-6 rounded-xl shadow-md bg-white">
						<h3 className="text-xl text-black font-semibold mb-2">
							Easy to Use
						</h3>
						<p className="text-black">
							Simple, clean interface for quick updates.
						</p>
					</div>
					<div className="flex-1 p-6 rounded-xl shadow-md bg-white">
						<h3 className="text-xl font-semibold text-black mb-2">
							Global Coverage
						</h3>
						<p className="text-black">Anywhere, anytime—know what’s coming.</p>
					</div>
				</div>
			</div>

			<div className="mt-24 bg-white p-10 rounded-xl shadow-md">
				<h2 className="text-2xl font-bold text-center mb-6 text-black">
					What Users Say
				</h2>
				<div className="flex flex-col md:flex-row gap-10 justify-center text-center">
					<div className="w-full md:w-1/3">
						<p className="italic text-black">
							"Super accurate and easy to use. My go-to app!"
						</p>
						<p className="mt-2 font-bold text-black">– Alex, USA</p>
					</div>
					<div className="w-full md:w-1/3">
						<p className="italic text-black">
							"I travel a lot and this app has been a lifesaver!"
						</p>
						<p className="mt-2 font-bold text-black">– Fatima, Nigeria</p>
					</div>
				</div>
			</div>
			<div className="flex flex-col  space-y-4 w-[100%] rounded-3xl  bg-white mt-5 xl:mt-20 p-10 md:p-5 xl:p-15">
				<div>
					<h1 className="text-3xl font-bold text-center">Top City Forecast</h1>
				</div>
				<div className="flex md:flex-col space-x-6 md:space-x-0 space-y-4 justify-around">
					<div className="flex flex-col md:flex-row space-x-0 md:space-x-6 space-y-6 md:space-y-0 xl:space-x-40">
						<div className=" bg-white flex-1 space-y-4   shadow-2xl p-4">
							<img className="w-30" src={flag3} alt="" />
							<p>Nigeria</p>
						</div>
						<div className=" flex-1 space-y-4  bg-white  shadow-2xl p-4 ">
							<img className="w-30   " src={flag1} alt="" />
							<p className="">Germany</p>
						</div>
						<div className=" flex-1 space-y-4  bg-white  shadow-2xl p-4">
							<img className="w-30 xsm:w-30 " src={flag10} alt="" />
							<p>Brazil</p>
						</div>
						<div className=" flex-1 space-y-4 bg-white   shadow-2xl p-4">
							<img className="w-30" src={flag2} alt="" />
							<p>Canada</p>
						</div>
						<div className="flex-1 space-y-2 bg-white  shadow-2xl p-4 ">
							<img className=" w-30 xsm:w-30" src={flag6} alt="" />
							<p className="flex-nowrap ">United Kingdom</p>
						</div>
					</div>
					<div className="flex flex-col md:flex-row space-x-0 space-y-6 md:space-x-6 xl:space-x-40 ">
						<div className=" flex-1 bg-white space-y-4 shadow-2xl p-4">
							<img className=" w-30" src={flag7} alt="" />
							<p>Ireland</p>
						</div>
						<div className=" flex-1  bg-white  shadow-2xl p-4">
							<img className="w-20 xsm:w-30" src={flag9} alt="" />
							<p>Egypt</p>
						</div>
						<div className="flex-1 space-y-4 bg-white  shadow-2xl p-4">
							<img className=" w-30" src={flag5} alt="" />
							<p>Japan</p>
						</div>
						<div className=" flex-1 space-y-2 bg-white  shadow-2xl p-4">
							<img className="w-30" src={flag4} alt="" />
							<p>United State</p>
						</div>
						<div className="flex-1  bg-white  shadow-2xl p-4">
							<img className="w-30 xsm:w-30 " src={flag8} alt="" />
							<p>New Mexico</p>
						</div>
					</div>
				</div>
			</div>

			<footer className="mt-20 py-10 text-center text-white border-t">
				<p>© 2025 WeatherPro. All rights reserved.</p>
				<div className="mt-2 space-x-4">
					<a href="/privacy" className="hover:underline">
						Privacy Policy
					</a>
					<a href="/terms" className="hover:underline">
						Terms of Use
					</a>
				</div>
			</footer>
		</div>
	);
};

export default LandingPage;
