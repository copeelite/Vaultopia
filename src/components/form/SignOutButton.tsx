"use client";
import React from 'react'
import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';
import { useTranslations } from 'next-intl';

const SignOutButton = () => {
  const t = useTranslations('Navigation');

  return (
    <div onClick={() => signOut({
      redirect: true,
      callbackUrl: `${window.location.origin}/`,
    })} className='text-red-500'
    >Signout</div>
  )
}

export default SignOutButton