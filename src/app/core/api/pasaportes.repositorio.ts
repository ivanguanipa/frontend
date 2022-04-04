import { Pasaporte } from 'app/feature/Pasaporte/models/Pasaporte';
import { axiosIntance } from '../config/AxiosConfig';

const NUMERO_REGISTROS = 10;
const limit = (count: number, p: number) =>
  `limit=${count}&offset=${p ? p * count : 0}`;

export const PasaporteRepositorio = {
  consultarPorPagina: (page: number) =>
    axiosIntance.get(`/pasaportes?${limit(NUMERO_REGISTROS, page)}`),
  eliminarPasaporte: (id: any) =>{
    console.log('PasaporteRepositorio','pasando Eliminar Pasaporte');
   return  axiosIntance.delete(`/pasaportes/delete`, {data:{id}});
  },
  agregarPasaporte: (pasaporte: Pasaporte) =>{
    console.log('PasaporteRepositorio','pasando Eliminar Pasaporte');
   return  axiosIntance.post(`/pasaportes`, {
    address: pasaporte.address,
    application_date: pasaporte.application_date,
    birthdate: pasaporte.birthdate,
    document_id: pasaporte.document_id,
    fullname: pasaporte.fullname,
   });
  }
    
};
