//get al sections
let allSections = document.querySelectorAll(".section");

//submit btn

let submit =document.querySelector(".submit");
let valid=false;
let alert =document.querySelector(".alert")
//back icon
let back =document.querySelector(".back");
submit.addEventListener("click",function () {
  if(valid){
     hiddenSection();
  }else{
//     <small class="w-full p-2 font-bold capitalize rounded-md bg-red-200 text-red-500">pleas enter a valid city</small>
  }
});
back.addEventListener("click",hiddenSection);

let apiKey = "2138f0dbbcec163a4b8a44a0215a3bd6";
let city="cairo";
let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q="cairo"&appid=${apiKey}`

function hiddenSection() {
  allSections.forEach((section, i) => {
         section.classList.toggle("hidden");
  });

}

fetch(apiUrl).then(
  res => res.json()
).then(
  data => {
     console.log(data);
  }
)
