import React, {useState} from 'react';
import {IonIcon} from "@ionic/react";
import {cloudDoneOutline, cloudDownloadOutline, downloadOutline} from "ionicons/icons";

export type HiwProps = {}

const Hiw: React.FC<HiwProps> = () => {
    return (
        <section className="bg-gradient">
            <div className="container max-w-5xl py-10 px-3">
                <h2 className="text-3xl lg:text-5xl text-white text-center font-bold">How Instasage works?</h2>
                <p className="mt-10 text-center text-white leading-loose">Instasage is available for all devices, consectetur adipisicing elit. Itaque at harum quam explicabo. Aliquam optio, delectus.</p>
                <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex-1 flex flex-col items-center justify-center mt-10">
                        <IonIcon icon={cloudDownloadOutline} className="text-6xl text-white text-center"/>
                        <h4 className="text-2xl lg:text-3xl text-white text-center font-bold mt-2">Install the App</h4>
                        <p className="mt-2 text-center text-white leading-loose">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius saepe, voluptates quis enim incidunt obcaecati?</p>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center mt-10">
                        <IonIcon icon={cloudDownloadOutline} className="text-6xl text-white"/>
                        <h4 className="text-2xl lg:text-3xl text-white text-center font-bold mt-2">Install the App</h4>
                        <p className="mt-2 text-center text-white leading-loose">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius saepe, voluptates quis enim incidunt obcaecati?</p>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center mt-10">
                        <IonIcon icon={cloudDownloadOutline} className="text-6xl text-white"/>

                        <h4 className="text-2xl lg:text-3xl text-white text-center font-bold mt-2">Install the App</h4>
                        <p className="mt-2 text-center text-white leading-loose">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius saepe, voluptates quis enim incidunt obcaecati?</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hiw;
