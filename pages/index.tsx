import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import {IonIcon} from "@ionic/react";
import {chevronBackOutline, chevronForwardOutline} from "ionicons/icons";
import videos from "./videos";
import {client} from "../apollo-client";
import { gql } from 'graphql-tag';

import ai from "../public/assets/icons/speech.svg";
import pub from "../public/assets/icons/document.svg";
import listen from "../public/assets/icons/listen.svg";
import apple from "../public/assets/images/apple.png";
import google from "../public/assets/images/play.png";
import TopSection from "../components/landing/top-section";
import slide2 from "../public/assets/images/slide2.png";
import Featured from "../components/landing/featured";
import {FEATURED_BOOKS} from "../utils/queries";
import Parallax from "../components/landing/parallax";
import Features from "../components/landing/features";
import Hiw from "../components/landing/hiw";
import React, {useState} from "react";
import logo from "../public/assets/images/logo.png"
import Header from "../components/layout/header";
import SideBar from "../components/layout/side-bar";

const Home: NextPage = ({books,menu}) => {
    const [toggleMenu,setToggleMenu] = useState(false);
    const toggle=()=>(setToggleMenu(!toggleMenu))
    return (
        <div className="font-pop relative">

            <Header menu={menu} toggle={toggle}/>

            <TopSection/>
            <Features/>
            <Hiw/>

            <Featured books={books}/>

            {/*<section className="py-10">
                <PopularCategories/>
            </section>*/}

            {/*<section className="min-h-half flex items-center bg-primary">
                <div className="container mx-auto flex flex-col md:flex-row items-center py-10">
                    <div className="flex-1 p-4">
                        <h1 className="text-2xl lg:text-4xl mb-4 font-bold text-white">Publish on Instasage, Keep 90% of Royalties on Your Book</h1>
                        <p className="text-white">
                            Authors deserve a large percentage of royalties for their work. Instasage makes it possible.
                        </p>
                        <div className="py-10">
                            <Link href="/article/publish-on-instasage-keep-95percent-of-royalties-on-your-book">
                                <a className="border border-white text-white rounded-full px-10 py-4">Learn more</a>
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1 order-first md:order-last p-2 bg-white" style={{clipPath: "polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)"}}>
                        <div className="bg-cover" style={{backgroundImage:`url(${slide2})`,height:"40vh",clipPath: "polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)"}}/>
                    </div>
                </div>
            </section>*/}

            <Parallax/>

            <div className="py-5 bg-shade">

                {/*<div className="flex-center py-4">
                    <div>
                        <h2 className="text-center text-2xl font-bold mb-2">Available On</h2>
                        <div className="flex items-center">
                            <a target="_blank" href="https://play.google.com/store/apps/details?id=com.instasage.app">
                                <Image src={google} alt="" className="h-12 px-2"/>
                            </a>
                            <Image src={apple} alt="" className="h-12 px-2"/>
                        </div>
                    </div>
                </div>*/}
                <p className="flex-center text-xs text-medium">
                    © {new Date().getFullYear()} Instasage by AlphaCipher
                </p>
            </div>
            <SideBar menu={menu} show={toggleMenu} toggle={toggle}/>
        </div>
    )
}

export async function getStaticProps() {
    const { data } = await client.query({
        query: FEATURED_BOOKS,
        variables:{page:1,limit:6}
    });
    const menu = [
        {name:"Books",path:"/"},
        {name:"Article",path:"/"},
        {name:"Publish a book",path:"/"},
        {name:"Read",path:"/"},
    ]

    return {
        props: {
            books:data.featuredBooks,
            menu
        },
    };
}

export default Home
