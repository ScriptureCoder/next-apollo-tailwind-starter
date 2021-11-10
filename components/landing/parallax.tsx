import React, {useState} from 'react';
import Image from "next/image";
import google from "../../public/assets/images/google-play-w.png"
import apple from "../../public/assets/images/app-store-w.png"
import Slide1 from "../../public/assets/images/slide1.png";

export type ParallaxProps = {}

const Parallax: React.FC<ParallaxProps> = () => {
    return (
        <section className="bg-cover bg-fixed" style={{backgroundImage:`url(/assets/images/welcome.jpg)`, backgroundColor:"#1d1c30",backgroundBlendMode:"overlay"}}>
            <div className="container max-w-4xl py-10 px-3">
                <h4 className="text-4xl lg:text-5xl text-white text-center font-bold">Instasage is available for all devices</h4>
                <p className="mt-10 text-center text-white leading-loose">Instasage is available for all devices, consectetur adipisicing elit. Itaque at harum quam explicabo. Aliquam optio, delectus, dolorem quod neque eos totam. Delectus quae animi tenetur voluptates doloribus commodi dicta modi aliquid deserunt, quis maiores nesciunt autem, aperiam natus.</p>
                <div className="container max-w-lg">
                    <div className="flex justify-center items-center mt-10 px-10">
                        <div className="px-2">
                            <Image src={google}/>
                        </div>
                        <div className="px-2">
                            <Image src={apple}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Parallax;
