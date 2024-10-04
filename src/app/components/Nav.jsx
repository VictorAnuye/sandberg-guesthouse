"use client"
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {CiMenuBurger} from "react-icons/ci"
import {IoCloseSharp} from "react-icons/io5"
import { GeneralNavBar } from "./nav_components/GeneralNavBar";
import { DashboardNavBar } from "./nav_components/DashboardNavBar";
import Link from "next/link";
import SANDBERG_LOGO from "@/app/public/SANDBERG_LOGO-removebg-preview.png"

export default function Nav () {
    const [menu,setMenu] = useState(false);
    const path = usePathname();

    return (
        <>
        <nav className="h-[60px] flex justify-between items-center pt-5 px-4 bg">
            <Link href="/">
                <Image
                width={74}
                height={54}
                src={SANDBERG_LOGO}
                alt="brand logo"/>
            </Link>

            {
                path.split("/").includes("dashboard")
                 ? <DashboardNavBar cssClass="hidden lg:flex flex-col lg:flex-row gap-6 p-4"/>
                  : <GeneralNavBar cssClass="hidden lg:flex gap-8"/>
            }

            <blockquote className="lg:hidden">
                {
                !menu
                ?
                <CiMenuBurger onClick={() => setMenu(true)} className="text-yellow-50 text-2xl"/> 
                : 
                <IoCloseSharp onClick={() => setMenu(false)} className="text-yellow-50 text-2xl"/> 
                }
            </blockquote>
        </nav>

        {/* MOBILE NAV */}

        {
        menu
        ?
        <div className="min-h-[240px] bg-black">
            <div className="h-[6px] bg-gradient-to-r from-orange-500 via-gray-500 to-yellow-800"></div>

            {
                path.split("/").includes("dashboard")
                ? <DashboardNavBar cssClass= "flex flex-col lg:flex-row gap-6 p-4"/>
                : <GeneralNavBar cssClass="flex flex-col lg:flex-row gap-8 p-4"/>
            }
            
        </div>
        : null
        }
        </>
    )
}