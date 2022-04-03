import { axiosIntance } from '../config/AxiosConfig';

const NUMERO_REGISTROS = 10;
const limit = (count: number, p: number) =>
  `limit=${count}&offset=${p ? p * count : 0}`;

export const PasaporteRepositorio = {
  consultarPorPagina: (page: number) =>
    axiosIntance.get(`/pasaportes?${limit(NUMERO_REGISTROS, page)}`),
};
