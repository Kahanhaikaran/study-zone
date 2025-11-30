"use client";

import UseSticky from "@/hooks/UseSticky";
import Link from "next/link";
import React, { useState } from "react";
import NavMenu from "./NavMenu";
import MarqueeOne from "@/common/MarqueeOne";
import OffCanvas from "@/common/OffCanvas";

const HeaderOne = () => {
  const { sticky } = UseSticky();
  const [openCanvas, setOpenCanvas] = useState(false);

  return (
    <>
      {/* Top Scrolling Bar */}
      <MarqueeOne />

      <header
        id="header-sticky"
        className={`header-1 ${sticky ? "sticky" : ""}`}
      >
        <div className="container-fluid">
          <div >
            <div className="header-main d-flex align-items-center justify-content-between">

              {/* LEFT SECTION - LOGO */}
              <div className="header-left d-flex align-items-center">
                <div
                  className="logo"
                  style={{
                    width: "auto",
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "5px",
                    marginRight: "auto",
                  }}
                >
                  <Link href="/" className="header-logo">
                    <img
                      src="/assets/img/logo/logo.png"
                      alt="My Shiksha Sagar Logo"
                      className="logo-image"
                    />
                  </Link>
                </div>
              </div>

              {/* RIGHT SECTION */}
              <div className="header-right d-flex align-items-center gap-4">

                {/* MAIN MENU */}
                <div className="main-menu d-none d-xl-block">
                  <nav id="mobile-menu">
                    <NavMenu />
                  </nav>
                </div>

                {/* CONTACT BUTTON */}
                <div className="header-button d-none d-xl-block">
                  <Link href="/contact" className="theme-btn yellow-btn">
                    Contact Us
                  </Link>
                </div>

                {/* MOBILE HAMBURGER */}
                <div className="header__hamburger d-xl-none">
                  <div className="sidebar__toggle">
                    <div
                      className="header-bar"
                      onClick={() => setOpenCanvas(!openCanvas)}
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <OffCanvas openCanvas={openCanvas} setOpenCanvas={setOpenCanvas} />
    </>
  );
};

export default HeaderOne;
