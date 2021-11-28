import { useState } from 'react';

import { useForm } from '../Hooks/useForm';

export const Formularios = () => {
   
    const {  state, onChange, email, password} = useForm({
        email: '',
        password: ''
    });

    return (
        <>
         <h3> Formularios</h3>
   
       <input type="text" className="form-control" placeholder="email" value={email} onChange={({target}) => onChange(target.value ,'email' )} />
       <input type="text" className="form-control mt-2 mb-2" placeholder="password" value={password}  onChange={({target}) => onChange(target.value ,'password' )}  />

       <code>
           <pre>
              {JSON.stringify(state, null, 2)} 
           </pre>
       </code>
        </>
    )
}
