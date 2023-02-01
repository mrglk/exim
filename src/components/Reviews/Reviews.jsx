import { useState } from 'react';
import { reviewsMass } from './reviewsMass';
import "./Reviews.scss";
import Photos from "../../assets/imgs/reviews.png";
import PhotosRetina from "../../assets/imgs/reviews_2x.png";
import ButtonOrder from "../ButtonOrder/ButtonOrder";
import { ReactComponent as ArrowLeft } from "../../assets/imgs/arrow_left.svg";
import { ReactComponent as ArrowRight } from "../../assets/imgs/arrow_right.svg";

export default function Reviews({ id, header}) {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    let slidesLength = reviewsMass.length - 1;

    if (slideIndex !== slidesLength) {
      setSlideIndex(slideIndex + 1)
    }
    else if (slideIndex === slidesLength) {
      setSlideIndex(0)
    }
  }
  const prevSlide = () => {
    let slidesLength = reviewsMass.length - 1;

    if (slideIndex !== 0) {
      setSlideIndex(slideIndex - 1)
    }
    else if (slideIndex === 0) {
      setSlideIndex(slidesLength)
    }
  }

  return (
    <section className="reviews container" id={id}>
       {header('white', true)}
      <div className="reviews__inner container__row">
        <div className="reviews__headerAndButton">
          <h1 className="reviews__header">Отзывы</h1>
        </div>

        <div className="reviews__content">
          <div className="reviews__leftSide">
            <div className="reviews__imgWrapper">
              <img
                className="reviews__img"
                alt="Офис"
                src={Photos}
                srcSet={`${PhotosRetina} 2x`}
              />
            </div>
            <ButtonOrder color="white" />
          </div>

          <div className="reviews__rightSide">
            <div className="reviews__btnWrapper"><button className="btn btn_smaller btn_white reviews__btnReview">Оставить отзыв</button></div>
            <div className="reviews__reviewContainer">
              <div className="reviews__reviewBackground">
                <button
                  onClick={prevSlide}
                  className="reviews__sliderBtn">
                  <ArrowLeft className="reviews__arrowIcon reviews__arrowIcon_left" />
                </button>
                {reviewsMass[slideIndex].map((item) => (
                  <div key={item.id} id={item.id} className="reviews__textWrapper">
                    <div className="reviews__quote">“</div>
                    <p className="reviews__text">{item.review}</p>
                    <div className="reviews__quote reviews__quote_reverse">“</div>
                    <div className="reviews__sender">
                      <div className="reviews__name">{item.name}</div>
                      <div className="reviews__position">{item.position}</div>
                    </div>
                  </div>
                ))}
                <button
                  onClick={nextSlide}
                  className="reviews__sliderBtn">
                  <ArrowRight className="reviews__arrowIcon reviews__arrowIcon_right" />
                </button>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
