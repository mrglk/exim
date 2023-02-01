import "./About.scss";
import { ReactComponent as Logo } from "../../assets/imgs/logo_ex.svg";
import { ReactComponent as PlayIcon } from "../../assets/imgs/play_icon.svg";
import { ReactComponent as EximText } from "../../assets/imgs/exim_text.svg";
import ButtonOrder from "../ButtonOrder/ButtonOrder";

export default function About({ id, header}) {
  return (
    <section className="about container" id={id}>
      {header('black', true)}
      <div className="about__inner container__row">
         <div className="about__video">
                <PlayIcon className="about__playIcon"/>
            </div>
        <div className="about__logoWrapper">
            <Logo className="about__logo" />
        </div>

        <div className="about__content">
          <div className="about__leftSide">
            <div className="about__eximWrapper">
                <EximText className="about__exim"/>
            </div>
          </div>
          <div className="about__centerSide">
            <div className="about__paragraph">
              <h2 className="about__header">При индивидуальной работе </h2>
              <p className="about__description">
                мы создаем сайты с нуля. На первом этапе работы с клиентами мы
                обсуждаем задачи, которые должен решать сайт. Затем собираем
                информацию о вашей компании, целевой аудитории, клиентах и
                конкурентах. На основе собранной информации создается прототип
                будущего сайта, потом дизайн, вёрстка и программирование.
              </p>
            </div>
          </div>
          <div className="about__rightSide">
            <div className="about__paragraph">
              <h2 className="about__header">Мы разрабатываем</h2>
              <p className="about__description">
                сайты на заказ во всем мире, создание
                индивидуального интернет-магазина, сайта-каталога или сайта
                компании под ключ по индивидуальному проекту мы выполняем в
                сроки от 4 недель в соответствии с поставленными целями и
                заключенным договором.
              </p>
            </div>
            <div className="about__button">
                <ButtonOrder/>
            </div>
            <div className="about__paragraph">
              <h2 className="about__header">Создание современного сайта</h2>
              <p className="about__description">
                В зависимости от бюджета мы можем
                создать сайт на WordPress, PrestaShop или на основе другой
                свободной системы.<br/>Мы не работаем над проектами «для галочки»,
                над проектами «чтобы было». Мы разрабатываем веб-сайты для
                решения конкретных задач: привлечение клиентов, продажи,
                предоставление информации об услугах или продуктах.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
