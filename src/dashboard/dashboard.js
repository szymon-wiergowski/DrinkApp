import React from "react";

import dashboardImgSmall from "./components/img/image_dashboard_small.png";
import drinkImg from "./components/img/drink.png";
import alcomatImg from "./components/img/alkomat_safety.png";
import mapImg from "./components/img/map_shop.png";
import BarChartHasBackground from "./components/BarChartHasBackground";
import TwoLevelPieChart from "./components/TwoLevelPieChart";
import "../App.css";

export default () => {
  return (
    <div className="frame">
      <div className="dashboard">
        <div className="dashboard__img--display">
          <img src={dashboardImgSmall} alt="Drink" />
        </div>
        <div className="dashboard__card">
          <div className="dashboard__item--main">
            <h1 className="dashboard__title">DrinkApp</h1>
            <h3 className="dashboard__subtitle--display">
              DrinkApp™ to najlepszy przepis
              <br /> na drinki i koktajle
            </h3>
            <h3 className="dashboard__subtitle--display">
              Mapa ze sklepami i alkomat online
            </h3>
          </div>
        </div>
      </div>
      <div className="dashboard__items">
        <div className="dashboard__item">
          <h2 className="dashboard__title--item">DRINKI</h2>
          <h3 className="dashboard__subtitle--item">
            Zastanawiasz się jakie drinki możesz przyrządzić ze składników,
            które posiadasz?
            <br /> Skorzystaj z naszej wyszukiwarki
          </h3>
        </div>
        <div className="dashboard__item--img">
          <img src={drinkImg} alt="Drink" />
        </div>
      </div>
      <div className="dashboard__items--revers">
        <div className="dashboard__item--img">
          <img src={alcomatImg} alt="Alkomat" />
        </div>
        <div className="dashboard__item--right">
          <h2 className="dashboard__title--right">ALKOMAT</h2>
          <h3 className="dashboard__subtitle--right">
            Wypiłeś drinka i nie czy możesz prowadzić? Załóż konto i wypróbuj
            nasz wirtualny alkomat
          </h3>
        </div>
      </div>
      <div className="dashboard__items">
        <div className="dashboard__item">
          <h2 className="dashboard__title--item">MAPA</h2>
          <h3 className="dashboard__subtitle--item">
            Jeśli podczas przygotowywania wybranego przez siebie drinka
            zabraknie Ci składników,
            <br /> skorzystaj z naszej mapy
          </h3>
        </div>
        <div className="dashboard__item--img">
          <img src={mapImg} alt="Mapa" />
        </div>
      </div>
      <div className="dashboard__charts">
        <div className="dashboard__item--none">
          <h2 className="dashboard__title--item">NASZE STATYSTYKI</h2>
          <h3 className="dashboard__subtitle--item">
            Nasza baza danych jest stale powiększana o nowe drinki, przepisy i
            sklepy
          </h3>
        </div>
        <div className="dashboard__item--chart1">
          <h3 className="dashboard__chart1--title">
            Planowana liczba drinków w I kw. 2020 r.
          </h3>
          <BarChartHasBackground />
        </div>
        <div className="dashboard__item--chart2">
          <h3 className="dashboard__chart2--title">
            Udział poszczególnych danych
          </h3>
          <TwoLevelPieChart />
        </div>
      </div>
    </div>
  );
};
