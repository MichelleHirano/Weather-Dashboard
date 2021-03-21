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
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + apiKey;
    var queryURLFive = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + apiKey;

 //AJAX to call API

 $.ajax({
     url: queryURL,
     method:'GET'
 })
 .then(function(response){
     console.log(queryURL);
     console.log(response);
 }
 )

 //Append
 $('.city').html('<h1>'+ response.name + '</h1>');
 $('.icon').html("<img src='https://openweathermap.org/img/w/" + response.weather[0].icon + ".png' >" );
 $('.wind').text("Wind Speed: " + response.wind.speed + " MPH");
 $('.humidity').text("Humidity: " + response.main.humidity + "%");
 