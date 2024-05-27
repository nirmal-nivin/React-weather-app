import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const[city,setcity] = useState("")
  const[weather,setWeather] = useState("")
  const[temp,setTemp] = useState("")
  const[desc,setDesc] = useState("")

  function HandleCity(event)
  {
    setcity(event.target.value)
  }

  function GetWeather()
  {
    var weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=467a8b463b20c85dede3bfbe24025b6e`)

    weatherData.then(function(success){
      console.log(success.data)
      setWeather(success.data.weather[0].main)
      setTemp(success.data.main.temp)
      setDesc(success.data.weather[0].description)
    })
  }

  return (
    <div className='bg-black p-20'>
      <div className='bg-green-400 p-10 rounded-md'>
        <h1 className='text-2xl font-medium'>Weather report</h1>
        <p>I can give you a weather report about your city ! </p>
        <input onChange={HandleCity} type="text" 
        className='mt-2 border border-black rounded-md p-1 ' 
        placeholder='Enter your city name'/><br></br>
        <button onClick={GetWeather} className='bg-black text-white p-2 rounded-md mt-2'>Get Report</button>

        <div className='mt-2'>
          <h1><b>Weather :</b> {weather}</h1>
          <p><b>Temperature :</b> {temp}</p>
          <p><b>Description :</b> {desc}</p>
        </div>

      </div>

    </div>
  );
}

export default App;
