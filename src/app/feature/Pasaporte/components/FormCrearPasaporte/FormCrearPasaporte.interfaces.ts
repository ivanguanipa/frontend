import { Pasaporte } from '../../models/Pasaporte';

type Nullable<T> = T | null ;

export interface FormValues {
  fullname: string;
  address: string;
  birthdate: string;
  documentId: number;
  applicationDate: string;
  appointmentDate?:  Nullable<string>;
  id?:  Nullable<number>;
  amount?:  Nullable<number>;
}

export interface FormCrearPasaporteProp {
  onSubmit: (payload: Pasaporte) => void;
  disabled?: boolean;
  formTitle: string;
  initialValues?: FormValues;
}
