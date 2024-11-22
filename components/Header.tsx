import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: FC = () => {
    return (
        <header id="header_main" className="header_1 header-fixed">
            <div className="themesflat-container">
                <div className="row">
                    <div className="col-md-12">
                        <div id="site-header-inner">
                            <div className="wrap-box flex">
                                <div id="site-logo">
                                    <div id="site-logo-inner">
                                        <a href="/" rel="home" className="main-logo">
                                            <Image
                                                id="logo_header"
                                                src="/assets/images/logo/logo.jpg"
                                                alt="logo"
                                                width={65}
                                                height={100}
                                                priority
                                            />
                                        </a>
                                    </div>
                                </div>
                                <nav id="main-nav" className="main-nav">
                                    <ul id="menu-primary-menu" className="menu">
                                        <li className="menu-item">
                                            <a href="/">Home</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/about">About us</a>
                                        </li>
                                        <li className="menu-item menu-item-has-children">
                                            <a>Explore</a>
                                            <ul className="sub-menu">
                                                <li className="menu-item">
                                                    <a href="/explore">Explore</a>
                                                </li>
                                                <li className="menu-item">
                                                    <a href="/detail">NFT Detail</a>
                                                </li>
                                                <li className="menu-item">
                                                    <a href="/rank">Ranking</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-has-children">
                                            <a>Pages</a>
                                            <ul className="sub-menu">
                                                <li className="menu-item has-item">
                                                    <a href="market.html">Market</a>
                                                    <ul className="nav-sub-menu">
                                                        <li className="nav-menu-item">
                                                            <a href="market-create.html">Create</a>
                                                        </li>
                                                        <li className="nav-menu-item">
                                                            <a href="/market">Market</a>
                                                        </li>
                                                        <li className="nav-menu-item">
                                                            <a href="market-active-bid.html">Active Bid</a>
                                                        </li>
                                                        <li className="nav-menu-item">
                                                            <a href="market-explore.html">Explore</a>
                                                        </li>
                                                        <li className="nav-menu-item">
                                                            <a href="market-collection.html">
                                                                My collection
                                                            </a>
                                                        </li>
                                                        <li className="nav-menu-item">
                                                            <a href="market-wallet.html">Wallet</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item">
                                                    <a href="terms-condition.html">
                                                        Terms &amp; Condition
                                                    </a>
                                                </li>
                                                <li className="menu-item">
                                                    <a href="faq.html">FAQs</a>
                                                </li>
                                                <li className="menu-item">
                                                    <a href="404.html">404</a>
                                                </li>
                                                <li className="menu-item">
                                                    <a href="login.html">Login</a>
                                                </li>
                                                <li className="menu-item">
                                                    <a href="sign-up.html">Sign up</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/blog">Blog</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/contact">Contact</a>
                                        </li>
                                    </ul>
                                </nav>
                                {/* /#main-nav */}
                                <div className="flat-wallet flex">
                                    <div className="" id="wallet-header">
                                        <a
                                            href="market-wallet.html"
                                            id="connectbtn"
                                            className="tf-button style-1"
                                        >
                                            <span>Wallet connect</span>
                                            <i className="icon-wa" />
                                        </a>
                                    </div>
                                    <div className="header-search relative">
                                        <a href="#" className="show-search">
                                            <i className="icon-search" />
                                        </a>
                                        <div className="top-search">
                                            <form
                                                action="#"
                                                method="get"
                                                role="search"
                                                className="search-form relative"
                                            >
                                                <input
                                                    type="search"
                                                    id="search"
                                                    className="search-field style-1"
                                                    placeholder="Search..."
                                                    defaultValue=""
                                                    name="s"
                                                    title="Search for"
                                                    required
                                                />
                                                <button
                                                    className="search search-submit"
                                                    type="submit"
                                                    title="Search"
                                                >
                                                    <i className="icon-search" />
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="canvas">
                                        <span />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="canvas-nav-wrap">
                <div className="overlay-canvas-nav" />
                <div className="inner-canvas-nav">
                    <div className="side-bar">
                        <a href="index.html" rel="home" className="main-logo">
                            <Image
                                id="logo_header"
                                src="/assets/images/logo/logo.png"
                                alt="logo"
                                width={200}
                                height={100}
                                priority
                            />
                        </a>
                        <div className="canvas-nav-close">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                fill="white"
                                x="0px"
                                y="0px"
                                width="20px"
                                height="20px"
                                viewBox="0 0 122.878 122.88"
                                enableBackground="new 0 0 122.878 122.88"
                                xmlSpace="preserve"
                            >
                                <g>
                                    <path d="M1.426,8.313c-1.901-1.901-1.901-4.984,0-6.886c1.901-1.902,4.984-1.902,6.886,0l53.127,53.127l53.127-53.127 c1.901-1.902,4.984-1.902,6.887,0c1.901,1.901,1.901,4.985,0,6.886L68.324,61.439l53.128,53.128c1.901,1.901,1.901,4.984,0,6.886 c-1.902,1.902-4.985,1.902-6.887,0L61.438,68.326L8.312,121.453c-1.901,1.902-4.984,1.902-6.886,0 c-1.901-1.901-1.901-4.984,0-6.886l53.127-53.128L1.426,8.313L1.426,8.313z" />
                                </g>
                            </svg>
                        </div>
                        <div className="widget-search mt-30">
                            <form
                                action="#"
                                method="get"
                                role="search"
                                className="search-form relative"
                            >
                                <input
                                    type="search"
                                    id="search"
                                    className="search-field style-1"
                                    placeholder="Search..."
                                    defaultValue=""
                                    name="s"
                                    title="Search for"
                                    required
                                />
                                <button
                                    className="search search-submit"
                                    type="submit"
                                    title="Search"
                                >
                                    <i className="icon-search" />
                                </button>
                            </form>
                        </div>
                        <div className="widget widget-categories">
                            <h5 className="title-widget">Categories</h5>
                            <ul>
                                <li>
                                    <div className="cate-item">
                                        <a href="#">NFTs</a>
                                    </div>
                                    <div className="number">(1.483)</div>
                                </li>
                                <li>
                                    <div className="cate-item">
                                        <a href="#">Digital Art</a>
                                    </div>
                                    <div className="number">(97)</div>
                                </li>
                                <li>
                                    <div className="cate-item">
                                        <a href="#">Crypto</a>
                                    </div>
                                    <div className="number">(45)</div>
                                </li>
                                <li>
                                    <div className="cate-item">
                                        <a href="#">Technology</a>
                                    </div>
                                    <div className="number">(728)</div>
                                </li>
                            </ul>
                        </div>
                        <div className="widget widget-menu style-4">
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
                        <div className="widget">
                            <h5 className="title-widget">Join the community</h5>
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
        </header>
    );
};

export default Header;
