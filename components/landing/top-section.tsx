import React, {useState} from 'react';
import Slide1 from "../../public/assets/images/slide1.png";
import bookshelf from "../../public/assets/images/bookshelf.jpeg";
import Logo from "../../public/assets/images/Instasage.png";
import Link from 'next/link';
import Image from 'next/image'
import google from "../../public/assets/images/google-play-black.png";
import apple from "../../public/assets/images/app-store-black.png";

function TopSection() {
    return (
        <section className="bg-shade lg:h-screen-90 bg-black">
            <div className="h-full flex flex-col md:flex-row">
                <div className="flex-1 flex items-center">
                    <div className="px-5 lg:pl-40 lg:pr-0">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-primary leading-normal mt-8">Explore the treasures of life hidden inside books</h1>
                        <p className="text-lg leading-loose">
                            Read amazing books from our wide range of collections and experience the awesomeness of Instasage.
                        </p>
                        <div className="my-10">
                            <div className="flex items-center mt-10">
                                <div className="mr-4">
                                    <Image src={google}/>
                                </div>
                                <div className="">
                                    <Image src={apple}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex items-end">
                    <Image className="w-full h-full object-cover" src={Slide1}/>
                </div>
            </div>
        </section>
    );
}

export default TopSection;
