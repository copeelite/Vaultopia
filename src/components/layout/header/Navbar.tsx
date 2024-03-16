"use client";

import { Fragment, useState, useEffect, useRef } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Bell, Gift, CopyCheck, FolderClosed } from 'lucide-react';

import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { cn as classNames } from '@/lib/utils'
import ThemeSwitcher from '@/components/theme/ThemeSwitcher';
import LocaleSwitcher from '@/i18n/LocaleSwitcher';
import LocaleSwitcherMobile from '@/i18n/LocaleSwitcherMobile';

import { useTranslations } from 'next-intl';
import { ChevronRightIcon } from '@heroicons/react/20/solid'

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { useSession, getSession, signOut } from "next-auth/react"
import { cn } from '@/lib/utils'
import { LogOut } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area"
import SignOutButton from '@/components/form/SignOutButton';

import { useLocale } from 'next-intl';

import { usePathname } from 'next/navigation';
import { useAtom } from "jotai";
import { disclosureOpenStateAtom } from "@/components/states/isDisclosureOpenAtom";
import Image from 'next/image';

import { SIDENAV_ITEMS as navigation } from './constants';
import { SIDENAV_ITEMS_ADMIN as navigationAdmin } from './constants';

import { UserRoundCog } from 'lucide-react';
import { useCurentRole } from '@/hooks/auth/use-current-role'
import { MenuItemAdmin } from '@/components/layout/header/admin/menuItemAdmin';
import { Skeleton } from '@/components/ui/skeleton';


import { Accessibility } from 'lucide-react';
import { Ear } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import { HandHelping } from 'lucide-react';
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu"


const userNavigation = [
  { name: 'Your Profile', href: '#' },
  // { name: 'Settings', href: '#' },
  //{ name: 'Sign out', href: '#' },
]


export default function Navbar() {
  const currentPath = usePathname();
  const role = useCurentRole()

  const [subMenuOpen, setSubMenuOpen] = useAtom(disclosureOpenStateAtom);
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };
  const locale = useLocale();
  const isActiveLink = (href: string | undefined, currentPath: string, locale: string) => {
    const fullPath = href === '/' ? `/${locale}` : `/${locale}${href}`;
    return fullPath === currentPath;
  };

  const t = useTranslations('Navigation');
  const { status, data: session } = useSession();

  let user = {
    name: session?.user.name,
    email: session?.user.email,
    imageUrl: session?.user.image,
  }

  const adminAddedRef = useRef(false);
  const adminLink = {
    name: 'Admin',
    icon: UserRoundCog,
    current: false,
    href: '/admin',
  };
  const [position, setPosition] = useState("")

  return (
    <Disclosure as="header" className="shadow">
      {({ open }) => (
        <div className='lg:border-b-2 border-black dark:border-white
        '>
          <div className="mx-auto max-w-full px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8 dark:bg-gray-800 ">
            <div className="relative flex h-16 justify-between">
              <div className="relative z-10 flex px-2 lg:px-0">
                <div className="flex flex-shrink-0 items-center ">
                  <img
                    className="block h-12 w-auto"
                    src="/kleon.png"
                    alt="Kleon"
                  />
                  <h1 className='mx-2'>Vaultopia</h1>
                </div>
              </div>
              {/* Make here responsive */}
              <div className="relative z-0 lg:flex hidden flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
                <div className="w-full sm:max-w-xs">
                  {/* <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <MagnifyingGlassIcon className="h-5 w-5 text-indigo-500" aria-hidden="true" />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full rounded-md border-0  py-1.5 pl-10 pr-3  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Search"
                      type="search"
                    />
                  </div> */}
                </div>



                {/* <h1 className='underline mx-2 text-indigo-500'>{t('OtherMunus')}</h1> */}


                {/* <button
                  type="button"
                  className="flex-shrink-0 rounded-full  p-1  hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">View notifications</span>
                  <EyeOff className="h-6 w-6" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="flex-shrink-0 rounded-full  p-1  hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">View notifications</span>
                  <Ear className="h-6 w-6" aria-hidden="true" />
                </button>



                <button
                  type="button"
                  className="flex-shrink-0 rounded-full  p-1  hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">View notifications</span>
                  <HandHelping className="h-6 w-6" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="flex-shrink-0 rounded-full  p-1  hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">View notifications</span>
                  <Accessibility className="h-6 w-6" aria-hidden="true" />
                </button> */}

              </div>








              {/* Mobile menu button */}
              <div className="relative z-10 flex items-center lg:hidden ">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-indigo-300 hover:bg-gray-100 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6 font-bold" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6 font-bold" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {status == "loading" ? <Skeleton className='h-15 w-[10%]' /> :
                <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center ">
                  {/* Profile dropdown */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      {/* <Button variant="ghost" className="h-8 w-8 p-0"> */}
                      <div className="hover:bg-slate-800 dark:hover:bg-white p-1 text-orange-500 text-xl font-bold">
                        <span className="sr-only">Open menu</span>
                        <h1>Accessiblity</h1>
                      </div>
                      {/* </Button> */}
                    </DropdownMenuTrigger>

                    <DropdownMenuSeparator />
                    <DropdownMenuContent align="end">
                      {/* <DropdownMenuLabel>Actions</DropdownMenuLabel> */}
                      <DropdownMenuItem
                      >
                        <button
                          type="button"
                          className="flex-shrink-0 rounded-full  p-1  hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          <span className="sr-only">View notifications</span>
                          <EyeOff className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </DropdownMenuItem>
                      <DropdownMenuItem

                      >
                        <button
                          type="button"
                          className="flex-shrink-0 rounded-full  p-1  hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          <span className="sr-only">View notifications</span>
                          <Ear className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                      >
                        <button
                          type="button"
                          className="flex-shrink-0 rounded-full  p-1  hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          <span className="sr-only">View notifications</span>
                          <HandHelping className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <button
                          type="button"
                          className="flex-shrink-0 rounded-full  p-1  hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          <span className="sr-only">View notifications</span>
                          <Accessibility className="h-6 w-6" aria-hidden="true" />
                        </button>More Assistant
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <div>
                    <LocaleSwitcher />
                  </div>
                  <ThemeSwitcher />
                  <Menu as="div" className="relative ml-4 flex-shrink-0">

                    <div>

                      {
                        status == "unauthenticated" &&
                        <Link
                          href='/signin'
                          className="flex items-center   bg-yellow-50 dark:bg-black p-2 border-2 border-black dark:border-white hover:bg-indigo-400 dark:hover:bg-indigo-400">
                          Login
                        </Link>
                      }
                      {
                        status == "authenticated" &&
                        <Menu.Button className="flex rounded-full  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                          <span className="sr-only">Open user menu</span>
                          {session?.user?.image ?
                            (
                              <div className='relative h-10 w-10'>
                                <Image
                                  src={session.user.image}
                                  alt={session.user.name ?? ''}
                                  className='inline-block rounded-full'
                                  fill
                                />
                              </div>
                            ) : (
                              <span className='inline-block h-8 w-8 overflow-hidden rounded-full bg-stone-100'>
                                <svg
                                  className='h-full w-full text-stone-300'
                                  fill='currentColor'
                                  viewBox='0 0 24 24'
                                >
                                  <path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
                                </svg>
                              </span>
                            )}
                        </Menu.Button>
                      }
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bg-white dark:bg-slate-300">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <Link
                                href={item.href}
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-black dark:text-black'
                                )}
                              >
                                {item.name}
                              </Link>
                            )}
                          </Menu.Item>
                        ))}

                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'flex w-full px-4 py-2 text-sm text-black dark:text-black'
                              )}
                              // onClick={() => signOut({
                              //   callbackUrl: `${window.location.origin}/signin`,
                              // })}
                              onClick={() => signOut()}
                            >
                              <LogOut className='mr-3 h-5 w-5' aria-hidden="true" />
                              Sign Out
                            </button>
                          )}
                        </Menu.Item>

                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              }
            </div>

          </div>





          {/* mobile view*/}


          <Disclosure.Panel as="nav" className="lg:hidden overflow-y-scroll p-1 border-b-2 border-black dark:border-slate-200 dark:shadow-white bg-slate-200 dark:bg-black w-full z-20">
            <ScrollArea className="h-96 rounded-md">
              <div className="space-y-1 px-4 pb-3 pt-2 ">

                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      {!item.children ? (
                        <Link
                          href={item.href}
                          className={classNames(
                            isActiveLink(item.href, currentPath, locale) ? 'text-indigo-700 dark:text-indigo-400' : 'hover:bg-gray-50 hover:text-black',
                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold '
                          )}
                        >
                          <item.icon className="h-6 w-6 shrink-0 " aria-hidden="true" />
                          {item.name}
                        </Link>
                      )
                        :


                        //With children
                        (
                          <Disclosure as="div" onClick={toggleSubMenu}>
                            {({ open }) => (
                              <>
                                <Disclosure.Button
                                  className={classNames(
                                    isActiveLink(item.href, currentPath, locale) ? 'text-indigo-500 dark:text-indigo-400' : 'hover:bg-gray-50 hover:text-black',
                                    'flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold'
                                  )}
                                >
                                  <item.icon className="h-6 w-6 shrink-0 " aria-hidden="true" />
                                  {item.name}
                                  <ChevronRightIcon
                                    className={classNames(
                                      open ? 'rotate-90 text-gray-500' : 'text-gray-400',
                                      'ml-auto h-5 w-5 shrink-0'
                                    )}
                                    aria-hidden="true"
                                  />
                                </Disclosure.Button>

                                <Disclosure.Panel as="ul" className="mt-1 px-2">
                                  {item.children?.map((subItem) => (
                                    <li key={subItem.name} className='w-full'>
                                      <div className={classNames(
                                        currentPath.endsWith(subItem.href) ? 'bg-indigo-50 text-indigo-700 font-bold' : 'hover:bg-gray-50 hover:text-gray-700',
                                        'w-full'
                                      )}
                                      >
                                        <Link href={item.href! + subItem.href} className='block rounded-md py-2 px-2 text-sm w-full text-center'>

                                          {subItem.name}

                                        </Link>
                                      </div>
                                    </li>
                                  ))}
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>
                        )}
                    </li>
                  ))}

                  <li>
                    <div role="list" className="space-y-1">
                      {role == 'ADMIN' &&
                        navigationAdmin.map((item, idx) => {
                          return <MenuItemAdmin key={idx} item={item} identifier={item.name + role} />;
                        })
                      }
                    </div>
                  </li>

                </ul>

              </div>


              <div className="border-t border-gray-200 pb-3 pt-4 space-y-5">
                <div className='flex items-center justify-center'>
                  {
                    status == "unauthenticated" &&
                    <Link
                      href='/signin'
                      className="flex items-center bg-yellow-50 dark:bg-black justify-center p-2 border-2 w-20">
                      Login
                    </Link>
                  }
                </div>
                {status == "authenticated" &&
                  <>
                    <div className="flex items-center px-4">
                      <div className="flex-shrink-0">
                        {session?.user?.image ?
                          (
                            <div className='relative h-10 w-10'>
                              <Image
                                src={session.user.image}
                                alt={session.user.name ?? ''}
                                className='inline-block rounded-full'
                                fill
                              />
                            </div>
                          ) : (
                            <span className='inline-block h-8 w-8 overflow-hidden rounded-full bg-stone-100'>
                              <svg
                                className='h-full w-full text-stone-300'
                                fill='currentColor'
                                viewBox='0 0 24 24'
                              >
                                <path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
                              </svg>
                            </span>
                          )}
                      </div>
                      <div className="ml-3">
                        <div className="text-base font-medium ">{user.name}</div>
                        <div className="text-sm font-medium ">{user.email}</div>
                      </div>

                      <button
                        type="button"
                        className="ml-auto flex-shrink-0 rounded-full  p-1  hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                      <div className='mx-5'><SignOutButton /></div>
                    </div>
                    <div className="mt-3 space-y-1 px-2">
                      {userNavigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block rounded-md px-3 py-2 text-base font-medium  hover:bg-gray-50 hover:text-gray-900"
                        >
                          {item.name}
                        </Link>

                      ))}
                    </div>
                  </>

                }
                
                <div className='mx-5 flex flex-row justify-between'>
                  
                  <ThemeSwitcher />
                  <LocaleSwitcherMobile />
                </div>
              </div>
            </ScrollArea>

          </Disclosure.Panel>

        </div>
      )}
    </Disclosure>
  )
}