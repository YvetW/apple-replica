import {AppleFilled, SearchOutlined, ShoppingOutlined} from '@ant-design/icons';
import '../styles/components/header.scss';

export function Header() {
    return (
        <div id="globalnav">
            <div className="container">
                <ul className="globalnav-list">
                    <li><a href="#" className="globalnav-link globalnav-link-icon"><span><AppleFilled /></span></a></li>
                    <li><a href="#" className="globalnav-link"><span>商店</span></a></li>
                    <li><a href="#" className="globalnav-link"><span>Mac</span></a></li>
                    <li><a href="#" className="globalnav-link"><span>iPad</span></a></li>
                    <li><a href="#" className="globalnav-link"><span>iPhone</span></a></li>
                    <li><a href="#" className="globalnav-link"><span>Watch</span></a></li>
                    <li><a href="#" className="globalnav-link"><span>Vision</span></a></li>
                    <li><a href="#" className="globalnav-link"><span>AirPods</span></a></li>
                    <li><a href="#" className="globalnav-link"><span>家居</span></a></li>
                    <li><a href="#" className="globalnav-link"><span>娱乐</span></a></li>
                    <li><a href="#" className="globalnav-link"><span>配件</span></a></li>
                    <li><a href="#" className="globalnav-link"><span>技术支持</span></a></li>
                    <li><a href="#" className="globalnav-link globalnav-link-icon"><span><SearchOutlined /></span></a></li>
                    <li><a href="#" className="globalnav-link globalnav-link-icon"><span><ShoppingOutlined /></span></a></li>

                </ul>
            </div>
        </div>
    );
}
