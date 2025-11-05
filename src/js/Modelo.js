class Modelo {
  ciudad = "buenos aires";
  dataApp = {};

  establecerCiudad(nuevaCiudad) {
    this.ciudad = nuevaCiudad;
  }

  cargarDatos(obj) {
    this.dataApp = obj;
  }

  fahrenheitACelsius = (fahrenheit) => Math.round(((fahrenheit - 32) * 5) / 9);

  celsiusToFahrenheit = (celsius) => Math.round((celsius * 9) / 5 + 32);

  async consultarDatos() {
    try {
      let requestUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${this.ciudad}?unitGroup=us&key=V33JSMWN2M8M4GGE7BWX3HPJA&contentType=json`;
      console.log(requestUrl);
      const response = await fetch(requestUrl);
      //console.log(response);
      const data = await response.json();
      console.log(data);

      const dataApp = {
        ciudad: `${data.resolvedAddress}`,
        fecha: `${data.days[0].datetime}`,
        temp: `${this.fahrenheitACelsius(data.days[0].temp)}`,
        tempMax: `${this.fahrenheitACelsius(data.days[0].tempmax)}`,
        tempMin: `${this.fahrenheitACelsius(data.days[0].tempmin)}`,
        sensTermica: `${this.fahrenheitACelsius(data.days[0].feelslike)}`,
        humedad: `${Math.trunc(data.days[0].humidity)}`,
        probPrecipitaciones: `${Math.trunc(data.days[0].precipprob)}`,
        velViento: `${Math.trunc(data.days[0].windspeed)}`,
        condicion: `${data.days[0].conditions}`,
        icon: `${data.days[0].icon}`,
      };

      this.cargarDatos(dataApp);
    } catch (error) {
      console.log(error);
    }
  }

  cambiarACelcius() {
    this.dataApp.temp = this.fahrenheitACelsius(this.dataApp.temp);
    this.dataApp.tempMax = this.fahrenheitACelsius(this.dataApp.tempMax);
    this.dataApp.tempMin = this.fahrenheitACelsius(this.dataApp.tempMin);
    this.dataApp.sensTermica = this.fahrenheitACelsius(
      this.dataApp.sensTermica
    );
  }
}

const modelo = new Modelo();

export { modelo };
