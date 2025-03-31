import {AppleFilled, SearchOutlined, ShoppingOutlined} from '@ant-design/icons';
import '../styles/components/header.scss';
import {useState} from 'react';
import {GlobalNavFlyout} from './GlobalNavFlyout.tsx';

export function Header() {
    const[activeItem, setActiveItem] = useState<string | null>(null);

    return (
        <div id="globalnav">
            <div className="container">
                <ul className="globalnav-list">
                    <li><a href="#" className="globalnav-link globalnav-link-icon"><span><AppleFilled /></span></a></li>
                    <li>
                        <a href="#" className="globalnav-link" onMouseEnter={() => setActiveItem('store')}>
                            <span>商店</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="globalnav-link" onMouseEnter={() => setActiveItem('mac')}>
                            <span>Mac</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="globalnav-link" onMouseEnter={() => setActiveItem('ipad')}>
                            <span>iPad</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="globalnav-link" onMouseEnter={() => setActiveItem('iphone')}>
                            <span>iPhone</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="globalnav-link" onMouseEnter={() => setActiveItem('watch')}>
                            <span>Watch</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="globalnav-link" onMouseEnter={() => setActiveItem('vision')}>
                            <span>Vision</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="globalnav-link" onMouseEnter={() => setActiveItem('airpods')}>
                            <span>AirPods</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="globalnav-link" onMouseEnter={() => setActiveItem('homekit')}>
                            <span>家居</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="globalnav-link" onMouseEnter={() => setActiveItem('entertainment')}>
                            <span>娱乐</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="globalnav-link" onMouseEnter={() => setActiveItem('accessories')}>
                            <span>配件</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="globalnav-link" onMouseEnter={() => setActiveItem('support')}>
                            <span>技术支持</span>
                        </a>
                    </li>

                    <li><a href="#" className="globalnav-link globalnav-link-icon"><span><SearchOutlined /></span></a></li>
                    <li><a href="#" className="globalnav-link globalnav-link-icon"><span><ShoppingOutlined /></span></a></li>
                </ul>

                {/*遮罩层组件*/}
                <GlobalNavFlyout activeItem={activeItem} onClose={() => setActiveItem(null)}/>
            </div>
        </div>
    );
}
