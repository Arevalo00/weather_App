 // API call 
 
 //var weatherkey = api.openweathermap.org/data/2.5/forecast?id={cityID}&appid:'3150f18b814a4db9839615c732d90ed5';


// HTML elements calling to js 

 var currentWeather = document.getElementsByClassName('currentWeather');
 var button = document.getElementsByClassName('button');
 var fiveDaycast = document.getElementsByClassName('fiveDaycast');
 var city = document.getElementsByClassName('form-control')


document.addEventListener('click', button)


console.log(button, 'it was clicked')
console.log(city, 'city')