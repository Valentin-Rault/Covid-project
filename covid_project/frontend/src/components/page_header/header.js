import React from "react";
import HeaderNavbar from "./Navbar";
import { Logo } from "./logo";

export function Header() {
    return (
        <div>
            <Logo />
            <HeaderNavbar />
        </div>
    )
}