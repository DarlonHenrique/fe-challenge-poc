export type Company = {
  id: string
  name: string
}

export type CompanyLocation = {
  id: string
  name: string
  parentId?: string | null
}

export type CompanyAsset = {
  id: string
  name: string
  locationId?: string | null
  parentId?: string | null
  sensorType?: string | null
  sensorId?: string | null
  status?: string | null
  gatewayId?: string | null
}
