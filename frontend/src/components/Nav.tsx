import { Navbar, NavbarBrand, NavbarContent, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link } from "@nextui-org/react";
import { useState } from "react";

export const Nav = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="md:hidden border-b-2">
      <NavbarContent>
        <NavbarBrand>
          <img src={'logo-justina.webp'} className=" w-40"/>
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}  
