import { useState } from "react";
import { Header_Admin } from "../../../../components/Components_Admin/Header_Admin/Header_Admin";
import { Aside_Admin } from "../../../../components/Components_Admin/Aside_Admin/Aside_Admin";
import { SearchAdherencia_Admin } from "../../../../components/Components_Admin/SearchAdherencia_Admin/SearchAdherencia_Admin";




export function Adherencia_Admin() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };


    return (
        <main>
            <Aside_Admin src="" isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <Header_Admin toggleSidebar={toggleSidebar} />
            <SearchAdherencia_Admin />
        </main>
    )
}