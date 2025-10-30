class Modelo {
  ciudad = "buenos aires";
  dataApp = {};

  establecerCiudad(nuevaCiudad) {
    this.ciudad = nuevaCiudad;
  }

  cargarDatos(obj) {
    this.dataApp = obj;
  }

  async consultarDatos() {
    try {
      let requestUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${this.ciudad}?unitGroup=us&key=V33JSMWN2M8M4GGE7BWX3HPJA&contentType=json`;
      console.log(requestUrl);
      const response = await fetch(requestUrl);
      //console.log(response);
      const data = await response.json();
      //console.log(data);

      const dataApp = {
        ciudad: `${data.resolvedAddress}`,
        fecha: `${data.days[0].datetime}`,
        tempMax: `${data.days[0].tempmax}`,
        tempMin: `${data.days[0].tempmin}`,
        sensTermica: `${data.days[0].feelslike}`,
        humedad: `${data.days[0].humidity}`,
        visibilidad: `${data.days[0].visibility}`,
        precipitaciones: `${data.days[0].precip}`,
        probPrecipitaciones: `${data.days[0].precipprob}`,
        velViento: `${data.days[0].windspeed}`,
        condicion: `${data.days[0].conditions}`,
        icon: `${data.days[0].icon}`,
      };

      this.cargarDatos(dataApp);
    } catch (error) {
      console.log(error);
    }
  }
}

const modelo = new Modelo();

export { modelo };
