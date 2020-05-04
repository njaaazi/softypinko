import React, { Component } from 'react'
import testimonial_icon from '../assets/images/testimonial-icon.png';
import styles from '../assets/css/testimonials.module.css'



export default class Testimonials extends Component {
    render() {
        return (
            <>
                <section className="section padding-top-150" id="testimonials">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="center-heading">
                                    <h2 className={styles.sectionTitle}>What do they say?</h2>
                                </div>
                            </div>
                            <div className="offset-lg-3 col-lg-6">
                                <div className="center-text">
                                    <p>Donec tempus, sem non rutrum imperdiet, lectus orci fringilla nulla, at accumsan elit eros a turpis. Ut sagittis lectus libero.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className={styles.teamItem}>
                                    <div className={styles.teamContent}>
                                        <i><img src={testimonial_icon} alt="" /></i>
                                        <p>Proin a neque nisi. Nam ipsum nisi, venenatis ut nulla quis, egestas scelerisque orci. Maecenas a finibus odio.</p>
                                        <div className={styles.userImage}>
                                            <img src="http://placehold.it/60x60" alt="" />
                                        </div>
                                        <div className={styles.teamInfo}>
                                            <h3 className={styles.userName}>Catherine Soft</h3>
                                            <span>Managing Director</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className={styles.teamItem}>
                                    <div className={styles.teamContent}>
                                        <i><img src={testimonial_icon} alt="" /></i>
                                        <p>Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie.</p>
                                        <div className={styles.userImage}>
                                            <img src="http://placehold.it/60x60" alt="" />
                                        </div>
                                        <div className={styles.teamInfo}>
                                            <h3 className={styles.userName}>Kelvin Wood</h3>
                                            <span>Digital Marketer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className={styles.teamItem}>
                                    <div className={styles.teamContent}>
                                        <i><img src={testimonial_icon} alt="" /></i>
                                        <p>Quisque diam odio, maximus ac consectetur eu, auctor non lorem. Cras quis est non ante ultrices molestie. Ut vehicula et diam at aliquam.</p>
                                        <div className={styles.userImage}>
                                            <img src="http://placehold.it/60x60" alt="" />
                                        </div>
                                        <div className={styles.teamInfo}>
                                            <h3 className={styles.userName}>David Martin</h3>
                                            <span>Website Manager</span>
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
