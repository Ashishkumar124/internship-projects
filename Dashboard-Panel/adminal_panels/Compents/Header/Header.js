"use client"
import React from "react";
import dynamic from "next/dynamic";
import {BsJustify, BsSearch} from "react-icons/bs";
import Form from 'react-bootstrap/Form';

const Header = ({OpenSidebar}) => {
    return( 
    <header className="header">
<div className="menu-icon">
    <BsJustify className="icon" onClick={OpenSidebar}/> 
</div>

<div className="header-close">X</div>

<p className="p">Hello Ashish&#128075;&#127995;</p>

<div>
<BsSearch className="search-icon"/>
<Form.Control
  type="text"
  placeholder="Search"
  className="search"
/>
</div>
         
    </header>
    )
}

export default dynamic (() => Promise.resolve(Header), {ssr: false})


