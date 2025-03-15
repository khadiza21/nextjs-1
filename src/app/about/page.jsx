"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function AboutPage() {
    const router = useRouter();
    const isLoggedIn = false;
  
    const handleNavigation = () => {
      if (isLoggedIn) {
        router.push("/about/address")
      } else {
        router.push("/")
      }
    }
    return (
        <div><p className='font-bold text-3xl'>About Page</p>

            <p><Link className='underline' href="/about/address">Address Page</Link></p>

            <button className='bg-slate-800 text-white p-2 rounded my-3' type="button" onClick={handleNavigation}>Address Page</button>
        </div>
    )
}
