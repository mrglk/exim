import "./Scroller.scss";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import cx from "classnames";


export const Scroller = ({ items, index, onMove, footerOffset }) => {
  const { width, height } = useWindowDimensions();

  const getFooterOffset = () => { // поменять функционал на класс
    let offset = null;
    if ((width > height) && (height <= 590)) {
      offset = 200
    } else if (width > 1050) {
      offset = 360
    } else if (width <= 1050 && width > 670) {
      offset = 500
    } else if (width <= 670 && width > 480) {
      offset = 430
    } else if (width <= 480) {
      offset = 299
    }
    return offset
  }

const footerOffsetPx = footerOffset ? getFooterOffset() : 0;

    return (
      <div className="scroller">
        <div
          className="scroller__viewport"
          style={{ transform: `translateY(calc(${-index * height}px - ${footerOffsetPx}px))`}}
        >
          <ReactScrollWheelHandler
            upHandler={() => onMove(-1)}
            downHandler={() => onMove(1)}
          >
            {items.map((item, i) => (
              <div
              key={i}
                style={{zIndex: i}}
                className={cx("scroller__item", {
                  "scroller__item--previous": i === index - 1
                })}
              >
                {item}
              </div>
            ))}
          </ReactScrollWheelHandler>
        </div>
      </div>
    );
  };
