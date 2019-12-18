import React from 'react';
import styles from './Chat.module.css';


let firstname = localStorage.getItem('firstname');
let lastname = localStorage.getItem('lastname');
let avatar = localStorage.getItem('avatar');

const Chat = () => {
    return (
        <section className={styles.section}>
            <div class="container">
                <img src={process.env.PUBLIC_URL + '/img/avatar/' + avatar} alt="Avatar" width="30px" />
                <p>Hello. How are you today?</p>
                <span class="time-right">11:00</span>
            </div>

            <div class="container darker">
                <img class="right" src={process.env.PUBLIC_URL + '/img/avatar/' + avatar} alt="Avatar" width="30px" />
                <p>Hey! I'm fine. Thanks for asking!</p>
                <span class="time-left">11:01</span>
            </div>

            <div class="container">
                <img src={process.env.PUBLIC_URL + '/img/avatar/' + avatar} alt="Avatar" width="30px" />
                <p>Sweet! So, what do you wanna do today?</p>
                <span class="time-right">11:02</span>
            </div>

            <div class="container darker">
                <img src={process.env.PUBLIC_URL + '/img/avatar/' + avatar} alt="Avatar" class="right" width="30px" />
                <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
                <span class="time-left">11:05</span>
            </div>
        </section>
    );
};

export default Chat;