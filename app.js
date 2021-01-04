const cityForm = document.querySelector('form');

const getCityWeather = async function(){
    
}


cityForm.addEventListener('submit', function(e){
    e.preventDefault();

    const city = cityForm.city.value.trim();
    cityForm.reset();

    console.log(city)
});