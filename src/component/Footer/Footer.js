import React, { Fragment } from 'react'
import './Footer.css'
import iogoicon from './../../image/logo-icon.png'
import iogotext from './../../image/logo-text.png'
import feature from './../../image/featured.svg'


const Footer =()=> {
    return (
        <Fragment>
        <footer className="py-5 mt-4">
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3'>
                        <div className='box'>
                            <img src={iogoicon} alt="iogoicon"/>
                            <img src={iogotext} alt="iogotext"/>
                            <p className='my-3 one'>We are on a mission to make digital marketing accessible for anyone bold enough to start</p>
                            <p>Funnelll is a proud 500 Global, Flat6Labs, and Pioneer company</p>
                            <p>© Copyright Funnelll</p>
                            <p>Funnelll Inc.<br/>
                                251 Little Falls Drive, Wilmington, New Castle County, Delaware 19808, US
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-2'>
                        <div className='box'>
                            <h5>Apps & Integrations</h5>
                            <ul className="list-unstyled">
                            <li><a href="./#">Google Analytics</a></li>
                            <li><a href="./#">Facebook Pixel & Ads</a></li>
                            <li><a href="./#">Google Ads</a></li>
                            <li><a href="./#">Google Search Console</a></li>
                            <li><a href="./#">Slack</a></li>
                            <li><a href="./#">Quora Ads</a></li>
                            <li><a href="./#">Capterra PPC</a></li>
                            <li><a href="./#">View All &gt;&gt;</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-2'>
                        <div className='box'>
                            <h5>Platforms</h5>
                            <ul className="list-unstyled">
                            <li><a href="./#">Shopify</a></li>
                            <li><a href="./#">WordPress</a></li>
                            <li><a href="./#">ClickFunnels</a></li>
                            <li><a href="./#">Squarespace</a></li>
                            <li><a href="./#">Weblium</a></li>
                            <li><a href="./#">Weebly</a></li>
                            <li><a href="./#">Wix</a></li>
                            <li><a href="./#">WooCommerce</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-2'>
                        <div className='box'>
                            <h5>Company</h5>
                            <ul className="list-unstyled">
                            <li><a href="./#">About Us</a></li>
                            <li><a href="./#">Jobs @ Funnelll</a></li>
                            <li><a href="./#">Blog</a></li>
                            <li><a href="./#">Help Portal</a></li>
                            <li><a href="./#">Road-map</a></li>
                            <h5 className="mt-4">Policies</h5>
                            <li><a href="./#">Privacy Policy</a></li>
                            <li><a href="./#">Terms & Conditions</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='box'>
                            <img src={feature} alt="feature"/>
                            <h5 className='mt-4 text-center'>For partnership enquiries contact</h5>
                            <a href='/#'>partnerships@funnelll.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </Fragment>
    )
}
export default Footer;