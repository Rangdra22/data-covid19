import React from "react";
import { GlobalStatistic, IndoStatistic, Provinsi } from "../../Components";
import Judul from "../../parts/Judul";

export default function Content() {
  return (
    <>
      <Judul />
      <GlobalStatistic />
      <IndoStatistic />
      <Provinsi />
    </>
  );
}
