import React from 'react'

const AuthLayout = ({children} : {children:React.ReactNode}) => {
  return (
    <div className='flex justify-center min-h-screen  items-center overflow-auto
    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
    from-slate-200 to-indigo-400 dark:from-slate-600 dark:to-indigo-800'>
        {children}
    </div>
  )
}

export default AuthLayout