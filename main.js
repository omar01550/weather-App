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
      if(input.value != ''){
        searching.classList.remove("hidden");
        searching.innerHTML = '<p class="p-3 bg-green-200 text-green-500">searching</p>';
        getDataApi();
        clear();
      }else{
        searching.classList.remove("hidden");
        searching.innerHTML = '<p class="p-3 bg-green-200 text-green-500">please enter city name</p>';
      }
});

back.addEventListener("click",function () {
   hiddenSection();
   searching.classList.add("hidden");

});

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
       weatherDegree.innerHTML = data.main.temp;
       cityName.innerHTML = data.name;
       weatherState.innerHTML = data.weather[0].description;
       hiddenSection();
      
    }else {
         searching.innerHTML = '<p class="p-3 bg-red-200 text-red-600">please enter a vaild city</p>';

    }
}

function hiddenSection() {
  allSections.forEach((section, i) => {
         section.classList.toggle("hidden");
  });
}

function clear() {
   input.value ='';
   input.focus();

}

(function () {
   input.focus();
})();
