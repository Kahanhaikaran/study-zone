
"use client"

import UseSticky from '@/hooks/UseSticky';
import Link from 'next/link';
import React, { useState } from 'react';
import NavMenu from './NavMenu';
import MarqueeOne from '@/common/MarqueeOne';
import Search from '@/common/Search';
import OffCanvas from '@/common/OffCanvas';

const HeaderOne = () => {

  const { sticky } = UseSticky()


  const [open, setOpen] = useState(false)
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
                                    <img src="assets/img/logo/black-logo.svg" alt="logo-img" />
                                </Link>
                            </div>
                            <div className="mobile-nav-trigger d-lg-none">
                                <button
                                    aria-label="Open navigation"
                                    onClick={() => setOpenCanvas(true)}
                                >
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                            </div>
                        </div>
                        <div className="header-right d-flex justify-content-end align-items-center flex-wrap flex-lg-nowrap gap-3 gap-lg-4">
                            <div className="mean__menu-wrapper d-none d-lg-block">
                                <div className="main-menu">
                                    <nav id="mobile-menu">
                                        <NavMenu />
                                    </nav>
                                </div>
                            </div>
                            <div className="header-button d-none d-lg-flex flex-wrap">
                                <Link href="/sign-in" className="theme-btn style-2"><i className="far fa-user"></i> Admin</Link>
                                <Link href="/register" className="theme-btn yellow-btn">Enroll Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <Search open={open} setOpen={setOpen} />
        <OffCanvas openCanvas={openCanvas} setOpenCanvas={setOpenCanvas} />
      
    </>
  );
};

export default HeaderOne;