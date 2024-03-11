import React from 'react'
import Image from 'next/image'
const Education = () => {
    return (
        <div className='overflow-auto h-[90vh]'>
            <div className='flex items-center justify-center'>
                <h1 className='text-2xl font-bold'>Education</h1>
            </div>
            <div>
                <Image
                    src="/education.png"
                    alt="safe"
                    width={1400}
                    height={3000}
                />
            </div>
        </div>
    )
}

export default Education