// Personal API Key for OpenWeatherMap API
const apiKey = '00289487ec42986f287e92fe3169b5c2&units=metric';
const apiURL = 'https://api.openweathermap.org/data/2.5/weather';



// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);



/* Function called by event listener */
function performAction(e) {
  const zip = document.getElementById('zip').value;
  const country = document.getElementById('country').value;
  const feelings = document.getElementById('feelings').value;

  // get weather data
  getWeather(apiURL, zip, country, apiKey)
  // post data to the app
  .then(function(data) {
    // format the time of data calculation (dt) into a nice date 
    // https://coderrocketfuel.com/article/convert-a-unix-timestamp-to-a-date-in-vanilla-javascript
    const timestamp = data.dt;
    const date = new Date(timestamp * 1000); // in milliseconds
    const formattedDate = date.toLocaleString();

    postWeather('/addweather', {
      date: formattedDate, 
      temperature: data.main.temp, 
      content: feelings
    });

    //update ui
    updateUI()
  });
}



/* Function to GET Web API Data*/
const getWeather = async (apiURL, zip, country, apiKey) => {
  const res = await fetch(apiURL + '?zip=' + zip + ',' + country + '&appid=' + apiKey);

  try {
    const data = await res.json();
    return data;

  } catch(error) {
    console.log("error!", error);
  }
}



/* Function to POST data */
const postWeather = async (url, data) => {
  const res = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  try {
    const newData = await res.json();
    return newData;

  } catch(error) {
    console.log("error!", error);
  }
};



/* Update UI */
const updateUI = async () => {
  const req = await fetch("/all");

  try {
    const allData = await req.json();
    const last = allData.length - 1;
    
    // make the part visible
    const entry = document.getElementById('entry');
    entry.style.display = 'block';

    // populate the divs
    document.getElementById('date').innerHTML = allData[last].date;
    document.getElementById('temperature').innerHTML = Math.round(allData[last].temperature) + ' °C';
    document.getElementById('content').innerHTML = 'I am feeling ' + allData[last].content;

    /* 
    // display previous entries
    const previous = document.getElementById('previousEntries');
     */
  } catch(error) {
    console.log("error", error);
  }
}