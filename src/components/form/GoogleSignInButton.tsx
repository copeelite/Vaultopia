"use client";
import { FC, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';

interface GoogleSignInButtonProps {
  children: ReactNode;
}
const GoogleSignInButton: FC<GoogleSignInButtonProps> = ({ children }) => {
  const loginWithGoogle = () => signIn('google', { callbackUrl: 'http://localhost:3000/en/' });
  return (
    <Button onClick={loginWithGoogle} className='w-full bg-white text-gray-600 hover:bg-gray-100 
    shadow-md flex items-center justify-center 
    border border-gray-300 rounded-md'
    >
      <img
        src="../google-logo.png"
        alt="Google sign-in"
        className="mr-3 h-6 sm:h-9"
      />
      {children}
    </Button>
  );
};

export default GoogleSignInButton;
