// import { Header_Donation } from "../../../../../components/Header_Medic_Donation/Header_Donation";

export function Donation_Registre() {
  return (
    <main>
      {/* <Header_Donation /> */}
      <form className="flex flex-col ml-4">
        <div className="flex flex-col">
          <label htmlFor="" className="mb-3 font-inter font-bold">
            Nombre
          </label>
          <input
            type="text"
            placeholder="Nombre"
            className="pl-3 border-1 border-gray-500 w-[90%] rounded-md py-3"
          />
        </div>
        <div className="flex flex-col mt-5">
          <label htmlFor="" className="mb-3 font-inter font-bold">
            Apellido
          </label>
          <input
            type="text"
            placeholder="Apellido"
            className="pl-3 border-1 border-gray-500 w-[90%] rounded-md py-3"
          />
        </div>
        <div className="flex flex-row gap-x-5 mt-5 mb-4">
          <div className="flex flex-col">
            <label htmlFor="" className="ml-1 font-inter font-bold">
              Peso
            </label>
            <div>
              <input
                type="text"
                className="mt-1 pl-3 border-1 border-gray-500 w-[80%] rounded-md py-3"
              />
            </div>
          </div>
          <div>
            <label htmlFor="" className="font-inter font-bold">
              Altura
            </label>
            <div>
              <input
                type="text"
                className="mt-1 pl-3 border-1 border-gray-500 w-[80%] rounded-md py-3"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-x-5">
          <div className="">
            <label htmlFor="" className="ml-1 font-inter font-bold mb-2">
              Sexo
            </label>
            <div className="flex flex-row border-1 w-[84%] rounded-md border-gray-500 py-3">
              <input type="text" className="outline-none border-1 w-[60%] " />
            </div>
          </div>
          <div>
            <label htmlFor="" className="ml-1 font-inter font-bold">
              Grupo RH
            </label>
            <div>
              <input
                type="text"
                className="mt-1 pl-3 border-1 border-gray-500 w-[80%] rounded-md py-3"
              />
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}
