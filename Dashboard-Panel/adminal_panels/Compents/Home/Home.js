"use client";
import React from "react";
import dynamic from "next/dynamic";
import {AiOutlineArrowDown, AiOutlineArrowUp , AiOutlineDollarCircle} from "react-icons/ai";
import  {BiSolidWallet, BiShoppingBag} from "react-icons/bi";
import {CgNotes} from "react-icons/cg"
import { BarChart, Bar, XAxis, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Home = () => {
  
  const data = [
    {
      name: 'Jan',
      pv: 2500,
      amt: 2400,
    },
    {
      name: 'Feb',
      pv: 1500,
      amt: 2210,
    },
    {
      name: 'Mar',
      pv: 3800,
      amt: 2290,
    },
    {
      name: 'Apr',
      pv: 2800,
      amt: 2000,
    },
    {
      name: 'May',
      pv: 3100,
      amt: 2181,
    },
    {
      name: 'Jun',
      pv: 1000,
      amt: 2500,
    },
    {
      name: 'July',
      pv: 3200,
      amt: 2100,
    },
    
    {
      name: 'Aug',
      pv1: 4000,
      amt: 2100, 
    },
    {
      name: 'Sep',
      pv: 3800,
      amt: 2100,
    },
    {
      name: 'Oct',
      pv: 2800,
      amt: 2100,
    },
    {
      name: 'Nov',
      pv: 2600,
      amt: 2100,
    },
    {
      name: 'Dec',
      pv: 2800,
      amt: 2100,
    },
  ];
  
  const data1 = [
    { name: 'Group A', value: 250 },
    { name: 'Group B', value: 400 },
    { name: 'Group C', value: 500 },
  ];
  const COLORS = ['#F53A95', '#E6DBF9', '#8053F0'];

    return(  
    <main className="main-container">
<div className="main-title">
</div>
<div className="main-cards">
    <div className="card">
    <div className="card-inner">
        <h3>Earning</h3>
        <AiOutlineDollarCircle className="card_icon" style={{backgroundColor:"#D9FFE8",  color: "#4CC482", border:"1px solid #D9FFE8"}}/>
    </div>
    <h1>$198k</h1>
    <h3><span style={{color:"green", fontWeight: "700"}}><AiOutlineArrowUp/>37.8%</span> this month</h3>
    </div>

    <div className="card">
    <div className="card-inner">
        <h3>Orders</h3>
        <CgNotes className="card_icon" style={{backgroundColor:"#E4DDFD", color: "#AF6FD6", border:"1px solid #E4DDFD"}}/>
    </div>
    <h1>$2.4k</h1>
    <h3><span style={{color:"red", fontWeight: "700"}}><AiOutlineArrowDown/>2%</span> this month</h3>
    </div>

    <div className="card">
    <div className="card-inner">
        <h3>Balance</h3>
        <BiSolidWallet className="card_icon" style={{backgroundColor:"#CEF1FE", color: "#3D77AE", border:"1px solid #CEF1FE"}}/>
    </div>
    <h1>$2.4k</h1>
    <h3><span style={{color:"red", fontWeight: "700"}}><AiOutlineArrowDown/>2%</span> this month</h3>
    </div>

    <div className="card">
    <div className="card-inner">
        <h3>Total Sales</h3>
        <BiShoppingBag className="card_icon" style={{backgroundColor:"#FCC0E4", color: "#BC1A31", border:"1px solid #FCC0E4"}}/>
    </div>
    <h1>$89k</h1>
    <h3><span style={{color:"green", fontWeight: "700"}}><AiOutlineArrowUp/>11%</span> this week</h3>
    </div>
</div>

<div className="chartes">
<div className="chart-container">
<h1>Overview</h1>
<h3>Monthly Earning</h3>
<select id="days" defaultValue="Quarterly">
  <option value="Quarterly">Quarterly</option>
  <option value="Monthly">Monthly</option>
  <option value="Weekly">Weekly</option>
  <option value="Yearly">Yearly</option>
</select>

<div className="charts">
<ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            right: 30,
            bottom: 10,
          }}
        >
           <XAxis dataKey="name" />
                 <Bar dataKey="pv" stackId="a" fill="#E6DBF9"/>
                 <Bar dataKey="pv1" stackId="a" fill="#5D42B5" />
                 
                  
        </BarChart>
      </ResponsiveContainer>
      
</div>
</div>

<div className="pie-chart-container">
<h1>Customers</h1>
<h3>Customers that buy products</h3>
<p>65%</p>
<span>Total News Customers</span>
<div className="pie-chart">
        <PieChart width={800} height={400} >
               <Pie
                 data={data1}
                 cx={120}
                 cy={200}
                 innerRadius={75}
                 outerRadius={120}
                 paddingAngle={0}
                 dataKey="value"
               >
                 {data1.map((entry, index) => (
                   <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                 ))}
               </Pie>
             </PieChart>
           </div>


</div>
</div>
    </main>
    
    )
}

export default dynamic (() => Promise.resolve(Home), {ssr: false})
