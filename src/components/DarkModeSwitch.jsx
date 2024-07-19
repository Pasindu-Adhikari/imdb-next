'use client'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import {MdLightMode, MdDarkMode} from 'react-icons/md'

export default function DarkModeSwitch() {
    const {theme, setTheme, systemThem} = useTheme()
    const [mounted, setMounted] = useState(false)
    useEffect(()=> setMounted(true),[])
    const currentTheme= theme == 'system' ? systemThem:theme
  return (
    <div>{mounted && (currentTheme==='dark' ?
         (<MdLightMode
             onClick={() => setTheme('light')} 
             className='text-xl cursor-pointer hover:text-amber-500'
             />
        ): (
        <MdDarkMode 
        onClick={() => setTheme('dark')} 
        className='text-xl cursor-pointer hover:text-amber-500'
        />
    ))}
    </div>
  )
}
