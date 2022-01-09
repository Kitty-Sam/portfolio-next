import React, {useState} from 'react';
import styles from "../styles/Contacts.module.css";

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            name,
            email,
            message,
        };
        console.log(data);
    };

    return (
        <div className={styles.message}>
            <form onSubmit={handleSubmit}>
                <div className={styles.inputInfo}>
                    <div><input className={styles.nameSend} placeholder={"your name"}
                                id="name"
                                type="text"
                                onChange={e => setName(e.target.value)}
                    /></div>

                    <div><input className={styles.mailSend} placeholder={"your mail"}
                                id="email"
                                type="email"
                                onChange={e => setEmail(e.target.value)}
                    /></div>
                </div>
                <textarea className={styles.textarea} placeholder={"your message"}
                          id="message"
                          onChange={e => setMessage(e.target.value)}
                />
                <div className={styles.btSend}>
                    <button className={styles.btnSend} type="submit"
                    >send message
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;