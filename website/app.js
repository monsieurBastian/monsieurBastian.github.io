// Personal API Key for OpenWeatherMap API
const apiKey = '00289487ec42986f287e92fe3169b5c2&units=imperial'; //const apiKey = '&appid=00289487ec42986f287e92fe3169b5c2&units=imperial';
const apiURL = 'https://api.openweathermap.org/data/2.5/weather';



// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);

function performAction(e) {
  const zip = document.getElementById('zip').value;
  const country = document.getElementById('country').value;
  getWeatherReport(apiURL, zip, country, apiKey);
}

const getWeatherReport = async (apiURL, zip, country, apiKey) => {
  const fetchURL = apiURL + '?zip=' + zip + ',' + country + '&appid=' + apiKey;
  const res = await fetch(fetchURL);

  try {
    const data = await res.json();
    console.log(data);
  } catch(error) {
    console.log("error!", error);
  }
}


/* Function called by event listener */

/* Function to GET Web API Data*/

/* Function to POST data */


/* Function to GET Project Data */

