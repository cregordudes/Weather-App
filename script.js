window.addEventListener('load', ()=> {
   let long;
   let lat;

   let temperatureDescription = document.querySelector('.temperature-description');
   let temperatureDegree = document.querySelector('.temperature-degree');
   let locationTimezone = document.querySelector('.location-timezone');
   let locationIcon = document.querySelector('.weather-icon');
   
   if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position =>{
         long = position.coords.longitude;
         lat = position.coords.latitude;


         const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid={Your API Key}`;
      
         fetch(api)
            .then(response =>{
               return response.json();
            })
            .then(data =>{
               //console.log(data);
               const geolocation = (data.sys.country + ", " + data.name)
               // Set DOM Elements form the API
               temperatureDegree.textContent = data.main.temp;
               temperatureDescription.textContent = data.weather[0].description; 
               locationTimezone.textContent = geolocation;

               const {icon} = data.weather[0];
               locationIcon.innerHTML = `<img src="icons/${icon}.png">`;
               //console.log(icon)
            });
      
      });

   }else{
      alert = "Ooops, now i have no idea what region are you in :( "
   }
});
