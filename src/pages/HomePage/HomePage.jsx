import "./HomePage.scss";
import FirstScreen from "../../components/FirstScreen/FirstScreen";
import About from "../../components/About/About";
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo";
import Cases from "../../components/Cases/Cases";
import Stages from "../../components/Stages/Stages";
import Reviews from "../../components/Reviews/Reviews";
import Contacts from "../../components/Contacts/Contacts";
import OurTeam from "../../components/OurTeam/OurTeam";
import { Scroller } from "../../components/Scroller/Scroller";

function HomePage({
  index,
  onMove,
  footerOffset,
  header,
  footer
}) {
  return (
    <main className="homePage">
      <Scroller
        items={[
          <FirstScreen />,
          <About
            id="about"
            header={header}
          />,
          <WhatWeDo id="what-we-do" header={header} index={index} />,
          <Cases id="portfolio" header={header} />,
          <Stages id="stages" header={header} />,
          <OurTeam id="our-team" header={header} />,
          <Reviews id="reviews" header={header} />,
          <Contacts id="contacts" header={header} />
        ]}
        index={index}
        onMove={onMove}
        footerOffset={footerOffset}
      />
      {index > 6 && footer('fixed', true)}
    </main>
  );
}

export default HomePage;
