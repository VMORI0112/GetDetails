import React from 'react';
import styles from './Home.module.css';
import worker1 from '../../../img/home/worker1.jpg';
import port1 from '../../../img/home/port1.jpg';
import port2 from '../../../img/home/port2.jpg';
import port3 from '../../../img/home/port3.jpg';
import port4 from '../../../img/home/port4.jpg';
import port5 from '../../../img/home/port5.jpg';
import port6 from '../../../img/home/port6.jpg';
import port7 from '../../../img/home/port7.jpg';
import port8 from '../../../img/home/port8.jpg';
import port9 from '../../../img/home/port9.jpg';
import hp1 from '../../../img/home/hp1.jpg';
import hp2 from '../../../img/home/hp2.jpg';
import hp3 from '../../../img/home/hp3.jpg';
import hp4 from '../../../img/home/hp4.jpg';


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
            <div className="portfolio container my-5">
                <h2>Portfolio</h2>
                <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg mt-4">
                        <img src={port1} alt="port1" width="100%" height="100%" />
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 mt-4">
                        <img src={port2} alt="port2" width="100%" height="100%" />
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 mt-4">
                        <img src={port3} alt="port3" width="100%" height="100%" />
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 mt-4">
                        <img src={port4} alt="port4" width="100%" height="100%" />
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 mt-4">
                        <img src={port5} alt="port5" width="100%" height="100%" />
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 mt-4">
                        <img src={port6} alt="port6" width="100%" height="100%" />
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 mt-4">
                        <img src={port7} alt="port7" width="100%" height="100%" />
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 mt-4">
                        <img src={port8} alt="port8" width="100%" height="100%" />
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 mt-4">
                        <img src={port9} alt="port9" width="100%" height="100%" />
                    </div>
                </div>
            </div>
            <div className={styles.services}>
                <div className="container py-5">
                    <h2>Services</h2>
                    <div className="row">
                        <div className="col-sm-12 col-md-3 col-lg-3">
                            <img src={hp1} alt="hp1" width="100%" />
                        </div>
                        <div className="col-sm-12 col-md-3 col-lg-3">
                            <img src={hp2} alt="hp2"/>
                        </div>
                        <div className="col-sm-12 col-md-3 col-lg-3">
                            <img src={hp3} alt="hp3"/>
                        </div>
                        <div className="col-sm-12 col-md-3 col-lg-3">
                            <img src={hp4} alt="hp4"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;