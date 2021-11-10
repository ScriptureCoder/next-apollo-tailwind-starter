import React, {useState} from 'react';
import {IonIcon, IonRippleEffect} from "@ionic/react";

interface Interface {
    icon:any
    className?:string
    onClick?:any
    id?:string
}
const IconBtn: React.FC<Interface> = ({icon,className,onClick,id}) => {
    return (
        <>
            {/*<button id={id} onClick={onClick} className={`hover:bg-medium-shade icon-btn ${className}`}>
                <IonIcon icon={icon}/>
            </button>*/}
            <button id={id} onClick={onClick} className={`ion-activatable ripple-parent icon-btn ${className}`}>
                <IonIcon icon={icon}/>
                <IonRippleEffect/>
            </button>
        </>
    );
};

export default IconBtn;
