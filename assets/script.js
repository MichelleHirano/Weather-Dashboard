const apiKey = "0352e48c79b86836d1e46ddfaf45a3ac";



    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=0352e48c79b86836d1e46ddfaf45a3ac";

    fetch(queryURL)
    .then((response) =>{
        return response.json();
        console.log(response);
    })
