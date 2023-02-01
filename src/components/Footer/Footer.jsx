import "./Footer.scss";
import { ReactComponent as Logo } from "../../assets/imgs/logo_full.svg";
import { Link } from "react-router-dom";
import * as cx from "classnames";

export default function Footer({ position, isHome, handleHashLinks }) {
  const classFooter = cx("footer", {
    footer_fixed: position === "fixed",
  });
  return (
    <footer className="container">
      <div className={classFooter}>
        <div className="footer__inner container__row_wide">
          <div className="footer__logoAndTel">
            <div className="footer__logoWrapper" onClick={() => handleHashLinks('footer', isHome, 0)}>
              <Logo className="footer__logo" />
            </div>
            <a
              className="footer__tel footer__tablet_hidden footer__mobile_visible footer__landscape_visible"
              href="tel:+37441221733">
              +374 41 221733
            </a>
          </div>
          <div className="footer__content">
            <div className="footer__main">
              <div className="footer__nav">
                <div className="footer__side">
                <span className="footer__link"
                    onClick={() => handleHashLinks('footer', isHome, 1)}>
                      О нас
                    </span>
                    <span className="footer__link"
                    onClick={() => handleHashLinks('footer', isHome, 2)}>
                      Чем занимаемся
                    </span>
                    <span className="footer__link"
                    onClick={() => handleHashLinks('footer', isHome, 3)}>
                      Портфолио
                    </span>
                  <Link className="footer__link footer__link_smaller footer__tablet_hidden" to="/privacy-policy">
                    Политика конфиденциальности
                  </Link>
                </div>
                <div className="footer__side">
                <span className="footer__link"
                    onClick={() => handleHashLinks('footer', isHome, 4)}>
                      Этапы работы
                    </span>
                    <span className="footer__link"
                    onClick={() => handleHashLinks('footer', isHome, 6)}>
                     Отзывы
                    </span>
                    <span className="footer__link"
                    onClick={() => handleHashLinks('footer', isHome, 7)}>
                      Контакты
                    </span>
                  <Link className="footer__link footer__link_smaller footer__tablet_hidden" to="/agreement">
                    Соглашение об обработке персональных данных
                  </Link>
                </div>
                <div className="footer__side">
                <a
              className="footer__tel footer__desktop_hidden footer__mobile_hidden footer__landscape_hidden"
              href="tel:+37441221733">
              +374 41 221733
            </a>
                </div>
              </div>
            </div>
            <div className="footer__dataAndAdditionalLinks">
              <div className="footer__additionalLinks">
              <Link className="footer__link footer__link_smaller footer__desktop_hidden" to="/privacy-policy">
                    Политика конфиденциальности
                  </Link>
              <Link className="footer__link footer__link_smaller footer__desktop_hidden" to="/agreement">
                    Соглашение об обработке персональных данных
                  </Link>
              </div>
              <div className="footer__data">
                <div>
                  <span className="footer__data_bold">ИНН <br className="footer__tablet_visible footer__landscape_hidden"/></span> 08223805
                  <br />
                </div>
                <div>
                  <span className="footer__data_bold">АДРЕС: </span>
                  <br className="footer__mobile_hidden"/>
                  Армения, г. Ереван<br className="footer__tablet_visible footer__landscape_hidden"/> ул. Манушян, д. 36
                  <br />
                  Почта:{" "}
                  <a className="footer__mail" href="mailto:info@eximpartnes.online">
                    info@eximpartnes.online
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
