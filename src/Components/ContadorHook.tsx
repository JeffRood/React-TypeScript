
import { useCounter } from '../Hooks/useCounter';

export const ContadorHook = () => {
    const {valor, acumular} = useCounter(3)

    return (
        <>
             <h3>  Contador Hook: <small> { valor} </small> - CustomHook  </h3> 
             <button className="btn btn-primary" style={{padding: 10}} onClick={() => acumular(1)}> +1</button>
             <button className="btn btn-secondary" style={{marginLeft: 10, padding: 10}}  onClick={() => acumular(-1)}> -1</button>

        </>
    )
}
