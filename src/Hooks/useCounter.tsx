import { useState } from 'react';

export const useCounter = (inicial: number = 0) => {
    const [valor, setValor] = useState(inicial)
    const acumular = (sum: number) => 
    {
        setValor(valor + sum);
    }
    return {valor, acumular}
     
}
