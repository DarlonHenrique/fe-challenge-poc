import { buttonVariants } from "@/components/button"
import { Icons } from "@/components/icons"
import { api } from "@/lib/api"
import { cn } from "@/lib/utils"
import { getI18n } from "@/locales/server"
import { setStaticParamsLocale } from "next-international/server"
import Link from "next/link"

type PageProps = {
  params: {
    locale: string
  }
}

const Page = async ({ params: { locale } }: PageProps) => {
  setStaticParamsLocale(locale)

  const t = await getI18n()
  const companies = await api.getCompanies()

  return (
    <main className="flex flex-grow flex-col items-center justify-center gap-6 p-6">
      <h1 className="font-bold text-2xl sm:text-4xl">{t("select_company")}</h1>
      <ul className="flex flex-col sm:flex-row w-full gap-4 sm:max-w-4xl flex-grow sm:flex-grow-0">
        {companies.map((company) => (
          <Link
            key={company.id}
            href={`/company/${company.id}`}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "gap-2 flex font-semibold text-3xl flex-col h-1/3 sm:h-auto sm:aspect-square w-full my-auto"
            )}
            prefetch
          >
            <Icons.Company className="size-12" />
            {company.name}
          </Link>
        ))}
      </ul>
    </main>
  )
}

export default Page
