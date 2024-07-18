import { Link } from "react-router-dom";
import { Logout } from "../../../components/Logout";
import { useAuthContext } from "../../../Context/AuthContext";


export function Dashboard() {
  const { authTokens} = useAuthContext();
	console.log(authTokens?.authorities)

	return (
		<div>
			<Logout />
			<p>hola {authTokens?.email} {authTokens?.authorities[0] == 'ROLE_PACIENTE' ? "paciente" : authTokens?.authorities[0] == "ROLE_MEDICO" && "medico"}</p>
			<Link className="border-2 border-black p-2
			" to={'/dashboard/register-patient'}>Pacientes</Link>
		</div>
	)
}