import Link from 'next/link';
import React, {useState} from 'react';
import {SideBarProps} from "../../types/types";
import {IonIcon} from "@ionic/react";
import IconBtn from "../../utils/icon-btn";
import {closeOutline} from "ionicons/icons";

const SideBar: React.FC<SideBarProps> = ({menu,toggle,show}) => {
    return (
        <>
            {show&&(
                <aside className="absolute h-screen inset-0 modal z-100 flex">
                    <div className="w-64 bg-white h-full shadow-2xl relative">
                        <div className="absolute right-0 p-2">
                            <IconBtn className="text-2xl bg-medium-shade lg:hidden" onClick={toggle} icon={closeOutline}/>
                        </div>
                        <div className="grid gap-4 py-4 pt-10 lg:pt-20 px-2 mt-4" id="menu">
                            {menu.map((data: any, i: number) => (
                                <Link key={i} href={data.path}>
                                    <p className="px-5 py-3 hover:bg-medium-shade rounded-full cursor-pointer flex" id={data.path}>
                                        {/*<IonIcon color="medium" className="text-2xl" icon={data.icon} id={data.path}/>*/}
                                        <span className="pl-4 text-base text" id={data.path}>{data.name}</span>
                                        {data.badge>0&&<span className="ml-2 badge">{data.badge}</span>}
                                    </p>
                                </Link>
                            ))}
                        </div>

                        {/*<div className="border-t px-4">
                        <Link to="/upload" className="px-2 py-3">
                            <button className="btn-primary flex-center w-full" id="/select-author">
                                <IonIcon className="text-2xl pr-2" icon={cloudUpload}/>
                                Upload
                            </button>
                        </Link>
                    </div>*/}
                    </div>
                    <div onClick={toggle} className="flex-1">

                    </div>
                </aside>
            )}
        </>
    );
};

export default SideBar;
