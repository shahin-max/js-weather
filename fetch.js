class Fetch {
  async getCurrent(input) {
    const myKey = "180ff021af6e68aa100e6ab0b5b33714";

    //make request to url

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
    );

    const data = await response.json();

    console.log(data);

    return data;
  }
}
