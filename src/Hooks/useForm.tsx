import { useState } from 'react';

export const useForm = <T extends object> (formulario: T) => {
    const [state, setState] = useState(formulario)

    const onChange = (value: string, camp: keyof T) => {
        setState({
          ...state,
          [camp]: value
        });
    }

    return {
        ...state,
        state,
        onChange
    };
}
