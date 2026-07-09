import React from "react";
import logoUrl from "../../public/logo.svg";

function Logo({ width = "100px" }) {
  return (
    <div>
      <img height="36" width="60" src={logoUrl} alt="" />
    </div>
  );
}

export default Logo;
