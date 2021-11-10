import React, {useEffect, useState} from 'react';
import {preload} from "./preloader";
import http, {storagePath} from "./service";
import {setAlert} from "../actions/alert";
import {IonIcon} from "@ionic/react";
import {cameraReverseOutline} from "ionicons/icons";

interface ImageProps {
    setImage:any
    name:string
    image:string
}

const Image: React.FC<ImageProps> = ({setImage,name,image}) => {
    const imageHandler=(files:any)=>{
        preload();
        let formData = new FormData();
        formData.append('image', files[0]);

        http(formData,storagePath+"api/upload",true).then((res:any)=>{
            if (res.success){
                setImage(res.url);
                sessionStorage.setItem(name,res.url);
            }
            preload(false);
        }).catch((e)=>{
            preload(false);
            setAlert(e.message, false)
        })
    };

    useEffect(()=>{
        if (name){
            setImage(sessionStorage.getItem(name) || "")
        }
        const form = document.getElementById("upload");
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            form?.addEventListener(eventName,action,false);
        });
    },[]);

    const action=(e:any)=>{
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "drop"){
            imageHandler(e.dataTransfer.files);
        }
    };

    return (
        <>
            <input type="file" id="image" onChange={(e)=>imageHandler(e.target.files)} className="hidden"/>

            <label htmlFor="image" className="text-green-600 text-sm cursor-pointer w-full">
                <div id="upload" className="mb-2 border-2 border-dashed h-52 w-full flex items-center justify-center bg-cover rounded" style={{backgroundImage: `url(${storagePath+image+"?w=250&h=300"})`, backgroundSize:"100% 100%"}}>
                    <button onClick={()=>document.getElementById("image")?.click()}>
                        <IonIcon className="text-2xl text-medium" icon={cameraReverseOutline}/>
                    </button>
                </div>
            </label>
        </>
    );
};

export default Image;
