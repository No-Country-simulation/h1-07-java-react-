import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

interface FormValues {
    username: string;
    password: string;
}

export const Login: React.FC = () => {
    // Función para validar los campos del formulario
    const validate = (values: FormValues) => {
        const errors: Partial<FormValues> = {};

        if (!values.username) {
            errors.username = 'Usuario requerido';
        }

        if (!values.password) {
            errors.password = 'Contraseña requerida';
        }

        return errors;
    };

    // Función que maneja el envío del formulario
    const handleSubmit = (values: FormValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
        // Aquí puedes manejar la lógica de envío del formulario
        console.log('Valores del formulario:', values);
        setSubmitting(false); // Marca el estado de envío como falso
    };

    return (
        <div className="flex justify-center items-center h-screen ">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold mb-6 text-center">Formulario de Autenticación</h2>
                <Formik
                    initialValues={{ username: '', password: '' }} // Valores iniciales del formulario
                    validate={validate} // Función para validar los campos
                    onSubmit={handleSubmit} // Función que maneja el envío del formulario
                >
                    {({ isSubmitting }) => (
                        <Form>
                            {/* Campo de entrada para el usuario */}
                            <div className="mb-3">
                                <Field
                                    type="text"
                                    name="username"
                                    placeholder="Usuario"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                />
                                <ErrorMessage name="username" component="p" className="text-red-500 mt-1" />
                                {/* Mensaje de error si el campo de usuario no es válido */}
                            </div>

                            {/* Campo de entrada para la contraseña */}
                            <div className="mb-3">
                                <Field
                                    type="password"
                                    name="password"
                                    placeholder="Contraseña"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                />
                                <ErrorMessage name="password" component="p" className="text-red-500 mt-1" />
                                {/* Mensaje de error si el campo de contraseña no es válido */}
                            </div>

                            {/* Botón de envío del formulario */}
                            <button
                                type="submit"
                                disabled={isSubmitting} // Deshabilita el botón mientras se está enviando el formulario
                                className={`w-full py-2 px-4 bg-blue-500 text-white rounded-md focus:outline-none ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
                                    }`}
                            >
                                {isSubmitting ? 'Iniciando sesión...' : 'Iniciar sesión'}
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Login;
