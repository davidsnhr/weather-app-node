const axios = require('axios');

const key = "aeac754a8617f98922f92a9eff2d7cf4"

const api = `http://api.weatherstack.com/current?access_key=${key}&query=New York`

const geocodeURL ="https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZGF2aWRzYWh1IiwiYSI6ImNrbG9xdHZvczByZDMydnIwbjFwaTIzNmoifQ._MOaeEGHneISHkaP8qMimw"

axios.get(api).then(function (response) {
    // handle success
    // console.log(response.data.current);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });

axios.get(geocodeURL).then((response) => {
    console.log(response);
}).catch((err) => console.log(err))

