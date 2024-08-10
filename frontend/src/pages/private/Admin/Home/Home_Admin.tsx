import { Aside_admin } from "../../../../components/Components_Admin/Aside_Admin/Aside_Admin";
import { Header_Admin } from "../../../../components/Components_Admin/Header_Admin/Header_Admin";
import { Search_Admin } from "../../../../components/Components_Admin/Search_Admin/Search_Admin";

export function Home_Admin() {
    return (
        <>
           <Aside_admin />           
           <Header_Admin />
           <Search_Admin />
        </>
    )
}