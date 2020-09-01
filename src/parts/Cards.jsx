import React from "react";

export default function Cards(props) {
  const className = [props.className];
  if (props.isPrimary) className.push("bg-primary");
  if (props.isDanger) className.push("bg-danger");
  if (props.isSuccess) className.push("bg-success");
  if (props.isWarning) className.push("bg-warning");
  if (props.isCard) className.push("card");
  return (
    // <div className="col-12 col-md-2 col-lg-3 mb-3 text-center">
    //   <div className={className.join(" ")}>
    //     <div className="card-body">
    //       <h5 className="card-title text-white">
    //         <i class="fas fa-angle-up"></i>
    //         {props.value}
    //       </h5>
    //       <h6 className="card-text">{props.status}</h6>
    //     </div>
    //   </div>
    // </div>
    <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-left-primary shadow h-100 py-2">
        <div class="card-body">
          <div class="row no-gutters align-items-center">
            <div class="col mr-2">
              <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                {props.status}
              </div>
              <div class="h5 mb-0 font-weight-bold text-gray-800">
                {props.value}
              </div>
            </div>
            <div class="col-auto">
              <i class="fas fa-calendar fa-2x text-gray-300"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
