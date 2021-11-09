import React, {useState} from 'react';
// import Img from "../../public/assets/images/top-img.svg";
import welcome from "../../public/assets/images/welcome.jpg";
import bookshelf from "../../public/assets/images/bookshelf.jpeg";
import Logo from "../../public/assets/images/Instasage.png";
import Link from 'next/link';
import Image from 'next/image'

function TopSection() {
    return (
        <section className="bg-shade bg-cover">
            <div className="py-4 pl-40 absolute logo">
                <Image src={Logo} alt="" className="h-12"/>
            </div>
            <div className="flex flex-col md:flex-row items-center">
                <div className="flex-1 px-10 pl-40">
                    <h1 className="text-3xl lg:text-5xl font-bold mb-4 text-primary">Explore the treasures of life hidden inside books</h1>
                    <p className="">
                        Read amazing books from our wide range of collections and experience the awesomeness of Instasage.
                    </p>
                    <div className="my-10">
                        <Link href="/login">
                            <a className="bg-primary text-white rounded-full px-10 py-4">Get Started</a>
                        </Link>
                    </div>
                </div>

                <div className="flex-1 pl-5 bg-white" style={{clipPath: "polygon(44% 0, 100% 0%, 100% 100%, 0% 100%)"}}>
                    <div className="w-full h-full bg-cover" style={{backgroundImage:`url(${welcome})`,height:"60vh",clipPath: "polygon(44% 0, 100% 0%, 100% 100%, 0% 100%)"}}/>
                </div>
            </div>
        </section>
    );
}

export default TopSection;
