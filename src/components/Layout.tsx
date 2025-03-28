import {Outlet} from 'react-router';
import {Header} from './Header.tsx';
import {Footer} from './Footer.tsx';

export function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}
