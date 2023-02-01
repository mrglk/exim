import "./Stages.scss";
import ButtonOrder from "../ButtonOrder/ButtonOrder";

export default function Stage({ id, header}) {
  return (
    <section className="stages container" id={id}>
       {header('black', true)}
      <div className="stages__inner container__row">
        <h1 className="stages__header">Этапы работы</h1>
        <div className="stages__content">
          <div className="stages__stages">
              <div className="stages__item">
                <span className="stages__number">01</span>
                <div className="stages__subtitleWrapper">
                  <span className="stages__subtitle">Аналитика</span>
                  </div>
                <p className="stages__description">
                  На этом этапе мы задаем много вопросов, совместно определяем цели
                  и задачии. Изучаем конкурентов и целевую аудиторию.
                </p>
              </div>
              <div className="stages__item">
                <span className="stages__number">02</span>
                <div className="stages__subtitleWrapper"><span className="stages__subtitle">Проектирование</span></div>
                <p className="stages__description">
                Продумываем функциональные блоки, связь страниц друг с другом и взаимодействие пользователей с вашим сайтом
                </p>
              </div>
              <div className="stages__item">
                <span className="stages__number">03</span>
                <div className="stages__subtitleWrapper"><span className="stages__subtitle">Дизайн</span></div>
                <p className="stages__description">
                Узнаем какие решения нравятся вам. Подбираем и обсуждаем примеры, разрабатываем дизайн-концепции сайта
                </p>
              </div>
              <div className="stages__item">
                <span className="stages__number">04</span>
                <div className="stages__subtitleWrapper"><span className="stages__subtitle">Разработка</span></div>
                <p className="stages__description">
                Пишем технические задания. На этом этапе работаем самостоятельно и показываем вам промежуточные варианты.
                </p>
              </div>
              <div className="stages__item">
                <span className="stages__number">05</span>
                <div className="stages__subtitleWrapper"><span className="stages__subtitle">Тестирование <br className="stages__mobile_visible"/>и запуск</span></div>
                <p className="stages__description">
                Проверяем работу всего функционала, а также корректоное отображения сайта на мобильных устройствах и планшетах.
              Переносим проект на рабочий хостинг и запускаем в эксплуатацию, после чего снова тестируем
                </p>
              </div>
          </div>
          <ButtonOrder/>
        </div>
      </div>
    </section>
  );
}
