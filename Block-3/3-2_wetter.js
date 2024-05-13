async function getData() {
  const url ="https://app-prod-ws.meteoswiss-app.ch/v1/plzDetail?plz=815500";

  try {
    const response = await fetch(url)
    if (response.status !== 200) {
      console.error(response.status)
    }
    else {
      let data = await response.json()
      //console.log(data)
      let currentWeather = (data.currentWeather);
      console.log(currentWeather.temperature);
    }
  } catch(error) {
    console.error(error)
  }
}

getData();