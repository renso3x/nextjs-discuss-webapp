import {
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem
} from '@nextui-org/react';
import Link from "next/link";
import HeaderAuth from "./header-auth";

export default async function Header() {

  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link className="font-bold" href="/">Discuss</Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Input />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  )
}