import {AppleFilled, SearchOutlined, ShoppingOutlined} from '@ant-design/icons';
import '../styles/components/header.scss';
import {useRef, useState} from 'react';
import {GlobalNavFlyout} from './GlobalNavFlyout.tsx';

export function Header() {
    const [activeItem, setActiveItem] = useState<string | null>(null);
    const timerRef = useRef<number | null>(null);

    function handleMouseEnter(menuItem: string) {
        if (timerRef.current !== null) {
            clearTimeout(timerRef.current);
        }

        timerRef.current = setTimeout(() => {
            setActiveItem(menuItem);
        }, 200);
    }

    return (
        <div id="globalnav">
            <div className="container">
                <ul className="globalnav-list">
                    <li><a href="#" className="globalnav-link globalnav-link-icon"><span><AppleFilled /></span></a></li>
                    <li>
                        <a href="#" className="globalnav-link" onMouseEnter={() => handleMouseEnter('store')}>
                            <span>商店</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="globalnav-link" onMouseEnter={() => handleMouseEnter('mac')}>
                            <span>Mac</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="globalnav-link" onMouseEnter={() => handleMouseEnter('ipad')}>
                            <span>iPad</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="globalnav-link" onMouseEnter={() => handleMouseEnter('iphone')}>
                            <span>iPhone</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="globalnav-link" onMouseEnter={() => handleMouseEnter('watch')}>
                            <span>Watch</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="globalnav-link" onMouseEnter={() => handleMouseEnter('vision')}>
                            <span>Vision</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="globalnav-link" onMouseEnter={() => handleMouseEnter('airpods')}>
                            <span>AirPods</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="globalnav-link" onMouseEnter={() => handleMouseEnter('homekit')}>
                            <span>家居</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="globalnav-link" onMouseEnter={() => handleMouseEnter('entertainment')}>
                            <span>娱乐</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="globalnav-link" onMouseEnter={() => handleMouseEnter('accessories')}>
                            <span>配件</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="globalnav-link" onMouseEnter={() => handleMouseEnter('support')}>
                            <span>技术支持</span>
                        </a>
                    </li>

                    <li><a href="#" className="globalnav-link globalnav-link-icon"><span><SearchOutlined /></span></a>
                    </li>
                    <li><a href="#" className="globalnav-link globalnav-link-icon"><span><ShoppingOutlined /></span></a>
                    </li>
                </ul>

                {/*遮罩层组件*/}
                <GlobalNavFlyout activeItem={activeItem} onClose={() => setActiveItem(null)} />
            </div>
        </div>
    );
}
