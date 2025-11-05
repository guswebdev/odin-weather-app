import { vista } from "./Vista";
import { submit } from "./Submit";

class Controlador {
  domContentLoaded(){
    //vista.cargarImagen("clear-day.png")

    /*
    Me falta completar bien lo de los iconos
    Tambien me gustaria traducir textos
    Acomodar las fechas y tal vez los nombre de lugares
    Validar el Formulario
    Mejorar los estilos de los temas
    */
  }
  submit(e) {
    e.preventDefault();

    if (e.target === vista.$form) {
      submit.buscar();
    }
  }
}

const controlador = new Controlador();
document.addEventListener("DOMContentLoaded", controlador.domContentLoaded);
document.addEventListener("submit", controlador.submit);

export { controlador };
