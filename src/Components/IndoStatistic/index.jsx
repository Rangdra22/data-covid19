import React, { useEffect, useState } from "react";
import Cards from "../../parts/Cards";

const defaultIndo = {
  meninggal: 0,
  sembuh: 0,
  perawatan: 0,
  jumlahKasus: 0,
};
export default function IndoStatistic() {
  const [indo, setIndo] = useState(defaultIndo);
  const [isLoding, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch("https://indonesia-covid-19.mathdro.id/api");
      const result = await response.json();
      setIndo({
        meninggal: result.meninggal,
        sembuh: result.sembuh,
        perawatan: result.perawatan,
        jumlahKasus: result.jumlahKasus,
      });
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div className="container mb-2">
      <div className="row">
        <div className="col-md-12">
          <div className="indo-title" style={{ fontSize: "32px" }}>
            Indonesia Statistic
          </div>
          {isLoding && <p>Loading...</p>}
        </div>
        <Cards
          isCard
          isPrimary
          value={indo.jumlahKasus}
          status="Jumlah Kasus"
        />
        <Cards isCard isSuccess value={indo.sembuh} status="Sembuh" />
        <Cards isCard isWarning value={indo.perawatan} status="Perawatan" />
        <Cards isCard isDanger value={indo.meninggal} status="Meninggal" />
      </div>
    </div>
  );
}
