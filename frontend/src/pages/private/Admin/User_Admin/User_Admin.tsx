import { useState } from "react";
import { Header_Admin } from "../../../../components/Components_Admin/Header_Admin/Header_Admin";
import { Aside_Admin } from "../../../../components/Components_Admin/Aside_Admin/Aside_Admin";
import { EmailIcon, IconPassword, LapizIcon, LapizIcon_Admin } from "../../../../../public/icons/Icons";

export function User_Admin() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isEditingEmail, setIsEditingEmail] = useState(false);
    const [isEditingPassword, setIsEditingPassword] = useState(false);
    const [email, setEmail] = useState("admin@admin.com");
    const [password, setPassword] = useState("******************");

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleEmailEdit = () => {
        setIsEditingEmail(true);
    };

    const handlePasswordEdit = () => {
        setIsEditingPassword(true);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSave = () => {
        setIsEditingEmail(false);
        setIsEditingPassword(false);

    };

    return (
        <>
            <Aside_Admin src="" isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <Header_Admin toggleSidebar={toggleSidebar} />
            <section className="ml-2">
                <h2 className="font-inter font-bold text-lg">Datos inicio de sesión</h2>

                <div>
                    <div className="flex flex-row items-center gap-x-2 mt-5">
                        <EmailIcon width={20} height={20} />
                        <h3 className="font-inter font-semibold">Correo</h3>
                    </div>
                    <div className="flex items-center border-orange-500 border-1 rounded-lg py-1 mt-2 w-[95%]">
                        <input
                            type="text"
                            className="mt-3 pl-2 h-full w-[90%] font-inter outline-none"
                            value={email}
                            onChange={handleEmailChange}
                            disabled={!isEditingEmail}
                        />
                        {isEditingEmail ? (
                            <button onClick={handleSave} className="ml-2 text-blue-500">Guardar</button>
                        ) : (
                            <LapizIcon_Admin
                                width={20}
                                height={20}
                                stroke=""
                                classname="cursor-pointer"
                                onclick={handleEmailEdit}
                            />
                        )}
                    </div>
                </div>
                <div className="">
                    <div className="flex flex-row items-center gap-x-2 mt-7">
                        <IconPassword width={20} height={20} />
                        <h3 className="font-inter font-semibold">Contraseña</h3>
                    </div>
                    <div className="flex items-center border-orange-500 border-1 rounded-lg py-1 mt-2 w-[95%]">
                        <input
                            type="text"
                            className="mt-3 pl-2 h-full w-[90%] font-inter outline-none"
                            value={password}
                            onChange={handlePasswordChange}
                            disabled={!isEditingPassword}
                        />
                        {isEditingPassword ? (
                            <button onClick={handleSave} className="absolutet top-12 -left-2 text-blue-500">Guardar</button>
                        ) : (
                            <LapizIcon_Admin
                                width={20}
                                height={20}
                                stroke="#948ABC"
                                classname="cursor-pointer"
                                onclick={handlePasswordEdit}
                            />
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}
