import * as Yup from 'yup';
import { MedicoRegister } from '../../Interfaces/interfaces';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { API_URL } from '../../api/api';
import { toast } from 'sonner';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Button } from '@nextui-org/react';
import { dataRegisterDoctor, initialValuesDoctor } from '../../data/data';
import { CardIcon, JobIcon, LoaderIcon } from '../../components/icons/Icons';

// const financiadores = [
// 	{ key: 1, label: "OSDE" },
// 	{ key: 2, label: "Swiss Medical" },
// ]

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
			especialidad: values.especialidad,
			financiadores: [values.financiadores[0]]
		};
		console.log(doctor)
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
			navigate('/login')
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
				initialValues={initialValuesDoctor}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				{({ isSubmitting }) => (
					<Form className=" w-full p-4 flex flex-col gap-y-4  ">
						<div className="flex-wrap grid grid-rows-5 gap-6 max-md:grid-rows-10 grid-flow-col  max-md:gap-1 max-md:gap-y-3">
							{dataRegisterDoctor.map(({ label, name, type, icon: Icon, placeholder }) => (
								<div key={name}>
									<label className="font-semibold flex items-center gap-2 pl-2" htmlFor={name}>
										<Icon width={15} height={15} /> {label}
									</label>
									<Field
										type={type}
										id={name}
										name={name}
										placeholder={placeholder}
										className="w-full p-2 border border-gray-300 rounded mt-1"
									/>
									<ErrorMessage name={name} component="div" className="text-red-500" />
								</div>
							))}
							<div className="">
								<label className="font-semibold flex items-center gap-2 pl-2" htmlFor="especialidad">
									<JobIcon width={15} height={15} />Especialidad
								</label>
								<Field as="select" className="w-full p-2 border border-gray-300 rounded mt-1" name="especialidad">
									<option value={1}>Cardiología</option>
									<option value={2}>Neurología</option>
									<option value={3}>Pediatría</option>
								</Field>
							</div>
							<div className="">
								<label className="font-semibold flex items-center gap-2 pl-2" htmlFor="financiadores">
									<CardIcon width={15} height={15} />Financiador
								</label>
								<Field as="select" className="w-full p-2 border border-gray-300 rounded mt-1" name="financiadores">
									<option value={1}>OSDE</option>
									<option value={2}>Swiss Medical</option>
								</Field>
							</div>
						</div>
						<div>
							<Button
								type="submit"
								className="h-10 w-full  bg-secondary-brand-dark text-white font-semibold"
								disabled={isSubmitting}
							>
								<span className=' animate-spin'>{loading && <LoaderIcon width={30} height={30}></LoaderIcon>}</span> Registrar
							</Button>
						</div>

						<div className="text-center">
							<Link to="/login">
								<button
									onClick={() => { }}
									className="w-full mt-2 p-2 rounded-xl font-semibold text-secondary-brand-dark border-secondary-brand-dark border-2 "
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
