"use client"

import { Button } from "@/components/button"
import { Icons } from "@/components/icons"
import { cn } from "@/lib/utils"
import { useChangeLocale, useCurrentLocale } from "@/locales/client"

const locales = ["en", "br"] as const

const Languages = () => {
  const currentLocale = useCurrentLocale()
  const changeLocale = useChangeLocale()

  return (
    <div className="flex flex-row gap-2 items-center">
      <Icons.Language className="text-background size-7" />
      <ul className="flex bg-white/50 rounded-sm overflow-hidden">
        {locales.map((locale) => (
          <Button
            variant="inverted"
            key={locale}
            className={cn(
              "uppercase aspect-square p-2 rounded-none",
              locale === currentLocale ? "bg-white" : "bg-transparent"
            )}
            onClick={() => changeLocale(locale)}
          >
            {locale}
          </Button>
        ))}
      </ul>
    </div>
  )
}

export { Languages }
