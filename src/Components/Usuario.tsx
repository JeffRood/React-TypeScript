
import { useUsuario } from '../Hooks/useUsuarios';
import { Usuario } from '../interfaces/reqRes';

export const Users = () => {

    const {users, paginaSiguientes, paginaAnterior} = useUsuario();
    const renderItem = ({id, avatar,email, last_name, first_name}: Usuario) => {
      return (

          <tr key={id.toString()}>
            <td> 
                <img style={{
                    width: 70,
                    borderRadius: 100
                }} src={avatar} alt={first_name} /> </td>
            <td  >  {first_name } {last_name} </td>
            <td> {email} </td>
        </tr>
           ) 
    }
    return (
        <>
           <h3> Listado Usuario </h3>  
           <table className="table">
               <thead>
                    <tr>
                        <th> Avatar </th>
                        <th> Nombre </th>
                        <th> Email </th>

                    </tr>
               </thead>
               <tbody>
              
              {users.map(usuarios => renderItem(usuarios))}

               </tbody>
           </table>
           <button className="btn btn-danger" onClick={paginaAnterior}> Anteriores </button>

               <button className="btn btn-primary" onClick={paginaSiguientes}> Siguientes </button>
        </>
    )
}
