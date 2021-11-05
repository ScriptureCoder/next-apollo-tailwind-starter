import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {IonIcon} from "@ionic/react";
import {chevronBackOutline, chevronForwardOutline} from "ionicons/icons";
import videos from "./videos";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-screen lg:w-full">
        <div className="w-full px-2 md:px-5 container mx-auto max-w-7xl relative">
          <div className="flex justify-between">
            <h3 className="text text-sm md:text-base md:text-lg font-semibold pl-2 md:pl-0" onClick={()=>{}}>Recent Videos</h3>
            <div className="flex-center text-xs lg:text-sm hover:opacity-50" role="button" onClick={()=>{}}>
              <h3>See more</h3>
              <IonIcon icon={chevronForwardOutline}/>
            </div>
          </div>
          <div className="w-full flex flex-no-wrap overflow-y-hidden overflow-x-auto scroll-hide smooth mt-2 py-2">
            {videos.map((data,i)=>(
                <div role="button" onClick={()=>{}} className="flex-shrink-0 bg-shade shadow mr-2 md:mr-4 w-9/12 md:w-1/4 p-2">
                  <div className="bg-black h-36 bg-cover relative bg-no-repeat" style={{backgroundImage:`url(${data.image})`}}>
                    <div className="bg-black absolute px-2 py-1 bottom-0 right-0 text-white text-xs">{data.time}</div>
                  </div>
                  <div className="flex py-2">
                    <div className="flex-1">
                      <h3 className="font-semibold text text-sm md:text-base">{data.title}</h3>
                      <h4 className="text-gray-500 text-xs md:text-sm">5.7K views <span className="text-black font-bold">.</span> 5 hours ago</h4>
                    </div>
                  </div>
                </div>
            ))}
          </div>
          <div onClick={()=>{}} className="absolute" style={{left:-20, top:120}}>
            <button className="h-10 w-10 border bg-shade shadow rounded-full hidden lg:flex items-center justify-center">
              <IonIcon icon={chevronBackOutline} className="text text-2xl"/>
            </button>
          </div>
          <div onClick={()=>scroll()} className="absolute" style={{right:-20, top:120}}>
            <button className="h-10 w-10 border bg-shade shadow rounded-full  hidden lg:flex items-center justify-center">
              <IonIcon icon={chevronForwardOutline} className="text text-2xl"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
