export default function Funciones() {
    const sumar = (a: number, b: number): number => {
       return a + b
    }

    return (
        <>
            <h3> Funciones </h3>
            <br />
            <span> El resultado es: {sumar(1, 2)} </span>
        </>
    )
}
