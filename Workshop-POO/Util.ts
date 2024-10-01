import { Persona } from "./Persona";

export const jsonPersona = (obJson: any): Persona => {
    return new Persona(
        obJson.nombre,
        obJson.edad,
        obJson.direccion
    );
}

export const crearPersonaJson = (): void =>{
    const personaJson = {
        nombre: "Dilbani C",
        edad: 25,
        direccion:{
            calle: "80 #666 b-30",
            ciudad: "Cartagena",
            pais: "Colombia"
        }

    }

    const persona = jsonPersona(personaJson);
    persona.saludar();
}