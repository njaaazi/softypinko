import React, { Component } from 'react'
import styles from '../assets/css/BlogEntries.module.css'
import BlogItem from "../components/BlogItem"
import data from '../data/blogEntries.json'




export default class Blog extends Component {
    render() {
        return (
            <>
                <section className="section padding-top-150" id="blog">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="center-heading">
                                    <h2 className="section-title">{data.blog_title}</h2>
                                </div>
                            </div>
                            <div className="offset-lg-3 col-lg-6">
                                <div className="center-text">
                                    <p>{data.blog_subtitle}</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            {data.blog_items.map(item => (
                                <BlogItem key={item.id} title={item.title} text={item.text} img={item.img} />
                            ))} 
                        </div>

                    </div>
                </section>
            </>
        )
    }
}
