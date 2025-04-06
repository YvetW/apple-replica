import '../styles/pages/iphonePage.scss';
import {LeftOutlined, RightOutlined} from '@ant-design/icons';

export function IphonePage() {
    return (
        <div id="iphone-page">
            <nav id="chapternav">
                <div className="chapternav-wrapper">
                    <ul>
                        <li className="chapternav-item chapternav-item-iphone-16-pro">
                            <a href="#">
                                <figure className="chapternav-icon"></figure>
                                <span className="chapternav-label">iPhone 16 Pro</span>
                            </a>
                        </li>
                        <li className="chapternav-item chapternav-item-iphone-16">
                            <a href="#">
                                <figure className="chapternav-icon"></figure>
                                <span className="chapternav-label">iPhone 16</span>
                            </a>
                        </li>
                        <li className="chapternav-item chapternav-item-iphone-16e">
                            <a href="#">
                                <figure className="chapternav-icon"></figure>
                                <span className="chapternav-label">iPhone 16e</span>
                                <span className="chapternav-new">新款</span>
                            </a>
                        </li>
                        <li className="chapternav-item chapternav-item-iphone-15">
                            <a href="#">
                                <figure className="chapternav-icon"></figure>
                                <span className="chapternav-label">iPhone 15</span>
                            </a>
                        </li>
                        <li className="chapternav-item chapternav-item-compare">
                            <a href="#">
                                <figure className="chapternav-icon"></figure>
                                <span className="chapternav-label">机型比较</span>
                            </a>
                        </li>
                        <li className="chapternav-item chapternav-item-airpods">
                            <a href="#">
                                <figure className="chapternav-icon"></figure>
                                <span className="chapternav-label">AirPods</span>
                            </a>
                        </li>
                        <li className="chapternav-item chapternav-item-airtag">
                            <a href="#">
                                <figure className="chapternav-icon"></figure>
                                <span className="chapternav-label">AirTag</span>
                            </a>
                        </li>
                        <li className="chapternav-item chapternav-item-accessories">
                            <a href="#">
                                <figure className="chapternav-icon"></figure>
                                <span className="chapternav-label">配件</span>
                            </a>
                        </li>
                        <li className="chapternav-item chapternav-item-ios-18">
                            <a href="#">
                                <figure className="chapternav-icon"></figure>
                                <span className="chapternav-label">iOS 18</span>
                            </a>
                        </li>
                        <li className="chapternav-item chapternav-item-shop-iphone">
                            <a href="#">
                                <figure className="chapternav-icon"></figure>
                                <span className="chapternav-label">选购 iPhone</span>
                            </a>
                        </li>
                    </ul>
                    <div className="chapternav-paddles">
                        <button className="chapternav-paddle chapternav-paddle-left">
                            <LeftOutlined />
                        </button>
                        <button className="chapternav-paddle chapternav-paddle-right">
                            <RightOutlined />
                        </button>
                    </div>
                </div>
            </nav>
            <main id="main">
                <div className="ribbon-drop-wrapper">
                    <div>
                        <p className="typography-caption">
                            购买 iPhone&nbsp;16 系列，通过花呗或指定银行最长可享
                            <span className="nowrap">
                                24 个月
                            </span>
                            免息
                            <span className="nowrap">
                                分期
                                <sup className="footnote"><a href="#">◊</a></sup>
                                。
                            </span>
                            换购还可享折抵
                            <span className="nowrap">
                                优惠
                                <span className="footnote footnote-supglyph">
                                    <a href="#">*</a>
                                </span>
                                。
                            </span>
                            <a className="ribbon-link more" href="#">选购&nbsp;iPhone</a>
                        </p>
                    </div>
                </div>
                <section className="section section-welcome no-pad-bottom">
                    <div className="section-content-responsive">
                        <header className="welcome-header-title">
                            <h1>iPhone</h1>
                            <div>
                                <p>悉心设计，动心更称心。</p>
                            </div>
                        </header>
                    </div>
                    <div className="welcome-video-wall-container"></div>
                </section>
                <section className="section section-consider">
                    <div className="section-content-responsive">
                        <header className="section-header">
                            <h2 className="section-header-headline">来了解一下 iPhone</h2>
                        </header>
                    </div>
                    <div className="consider-container">
                        <div id="scroll-gallery-feature-cards">
                            <div className="scroll-container">
                                <div className="item-container">
                                    <ul className="card-set">
                                        <li className="gallery-item grid-item current"></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="paddlenav">
                                <ul>
                                    <li className="left-item"></li>
                                    <li className="right-item"></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section section-select no-pad-bottom">
                    <div className="section-content-responsive">
                        <header className="section-header">
                            <h2 className="section-header-headline">全系产品细细看</h2>
                            <div className="section-header-cta-container">
                                <a href="#">比较各款机型<RightOutlined /></a>
                            </div>
                        </header>
                    </div>
                    <div className="select-gallery-container">
                        <div id="scroll-gallery-gallery-1">
                            <div className="scroll-container"></div>
                            <div className="paddlenav">
                                <ul>
                                    <li className="left-item"></li>
                                    <li className="right-item"></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section section-incentive">
                    <div className="section-content-responsive">
                        <header className="section-header">
                            <h2 className="section-header-headline">
                                在 Apple 购买 iPhone<br />好处多多
                            </h2>
                            <div className="section-header-cta-container">
                                <a href="#">选购 iPhone<RightOutlined /></a>
                            </div>
                        </header>
                    </div>
                    <div className="gallery-container">
                        <div className="scroll-gallery-icon-cards">
                            <div className="scroll-container"></div>
                            <div className="paddlenav">
                                <ul>
                                    <li className="left-item"></li>
                                    <li className="right-item"></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section section-essentials no-pad-bottom">
                    <div className="section-content-responsive">
                        <header className="section-header">
                            <h2 className="section-header-headline">iPhone 左膀右臂</h2>
                            <div className="section-header-cta-container">
                                <a href="#">各款 iPhone 配件<RightOutlined /></a>
                            </div>
                        </header>
                    </div>
                    <div className="scroll-gallery-icon-cards">
                        <div className="scroll-container">
                            <div className="item-container">
                                <ul className="card-set">
                                    <li className="gallery-item grid-item current"></li>
                                </ul>
                            </div>
                        </div>
                        <div className="paddlenav">
                            <ul>
                                <li className="left-item"></li>
                                <li className="right-item"></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="section section-augment">
                    <div className="section-content-responsive">
                        <header className="section-header">
                            <h2 className="section-header-headline">亲密好拍档</h2>
                        </header>
                        <div className="accordion-wrapper">
                            <ul className="accordion">
                                <li className="accordion-item">
                                    <h3 className="accordion-title"></h3>
                                    <div className="accordion-content"></div>
                                </li>
                            </ul>
                            <div className="image-container-large"></div>
                        </div>
                    </div>
                </section>
                <section className="section section-index">
                    <div className="section-content-responsive section-index-section">
                        <div id="iphone-index" className="index">
                            <h2 className="index-title">iPhone</h2>
                            <nav className="index-groups">
                                <div className="index-group">
                                    <h3 className="index-list-title">探索 iPhone</h3>
                                    <ul className="index-list">
                                        <li className="index-item index-item-elevated">
                                            <a href="#" className="icon-wrapper index-link">
                                                <span className="icon-copy">探索全部 iPhone 机型</span>
                                            </a>
                                        </li>
                                        <li className="index-item index-item-elevated">
                                            <a href="#" className="icon-wrapper index-link">
                                                <span className="icon-copy">iPhone 16 Pro</span>
                                            </a>
                                        </li>
                                        <li className="index-item index-item-elevated">
                                            <a href="#" className="icon-wrapper index-link">
                                                <span className="icon-copy">iPhone 16</span>
                                            </a>
                                        </li>
                                        <li className="index-item index-item-elevated">
                                            <a href="#" className="icon-wrapper index-link">
                                                <span className="icon-copy">iPhone 16e</span>
                                            </a>
                                        </li>
                                        <li className="index-item index-item-elevated">
                                            <a href="#" className="icon-wrapper index-link">
                                                <span className="icon-copy">iPhone 15</span>
                                            </a>
                                        </li>
                                        <li className="index-item index-item-base">
                                            <a href="#" className="icon-wrapper index-link">
                                                <span className="icon-copy">iPhone 机型比较</span>
                                            </a>
                                        </li>
                                        <li className="index-item index-item-base">
                                            <a href="#" className="icon-wrapper index-link">
                                                <span className="icon-copy">换成 iPhone</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="index-group">
                                    <h3 className="index-list-title">选购 iPhone</h3>
                                    <ul className="index-list">
                                        <li className="index-item index-item-base">
                                            <a href="#" className="icon-wrapper index-link">
                                                <span className="icon-copy">选购 iPhone</span>
                                            </a>
                                        </li>
                                        <li className="index-item index-item-base">
                                            <a href="#" className="icon-wrapper index-link">
                                                <span className="icon-copy">iPhone 配件</span>
                                            </a>
                                        </li>
                                        <li className="index-item index-item-base">
                                            <a href="#" className="icon-wrapper index-link">
                                                <span className="icon-copy">Apple Trade In 换购计划</span>
                                            </a>
                                        </li>
                                        <li className="index-item index-item-base">
                                            <a href="#" className="icon-wrapper index-link">
                                                <span className="icon-copy">分期付款</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="index-group">
                                    <h3 className="index-list-title">iPhone 相关</h3>
                                    <ul className="index-list">
                                        <li className="index-item index-item-base">
                                            <a href="#" className="icon-wrapper index-link">
                                                <span className="icon-copy">iPhone 支持</span>
                                            </a>
                                        </li>
                                        <li className="index-item index-item-base">
                                            <a href="#" className="icon-wrapper index-link">
                                                <span className="icon-copy">AppleCare+ 服务计划 (适用于 iPhone)</span>
                                            </a>
                                        </li>
                                        <li className="index-item index-item-base">
                                            <a href="#" className="icon-wrapper index-link">
                                                <span className="icon-copy">iOS 18</span>
                                            </a>
                                        </li>
                                        <li className="index-item index-item-base">
                                            <a href="#" className="icon-wrapper index-link">
                                                <span className="icon-copy">Apple 打造的 App</span>
                                            </a>
                                        </li>
                                        <li className="index-item index-item-base">
                                            <a href="#" className="icon-wrapper index-link">
                                                <span className="icon-copy">iPhone 隐私保护</span>
                                            </a>
                                        </li>
                                        <li className="index-item index-item-base">
                                            <a href="#" className="icon-wrapper index-link">
                                                <span className="icon-copy">iCloud+</span>
                                            </a>
                                        </li>
                                        <li className="index-item index-item-base">
                                            <a href="#" className="icon-wrapper index-link">
                                                <span className="icon-copy">Apple Pay</span>
                                            </a>
                                        </li>
                                        <li className="index-item index-item-base">
                                            <a href="#" className="icon-wrapper index-link">
                                                <span className="icon-copy">Siri</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </section>
            </main>
        </div>

    );
}
