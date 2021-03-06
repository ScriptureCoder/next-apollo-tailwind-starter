import React, {useState} from 'react';
import Head from "next/head";
import Image from "next/image";
import logo from "../../public/assets/images/logo.png";
import Link from "next/link";
import {IonIcon} from "@ionic/react";
import {menu, menuOutline, menuSharp} from "ionicons/icons";
import {SideBarProps} from "../../types/types";
import IconBtn from "../../utils/icon-btn";

export type HeaderProps = {
}

const Header: React.FC<HeaderProps&SideBarProps> = ({menu,toggle}) => {
    return (
        <>
            <Head>
                <title>Instasage: Read with friends</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="bg-white shadow py-2 md:py-5 sticky inset-x-0 top-0 z-20 px-4 lg:px-40 flex items-center justify-between">
                <div className="flex items-center">
                    <Image src={logo} className="" height={40} width={40}/>
                    <h3 className="text-xl ml-2 font-semibold">Instasage</h3>
                </div>
                <div className="block md:hidden">
                    <IconBtn onClick={toggle} icon={menuSharp} className="text-2xl"/>
                </div>
                <div className="hidden md:flex items-center justify-between">
                    {menu.map((data,i)=>(
                        <Link key={i+"menu"} href={data.path}>
                            <a className="px-2 text-base">{data.name}</a>
                        </Link>
                    ))}
                </div>
            </header>
        </>
    );
};

export default Header;
