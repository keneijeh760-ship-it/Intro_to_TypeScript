'use-client'
import React from 'react'
import Image from 'next/image'


const explorebtn = () => {
  return (
    <button type="button" id="explore-btn"  className="mt-7 mx-auto "onClick={() => console.log('CLICKED')}>
      <a href="#explore">
        Explore Events
        <Image src="/icon/arrow=down.svg" alt="arrow" width={24} height={24} />
      </a>
      ExploreBtn

    </button>
  )
}

export default explorebtn
