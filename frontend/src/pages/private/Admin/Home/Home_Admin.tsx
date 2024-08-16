import { useState } from "react";
import { Aside_Admin } from "../../../../components/Components_Admin/Aside_Admin/Aside_Admin";
import { Header_Admin } from "../../../../components/Components_Admin/Header_Admin/Header_Admin";
import { Search_Admin } from "../../../../components/Components_Admin/Search_Admin/Search_Admin";

export function Home_Admin() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  return (
    <>
      <Aside_Admin src="" isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Header_Admin toggleSidebar={toggleSidebar} />
      <div className="xl:flex xl:flex-col xl:items-center">
        <Search_Admin />
      </div>
    </>
  )
}