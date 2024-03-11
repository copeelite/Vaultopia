import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils"
import Link from "next/link"
const font = Poppins({
    subsets: ['latin'],
    weight: ["600"]
})

interface HeaderProps {
    label: string
}


export const Header = ({ label }: HeaderProps) => {
    return (
        <div className="w-full flex flex-col gap-y-4 items-center">
            <Link href='/'>
            <h1 className={cn(font, "text-3xl font-semibold"
                , font.className
            )} >
                <img
                    className="mx-auto h-10 w-auto  mt-5"
                    src="/kleon.png"
                    alt="kleon Company"
                />
            </h1>
            </Link>
            <p className="text-muted-foreground text-sm">
                {label}
            </p>
        </div>
    )
}