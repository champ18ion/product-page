import React from 'react'

export default function Footer({Children}) {
  return (
    <div className='absolute w-full bg-white bottom-0 rounded-t-3xl flex flex-col' style={{boxShadow: '0px -2px 7px rgba(0, 0, 0, 0.1)'}}>
        {Children}
    </div>
  )
}
