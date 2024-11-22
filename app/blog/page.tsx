import { FC } from 'react';
import Script from 'next/script';

const Blog: FC = () => {
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
                            <div className="flat-title-page blog-detail">
                                <div className="themesflat-container">
                                    <div className="row">
                                        <div className="col-12">
                                            <ul className="breadcrumbs flex">
                                                <li className="icon-keyboard_arrow_right">
                                                    <a href="index.html">Home</a>
                                                </li>
                                                <li>
                                                    <a href="#">Explore</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tf-section tf-blog-detail pb-48">
                                <div className="themesflat-container">
                                    <div className="row">
                                        <div className="wrapper col-md-8">
                                            <div className="inner-content mr-20">
                                                <h2 className="title-post">
                                                    Star Atlas Showroom 2.1: Massive ships and pretty skins
                                                </h2>
                                                <div className="meta-post flex justify-between mt-10 items-center">
                                                    <div className="author flex items-center justify-between">
                                                        <div className="avatar">
                                                            <img
                                                                src="assets/images/avatar/avatar-box-01.jpg"
                                                                alt="Image"
                                                            />
                                                        </div>
                                                        <div className="info">
                                                            <span>Posted by:</span>
                                                            <h6>
                                                                <a href="author-2.html">Marvin McKinney</a>{" "}
                                                            </h6>
                                                        </div>
                                                    </div>
                                                    <div className="meta-info flex">
                                                        <div className="item art active">NFTs</div>
                                                        <div className="item date">Mon, 08 May</div>
                                                        <div className="item comment">0 Comment</div>
                                                    </div>
                                                </div>
                                                <div className="divider" />
                                                <div className="title">
                                                    If you are an investor, trying to pick which blockchain game
                                                    to pour your money into, how do you tease apart the gold and
                                                    the mud?
                                                </div>
                                                <div className="image">
                                                    <img
                                                        src="assets/images/blog/blog-detail-01.png"
                                                        alt="Image"
                                                    />
                                                </div>
                                                <div className="inner-post">
                                                    <h3 className="heading">
                                                        The answer has changed for Yan Liberman over the past few
                                                        years.
                                                    </h3>
                                                    <p>
                                                        Yan is a founder at Delphi Digital, an organisation which
                                                        started out researching crypto, moved into consulting
                                                        (actually building stuff) and then moved into full-on
                                                        investment. Delphi have financed scores of projects,
                                                        including Polemos. Eighty-five people say they work for
                                                        Delphi on LinkedIn, double what is listed on the website.
                                                        That speaks to explosive growth.
                                                    </p>
                                                    <blockquote>
                                                        <span className="icon-quote" />
                                                        <p>
                                                            Hal: So Yan, you’ve been through some ups and downs
                                                            because you were in crypto in 2017. So you experienced the
                                                            fluctuations of the market a few times since then. I think
                                                            two big downturns, and we’re still in the second of those.
                                                            Is that exhausting?
                                                        </p>
                                                    </blockquote>
                                                    <div className="image-box">
                                                        <img
                                                            src="assets/images/blog/blog-detail-02.png"
                                                            alt="Image"
                                                        />
                                                    </div>
                                                    <p>
                                                        Yan: I like to invest and something that helps me excel is
                                                        just having a very large tolerance for risk. And so the
                                                        swings up are euphoric and the swings down can be tough. I
                                                        think what ends up happening is you just, you’re dead inside
                                                        from the volatility.
                                                    </p>
                                                </div>
                                                <div className="inner-post style-1">
                                                    <h3 className="heading ">Countdown to Zero</h3>
                                                    <p>
                                                        At a preview of the device days before its launch, Meta gave
                                                        reporters a glimpse of the type of user it had in mind by
                                                        showcasing apps like Tribe XR, a virtual training
                                                        environment for DJs learning how to use complex equipment.
                                                    </p>
                                                    <div className="image-box">
                                                        <div className="w-full">
                                                            <img
                                                                src="assets/images/blog/blog-detail-03.png"
                                                                alt="Image"
                                                            />
                                                        </div>
                                                        <div className="w-full">
                                                            <img
                                                                src="assets/images/blog/blog-detail-04.png"
                                                                alt="Image"
                                                            />
                                                        </div>
                                                    </div>
                                                    <p>
                                                        The latest demo version of Illuvium’s city builder Zero was
                                                        due out in February. It’s here now, released yesterday, so I
                                                        can stop whining.
                                                    </p>
                                                    <p>
                                                        Our experts Caveman and Moggy have been playing and passing
                                                        on their wisdom. Right now, there’s only a small group of
                                                        people who could benefit from knowing exactly how to
                                                        maximise resource production by the placement of footpaths,
                                                        but we’ve got them covered
                                                    </p>
                                                </div>
                                                <div className="divider style-1" />
                                                <div className="bottom flex justify-between items-center">
                                                    <div className="widget-tag flex items-center">
                                                        <h3 className="title-widget">Tags:</h3>
                                                        <ul className="flex flex-wrap gap4 items-center">
                                                            <li>
                                                                <a href="#">nfts</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">crypto</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">cyfonii</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">collection</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="widget-social">
                                                        <ul className="flex">
                                                            <li>
                                                                <a href="#" className="icon-facebook" />
                                                            </li>
                                                            <li>
                                                                <a href="#" className="icon-twitter" />
                                                            </li>
                                                            <li>
                                                                <a href="#" className="icon-linkedin2" />
                                                            </li>
                                                            <li>
                                                                <a href="#" className="icon-instagram" />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="related-post">
                                                    <div className="prev">
                                                        <a href="#">
                                                            <i className="icon-keyboard_arrow_left" />
                                                            Previous post
                                                        </a>
                                                        <div className="action items-center left flex mt-16">
                                                            <img src="assets/images/blog/related-01.jpg" alt="" />
                                                            <div className="content">
                                                                <h5>Unreal Engine for Fortnite is a big deal</h5>
                                                                <div className="meta-info flex">
                                                                    <div className="item date">Mon, 08 May</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="next text-end">
                                                        <a href="#">
                                                            Next post
                                                            <i className="icon-keyboard_arrow_right" />
                                                        </a>
                                                        <div className="action items-center right flex mt-16">
                                                            <div className="content">
                                                                <h5>Regulators step in, mayhem ensues</h5>
                                                                <div className="meta-info flex justify-end">
                                                                    <div className="item date">Mon, 08 May</div>
                                                                </div>
                                                            </div>
                                                            <img src="assets/images/blog/related-02.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="widget-comment">
                                                    <h3>Comment (5)</h3>
                                                    <ul>
                                                        <li className="comment-box">
                                                            <img
                                                                src="assets/images/avatar/avatar-user-01.jpg"
                                                                alt=""
                                                            />
                                                            <div className="comment-right">
                                                                <div className="top flex justify-between items-center">
                                                                    <div className="info">
                                                                        <h5>Annette Black</h5>
                                                                    </div>
                                                                    <span>Mon, 08 May </span>
                                                                </div>
                                                                <p className="">
                                                                    Nullam ornare a magna quis aliquet. Duis suscipit eros
                                                                    in suscipit venenatis. Pellentesque quis efficitur
                                                                    leo. Maecenas accumsan est in nibh interdum, quis
                                                                    dignissim neque scelerisque.
                                                                </p>
                                                                <a href="#">Reply</a>
                                                            </div>
                                                        </li>
                                                        <li className="comment-box rep">
                                                            <img
                                                                src="assets/images/avatar/avatar-user-02.jpg"
                                                                alt=""
                                                            />
                                                            <div className="comment-right">
                                                                <div className="top flex justify-between items-center">
                                                                    <div className="info">
                                                                        <h5>Annette Black</h5>
                                                                    </div>
                                                                    <span>Mon, 08 May </span>
                                                                </div>
                                                                <p className="">
                                                                    Nullam ornare a magna quis aliquet. Duis suscipit eros
                                                                    in suscipit venenatis. Pellentesque quis efficitur
                                                                    leo. Maecenas accumsan est in nibh interdum, quis
                                                                    dignissim neque scelerisque.
                                                                </p>
                                                                <a href="#">Reply</a>
                                                            </div>
                                                        </li>
                                                        <li className="comment-box">
                                                            <img
                                                                src="assets/images/avatar/avatar-user-03.jpg"
                                                                alt=""
                                                            />
                                                            <div className="comment-right">
                                                                <div className="top flex justify-between items-center">
                                                                    <div className="info">
                                                                        <h5>Annette Black</h5>
                                                                    </div>
                                                                    <span>Mon, 08 May </span>
                                                                </div>
                                                                <p className="">
                                                                    Nullam ornare a magna quis aliquet. Duis suscipit eros
                                                                    in suscipit venenatis. Pellentesque quis efficitur
                                                                    leo. Maecenas accumsan est in nibh interdum, quis
                                                                    dignissim neque scelerisque.
                                                                </p>
                                                                <a href="#">Reply</a>
                                                            </div>
                                                        </li>
                                                        <li className="comment-box">
                                                            <img
                                                                src="assets/images/avatar/avatar-user-04.jpg"
                                                                alt=""
                                                            />
                                                            <div className="comment-right">
                                                                <div className="top flex justify-between items-center">
                                                                    <div className="info">
                                                                        <h5>Annette Black</h5>
                                                                    </div>
                                                                    <span>Mon, 08 May </span>
                                                                </div>
                                                                <p className="">
                                                                    Nullam ornare a magna quis aliquet. Duis suscipit eros
                                                                    in suscipit venenatis. Pellentesque quis efficitur
                                                                    leo. Maecenas accumsan est in nibh interdum, quis
                                                                    dignissim neque scelerisque.
                                                                </p>
                                                                <a href="#">Reply</a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="widget-reply">
                                                    <h3 className="heading">Leave A Reply</h3>
                                                    <p>
                                                        Your email address will not be published. Required fields
                                                        are marked *
                                                    </p>
                                                    <form id="commentform" className="comment-form">
                                                        <div className="flex justify-between">
                                                            <fieldset className="name">
                                                                <input
                                                                    type="text"
                                                                    id="name"
                                                                    placeholder="Your name*"
                                                                    className="style-1"
                                                                    name="name"
                                                                    tabIndex={2}
                                                                    defaultValue=""
                                                                    aria-required="true"
                                                                />
                                                            </fieldset>
                                                            <fieldset className="email">
                                                                <input
                                                                    type="email"
                                                                    id="email"
                                                                    placeholder="Email address*"
                                                                    className="style-1"
                                                                    name="email"
                                                                    tabIndex={2}
                                                                    defaultValue=""
                                                                    aria-required="true"
                                                                />
                                                            </fieldset>
                                                        </div>
                                                        <fieldset className="message">
                                                            <textarea
                                                                id="message"
                                                                name="message"
                                                                rows={4}
                                                                placeholder="Your comment*"
                                                                className="style-1 m-0"
                                                                tabIndex={4}
                                                                aria-required="true"
                                                                defaultValue={""}
                                                            />
                                                        </fieldset>
                                                        <div className="btn-submit text-center">
                                                            <button className="" type="submit">
                                                                Submit comment
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="side-bar col-md-4">
                                            <div className="widget-search">
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
                                            <div className="widget widget-related-posts">
                                                <h5 className="title-widget">Related posts</h5>
                                                <div className="related-posts-item main">
                                                    <div className="card-media">
                                                        <img src="assets/images/blog/sidebar-01.jpg" alt="" />
                                                    </div>
                                                    <div className="meta-info flex">
                                                        <div className="item art active">Digital Art</div>
                                                        <div className="item date">Mon, 08 May </div>
                                                    </div>
                                                    <h5>
                                                        <a href="nft-detail-2.html">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing
                                                            pulvinar
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div className="related-posts-item">
                                                    <div className="card-media">
                                                        <img src="assets/images/blog/sidebar-02.jpg" alt="" />
                                                    </div>
                                                    <div className="card-content">
                                                        <h5>
                                                            <a href="nft-detail-2.html">
                                                                Explore Arc8: Web3 Concepts Meet Gaming
                                                            </a>
                                                        </h5>
                                                        <div className="item date">Mon, 08 May </div>
                                                    </div>
                                                </div>
                                                <div className="related-posts-item">
                                                    <div className="card-media">
                                                        <img src="assets/images/blog/sidebar-03.jpg" alt="" />
                                                    </div>
                                                    <div className="card-content">
                                                        <h5>
                                                            <a href="nft-detail-2.html">
                                                                Explore Arc8: Web3 Concepts Meet Gaming
                                                            </a>
                                                        </h5>
                                                        <div className="item date">Mon, 08 May </div>
                                                    </div>
                                                </div>
                                                <div className="related-posts-item">
                                                    <div className="card-media">
                                                        <img src="assets/images/blog/sidebar-04.jpg" alt="" />
                                                    </div>
                                                    <div className="card-content">
                                                        <h5>
                                                            <a href="nft-detail-2.html">
                                                                Explore Arc8: Web3 Concepts Meet Gaming
                                                            </a>
                                                        </h5>
                                                        <div className="item date">Mon, 08 May </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget widget-tag ">
                                                <h5 className="title-widget">Popular tags</h5>
                                                <ul className="flex flex-wrap">
                                                    <li>
                                                        <a href="#" className="box-widget-tag">
                                                            ICO
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="box-widget-tag">
                                                            Digital Art
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="box-widget-tag">
                                                            Gaming
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="box-widget-tag">
                                                            NFTs
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="box-widget-tag">
                                                            Crypto
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="box-widget-tag">
                                                            Concepts
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="box-widget-tag">
                                                            Technology
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="box-widget-tag">
                                                            Land
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="box-widget-tag">
                                                            Web3
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
                            />
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

export default Blog;