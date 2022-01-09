import MainLayout from "../components/MainLayout";
import styles from '../styles/Contacts.module.css'
import Image from "next/image";
import Form from "../components/Form";


const Contacts = () => {
    return (
        <MainLayout title={'Contacts'}>
            <div className={styles.container}>

                <h2 className={styles.header}> Get in touch </h2>

                <div style={{display: "flex"}}>
                    <div className={styles.contacts}>
                        <div className={styles.socialNetwork}>
                            <h3>don't be shy</h3>
                            <div className={styles.text}>
                                Feel free to get in touch with me.
                                I hope that we can find a common language.
                            </div>
                        </div>

                        <div className={styles.mail}>
                            <h3>mail me</h3>

                            <div className={styles.logoMail}>
                                <div className={styles.mailImg}><Image
                                    src='/list.png' alt={'mail'}
                                    width='25px' height='25px'/></div>
                                samutic40@gmail.com
                            </div>

                        </div>

                        <div className={styles.phone}>
                            <h3>call me</h3>
                            <div className={styles.logoPhone}>
                                <div className={styles.phoneImg}><Image
                                    src='/phone.png' alt={'phone'}
                                    width='25px' height='25px'/></div>
                                +37529 261 07 29
                            </div>

                            <div className={styles.icon}>
                                <a target="_blank" href={"https://www.linkedin.com/in/екатерина-самута"}>
                                    <div className={styles.linkedIn}><Image
                                        src={'/link.png'} alt={"linkedIn"} width='25px' height='25px'/></div>
                                </a>
                                <a target="_blank" href={"https://vk.com/samuta93"}>
                                    <div className={styles.vk}><Image
                                        src={'/vk.png'} alt={"vk"} width='25px' height='25px'/></div>
                                </a>

                            </div>

                        </div>
                    </div>
                        <Form/>
                </div>


            </div>

        </MainLayout>
    );
};

export default Contacts;