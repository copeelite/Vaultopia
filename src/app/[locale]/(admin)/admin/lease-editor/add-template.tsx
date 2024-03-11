import React from 'react'
import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

import { useAtom } from 'jotai';
import { isAddNewTemplateOpenAtom } from '@/components/states/admin/isAddNewTemplateOpen';

import LeaseTemplateForm from './lease-template-form'


const AddTemplate = () => {

    const [isAddNewTemplateOpen, setNewTemplate] = useAtom(isAddNewTemplateOpenAtom);
    const onClose = () => {
        setNewTemplate(false)
    }

    return (
        <div>
            <Sheet open={isAddNewTemplateOpen} onOpenChange={onClose}>

                <SheetContent className='w-full flex flex-col pr-0 sm:max-w-lg'>
                    <SheetHeader className='space-y-2.5 pr-6'>
                        <SheetTitle>New Template</SheetTitle>
                    </SheetHeader>

                    <>

                        <div className='space-y-4 pr-6'>
                            <Separator />
                            <LeaseTemplateForm />

                            <SheetFooter>
                                {/* <SheetTrigger asChild>
                                    <Link href='/cart'
                                        className={
                                            buttonVariants({
                                                className: 'w-full',
                                            })
                                        }
                                    >
                                        Continue to Checkout
                                    </Link>
                                </SheetTrigger> */}
                            </SheetFooter>

                        </div>
                    </>

                </SheetContent>
            </Sheet>
        </div>
    )
}

export default AddTemplate