const key = "P3wP9jAWqLuXG7gxXGhrZz8rhbSEnKU8";

//////////////////////////////////////////////////////////


const getWeather = async function(id){
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;
    
    const response = await fetch(base + query);
    const data = await response.json();

   return data[0];
// console.log(data[0]);

}

// getWeather("55487");
    const getCity = async function(city){
    const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch( base + query );
    const data = await response.json();

    // console.log(data[0]);
    return data[0];
    
}

///////////////////////////////////////////////////////////

// getCity('ottawa').then(function(data){
    // return getWeather(data.Key)
// }).then(function(data){
//   return data;
// }).catch(function(err){
//   return err.message;
// });

