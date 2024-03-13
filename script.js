const apiKey = "48e09f6206cb1d379deb48d8056add63";

const apiUrl = new URL(`https://api.openweathermap.org/data/2.5/weather`)
apiUrl.searchParams.append("units", "metric")
apiUrl.searchParams.append("appid", apiKey)

async function checkWeather(city = "new delhi"){
    apiUrl.searchParams.append("q", city)
    const response = await fetch(apiUrl+`&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=math.round("data.main.temp")+"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed +"Km/H";

    // apiUrl.searchParams.append("q", city)

    // console.log(apiUrl.toString())

    // const response = await fetch(apiUrl);

    // var data = await response.json();

    // console.log(data);
}
   
checkWeather()


