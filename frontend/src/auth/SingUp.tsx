import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { EmailIcon, LockIcon, UserIcon } from '../components/icons/Icons';
import { Button } from '@nextui-org/react';

interface RegisterFormValues {
	firstName: string;
	lastName: string;
	age: number;
	email: string;
	password: string;
}

const initialValues: RegisterFormValues = {
	firstName: '',
	lastName: '',
	age: 0,
	email: '',
	password: ''
};

const validationSchema = Yup.object({
	firstName: Yup.string()
		.required('El nombre es obligatorio'),
	lastName: Yup.string()
		.required('El apellido es obligatorio'),
	age: Yup.number()
		.required('La edad es obligatoria')
		.min(1, 'La edad debe ser mayor que 0'),
	email: Yup.string()
		.email('Correo electrónico inválido')
		.required('El correo electrónico es obligatorio'),
	password: Yup.string()
		.min(8, 'La contraseña debe tener al menos 8 caracteres')
		.required('La contraseña es obligatoria')
});

export const SingUp: React.FC = () => {
	const handleSubmit = (values: RegisterFormValues) => {
		
		console.log('Formulario enviado', values);

	};

	return (
		<form action="">
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
				
			>
				{({ isSubmitting }) => (
					<Form className="border-2 w-96 max-md:w-full m-auto p-4 max-md:p-8 mt-8 max-w-md">
						<div className='mb-6'>
							<h1 className=' text-2xl font-bold tracking-tight'>Crear cuenta</h1>
							<p className=' text-sm'>Introduce la información necesaria</p>						</div>
						<div className="mb-4">
							<label className=' font-semibold flex items-center gap-2 pl-2' htmlFor="name"><UserIcon width={15} height={15}></UserIcon> Nombre</label>
							<Field
								type="text"
								id="firstName"
								name="firstName"
								className="w-full p-2 border border-gray-300 rounded mt-1"
							/>
							<ErrorMessage name="firstName" component="div" className="text-red-500" />
						</div>

						<div className="mb-4">
							<label className=' font-semibold flex items-center gap-2 pl-2'  htmlFor="lastName"><UserIcon width={15} height={15}></UserIcon> Apellido</label>
							<Field
								type="text"
								id="lastName"
								name="lastName"
								className="w-full p-2 border border-gray-300 rounded mt-1"
							/>
							<ErrorMessage name="lastName" component="div" className="text-red-500" />
						</div>

						<div className="mb-4">
							<label className='font-semibold flex items-center gap-2 pl-2' htmlFor="age">Edad</label>
							<Field
								type="number"
								id="age"
								name="age"
								className="w-full p-2 border border-gray-300 rounded mt-1"
							/>
							<ErrorMessage name="age" component="div" className="text-red-500" />
						</div>

						<div className="mb-4">
							<label className='font-semibold flex items-center gap-2 pl-2' htmlFor="email"><EmailIcon width={15} height={15}></EmailIcon>  Correo Electrónico</label>
							<Field
								type="email"
								id="email"
								name="email"
								className="w-full p-2 border border-gray-300 rounded mt-1"
							/>
							<ErrorMessage name="email" component="div" className="text-red-500" />
						</div>

						<div className="mb-4">
							<label className=' font-semibold flex items-center gap-2 pl-2' htmlFor="password"><LockIcon width={15} height={15}></LockIcon> Contraseña</label>
							<Field
								type="password"
								id="password"
								name="password"
								className="w-full p-2 border border-gray-300 rounded mt-1"
							/>
							<ErrorMessage name="password" component="div" className="text-red-500" />
						</div>

						<div className=''>
							<Button
								type="submit"
								className="h-10 w-full font-semibold bg-secondary-brand-dark text-white"
								disabled={isSubmitting}
							>
								Registrar
							</Button>
							<button onClick={() => { }} className='w-full  mt-2 p-2 rounded hover:text-blue-500'>
								<Link to="/">Iniciar sesión</Link>
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</form>
	);
};


