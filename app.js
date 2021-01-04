const cityForm = document.querySelector('form');

const updateCity = async function(city){
   const cityDets = await getCity(city);
   const weather = await  getWeather(cityDets.Key)
   console.log(cityDets);
   return { cityDets, weather };
};

// let city;
cityForm.addEventListener('submit', function(e){
    e.preventDefault();

  const city = cityForm.city.value.trim();
    cityForm.reset();

    console.log(city);


    updateCity(city).then(function(data){
    return data;
    }).catch(function(err){
    return err.message;
    });
});

