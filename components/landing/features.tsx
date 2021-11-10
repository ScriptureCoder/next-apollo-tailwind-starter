import React, {useState} from 'react';
import {IonIcon} from "@ionic/react";
import listen from "../../public/assets/icons/listen.svg";
import pub from "../../public/assets/icons/document.svg";
import ai from "../../public/assets/icons/speech.svg";
import {book} from "ionicons/icons";

export type FeaturesProps = {}

const Features: React.FC<FeaturesProps> = () => {
    return (
        <section className="container mx-auto max-w-5xl py-5 lg:py-10 mt-10">
            <div className="px-5">
                <h3 className="text-3xl lg:text-5xl font-bold text-center capitalize mb-4">Explore Premium Features</h3>
                {/*<div className="container max-w-3xl mt-8">
                    <p className="text-lg text-center text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>
                </div>*/}
            </div>
            <div className="flex flex-wrap flex-col md:flex-row">
                <div className="w-full md:w-1/2 lg:w-1/3 p-5">
                    <div className="py-5 p-2 text-center rounded-lg">
                        <div className="container w-20 py-2">
                            <IonIcon icon={book} className="text-5xl"/>
                        </div>
                        <h3 className="font-bold text-lg">Read & Listen</h3>
                        <p className="py-2 text-lg">
                            Find and read amazing publications by your favourite sages
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 p-5">
                    <div className="py-5 p-2 text-center rounded-lg">
                        <div className="container w-20 py-2">
                            <IonIcon icon={book} className="text-5xl"/>
                        </div>
                        <h3 className="font-bold text-lg">Publish & Earn</h3>
                        <p className="py-2 text-lg">
                            Self-publish eBooks and Earn up to 95% royalty on sales
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 p-5">
                    <div className="py-5 p-2 text-center rounded-lg">
                        <div className="container w-20 py-2">
                            <IonIcon icon={book} className="text-5xl"/>
                        </div>
                        <h3 className="font-bold text-lg">Generate Audiobooks</h3>
                        <p className="py-2 text-lg">
                            Generate Audiobooks with our AI Text to Speech engine
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 p-5">
                    <div className="py-5 p-2 text-center rounded-lg">
                        <div className="container w-20 py-2">
                            <IonIcon icon={book} className="text-5xl"/>
                        </div>
                        <h3 className="font-bold text-lg">Read & Listen</h3>
                        <p className="py-2 text-lg">
                            Explore and Read amazing books with Audiobooks
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 p-5">
                    <div className="py-5 p-2 text-center rounded-lg">
                        <div className="container w-20 py-2">
                            <IonIcon icon={book} className="text-5xl"/>
                        </div>
                        <h3 className="font-bold text-lg">Publish & Earn</h3>
                        <p className="py-2 text-lg">
                            Self-publish eBooks and Earn up to 95% royalty on sales
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 p-5">
                    <div className="py-5 p-2 text-center rounded-lg">
                        <div className="container w-20 py-2">
                            <IonIcon icon={book} className="text-5xl"/>
                        </div>
                        <h3 className="font-bold text-lg">Generate Audiobooks</h3>
                        <p className="py-2 text-lg">
                            Generate Audiobooks with our AI Text to Speech engine
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
