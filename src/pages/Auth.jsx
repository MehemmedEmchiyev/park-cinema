import React from 'react'
import { Outlet } from 'react-router'

function Auth() {
  return (
    <div className='mt-32 pb-10 w-full mx-auto md:w-[90%]'>
        <Outlet />
    </div>
  )
}

export default Auth