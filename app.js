
var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=3e380122f86b40178d1149643bd99d2f')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+tempValue;
  input.value ="";
  console.log(data);

  document.querySelector('.location').innerHTML =  nameValue +', '+ data['sys']['country'];
  document.querySelector('.MainDeg').innerHTML =  Math.round(data['main']['temp'] - 273.15)+'°';
  document.querySelector('.Description').innerHTML = data['weather'][0]['description'];
  document.querySelector('#humidity').innerHTML = data['main']['humidity']+"%";
  document.querySelector('#feelsLike').innerHTML =  Math.round(data['main']['feels_like'] - 273.15)+'°';
  document.querySelector('#tempHigh').innerHTML =  Math.round(data['main']['temp_max'] - 273.15)+'°';
  document.querySelector('#tempMin').innerHTML =  Math.round(data['main']['temp_min'] - 273.15)+'°';
  document.querySelector('#windSpeed').innerHTML = data['wind']['speed']+"km/h";

  iconcode = data['weather']['0']['icon'];
  var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
  $('#wicon').attr('src', iconurl);
})


.catch(err => alert("Wrong city name!"));
})
