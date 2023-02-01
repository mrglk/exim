import { useState } from 'react';
import { teams } from "./teams";
import "./OurTeam.scss";
import * as cx from "classnames";

import { ReactComponent as ArrowLeft } from "../../assets/imgs/arrow_left.svg";
import { ReactComponent as ArrowRight } from "../../assets/imgs/arrow_right.svg";
import Team1Photo1 from "../../assets/imgs/team1_photo1.jpg";
import Team1Photo1Retina from '../../assets/imgs/team1_photo1_2x.jpg';
import Team2Photo1 from "../../assets/imgs/team2_photo1.jpg";
import Team2Photo1Retina from '../../assets/imgs/team2_photo1_2x.jpg';
import Team3Photo1 from "../../assets/imgs/team3_photo1.jpg";
import Team3Photo1Retina from '../../assets/imgs/team3_photo1_2x.jpg';

export default function OurTeam({ id, header}) {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    let slidesLength = teams.length - 1;

    if (slideIndex !== slidesLength) {
      setSlideIndex(slideIndex + 1)
    }
    else if (slideIndex === slidesLength) {
      setSlideIndex(0)
    }
  }

  const prevSlide = () => {
    let slidesLength = teams.length - 1;

    if (slideIndex !== 0) {
      setSlideIndex(slideIndex - 1)
    }
    else if (slideIndex === 0) {
      setSlideIndex(slidesLength)
    }
  }

  const renderImg = (id) => {
    if ((slideIndex === 0)) {
      if (id === "firstEmployee") {
        return (
          <img className="employee__img" alt="Команда"
            src={Team1Photo1} srcSet={`${Team1Photo1Retina} 2x`} />)
      }
      else if (id === "secondEmployee") {
        return (
          <img className="employee__img" alt="Команда"
            src={Team1Photo1} srcSet={`${Team1Photo1Retina} 2x`} />)
      }
      else if (id === "thirdEmployee") {
        return (
          <img className="employee__img" alt="Команда"
            src={Team1Photo1} srcSet={`${Team1Photo1Retina} 2x`} />)
      }
      else if (id === "fourthEmployee") {
        return (
          <img className="employee__img" alt="Команда"
            src={Team1Photo1} srcSet={`${Team1Photo1Retina} 2x`} />)
      }
      else if (id === "fifthEmployee") {
        return (
          <img className="employee__img" alt="Команда"
            src={Team1Photo1} srcSet={`${Team1Photo1Retina} 2x`} />)
      }
    }
    else if ((slideIndex === 1)) {
      if (id === "firstEmployee") {
        return (
          <img className="employee__img" alt="Команда"
            src={Team2Photo1} srcSet={`${Team2Photo1Retina} 2x`} />)
      }
      else if (id === "secondEmployee") {
        return (
          <img className="employee__img" alt="Команда"
            src={Team2Photo1} srcSet={`${Team2Photo1Retina} 2x`} />)
      }
      else if (id === "thirdEmployee") {
        return (
          <img className="employee__img" alt="Команда"
            src={Team2Photo1} srcSet={`${Team2Photo1Retina} 2x`} />)
      }
      else if (id === "fourthEmployee") {
        return (
          <img className="employee__img" alt="Команда"
            src={Team2Photo1} srcSet={`${Team2Photo1Retina} 2x`} />)
      }
    }
    else if ((slideIndex === 2)) {
      if (id === "firstEmployee") {
        return (
          <img className="employee__img" alt="Команда"
            src={Team3Photo1} srcSet={`${Team3Photo1Retina} 2x`} />)
      }
      else if (id === "secondEmployee") {
        return (
          <img className="employee__img" alt="Команда"
            src={Team3Photo1} srcSet={`${Team3Photo1Retina} 2x`} />)
      }
      else if (id === "thirdEmployee") {
        return (
          <img className="employee__img" alt="Команда"
            src={Team3Photo1} srcSet={`${Team3Photo1Retina} 2x`} />)
      }
      else if (id === "fourthEmployee") {
        return (
          <img className="employee__img" alt="Команда"
            src={Team3Photo1} srcSet={`${Team3Photo1Retina} 2x`} />)
      }
      else if (id === "fifthEmployee") {
        return (
          <img className="employee__img" alt="Команда"
            src={Team3Photo1} srcSet={`${Team3Photo1Retina} 2x`} />)
      }
    }
    else if ((slideIndex === 3)) {
      if (id === "firstEmployee") {
        return (
          <img className="employee__img" alt="Команда"
            src={Team2Photo1} srcSet={`${Team2Photo1Retina} 2x`} />)
      }
      else if (id === "secondEmployee") {
        return (
          <img className="employee__img" alt="Команда"
            src={Team2Photo1} srcSet={`${Team2Photo1Retina} 2x`} />)
      }
      else if (id === "thirdEmployee") {
        return (
          <img className="employee__img" alt="Команда"
            src={Team2Photo1} srcSet={`${Team2Photo1Retina} 2x`} />)
      }
      else if (id === "fourthEmployee") {
        return (
          <img className="employee__img" alt="Команда"
            src={Team2Photo1} srcSet={`${Team2Photo1Retina} 2x`} />)
      }
    }
  }

  const classCard = cx("team__box",
    teams[slideIndex].length % 2 === 0 ? "team__boxFour" : "team__boxFive"
  );

  return (
    <section className="team container" id={id}>
       {header('white', true)}
      <div className="team__inner container__row">
        <h1 className="team__title">Наша команда</h1>
        <div className="team__slider">
          <button
            onClick={prevSlide}
            className="team__sliderBtn">
            <ArrowLeft className="team__arrowIcon" />
          </button>
          <div className={classCard}>
            {teams[slideIndex].map((item) => (
              <div key={item.id} id={item.id} className={cx("employee", `${item.id}`)}>
                <div className="employee__imgWrapper">
                  {renderImg(item.id)}
                </div>
                <div className="employee__name">{item.name}</div>
                <div className="employee__profession">{item.profession}</div>
              </div>
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="team__sliderBtn">
            <ArrowRight className="team__arrowIcon" />
          </button>
        </div>
      </div>
    </section>
  );
}
