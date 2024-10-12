import { Three } from "@/components/three"
import { api } from "@/lib/api"
import type { Company } from "@/lib/api/types"
import { setStaticParamsLocale } from "next-international/server"

type PageProps = {
  params: {
    id: Company["id"]
    locale: string
  }
}

const Page = async ({ params: { id, locale } }: PageProps) => {
  setStaticParamsLocale(locale)

  const company = await api.getCompany(id)

  return (
    <main className="flex flex-grow h-full overflow-auto">
      <Three company={company} />
    </main>
  )
}
export default Page
