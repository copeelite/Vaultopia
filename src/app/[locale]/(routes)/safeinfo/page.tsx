import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div>
      <h1>safety & criminal info</h1>

      <Image
        src="/safeinfo.jpg"
        alt="safe"
        width={1400}
        height={1000}
         />

    </div>
  )
}

export default page