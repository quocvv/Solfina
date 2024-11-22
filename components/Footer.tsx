import Image from "next/image";
import { FC } from 'react';
const Footer = () => {
    return (
        <footer id="footer">
            <div className="themesflat-container">
                <div className="row">
                    <div className="col-12">
                        <div className="footer-content flex flex-grow">
                            <div className="widget-logo flex-grow">
                                <div className="logo-footer" id="logo-footer">
                                    <a href="index.html">
                                        <Image
                                            id="logo_footer"
                                            src="/assets/images/logo/logo.jpg"
                                            alt="logo"
                                            width={100}
                                            height={100}
                                            priority
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="widget widget-menu style-1">
                                <h5 className="title-widget">Marketplace</h5>
                                <ul>
                                    <li>
                                        <a href="#">All NFTs</a>
                                    </li>
                                    <li>
                                        <a href="#">Virtual worlds</a>
                                    </li>
                                    <li>
                                        <a href="#">Domain names</a>
                                    </li>
                                    <li>
                                        <a href="#">Photography</a>
                                    </li>
                                    <li>
                                        <a href="#">Digital art</a>
                                    </li>
                                    <li>
                                        <a href="#">Music</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget widget-menu style-2">
                                <h5 className="title-widget">Resource</h5>
                                <ul>
                                    <li>
                                        <a href="#">Help center</a>
                                    </li>
                                    <li>
                                        <a href="#">Platform status</a>
                                    </li>
                                    <li>
                                        <a href="#">Partners</a>
                                    </li>
                                    <li>
                                        <a href="#">Discount community</a>
                                    </li>
                                    <li>
                                        <a href="#">Live auctions</a>
                                    </li>
                                    <li>
                                        <a href="#">Discover</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget widget-menu style-3">
                                <h5 className="title-widget">Account</h5>
                                <ul>
                                    <li>
                                        <a href="#">Authors</a>
                                    </li>
                                    <li>
                                        <a href="#">My Collection</a>
                                    </li>
                                    <li>
                                        <a href="#">Author Profile</a>
                                    </li>
                                    <li>
                                        <a href="#">Go to dashboard</a>
                                    </li>
                                    <li>
                                        <a href="#">Collection</a>
                                    </li>
                                    <li>
                                        <a href="#">Create Collection</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget-last">
                                <div className="widget-menu style-4">
                                    <h5 className="title-widget">Company</h5>
                                    <ul>
                                        <li>
                                            <a href="#">Help center</a>
                                        </li>
                                        <li>
                                            <a href="#">Platform status</a>
                                        </li>
                                    </ul>
                                </div>
                                <h5 className="title-widget mt-30">Join the community</h5>
                                <div className="widget-social">
                                    <ul className="flex">
                                        <li>
                                            <a href="#" className="icon-facebook" />
                                        </li>
                                        <li>
                                            <a href="#" className="icon-twitter" />
                                        </li>
                                        <li>
                                            <a href="#" className="icon-vt" />
                                        </li>
                                        <li>
                                            <a href="#" className="icon-tiktok" />
                                        </li>
                                        <li>
                                            <a href="#" className="icon-youtube" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2024 Solfina - Made By BumbleBee</p>
                    <ul className="flex">
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#">Terms of Service</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
