import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as Yup from 'yup';
import { Button } from 'app/shared/components/Button';
import { FormikHelpers } from 'formik/dist/types';
import { Input } from 'app/shared/components/Input';
import { Pasaporte } from '../../models/Pasaporte';
import { SpanError } from './styles';
import { useFormik } from 'formik';

interface FormValues {
  fullname: string;
  address: string;
  birthdate: string;
  document_id: number;
  application_date: string;
}

interface FormCrearPasaporteProp {
  onSubmit: (payload: Pasaporte) => any;
  disabled?: boolean;
  formTitle: string;
  initialValues?: FormValues;
}

const validationSchema = Yup.object().shape<FormValues>({
  fullname: Yup.string().required('El campo title es requerido.'),
  address: Yup.string().required('El campo slug es requerido.'),
  birthdate: Yup.string().required('El campo body es requerido.'),
  document_id: Yup.number().required('El campo body es requerido.'),
  application_date: Yup.string().required('El campo body es requerido.'),
});

export const FormCrearPasaporte: React.FC<FormCrearPasaporteProp> = ({
  onSubmit,
  disabled,
  formTitle,
  initialValues = {
    fullname:'',
    address: '',
    birthdate: '',
    document_id: 0,
    application_date: '',
  },
}) => {
  const handleSubmit = (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    onSubmit({
      fullname: values.fullname,
      address: values.address,
      birthdate: values.birthdate,
      document_id: values.document_id,
      application_date: values.application_date,
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
        name="title"
        placeholder="Nombre y Apellido"
        value={formik.values.fullname}
        onChange={formik.handleChange}
      />
      {formik.touched.fullname && formik.errors.fullname && (
        <SpanError>{formik.errors.fullname}</SpanError>
      )}
      
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
  }),
};
