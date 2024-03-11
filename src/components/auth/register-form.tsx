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
import { RegisterSchema } from '@/schemas'
import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react';
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from 'next/navigation';
import { FormError } from '@/components/ui/auth/form-error';
import { FormSuccess } from '@/components/ui/auth/form-success'

import { useTransition, useState } from "react"
import { start } from 'repl';

import { register } from '@/actions/register'

const RegisterForm = () => {
    const [isPending, startTransition] = useTransition()
    const [error, setError] = useState<string | undefined>("")
    const [success, setSuccess] = useState<string | undefined>("")
    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    });

    const router = useRouter();

    const { toast } = useToast()


    const onSubmit = async (values: z.infer<typeof RegisterSchema>) => {
        setError("")
        setSuccess("")
        startTransition(() => {
            register(values)
                .then((data) => {
                    setError(data.error)
                    setSuccess(data.success)
                })
        })
    };
    return (
        <CardWrapper
            headerLabel='Create an account'
            backButtonLabel="Already have an account?"
            backButtonHref="/signin"
            showSocial
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='w-full border-gray-300 rounded-lg' >
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

                    </div>

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
                        <FormError message={error} />
                        <FormSuccess message={success} />

                    </div>

                    <Button
                        disabled={isPending}
                        type='submit'
                        className='w-full mt-4'>
                        Sign up
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}

export default RegisterForm