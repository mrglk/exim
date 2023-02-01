import "./Header.scss";
import * as cx from "classnames";
import { ReactComponent as Burger } from "../../assets/imgs/burger.svg";
import { RemoveScroll } from "react-remove-scroll";

export default function Header({ color, opened, closeBurger, openBurger, isHome, handleHashLinks }) {
  const classBurger = cx("header__burger", {
    header__burger_white: color === "white",
    header__burger_black: color === "black",
    header__burger_hidden: opened,
  });
  const classNavWrapper = cx("header__navWrapper", {
    header__navWrapper_active: opened,
  });

  const classNav = cx("header__nav", {
    header__nav_white: color === "white",
    header__nav_black: color === "black",
  });

  const classOverlay = cx("header__overlay", {
    header__overlay_active: opened,
  });

  //  console.log(isHome)
  
  return (
    <header className="header container">
      <div className="header__inner container__row_wide">
        <button className="header__burgerWrapper" onClick={openBurger}>
          <Burger className={classBurger} />
        </button>
        <div className={classOverlay}></div>
            <div className={classNavWrapper} onClick={closeBurger}>
        {opened && (
              <RemoveScroll removeScrollBar>
                <nav className={classNav} onClick={(e) => e.stopPropagation()}>
                  <span className="header__link"
                    onClick={() => handleHashLinks('header', isHome, 1)}>
                      О нас
                    </span>
                    <span className="header__link"
                    onClick={() => handleHashLinks('header', isHome, 2)}>
                      Чем занимаемся
                    </span>
                    <span className="header__link"
                    onClick={() => handleHashLinks('header', isHome, 3)}>
                    Портфолио
                    </span>
                    <span className="header__link"
                    onClick={() => handleHashLinks('header', isHome, 4)}>
                      Этапы работы
                    </span>
                    <span className="header__link"
                    onClick={() => handleHashLinks('header', isHome, 5)}>
                      Наша команда
                    </span>
                    <span className="header__link"
                    onClick={() => handleHashLinks('header', isHome, 6)}>
                      Отзывы
                    </span>
                    <span className="header__link"
                    onClick={() => handleHashLinks('header', isHome, 7)}>
                    Контакты
                    </span>
                  <button
                    className="header__link header__link_bolder"
                    onClick={closeBurger}>
                    Заказать
                  </button>
                  {/* <ButtonOrder/> */}
                </nav>
              </RemoveScroll>
        )}
            </div>
      </div>
    </header>
  );
}
