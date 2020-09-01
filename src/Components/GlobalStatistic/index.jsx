import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "../../parts/Cards";

const defaultGlobal = {
  confirmed: 0,
  recovered: 0,
  deaths: 0,
};

export default function GlobalStatistic() {
  const [global, setGlobal] = useState(defaultGlobal);
  const [isLoding, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get("https://covid19.mathdro.id/api").then((res) => {
      console.log(res);
      setGlobal({
        confirmed: res.data.confirmed,
        recovered: res.data.recovered,
        deaths: res.data.deaths,
      });
      setLoading(false);
    });
  }, []);

  return (
    <div className="container mb-2">
      <div className="row">
        <div className="col-md-12">
          <div className="indo-title" style={{ fontSize: "32px" }}>
            Global Statistic
          </div>
          {isLoding && <p>Loading...</p>}
        </div>
        <Cards
          isCard
          isPrimary
          value={global.confirmed.value}
          status="Jumlah Kasus"
        />
        <Cards value={global.recovered.value} status="Sembuh" />
        <Cards isCard isDanger value={global.deaths.value} status="Meninggal" />
      </div>
    </div>
  );
}
