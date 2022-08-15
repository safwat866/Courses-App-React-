import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import Nav from "./Nav";
import AsideMenu from "./AsideMenu";
import { AppContext } from "../../context/appContext";
import Popup from "../Popup/Popup";
import Btn from "../UI/Btn";

const Header = (props) => {
  const [menuIsOpened, setMenuIsOpened] = useState(false);
  const [popupIsOpened, setPopupIsOpened] = useState(false);
  const ctx = useContext(AppContext);
  const location = useLocation();

  const HandleToggleMenu = () => {
    setMenuIsOpened((prev) => !prev);
    console.log("hello");
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [window.scroll]);

  const scrollHandler = () => {
    if (window.scrollY >= 200) {
      ctx.updateHeaderIsScrolled("scrolled");
    } else {
      ctx.updateHeaderIsScrolled("not yet");
    }
  };

  const toggleMenuHanlder = () => {
    setPopupIsOpened((prevState) => !prevState);
  };

  useEffect(() => {
    setPopupIsOpened(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 w-full z-20 border-b-[1px] border-gray-600 transition-all duration-300 ${
        ctx.headerIsScrolled
          ? "bg-white text-black shadow-lg "
          : "bg-slate-primary text-white "
      }${ctx.headerIsScrolled ? "md:py-3" : "md:py-4"}`}
    >
      <div className="container">
        <div className="flex items-center px-4">
          <div aria-label="logo" className="mr-4">
            <Link to="/">
              <h1 className="md:text-4xl text-2xl font-bold tracking-wide mr-2">
                Forsa
              </h1>
            </Link>
          </div>
          <div
            aria-label="main navigation"
            className="flex flex-1 justify-end md:justify-between items-center"
          >
            <Nav
              onMenuToggle={HandleToggleMenu}
              isScrolled={ctx.headerIsScrolled}
            />
            <button
              className="btn !rounded-full !px-6 !py-2 ml-2 md:block hidden"
              onClick={toggleMenuHanlder}
            >
              Getting Started!
            </button>
          </div>
        </div>
      </div>
      <AsideMenu
        menuOpenState={menuIsOpened}
        onMenuToggle={HandleToggleMenu}
        toggleMenuHanlder={toggleMenuHanlder}
      />
      {popupIsOpened && (
        <Popup toggleMenu={toggleMenuHanlder}>
          <div className="text-black">
            <h3 className="text-3xl font-bold text-center mb-10">
              What do you want to do!
            </h3>
            <div className="flex">
              <Btn
                href="/form?target=upload%20course"
                className="!rounded-lg flex-1 md:m-3 m-1 text-center flex items-center justify-center text-sm"
              >
                Upload Course
              </Btn>
              <Btn
                href="/form?target=upload%internship"
                className="!rounded-lg flex-1 md:m-3 m-1 text-center flex items-center justify-center text-sm"
              >
                Upload Internship
              </Btn>
            </div>
          </div>
        </Popup>
      )}
    </header>
  );
};

export default Header;

// max-width: 320px;
//     width: 100%;
