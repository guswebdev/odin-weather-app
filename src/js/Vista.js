import { modelo } from "./Modelo";

const d = document;

class Vista {
  $form = d.querySelector("form");
  $inputBuscador = d.querySelector(`[type="search"]`);
  $contianerMainBody = d.querySelector(`[data-container="mainBody"]`);

  mostrarDatosDom() {
    this.$contianerMainBody.innerHTML = JSON.stringify(modelo.dataApp);
  }
}

const vista = new Vista();

export { vista };
