import './App.scss';
import { Routes, Route, useLocation  } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AgreementPage from './pages/AgreementPage/AgreementPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage/PrivacyPolicyPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import {  useEffect, useState } from 'react';
import { useDisableBodyScroll } from './hooks/useDisableBodyScroll';
import { useScroller } from './hooks/useScroller';
import { useNavigate} from 'react-router-dom';
import useWindowDimensions from './hooks/useWindowDimensions';

function App() {
  const navigate = useNavigate();
  const { index, onMove, footerOffset, setIndex, setFooterOffset } = useScroller(8); // 8 - количество блоков для скрола на главной
  const { pathname } = useLocation();
  const [openedBurgerMenu, setOpenedBurgerMenu] = useState(false);
  useDisableBodyScroll(openedBurgerMenu);
  const header = (color, isHome) => <Header isHome={isHome} color={color} opened={openedBurgerMenu} closeBurger={() => setOpenedBurgerMenu(false)} openBurger={() => setOpenedBurgerMenu(true)} handleHashLinks={handleHashLinks}/>
  const footer = (position, isHome) => <Footer position={position} isHome={isHome} handleHashLinks={handleHashLinks}/>
  const { height } = useWindowDimensions();

  useEffect(() => {
     const doc = document.documentElement;
     doc.style.setProperty('--doc-height', `${height}px`);
  }, [height]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // useEffect(() => { // настроить, чтобы переходилось наверх
  //   setIndex(0);
  // }, [pathname]);

  if (pathname === '/') {
    document.body.style.overflow = 'hidden';
} else {
    document.body.style.removeProperty('overflow');
}

  const handleHashLinks = (component, isHome, order) => {
    component === 'header' && setOpenedBurgerMenu(false);
    component === 'footer' && setFooterOffset(false);
    if (isHome) {
      setIndex(order);
      // console.log('Домашняя страница')
    } else {
      // console.log('Другая страница')
      navigate('/');
      setIndex(0);
      setTimeout(() => {
        setIndex(order);
      }, 1);
    }
  }

  return (
    <div className="App">
          <Routes>
                <Route path='/' element={<HomePage
                 opened={openedBurgerMenu}
                 closeBurger={() => setOpenedBurgerMenu(false)}
                 openBurger={() => setOpenedBurgerMenu(true)}
                 header={header}
                 footer={footer}
                 index={index}
                 onMove={onMove}
                 footerOffset={footerOffset}/>}/>
                <Route path='/agreement' element={<AgreementPage  header={header} footer={footer}/>}/>
                <Route path='/privacy-policy' element={<PrivacyPolicyPage  header={header} footer={footer}/>}/>
            </Routes>
    </div>
  );
}

export default App;
