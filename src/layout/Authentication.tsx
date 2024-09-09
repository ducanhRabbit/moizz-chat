import React from "react";
import { Outlet } from "react-router-dom";

function Authentication() {
  return (
    <div className='w-screen h-screen relative bg-cover bg-center bg-[url("../src/assets/img/back1.png")] overflow-hidden'>
      <div className="overlay absolute top-0 left-0 w-full h-full bg-black/15 z-0"></div>
        <Outlet />
    </div>
  );
}

export default Authentication;
