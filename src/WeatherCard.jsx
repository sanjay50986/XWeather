import React from 'react'

const WeatherCard = ({weatherData}) => {
  return (
    <div className='weather-cards'>
        <div className='weather-card'>
            <h2>Temperature</h2>
            <p>{weatherData?.current?.temp_c}°C</p>
        </div>

        <div className='weather-card'>
            <h2>Humidity</h2>
            <p>{weatherData?.current?.humidity}%</p>
        </div>

        <div className='weather-card'>
            <h2>Condition</h2>
            <p>{weatherData?.current?.condition?.text}</p>
        </div>

         <div className='weather-card'>
            <h2>Wind Speed</h2>
            <p>{weatherData?.current?.wind_kph} kph</p>
        </div>
    </div>
  )
}

export default WeatherCard