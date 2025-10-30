import { modelo } from "./Modelo";
import { vista } from "./Vista";

class Controlador {
  DOMContentLoaded() {
    console.log("Hello World");
  }
  click(e) {
    console.log("Eventos Click");
  }
  submit(e) {
    console.log("Eventos Submit");
  }
}

const controlador = new Controlador();

document.addEventListener("DOMContentLoaded", controlador.DOMContentLoaded);
document.addEventListener("click", controlador.click);
document.addEventListener("submit", controlador.submit);

export { controlador };
