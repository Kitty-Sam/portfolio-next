import MainLayout from "../components/MainLayout";
import styles from '../styles/Contacts.module.css'
import Image from "next/image";


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

                        </div>
                    </div>

                    <div className={styles.message}>
                        <div className={styles.inputInfo}>
                            <input className={styles.nameSend} placeholder={"your name"}
                                   type="text"
                                   name="user"
                            />

                            <input className={styles.mailSend} placeholder={"your mail"}
                                   name="email"
                                   id="email"
                                   type="email"
                            />
                        </div>
                        <textarea className={styles.textarea} placeholder={"your message"}
                                  id="message"
                                  name="message"
                        />
                        <div className={styles.btSend}>
                            <button className={styles.btnSend} type="submit"
                            >
                                <a className={styles.btnSubmit}>send message</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </MainLayout>
    );
};

export default Contacts;