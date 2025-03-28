import './styles/App.scss';
import {Route, Routes} from 'react-router';
import {Home} from './pages/Home.tsx';
import {Layout} from './components/Layout.tsx';
import {IphonePage} from './pages/IphonePage.tsx';
import {ShopPage} from './pages/ShopPage.tsx';

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="iphone" element={<IphonePage />} />
                <Route path="shop" element={<ShopPage />} />
            </Route>
        </Routes>
    );
}

export default App;
