import { get } from 'axios';
import { getWeatherAppCredentials } from '../DB/mongoDb';


const WeatherAPIUrl = async (country) => {
    var apiKey = await getWeatherAppCredentials();
    return `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}&units=metric`
}
const featchWeatherData = async (country) => {
    
    try
    {
      const res = await get(WeatherAPIUrl(country));
    
      return displayData = {
        city: res.data.name,
        temp: res.data.main.temp,
      }
    }
    catch(ex){
        if (ex.response.status === 404) {
            return error = { message : 'country not found'}
          }
      
          if (ex.response.status === 401) {
            return error = { message : 'Invalid API Key'}
          }
    }
  
  }

  export default {featchWeatherData};
  