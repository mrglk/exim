import "./AgreementPage.scss";

function AgreementPage({ header, footer }) {
    return (
      <>
    {header('white', false)}
    <div className="agreement container">
        <main className="agreement__inner container__row"  >
          <h1 className="agreement__title infoPages__title">Соглашение об обработке <br/> персональных данных</h1>
          <div className="agreement__content">
            <div className="agreement__text">Настоящим я даю свое согласие «Exim Partners» </div>
            <ul className="agreement__list">
              <li className="agreement__listItem">
                на обработку принадлежащих мне персональных данных: фамилия, имя, отчество, дата рождения, номер телефона, адрес электронной почты, адрес доставки, сведения об адресе аккаунта в социальных сетях, пользовательские данные (MAC-адрес, тип и версия ОС, тип и версия браузера, тип устройства и разрешение его экрана),</li>
              <li className="agreement__listItem">
                на осуществление следующих действий с персональными данными: сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (предоставление, доступ), блокирование, удаление, уничтожение, совершаемых с использованием средств автоматизации или без использования таких средств.</li>
            </ul>         
            <div className="agreement__text">Цели обработки: продажи товаров и оказания услуг, предоставления мне справочной информации, получения обратной связи в отношении товаров/услуг, улучшения качества обслуживания покупателей, изучения и анализа рынка, изучения потребностей покупателей, проведения маркетинговых и иных исследований, а также в целях обеспечения соблюдения законов, иных нормативных правовых актов РФ.</div>
            <div className="agreement__text">Согласен на получение по электронной почте, посредством смс-сообщений, телефонных звонков, рассылок через сервисы WhatsApp, Telegram и другие сервисы рекламных и информационных сообщений о товарах/услугах ООО «Exim Partners», о деятельности ООО «Exim Partners», о проведении стимулирующих мероприятий рекламного характера.</div>
            <div className="agreement__text">Я проинформирован, что для решения вопросов, касающихся обработки принадлежащих мне персональных данных, я могу направить запрос оператору с темой письма «Запрос о персональных данных» (либо «Отзыв согласия на обработку персональных данных» - в случае отзыва согласия на обработку персональных данных) на адрес: <address className="agreement__address" >г. Ереван ул. Манушян д. 36.</address></div>
            <div className="agreement__text">Настоящее согласие действует с настоящего момента до достижения указанных целей обработки. Согласие может быть отозвано мной по моему письменному запросу. Согласие на получение рекламных рассылок может мной отозвано по письменному запросу или с использованием функции «Отписаться».</div>
            <div className="agreement__text">Текст согласия размещен на сайте  в неограниченном доступе и может быть изменен без предварительного уведомления или согласия Пользователя. Новая редакция Соглашения вступает в силу с момента его утверждения и размещения на сайте. Настоящее Соглашение на обработку персональных данных является неотъемлемой частью Политики конфиденциальности, доступной, размещенной в неограниченном доступе на сайте. </div>
          </div>
        </main>
    </div>
    {footer('static', false)}
    </>
    );
  }
  
  export default AgreementPage;