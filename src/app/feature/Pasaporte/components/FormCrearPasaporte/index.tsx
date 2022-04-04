import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as Yup from 'yup';
import { Button } from 'app/shared/components/Button';
import { FormikHelpers } from 'formik/dist/types';
import { Input } from 'app/shared/components/Input';
import { Pasaporte } from '../../models/Pasaporte';
import { SpanError } from './styles';
import { useFormik } from 'formik';

type Nullable<T> = T | null;

interface FormValues {
  fullname: string;
  address: string;
  birthdate: string;
  document_id: number;
  application_date: string;
  appointment_date?:  Nullable<string>;
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
  document_id: Yup.number().required('El campo cédula es requerido.'),
  application_date: Yup.string().required('El campo fecha de solicitud es requerido.'),
  appointment_date: Yup.string().nullable(),
  amount: Yup.number().nullable(),
  id: Yup.number().nullable(),
});

export const FormCrearPasaporte: React.FC<FormCrearPasaporteProp> = ({
  onSubmit,
  disabled,
  formTitle,
  initialValues = {
    fullname:'',
    address: 'la vega',
    birthdate: '',
    document_id: 149080,
    application_date: '',
    appointment_date: null,
    amount: null,
    id: null,
  },
}) => {
  const handleSubmit = (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    console.log('pasando on submit');
    onSubmit({
      fullname: values.fullname,
      address: values.address,
      birthdate: values.birthdate,
      document_id: values.document_id,
      application_date: values.application_date,
      appointment_date: values.appointment_date,
      amount: values.amount,
      id: values.id,
    });
    resetForm();
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2>{formTitle}</h2>
      <Input
        disabled={disabled}
        name="fullname"
        placeholder="Nombre y Apellido"
        value={formik.values.fullname}
        onChange={formik.handleChange}
      />
      {formik.touched.fullname && formik.errors.fullname && (
        <SpanError>{formik.errors.fullname}</SpanError>
      )}
      <Input
        disabled={disabled}
        name="address"
        placeholder="Dirección"
        value={formik.values.address}
        onChange={formik.handleChange}
      />
      {formik.touched.address && formik.errors.address && (
        <SpanError>{formik.errors.address}</SpanError>
      )}
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
      <Input
      type='number'
        disabled={disabled}
        name="document_id"
        placeholder="Cedula"
        value={formik.values.document_id}
        onChange={formik.handleChange}
      />
      {formik.touched.document_id && formik.errors.document_id && (
        <SpanError>{formik.errors.document_id}</SpanError>
      )}
      <Input
        type='date'
        disabled={disabled}
        name="application_date"
        placeholder="Cedula"
        value={formik.values.application_date}
        onChange={formik.handleChange}
      />
      {formik.touched.application_date && formik.errors.application_date && (
        <SpanError>{formik.errors.application_date}</SpanError>
      )}
      <Input
        type='hidden'
        disabled={disabled}
        name="appointment_date"
        value={formik.values.application_date}
      />
      <Input
        type='hidden'
        disabled={disabled}
        name="amount"
        value={formik.values.application_date}

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
    document_id: PropTypes.number.isRequired,
    application_date: PropTypes.string.isRequired,
    appointment_date: PropTypes.string,
    amount: PropTypes.number,
  }),
};
