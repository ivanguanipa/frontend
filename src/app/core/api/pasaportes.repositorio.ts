import { Pasaporte } from 'app/feature/Pasaporte/models/Pasaporte';
import { axiosIntance } from '../config/AxiosConfig';

const NUMERO_REGISTROS = 10;
export const limit = (count: number, p: number) =>
  `limit=${count}&offset=${p ? p * count : 0}`;

export const PasaporteRepositorio = {
  consultarPorPagina: (page: number) =>
    axiosIntance.get(`/pasaportes?${limit(NUMERO_REGISTROS, page)}`),
  mostrarPasaporte: (id: string) =>
    axiosIntance.get(`/pasaportes/show/${id}`),
  eliminarPasaporte: (id: any) =>{
   return  axiosIntance.delete(`/pasaportes/delete`, {data:{id}});
  },
  agregarPasaporte: (pasaporte: Pasaporte) =>{
   return  axiosIntance.post(`/pasaportes`, {
    address: pasaporte.address,
    applicationDate: pasaporte.applicationDate,
    birthdate: pasaporte.birthdate,
    documentId: pasaporte.documentId,
    fullname: pasaporte.fullname,
   });
  }
    
};
