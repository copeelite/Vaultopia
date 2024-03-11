"use client"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"


import { useMobileSidebar } from "@/hooks/admin/admin-mobile-sidebar"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle} from "@/components/ui/sheet"
import AdminSidebarNav from "@/components/layout/header/admin/AdminSidebarNav"
import { Menu } from "lucide-react"
import { SIDENAV_ADMIN_DASHBOARD as navigationAdminDashboard } from '@/components/layout/header/constants';
import { MenuItemAdmin } from '@/components/layout/header/admin/menuItemAdmin';
import { useCurentRole } from '@/hooks/auth/use-current-role'
import { useAtom } from "jotai";
import { accordionSelectedNameAtom } from "@/components/states/auth/isAccordionOpenAtom";
import Link from "next/link"
import { cn } from "@/lib/utils"
export const AdminMobileSidebar = () => {
    const pathname = usePathname()
    const [isMounted, setIsMounted] = useState(false)
    const onOpen = useMobileSidebar(state => state.onOpen)
    const onClose = useMobileSidebar(state => state.onClose)
    const isOpen = useMobileSidebar(state => state.isOpen)
    const role = useCurentRole()
    const [selectedPathName] = useAtom(accordionSelectedNameAtom);

    useEffect(() => {
        setIsMounted(true)
    }, [])
    useEffect(() => {
        onClose()
    }, [pathname, onClose])

    if (!isMounted) return null
    return (
        <>
            <Button onClick={onOpen} className="block lg:hidden"
                variant={"ghost"} size={"sm"}
            >
                <Menu />
            </Button>
            <Sheet open={isOpen} onOpenChange={onClose}>
                <SheetContent side={'left'}
                    className="p-2"
                >
                    <SheetHeader>
                        <SheetTitle>
                            <div className=" relative z-10 flex px-2 mb-4 w-[200px]">
                                <Link href={'/dashboard'}>
                                    <div className="flex flex-shrink-0">
                                        <img
                                            className="block h-12 w-auto"
                                            src="/kleon.png"
                                            alt="Kleon"
                                        />
                                        <h1 className='mx-2'>Kleon Admin</h1>
                                    </div>
                                </Link>
                            </div>
                        </SheetTitle>
                    </SheetHeader>
                    <div className={cn("grow flex-col px-2h-screen flex")}>

                        <div className='max-h-screen overflow-y-scroll pb-20' >
                            <nav className="flex flex-1 flex-col">
                                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                    <li>
                                        <div role="list" className="space-y-1">
                                            {role == 'ADMIN' &&
                                                navigationAdminDashboard.map((item, idx) => {
                                                    return <MenuItemAdmin key={idx} item={item} identifier={item.name + role} />;
                                                })
                                            }
                                        </div>
                                    </li>

                                </ul>
                            </nav>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
            <h1>{selectedPathName}</h1>
        </>
    )
}