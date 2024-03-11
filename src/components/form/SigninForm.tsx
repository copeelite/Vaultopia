"use client";
import { set, useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import GoogleSignInButton from './GoogleSignInButton';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { useToast } from "@/components/ui/use-toast"
import { ArrowLeft } from 'lucide-react';

const FormSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must have than 8 characters'),
});
export default function SigninForm() {

  const router = useRouter();

  const { toast } = useToast()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    const signInData = await signIn('credentials',
      {
        email: values.email,
        password: values.password,
        redirect: false,
      }
    );

    if (signInData?.error) {
      toast({
        title: "Error",
        description: "Oops! Something went wrong. Please try again later.",
        variant: "destructive",
      })
    }
    else {
      toast({
        title: "Success",
        description: "You have successfully signed in.",
        variant: "success",
      })
      // router.push('/admin');
      router.push('/')
      router.refresh();
    }
  };

  return (
    <>
      {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-gray-50">
          <body class="h-full">
          ```
        */}
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link href='/' className='flex flex-row items-center hover:text-indigo-400'>
            <ArrowLeft className='mx-2'/>
            Go Back to Dashboard
          </Link>
          <img
            className="mx-auto h-10 w-auto  mt-5"
            src="/kleon.png"
            alt="kleon Company"
          />
          
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight ">
            Sign in to your account
          </h2>
        </div>

        <div className=" sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className=" px-6 sm:rounded-lg sm:px-12">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className='w-full border border-gray-300 rounded-lg p-6 my-4 ' >
                <div className='space-y-2'>
                  <div >
                    <FormField
                      control={form.control}
                      name='email'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder='mail@example.com' {...field} />
                          </FormControl>
                          <div className={`h-5`}>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />

                  </div>

                  <div >
                    <FormField
                      control={form.control}
                      name='password'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input
                              type='password'
                              placeholder='Enter your password'
                              {...field}
                            />
                          </FormControl>
                          <div className={`h-5`}>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />

                  </div>
                </div>
                <Button className="w-full mt-6 bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline" type='submit'>
                  Sign in
                </Button>
              </form>
              <div className='mx-auto my-4 flex w-full items-center justify-evenly before:mr-4  before:h-px before:flex-grow before:bg-stone-400 after:ml-4  after:h-px after:flex-grow after:bg-stone-400'>
                or
              </div>
              <GoogleSignInButton>Sign in with Google</GoogleSignInButton>
              <p className='text-center text-sm text-gray-600 mt-2'>
                If you don&apos;t have an account, please&nbsp;
                <Link className='text-blue-500 hover:underline' href='/signup'>
                  Sign up
                </Link>
              </p>
              <p className='text-center text-sm text-gray-600 mt-2'>
                Forget password?&nbsp;
                <Link className='text-blue-500 hover:underline' href='/signup'>
                  Reset Here
                </Link>
              </p>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}
