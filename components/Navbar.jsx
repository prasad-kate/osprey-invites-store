import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <div className="p-3">
      <Image src={"/logo.png"} alt="logo" width={150} height={50} />
    </div>
  );
}

export default Navbar;
