import { modelo } from "./Modelo";

const d = document;

class Vista {
  $root = d.documentElement;
  $form = d.querySelector("form");
  $loader = document.getElementById("loader");
  $inputBuscador = d.querySelector(`[type="search"]`);
  $contianerMainBody = d.querySelector(`[data-container="mainBody"]`);
  $templateInfo = d.getElementById("template-info").content;
  $fragment = d.createDocumentFragment();

  mostrarDatosDom() {
    this.$contianerMainBody.innerHTML = JSON.stringify(modelo.dataApp);
  }

  asignarTextContentTemplate(apuntador, string) {
    this.$templateInfo.querySelector(apuntador).textContent = string;
  }

  asignarPropiedadRoot(prop, valor) {
    this.$root.style.setProperty(prop, valor);
  }

  asignarColorBlanco() {
    this.asignarPropiedadRoot("--color-letra-principal", "var(--color-blanco)");
  }
  asignarColorNegro() {
    this.asignarPropiedadRoot("--color-letra-principal", "var(--color-negro)");
  }

  asignarColorTema(color) {
    this.asignarPropiedadRoot("--color-principal", `var(--color-${color})`);
    this.asignarPropiedadRoot(
      "--color-principal-dark",
      `var(--color-${color}-dark)`
    );
  }

  cambiarTema(info) {
    if (info.temp <= 10) {
      this.asignarColorTema("azul");
      this.asignarColorBlanco();
    } else if (info.temp > 10 && info.temp <= 20) {
      this.asignarColorTema("celeste");
      this.asignarColorNegro();
    } else if (info.temp > 20 && info.temp <= 30) {
      this.asignarColorTema("amarillo");
      this.asignarColorNegro();
    } else if (info.temp > 30) {
      this.asignarColorTema("naranja");
      this.asignarColorBlanco();
    }
  }

  formatearNombresIconos(str) {
    return str.replace(/-(\w)/g, (match, p1) => {
      return p1.toUpperCase();
    });
  }

  async cargarImagen(nombre) {
    /*El nombre tiene que ser "clear-day.png" */
    console.log(nombre);
    await import(
      /* webpackMode: "lazy-once" */ /* webpackMode: "eager" */ `../assets/icon/${nombre}`
    )
      .then((modulo) => {
        this.$templateInfo.querySelector(`[data-info="icon"]`).src =
          modulo.default;
      })
      .catch((err) => {
        console.error("Error al cargar la imagen");
      });
  }

  crearNodoTemplate(info) {
    this.asignarTextContentTemplate(`[data-info="ciudad"]`, info.ciudad);
    this.asignarTextContentTemplate(`[data-info="fecha"]`, info.fecha);
    this.asignarTextContentTemplate(`[data-info="temp"]`, info.temp);
    //this.asignarTextContentTemplate(`[data-info="icon"]`, info.icon);
    this.asignarTextContentTemplate(`[data-info="condicion"]`, info.condicion);
    this.asignarTextContentTemplate(`[data-info="min"]`, info.tempMin);
    this.asignarTextContentTemplate(`[data-info="max"]`, info.tempMax);
    this.asignarTextContentTemplate(
      `[data-info="sensacion"]`,
      info.sensTermica
    );
    this.asignarTextContentTemplate(
      `[data-info="precipitaciones"]`,
      info.probPrecipitaciones
    );
    this.asignarTextContentTemplate(`[data-info="humedad"]`, info.humedad);
    this.asignarTextContentTemplate(`[data-info="viento"]`, info.velViento);
    /*
    this.$templateInfo.querySelector(`[data-info="icon"]`).src = `${clearDay}`;
    this.$templateInfo.querySelector(`[data-info="icon"]`).alt = `${info.icon}`;
    */

    this.cargarImagen(`${info.icon}.png`);

    let clone = this.$templateInfo.cloneNode("true");

    this.$fragment.appendChild(clone);

    this.$contianerMainBody.appendChild(this.$fragment);
  }

  renderInfo() {
    const info = modelo.dataApp;
    console.log(info);

    this.cambiarTema(info);

    this.crearNodoTemplate(info);
  }

  limpiarRenderInfo() {
    this.$contianerMainBody.innerHTML = "";
  }

  mostrarForm() {
    this.$form.style.display = "flex";
  }
  ocultarForm() {
    this.$form.style.display = "none";
  }
  mostrarLoader() {
    this.$loader.classList.add("active");
  }
  ocultarLoader() {
    this.$loader.classList.remove("active");
  }
}

const vista = new Vista();

export { vista };
