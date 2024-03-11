

import { Root } from '@/components/layout/root/Root'
import NextIntlProvider from "@/components/providers/NextIntlProvider";
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from "next/navigation";
import SidebarNav from "@/components/layout/header/SidebarNav"
import { Toaster } from '@/components/ui/toaster'
import AuthProvider from '@/app/auth/Provider';

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`))
      .default;
  } catch (error) {
    notFound();
  }
  return (
    <NextIntlProvider
      locale={locale}
      messages={messages}
      timeZone="EST"
      now={new Date()}
    >
      {/* <AuthProvider> */}
        <main className='relative flex flex-col min-h-screen'>
          <div className='flex-grow flex-1'>
            {children}
            <Toaster />
          </div>
        </main>

      {/* </AuthProvider> */}
    </NextIntlProvider>

  );
}