import MainLayout from "../components/MainLayout";
import styles from '../styles/About.module.css'
import Diagram from './../components/Diagram';
import Step from './../components/Step';

const titleSkill = ["HTML", "REDUX", "REACT", "CSS", "JS"];
const data = {"HTML": [60, 40], "REDUX": [50, 50], "REACT": [70, 30], "CSS": [50, 50], "JS": [40, 60]};


const About = () => {

    return (
        <>
            <MainLayout title={'About me'}>
                <div className={styles.personalInfo}>
                    <h2 className={styles.header}> About me </h2>
                    <div className={styles.personalInfoHeader}> Personal info</div>

                    <div className={styles.wrapper}>
                        <div className={styles.leftBlock}>
                            <p> First name: <strong>Kate</strong></p>
                            <p> Last name: <strong>Samuta</strong></p>
                            <p> Age: <strong>28</strong> years old </p>
                            <button className={styles.btn}><a style={{textDecoration: "none", color: "white"}} href="/samuta-kitty.pdf"
                                                              target="_blank"
                                                              rel="noopener noreferrer"
                                                              download>download CV</a></button>
                        </div>
                        <div className={styles.rightBlock}>
                            <p> Address: <strong>Minsk</strong></p>
                            <p> Phone: +375 29 261 07 29 </p>
                            <p> Email: <strong>samutic40@gmail.com</strong></p>
                        </div>


                    </div>
                    <h2 className={styles.header}> My skills </h2>
                    <div className={styles.diagramBlock}>

                        <div style={{color: "white", textAlign: 'center'}}>HTML : 60<Diagram titleSkill={titleSkill[0]}
                                                                                             data={data.HTML}/></div>
                        <div style={{color: "white", textAlign: 'center'}}>CSS : 50<Diagram titleSkill={titleSkill[1]}
                                                                                            data={data.CSS}/></div>
                        <div style={{color: "white", textAlign: 'center'}}>REACT : 70<Diagram titleSkill={titleSkill[2]}
                                                                                              data={data.REACT}/></div>
                        <div style={{color: "white", textAlign: 'center'}}>REDUX : 50<Diagram titleSkill={titleSkill[3]}
                                                                                              data={data.REDUX}/></div>
                        <div style={{color: "white", textAlign: 'center'}}>JS : 40<Diagram titleSkill={titleSkill[4]}
                                                                                           data={data.JS}/></div>

                    </div>

                    <h2 className={styles.header}>Experience & education</h2>

                    <div className={styles.personalInfoBlockFour}>

                        <div className={styles.experience}>
                            <Step title={"chemist analyst"} year={"2015-2021"}
                                  usefulInfo={"RUE Belmedpreparaty in the laboratory" +
                                  " for quality control of anticancer drugs"}/>
                            <Step title={"web-developer React/Redux"} year={"2021 and present time"}
                                  usefulInfo={"freelancer"}/>
                        </div>
                        <div className={styles.education}>
                            <Step title={"Chemist. Pharmaceutical chemistry"} year={"2010-2015"}
                                  usefulInfo={"Belarusian State University"}/>
                            <Step title={"Economist-manager"} year={"2014-2016"}
                                  usefulInfo={"Belarusian National Technical University"}/>
                            <Step title={"Web-developer React/Redux"} year={"2021-2021"}
                                  usefulInfo={"it-incubator"}/>
                        </div>
                    </div>

                </div>


            </MainLayout>
        </>
    );
};

export default About;