//get al sections
let allSections = document.querySelectorAll(".section");
let submit = document.querySelector(".submit");
let input = document.querySelector("input");
let alert =document.querySelector(".alert")
let cityName=document.querySelector(".city-name");
let weatherState=document.querySelector(".weather-state");
let weatherDegree= document.querySelector(".weather-degree");
let searching = document.querySelector(".searching");


//back icon
let back =document.querySelector(".back");
submit.addEventListener("click",function () {
      searching.classList.toggle("hidden");
      getDataApi();
      clear();
});

back.addEventListener("click",hiddenSection);

//fecth weather
let apiKey = "2138f0dbbcec163a4b8a44a0215a3bd6";

function getDataApi() {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}`).then(
    res => res.json()
  ).then(
    data => {
       handelData(data)
    }
  )
}


function handelData(data){
     if(data.cod != "404"){
       searching.classList.toggle("hidden");
       weatherDegree.innerHTML = ((5/9)*data.main.temp-32).toFixed(2);
       cityName.innerHTML = data.name;
       weatherState.innerHTML = data.weather[0].description;
       hiddenSection();
      console.log(data);
    }else {
       searching.innerHTML = "please enter valid city";
       searching.classList.toggle("bg-red-200");
       searching.classList.toggle("text-red-500");
    }
}

function hiddenSection() {
  allSections.forEach((section, i) => {
         section.classList.toggle("hidden");
  });
}

function clear() {
   input.value ='';
   searching.classList.toggle("bg-red-200");
   searching.classList.toggle("text-red-500");
}
