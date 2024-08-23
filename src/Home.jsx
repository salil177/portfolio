import React from "react";
import Info from "./components/home/Info";
import Social from "./components/home/Social";
import Map from "./components/home/Map";
import Cv from "./components/home/Cv";
import Slider from "./components/home/Slider";
import Tech from "./components/home/Tech";
import Exp from "./components/home/Exp";
import Projects from "./components/home/Projects";
import beauty  from "./assets/beauty.png"
import litmus from './assets/litmus.png'
import sverve from './assets/sverve.png'
import sipl from './assets/sipl.png'
import doft from './assets/doft.png'
import dog from './assets/dog.png'
import fifteen from './assets/15.png'
import dawn from "./assets/dawn.png"

function Home() {
  function mailTo(e) {
    e.preventDefault();
    window.location.href = "mailto:chaudharysalil89@gmail.com";
  }

  return (
    <>
      <div className="md:grid flex flex-col grid-cols-5 gap-4 my-4 md:mt-32 mt-20">
        <div className="w-full col-start-1 col-end-3">
          <Info />
        </div>

        <div className="w-full col-start-3 col-end-6 gap-4 flex flex-col">
          <div className="w-full">
            <Slider />
          </div>

          <div className="md:grid flex flex-col grid-cols-5 gap-4">
            <div className="col-start-1 col-end-3">
              <Map />
            </div>
            <div className="col-start-3 col-end-6 flex flex-col gap-4">
              <Cv />
              <Social img={"email.svg"} link={"#"} mailTo={mailTo} styles={'w-full'} />
            </div>
          </div>
        </div>
      </div>

      <div className="md:grid flex flex-col grid-cols-2 gap-4 my-4">
      <div className=" md:grid flex flex-col grid-cols-2 gap-4">
      <div className="gap-4 flex flex-col">
      <Social
        img={"linkedin.svg"}
        link={"https://www.linkedin.com/in/salil-chaudhary-b7480a158/"}
      />
      <Social img={"github.svg"} link={"/Users/home/Downloads/github.svg"} />
      </div>
      <Tech />
      </div>
      <div>
        <Exp />
      </div>
      </div>

      <div className="md:grid flex flex-col grid-cols-2 gap-4 md:mb-20 mb-10">
      <Projects img={fifteen} link={"https://15percentskin.com/"} title={"15 PERCENTAGE"} />
     <Projects img={litmus} link={"https://litmusindia.in/"} title={"LITMUS"} />
     <Projects img={sverve} link={"https://thesverve.com/"} title={"SVERVE"} />
     <Projects img={beauty} link={"https://beautybybie.com/"} title={"BEAUTY BY BIE"}/>
     <Projects img={doft} link={"https://www.doftcandles.com/"} title={"DOFT CANDLES"} />
     <Projects img={dog} link={"https://www.apetterlife.in/"} title={"A PETTERLIFE"} />
     <Projects img={dawn} link={"https://dawnanddusk.co/"} title={"DAWN AND DUSK"} />
     <Projects img={sipl} link={"https://siplautomotives.com/"} title={"SIPL AUTO"} />
      </div>
    </>
  );
}

export default Home;
