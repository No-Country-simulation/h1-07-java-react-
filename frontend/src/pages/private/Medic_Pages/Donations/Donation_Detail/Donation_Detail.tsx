
import { useEffect, useState } from "react";
import { Header_Donation } from "../../../../../components/Header_Medic_Donation/Header_Donation";
import { Medic } from "../../../../../Interfaces/interfaces";
import { Link } from "react-router-dom";
import React from 'react';

export default function Donation_Detail() {
    const [curriculum, setCurriculum] = useState("");
    const [medicInfo, setMedicInfo] = useState<Medic>();

    useEffect(() => {
        const storedCurriculum = localStorage.getItem("curriculum");
        if (storedCurriculum) {
            setCurriculum(storedCurriculum);
        }

        const storedMedic = localStorage.getItem("MEDIC-DATA");
        if (storedMedic) {
            const medic: Medic = JSON.parse(storedMedic);
            setMedicInfo(medic);
        }
    }, []);


    return (
        <main>
            <Header_Donation src="./../public/JustinaLogo_2.png" link="/donations" />
            <section className="ml-5">
                <h1 className="text-center mb-10 font-inter font-semibold">Contactar médico responsable</h1>
                <div className="w-[90%] mb-6">
                    <h3 className="mb-2 font-inter font-bold">Nombre</h3>
                    <div className="py-2 border-1 border-solid border-gray-600 rounded-md">
                        <h3 className="pl-3 font-bold font-inter">{medicInfo?.nombre}</h3>
                    </div>
                </div>
                <div className="w-[90%]">
                    <h3 className="mb-2 font-inter font-bold">Apellido</h3>
                    <div className="py-2 border-1 border-solid border-gray-600 rounded-md">
                        <h3 className="pl-3 font-bold font-inter">{medicInfo?.apellido}</h3>
                    </div>
                </div>
                <div className="w-[90%] mt-6">
                    <h3 className="mb-2 font-inter font-bold">Telefono de contacto</h3>
                    <div className="py-2 border-1 border-solid border-gray-600 rounded-md">
                        <h3 className="pl-3 font-bold font-inter">{medicInfo?.telefono}</h3>
                    </div>
                </div>
                <div className="w-[90%] mt-6">
                    <h3 className="mb-2 font-inter font-bold">Ubicación</h3>
                    <div className="py-2 border-1 border-solid border-gray-600 rounded-md">
                        <h3 className="pl-3 font-bold font-inter">{medicInfo?.localidad}, {medicInfo?.provincia}</h3>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-center mt-10">
                    <Link to={"/donations"}>
                        <button className="bg-orange-500 py-2 px-20 font-inter font-bold rounded-2xl text-white">
                            Volver
                        </button>
                    </Link>
                </div>
            </section>
        </main>
    )
}