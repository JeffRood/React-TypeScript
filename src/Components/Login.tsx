import { useEffect, useReducer } from 'react';

interface AuthState {
    validando: boolean;
    token: string | null;
    username: string;
    nombre: string;
    
}
const initialState: AuthState = {
    validando: true,
    token: null,
    username: '',
    nombre: '',
}

type LoginPayload = {
    username: string,
    nombre: string
}

type AuthAction = 
        | {type: 'logout'}
        | {type: 'login', payload: LoginPayload };

// la action tiene que estar definida con antiguedad del codigo 
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'logout':
               return {
                   validando: false,
                   token: null,
                   username: '',
                   nombre: ''
               }
        case  'login':
                const { nombre, username} = action.payload;
                return {
                    validando: false,
                    token: 'ABC123',
                    username,
                    nombre
                }
        default:
            return state;
    }
}

export const Login = () => {
    // Usereducer es una altenativa al useState cuando tenemos estados mas elaborado y cambia de diferente manera
    // Reducer es una funcion que devuelve un nuevo estado
    // dispatch es una accion que sirve para disparar acciones
   const [{validando, token, nombre}, dispatch] = useReducer(authReducer, initialState)

   useEffect(() => {
      setTimeout(() => {
          dispatch({type: 'logout'})
      }, 1500);
   }, [])

    const login = () => {
        dispatch({ type: 'login', payload: {username: 'JefF_Rood', nombre: 'Jeffry Rodriguez'}})
    }
    const LogOut = () => {
        dispatch({ type: 'logout'})
    }
   if (validando) {
       return(
       <>
        
        <h3> Login </h3>

        <div className="alert alert-info">
        Validando
       </div>
       </>
       )
   }
    return (
        <>
        <h3> Login </h3>
         
         {
             (token) ?   <div className="alert alert-success"> autenticado como {nombre} </div> : <div className="alert alert-danger">  No authenticado </div>
         }
            
           {
                (token) ? 
                (
                    <button className="btn btn-danger"  onClick={LogOut}>
                    logout
                </button>
                ) : 
                (
                    <button className="btn btn-primary" onClick={login}>
                    login
                </button>
                )
           }

        
      
        </>
    )
}
