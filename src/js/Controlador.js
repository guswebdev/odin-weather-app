import { modelo } from "./Modelo";
import { vista } from "./Vista";
import { submit } from "./Submit";

class Controlador {
  DOMContentLoaded() {}
  click(e) {}
  submit(e) {
    e.preventDefault();

    if (e.target === vista.$form) {
      submit.buscar();
    }
  }
}

const controlador = new Controlador();

document.addEventListener("DOMContentLoaded", controlador.DOMContentLoaded);
document.addEventListener("click", controlador.click);
document.addEventListener("submit", controlador.submit);

export { controlador };
