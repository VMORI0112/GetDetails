import React from 'react';
import styles from './Chat.module.css';


let firstname = localStorage.getItem('firstname');
let lastname = localStorage.getItem('lastname');
let avatar = localStorage.getItem('avatar');

const Chat = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className="alert alert-primary">
                    <div> {firstname} {lastname} </div>
                </div>
                <div className={styles.container}>
                    <img src={process.env.PUBLIC_URL + '/img/avatar/' + avatar} alt="Avatar" width="30px" />
                    <p className={styles.leftP}>Hello. How are you today?</p>
                    <span className={styles.timeRight}>11:00</span>
                </div>

                <div className={[styles.container, styles.darker].join(' ')}>
                    <img className={styles.right} src={process.env.PUBLIC_URL + '/img/avatar/' + avatar} alt="Avatar" width="30px" />
                    <p className={styles.rightP}>Hey! I'm fine. Thanks for asking!</p>
                    <span className={styles.timeLeft}>11:01</span>
                </div>

                <div className={styles.container}>
                    <img src={process.env.PUBLIC_URL + '/img/avatar/' + avatar} alt="Avatar" width="30px" />
                    <p className={styles.leftP}>Sweet! So, what do you wanna do today?</p>
                    <span className={styles.timeRight}>11:02</span>
                </div>

                <div className={[styles.container, styles.darker].join(' ')}>
                    <img className={styles.right} src={process.env.PUBLIC_URL + '/img/avatar/' + avatar} alt="Avatar" width="30px" />
                    <p className={styles.rightP}>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
                    <span className={styles.timeLeft}>11:05</span>
                </div>
            </div>
        </section>
    );
};

export default Chat;