import React, { Fragment } from 'react';
import Main from './Main'
import './Home.css'
import img500 from './../../image/500Startupslogo.png'
import sass from './../../image/saasmantra.png'
import gameball from './../../image/gameball.png'
import vivelo from './../../image/vivelo.png'
import funding from './../../image/funding.png'
import dave from './../../image/daveparker.png'
import frozen from './../../image/frozenlemon.png'
import FundRaising from './../../image/fundraisingforacause.png' 
import answer from './../../image/answers.png'
import Funnel from './../../image/funnel.png'
import Data from '../../Data' 
import track from './../../image/track-actions.png'
import apps from './../../image/integrations.png' 
import img from './../../image/jordan.png'


const Home =()=> {
    const reviewitem = Data.map((item) => {
        return(
            <div className='col-lg-10 box pt-3 pb-4'>
                <img src={item.img} alt="img"/>
                <span>{item.title}<a href={item.linkhref} target="blank"> {item.link}</a></span>
                <p>{item.opinion}</p>
            </div>
        )
    })
    return (
        <Fragment>
            <Main/>
            <section className="founders">
                <div className="container">
                    <h5>Over 2,000 Founders and Marketers get Better Results with Funnelll</h5>
                    <div className='row'>
                        <div className='col-lg-3 col-md-4 col-sm-6'>
                            <div className='image-box'>
                                <img src={img500} height={65} alt="img500" />
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-6'>
                            <div className='image-box'>
                                <img src={sass} alt="sass" />
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-6'>
                            <div className='image-box'>
                                <img src={gameball} alt="gameball" />
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-6'>
                            <div className='image-box'>
                                <img src={vivelo} alt="vivelo" />
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-6'>
                            <div className='image-box'>
                                <img src={funding} alt="funding" />
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-6'>
                            <div className='image-box'>
                                <img src={dave} alt="dave" />
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-6'>
                            <div className='image-box'>
                                <img src={frozen} alt="frozen" />
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-6'>
                            <div className='image-box'>
                                <img src={FundRaising} alt="FundRaising" />
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
            <section className="business">
                <div className="container">
                <div className='row justify-content-center'>
                <div className="col-lg-10">
                    <div className="text">
                        <span>INSIGHTS AND DASHBOARDS</span>
                        <h2>Get The Insights Your Business Needs</h2>
                        <p>Funnelll brings your data together, removes inconsistencies, and gives you the tools to<br/> maximize the ROI on your marketing budget</p>
                    </div>
                </div>
                </div>
                    <div className="row align-items-center mt-5">
                        <div className="col-lg-5">
                            <div className="box">
                                <span>UNDERSTAND</span>
                                <h2>Ask questions in plain English, get answers and insights</h2>
                                <p>Ask questions about your marketing performance in plain English with supporting data just a click away</p>
                                <p>Funnelll answers questions about:</p>
                                <ul>
                                    <li>Customer Journeys</li>
                                    <li>Channel and Campaign performance</li>
                                    <li>Location performance by Country and City</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1">
                            <img src={answer} alt="answers"/>
                        </div>
                        <div className="col-lg-7 mt-5">
                            <img src={Funnel} alt="Funnel"/>
                        </div>
                        <div className="col-lg-5 mt-5">
                            <div className="box">
                                <span>BRING DATA TOGETHER</span>
                                <h2>Visualize Your Customers' Journeys on Your Website</h2>
                                <p>Analyze users across a series of actions. See how many people start or finish a sequence — and where they drop off. Get access to data about:</p>
                                <ul>
                                    <li>Device Performance across stages</li>
                                    <li>Page performance by stage</li>
                                    <li>Marketing Performance by stage</li>
                                </ul>
                                <p>And More...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
            <section className="review">
                <div className="container">
                    <div className='row justify-content-center'>{reviewitem}</div>
                </div>
            </section>
            <section className="customer">
                <div className="container">
                    <div class="text">
                        <span>UNLOCK CUSTOMERS' DATA</span>
                        <h2>Conversion Tracking Made Simple</h2>
                        <p>Track meaningful actions customers take on your website as they progress through their <br/>buying journey. Distribute high-quality data throughout your marketing stack</p>
                    </div>
                    <div className="row mt-5 align-items-center">
                        <div className="col-lg-5">
                            <div className="box">
                                <span>NO-CODE TRACKING</span>
                                <h2>Automatically Track Page Views, Clicks, and Scrolls or Set Up Your Custom Tracking Visually</h2>
                                <p>Add the Funnelll code to your website to automatically track page views, clicks, and scrolls</p>
                                <ul>
                                    <li>Works Cross-domains</li>
                                    <li>Single Page Application ready</li>
                                    <li>Automatically syncs data with Google Analytics</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <img src={track} alt="track"/>
                        </div>
                        <div className="col-lg-7 mt-5">
                            <img src={apps} alt="apps"/>
                        </div>
                        <div className="col-lg-5 mt-5">
                            <div className="box">
                                <span>DISTRIBUTE DATA</span>
                                <h2>3 Clicks to Distribute Your Customers' Data And Events Across Your Marketing Stack</h2>
                                <p>Set up once then copy your tracking across your marketing stack with 3 clicks. Send Events to:</p>
                                <ul>
                                    <li>Facebook Pixel / Ads</li>
                                    <li>Google Ads</li>
                                    <li>Slack, Quora, Captera, and more ...</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
            <section className="review">
                <div className="container">
                    <div className='row justify-content-center'>
                        <div className='col-lg-10 box pt-3 pb-4'>
                        <img src={img} alt="img"/>
                        <span>Jordan B, CEO @<a href=".#" target="blank">Burstware</a></span>
                        <p>Funnelll makes it dead simple to setup and track
                        your marketing funnel, I have not seen anything like it. I didn't have to dig through klunky
                        interfaces and keep track of multiple tags on my website</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='budget my-5 text-center'>
                <div className="container">
                    <h2>Say Goodbye to wasted <br/>marketing budgets</h2>
                    <div className="row justify-content-center mt-4 mb-3">
                        <div className="col-lg-3">
                        <div className='box'>
                        <p>Measure what matters</p>
                        </div>
                        </div>
                        <div className="col-lg-3">
                        <div className='box'>
                        <p> Visualize customer journeys</p>
                        </div>
                        </div>
                        <div className="col-lg-3">
                        <div className='box'>
                        <p>Answer your questions</p>
                        </div>
                        </div>
                    </div>
                    <div className="btns">
                        <button className="btn1">Get Started Free</button>
                        <button className="btn2">Get Demo</button>
                        <p className='mt-3'>14 day free trial. No credit card needed.</p>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Home;
