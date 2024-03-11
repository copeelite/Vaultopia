'use client';
import {useLocale, useTranslations} from 'next-intl';
import {locales} from './config';

import clsx from 'clsx';
import { ChangeEvent, ReactNode, useTransition } from 'react';
import { useRouter, usePathname } from './navigation';
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
type Props = {
    children: ReactNode;
    defaultValue: string;
    label: string;
};

export default function LocaleSwitcherMobile() {
    const t = useTranslations('LocaleSwitcher');
    const currentLocale = useLocale();

    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();

    const toggleLocale = () => {
        const nextLocale = currentLocale === 'en' ? 'cn' : 'en';
        router.replace(pathname, { locale: nextLocale });
      };
    
      return (
        <button onClick={toggleLocale} style={{fontSize:'30px'}}>
          {t('locale', { locale: currentLocale === 'en' ? 'cn' : 'en' })}
        </button>
      );
    }