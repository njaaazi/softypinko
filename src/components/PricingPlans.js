import React, { Component } from 'react'
import styles from '../assets/css/pricingPlans.module.css'

export default class PricingPlans extends Component {
    render() {
        return (
            <>
                <section className="section colored padding-top-150" id="pricing-plans">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="center-heading">
                                    <h2 className="section-title">Pricing Plans</h2>
                                </div>
                            </div>
                            <div className="offset-lg-3 col-lg-6">
                                <div className="center-text">
                                    <p>Donec vulputate urna sed rutrum venenatis. Cras consequat magna quis arcu elementum, quis congue risus volutpat.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
                                <div className={styles.pricingItem}>
                                    <div className={styles.pricingHeader}>
                                        <h3 className={styles.pricingTitle}>Starter</h3>
                                    </div>
                                    <div className={styles.pricingBody}>
                                        <div className={styles.priceWrapper}>
                                            <span className={styles.currency}>$</span>
                                            <span className={styles.price}>14.50</span>
                                            <span className={styles.period}>monthly</span>
                                        </div>
                                        <ul className={styles.list}>
                                            <li className={styles.active}>60 GB space</li>
                                            <li className={styles.active}>600 GB transfer</li>
                                            <li className={styles.active}>Pro Design Panel</li>
                                            <li>15-minute support</li>
                                            <li>Unlimited Emails</li>
                                            <li>24/7 Security</li>
                                        </ul>
                                    </div>
                                    <div className={styles.pricingFooter}>
                                        <a href="#" className="main-button">Purchase Now</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s">
                                <div className={[styles.pricingItem, styles.active].join(' ')}>
                                    <div className={styles.pricingHeader}>
                                        <h3 className={styles.pricingTitle}>Premium</h3>
                                    </div>
                                    <div className={styles.pricingBody}>
                                        <div className={styles.priceWrapper}>
                                            <span className={styles.currency}>$</span>
                                            <span className={styles.price}>21.50</span>
                                            <span className={styles.period}>monthly</span>
                                        </div>
                                        <ul className={styles.list}>
                                            <li className={styles.active}>120 GB space</li>
                                            <li className={styles.active}>1200 GB transfer</li>
                                            <li className={styles.active}>Pro Design Panel</li>
                                            <li className={styles.active}>15-minute support</li>
                                            <li>Unlimited Emails</li>
                                            <li>24/7 Security</li>
                                        </ul>
                                    </div>
                                    <div className={styles.pricingFooter}>
                                        <a href="#" className="main-button">Purchase Now</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s">
                                <div className={styles.pricingItem}>
                                    <div className={styles.pricingHeader}>
                                        <h3 className={styles.pricingTitle}>Advanced</h3>
                                    </div>
                                    <div className={styles.pricingBody}>
                                        <div className={styles.priceWrapper}>
                                            <span className={styles.currency}>$</span>
                                            <span className={styles.price}>42.00</span>
                                            <span className={styles.period}>monthly</span>
                                        </div>
                                        <ul className={styles.list}>
                                            <li className={styles.active}>250 GB space</li>
                                            <li className={styles.active}>5000 GB transfer</li>
                                            <li className={styles.active}>Pro Design Panel</li>
                                            <li className={styles.active}>15-minute support</li>
                                            <li className={styles.active}>Unlimited Emails</li>
                                            <li className={styles.active}>24/7 Security</li>
                                        </ul>
                                    </div>
                                    <div className={styles.pricingFooter}>
                                        <a href="#" className="main-button">Purchase Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
