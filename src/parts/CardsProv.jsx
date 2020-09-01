import React from "react";

export default function CardsProv(props) {
  return (
    <div className="col-12 col-md-4 col-lg-3 my-3">
      <ul className="list-group">
        <li className="list-group-item active">Provinsi: {props.provinsi}</li>
        <li className="list-group-item">Kasus: {props.kasusPosi}</li>
        <li className="list-group-item">Kasus Sembuh: {props.kasusSemb}</li>
        <li className="list-group-item">Kasus Meninggal: {props.kasusMeni}</li>
      </ul>
    </div>
  );
}
