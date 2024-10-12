import type { Company } from "@/lib/api/types"
import { getI18n } from "@/locales/server"
import Link from "next/link"

type BreadcrumbsProps = {
  company: Company
}

const Breadcrumbs = async ({ company }: BreadcrumbsProps) => {
  const t = await getI18n()

  return (
    <nav className="bg-accent/80 py-1 px-6 text-background flex gap-1 lowercase items-center">
      <Link href={"/"} className="hover:text-background text-background/80">
        {t("companies")}
      </Link>
      /
      <Link href={`/company/${company.id}`} className="font-bold">
        {company.name}
      </Link>
    </nav>
  )
}

export default Breadcrumbs
