import { Accordion, AccordionItem } from "@nextui-org/react";
import { SearchIcon } from "../../../../../../public/icons/Icons";
import { SkeletonAcordion } from "../../../../../components/Skeletons";
import { ContentClinicHistory } from "../../../../../Interfaces/interfaces";
import { useEffect, useState } from "react";
import { fetchClinicHistory } from "../../../../../Context/AuthContext";

export default function DataHistory({
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
    <section className=" px-32 max-lg:px-16 max-md:px-8 ">
      <h3 className="font-bold font-inter text-2xl mb-4">
        Historia Clínica
      </h3>
      {clinicHistories && clinicHistories.content.length !== 0 && (
        <div className="relative w-full h-12 mb-3 flex justify-center items-center ">
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
      <div className="flex flex-col gap-y-3">
        {loading ? (
          <SkeletonAcordion />
        ) : (
          <>
            {clinicHistories && clinicHistories.content.length > 0 ? (
              <>
                <Accordion
                  variant="splitted"
                  fullWidth={true}
                  className=" w-full px-0 "
                >
                  {
                    clinicHistories.content
                      .filter((msg) =>
                        msg.titulo.toLowerCase().includes(histories.toLowerCase())
                      )
                      .map((history, idx) => (
                        <AccordionItem
                          aria-label={history.titulo}
                          tabIndex={idx}
                          title={`${history.titulo} ${history.fecha}`}
                          className="w-full border-2 border-violet-color shadow-[1.0px_2.0px_2.0px_rgba(0,0,0,0.38)]"
                        >
                          {history.descripcion}
                        </AccordionItem>
                      ))
                  }
                </Accordion>

              </>
            ) : (
              <SkeletonAcordion />
            )}
          </>
        )}
      </div>
    </section>
  );
}
