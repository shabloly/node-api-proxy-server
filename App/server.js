import express from 'express';
let app = express();

import weatherApi from './ExternalAPI/weatherAPIClient.js';

app.get('/country/:country' , async (req , res)=> {

  const country2Search = req.params.country;
  console.log(`Searching for county: ${country2Search}`);
  var weatherData = await weatherApi.featchWeatherData(country2Search);
  console.log(`Got this Weather Data Back ${JSON.stringify(weatherData)}`);
  res.send(weatherData);
})

app.listen(3000, function () {
  console.log("app listening on port 3000!");
});
