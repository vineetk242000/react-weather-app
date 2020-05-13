import React  from 'react';
import Header from "./Header.js";
import Footer from "./Footer.js";
import Search from "./search.js";
import Weather from "./weather.js";
import { useState } from "react";



function App(props){

  let data1=undefined;
  let data2=undefined; 
  let [showdiv,setShowdiv]=useState(false);
  let [forecast,setForecast] = useState([]);
  let [weather,setWeather]=useState({
    temperature : null,
    humidity: null,
    main:null,
    description:null,
    windSpeed:null,
    city:null,
    country:null,
    feels_like:null,
    pressure:null,
    sunrise:null,
    sunset:null,
    date:null

  });

  function refresh(){
    setForecast([])
  }


  
    
  async function handleResponse(response){
    if(response.ok){
    return (await response.json());
    }
    else{
    throw console.error();
    }
  }

  async function getweather(e){
    e.preventDefault();
    
    const city=(e.target.elements.city.value);
    const response1 = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid={Your API Key}&units=metric`)
    data1 =  await handleResponse(response1);
    const response2 = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid={Your API Key}&units=metric`)
    data2 = await handleResponse(response2);
    await refresh();
    
    if (Object.entries(data2).length) {
      
      for (let i = 1; i < 8; i ++) {
        setForecast(prevForecast =>{
         return[...prevForecast,(data2.list[i])];
        });
      }
      
    }
    
    
    //console.log(forecast);

    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]}`;
    const sunset = new Date(data1.sys.sunset * 1000).toLocaleTimeString().slice(0, 5);
    const sunrise = new Date(data1.sys.sunrise * 1000).toLocaleTimeString().slice(0, 5);

    


    setWeather({
      temperature:data1.main.temp,
      humidity:data1.main.humidity,
      main:data1.weather[0].main,
      description:data1.weather[0].description,
      windSpeed:data1.wind.speed,
      city:data1.name,
      country:data1.sys.country,
      feels_like:data1.main.feels_like,
      pressure:data1.main.pressure,
      sunrise:sunrise,
      sunset:sunset,
      date:date
    })

    
    setShowdiv(true);
    //console.log(showdiv)
  }



  
  
   
     
 return(
    <div>
    <Header />
    <Search getweather={getweather}/>
    
    {showdiv ? (<Weather temperature={weather.temperature} 
    humidity={weather.humidity}
    main={weather.main}
    description={weather.description}
    windSpeed={weather.windSpeed}
    city={weather.city}
    country={weather.country}
    feels_like={weather.feels_like}
    pressure={weather.pressure}
    sunrise={weather.sunrise}
    sunset={weather.sunset}
    date={weather.date}
    forecast={forecast}
    refresh={refresh}
    />) :(<div className="showdiv"><h1>Press Enter to Search</h1></div>)}
    
    {showdiv ?<Footer  />:null}
    </div>
    
    
  )
}




export default App;
