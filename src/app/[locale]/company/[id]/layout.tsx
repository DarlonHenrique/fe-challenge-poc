import Breadcrumbs from "@/components/breadcrumbs"
import { api } from "@/lib/api"
import { notFound } from "next/navigation"
import type { ReactNode } from "react"

type LayoutProps = {
  children: ReactNode
  params: {
    id: string
  }
}

const Layout = async ({ children, params: { id } }: LayoutProps) => {
  const company = await api.getCompany(id)

  if (!company) {
    notFound()
  }

  return (
    <div className="flex flex-grow flex-col">
      <Breadcrumbs company={company} />
      {children}
    </div>
  )
}

export const generateStaticParams = async () => {
  const companies = await api.getCompanies()

  return companies.map((company) => ({
    id: company.id
  }))
}

export default Layout
