import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as Yup from 'yup';
import { Button } from 'app/shared/components/Button';
import { FormikHelpers } from 'formik/dist/types';
import { Input } from 'app/shared/components/Input';
import { Pasaporte } from '../../models/Pasaporte';
import { SpanError } from './styles';
import { useFormik } from 'formik';

type Nullable<T> = T | null ;

interface FormValues {
  fullname: string;
  address: string;
  birthdate: string;
  documentId: number;
  applicationDate: string;
  appointmentDate?:  Nullable<string>;
  id?:  Nullable<number>;
  amount?:  Nullable<number>;
}

interface FormCrearPasaporteProp {
  onSubmit: (payload: Pasaporte) => any;
  disabled?: boolean;
  formTitle: string;
  initialValues?: FormValues;
}

const validationSchema = Yup.object().shape<FormValues>({
  fullname: Yup.string().required('El campo nombre y apellido es requerido.'),
  address: Yup.string().required('El campo dirección es requerido.'),
  birthdate: Yup.string().required('El campo fecha de nacimiento es requerido.'),
  documentId: Yup.number().moreThan(0,'El campo cédula es requerido.').required('El campo cédula es requerido.'),
  applicationDate: Yup.string().required('El campo fecha de solicitud es requerido.'),
  appointmentDate: Yup.string().nullable(),
  amount: Yup.number().nullable(),
  id: Yup.number().nullable(),
});

export const FormCrearPasaporte: React.FC<FormCrearPasaporteProp> = ({
  onSubmit,
  disabled,
  formTitle,
  initialValues = {
    fullname:'',
    address: '',
    birthdate: '',
    documentId: 0,
    applicationDate: '',
    appointmentDate: null,
    amount: null,
    id: null,
  },
}) => {
  const handleSubmit = (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    onSubmit(values);
    resetForm();
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2 style={{marginBottom:'15px'}}>{formTitle}</h2>
      <div><label htmlFor="fullname">Nombre y Apellido</label></div>
      <Input
        disabled={disabled}
        name="fullname"
        placeholder="Nombre y Apellido"
        value={formik.values.fullname}
        onChange={formik.handleChange}
      />
      {formik.errors.fullname && (
        <SpanError>{formik.errors.fullname}</SpanError>
      )}
      <div> <label htmlFor="fullname">Dirección</label></div>
      <Input
        disabled={disabled}
        name="address"
        placeholder="Dirección"
        value={formik.values.address}
        onChange={formik.handleChange}
      />
      {formik.errors.address && (
        <SpanError>{formik.errors.address}</SpanError>
      )}
      <div><label htmlFor="fullname">Fecha de Nacimiento</label></div>
      <Input
      type='date'
        disabled={disabled}
        name="birthdate"
        placeholder="Fecha de Nacimiento"
        value={formik.values.birthdate}
        onChange={formik.handleChange}
      />
      {formik.touched.birthdate && formik.errors.birthdate && (
        <SpanError>{formik.errors.birthdate}</SpanError>
      )}
      <div><label htmlFor="fullname">Cédula</label></div>
      <Input
      type='number'
        disabled={disabled}
        name="documentId"
        placeholder="Cédula"
        value={formik.values.documentId===0?'':formik.values.documentId}
        onChange={formik.handleChange}
      />
      {formik.touched.documentId && formik.errors.documentId && (
        <SpanError>{formik.errors.documentId}</SpanError>
      )}
      <div><label htmlFor="fullname">Fecha de la Solicitud</label></div>

      <Input
        type='date'
        disabled={disabled}
        name="applicationDate"
        placeholder="Fecha de la Solicitud"
        value={formik.values.applicationDate}
        onChange={formik.handleChange}
      />
      {formik.errors.applicationDate && (
        <SpanError>{formik.errors.applicationDate}</SpanError>
      )}
      <Input
        type='hidden'
        disabled={disabled}
        name="appointmentDate"
        value={formik.values.applicationDate}
      />
      <Input
        type='hidden'
        disabled={disabled}
        name="amount"
        value={formik.values.applicationDate}

      />
     
      <Button type="submit">Registrar</Button>
    </form>
  );
};

FormCrearPasaporte.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  formTitle: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  initialValues: PropTypes.shape({
    fullname: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    birthdate: PropTypes.string.isRequired,
    documentId: PropTypes.number.isRequired,
    applicationDate: PropTypes.string.isRequired,
    appointmentDate: PropTypes.string,
    amount: PropTypes.number,
  }),
};
