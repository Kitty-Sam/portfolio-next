import MainLayout from "../components/MainLayout";
import styles from '../styles/HomePage.module.css'
import Image from "next/image";
import Router from 'next/router'

export enum Routes {
    HOME='/',
    ABOUT='/about',
    PORTFOLIO='/portfolio',
    CONTACTS='/contacts',
    CV='/cv'
}


const Index = () => {
    return (
        <>
        <MainLayout  title={'react, developer'}>
         <div className={styles.mainContent}>
             <div className={styles.avatarWrapper}>
               <div className={styles.avatar}>
                   <Image src='/../public/avatar.jpg'  width='252px' height='448px' alt='avatar'/> </div>
             </div>
             <div className={styles.text}>
                 <span>-I'm Kate Samuta.</span>
                 <h1>web-developer</h1>
                 <p> I'm a Belarusian front‑end developer focused on user‑friendly experiences,
                     I am passionate about building excellent software that helps people around me. </p>
                 <button className={styles.btn} onClick={()=>{Router.push(Routes.ABOUT)}}>about me</button>
             </div>
         </div>

        </MainLayout>
        </>
    );
};

export default Index;