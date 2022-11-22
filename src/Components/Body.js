import React, { useState } from 'react'
import axios from 'axios'

import './style.css'
// const res = {

//   "coord": {
//     "lon": 10.99,
//     "lat": 44.34
//   },
//   "weather": [
//     {
//       "id": 501,
//       "main": "Rain",
//       "description": "moderate rain",
//       "icon": "10d"
//     }
//   ],
//   "base": "stations",
//   "main": {
//     "temp": 298.48,
//     "feels_like": 298.74,
//     "temp_min": 297.56,
//     "temp_max": 300.05,
//     "pressure": 1015,
//     "humidity": 64,
//     "sea_level": 1015,
//     "grnd_level": 933
//   },
//   "visibility": 10000,
//   "wind": {
//     "speed": 0.62,
//     "deg": 349,
//     "gust": 1.18
//   },
//   "rain": {
//     "1h": 3.16
//   },
//   "clouds": {
//     "all": 100
//   },
//   "dt": 1661870592,
//   "sys": {
//     "type": 2,
//     "id": 2075663,
//     "country": "IT",
//     "sunrise": 1661834187,
//     "sunset": 1661882248
//   },
//   "timezone": 7200,
//   "id": 3163858,
//   "name": "Zocca",
//   "cod": 200
// }

const Body = ({ theme }) => {

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=4899f968437a176c7964359daebaa732`

  const searchLocation = () => {
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data);
    }).catch((error) => {
      console.log('error', error);
    })
  }

  return (
    <>
      <div className='container my-4'>
        <div className={`p-5 border border-secondary bg-${theme}`}>
          <h2 className={`text-center text-${theme === "light" ? "dark" : "light"}`}>Enter your City</h2>
          <div className='my-4 p-5'>
            <div className='d-flex'>
              <label htmlFor="location"></label>
              <input type="text"
                onChange={e => setLocation(e.target.value)}
                value={location}
                className='form-control me-2'
                placeholder='enter your location'
                id='location' />
              <button onClick={searchLocation} className={`btn btn-${theme === "light" ? "dark" : "light"}`}>Search</button>
            </div>
            <div className="container my-4">
              <h3 className={`text-center p-4 text-${theme === "light" ? "dark" : "light"}`}>The location is {data.name} : {data.sys ? <>{data.sys.country}</> : null}</h3>
              <div className="row">
                <div className="col">
                  <h5 className={`text-center p-4 text-${theme === "light" ? "dark" : "light"}`}>Temperature in {data.name} is:  {data.main ? <>{Math.ceil(data.main.temp - 273.15)}°C</> : null}</h5>
                </div>
                <div className="w-100"> </div>
                <div className="col">
                  <h5 className={`text-center text-${theme === "light" ? "dark" : "light"}`}>Max Temp: {data.main ? <p>{Math.ceil(data.main.temp_max - 273.15)}°C</p> : null}</h5>
                </div>
                <div className="col">
                  <h5 className={`text-center text-${theme === "light" ? "dark" : "light"}`}>Min Temp: {data.main ? <p>{Math.ceil(data.main.temp_min - 273.15)}°C</p> : null}</h5>
                </div>
                <div className='col'>
                  <h5 className={`text-center text-${theme === "light" ? "dark" : "light"}`}>Humidity: {data.main ? <p>{data.main.humidity}%</p> : null}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Body