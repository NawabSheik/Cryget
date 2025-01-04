"use client";

import React from 'react'
import { useRouter } from 'next/navigation';

const page = () => {

    const router=useRouter();

    const gotoOnboarding=()=>{
        router.push('/onboarding')
    }

    return (
        <div className="main-landing-section">
            <div className="landing-section">
            <h1 className="intro-text">
            Crypto Payment Gateway for Bitcoin, Stablecoins & More
            </h1>
        
            
            </div>
            <button onClick={(gotoOnboarding)} className="landing-section-button">
                Go to Onboarding
            </button>
        
        </div>
  )
}

export default page