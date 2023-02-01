import "./FirstScreen.scss";
import * as cx from "classnames";
import { ReactComponent as E} from "../../assets/imgs/e.svg";
import { ReactComponent as XIM} from "../../assets/imgs/xim.svg";
import { useState } from "react";
import { useEffect } from "react";

function FirstScreen() {
  const [active, setActive] = useState(false);
  const classLine = cx("firstScreen__lineWrapper", {
    firstScreen__lineWrapper_active: active,
  })

  const classXim = cx("firstScreen__ximWrapper", {
    firstScreen__ximWrapper_active: active,
  })

  const classHeader = cx("firstScreen__header", {
    firstScreen__header_active: active,
  })

  const classItem = cx("firstScreen__item", {
    firstScreen__item_active: active,
  })

  useEffect(() => {
    setTimeout(() => {
      setActive(true)
    }, 300)
  }, [])

    return (
      <div className="firstScreen container">
        <div className="firstScreen_inner container__row">
            <div className="firstScreen_sides">
              <div className="firstScreen__leftSide">
                      <div className={classHeader}>Мы специализируемся на разработке сайтов</div>
                      <div className="firstScreen__list">
                          <span className={classItem}>Мобильные приложения</span>
                          <span className={classItem}>Фирменный стиль</span>
                          <span className={classItem}>Web-разработка</span>
                      </div>
              </div>
              <div className={classLine}>
                 <div className="firstScreen__line"></div>
              </div>
              <div className="firstScreen__rightSide">
                  <div className="firstScreen__eWrapper">
                      <E className="firstScreen__e"/>
                  </div>
                  <div className={classXim}>
                    <XIM className="firstScreen__xim"/>
                  </div>
              </div>
            </div>
        </div>
      </div>
    );
  }  
  export default FirstScreen;
  