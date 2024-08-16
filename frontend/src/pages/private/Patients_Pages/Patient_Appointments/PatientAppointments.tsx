import { Calendar } from "@nextui-org/react";
import { today, getLocalTimeZone } from "@internationalized/date";
import Shifts from "../Home/Shifts/Shifts";




export function PatientAppointments() {
  // const { medics } = useMedics();

  // const handleSubmit = () => {
  //   console.log("hola")
  // }

  // const getWorkDaysMedic = async (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   const id = (e.target.value)
  //   const token = localStorage.getItem('TOKEN_KEY');

  //   try {
  //     const res = await fetch(`${API_URL}/medico/fecha-disponibilidad?idMedico=${id}`, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     const data = await res.json()
  //     console.log(data)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  // let now = today(getLocalTimeZone());

  // let disabledRanges = [
  //   [now, now.add({days: 5})],
  //   [now.add({days: 14}), now.add({days: 16})],
  //   [now.add({days: 23}), now.add({days: 24})],
  // ];

  // let { locale } = useLocale();

  // const isDateUnavailable = (date: DateValue) =>
  //   isWeekend(date, locale) ||
  //   disabledRanges.some(
  //     (interval) => date.compare(interval[0]) >= 0 && date.compare(interval[1]) <= 0,
  //   );

  return (
    <main className="w-full min-h-screen bg-gradient-to-t from-[#FFD460] to-[#8778D7] py-8">
      <div className="container mx-auto max-w-screen-xl">
        <section className="px-32 max-lg:px-16 max-md:px-8 mt-8 ">
          <h3 className="font-bold font-inter text-2xl mb-4 text-light-color">Agendar Cita</h3>
          <div className="w-full m-auto flex items-center justify-center">
            <Calendar
              aria-label="Date (Min Date Value)"
              defaultValue={today(getLocalTimeZone())}
              minValue={today(getLocalTimeZone())}
              color="warning"
              visibleMonths={2}

            />
          </div>
        </section>
        <section className="px-32 max-lg:px-16 max-md:px-8 mt-8 ">
          {/* <h1>CREAR TURNO</h1>
          <Formik
            initialValues={{ name: "" }}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col gap-2">
                <label
                  className="font-semibold flex items-center gap-2 "
                  htmlFor="especialidad"
                >
                  Medicos
                </label>
                <Field
                  as="select"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  name="especialidad"
                  onChange={getWorkDaysMedic}
                >
                  {medics && medics.content.map((medic) => (
                    <option value={medic.idMedico}>{medic.apellido} {medic.nombre} | {medic.especialidad}</option>

                  ))
                  }
                </Field>
                <Calendar
                  aria-label="Date (Unavailable)"
                  color="warning"
                  minValue={today(getLocalTimeZone())}
                  // isDateUnavailable={isDateUnavailable}
                />
                <button className="border-2 border-black bg-white p-2" disabled={isSubmitting}>Crear Turno</button>
              </Form>
            )}
          </Formik> */}
        </section>
        <Shifts />
      </div>
    </main>
  );
}
