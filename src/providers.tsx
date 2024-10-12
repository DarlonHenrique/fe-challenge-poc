"use client"

import { I18nProviderClient } from "@/locales/client"

type ProviderProps = {
  children: React.ReactNode
  locale: string
}

const Providers = ({ children, locale }: ProviderProps) => {
  return <I18nProviderClient locale={locale}>{children}</I18nProviderClient>
}

export { Providers }
