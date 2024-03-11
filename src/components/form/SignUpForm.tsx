'use client';

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
import { useRouter } from 'next/navigation';
import GoogleSignInButton from './GoogleSignInButton';
import { useToast } from "@/components/ui/use-toast"
import { ArrowLeft } from 'lucide-react';

const FormSchema = z
  .object({
    username: z.string().min(1, 'Username is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must have than 8 characters'),
    confirmPassword: z.string().min(1, 'Password confirmation is required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Password do not match',
  });

const SignUpForm = () => {
  const router = useRouter();
  const { toast } = useToast()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: values.username,
        email: values.email,
        password: values.password,
      }),

    });

    if (response.ok) {

      toast({
        title: "Great!",
        description: "You have successfully signed up. Please sign in to continue.",
        variant: "success",
      })
      setTimeout(() => {
        router.push('/signin');
      }
        , 1000);
      //router.push('/sign-in');
    }
    else {
      toast({
        title: "Error",
        description: "Oops! Something went wrong. Please try again later.",
        variant: "destructive",
      })
    }

  };

  return (

    <div className="flex justify-center items-center">
      <div className="w-full max-w-lg mx-auto p-6 rounded-lg shadow-md">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">

          <Link href='/' className='flex flex-row items-center  hover:text-indigo-400'>
            <ArrowLeft className='mx-2' />
            Go Back to Dashboard
          </Link>
          <img
            className="mx-auto h-10 w-auto mt-5"
            src="/kleon.png"
            alt="kleon Company"
          />

          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight ">
            Create an new account
          </h2>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='w-full border border-gray-300 rounded-lg p-6 my-4'>
            <div className='space-y-2'>
              <FormField
                control={form.control}
                name='username'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder='William' {...field} />
                    </FormControl>
                    <div className={`h-5`}>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
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
              <FormField
                control={form.control}
                name='confirmPassword'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Re-Enter your password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Re-Enter your password'
                        type='password'
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
            <Button className="w-full mt-6 bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline" type='submit'>
              Sign up
            </Button>
          </form>
          <div className='mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:h-px before:flex-grow before:bg-stone-400 after:ml-4  after:h-px after:flex-grow after:bg-stone-400'>
            or
          </div>
          <GoogleSignInButton>Sign up with Google</GoogleSignInButton>
          <p className='text-center text-sm text-gray-600 mt-2'>
            If you already have an account, please&nbsp;
            <Link className='text-blue-500 hover:underline' href='/signin'>
              Sign in
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default SignUpForm;
