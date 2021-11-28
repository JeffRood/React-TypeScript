import { useEffect, useRef, useState } from 'react';

import { reqResApi } from '../api/reqRes';
import { ReqResList, Usuario } from '../interfaces/reqRes';

export const useUsuario = () => {
    const pageRef = useRef(1)
    const [users, setUsers] = useState<Usuario[]>([])

    useEffect(() => {
        cargarUsuario();
     }, [])
    const cargarUsuario = async () => {
        const res = await reqResApi.get<ReqResList>('/users', {
            params: {
                page: pageRef.current
            }
        })
        if (res.data.data.length > 0) {
            setUsers(res.data.data)
        } else {
            pageRef.current--;
            
            alert("No hay mas registro ")
        } 
    }
    
    const paginaSiguientes =async () => {
          pageRef.current++;
          cargarUsuario();
      }
      const paginaAnterior =async () => {
        if (pageRef.current > 1) {
            pageRef.current--;
            cargarUsuario();
        }
      }
        return {users, paginaSiguientes, paginaAnterior}
}