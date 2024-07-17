import { Logout } from "../../../components/Logout";
import { useAuthContext } from "../../../Context/AuthContext";


export function Dashboard() {
  const { authTokens} = useAuthContext();
	console.log(authTokens?.authorities)

	return (
		<div>
			<Logout />
			<p>hola {authTokens?.email} {authTokens?.authorities[0] == 'ROLE_PACIENTE' ? "paciente" : authTokens?.authorities[0] == "ROLE_MEDICO" && "medico"}</p>
			
		</div>
	)
}