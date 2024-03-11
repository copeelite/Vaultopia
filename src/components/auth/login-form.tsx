"use client"
import React from 'react'
import { CardWrapper } from '@/components/auth/card-wrapper'
import { useForm } from 'react-hook-form';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from '@/schemas'
import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react';
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from 'next/navigation';
import { FormError } from '@/components/ui/auth/form-error';
import { FormSuccess } from '@/components/ui/auth/form-success'

import { login } from '@/actions/login'
import { useTransition, useState } from "react"
import { useSearchParams } from 'next/navigation';
const LoginForm = () => {
    const searchParams = useSearchParams()
    const urlError = searchParams.get('error') === "OAuthAccountNotLinked" ? "Email already in use with different provider!" : ""
    const [isPending, startTransition] = useTransition()
    const [error, setError] = useState<string | undefined>("")
    const [success, setSuccess] = useState<string | undefined>("")
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const router = useRouter();

    const { toast } = useToast()


    const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
        setError("")
        setSuccess("")
        startTransition(() => {
            login(values)
                .then((data) => {
                    setError(data?.error)
                    //TODO: Add when we add 2FA
                    //setSuccess(data?.success)
                })
        })
    };
    return (
        <CardWrapper
            headerLabel='Sign in to your account
            '
            backButtonLabel="Don't have an account?"
            backButtonHref="/signup"
            showSocial
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='w-full border-gray-300 rounded-lg' >
                    <div className='space-y-2'>
                        <FormField
                            control={form.control}
                            name='email'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder='mail@example.com' {...field}
                                            disabled={isPending}
                                        />
                                    </FormControl>
                                    <div className={`h-5`}>
                                        <FormMessage />
                                    </div>
                                </FormItem>
                            )}
                        />

                    </div>

                    <div>
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
                                            disabled={isPending}
                                            autoComplete='on'
                                        />
                                    </FormControl>
                                    <div className={`h-5`}>
                                        <FormMessage />
                                    </div>
                                </FormItem>
                            )}
                        />
                        <FormError message={error || urlError} />
                        <FormSuccess message={success} />

                    </div>

                    <Button
                        disabled={isPending}
                        type='submit'
                        className='w-full mt-4'>
                        Login
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}

export default LoginForm