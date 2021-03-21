var apiKey = '&appid=0352e48c79b86836d1e46ddfaf45a3ac';
var city = localStorage.getItem('lastresult');

var searchInput = document.querySelector('.input');
var searchOutput = document.querySelector('.output');
var searchButton = document.querySelector('.search');

searchButton.addEventListener('click', searchFunction);

function searchFunction(){
    localStorage.setItem('inputcontent-' + searchInput.nodeValue, searchInput.value);
    localStorage.setItem('lastresult', searchInput.value);
}

for (var i = 0; i < localStorage.length; i++){
    $(".output").append("<p class='cityresult'>" + localStorage.getItem(localStorage.key(i)) + "</p>");
}

//URL for database
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + '&units=imperial' + apiKey;
    var queryURLFive = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + '&units=imperial' +  apiKey;

 //AJAX to call API

 $.ajax({
     url: queryURL,
     method:"GET"
 })
 .then(function(response){
     console.log(queryURL);
     console.log(response);
 
 

 //Append
 $('.city').html("<h1>"+ response.name + "</h1>");
 $('.icon').html("<img src='https://openweathermap.org/img/w/" + response.weather[0].icon + ".png' >" );
 $('.wind').text("Wind Speed: " + response.wind.speed + " MPH");
 $('.humidity').text("Humidity: " + response.main.humidity + "%");
 $(".tempF").text("Temperature: " + response.main.temp + " F");

var lon = response.coord.lon;
var lat = response.coord.lon;
var queryURLUv = "https://api.openweathermap.org/data/2.5/uvi?" + "lat=" + lat + "&lon=" + lon + apiKey;

$.ajax({
    url: queryURLUv,
    method:"GET"
}
)
.then(function(response) {
    $('.uv').text("UV Index: " + response.value);
    $('.uv').css("background-color", 'red');
}
);

 });

//5day forecast
$.ajax({
    url: queryURLFive,
    method: "GET"
})// We store all of the retrieved data inside of an object called "response"
.then(function(response) {
    console.log(queryURLFive);
    console.log(response);

var dayOne = moment(response.list[0].dt_txt).format("ddd, MMM D");
console.log(moment(response.list[0].dt_txt).format("ddd, MMM D"));

// Transfer day 1 content to HTML
$(".day-one-temp").text("Temp:" + response.list[0].main.temp);
$(".day-one-date").html("<h6>" + dayOne + "</h6>");
$(".day-one-icon").html("<img src='https://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
$(".day-one-humidity").text("Humidity: " + response.list[0].main.humidity + "%");

var dayTwo = moment(response.list[8].dt_txt).format("ddd, MMM D");
// Transfer day 2 content to HTML
$(".day-two-date").html("<h6>" + dayTwo + "</h6>");
$(".day-two-icon").html("<img src='https://openweathermap.org/img/w/" + response.list[8].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
$(".day-two-humidity").text("Humidity: " + response.list[8].main.humidity + "%");

var dayThree = moment(response.list[16].dt_txt).format("ddd, MMM D");
// Transfer day 3 content to HTML
$(".day-three-date").html("<h6>" + dayThree + "</h6>");
$(".day-three-icon").html("<img src='https://openweathermap.org/img/w/" + response.list[16].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
$(".day-three-humidity").text("Humidity: " + response.list[16].main.humidity + "%");

var dayFour = moment(response.list[24].dt_txt).format("ddd, MMM D");

// Transfer day 4 content to HTML
$(".day-four-date").html("<h6>" + dayFour + "</h6>");
$(".day-four-icon").html("<img src='https://openweathermap.org/img/w/" + response.list[24].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
$(".day-four-humidity").text("Humidity: " + response.list[24].main.humidity + "%");

var dayFive = moment(response.list[32].dt_txt).format("ddd, MMM D");

// Transfer day 5 content to HTML
$(".day-five-date").html("<h6>" + dayFive + "</h6>");
$(".day-five-icon").html("<img src='https://openweathermap.org/img/w/" + response.list[32].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
$(".day-five-humidity").text("Humidity: " + response.list[32].main.humidity + "%");



});

var currentDay = moment().format("dddd, MMMM Do");

function insertCurrentDay() {
    $(".current-date").text(currentDay);
};

insertCurrentDay();

console.log(currentDay);
