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

            <Parallax/>


            <div className="py-5 bg-shade">

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
