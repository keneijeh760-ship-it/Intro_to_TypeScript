import { headers } from 'next/headers'
import React from 'react'
import Image from 'next/image'

const navbar = () => {
  return (
    <header>
        <nav>
            <link className='logo' href="/" >
            <Image src="/icons/logo.png" alt="Logo" width={24} height={24} />

            <p>DevEvent</p>
            </link>

            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#events">Events</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default navbar
