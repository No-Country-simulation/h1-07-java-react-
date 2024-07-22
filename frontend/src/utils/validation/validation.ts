import * as Yup from 'yup';

export const validationSchemaPatient = Yup.object({
  nombre: Yup.string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .required('El nombre es obligatoria'),
  apellido: Yup.string()
    .min(2, 'El apellido debe tener al menos 2 caracteres')
    .required('El apellido es obligatoria'),
  password: Yup.string()
    .min(6, 'La contraseña debe tener mas de 8 caracteres')
    .required('La contraseña es obligatoria'),
  numeroDocumento: Yup.string()
    .matches(/^[0-9]+$/, 'El documento debe contener solo números')
    .min(8, 'El documento debe tener al menos 8 caracteres')
    .max(8, 'El documento debe tener al menos 8 caracteres')
    .required('El documento es obligatoria'),
  email: Yup.string()
    .email('Correo electrónico inválido')
    .required('El correo electrónico es obligatorio'),
  fechaNacimiento: Yup.date()
    .required("Ingresar fecha de nacimiento")
});

export const validationSchema = Yup.object({
	email: Yup.string()
		.email('Correo electrónico inválido')
		.required('El correo electrónico es obligatorio'),
	password: Yup.string()
		.min(6, 'La contraseña debe tener mas de 8 caracteres')
		.required('La contraseña es obligatoria'),
	nombre: Yup.string()
		.min(2, 'El nombre debe tener al menos 2 caracteres')
		.required('El nombre es obligatoria'),
	apellido: Yup.string()
		.min(2, 'El apellido debe tener al menos 2 caracteres')
		.required('El apellido es obligatoria'),
	telefono: Yup.string()
		.matches(/^[0-9]+$/, 'El teléfono debe contener solo números')
		.min(10, 'El teléfono debe tener al menos 10 caracteres')
		.required('El teléfono es obligatoria'),
	localidad: Yup.string()
		.min(2, 'La localidad debe tener al menos 2 caracteres')
		.required('La localidad es obligatoria'),
	provincia: Yup.string()
		.min(2, 'La provincia debe tener al menos 2 caracteres')
		.required('La provincia es obligatoria'),
	licencia: Yup.string()
		.matches(/^[A-Za-z0-9]+$/, 'La licencia debe contener solo letras y números')
		.required('La licencia es obligatoria')
});

export const validationSchemaTreatment = Yup.object({
  // descripcion: Yup.string()
  //   .required('Ingresar descripción del tratamiento'),
})

export const validationSchemaLogin = Yup.object({
  email: Yup.string()
    .email('Correo electrónico inválido')
    .required('El correo electrónico es obligatorio'),
  password: Yup.string()
    .min(6, 'La contraseña debe tener mas de 6 caracteres')
    .required('La contraseña es obligatoria'),
});