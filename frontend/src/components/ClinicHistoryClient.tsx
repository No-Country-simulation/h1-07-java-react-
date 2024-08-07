import { Accordion, AccordionItem } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { ContentClinicHistory } from "../Interfaces/interfaces";
import { SearchIcon } from "../../public/icons/Icons";
import { SkeletonAcordion } from "./Skeletons";
import { fetchClinicHistory } from "../Context/AuthContext";

export default function ClinicHistoryClient({
  idPaciente,
}: {
  idPaciente: any;
}) {
  const [clinicHistories, setClinicHistories] =
    useState<ContentClinicHistory>();
  const [histories, setHistories] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchDataHistory();
  }, [idPaciente]);

  const fetchDataHistory = async () => {
    if (idPaciente) {
      setLoading(true);
      try {
        const data = await fetchClinicHistory(idPaciente);

        if (data && data.content) {
          const sortedData = data.content.sort(
            (
              a: { fecha: string | number | Date },
              b: { fecha: string | number | Date }
            ) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
          );
          setClinicHistories({ ...data, content: sortedData });
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="p-2 flex-col gap-2 flex">
      <h5 className="font-bold text-xl text-violet-color">Historia Clínica</h5>
      {clinicHistories && clinicHistories.content.length !== 0 && (
        <div className="relative w-full h-12 mb-3 flex justify-center items-center">
          <input
            type="text"
            placeholder="Búsqueda"
            onChange={(e) => setHistories(e.target.value)}
            className="w-full h-full border-violet-color rounded-md border-1 px-2"
          />
          <span className="right-5 absolute">
            <SearchIcon width={20} height={20} />
          </span>
        </div>
      )}
      <div className="flex flex-col gap-3">
        {loading ? (
          <SkeletonAcordion />
        ) : (
          <>
            {clinicHistories && clinicHistories.content.length > 0 ? (
              clinicHistories.content
                .filter((msg) =>
                  msg.titulo.toLowerCase().includes(histories.toLowerCase())
                )
                .map((history, idx) => (
                  <Accordion
                    variant="splitted"
                    key={idx}
                    className="rounded-md w-full"
                  >
                    <AccordionItem
                      aria-label={history.titulo}
                      title={`${history.titulo} ${history.fecha}`}
                      className="w-full border-2 border-violet-color"
                    >
                      {history.descripcion}
                    </AccordionItem>
                  </Accordion>
                ))
            ) : (
              <SkeletonAcordion />
            )}
          </>
        )}
      </div>
    </div>
  );
}
