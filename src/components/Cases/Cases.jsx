import "./Cases.scss";
import PhotoFactoring from "../../assets/imgs/cases_2.png";
import PhotoFactoringRetina from "../../assets/imgs/cases_2_2x.png";
import PhotoEcopolimerFull from "../../assets/imgs/cases_1_full.jpg";
import PhotoEcopolimerFullRetina from "../../assets/imgs/cases_1_full_2x.jpg";

export default function Cases({ id, header}) {
  return (
    <section className="cases container" id={id}>
      {header('white', true)}
      <div className="cases__inner">
        <h1 className="cases__header">Наши кейсы</h1>
        <div className="cases__content">

        <div className="cases__casesWrapper">
            <div className="cases__imgWrapper">
                  <img
                    className="cases__img"
                    alt="Сайт Ecopolimer"
                    src={PhotoEcopolimerFull}
                    srcSet={`${PhotoEcopolimerFullRetina} 2x`}
                  />
            </div>
            <div className="cases__imgWrapper">
                  <img
                    className="cases__img"
                    alt="Сайт Факторинг"
                    src={PhotoFactoring}
                    srcSet={`${PhotoFactoringRetina} 2x`}
                  />
            </div>
        </div>

        </div>
      </div>
    </section>
  );
}
