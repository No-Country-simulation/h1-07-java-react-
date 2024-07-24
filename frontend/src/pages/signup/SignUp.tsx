import { DoctorRegister } from '../../Interfaces/interfaces';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'sonner';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Button } from '@nextui-org/react';
import { CardIcon, FlechaIconTwo, JobIcon, LoaderIcon } from '../../../public/icons/Icons';
import { useAuthContext } from '../../Context/AuthContext';
import { dataRegisterDoctor, initialValuesDoctor } from '../../utils/data/data';
import { validationSchema } from '../../utils/validation/validation';

const SignUp: React.FC = () => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false)
	const { registerDoctor } = useAuthContext()

	const handleSubmit = async (values: DoctorRegister) => {
		const doctor: DoctorRegister = values
		try {
			setLoading(true)
			registerDoctor(doctor)
			toast.success("El registro fue existoso")
			navigate("/login")
		} catch (err: any) {
			console.log(err)
		} finally {
			setLoading(false)
		}
	};
	//FALTA VALIDAR LOS SELECT HAY ALGUNOS QUE NO LOS ACEPTA
	return (
		<section className="flex min-h-screen bg-gray-100 md:flex md:justify-center">

			<Formik
				initialValues={initialValuesDoctor}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				{({ isSubmitting }) => (
					<Form className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg  max-md:m-auto flex flex-col gap-y-4">
						<div className="mb-6 text-center relative flex flex-col items-center justify-center">
							<Link to={"/login"} className=' absolute -left-10 hover:-translate-x-1 transition-all duration-300'>
								<FlechaIconTwo width={30} height={30} />
							</Link>
							<h1 className="text-2xl font-bold tracking-tight">Crear cuenta</h1>
							<p className="text-sm">Introduce la información necesaria</p>
						</div>
						<div className="flex-wrap grid grid-rows-10 gap-6  grid-flow-col  max-md:gap-1 max-md:gap-y-3">
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
