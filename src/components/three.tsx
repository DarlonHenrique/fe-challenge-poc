import { Icons } from "@/components/icons"
import { Location } from "@/components/location"
import type { CompanyWithMethods } from "@/lib/api"
import type { CompanyAsset, CompanyLocation } from "@/lib/api/types"
import { cn } from "@/lib/utils"
import { useMemo } from "react"

type ThreeProps = {
  company: CompanyWithMethods
}

const Three = async ({ company }: ThreeProps) => {
  const assets = await company.getAssets()
  const locations = await company.getLocations()

  const rootLocations: CompanyLocation[] = []
  const rootAssets: CompanyAsset[] = []

  for (const location of locations.slice(0, 50)) {
    if (!location.parentId) continue

    rootLocations.push(location)
  }

  for (const asset of assets) {
    if (!asset.parentId) continue

    rootAssets.push(asset)
  }

  return (
    <ul className="flex flex-col gap-4">
      {rootLocations.map((location) => (
        <Location location={location} locations={locations} key={location.id} />
      ))}
      {/* {rootAssets.map((asset) => (
        <Asset
          asset={asset}
          assetsByParentId={assetsByParentId}
          key={asset.id}
        />
      ))} */}
    </ul>
  )
}

type AssetProps = {
  asset: CompanyAsset
  assetsByParentId: Record<string, CompanyAsset[]>
}

const Asset = ({ asset, assetsByParentId }: AssetProps) => {
  const { sensorType, name, id } = asset

  const subAssets = useMemo(
    () => assetsByParentId[id] || [],
    [id, assetsByParentId]
  )

  return (
    <li>
      <span className={cn("flex gap-2 items-center")}>
        {sensorType ? (
          <Icons.Component className="size-6" />
        ) : (
          <Icons.Asset className="size-6" />
        )}

        {name}
      </span>
      <div className="pl-4">
        <ul className="pl-4">
          {subAssets.map((subAsset) => (
            <Asset
              asset={subAsset}
              assetsByParentId={assetsByParentId}
              key={subAsset.id}
            />
          ))}
        </ul>
      </div>
    </li>
  )
}

export { Three }
