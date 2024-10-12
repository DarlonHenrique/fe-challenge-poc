import type { CompanyAsset, CompanyLocation } from "@/lib/api/types"
import { useMemo } from "react"

type OptimizedThreeProps = {
  locations: CompanyLocation[]
  assets: CompanyAsset[]
}

const OptimizedThree = ({ locations, assets }: OptimizedThreeProps) => {
  const [rootLocations, rootAssets] = useMemo(() => {
    const rootLocations: CompanyLocation[] = []
    const rootAssets: CompanyAsset[] = []

    for (const location of locations) {
      if (!location.parentId) continue

      rootLocations.push(location)
    }

    for (const asset of assets) {
      if (!asset.parentId) continue

      rootAssets.push(asset)
    }

    return [rootLocations, rootAssets]
  }, [locations, assets])

  console.log(locations.length, assets.length)

  return (
    <ul className="max-h-full bg-orange-300 overflow-auto">
      {rootLocations.map((location) => (
        <Location locations={locations} location={location} key={location.id} />
      ))}
      {rootAssets.map((asset) => (
        <Asset asset={asset} key={asset.id} />
      ))}
    </ul>
  )
}

type RootLocationProps = {
  location: CompanyLocation
  locations: CompanyLocation[]
}

const Location = ({ location }: RootLocationProps) => {
  return <div>{location.name}</div>
}

type AssetProps = {
  asset: CompanyAsset
}

const Asset = ({ asset }: AssetProps) => {
  return <div>{asset.name}</div>
}

export default OptimizedThree
