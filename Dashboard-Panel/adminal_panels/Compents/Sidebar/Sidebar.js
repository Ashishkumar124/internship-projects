import React from "react";
import dynamic from "next/dynamic";
import { TbSquareKey } from "react-icons/tb";
import { MdDashboardCustomize } from "react-icons/md";
import { MdOutlineLiveHelp } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { BsFillBoxFill } from "react-icons/bs";
import { BsPersonSquare } from "react-icons/bs";
import { BiSolidWalletAlt } from "react-icons/bi";
import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";

const Sidebar = ({openSidebarToggle, OpenSidebar}) => {
    return( 
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
<div className="sidebar-title">
<div className="sidebar-brand">
<MdDashboardCustomize className="icon_header"/> Dashboard
</div>
<span className="icon close_icon" onClick={OpenSidebar}>X</span>
</div>

<ul className="sidebar-list">
    <li className="sidebar-list-item">
<a href="#">
    <TbSquareKey/> Dashboard
</a>
    </li>

    <li className="sidebar-list-item">
<a href="#">
    <BsFillBoxFill/> Product <span><AiOutlineRight style={{marginLeft: "90px"}}/></span>
</a>
    </li>

    <li className="sidebar-list-item">
<a href="#">
    <BsPersonSquare/> Customers <span><AiOutlineRight style={{marginLeft: "67px"}}/></span>
</a>
    </li>

    <li className="sidebar-list-item">
<a href="#">
    <BiSolidWalletAlt/> Income <span><AiOutlineRight style={{marginLeft: "92px"}}/></span>
</a>
    </li>

    <li className="sidebar-list-item">
<a href="#">
    <BiSolidOffer/> Pramate <span><AiOutlineRight style={{marginLeft: "83px"}}/></span>
</a>
    </li>

    <li className="sidebar-list-item">
<a href="#">
    <MdOutlineLiveHelp/> Help <span><AiOutlineRight style={{marginLeft: "109px"}}/></span>
</a>
    </li>
</ul>

<ul className="sidebar-list-1">
<li className="sidebar-list-item-1">
<a href="#">
    <img src="https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg"></img>  
    <h2>Ashish</h2>
    <span> <AiOutlineDown/></span>
    <h3>Project Manager</h3>
</a>
    </li>
</ul>
    </aside>
    )
}

export default dynamic (() => Promise.resolve(Sidebar), {ssr: false})
