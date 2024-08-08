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
  Cell,
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

export interface GraficProp {
  total: number
  data: ValuesGraphic[]
}

interface ValuesGraphic {
  name: string
  value: number
}

const COLORS = ['#E08733', '#3563E9', '#3C8505'];

export default function TreatmentAdherence() {
  const { id, idTratamiento } = useParams();
  const [patient, setPatient] = useState<Patient>();
  const [loading, setLoading] = useState(false);
  const [adherence, setAdherence] = useState<Adherence>();
  const [info, setInfo] = useState<GraficProp>(
    {
      total: 10000,
      data: [
        { name: "Completado", value: 2400 },
        { name: "Page B", value: 1398 },
        { name: "Page C", value: 9800 },
      ]
    }

  );

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
      const data: Adherence = await res.json();
      setAdherence(data)
      setInfo({
        total: data.totalHorarios,
        data: [
          { name: "Completado", value: data.totalCompletado },
          { name: "No Completado", value: data.totalNoCompletado },
          { name: "Retrasados", value: data.totalRetrasados },
        ]
      });

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
      <div className="w-full max-w-md xl:max-w-full min-h-screen pb-4  bg-white rounded-lg shadow-lg font-inter  max-md:m-auto">
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
          <h1 className=" mb-4 text-violet-color font-bold text-lg xl:text-center">
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
                data={info.data}
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
                <YAxis domain={[0, info.total]} />
                <Tooltip />
                <CartesianGrid strokeDasharray="4 4" />
                <Bar
                  dataKey="value"
                  fill="#8884d8"
                  background={{ fill: "#eee" }}
                >
                  {info.data.map((entry, index) => (
                    <Cell cursor="pointer" fill={COLORS[index % COLORS.length]} key={`cell-${entry.name}`} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart width={400} height={400}>
                <Pie
                  dataKey="value"
                  isAnimationActive={false}
                  data={info.data}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                >
                  {info.data.map((entry, index) => (
                    <Cell className=" text-black" key={`cell-${entry.name}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </section>
      </div>
    </main>
  );
}
