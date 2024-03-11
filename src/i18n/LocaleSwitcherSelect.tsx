'use client';

import clsx from 'clsx';
import {ChangeEvent, ReactNode, useTransition} from 'react';
import {useRouter, usePathname} from './navigation';
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};
import { Button } from "@/components/ui/button"

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(pathname, {locale: nextLocale});
    });
  }

  return (
    <label className={`relative block cursor-pointer  ${isPending ? 'opacity-50' : 'opacity-100'}`}>
      <span className="sr-only">{label}</span>
      <select
        className="text-black form-select appearance-none block w-full pr-6 pl-2 py-2 border border-gray-300 text-base leading-6  shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-full transition ease-in-out duration-150"
        defaultValue={defaultValue}
        onChange={onSelectChange}
        disabled={isPending}
      >
        {children}
      </select>
      {/* <div className="pointer-events-none absolute inset-y-0 flex items-center right-1">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </div> */}
    </label>
  );
}
