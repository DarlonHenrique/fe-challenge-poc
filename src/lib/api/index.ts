import type { CompanyAsset, Company, CompanyLocation } from "@/lib/api/types"
import mock from "./mock.json"

type CompanyWithMethods = Company & {
  getLocations: () => Promise<CompanyLocation[]>
  getAssets: () => Promise<CompanyAsset[]>
}

type ApiStrategy = {
  getCompanies: () => Promise<Company[]>
  getCompany: (id: string) => Promise<CompanyWithMethods>
}

type Strategy = "mock" | "realApi"

const createMockApi = (): ApiStrategy => {
  const getCompanies = () => Promise.resolve(mock.companies)

  const getCompany = (id: string): Promise<CompanyWithMethods> => {
    const company = mock.companies.find((company) => company.id === id)

    if (!company) {
      throw new Error(`Company with id ${id} not found`)
    }

    const { assets, locations } =
      mock[company.id as keyof Omit<typeof mock, "companies">]

    return Promise.resolve({
      ...company,
      assets,
      locations,
      getLocations: () => Promise.resolve(locations),
      getAssets: () => Promise.resolve(assets)
    })
  }

  return {
    getCompanies,
    getCompany
  }
}

const createRealApi = ({ baseUrl }: { baseUrl: string }): ApiStrategy => {
  const getCompanies = async () => {
    const response = await fetch(`${baseUrl}/companies`, {
      cache: "force-cache"
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return response.json() as Promise<Company[]>
  }

  const getLocations = async (companyId: string) => {
    const response = await fetch(
      `${baseUrl}/companies/${companyId}/locations`,
      {
        cache: "force-cache"
      }
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return response.json() as Promise<CompanyLocation[]>
  }

  const getAssets = async (companyId: string) => {
    const response = await fetch(`${baseUrl}/companies/${companyId}/assets`, {
      cache: "force-cache"
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return response.json() as Promise<CompanyAsset[]>
  }

  const getCompany = async (id: string) => {
    const companies = await getCompanies()

    const company = companies.find((company) => company.id === id)

    if (!company) {
      throw new Error(`Company with id ${id} not found`)
    }

    return {
      ...company,
      getLocations: () => getLocations(company.id),
      getAssets: () => getAssets(company.id)
    }
  }

  return {
    getCompanies,
    getCompany
  }
}

type CreateApiOptions = {
  strategy: Strategy
  baseUrl?: string
}

const createApi = ({
  strategy,
  baseUrl = "https://fake-api.tractian.com"
}: CreateApiOptions) => {
  const strategies: Record<Strategy, () => ApiStrategy> = {
    mock: () => createMockApi(),
    realApi: () => createRealApi({ baseUrl })
  }

  const createStrategy = strategies[strategy]

  const apiStrategy = createStrategy()

  return apiStrategy
}

const api = createApi({ strategy: "realApi" })

export { api, type CompanyWithMethods }
