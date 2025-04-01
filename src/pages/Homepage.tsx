import '../styles/pages/homepage.scss';
import {RightOutlined} from '@ant-design/icons';

export function Homepage() {
    return (
        <div id="homepage">
            <section className="homepage-section">
                <span className="huabei-ribbon-copy">
                    购买符合条件的产品，通过花呗或指定银行最长可享 24&nbsp;个月免息
                    <span className="nowrap">
                        分期
                        <sup><a href="#" className="footnote footnote-number">*</a></sup>。
                    </span>
                    换购还可享
                    <span className="nowrap">折抵</span>
                    <span className="nowrap">
                        优惠
                        <sup><a href="#" className="footnote footnote-number">**</a></sup>。
                    </span>
                    <a href="#" className="huabei-ribbon-link nowrap">选购<RightOutlined className="right-arrow" /></a>
                </span>
            </section>
            <section className="homepage-section homepage-section-large">
                <div section-unit-id="iphone-16-pro">
                    <a className="unit-link" href="#">&nbsp;</a>
                    <div className="unit-copy-wrapper">
                        <h2>iPhone 16 Pro</h2>
                        <div className="cta-links">
                            <a className="button" href="#">进一步了解</a>
                            <a className="button" href="#">购买</a>
                        </div>
                    </div>
                </div>
                <div section-unit-id="iphone-16">
                    <a className="unit-link" href="#">&nbsp;</a>
                    <div className="unit-copy-wrapper">
                        <h2>iPhone 16</h2>
                        <div className="cta-links">
                            <a className="button" href="#">进一步了解</a>
                            <a className="button" href="#">购买</a>
                        </div>
                    </div>
                </div>
                <div className="unit-link" section-unit-id="airpods-4">
                    <a href="#">&nbsp;</a>
                </div>
            </section>
            <section className="homepage-section">3</section>
        </div>
    );
}
