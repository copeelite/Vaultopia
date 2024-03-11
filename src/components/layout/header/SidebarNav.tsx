"use client";
import Link from 'next/link';
import { Disclosure } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { cn as classNames } from '@/lib/utils';
import { SIDENAV_ITEMS as navigation, SIDENAV_ITEMS_ADMIN as navigationAdmin } from './constants';
import { SideNavItem } from './types';
import { UserRoundCog } from 'lucide-react';


import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils'

import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

import { useAtom } from "jotai";
import { disclosureOpenStateAtom } from "@/components/states/isDisclosureOpenAtom";
import { set } from 'date-fns';
import { Badge } from "@/components/ui/badge"
import { useCurentRole } from '@/hooks/auth/use-current-role'

export default function SidebarNav() {
    const currentPath = usePathname();

    const locale = useLocale();
    const [subMenuOpen, setSubMenuOpen] = useAtom(disclosureOpenStateAtom);
    const toggleSubMenu = () => {
        setSubMenuOpen(!subMenuOpen);
    };

    const isActiveLink = (href: string | undefined, currentPath: string, locale: string) => {
        const fullPath = href === '/' ? `/${locale}` : `/${locale}${href}`;
        return fullPath === currentPath;
    };
    const role = useCurentRole()



    return (
        <div className={cn("grow flex-col  border-r-2 border-black dark:border-white  px-2 w-[256px] h-screen lg:flex hidden ")}>
            <div className="flex h-10 shrink-0 items-center">
                <h1 className='text-indigo-500 font-bold'>MAIN MENU</h1>
            </div>
            <div className='max-h-screen overflow-y-scroll pb-20' >
                <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                            <div role="list" className="space-y-1">
                                {navigation.map((item, idx) => {
                                    return <MenuItem key={idx} item={item} identifier={item.name} />;
                                })}
                                {role == 'ADMIN' &&
                                    navigationAdmin.map((item, idx) => {
                                        return <MenuItem key={idx} item={item} identifier={item.name + role} />;
                                    })
                                }
                            </div>
                        </li>

                    </ul>
                </nav>
            </div>
            {/* <div className='max-h-screen overflow-y-scroll pb-20' >
                <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                            <ul role="list" className=" space-y-1">
                                {navigation.map((item) => (
                                    <li key={item.name}>
                                        {!item.children ?
                                            // Without children
                                            (
                                                <Link
                                                    href={item.href || '/'}
                                                    className={classNames(
                                                        isActiveLink(item.href, currentPath, locale) ? 'dark:text-indigo-400 text-indigo-700' : 'hover:bg-gray-50 hover:text-black',
                                                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold '
                                                    )}
                                                >
                                                    <item.icon className="h-6 w-6 shrink-0 " aria-hidden="true" />
                                                    {item.name}
                                                </Link>
                                            )
                                            :
                                            //With children
                                            // (
                                            //     <Disclosure as="div"
                                            //     // onClick={toggleSubMenu}
                                            //     // defaultOpen={subMenuOpen}
                                            //     >
                                            //         {({ open }) => (
                                            //             <>
                                            //                 <Disclosure.Button
                                            //                     className={classNames(
                                            //                         currentPath.includes(item.href)
                                            //                             ? 'text-indigo-700 dark:text-indigo-400' : 'hover:bg-gray-50 hover:text-black',
                                            //                         'flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold'
                                            //                     )}

                                            //                 >
                                            //                     {subMenuOpen ? '▼' : '▶'}
                                            //                     <item.icon className="h-6 w-6 shrink-0 " aria-hidden="true" />
                                            //                     {item.name}
                                            //                     <ChevronRightIcon
                                            //                         className={classNames(
                                            //                             open ? 'rotate-90 text-gray-500' : 'text-gray-400',
                                            //                             'ml-auto h-5 w-5 shrink-0',
                                            //                             item.current ? 'text-indigo-500' : ''
                                            //                         )}
                                            //                         aria-hidden="true"
                                            //                     />
                                            //                 </Disclosure.Button>
                                            //                 <Disclosure.Panel as='ul' className="mt-1 px-2">
                                            //                     {item.children?.map((subItem) => (

                                            //                         <li key={subItem.name} className='w-full'>
                                            //                             <button className={classNames(
                                            //                                 currentPath.endsWith(subItem.href) ? 'bg-indigo-50 text-indigo-700 font-bold' : 'hover:bg-gray-50 hover:text-gray-700',
                                            //                                 'w-full'
                                            //                             )}


                                            //                             >
                                            //                                 <Link href={item.href! + subItem.href} className='block rounded-md py-2 px-2 text-sm w-full text-center'>

                                            //                                     {subItem.name}

                                            //                                 </Link>
                                            //                             </button>
                                            //                         </li>

                                            //                     ))}
                                            //                 </Disclosure.Panel>
                                            //             </>
                                            //         )}
                                            //     </Disclosure>
                                            // )
                                            (
                                                <>
                                                    <button
                                                        onClick={toggleSubMenu}
                                                        className={classNames(
                                                            currentPath.includes(item.href)
                                                                ? 'text-indigo-700 dark:text-indigo-400' : 'hover:bg-gray-50 hover:text-black',
                                                            'flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold'
                                                        )}
                                                    >
                                                        <item.icon className="h-6 w-6 shrink-0 " aria-hidden="true" />
                                                        {item.name}
                                                        <ChevronRightIcon
                                                            className={classNames(
                                                                subMenuOpen ? 'rotate-90 text-gray-500' : 'text-gray-400',
                                                                'ml-auto h-5 w-5 shrink-0',
                                                                item.current ? 'text-indigo-500' : ''
                                                            )}
                                                            aria-hidden="true"
                                                        />
                                                    </button>

                                                    {subMenuOpen && (
                                                        <ul className="mt-1 px-2">
                                                            {item.children?.map((subItem) => (

                                                                <li key={subItem.name} className='w-full'>
                                                                    <button className={classNames(
                                                                        currentPath.endsWith(subItem.href) ? 'bg-indigo-50 text-indigo-700 font-bold' : 'hover:bg-gray-50 hover:text-gray-700',
                                                                        'w-full'
                                                                    )}


                                                                    >
                                                                        <Link href={item.href! + subItem.href} className='block rounded-md py-2 px-2 text-sm w-full text-center'>

                                                                            {subItem.name}

                                                                        </Link>
                                                                    </button>
                                                                </li>

                                                            ))}
                                                        </ul>
                                                    )}
                                                </>
                                            )

                                        }
                                    </li>
                                ))}
                            </ul>
                        </li>

                    </ul>
                </nav>

            </div> */}
        </div>
    )
}

const MenuItem = ({ item, identifier }: { item: SideNavItem, identifier: string }) => {
    const currentPath = usePathname();
    const locale = useLocale();
    const [submenuStates, setSubmenuStates] = useAtom(disclosureOpenStateAtom);
    // Function to toggle submenu open/close state
    const toggleSubMenu = (id: string) => {
        setSubmenuStates((prevStates: any) => {
            // Ensure prevStates is always an object
            const safePrevStates = prevStates || {};
            return {
                ...safePrevStates,
                [id]: !safePrevStates[id], // Safely toggle the state for this identifier
            };
        });
    };
    // Determine if the submenu for this identifier is open
    const isSubMenuOpen = submenuStates ? submenuStates[identifier] : false;
    const isActiveLink = (href: string | undefined, currentPath: string, locale: string) => {
        const fullPath = href === '/' ? `/${locale}` : `/${locale}${href}`;
        return fullPath === currentPath;
    };

    return (
        <div className="">
            {item.children ? (
                <>
                    <button
                        onClick={() => toggleSubMenu(identifier)}
                        className={classNames(
                            currentPath.includes(item.href)
                                ? 'text-indigo-700 dark:text-indigo-400' : 'hover:bg-gray-50 hover:text-black',
                            'flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold'
                        )}
                    >
                        <item.icon className="h-6 w-6 shrink-0 " aria-hidden="true" />
                        {item.name}
                        <ChevronRightIcon
                            className={classNames(
                                isSubMenuOpen ? 'rotate-90 text-gray-500' : 'text-gray-400',
                                'ml-auto h-5 w-5 shrink-0',
                                item.current ? 'text-indigo-500' : ''
                            )}
                            aria-hidden="true"
                        />
                    </button>

                    {isSubMenuOpen && (
                        <ul className="mt-1 px-2">
                            {item.children?.map((subItem) => (

                                <li key={subItem.name} className='w-full'>
                                    <button className={classNames(
                                        currentPath.endsWith(subItem.href) ? 'bg-indigo-50 text-indigo-700 font-bold' : 'hover:bg-gray-50 hover:text-gray-700',
                                        'w-full'
                                    )}
                                    >
                                        <Link href={item.href! + subItem.href} className='block rounded-md py-2 px-2 text-sm w-full text-center'>
                                            {subItem.name}
                                        </Link>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </>
            ) : (

                <Link
                    href={item.href || '/'}
                    className={classNames(
                        isActiveLink(item.href, currentPath, locale) ? 'dark:text-indigo-400 text-indigo-700' : 'hover:bg-gray-50 hover:text-black',
                        'group flex justify-between gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold '
                    )}
                >
                    <div className='flex flex-row gap-x-3'>
                        <item.icon className="h-6 w-6 shrink-0 " aria-hidden="true" />
                        {item.name}
                    </div>
                    <div className='justify-end'>
                        {item.badge && (
                            <Badge variant="menubar" className="ml-2">
                                {1}
                            </Badge>

                        )}
                    </div>
                </Link>
            )}
        </div>
    );
};
