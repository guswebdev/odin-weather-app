import { modelo } from "./Modelo";
import { vista } from "./Vista";

class Submit {
  async buscar() {
    console.log(vista.$inputBuscador.value);
    modelo.establecerCiudad(vista.$inputBuscador.value);
    console.log(modelo.ciudad);
    await modelo.consultarDatos();
    vista.mostrarDatosDom();
  }
}

const submit = new Submit();

export { submit };
