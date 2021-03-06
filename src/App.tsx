import React from 'react';

import { Contador } from './Components/Contador';
import { ContadorHook } from './Components/ContadorHook';
import { Formularios } from './Components/Formularios';
import { Login } from './Components/Login';
import { Users } from './Components/Usuario';
import Funciones from './TypeScript/Funciones';
import { ObjectosLiterales } from './TypeScript/ObjectosLiterales';
import { TiposBasicos } from './TypeScript/TiposBasicos';

 const App = () => {
  return (
    <div className="mt-2">
      <h1> Introduccion a Ts-React </h1>
         <br />
    <h2 style={{textAlign: 'center'}}> Componentes </h2>
  <hr />
    <Formularios/>
  <hr />

    <Users/>
  <hr />
  <Login/>
        <hr/>
      <Contador />
  <hr />
  <ContadorHook/>


      <br />
      <h2 style={{textAlign: 'center'}}> TypeScript </h2>
      <hr/>
      <TiposBasicos/>
      <hr/>
      <ObjectosLiterales/>
      <hr />
      <Funciones/>
    </div>
  )
}

export default App;