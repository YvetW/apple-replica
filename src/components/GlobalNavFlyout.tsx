import '../styles/components/globalNavFlyout.scss';

interface GlobalNavOverlayProps {
    activeItem: string | null;
    onClose: () => void;
}

export function GlobalNavFlyout({activeItem, onClose}: GlobalNavOverlayProps) {
    if (!activeItem) return null;

    return (
        <div id="globalnav-flyout"  onMouseLeave={onClose}>
            <div className="container">
                <div className="globalnav-flyout-content">
                    <div className="globalnav-submenu-1">
                        <h2>探索&nbsp;AirPods</h2>
                        <ul>
                            <li>
                                <a href="#">探索全部 AirPods 机型</a>
                            </li>
                            <li>
                                <a href="#">AirPods 4</a>
                            </li>
                            <li>
                                <a href="#">AirPods Pro 2</a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href="#">AirPods Max</a>
                            </li>
                            <li>
                                <a href="#">AirPods 机型比较</a>
                            </li>
                        </ul>
                    </div>
                    <div className="globalnav-submenu-2">
                        <h2>探索&nbsp;AirPods</h2>
                        <ul>
                            <li>
                                <a href="#">探索全部 AirPods 机型</a>
                            </li>
                            <li>
                                <a href="#">AirPods 4</a>
                            </li>
                            <li>
                                <a href="#">AirPods Pro 2</a>
                            </li>
                            <li>
                                <a href="#">AirPods Max</a>
                            </li>
                            <li>
                                <a href="#">AirPods 机型比较</a>
                            </li>
                        </ul>
                    </div>
                    <div className="globalnav-submenu-2">
                        <h2>探索&nbsp;AirPods</h2>
                        <ul>
                            <li>
                                <a href="#">探索全部 AirPods 机型</a>
                            </li>
                            <li>
                                <a href="#">AirPods 4</a>
                            </li>
                            <li>
                                <a href="#">AirPods Pro 2</a>
                            </li>
                            <li>
                                <a href="#">AirPods Max</a>
                            </li>
                            <li>
                                <a href="#">AirPods 机型比较</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="globalnav-curtain"></div>
            </div>
        </div>
    );
}
