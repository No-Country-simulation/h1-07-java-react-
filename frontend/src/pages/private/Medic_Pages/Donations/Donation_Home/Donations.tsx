import { useEffect, useState } from "react";
import { Header_Donation } from "../../../../../components/Header_Medic_Donation/Header_Donation";
import { API_URL } from "../../../../../api/api";
import { ContentDonations, DonationForm } from "../../../../../Interfaces/interfaces";
import { SilderIcon } from "../../../../../../public/icons/Icons";
import { Donors } from "./Donors/Donors";
import Pagination from "./Pagination/Pagination";
import { FormDonors } from "./FormDonors/FormDonors";
import { SkeletonDonors } from "../../../../../components/Skeletons";

const buildUrl = (values: DonationForm, page: Number, pageSize: number) => {
  const params = new URLSearchParams();

  if (values.textoBusqueda) params.append('textoBusqueda', values.textoBusqueda);
  if (values.generoOrdinal) params.append('generoOrdinal', values.generoOrdinal);
  if (values.factorSanguineoOrdinal) params.append('factorSanguineoOrdinal', values.factorSanguineoOrdinal);
  if (values.edad) {
    params.append('edad', values.edad);
    if (values.edadFiltro) params.append('edadFiltro', values.edadFiltro);
  }
  if (values.peso) {
    params.append('peso', values.peso);
    if (values.pesoFiltro) params.append('pesoFiltro', values.pesoFiltro);
  }
  if (values.altura) {
    params.append('altura', values.altura);
    if (values.alturaFiltro) params.append('alturaFiltro', values.alturaFiltro);
  }

  params.append('page', `${page}`);
  params.append('size', `${pageSize}`);

  return `${API_URL}/donante/buscar-donantes?${params.toString()}`;
};

export default function Donations() {
  const [donors, setDonors] = useState<ContentDonations>();
  const [isOpenFilter, setIsOpenFilter] = useState(false)
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(false)
  const pageSize = 5; // Número de elementos por página
  const [formValues, setFormValues] = useState<DonationForm>(); // Estado para almacenar los valores de los filtros

  const handleSubmitFilterDonation = async (values: any) => {
    setFormValues(values)
    const token = localStorage.getItem('TOKEN_KEY');
    const url = buildUrl(values, currentPage, pageSize);
    try {
      setLoading(true)
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data: ContentDonations = await res.json();
      setDonors(data);
      setTotalPages(data.totalPages);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false)
    }
  };

  const handlePageChange = (page: number) => {
    if (page >= 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  useEffect(() => {
    if (formValues) { // Solo llamar cuando formValues esté definido
      handleSubmitFilterDonation(formValues);
    }

  }, [currentPage]); // Ejecutar cuando cambie la página


  useEffect(() => {
    if (donors && donors?.content.length === 0) {
      setCurrentPage(0)
    }
  }, [donors && donors.content]);

  // Llamar a handleSubmitFilterDonation con valores iniciales al cargar la página
  useEffect(() => {
    const initialValues = {}; // Valores iniciales de los filtros
    handleSubmitFilterDonation(initialValues);
  }, []);


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <main className="bg-gradient-to-r from-[#FFA4D7] to-[#C23584] min-h-screen w-screen flex justify-center items-center">
        <img src="JustinaLogo_2.png" className="pulse responsive-img"></img>
      </main>
    )
  }

  return (
    <main className="flex bg-gray-100 ">
      <div className="w-full max-w-md xl:max-w-full min-h-screen font-inter bg-white rounded-lg shadow-lg max-md:m-auto">
        <Header_Donation link="/dashboard" src="JustinaLogo_2.png" />
        <section className="px-4 flex flex-col gap-6 xl:flex xl:flex-col xl:items-center xl:w-full ">
          <div className="flex justify-between items-center border-black w-[60%] max-xl:w-full ">
            <h1 className=" font-semibold">Filtro de Busqueda:
            </h1>
            <span className=" w-10 h-10 rounded-full flex justify-center hover:brightness-75 transition-all duration-300 items-center bg-gray-200 border-2  cursor-pointer"
              onClick={() => setIsOpenFilter(!isOpenFilter)}>
              <SilderIcon width={20} height={20} stroke="#111" classname="" />
            </span>
          </div>
        </section>
        <section className="flex flex-col gap-8 xl:flex xl:flex-col xl:items-center xl:w-full  p-4">
          {isOpenFilter &&
            <FormDonors handleSubmitFilterDonation={handleSubmitFilterDonation} />
          }
        </section>
        <section className="p-4 flex flex-col gap-8 xl:flex xl:flex-col xl:items-center xl:w-full ">
          <div className="xl:w-[60%] rounded-r-xl rounded-xl border-2 border-gray-500 shadow-xl overflow-hidden">
            <div className=" flex border-b-2 border-gray-500 rounded-lg mb-2 p-1 ">
              <button className="rounded-lg px-4 w-2/3 py-2 text-sm bg-[#5761C8] text-white border-solid border-[1px] border-gray-500">
                Lista de Donantes
              </button>
            </div>
            <ol>
              {
                loading ? (<SkeletonDonors />) : (<>
                  {donors == undefined ?
                    <p className=" text-center py-4">Completa el formulario para buscar donantes</p> :
                    <>
                      {donors.content.length == 0 ?
                        (<p className=" p-4 text-center">No se encontraron donantes que coincidan con los criterios de búsqueda</p>) : (
                          donors.content.map((donor) => (
                            <Donors idDonante={donor.idDonante}
                              genero={donor.genero}
                              fechaNacimiento={donor.fechaNacimiento}
                              descripcion={donor.descripcion}>
                            </Donors>
                          ))
                        )
                      }
                    </>
                  }
                </>)}
            </ol>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              last={donors && donors.last}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
