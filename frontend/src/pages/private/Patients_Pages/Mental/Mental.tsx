import { useTreatmentPacient } from "../../../../utils/hooks/useTreatments"

export default function Mental() {
  const { treatments } = useTreatmentPacient()

  return (
    <main className="w-full min-h-screen bg-gradient-to-t from-[#FDADA6] to-[#5561D9] py-8">
      <div className="container mx-auto max-w-screen-xl">
        <div className="px-32 max-lg:px-16 max-md:px-8 pb-4">
          <h3 className="font-bold font-inter text-2xl text-light-color">
            Salud Mental
          </h3>
          <section className=" flex flex-col gap-4">
            <div className="flex flex-col justify-center items-center">
              <img src="meditation.png" width={300} alt="image-mental" />
              <p className=" text-xl font-semibold text-center px-60 max-lg:px-40 max-md:px-12 text-light-color">Tareas asignadas por su especialista para complementar su tratamiento</p>
            </div>
            <ol className=" items-center flex justify-center m-auto max-md:w-full flex-col gap-2">
              {treatments && treatments.content.some(treatment => treatment.tipoTratamientoId === 3) ? (
                treatments.content.map((treatment) => (
                  treatment.tipoTratamientoId !== 3 ? null : (
                    <>
                      <li key={treatment.idTratamiento} className=" w-[500px] h-12 shadow-[2.0px_4.0px_4.0px_rgba(0,0,0,0.38)] justify-center border-1 p-2 bg-light-color border-gray-color rounded-lg leading-6 flex flex-col gap-y-2 font-inter text-sm">
                        <span className="italic">
                          {treatment.descripcion.length === 0 ? "No tiene descripción" : treatment.descripcion}
                        </span>
                      </li>
                    </>

                  )
                ))
              ) : (
                <p className="text-center text-lg text-light-color">
                  No tienes tratamientos de salud mental asignados.
                </p>
              )}
            </ol>
          </section>
        </div>
      </div>
    </main>
  )
}
