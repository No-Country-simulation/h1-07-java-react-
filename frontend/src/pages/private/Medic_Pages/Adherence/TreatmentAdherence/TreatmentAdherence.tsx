import { useEffect, useState } from "react";
import { HeaderProfile } from "../../../../../components/HeaderProfile";
import { fetchPatientSingle } from "../../../../../Context/AuthContext";
import { useParams } from "react-router-dom";
import { Patient } from "../../../../../Interfaces/interfaces";
import { API_URL } from "../../../../../api/api";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export interface Adherence {
  totalCompletado: number;
  totalNoCompletado: number;
  totalRetrasados: number;
  totalHorarios: number;
}

export default function TreatmentAdherence() {
  const { id, idTratamiento } = useParams();
  const [patient, setPatient] = useState<Patient>();
  const [loading, setLoading] = useState(false);
  const [adherence, setAdherence] = useState<Adherence>();
  const [info, setInfo] = useState([
    { name: "Page A", datos: 2400, amt: 2400 },
    { name: "Page B", uv: 3000, datos: 1398, amt: 2210 },
    { name: "Page C", uv: 2000, datos: 9800, amt: 2290 },
  ]);
  const [data, setData] = useState([
    { name: "Completado", value: 0 },
    { name: "No Completado", value: 0 },
    { name: "Retrasados", value: 0 },
  ]);

  const fetchTreatmentAdherence = async () => {
    const token = localStorage.getItem("TOKEN_KEY");

    try {
      const res = await fetch(
        `${API_URL}/adherencia/listar-adherencias-por-tratamiento/${idTratamiento}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) {
        throw new Error(`Response status: ${res.status}`);
      }
      const data = await res.json();
      setAdherence(data);
      setData([
        { name: "Completado", value: data.totalCompletado },
        { name: "No Completado", value: data.totalNoCompletado },
        { name: "Retrasados", value: data.totalRetrasados },
      ]);
      setInfo([
        {
          name: "Compleados",
          datos: data.totalCompletado,
          amt: data.totalCompletado,
        },
        {
          name: "No compleados",
          datos: data.totalNoCompletado,
          amt: data.totalNoCompletado,
        },
        {
          name: "Retrasados",
          datos: data.totalRetrasados,
          amt: data.totalRetrasados,
        },
      ]);
    } catch (error: any) {
      console.log(error);
    }
  };

  const fetchPatient = async () => {
    if (id) {
      setLoading(true);
      try {
        setPatient(await fetchPatientSingle(id));
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchPatient();
    fetchTreatmentAdherence();
  }, []);
  return (
    <main className="flex min-h-screen bg-gray-100 md:flex md:justify-center ">
      <div className="w-full max-w-md  min-h-screen pb-4  bg-white rounded-lg shadow-lg font-inter  max-md:m-auto">
        <HeaderProfile
          loading={loading}
          name={patient?.nombre}
          title="Estadísticas"
          lastname={patient?.apellido}
          typeDocument={patient?.tipoDocumento}
          financier={patient?.financiador}
          document={patient?.numeroDocumento}
          link={`/patient/${id}/adherence`}
        ></HeaderProfile>
        <section className="px-6 h-[120vh] ">
          <h1 className=" mb-4 text-violet-color font-bold text-lg">
            Adherencia a la medicación
          </h1>
          <div className=" flex justify-centeri justify-around">
            <h1 className=" gap-2 text-4xl flex flex-col justify-center items-center">
              {adherence?.totalCompletado}
              <span className=" text-sm font-semibold">Compleados</span>{" "}
              <span className="w-12 rounded-md h-1 bg-secondary-brand-dark"></span>
            </h1>
            <h1 className=" gap-2 text-4xl flex flex-col justify-center items-center">
              {adherence?.totalNoCompletado}
              <span className=" text-sm font-semibold">No Compleados</span>{" "}
              <span className="w-12 rounded-md h-1 bg-blue-light-color"></span>
            </h1>
            <h1 className=" gap-2 text-4xl flex flex-col justify-center items-center">
              {adherence?.totalRetrasados}
              <span className=" text-sm font-semibold">Retrasados</span>{" "}
              <span className="w-12 rounded-md h-1 bg-sucess-state"></span>
            </h1>
          </div>
          <div style={{ width: "100%", height: 300 }} className="mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={info}
                margin={{
                  top: 5,
                  right: 40,
                  left: -10,
                  bottom: 5,
                }}
                barSize={20}
              >
                <XAxis
                  dataKey="name"
                  scale="point"
                  padding={{ left: 10, right: 10 }}
                />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar
                  dataKey="datos"
                  fill="#8884d8"
                  background={{ fill: "#eee" }}
                />
              </BarChart>
            </ResponsiveContainer>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart width={400} height={400}>
                <Pie
                  dataKey="value"
                  isAnimationActive={false}
                  data={data}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </section>
      </div>
    </main>
  );
}
