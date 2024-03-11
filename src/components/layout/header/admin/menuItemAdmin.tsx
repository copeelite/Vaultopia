"use client"
"use client";
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { cn as classNames } from '@/lib/utils';
import { SideNavItem } from '@/components/layout/header/types';


import React, {useEffect} from 'react';

import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

import { accordionOpenStateAtom, accordionSelectedNameAtom } from "@/components/states/auth/isAccordionOpenAtom";
import { Badge } from "@/components/ui/badge"

import { useAtom } from "jotai";

export const MenuItemAdmin = ({ item, identifier }: { item: SideNavItem, identifier: string }) => {
    const currentPath = usePathname();
    const locale = useLocale();
    const [submenuStates, setSubmenuStates] = useAtom(accordionOpenStateAtom);
    const [selectedPathName, setSelectedPathName] = useAtom(accordionSelectedNameAtom);
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
    useEffect(() => {
        // Check if the link is active and update the state accordingly
        const fullPath = item.href === '/' ? `/${locale}` : `/${locale}${item.href}`;
        if(fullPath === currentPath){
          setSelectedPathName(item.name);
        }
      }, [currentPath, item.href, item.name, locale, setSelectedPathName]);
    // Determine if the submenu for this identifier is open
    const isSubMenuOpen = submenuStates ? submenuStates[identifier] : false;
    const isActiveLink = (href: string | undefined, currentPath: string, locale: string) => {
        const fullPath = href === '/' ? `/${locale}` : `/${locale}${href}`;
        // if(fullPath === currentPath){
        //     setSelectedPathName(item.name)
        // }
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
                    href={item.href}
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