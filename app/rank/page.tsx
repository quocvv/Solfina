import { FC } from 'react';
import Script from 'next/script';

const Rank: FC = () => {
    return (
        <div className="body header-fixed">
            <>
                <>
                    {/* preload */}
                    <div className="preload preload-container">
                        <div className="middle">
                            <div className="bar bar1" />
                            <div className="bar bar2" />
                            <div className="bar bar3" />
                            <div className="bar bar4" />
                            <div className="bar bar5" />
                            <div className="bar bar6" />
                            <div className="bar bar7" />
                            <div className="bar bar8" />
                        </div>
                    </div>
                    {/* /preload */}
                    <div id="wrapper">
                        <div id="page" className="pt-40">
                            {/* header */}
                            <div className="flat-title-page">
                                <div className="themesflat-container">
                                    <div className="row">
                                        <div className="col-12">
                                            <h1 className="heading text-center">Rankings</h1>
                                            <ul className="breadcrumbs flex justify-center">
                                                <li className="icon-keyboard_arrow_right">
                                                    <a href="index.html">Home</a>
                                                </li>
                                                <li>
                                                    <a href="#">Creators</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tf-section-2 ranking">
                                <div className="themesflat-container">
                                    <div className="row">
                                        <div className="col-12 mb-30">
                                            <div className="widget-tabs relative">
                                                <div className="tf-soft">
                                                    <div className="soft-right">
                                                        <div className="dropdown">
                                                            <button
                                                                className="btn btn-secondary dropdown-toggle"
                                                                type="button"
                                                                id="dropdownMenuButton4"
                                                                data-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                            >
                                                                <svg
                                                                    width={20}
                                                                    height={20}
                                                                    viewBox="0 0 20 20"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3.125 5.625H16.875M3.125 10H16.875M3.125 14.375H10"
                                                                        stroke="white"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                                <span>Last 30 day</span>
                                                            </button>
                                                            <div
                                                                className="dropdown-menu"
                                                                aria-labelledby="dropdownMenuButton"
                                                            >
                                                                <h6>Sort by</h6>
                                                                <a href="#" className="dropdown-item">
                                                                    <div className="sort-filter active">
                                                                        <span>Last 30 day</span>
                                                                        <span className="icon-tick">
                                                                            <span className="path2" />
                                                                        </span>
                                                                    </div>
                                                                </a>
                                                                <a href="#" className="dropdown-item">
                                                                    <div className="sort-filter" >
                                                                        <span>Last 60 day</span>
                                                                        <span className="icon-tick">
                                                                            <span className="path2" />
                                                                        </span>
                                                                    </div>
                                                                </a>
                                                                <a href="#" className="dropdown-item">
                                                                    <div className="sort-filter" >
                                                                        <span>Last 90 day</span>
                                                                        <span className="icon-tick">
                                                                            <span className="path2" />
                                                                        </span>
                                                                    </div>
                                                                </a>
                                                                <a href="#" className="dropdown-item">
                                                                    <div className="sort-filter" >
                                                                        <span>Last 365 day</span>
                                                                        <span className="icon-tick">
                                                                            <span className="path2" />
                                                                        </span>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <ul className="widget-menu-tab">
                                                    <li className="item-title active">
                                                        <span className="inner">All Category</span>
                                                    </li>
                                                    <li className="item-title">
                                                        <span className="inner">All Category</span>
                                                    </li>
                                                </ul>
                                                <div className="widget-content-tab pt-10">
                                                    <div className="widget-content-inner active">
                                                        <div className="widget-table-ranking">
                                                            <div
                                                                data-wow-delay="0s"
                                                                className="wow fadeInUp table-ranking-heading"
                                                            >
                                                                <div className="column1">
                                                                    <h3>Collection</h3>
                                                                </div>
                                                                <div className="column2">
                                                                    <h3>Volume</h3>
                                                                </div>
                                                                <div className="column">
                                                                    <h3>24h %</h3>
                                                                </div>
                                                                <div className="column">
                                                                    <h3>7d %</h3>
                                                                </div>
                                                                <div className="column">
                                                                    <h3>Floor price</h3>
                                                                </div>
                                                                <div className="column">
                                                                    <h3>Owners</h3>
                                                                </div>
                                                                <div className="column">
                                                                    <h3>Items</h3>
                                                                </div>
                                                            </div>
                                                            <div className="table-ranking-content">
                                                                <div
                                                                    data-wow-delay="0s"
                                                                    className="wow fadeInUp fl-row-ranking"
                                                                >
                                                                    <div className="td1">
                                                                        <div className="item-rank">1. </div>
                                                                        <div className="item-avatar">
                                                                            <img
                                                                                src="assets/images/box-item/rank-01.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                        <div className="item-name">Biao Family</div>
                                                                    </div>
                                                                    <div className="td2">
                                                                        <h6 className="price gem">
                                                                            <i className="icon-gem" />
                                                                            31,673.31
                                                                        </h6>
                                                                    </div>
                                                                    <div className="td3 danger">
                                                                        <h6>-39.75%</h6>
                                                                    </div>
                                                                    <div className="td4 warning">
                                                                        <h6>+340.53%</h6>
                                                                    </div>
                                                                    <div className="td5">
                                                                        <h6 className="price gem">
                                                                            <i className="icon-gem" />
                                                                            9,34
                                                                        </h6>
                                                                    </div>
                                                                    <div className="td6">
                                                                        <h6>69.9k</h6>
                                                                    </div>
                                                                    <div className="td7">
                                                                        <h6>10.1k</h6>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    data-wow-delay="0s"
                                                                    className="wow fadeInUp fl-row-ranking"
                                                                >
                                                                    <div className="td1">
                                                                        <div className="item-rank">2. </div>
                                                                        <div className="item-avatar">
                                                                            <img
                                                                                src="assets/images/box-item/rank-02.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                        <div className="item-name">Xtreme Pixels</div>
                                                                    </div>
                                                                    <div className="td2">
                                                                        <h6 className="price gem">
                                                                            <i className="icon-gem" />
                                                                            7,080.95
                                                                        </h6>
                                                                    </div>
                                                                    <div className="td3 danger">
                                                                        <h6>-39.75%</h6>
                                                                    </div>
                                                                    <div className="td4 warning">
                                                                        <h6>+340.53%</h6>
                                                                    </div>
                                                                    <div className="td5">
                                                                        <h6 className="price gem">
                                                                            <i className="icon-gem" />
                                                                            9,34
                                                                        </h6>
                                                                    </div>
                                                                    <div className="td6">
                                                                        <h6>69.9k</h6>
                                                                    </div>
                                                                    <div className="td7">
                                                                        <h6>10.1k</h6>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    data-wow-delay="0s"
                                                                    className="wow fadeInUp fl-row-ranking"
                                                                >
                                                                    <div className="td1">
                                                                        <div className="item-rank">3. </div>
                                                                        <div className="item-avatar">
                                                                            <img
                                                                                src="assets/images/box-item/rank-03.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                        <div className="item-name">The potatoz</div>
                                                                    </div>
                                                                    <div className="td2">
                                                                        <h6 className="price gem">
                                                                            <i className="icon-gem" />
                                                                            7,080.95
                                                                        </h6>
                                                                    </div>
                                                                    <div className="td3 danger">
                                                                        <h6>-39.75%</h6>
                                                                    </div>
                                                                    <div className="td4 warning">
                                                                        <h6>+340.53%</h6>
                                                                    </div>
                                                                    <div className="td5">
                                                                        <h6 className="price gem">
                                                                            <i className="icon-gem" />
                                                                            9,34
                                                                        </h6>
                                                                    </div>
                                                                    <div className="td6">
                                                                        <h6>69.9k</h6>
                                                                    </div>
                                                                    <div className="td7">
                                                                        <h6>10.1k</h6>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    data-wow-delay="0s"
                                                                    className="wow fadeInUp fl-row-ranking"
                                                                >
                                                                    <div className="td1">
                                                                        <div className="item-rank">4. </div>
                                                                        <div className="item-avatar">
                                                                            <img
                                                                                src="assets/images/box-item/rank-04.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                        <div className="item-name">Sybil samurai</div>
                                                                    </div>
                                                                    <div className="td2">
                                                                        <h6 className="price gem">
                                                                            <i className="icon-gem" />
                                                                            7,080.95
                                                                        </h6>
                                                                    </div>
                                                                    <div className="td3 danger">
                                                                        <h6>-39.75%</h6>
                                                                    </div>
                                                                    <div className="td4 warning">
                                                                        <h6>+340.53%</h6>
                                                                    </div>
                                                                    <div className="td5">
                                                                        <h6 className="price gem">
                                                                            <i className="icon-gem" />
                                                                            9,34
                                                                        </h6>
                                                                    </div>
                                                                    <div className="td6">
                                                                        <h6>69.9k</h6>
                                                                    </div>
                                                                    <div className="td7">
                                                                        <h6>10.1k</h6>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    data-wow-delay="0s"
                                                                    className="wow fadeInUp fl-row-ranking"
                                                                >
                                                                    <div className="td1">
                                                                        <div className="item-rank">5. </div>
                                                                        <div className="item-avatar">
                                                                            <img
                                                                                src="assets/images/box-item/rank-05.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                        <div className="item-name">Máchine</div>
                                                                    </div>
                                                                    <div className="td2">
                                                                        <h6 className="price gem">
                                                                            <i className="icon-gem" />
                                                                            7,080.95
                                                                        </h6>
                                                                    </div>
                                                                    <div className="td3 danger">
                                                                        <h6>-39.75%</h6>
                                                                    </div>
                                                                    <div className="td4 warning">
                                                                        <h6>+340.53%</h6>
                                                                    </div>
                                                                    <div className="td5">
                                                                        <h6 className="price gem">
                                                                            <i className="icon-gem" />
                                                                            9,34
                                                                        </h6>
                                                                    </div>
                                                                    <div className="td6">
                                                                        <h6>69.9k</h6>
                                                                    </div>
                                                                    <div className="td7">
                                                                        <h6>10.1k</h6>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    data-wow-delay="0s"
                                                                    className="wow fadeInUp fl-row-ranking"
                                                                >
                                                                    <div className="td1">
                                                                        <div className="item-rank">6. </div>
                                                                        <div className="item-avatar">
                                                                            <img
                                                                                src="assets/images/box-item/rank-06.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                        <div className="item-name">Neo Tokyo</div>
                                                                    </div>
                                                                    <div className="td2">
                                                                        <h6 className="price gem">
                                                                            <i className="icon-gem" />
                                                                            7,080.95
                                                                        </h6>
                                                                    </div>
                                                                    <div className="td3 danger">
                                                                        <h6>-39.75%</h6>
                                                                    </div>
                                                                    <div className="td4 warning">
                                                                        <h6>+340.53%</h6>
                                                                    </div>
                                                                    <div className="td5">
                                                                        <h6 className="price gem">
                                                                            <i className="icon-gem" />
                                                                            9,34
                                                                        </h6>
                                                                    </div>
                                                                    <div className="td6">
                                                                        <h6>69.9k</h6>
                                                                    </div>
                                                                    <div className="td7">
                                                                        <h6>10.1k</h6>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    data-wow-delay="0s"
                                                                    className="wow fadeInUp fl-row-ranking"
                                                                >
                                                                    <div className="td1">
                                                                        <div className="item-rank">7. </div>
                                                                        <div className="item-avatar">
                                                                            <img
                                                                                src="assets/images/box-item/rank-07.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                        <div className="item-name">Cityzeen</div>
                                                                    </div>
                                                                    <div className="td2">
                                                                        <h6 className="price gem">
                                                                            <i className="icon-gem" />
                                                                            7,080.95
                                                                        </h6>
                                                                    </div>
                                                                    <div className="td3 danger">
                                                                        <h6>-39.75%</h6>
                                                                    </div>
                                                                    <div className="td4 warning">
                                                                        <h6>+340.53%</h6>
                                                                    </div>
                                                                    <div className="td5">
                                                                        <h6 className="price gem">
                                                                            <i className="icon-gem" />
                                                                            9,34
                                                                        </h6>
                                                                    </div>
                                                                    <div className="td6">
                                                                        <h6>69.9k</h6>
                                                                    </div>
                                                                    <div className="td7">
                                                                        <h6>10.1k</h6>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    data-wow-delay="0s"
                                                                    className="wow fadeInUp fl-row-ranking"
                                                                >
                                                                    <div className="td1">
                                                                        <div className="item-rank">8. </div>
                                                                        <div className="item-avatar">
                                                                            <img
                                                                                src="assets/images/box-item/rank-08.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                        <div className="item-name">Mutan Hounds</div>
                                                                    </div>
                                                                    <div className="td2">
                                                                        <h6 className="price gem">
                                                                            <i className="icon-gem" />
                                                                            7,080.95
                                                                        </h6>
                                                                    </div>
                                                                    <div className="td3 danger">
                                                                        <h6>-39.75%</h6>
                                                                    </div>
                                                                    <div className="td4 warning">
                                                                        <h6>+340.53%</h6>
                                                                    </div>
                                                                    <div className="td5">
                                                                        <h6 className="price gem">
                                                                            <i className="icon-gem" />
                                                                            9,34
                                                                        </h6>
                                                                    </div>
                                                                    <div className="td6">
                                                                        <h6>69.9k</h6>
                                                                    </div>
                                                                    <div className="td7">
                                                                        <h6>10.1k</h6>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    data-wow-delay="0s"
                                                                    className="wow fadeInUp fl-row-ranking"
                                                                >
                                                                    <div className="td1">
                                                                        <div className="item-rank">9. </div>
                                                                        <div className="item-avatar">
                                                                            <img
                                                                                src="assets/images/box-item/rank-01.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                        <div className="item-name">The art pixie</div>
                                                                    </div>
                                                                    <div className="td2">
                                                                        <h6 className="price gem">
                                                                            <i className="icon-gem" />
                                                                            7,080.95
                                                                        </h6>
                                                                    </div>
                                                                    <div className="td3 danger">
                                                                        <h6>-39.75%</h6>
                                                                    </div>
                                                                    <div className="td4 warning">
                                                                        <h6>+340.53%</h6>
                                                                    </div>
                                                                    <div className="td5">
                                                                        <h6 className="price gem">
                                                                            <i className="icon-gem" />
                                                                            9,34
                                                                        </h6>
                                                                    </div>
                                                                    <div className="td6">
                                                                        <h6>69.9k</h6>
                                                                    </div>
                                                                    <div className="td7">
                                                                        <h6>10.1k</h6>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="widget-content-inner">
                                                        <div className="widget-table-ranking">
                                                            <div className="table-ranking-heading">
                                                                <div className="column1">
                                                                    <h3>Collection</h3>
                                                                </div>
                                                                <div className="column2">
                                                                    <h3>Volume</h3>
                                                                </div>
                                                                <div className="column">
                                                                    <h3>24h %</h3>
                                                                </div>
                                                                <div className="column">
                                                                    <h3>7d %</h3>
                                                                </div>
                                                                <div className="column">
                                                                    <h3>Floor price</h3>
                                                                </div>
                                                                <div className="column">
                                                                    <h3>Owners</h3>
                                                                </div>
                                                                <div className="column">
                                                                    <h3>Items</h3>
                                                                </div>
                                                            </div>
                                                            <div className="table-ranking-content">
                                                                <div className="fl-row-ranking">
                                                                    <div className="td1">
                                                                        <div className="item-rank">1. </div>
                                                                        <div className="item-avatar">
                                                                            <img
                                                                                src="assets/images/box-item/rank-01.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                        <div className="item-name">Biao Family</div>
                                                                    </div>
                                                                    <div className="td2">
                                                                        <h6 className="price gem">
                                                                            <i className="icon-gem" />
                                                                            31,673.31
                                                                        </h6>
                                                                    </div>
                                                                    <div className="td3 danger">
                                                                        <h6>-39.75%</h6>
                                                                    </div>
                                                                    <div className="td4 warning">
                                                                        <h6>+340.53%</h6>
                                                                    </div>
                                                                    <div className="td5">
                                                                        <h6 className="price gem">
                                                                            <i className="icon-gem" />
                                                                            9,34
                                                                        </h6>
                                                                    </div>
                                                                    <div className="td6">
                                                                        <h6>69.9k</h6>
                                                                    </div>
                                                                    <div className="td7">
                                                                        <h6>10.1k</h6>
                                                                    </div>
                                                                </div>
                                                                <div className="fl-row-ranking">
                                                                    <div className="td1">
                                                                        <div className="item-rank">2. </div>
                                                                        <div className="item-avatar">
                                                                            <img
                                                                                src="assets/images/box-item/rank-02.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                        <div className="item-name">Xtreme Pixels</div>
                                                                    </div>
                                                                    <div className="td2">
                                                                        <h6 className="price gem">
                                                                            <i className="icon-gem" />
                                                                            7,080.95
                                                                        </h6>
                                                                    </div>
                                                                    <div className="td3 danger">
                                                                        <h6>-39.75%</h6>
                                                                    </div>
                                                                    <div className="td4 warning">
                                                                        <h6>+340.53%</h6>
                                                                    </div>
                                                                    <div className="td5">
                                                                        <h6 className="price gem">
                                                                            <i className="icon-gem" />
                                                                            9,34
                                                                        </h6>
                                                                    </div>
                                                                    <div className="td6">
                                                                        <h6>69.9k</h6>
                                                                    </div>
                                                                    <div className="td7">
                                                                        <h6>10.1k</h6>
                                                                    </div>
                                                                </div>
                                                                <div className="fl-row-ranking">
                                                                    <div className="td1">
                                                                        <div className="item-rank">3. </div>
                                                                        <div className="item-avatar">
                                                                            <img
                                                                                src="assets/images/box-item/rank-03.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                        <div className="item-name">The potatoz</div>
                                                                    </div>
                                                                    <div className="td2">
                                                                        <h6 className="price gem">
                                                                            <i className="icon-gem" />
                                                                            7,080.95
                                                                        </h6>
                                                                    </div>
                                                                    <div className="td3 danger">
                                                                        <h6>-39.75%</h6>
                                                                    </div>
                                                                    <div className="td4 warning">
                                                                        <h6>+340.53%</h6>
                                                                    </div>
                                                                    <div className="td5">
                                                                        <h6 className="price gem">
                                                                            <i className="icon-gem" />
                                                                            9,34
                                                                        </h6>
                                                                    </div>
                                                                    <div className="td6">
                                                                        <h6>69.9k</h6>
                                                                    </div>
                                                                    <div className="td7">
                                                                        <h6>10.1k</h6>
                                                                    </div>
                                                                </div>
                                                                <div className="fl-row-ranking">
                                                                    <div className="td1">
                                                                        <div className="item-rank">4. </div>
                                                                        <div className="item-avatar">
                                                                            <img
                                                                                src="assets/images/box-item/rank-04.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                        <div className="item-name">Sybil samurai</div>
                                                                    </div>
                                                                    <div className="td2">
                                                                        <h6 className="price gem">
                                                                            <i className="icon-gem" />
                                                                            7,080.95
                                                                        </h6>
                                                                    </div>
                                                                    <div className="td3 danger">
                                                                        <h6>-39.75%</h6>
                                                                    </div>
                                                                    <div className="td4 warning">
                                                                        <h6>+340.53%</h6>
                                                                    </div>
                                                                    <div className="td5">
                                                                        <h6 className="price gem">
                                                                            <i className="icon-gem" />
                                                                            9,34
                                                                        </h6>
                                                                    </div>
                                                                    <div className="td6">
                                                                        <h6>69.9k</h6>
                                                                    </div>
                                                                    <div className="td7">
                                                                        <h6>10.1k</h6>
                                                                    </div>
                                                                </div>
                                                                <div className="fl-row-ranking">
                                                                    <div className="td1">
                                                                        <div className="item-rank">5. </div>
                                                                        <div className="item-avatar">
                                                                            <img
                                                                                src="assets/images/box-item/rank-05.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                        <div className="item-name">Máchine</div>
                                                                    </div>
                                                                    <div className="td2">
                                                                        <h6 className="price gem">
                                                                            <i className="icon-gem" />
                                                                            7,080.95
                                                                        </h6>
                                                                    </div>
                                                                    <div className="td3 danger">
                                                                        <h6>-39.75%</h6>
                                                                    </div>
                                                                    <div className="td4 warning">
                                                                        <h6>+340.53%</h6>
                                                                    </div>
                                                                    <div className="td5">
                                                                        <h6 className="price gem">
                                                                            <i className="icon-gem" />
                                                                            9,34
                                                                        </h6>
                                                                    </div>
                                                                    <div className="td6">
                                                                        <h6>69.9k</h6>
                                                                    </div>
                                                                    <div className="td7">
                                                                        <h6>10.1k</h6>
                                                                    </div>
                                                                </div>
                                                                <div className="fl-row-ranking">
                                                                    <div className="td1">
                                                                        <div className="item-rank">6. </div>
                                                                        <div className="item-avatar">
                                                                            <img
                                                                                src="assets/images/box-item/rank-06.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                        <div className="item-name">Neo Tokyo</div>
                                                                    </div>
                                                                    <div className="td2">
                                                                        <h6 className="price gem">
                                                                            <i className="icon-gem" />
                                                                            7,080.95
                                                                        </h6>
                                                                    </div>
                                                                    <div className="td3 danger">
                                                                        <h6>-39.75%</h6>
                                                                    </div>
                                                                    <div className="td4 warning">
                                                                        <h6>+340.53%</h6>
                                                                    </div>
                                                                    <div className="td5">
                                                                        <h6 className="price gem">
                                                                            <i className="icon-gem" />
                                                                            9,34
                                                                        </h6>
                                                                    </div>
                                                                    <div className="td6">
                                                                        <h6>69.9k</h6>
                                                                    </div>
                                                                    <div className="td7">
                                                                        <h6>10.1k</h6>
                                                                    </div>
                                                                </div>
                                                                <div className="fl-row-ranking">
                                                                    <div className="td1">
                                                                        <div className="item-rank">7. </div>
                                                                        <div className="item-avatar">
                                                                            <img
                                                                                src="assets/images/box-item/rank-07.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                        <div className="item-name">Cityzeen</div>
                                                                    </div>
                                                                    <div className="td2">
                                                                        <h6 className="price gem">
                                                                            <i className="icon-gem" />
                                                                            7,080.95
                                                                        </h6>
                                                                    </div>
                                                                    <div className="td3 danger">
                                                                        <h6>-39.75%</h6>
                                                                    </div>
                                                                    <div className="td4 warning">
                                                                        <h6>+340.53%</h6>
                                                                    </div>
                                                                    <div className="td5">
                                                                        <h6 className="price gem">
                                                                            <i className="icon-gem" />
                                                                            9,34
                                                                        </h6>
                                                                    </div>
                                                                    <div className="td6">
                                                                        <h6>69.9k</h6>
                                                                    </div>
                                                                    <div className="td7">
                                                                        <h6>10.1k</h6>
                                                                    </div>
                                                                </div>
                                                                <div className="fl-row-ranking">
                                                                    <div className="td1">
                                                                        <div className="item-rank">8. </div>
                                                                        <div className="item-avatar">
                                                                            <img
                                                                                src="assets/images/box-item/rank-08.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                        <div className="item-name">Mutan Hounds</div>
                                                                    </div>
                                                                    <div className="td2">
                                                                        <h6 className="price gem">
                                                                            <i className="icon-gem" />
                                                                            7,080.95
                                                                        </h6>
                                                                    </div>
                                                                    <div className="td3 danger">
                                                                        <h6>-39.75%</h6>
                                                                    </div>
                                                                    <div className="td4 warning">
                                                                        <h6>+340.53%</h6>
                                                                    </div>
                                                                    <div className="td5">
                                                                        <h6 className="price gem">
                                                                            <i className="icon-gem" />
                                                                            9,34
                                                                        </h6>
                                                                    </div>
                                                                    <div className="td6">
                                                                        <h6>69.9k</h6>
                                                                    </div>
                                                                    <div className="td7">
                                                                        <h6>10.1k</h6>
                                                                    </div>
                                                                </div>
                                                                <div className="fl-row-ranking">
                                                                    <div className="td1">
                                                                        <div className="item-rank">9. </div>
                                                                        <div className="item-avatar">
                                                                            <img
                                                                                src="assets/images/box-item/rank-01.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                        <div className="item-name">The art pixie</div>
                                                                    </div>
                                                                    <div className="td2">
                                                                        <h6 className="price gem">
                                                                            <i className="icon-gem" />
                                                                            7,080.95
                                                                        </h6>
                                                                    </div>
                                                                    <div className="td3 danger">
                                                                        <h6>-39.75%</h6>
                                                                    </div>
                                                                    <div className="td4 warning">
                                                                        <h6>+340.53%</h6>
                                                                    </div>
                                                                    <div className="td5">
                                                                        <h6 className="price gem">
                                                                            <i className="icon-gem" />
                                                                            9,34
                                                                        </h6>
                                                                    </div>
                                                                    <div className="td6">
                                                                        <h6>69.9k</h6>
                                                                    </div>
                                                                    <div className="td7">
                                                                        <h6>10.1k</h6>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="widget-pagination">
                                                <ul className="justify-center">
                                                    <li>
                                                        <a href="#">
                                                            <i className="icon-keyboard_arrow_left" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">1</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">2</a>
                                                    </li>
                                                    <li className="active">
                                                        <a href="#">3</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">4</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">...</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="icon-keyboard_arrow_right" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /#page */}
                    </div>
                    {/* /#wrapper */}
                    <div className="tf-mouse tf-mouse-outer" />
                    <div className="tf-mouse tf-mouse-inner" />
                    <div className="progress-wrap active-progress">
                        <svg
                            className="progress-circle svg-content"
                            width="100%"
                            height="100%"
                            viewBox="-1 -1 102 102"
                        >
                            <path
                                d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                                style={{
                                    transition: "stroke-dashoffset 10ms linear 0s",
                                    strokeDasharray: "307.919, 307.919",
                                    strokeDashoffset: "286.138"
                                }}
                            ></path>
                        </svg>
                    </div>
                </>

                <Script src="assets/js/jquery.min.js"></Script>
                <Script src="assets/js/popper.min.js"></Script>
                <Script src="assets/js/swiper-bundle.min.js"></Script>
                <Script src="assets/js/swiper.js"></Script>
                <Script src="assets/js/count-down.js"></Script>
                <Script src="assets/js/simpleParallax.min.js"></Script>
                <Script src="assets/js/gsap.js"></Script>
                <Script src="assets/js/SplitText.js"></Script>
                <Script src="assets/js/wow.min.js"></Script>
                <Script src="assets/js/ScrollTrigger.js"></Script>
                <Script src="assets/js/gsap-animation.js"></Script>
                <Script src="assets/js/tsparticles.min.js"></Script>
                <Script src="assets/js/tsparticles.js"></Script>
                <Script src="assets/js/main.js"></Script>
                <Script src="assets/js/bootstrap.bundle.min.js"></Script>
                <Script src="assets/js/bootstrap.min.js"></Script>
            </>
        </div>
    );
};

export default Rank;
