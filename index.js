const userTab = document.querySelector("[data-userweather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userConatiner = document.querySelector(".weather-container");

const grantAccessConatiner = document.querySelector(
  ".grant-location-container"
);
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");
const userinfoconatiner = document.querySelector(".user-info.container");

//initial variable

let currentTab = userTab;
const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
currentTab.classList.add("current-tab");

function switchTab(clickedTab) {
  if (clickedTab != currentTab) {
    currentTab.classList.remove("current-tab");
    currentTab = clickedTab;
    currentTab.classList.add("current-tab");

    if (!searchForm.classList.contains("active"));{
    userinfoconatiner.classList.remove("active");
    grantAccessConatiner.classList.remove("active");
    searchForm.classList.add("active");
    }
    else{
      searchForm.classList.remove("active");
      userinfoconatiner.classList.remove("active");

      getfromSessionStorage();
    }
  }
}
// ek kaam orpending hai
userTab.addEventListener("click", () => {
  //passed clicked taab as input parameter
  switchTab(userTab);
});

searchTab.addEventListener("click", () => {
  switchTab(searchTab);
});

//check if copordinate are already present insession storege
function getfromSessionStorage(){

  const locallCoordinates = sessionStorage.getItem("user-coordinate");
  if(!localCoordinate){
    //agar local coordinate nahi mile
    grantAccessConatiner.classList.add("active");

  }
  else{
    const coordinate = JSON.parse(localCoordinates)
    fetchUserWeatherInfo(Coordinates);

  }

}

 async function fetchUserWeatherInfo(Coordinates){
  const {lat, lon} = coordinates;
  //make grant container invisisble
  grantAccessConatiner.classList.remove("active");
  //make loader visisble
  loadingScreen.classList.add("active");

  //API CALL

  try{
    const response = await fetch{
          'https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric'
    };
    const data =  await response.JSON();

    loadingScreen.classList.remove("active");
    userConatiner.classList.add("active");
    renderWeatherInfo(data){

    }
  }
  catch(err){
      //hw
      loadingScreen.classList.remove("active");
  }

}

function renderWeatherInfo(WeatherInfo){
  //firstly we have to fetch the element

  const cityName = document.querySelector("[data-cityName]");
  const country
}