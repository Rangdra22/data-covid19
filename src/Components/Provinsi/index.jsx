import React, { useState, useEffect } from "react";
import axios from "axios";
import CardsProv from "../../parts/CardsProv";

export default function Provinsi() {
  const [provinsi, setProvinsi] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoding, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://indonesia-covid-19.mathdro.id/api/provinsi")
      .then((res) => {
        setProvinsi(res.data.data);
        setLoading(false);
      });
  }, []);

  const filteredProv = provinsi.filter((prov) => {
    return prov.provinsi.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="indo-cases mb-2" style={{ fontSize: "32px" }}>
            Indonesia Per Provinsi
          </div>
          {isLoding && <p>Loading...</p>}
        </div>
        <div className="col-md-6 mb-3">
          <input
            class="form-control mr-sm-2"
            type="text"
            placeholder="Cari Provinsi mu..."
            onChange={(e) => setSearch(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="row">
        {filteredProv.map((item, idx) => {
          return <CardsProv key={idx} {...item} />;
        })}
      </div>
    </div>
  );
}
