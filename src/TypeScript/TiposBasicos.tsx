import React from 'react';

export const TiposBasicos = () => {
  // Tipos : nos permite controlar la maneda que la informacion es establecida o que podamos cambiar 
 
   const  nombre: string  = 'Jeffry';
   const edad = 24;
   const estaActivo: boolean = false;

   const poderes: string[] = ['Volar', 'Velocidad', 'Leer mente'];
     return (
      <>
      <h3 >Tipos Basicos </h3>
      
      {nombre}, {edad} , {estaActivo ? 'activo' : 'No Activo'}

   <br />
   {poderes.join(', ')}
       



      </>

    )
}
