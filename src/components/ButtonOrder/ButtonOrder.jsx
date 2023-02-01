import "./ButtonOrder.scss";
import * as cx from "classnames";
import { ReactComponent as Arrow } from "../../assets/imgs/arrow_for_button.svg";
import { useState } from "react";
export default function ButtonOrder({ color }) {
  const [isActive, setIsActive] = useState(false);

  const classButtonWrapper = cx("buttonOrderWrapper btn", {
    btn_white: color === "white",
  });

  const classButton = cx("buttonOrder", {
    "buttonOrder_active": isActive,
  });

  const classArrow = cx("buttonOrder__arrow", {
    "buttonOrder__arrow_white": color === "white",
  });

  const handleClick = () => {
    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
    }, 500);
  };

  return (
    <button className={classButtonWrapper} onClick={handleClick}>
      <div className={classButton}>
        Заказать
        <div className="buttonOrder__arrowWrapper">
          <Arrow className={classArrow} />
        </div>
      </div>
    </button>
  );
}
