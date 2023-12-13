"use client";
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Home from "../Compents/Home/Home";
import Sidebar from "../Compents/Sidebar/Sidebar";
import Header from "../Compents/Header/Header";

const page = () => {

const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

const OpenSidebar = () => {
  setOpenSidebarToggle(!openSidebarToggle);
}

  return(
<div className='grid-container'>
  <Header OpenSidebar={OpenSidebar}/>
  <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
  <Home/>
</div>
  )
}


export default dynamic (() => Promise.resolve(page), {ssr: false})
