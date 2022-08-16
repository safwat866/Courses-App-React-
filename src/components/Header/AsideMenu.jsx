import React from "react";
import MenuItems from "./MenuItems";
import Logo from "../../assets/f.png";

const AsideMenu = (props) => {
  return (
    <>
      <aside
        className={`left-0 top-0 h-[100vh] w-80 bg-white transition-transregister shadow-lg z-10 fixed md:hidden block m-3 rounded-xl ${
          props.menuOpenState ? "Opened" : "Closed"
        }`}
      >
        <div className="flex items-center">
          <img src={Logo} alt="logo" className="w-20" />
          <h2 className="text-3xl text-slate-900 font-bold p-3 -ml-5">Forsa</h2>
        </div>
        <MenuItems toggleMenuHanlder={props.toggleMenuHanlder} />
      </aside>
      <div
        className={`top-0 left-0 w-full h-[100vh] bg-black/50 z-0 md:hidden ${
          props.menuOpenState ? "fixed" : "hidden"
        }`}
        onClick={props.onMenuToggle}
      ></div>
    </>
  );
};

export default AsideMenu;
