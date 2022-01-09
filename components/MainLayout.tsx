import Head from "next/head";
import styles from '../styles/MainLayout.module.css'
import Router from 'next/router'
import Image from "next/image";
import { Routes } from "../pages";

const MainLayout = ({children, title, keywords = "portfolio"}) => {
    return (
        <div className={styles.wrapper}>
            <Head>
                <meta name={"keywords"} content={"junior developer" + keywords}/>
                <meta charSet={"utf-8"}/>
                <title>{title} | Portfolio </title>
            </Head>
            <main className={styles.mainContent}>
                {children}
            </main>
            <nav className={styles.navbar}>
                <button onClick={()=>{Router.push(Routes.HOME)}} className={styles.img}><Image src='/homes.png' alt={'home'} width='10px' height='10px'/></button>
                <button onClick={()=>{Router.push(Routes.ABOUT)}} className={styles.img}><Image src='/humans.png' alt={'about'} width='10px' height='10px'/></button>
                <button onClick={()=>{Router.push(Routes.PORTFOLIO)}} className={styles.img}><Image src='/bag.png' alt={'portfolio'} width='10px' height='10px'/></button>
                <button onClick={()=>{Router.push(Routes.CONTACTS)}} className={styles.img}><Image src='/message.png' alt={'contacts'} width='10px' height='10px'/></button>
            </nav>
        </div>
    );
};

export default MainLayout;