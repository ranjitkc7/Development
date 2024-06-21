"use client"
import React from 'react'
import Link from 'next/link'
import { IoLocationOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoNotificationsOutline } from "react-icons/io5";


const Navbar = () => {
  return (
 <nav className='flex items-ceneter justify-between p-2 bg-black text-white rounded-t-lg
  w-full border-b-2 border-slate-400 px-4'>
  <div className='text-2xl font-bold text-slate-50'>
    <p>JoB</p>
    <p>HuntinG</p>
  </div>
  <div className='flex gap-[2rem] text-2xl py-3'>
    <Link href={'#'} className='hover:text-yellow-400 rounded-md hover:bg-orange-200 p-1'>Find Job</Link>
    <Link href={'#'} className='hover:text-yellow-400 rounded-md hover:bg-orange-200 p-1'>Service</Link>
    <Link href={'#'} className='hover:text-yellow-400 rounded-md hover:bg-orange-200 p-1'>Hiring</Link>
    <Link href={'#'} className='hover:text-yellow-400 rounded-md hover:bg-orange-200 p-1'>Message</Link>
    <Link href={'#'} className='hover:text-yellow-400 rounded-md hover:bg-orange-200 p-1'>Blog</Link>
  </div> 
  <div className='flex gap-1 py-3'>
    <IoLocationOutline className="h-7 w-7 " />
    <p className='text-2xl font-semibold'>Pokhara,Nepal</p>
  </div>
  <div className='flex gap-3 px-2 py-3'>
     <IoSettingsOutline  className='h-7 w-7'/>
     <CgProfile  className='h-7 w-7'/>
     <IoNotificationsOutline  className='h-7 w-7'/>
  </div>
 </nav>
  )
}

export default Navbar