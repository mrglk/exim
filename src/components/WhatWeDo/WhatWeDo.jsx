import "./WhatWeDo.scss";
import * as cx from "classnames";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Photo1 from "../../assets/imgs/wedo_1.jpg";
import Photo1Retina from "../../assets/imgs/wedo_1_2x.jpg";
import Photo2 from "../../assets/imgs/wedo_2.jpg";
import Photo2Retina from "../../assets/imgs/wedo_2_2x.jpg";
import Photo3 from "../../assets/imgs/wedo_3.jpg";
import Photo3Retina from "../../assets/imgs/wedo_3_2x.jpg";
import Photo4 from "../../assets/imgs/wedo_4.jpg";
import Photo4Retina from "../../assets/imgs/wedo_4_2x.jpg";

export default function WhatWeDo({ id, header, index }) {
  const [active, setActive] = useState(false);
  const [transition, setTransition] = useState(false);
  const [link, setLink] = useState("");
  const [sizes, setSizes] = useState({
    development: "",
    stores: "",
    style: "",
    solutions: "",
  });
  const { width, height } = useWindowDimensions();
  const navigate = useNavigate();

  const classItem = cx("whatWeDo__item", {
    whatWeDo__item_active: active,
    whatWeDo__item_transition: transition,
  })

  useEffect(() => {
    if (index === 2) {
      setTimeout(() => {
        setActive(true)
      }, 500)
      setTimeout(() => {
        setTransition(true)
      }, 1500)
    }
  }, [index])

  useEffect(() => {
    if (link !== "") {
      navigate(link)
      setLink("")
      setSizes({
        development: "",
        stores: "",
        style: "",
        solutions: "",
      })
    }
  }, [navigate, link, sizes])

  const delayAndGo = (path) => (event) => {
    let itemName = event.currentTarget.id;
    const newSizes = {}
    for (let key in sizes) {
      newSizes[key] = "small";
    }
    const newSizes2 = {
      ...newSizes,
      [itemName]: "big"
    }
    setSizes(newSizes2);
    setTimeout(() => setLink(path), 500);
  }

  return (
    <section className="whatWeDo container" id={id}>
      {header('black', true)}
      <div className="whatWeDo__inner container__row">
        <h1 className="whatWeDo__header">Чем мы занимаемся ?</h1>
        <div className="whatWeDo__content">
          <div className={cx(classItem, (index === 2) && "whatWeDo__itemLeft",
            (width < 959) && (sizes["development"] === "big" ? "whatWeDo__itemActive" : sizes["development"] === "small" ? "whatWeDo__itemInactive" : ""))}
            onClick={delayAndGo("/agreement")} id={"development"}>
            <div className="whatWeDo__imgWrapper">
              <img
                className="whatWeDo__img"
                alt="Разработка"
                src={Photo1}
                srcSet={`${Photo1Retina} 2x`}
              />
            </div>
            <div className="whatWeDo__subtitle">Разработка сайтов</div>
          </div>
          <div className={cx(classItem, (index === 2) && (((width > 958) || (width > height && width < 1049 && height < 590)) ? "whatWeDo__itemLeft" : "whatWeDo__itemRight"),
            (width < 959) && (sizes["stores"] === "big" ? "whatWeDo__itemActive" : sizes["stores"] === "small" ? "whatWeDo__itemInactive" : ""))}
            onClick={delayAndGo("/agreement")} id={"stores"}>
            <div className="whatWeDo__imgWrapper">
              <img
                className="whatWeDo__img"
                alt="Интернет-магазин"
                src={Photo2}
                srcSet={`${Photo2Retina} 2x`}
              />
            </div>
            <div className="whatWeDo__subtitle">Интернет-магазины</div>
          </div>
          <span className="whatWeDo__clearfix_tablet"></span>
          <div className={cx(classItem, (index === 2) && (((width > 958) || (width > height && width < 1049 && height < 590)) ? "whatWeDo__itemRight" : "whatWeDo__itemLeft"),
            (width < 959) && (sizes["style"] === "big" ? "whatWeDo__itemActive" : sizes["style"] === "small" ? "whatWeDo__itemInactive" : ""))}
            onClick={delayAndGo("/privacy-policy")} id={"style"}>
            <div className="whatWeDo__imgWrapper">
              <img
                className="whatWeDo__img"
                alt="Фирменный стиль"
                src={Photo3}
                srcSet={`${Photo3Retina} 2x`}
              />
            </div>
            <div className="whatWeDo__subtitle">Фирменный стиль</div>
          </div>
          <div className={cx(classItem, (index === 2) && "whatWeDo__itemRight",
            (width < 959) && (sizes["solutions"] === "big" ? "whatWeDo__itemActive" : sizes["solutions"] === "small" ? "whatWeDo__itemInactive" : ""))}
            onClick={delayAndGo("/privacy-policy")} id={"solutions"}>
            <div className="whatWeDo__imgWrapper">
              <img
                className="whatWeDo__img"
                alt="Индивидуальные решения"
                src={Photo4}
                srcSet={`${Photo4Retina} 2x`}
              />
            </div>
            <div className="whatWeDo__subtitle">
              Индивидуальные
              <br className="whatWeDo__tablet_hidden" /> решения
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}
