import { useState } from 'react';

export const Contador = () => {
    const [valor, setValor] = useState(0)
    const acumular = (sum: number) => 
    {
        setValor(valor + sum);
    }

    return (
        <>
             <h3>  Contador: <small> { valor}</small> - UseState  </h3> 
             <button className="btn btn-primary" style={{padding: 10}} onClick={() => acumular(1)}> +1</button>
             <button className="btn btn-secondary" style={{marginLeft: 10, padding: 10}}  onClick={() => acumular(-1)}> -1</button>

        </>
    )
}
