import { modelo } from "./Modelo";
import { vista } from "./Vista";

class Submit {
  async buscar() {
    vista.mostrarLoader()
    vista.ocultarForm()
    
    modelo.establecerCiudad(vista.$inputBuscador.value);
    await modelo.consultarDatos();
    
    vista.ocultarLoader()
    vista.mostrarForm()
    
    vista.limpiarRenderInfo();
    vista.renderInfo();
  }
}

const submit = new Submit();

export { submit };
