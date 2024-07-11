import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

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

const SingUp: React.FC = () => {
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
                    <Form className="max-w-lg mx-auto p-4 h-full mt-[7rem]">
                        <div className='mb-6'>
                            <h1 className='font-bold text-4xl text-center'>Bienvenido</h1>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="firstName">Nombre</label>
                            <Field
                                type="text"
                                id="firstName"
                                name="firstName"
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                            />
                            <ErrorMessage name="firstName" component="div" className="text-red-500" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="lastName">Apellido</label>
                            <Field
                                type="text"
                                id="lastName"
                                name="lastName"
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                            />
                            <ErrorMessage name="lastName" component="div" className="text-red-500" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="age">Edad</label>
                            <Field
                                type="number"
                                id="age"
                                name="age"
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                            />
                            <ErrorMessage name="age" component="div" className="text-red-500" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email">Correo Electrónico</label>
                            <Field
                                type="email"
                                id="email"
                                name="email"
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                            />
                            <ErrorMessage name="email" component="div" className="text-red-500" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password">Contraseña</label>
                            <Field
                                type="password"
                                id="password"
                                name="password"
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                            />
                            <ErrorMessage name="password" component="div" className="text-red-500" />
                        </div>

                        <div className=''>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white p-2 rounded"
                                disabled={isSubmitting}
                            >
                                Registrar
                            </button>
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

export default SingUp;
