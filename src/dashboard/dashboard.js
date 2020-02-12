import React from "react";

import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import dashboardImg from "./components/img/drink.png"; 
import alcomatImg from "./components/img/alkomat_safety.png";
import mapImg from "./components/img/map_shop.png";

import BarChartHasBackground from "./components/BarChartHasBackground";
import TwoLevelPieChart from "./components/TwoLevelPieChart";
import "../App.css";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

export default () => {
  const classes = useStyles();

  return (
    <div className="frame">
      <div className="dashboard">
        <div className="dashboard__card">
          <div className="dashboard__item--main">
            <h1 className="dashboard__title">DrinkApp</h1>
            <h3 className="dashboard__subtitle">
              DrinkApp™ to najlepszy przepis<br/> na drinki i koktajle
            </h3>
            <h3 className="dashboard__subtitle">
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
            które posiadasz? Skorzystaj z naszej wyszukiwarki
          </h3>
        </div>

        <div className="dashboard__item--img">
          <img src={dashboardImg} alt="Drink" />
        </div>
      </div>
      <div className="dashboard__items">
        <div className="dashboard__item--img">
          <img src={alcomatImg} alt="Alkomat" />
        </div>
        <div className="dashboard__item">
          <h2 className="dashboard__title--item">ALKOMAT</h2>
          <h3 className="dashboard__subtitle--item">
            Wypiłeś drinka i nie czy możesz prowadzić? Załóż konto i wypróbuj nasz wirtualny alkomat
          </h3>
        </div>
      </div>
      <div className="dashboard__items">
        <div className="dashboard__item">
          <h2 className="dashboard__title--item">MAPA</h2>
          <h3 className="dashboard__subtitle--item">
            Jeśli podczas przygotowywania wybranego przez siebie drinka
            zabraknie Ci składników,<br/> skorzystaj z naszej mapy
          </h3>
        </div>
        <div className="dashboard__item--img">
          <img src={mapImg} alt="Mapa" />
        </div>
      </div>
      <div className="dashboard__charts">
        <div className="dashboard__item">
          <h2 className="dashboard__title--item">NASZE STATYSTYKI</h2>
          <h3 className="dashboard__subtitle--item">
            Nasza baza danych jest stale powiększana nowe drinki, składniki czy sklepy
          </h3>
        </div>
        <div className="dashboard__items--charts">
          <BarChartHasBackground />
          <TwoLevelPieChart />
        </div>
      </div>
    </div>
  );
};
