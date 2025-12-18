import React from 'react'
import { IoShareSocialSharp } from "react-icons/io5";
import { MdOutlineDarkMode } from "react-icons/md";


export default function NavbarComponent() {
  return <>
    <div className="w-full bg-gray-950 text-white flex items-center justify-between p-4">
        <div className="brand flex items-center gap-1.5 text-xl">
            <IoShareSocialSharp/>
            <span>Linkly</span>
        </div>
        <div className="links hidden md:block">
            <ul className='flex items-center gap-4'>
                <li>Feed Page</li>
                <li>Profile</li>
            </ul>
        </div>
        <div className="actions">
            <MdOutlineDarkMode className='text-xl' />
        </div>
    </div>
    <div className="w-full bg-gray-950/90 text-white px-4 py-3 block md:hidden">
        <div className="links">
            <ul className='flex items-center gap-4 font-medium'>
                <li>Feed Page</li>
                <li>Profile</li>
            </ul>
        </div>
    </div>
  </>
}
