import React, { Component } from 'react'
import styles from '../assets/css/BlogEntries.module.css'


export default class BlogItem extends Component {
    render() {
        return (
            <>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className={styles.blogPostThumb}>
                    <div className={styles.img}>
                        <img src={this.props.img} alt="" />
                    </div>
                    <div className={styles.blogContent}>
                        <h3>
                            <a href="#">{this.props.title}</a>
                        </h3>
                        <div className={styles.text}>
                            {this.props.text}
                        </div>
                        <a href="#" className="main-button">Read More</a>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
