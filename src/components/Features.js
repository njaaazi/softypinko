import React, { Component } from 'react'
import featured_item from '../assets/images/featured-item-01.png';
import styles from '../assets/css/features.module.css'


export default class Features extends Component {
    render() {
        return (
            <>
                <section className={[styles.section, styles.homeFeature].join(' ')}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
                                        <div className={styles.featuresSmallItem}>
                                            <div className={styles.icon}>
                                                <i><img src={featured_item} alt=""/></i>
                                            </div>
                                            <h5 className={styles.featuresTitle}>Modern Strategy</h5>
                                            <p>Customize anything in this template to fit your website needs</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s">
                                        <div className={styles.featuresSmallItem}>
                                            <div className={styles.icon}>
                                                <i><img src={featured_item} alt="" /></i>
                                            </div>
                                            <h5 className={styles.featuresTitle}>Best Relationship</h5>
                                            <p>Contact us immediately if you have a question in mind</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s">
                                        <div className={styles.featuresSmallItem}>
                                            <div className={styles.icon}>
                                                <i><img src={featured_item} alt="" /></i>
                                            </div>
                                            <h5 className={styles.featuresTitle}>Ultimate Marketing</h5>
                                            <p>You just need to tell your friends about our free templates</p>
                                        </div>
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
