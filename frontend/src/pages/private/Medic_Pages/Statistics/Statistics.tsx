import { useEffect, useState } from "react";
import { API_URL } from "../../../../api/api";
import { useParams } from "react-router-dom";

export interface Data {
  totalCompletado: number
  totalNoCompletado: number
  totalRetrasados: number
  totalHorarios: number
}

const PieChart = ({ data }: { data: Data }) => {
  const radius = 100;
  //const circumference = 2 * Math.PI * radius;
  let cumulativePercentage = 0;

  const calculateCoordinatesForPercentage = (percentage: number) => {
    const x = Math.cos(2 * Math.PI * percentage) * radius;
    const y = Math.sin(2 * Math.PI * percentage) * radius;
    return [x, y];
  };

  const total = data.totalCompletado + data.totalNoCompletado + data.totalRetrasados + data.totalHorarios;

  const chartData = [
    { value: data.totalCompletado / total, color: 'green' },
    { value: data.totalNoCompletado / total, color: 'red' },
    { value: data.totalRetrasados / total, color: 'orange' },
    { value: data.totalHorarios / total, color: 'blue' },
  ];

  return (
    <svg width="250" height="250" viewBox="-125 -125 250 250">
      {chartData.map((slice, index) => {
        if (slice.value === 0) return null;

        const [startX, startY] = calculateCoordinatesForPercentage(cumulativePercentage);
        cumulativePercentage += slice.value;
        const [endX, endY] = calculateCoordinatesForPercentage(cumulativePercentage);

        const largeArcFlag = slice.value > 0.5 ? 1 : 0;

        return (
          <path
            key={index}
            d={`M 0 0 L ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY} Z`}
            fill={slice.color}
            stroke="#fff"
            strokeWidth="1"
          />
        );
      })}
    </svg>
  );
};

export default function Statistics() {
  const [datas, setDatas] = useState<Data[]>()
  const { id } = useParams()

  useEffect(() => {
    const fetchStats = async () => {
      const token = localStorage.getItem('TOKEN_KEY');

      try {
        const res = await fetch(`${API_URL}/adherencia/listar-adherencias-totales/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
          },
        })
        if (!res.ok) {
          throw new Error("Ocurrió un error");
        }
        const data = await res.json();
        setDatas(data)
      } catch (err: any) {
        console.log(err)
      }
    }
    fetchStats()
  }, [])



  return (
    <main className="flex min-h-screen bg-gray-100 md:flex md:justify-center  ">
      <div className="w-full max-w-md min-h-screen p-8 bg-white rounded-lg shadow-lg  max-md:m-auto">
        <h1>Tratamientos Estadisticas</h1>
        {datas && datas.map((data) => (
          <PieChart data={data} />
        ))

        }
      </div>
    </main>
  )
}
