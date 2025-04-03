import '../styles/pages/iphonePage.scss';

export function IphonePage() {
    return (
        <div id="iphone-page">
            <nav id="chapternav">
                <div className="chapternav-wrapper">
                    <ul>
                        <li className="chapternav-item chapternav-item-iphone-16-pro">
                            <a href="#">
                                <figure className="chapternav-icon"></figure>
                                <span className="chapternav-label"></span>
                            </a>
                        </li>
                    </ul>
                    <div className="chapternav-paddles">
                        <button className="chapternav-paddle chapternav-paddle-left"></button>
                        <button className="chapternav-paddle chapternav-paddle-right"></button>
                    </div>
                </div>
            </nav>
            <main id="main"></main>
        </div>

    );
}
