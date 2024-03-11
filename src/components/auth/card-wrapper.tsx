"use client";

import {
    Card,
    CardContent,
    CardHeader,
    CardFooter,

} from "@/components/ui/card";
import { Header } from "@/components/auth/header"
import { Social } from "@/components/auth/social"
interface CardWrapperProps {
    children: React.ReactNode
    headerLabel: string
    backButtonLabel: string
    backButtonHref: string
    showSocial?: boolean
}
import {BackButton} from '@/components/auth/back-button'

export const CardWrapper: React.FC<CardWrapperProps> = ({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial }) => {
    return (
        <Card className="min-[400px]:w-[400px] shadow-md w-[300px] overflow-auto">
            <CardHeader>
                <Header label={headerLabel} />
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {showSocial && (
                <CardFooter>
                    <Social />
                </CardFooter>
            )}
            <CardFooter>
                <BackButton
                label={backButtonLabel}
                href={backButtonHref}
                />
            </CardFooter>
        </Card>
    )
}


