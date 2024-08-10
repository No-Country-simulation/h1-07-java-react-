import { Tab, Tabs } from "@nextui-org/react";
import { Institucion_Admin } from "../Instituciones_Admin/Institucion_Admin";




export function Search_Admin() {
    return (
        <>
            <Tabs
                fullWidth={true}
                key="lg"
                size="lg"
                aria-label="Tabs sizes"
                className=" shadow-2xl border-3 flex flex-row gap-x-4  hover:bg-[#fa8d45] bg-[#FF8D35] border-[#FF8D35]  rounded-md"
            >
                <Tab key="MInstituciones" title="Instituciones" className=" w-[150%]">
                    <Institucion_Admin />
                </Tab>
                <Tab key="Ejercicios" title="Medicamentos" className="">

                </Tab>
                <Tab key="Nutrición" title="Patologias" className="ml-">

                </Tab>
                <Tab key="Psicológico" title="Psicológico" className="">
                </Tab>
            </Tabs>
        </>
    )
}