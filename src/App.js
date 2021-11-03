import React, { useState } from "react";
import "./App.css";

const api = {
	key: "f9d49f5fc6bdd1725d9915488bd448d0",
	base: "https://api.openweathermap.org/data/2.5/",
};

const App = () => {
	const dateBuilder = (d) => {
		let months = [
			"januray",
			"Febraury",
			"March",
			"April",
			"May",
			"Juin",
			"July",
			"August",
			"September",
			"Oktober",
			"November",
			"December",
		];
		let days = [
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
			"Sunday",
		];
		let day = days[d.getDay()];
		let date = d.getDate();
		let month = months[d.getMonth()];
		let year = d.getFullYear();
		return `${day} ${date} ${month} ${year}`;
	};
	const [query, setQuery] = useState("");
	const [weather, setWeather] = useState("");

	const search = (evt) => {
		if (evt.key === "Enter") {
			fetch(`${api.key}weather?q=${query}&units=metric&APPID=${api.key}`)
				.then((res) => res.json())
				.then((result) => setWeather(result));
		}
	};
	return (
		<div className="app warm">
			<main>
				<div className="search-box">
					<input type="text" className="search-bar" placeholder="search...." />
				</div>

				<div className="location-box">
					<div className="location">Tunis, Tunisia</div>
					<div className="date">{dateBuilder(new Date())}</div>
				</div>
				<div className="weather-box">
					<div className="temp">15°c</div>
					<div className="weather">Sunny</div>
				</div>
			</main>
		</div>
	);
};

export default App;
