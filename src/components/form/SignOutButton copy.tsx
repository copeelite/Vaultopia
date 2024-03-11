"use client";
import React from 'react'
import { signOut } from 'next-auth/react';
import { useTranslations } from 'next-intl';

const SignOutButton = () => {

  return (
    <div onClick={() => signOut({
      redirect: true,
      callbackUrl: `${window.location.origin}/`,
    })} className='text-red-500'
    >{"Signout"}</div>
  )
}

export default SignOutButton