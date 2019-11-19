import React from 'react';
import styles from './Home.module.css';
import worker1 from '../../../img/home/worker1.jpg';

const Home = () => {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <div className={["style-banner text-center", styles.bannerInfo].join(' ')}>
                    <p>The Best App For Your Records</p>
                    <h3>Aircraft Training Records</h3>
                </div>
            </div>
            <div className="about py-5 container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <h2>About Us</h2>
                        <p>For example, if you killed your grandfather, you'd cease to exist! The key to victory is discipline, and that means a well made bed. You will practice until you can make your bed in your sleep.</p>
                    </div>
                    <div className={["col-sm-12 col-md-6 col-lg-6", styles.worker1].join(' ')}>
                        <img src={worker1} alt="worker1" width="100%" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;