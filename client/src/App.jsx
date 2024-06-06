import React, {useState} from "react";
import {fetchWeather} from "./api/fetchWeather.js";

function App() {

    const [city, setCity] = useState('')
    const [weather, setWeather] = useState('')

    const search = async (e) => {

        const data = await fetchWeather(city)
        setWeather(data)
        setCity('')

    }

    return (
        <>
            <div className="h-screen bg-blue-500 flex items-center justify-center">
                <div className="bg-white p-10 rounded-lg shadow-lg w-80">
                    <input
                        type="text"
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                        placeholder="Enter city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <button
                        className="w-full bg-blue-500 text-white p-2 rounded"
                        onClick={search}
                    >
                        Search
                    </button>
                    {weather && (
                        <div className="text-center mt-4">
                            <h2 className="text-2xl font-bold">{weather.location.country}</h2>
                            <h2 className="text-2xl font-bold">{weather.location.name}</h2>
                            <h2 className="text-2xl font-bold">{weather.current.condition.text}</h2>
                            <img className='block mx-auto align-middle' src={weather.current.condition.icon}/>
                            <p className="text-4xl font-bold">{Math.round(weather.current.temp_c)}°C</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default App
