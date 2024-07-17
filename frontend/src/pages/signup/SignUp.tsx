import * as Yup from 'yup';
import { MedicoRegister } from '../../Interfaces/interfaces';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { API_URL } from '../../api/api';
import { toast } from 'sonner';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { CardIcon, EmailIcon, HomeIcon, LoaderIcon, LockIcon, MapIcon, PhoneIcon, UserIcon } from '../../Components/icons/Icons';
import { Button } from '@nextui-org/react';


const initialValues: MedicoRegister = {
	email: "",
	password: "",
	nombre: "",
	apellido: "",
	telefono: "",
	provincia: "",
	localidad: "",
	licencia: "",
	especialidad: 1,
	financiadores: [1]
};

const validationSchema = Yup.object({
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

const SignUp: React.FC = () => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false)

	const handleSubmit = async (values: MedicoRegister) => {
		setLoading(true)
		const doctor: MedicoRegister = {
			email: values.email,
			password: values.password,
			nombre: values.nombre,
			apellido: values.apellido,
			telefono: values.telefono,
			provincia: values.provincia,
			localidad: values.localidad,
			licencia: values.licencia,
			especialidad: 1,
			financiadores: [1]
		};

		try {
			const res = await fetch(`${API_URL}/auth/registrar-medico`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(doctor)
			})
			console.log(res)
			if (res.status == 400) {
				return toast.error('El email ya esta registrado')

			}
			setLoading(false)
			navigate('/active-account')
			toast.success("Su cuenta fue creada correctamente")
		} catch (err: any) {
			if (err.status === 400) {
				toast.error('El email ya esta registrado')
			}
		} finally {
			setLoading(false)
		}
	};

	return (
		<section className="max-md:w-full mt-8 mx-auto p-4 max-w-[50rem] border-2 m">
			<div className="mb-6 text-center">
				<h1 className="text-2xl font-bold tracking-tight">Crear cuenta</h1>
				<p className="text-sm">Introduce la información necesaria</p>
			</div>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				{({ isSubmitting }) => (
					<Form className=" w-full p-4 flex flex-col gap-y-4  ">
						<div className="flex-wrap grid grid-rows-4 gap-6 max-md:grid-rows-8 max-md:gap-1 grid-flow-col max-md:gap-y-3">
							<div>
								<label className="font-semibold flex items-center gap-2 pl-2" htmlFor="email">
									<EmailIcon width={15} height={15} /> Correo Electrónico
								</label>
								<Field
									type="email"
									id="email"
									name="email"
									placeholder="Ej: tumail@mailito.com"
									className="w-full p-2 border border-gray-300 rounded mt-1"
								/>
								<ErrorMessage name="email" component="div" className=" flex-wrap text-red-500" />
							</div>
							<div>
								<label className="font-semibold flex items-center gap-2 pl-2" htmlFor="password">
									<LockIcon width={15} height={15} /> Contraseña
								</label>
								<Field
									type="password"
									id="password"
									name="password"
									placeholder="Introduzca contraseña"
									className="w-full p-2 border border-gray-300 rounded mt-1"
								/>
								<ErrorMessage name="password" component="div" className="text-red-500" />
							</div>
							<div>
								<label className="font-semibold flex items-center gap-2 pl-2" htmlFor="nombre">
									<UserIcon width={15} height={15} /> Nombre
								</label>
								<Field
									type="text"
									id="nombre"
									name="nombre"
									placeholder="Ej: Mario"
									className="w-full p-2 border border-gray-300 rounded mt-1"
								/>
								<ErrorMessage name="nombre" component="div" className="text-red-500" />
							</div>
							<div>
								<label className="font-semibold flex items-center gap-2 pl-2" htmlFor="apellido">
									<UserIcon width={15} height={15} /> Apellido
								</label>
								<Field
									type="text"
									id="apellido"
									name="apellido"
									placeholder="Ej: Hernandez"
									className="w-full p-2 border border-gray-300 rounded mt-1"
								/>
								<ErrorMessage name="apellido" component="div" className="text-red-500" />
							</div>
							<div>
								<label className="font-semibold flex items-center gap-2 pl-2" htmlFor="telefono">
									<PhoneIcon width={15} height={15} /> Teléfono
								</label>
								<Field
									type="tel"
									id="telefono"
									name="telefono"
									placeholder="Ej: 55 5555-5555"
									className="w-full p-2 border border-gray-300 rounded mt-1"
								/>
								<ErrorMessage name="telefono" component="div" className="text-red-500" />
							</div>
							<div>
								<label className="font-semibold flex items-center gap-2 pl-2" htmlFor="localidad">
									<MapIcon width={15} height={15} /> Provincia
								</label>
								<Field
									type="text"
									id="localidad"
									name="localidad"
									placeholder="Ej: Santa Fe"
									className="w-full p-2 border border-gray-300 rounded mt-1"
								/>
								<ErrorMessage name="localidad" component="div" className="text-red-500" />
							</div>
							<div>
								<label className="font-semibold flex items-center gap-2 pl-2" htmlFor="provincia">
									<HomeIcon width={15} height={15} /> Localidad
								</label>
								<Field
									type="text"
									id="provincia"
									name="provincia"
									placeholder="Ej: Rosario"
									className="w-full p-2 border border-gray-300 rounded mt-1"
								/>
								<ErrorMessage name="provincia" component="div" className="text-red-500" />
							</div>
							<div>
								<label className="font-semibold flex items-center gap-2 pl-2" htmlFor="licencia">
									<CardIcon width={15} height={15} /> Licencia
								</label>
								<Field
									type="text"
									id="licencia"
									name="licencia"
									placeholder="Ej: 123456"
									className="w-full p-2 border border-gray-300 rounded mt-1"
								/>
								<ErrorMessage name="licencia" component="div" className="text-red-500" />
							</div>
						</div>

						<div>
							<Button
								type="submit"
								className="h-10 w-full font-semibold bg-secondary-brand-dark text-white"
								disabled={isSubmitting}
							>
								<span className=' animate-spin'>{loading && <LoaderIcon width={30} height={30}></LoaderIcon>}</span> Registrar
							</Button>
						</div>

						<div className="text-center">
							<Link to="/login">
								<button
									onClick={() => { }}
									className="w-full mt-2 p-2 rounded hover:text-blue-500"
								>
									Iniciar sesión
								</button>
							</Link>
						</div>
					</Form>
				)}
			</Formik>
		</section>
	);
};

export default SignUp;
