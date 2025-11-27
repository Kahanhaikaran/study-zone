
"use client"

import UseSticky from '@/hooks/UseSticky';
import NiceSelect from '@/ui/NiceSelect';
import Link from 'next/link';
import React, { useState } from 'react';
import NavMenu from './NavMenu';
import MarqueeOne from '@/common/MarqueeOne';
import OffCanvas from '@/common/OffCanvas';

const HeaderOne = () => {

  const selectHandler = (e: any) => { };
  const { sticky } = UseSticky()


  const [openCanvas, setOpenCanvas] = useState(false)


  return (
    <>
    <MarqueeOne />
     <header id="header-sticky" className={`header-1 ${sticky ? "sticky" : ""}`}>
            <div className="container-fluid">
                <div className="mega-menu-wrapper">
                    <div className="header-main">
                        <div className="header-left">
                            <div className="logo">
                                <Link href="/" className="header-logo">
                                    <img src="/assets/img/logo/logo-sz.svg" alt="logo-img" />
                                </Link>
                            </div>
                            <div className="category-oneadjust">
                               <div className="dot">
                                    <img src="/assets/img/logo/dot.png" alt="img" />
                               </div> 

                            </div>
                        </div>
                        <div className="header-right d-flex justify-content-end align-items-center">
                            <div className="mean__menu-wrapper">
                                <div className="main-menu">
                                    <nav id="mobile-menu">
                                        <NavMenu />
                                    </nav>
                                </div>
                            </div>
                            <div className="header-button">
                                {/* <Link href="/sign-in" className="theme-btn style-2"><i className="far fa-user"></i> Admin</Link> */}
                                <Link href="/Contact" className="theme-btn yellow-btn">Contact Us</Link>
                            </div>
                            <div className="header__hamburger d-xl-none my-auto">
                                <div className="sidebar__toggle">
                                    <div className="header-bar" onClick={ () => setOpenCanvas(!openCanvas)}>
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

        <OffCanvas openCanvas={openCanvas} setOpenCanvas={setOpenCanvas} />
      
    </>
  );
};

export default HeaderOne;