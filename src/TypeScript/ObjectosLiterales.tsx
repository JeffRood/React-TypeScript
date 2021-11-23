

interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion
}

interface Direccion {
    pais: string,
    casaNo: number
}
export const ObjectosLiterales = () => {
   const person: Persona = {
    nombreCompleto: 'Jeffry',
        edad: 24,
        direccion: {
            pais: 'Republica Dominicana',
            casaNo: 6
       }
   }

    return (
        <>
            <h3> Objectos Literales </h3>

            <code>
                <pre>
                    {JSON.stringify(person, null,  2)}
                </pre>
            </code>
        </>
    )
}
