import React, {useState,useEffect} from 'react';
import {moon,sunnyOutline,bookOutline, cardOutline, playOutline} from "ionicons/icons";
import IconBtn from "../../utils/icon-btn";
import {setBg} from "../../actions/settings";
import {store} from "../../reducers/store";
import Logo from "../../assets/images/logo.png";
import welcome from "../../assets/images/welcome.jpg";
import {IonIcon} from "@ionic/react";
import {Link} from "react-router-dom";

const IndexLayout: React.FC<any> = ({children}) => {
    const [checked,setChecked] = useState(false);

    useEffect(()=>{
        const slides = document.querySelector('ion-slides');
        if (slides){
            slides.startAutoplay().catch(()=>{});
        }
    },[]);

    const toggleHandle=()=>{
        const check = !checked;
        setChecked(check);
        setBg(check?"dark":"light");
        document.body.classList.toggle('dark', check);
    };

    useEffect(()=>{
        const settings = store.getState().settings;
        setChecked(settings.bg=="dark")
    },[]);
    return (
        <div className="h-screen overflow-y-scroll flex scroll-hide bg">
            <div className="flex-1 bg-contain bg-no-repeat flex-center" style={{backgroundImage: ` url(${welcome})`}}/>
            <div className="flex-1">
                <div className="absolute top-0 right-0 p-10">
                    <IconBtn onClick={toggleHandle} className="text-2xl" icon={checked?sunnyOutline:moon}/>
                </div>
                <div className=" h-full flex-center">
                    <div className="container mx-auto max-w-lg py-5 md:py-20">
                        <div className="py-4 rounded">
                            <div className="flex justify-center">
                                <img src={Logo} alt="" className="h-16"/>
                            </div>
                            <div className="flex justify-center">
                                {/*<img src={Logo} alt="" className="h-12 logo"/>*/}
                            </div>

                            <div className="px-5 text-xl text-medium text-center font-sans py-10">
                                Join us in mining the treasures of life <br/> hidden inside books
                            </div>

                            <div className="px-5">
                                <div className="">
                                    <Link to="/signup" className="text-base text-medium">
                                        <button className="w-full py-2 bg-primary text-light h-12 rounded-full text-sm">CREATE AN ACCOUNT</button>
                                    </Link>

                                    <div className="py-4">
                                        <Link to="/login" className="text-base text-medium">
                                            <button className="w-full py-2 bg-medium-shade border text h-12 rounded-full text-sm">LOG IN</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-primary text-base text-white my-10 font-bold">
                                <p className="py-2"> <IonIcon icon={bookOutline} className="pr-2 font-bold"/> Explore and Read amazing books and Audiobooks</p>
                                <p className="py-2"> <IonIcon icon={cardOutline} className="pr-2 font-bold"/> Self-publish eBooks and Earn up to 95% royalty on sales</p>
                                <p className="py-2"> <IonIcon icon={playOutline} className="pr-2 font-bold"/> Generate Audiobooks with our HD Text to Speech engine</p>
                            </div>

                            <div className="px-5">
                                {/*<Oauth {...props}/>*/}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/*
            <div className="container max-w-5xl h-full flex">
                <div className="flex-1 h-full flex-center">
                    <div className="max-w-xs">
                        <IonSlides options={slideOpts}>
                            <IonSlide>
                                <div className="flex-col">
                                    <img src={phone} alt=""/>
                                    <h1 className="text-xl text-center font-bold py-2">Explore and Read amazing books and Audiobooks</h1>
                                </div>
                            </IonSlide>
                            <IonSlide>
                                <div className="flex-col">
                                    <img src={phone1} alt=""/>
                                    <h1 className="text-xl text-center py-2 font-bold">Self-publish eBooks and Earn up to 95% royalty on sales</h1>
                                </div>
                            </IonSlide>
                            <IonSlide>
                                <div className="flex-col">
                                    <img src={phone2} alt=""/>
                                    <h1 className="text-xl text-center py-2 font-bold">Generate Audiobooks with our HD Text to Speech engine</h1>
                                </div>
                            </IonSlide>
                        </IonSlides>
                    </div>
                </div>

                <div className="flex-1">
                    <div className=" h-full flex-center">
                        <div className="container max-w-md shadow-2xl rounded-lg bg p-5 border">
                            <div className="flex justify-center">
                                <img src={Logo} alt="" className="h-12 logo"/>
                            </div>
                            {children}
                        </div>
                    </div>
                </div>
            </div>*/}
            <div className="fixed bottom-0 inset-x-0 container py-10">
                <p className="flex-center text-xs text-medium">
                    © {new Date().getFullYear()} Instasage by AlphaCipher
                </p>
            </div>
        </div>
    );
};

export default IndexLayout;
