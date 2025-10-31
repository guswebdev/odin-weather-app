import { modelo } from "./Modelo";

const d = document;

class Vista {
  $form = d.querySelector("form");
  $inputBuscador = d.querySelector(`[type="search"]`);
  $contianerMainBody = d.querySelector(`[data-container="mainBody"]`);
  $templateInfo = d.getElementById("template-info").content;
  $fragment = d.createDocumentFragment();

  mostrarDatosDom() {
    this.$contianerMainBody.innerHTML = JSON.stringify(modelo.dataApp);
  }

  renderInfo() {
    const info = modelo.dataApp;
    console.log(info);

    this.$templateInfo.querySelector(`[data-info="ciudad"]`).textContent =
      info.ciudad;
    this.$templateInfo.querySelector(`[data-info="fecha"]`).textContent =
      info.fecha;
    this.$templateInfo.querySelector(`[data-info="temp"]`).textContent =
      info.temp;
    this.$templateInfo.querySelector(`[data-info="icon"]`).textContent =
      info.icon;
    this.$templateInfo.querySelector(`[data-info="condicion"]`).textContent =
      info.condicion;
    this.$templateInfo.querySelector(`[data-info="min"]`).textContent =
      info.tempMin;
    this.$templateInfo.querySelector(`[data-info="max"]`).textContent =
      info.tempMax;
    this.$templateInfo.querySelector(`[data-info="sensacion"]`).textContent =
      info.sensTermica;
    this.$templateInfo.querySelector(
      `[data-info="precipitaciones"]`
    ).textContent = info.probPrecipitaciones;
    this.$templateInfo.querySelector(`[data-info="humedad"]`).textContent =
      info.humedad;
    this.$templateInfo.querySelector(`[data-info="viento"]`).textContent =
      info.velViento;

    let clone = this.$templateInfo.cloneNode("true");

    this.$fragment.appendChild(clone);

    this.$contianerMainBody.appendChild(this.$fragment);
  }

  limpiarRenderInfo() {
    this.$contianerMainBody.innerHTML = "";
  }
}

const vista = new Vista();

export { vista };
